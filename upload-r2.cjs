/**
 * Bulk-upload car images to Cloudflare R2.
 *
 * Usage:
 *   node upload-r2.cjs                  # resume from last checkpoint
 *   node upload-r2.cjs --dry-run        # show what would be uploaded
 *   node upload-r2.cjs --concurrency 10 # custom parallel downloads
 *
 * Progress is tracked via src/data/r2-present.json — the script reads it
 * at startup, skips already-present keys, and appends newly-uploaded keys
 * after every batch.  Re-running is always safe.
 */

const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')
const { S3Client, PutObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3')

// ── Config ────────────────────────────────────────────────────────────────────
const ROOT = process.cwd()
const CARS_FILE = path.join(ROOT, 'src', 'data', 'cars.generated.json')
const R2_PRESENT = path.join(ROOT, 'src', 'data', 'r2-present.json')
const PROGRESS_FILE = path.join(ROOT, 'src', 'data', 'r2-upload-progress.json')

const ACCOUNT_ID  = process.env.R2_ACCOUNT_ID          || '30bd2bf9412bc32edfc6a37d993bfae3'
const ACCESS_KEY  = process.env.R2_ACCESS_KEY_ID        || '0dffd473b578cee0b6e9e41c9dd72a64'
const SECRET_KEY  = process.env.R2_SECRET_ACCESS_KEY    || '3cfe7b1004caa4c60525266f7099a4e97799b4b2e99202432d91078f1257509c'
const BUCKET      = process.env.R2_BUCKET               || 'cargration'
const ENDPOINT    = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`

const BATCH_SIZE = 100          // save progress every N uploads
const CONCURRENCY = parseInt(process.argv.find((_, i, a) => a[i - 1] === '--concurrency') || '20', 10)
const DRY_RUN = process.argv.includes('--dry-run')

// ── S3 client ─────────────────────────────────────────────────────────────────
const s3 = new S3Client({
  region: 'auto',
  endpoint: ENDPOINT,
  credentials: { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY },
  requestHandler: { httpOptions: { timeout: 30_000, connectTimeout: 10_000 } },
})

// ── Helpers ───────────────────────────────────────────────────────────────────
const IMG_PREFIX = 'https://www.eautoexport.com/'

function stripPrefix(u) {
  return u.startsWith(IMG_PREFIX + 'http') ? u.slice(IMG_PREFIX.length) : u
}

function r2KeyForUrl(u) {
  const parsed = new URL(stripPrefix(u))
  let pathname = decodeURIComponent(parsed.pathname)
  if (pathname.endsWith('/')) pathname += 'index.webp'
  else pathname = pathname.replace(/\.(jpe?g|png)$/i, '.webp')
  return parsed.host + pathname
}

function fetchBuffer(url, redirects = 0) {
  if (redirects > 5) return Promise.reject(new Error('Too many redirects'))
  const mod = url.startsWith('https') ? https : http
  return new Promise((resolve, reject) => {
    const req = mod.get(url, { timeout: 20_000, headers: { 'User-Agent': 'CargrationBot/1.0' } }, (res) => {
      if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
        return fetchBuffer(res.headers.location, redirects + 1).then(resolve, reject)
      }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode} for ${url}`)) }
      const chunks = []
      res.on('data', (c) => chunks.push(c))
      res.on('end', () => resolve(Buffer.concat(chunks)))
      res.on('error', reject)
    })
    req.on('error', reject)
    req.on('timeout', () => { req.destroy(); reject(new Error(`Timeout for ${url}`)) })
  })
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)) }

// ── Load data ─────────────────────────────────────────────────────────────────
console.log('Loading car data...')
const cars = JSON.parse(fs.readFileSync(CARS_FILE, 'utf8'))
const r2Present = new Set(JSON.parse(fs.readFileSync(R2_PRESENT, 'utf8')))

