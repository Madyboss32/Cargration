#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import process from 'process'

const ROOT = process.cwd()
const DATA = path.join(ROOT, 'src', 'data', 'cars.generated.json')
const OUT = path.join(ROOT, 'public', 'car-img')
const SRC_PREFIX = 'https://www.eautoexport.com/'
const FAILURES = path.join(ROOT, '_tools', 'mirror-failures.json')

const args = process.argv.slice(2)
const argOf = (name, dflt) => {
  const i = args.indexOf(name)
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt
}
const CONCURRENCY = parseInt(argOf('--concurrency', '12'), 10)
const LIMIT = parseInt(argOf('--limit', '0'), 10)
const MAX_MINUTES = parseFloat(argOf('--max-minutes', '0'))
const LEAD_ONLY = args.includes('--lead-only')
const TIMEOUT_MS = 45000
const RETRIES = 3
// A local .webp twin means the asset is already mirrored (converted in place),
// so don't re-download the raster original over it.
const RASTER_RE = /\.(jpe?g|png)$/i

function normUrl(u) {
  let x = u
  if (x.startsWith(SRC_PREFIX + 'http')) x = x.slice(SRC_PREFIX.length)
  try {
    const parsed = new URL(x)
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') return x
  } catch {}
  return null
}

function collectUrls() {
  const cars = JSON.parse(fs.readFileSync(DATA, 'utf8'))
  const urls = new Set()
  for (const c of cars) {
    const imgs = (LEAD_ONLY ? (c.img || []).slice(0, 1) : c.img || [])
    for (const raw of imgs) {
      const u = normUrl(raw)
      if (u) urls.add(u)
    }
  }
  return [...urls]
}

function localPathFor(u) {
  const parsed = new URL(u)
  return path.join(OUT, parsed.host, decodeURIComponent(parsed.pathname))
}

async function fetchOne(u, dest) {
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    const ac = new AbortController()
    const timer = setTimeout(() => ac.abort(), TIMEOUT_MS)
    try {
      const res = await fetch(u, { signal: ac.signal, redirect: 'follow' })
      clearTimeout(timer)
      if (res.status === 404 || res.status === 410) return { ok: false, status: res.status, permanent: true }
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const type = res.headers.get('content-type') || ''
      const buf = Buffer.from(await res.arrayBuffer())
      if (!type.startsWith('image/') && buf.length < 5000) throw new Error(`not an image (${type})`)
      if (buf.length === 0) throw new Error('empty body')
      fs.mkdirSync(path.dirname(dest), { recursive: true })
      const part = dest + '.part'
      fs.writeFileSync(part, buf)
      fs.renameSync(part, dest)
      return { ok: true }
    } catch (err) {
      clearTimeout(timer)
      if (attempt === RETRIES) return { ok: false, status: err.message }
      await new Promise((r) => setTimeout(r, 800 * attempt))
    }
  }
}

async function main() {
  console.log(`[mirror] collecting URLs from ${DATA}${LEAD_ONLY ? ' (lead images only)' : ''}`)
  let urls = collectUrls()
  console.log(`[mirror] unique remote URLs: ${urls.length}`)
  const deadline = MAX_MINUTES > 0 ? Date.now() + MAX_MINUTES * 60_000 : Infinity

  let skipped = 0
  const pending = []
  for (const u of urls) {
    const dest = localPathFor(u)
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) { skipped++; continue }
    const webpDest = dest.replace(RASTER_RE, '.webp')
    if (fs.existsSync(webpDest) && fs.statSync(webpDest).size > 0) { skipped++; continue }
    pending.push([u, dest])
  }
  if (LIMIT > 0 && pending.length > LIMIT) pending.length = LIMIT
  console.log(`[mirror] already mirrored: ${skipped}, to download now: ${pending.length} (concurrency ${CONCURRENCY})`)

  let done = 0, ok = 0, failed = 0
  const failures = []
  const startedAt = Date.now()

  async function worker(queue) {
    while (queue.length) {
      if (Date.now() > deadline) { queue.length = 0; break }
      const [u, dest] = queue.shift()
      const r = await fetchOne(u, dest)
      done++
      if (r.ok) ok++
      else {
        failed++
        failures.push({ url: u, reason: String(r.status) })
        if (r.permanent && fs.existsSync(dest + '.part')) fs.unlinkSync(dest + '.part')
      }
      if (done % 50 === 0 || done === pending.length) {
        const rate = (done / ((Date.now() - startedAt) / 1000)).toFixed(1)
        const etaMin = ((pending.length - done) / Math.max(rate, 0.1) / 60).toFixed(1)
        console.log(`[mirror] ${done}/${pending.length} ok=${ok} fail=${failed} rate=${rate}/s eta=${etaMin}min`)
      }
    }
  }

  const queue = [...pending]
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)))

  fs.writeFileSync(FAILURES, JSON.stringify(failures, null, 1))
  console.log(`[mirror] DONE ok=${ok} failed=${failed} (failures list: ${FAILURES})`)
  if (failed > 0 && failed < 200) failures.slice(0, 20).forEach((f) => console.log(`  FAIL ${f.reason}: ${f.url}`))
}

main().catch((e) => { console.error('[mirror] fatal:', e); process.exit(1) })
