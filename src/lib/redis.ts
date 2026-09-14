import Redis from 'ioredis'

const REDIS_URL = process.env.REDIS_URL || ''

let client: Redis | null = null
let disabledUntil = 0
let failures = 0

const BREAK_THRESHOLD = 3
const COOLDOWN_MS = 60_000

function getClient(): Redis | null {
  if (!REDIS_URL || Date.now() < disabledUntil) return null
  if (client) return client
  try {
    client = new Redis(REDIS_URL, {
      connectTimeout: 3000,
      maxRetriesPerRequest: 1,
      retryStrategy: (times) => Math.min(times * 500, 5000),
    })
    client.on('error', () => {})
    return client
  } catch {
    client = null
    disabledUntil = Date.now() + COOLDOWN_MS
    return null
  }
}

function tripBreaker() {
  if (++failures >= BREAK_THRESHOLD) {
    disabledUntil = Date.now() + COOLDOWN_MS
    failures = 0
  }
}

function resetBreaker() {
  failures = 0
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  const c = getClient()
  if (!c) return null
  try {
    const raw = await c.get(key)
    resetBreaker()
    return raw ? (JSON.parse(raw) as T) : null
  } catch {
    tripBreaker()
    return null
  }
}

export async function cacheSet(key: string, value: unknown, ttlSeconds: number): Promise<void> {
  const c = getClient()
  if (!c) return
  try {
    await c.set(key, JSON.stringify(value), 'EX', ttlSeconds)
    resetBreaker()
  } catch {
    tripBreaker()
  }
}

/**
 * Fixed-window rate limiter.
 * Returns true if over the limit, false if allowed, null when Redis is
 * unavailable (caller should fall back to an in-memory strategy).
 */
export async function rateLimit(key: string, limit: number, windowSeconds: number): Promise<boolean | null> {
  const c = getClient()
  if (!c) return null
  try {
    const k = `cargration:rl:${key}`
    const count = await c.incr(k)
    if (count === 1) await c.expire(k, windowSeconds)
    resetBreaker()
    return count > limit
  } catch {
    tripBreaker()
    return null
  }
}
