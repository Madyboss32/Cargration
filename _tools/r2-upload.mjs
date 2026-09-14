#!/usr/bin/env node
// Download car images, convert to webp, upload to Cloudflare R2.
// Resumable: objects already present in the bucket are skipped (HEAD check).
// Config via env: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET
// Flags: --concurrency N, --limit N, --max-minutes N, --lead-only, --quality N, --max-short-side N
import fs from 'fs'
import path from 'path'
import process from 'process'
import sharp from 'sharp'
import { S3Client, HeadObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'

const ROOT = process.cwd()
const DATA = path.join(ROOT, 'src', 'data', 'cars.generated.json')
const SRC_PREFIX = 'https://www.eautoexport.com/'
const FAILURES = path.join(ROOT, '_tools', 'r2-failures.json')

function loadDotEnv() {
  const envPath = path.join(ROOT, '.env')
  if (!fs.existsSync(envPath)) return
  const text = fs.readFileSync(envPath, 'utf8')
  for (const line of text.split(/\r?\n/)) {
    const m = line.trim().match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/)
    if (!m) continue
    const key = m[1]
    let value = m[2].trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (process.env[key] === undefined) process.env[key] = value
  }
}
loadDotEnv()

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY
const R2_BUCKET = process.env.R2_BUCKET

const args = process.argv.slice(2)
const argOf = (name, dflt) => {
  const i = args.indexOf(name)
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt
}
const CONCURRENCY = parseInt(argOf('--concurrency', '10'), 10)
const LIMIT = parseInt(argOf('--limit', '0'), 10)
const OFFSET = parseInt(argOf('--offset', '0'), 10)
const SHARD = parseInt(argOf('--shard', '0'), 10)
const SHARD_COUNT = parseInt(argOf('--shard-count', '1'), 10)
const MAX_MINUTES = parseFloat(argOf('--max-minutes', '0'))
const LEAD_ONLY = args.includes('--lead-only')
const QUALITY = parseInt(argOf('--quality', '80'), 10)
const MAX_DIM = 8000
const DOWNLOAD_TIMEOUT_MS = 45000
const RETRIES = 3

function normUrl(u) {
  let x = u
  if (x.startsWith(SRC_PREFIX + 'http')) x = x.slice(SRC_PREFIX.length)
  try {
    const parsed = new URL(x)
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') return x
  } catch {}
  return null
}

// Object key mirrors the local mirror layout: {host}{pathname}, extension .webp
function keyFor(u) {
  const parsed = new URL(u)
  let pathname = decodeURIComponent(parsed.pathname)
  if (pathname.endsWith('/')) pathname += 'index.webp'
  else pathname = pathname.replace(/\.(jpe?g|png)$/i, '.webp')
  return `${parsed.host}${pathname}`
}

function collectUrls() {
  const cars = JSON.parse(fs.readFileSync(DATA, 'utf8'))
  const urls = new Set()
  for (const c of cars) {
    const imgs = (LEAD_ONLY ? (c.img || []).slice(0, 1) : c.img || [])
    for (const raw of imgs) {
      if (raw.includes('.baiduyun.p.downloading')) continue
      const u = normUrl(raw)
      if (u) urls.add(u)
    }
  }
  return [...urls]
}

function checkEnv() {
  const missing = []
  if (!R2_ACCOUNT_ID) missing.push('R2_ACCOUNT_ID')
  if (!R2_ACCESS_KEY_ID) missing.push('R2_ACCESS_KEY_ID')
  if (!R2_SECRET_ACCESS_KEY) missing.push('R2_SECRET_ACCESS_KEY')
  if (!R2_BUCKET) missing.push('R2_BUCKET')
  if (missing.length) {
    console.error(`[r2] missing env: ${missing.join(', ')}`)
    process.exit(1)
  }
}

function makeClient() {
  return new S3Client({
    region: 'auto',
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
  })
}

function isTransient(e) {
  if (e?.$retryable === true) return true
  const name = e?.name || ''
  if (name.startsWith('getaddrinfo') || name.includes('ENOTFOUND')) return true
  if (name.includes('ECONNRESET') || name.includes('ECONNREFUSED') || name.includes('EPIPE')) return true
  if (name.includes('Timeout') || name.includes('timeout') || name.includes('Throttling') || name.includes('SlowDown')) return true
  if (e?.$metadata?.httpStatusCode === 429 || e?.$metadata?.httpStatusCode === 503 || e?.$metadata?.httpStatusCode === 502) return true
  return false
}

async function withRetry(fn) {
  // DNS blips can last several seconds; retry longer and exponentially so we
  // ride out transient resolution failures instead of dropping the image.
  const maxTries = 12
  for (let attempt = 1; attempt <= maxTries; attempt++) {
    try {
      return await fn()
    } catch (e) {
      if (!isTransient(e) || attempt === maxTries) throw e
      const delay = Math.min(300 * Math.pow(2, attempt - 1), 15000)
      await new Promise((r) => setTimeout(r, delay))
    }
  }
}