// Build list of unique images to upload
const FIRST_ONLY = process.argv.includes('--first-only')
const imgUrls = new Set()
for (const car of cars) {
  if (Array.isArray(car.img)) {
    for (const u of FIRST_ONLY ? car.img.slice(0, 1) : car.img) imgUrls.add(u)
  }
}
if (FIRST_ONLY) console.log('FIRST-ONLY mode: only the card image (img[0]) of each car.')

const toUpload = []
for (const url of imgUrls) {
  try {
    const key = r2KeyForUrl(url)
    if (!r2Present.has(key)) toUpload.push({ url, key })
  } catch { /* skip malformed URLs */ }
}

console.log(`Total unique images: ${imgUrls.size}`)
console.log(`Already in R2: ${imgUrls.size - toUpload.length}`)
console.log(`To upload: ${toUpload.length}`)
console.log(`Concurrency: ${CONCURRENCY}`)

if (DRY_RUN) {
  console.log('\n[DRY RUN] Would upload first 10:')
  toUpload.slice(0, 10).forEach(({ url, key }) => console.log(`  ${key}`))
  process.exit(0)
}

if (toUpload.length === 0) {
  console.log('\nAll images already in R2. Nothing to do.')
  process.exit(0)
}

// ── Upload loop ───────────────────────────────────────────────────────────────
let uploaded = 0
let failed = 0
let skipped = 0
const failedKeys = []
const startTime = Date.now()

async function uploadOne({ url, key }) {
  try {
    const buf = await fetchBuffer(stripPrefix(url))
    await s3.send(new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: buf,
      ContentType: 'image/webp',
      CacheControl: 'public, max-age=31536000, immutable',
    }))
    uploaded++
    r2Present.add(key)
  } catch (err) {
    failed++
    failedKeys.push({ key, url: stripPrefix(url), error: err.message })
  }
}

function saveProgress() {
  // Save updated r2-present.json
  fs.writeFileSync(R2_PRESENT, JSON.stringify([...r2Present], null, 0))
  // Save checkpoint
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify({
    uploaded, failed, skipped,
    total: toUpload.length,
    timestamp: new Date().toISOString(),
  }))
}

function printProgress(batchNum) {
  const elapsed = (Date.now() - startTime) / 1000
  const rate = uploaded / elapsed
  const pct = ((uploaded + failed) / toUpload.length * 100).toFixed(1)
  const eta = rate > 0 ? Math.ceil((toUpload.length - uploaded - failed) / rate) : '?'
  const etaMin = typeof eta === 'number' ? `${Math.floor(eta / 60)}m${eta % 60}s` : '?'
  console.log(`[${pct}%] batch ${batchNum} | +${uploaded} ok, ${failed} fail | ${rate.toFixed(1)} img/s | ETA ${etaMin}`)
}

async function run() {
  const totalBatches = Math.ceil(toUpload.length / BATCH_SIZE)

  for (let b = 0; b < totalBatches; b++) {
    const start = b * BATCH_SIZE
    const batch = toUpload.slice(start, start + BATCH_SIZE)

    // Process batch with concurrency limit
    const queue = [...batch]
    const workers = Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
      while (queue.length) {
        const item = queue.shift()
        await uploadOne(item)
      }
    })
    await Promise.all(workers)

    saveProgress()
    printProgress(b + 1)
  }

  console.log('\n=== DONE ===')
  console.log(`Uploaded: ${uploaded}`)
  console.log(`Failed: ${failed}`)
  console.log(`Total time: ${((Date.now() - startTime) / 1000 / 60).toFixed(1)} min`)

  if (failedKeys.length > 0) {
    const failPath = path.join(ROOT, 'src', 'data', 'r2-upload-failures.json')
    fs.writeFileSync(failPath, JSON.stringify(failedKeys, null, 2))
    console.log(`Failed keys saved to: ${failPath}`)
  }
}

run().catch((err) => {
  console.error('Fatal error:', err)
  saveProgress()
  process.exit(1)
})