async function existsInBucket(client, key) {
  try {
    await withRetry(() => client.send(new HeadObjectCommand({ Bucket: R2_BUCKET, Key: key })))
    return true
  } catch (e) {
    if (e?.$metadata?.httpStatusCode === 404) return false
    if (['NotFound', 'NoSuchKey'].includes(e?.name)) return false
    throw e
  }
}

async function putObject(client, key, body) {
  await withRetry(() => client.send(new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
    Body: body,
    ContentType: 'image/webp',
    CacheControl: 'public, max-age=31536000, immutable',
  })))
}

async function download(u) {
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    const ac = new AbortController()
    const timer = setTimeout(() => ac.abort(), DOWNLOAD_TIMEOUT_MS)
    try {
      const res = await fetch(u, { signal: ac.signal, redirect: 'follow' })
      clearTimeout(timer)
      if (res.status === 404 || res.status === 410) return { ok: false, permanent: true, msg: `HTTP ${res.status}` }
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = Buffer.from(await res.arrayBuffer())
      if (buf.length === 0) throw new Error('empty body')
      return { ok: true, buf }
    } catch (err) {
      clearTimeout(timer)
      if (attempt === RETRIES) return { ok: false, permanent: false, msg: String(err.message) }
      await new Promise((r) => setTimeout(r, 800 * attempt))
    }
  }
}

async function downloadAndUpload(client, u) {
  const key = keyFor(u)
  try {
    if (await existsInBucket(client, key)) return { ok: true, skipped: true }
  } catch (err) {
    const detail = `${err?.name}: ${err?.message || ''}` +
      (err?.$metadata?.httpStatusCode ? ` http=${err.$metadata.httpStatusCode}` : '') +
      (` ${err?.code || ''}`).trimEnd()
    return { ok: false, permanent: false, msg: `head: ${detail}` }
  }

  const dl = await download(u)
  if (!dl.ok) return { ok: false, permanent: dl.permanent, msg: dl.msg }

  let webp
  try {
    let pipeline = sharp(dl.buf).rotate()
    const meta = await sharp(dl.buf).metadata()
    const w = meta.width || 0
    const h = meta.height || 0
    if (w > MAX_DIM || h > MAX_DIM) {
      pipeline = pipeline.resize({ width: MAX_DIM, height: MAX_DIM, fit: 'inside', withoutEnlargement: true })
    }
    webp = await pipeline.webp({
      quality: QUALITY,
      effort: 4,
      smartSubsample: true,
      reductionEffort: 4,
    }).toBuffer()
  } catch (err) {
    return { ok: false, permanent: true, msg: `sharp: ${err.message}` }
  }

  try {
    await putObject(client, key, webp)
    return { ok: true, skipped: false }
  } catch (err) {
    return { ok: false, permanent: true, msg: `put: ${err.message}` }
  }
}

async function main() {
  checkEnv()
  console.log(`[r2] collecting URLs from ${DATA}${LEAD_ONLY ? ' (lead images only)' : ''}`)
  const urls = collectUrls()
  console.log(`[r2] unique remote URLs: ${urls.length}`)
  const deadline = MAX_MINUTES > 0 ? Date.now() + MAX_MINUTES * 60_000 : Infinity
  let pending = urls
  if (SHARD_COUNT > 1) {
    const dst = []
    for (let i = SHARD; i < pending.length; i += SHARD_COUNT) dst.push(pending[i])
    pending = dst
  }
  if (OFFSET > 0 && pending.length > OFFSET) pending = pending.slice(OFFSET)
  if (LIMIT > 0 && pending.length > LIMIT) pending = pending.slice(0, LIMIT)
  console.log(`[r2] to ensure present: ${pending.length} (shard ${SHARD}/${SHARD_COUNT}, offset ${OFFSET}, concurrency ${CONCURRENCY}, q${QUALITY})`)

  const client = makeClient()
  let done = 0, ok = 0, skipped = 0, failed = 0
  const failures = []
  const startedAt = Date.now()
  const queue = [...pending]

  async function worker() {
    while (queue.length) {
      if (Date.now() > deadline) { queue.length = 0; break }
      const u = queue.shift()
      const r = await downloadAndUpload(client, u)
      done++
      if (r.ok) { ok++; if (r.skipped) skipped++ }
      else { failed++; failures.push({ url: u, reason: r.msg }) }
      if (done % 100 === 0 || done === pending.length) {
        const rate = done / ((Date.now() - startedAt) / 1000)
        const newRate = (ok - skipped) / ((Date.now() - startedAt) / 1000)
        const etaMin = ((pending.length - done) / Math.max(rate, 0.1) / 60).toFixed(1)
        console.log(`[r2] ${done}/${pending.length} ok=${ok} skipped=${skipped} new=${ok - skipped} fail=${failed} rate=${rate.toFixed(1)}/s new=${newRate.toFixed(1)}/s eta=${etaMin}min`)
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()))

  fs.writeFileSync(FAILURES, JSON.stringify(failures, null, 1))
  console.log(`[r2] DONE ok=${ok} (${skipped} already present) failed=${failed} (failures: ${FAILURES})`)
  if (failed > 0 && failed < 300) failures.slice(0, 30).forEach((f) => console.log(`  FAIL ${f.reason}: ${f.url}`))
}

main().catch((e) => { console.error('[r2] fatal:', e); process.exit(1) })