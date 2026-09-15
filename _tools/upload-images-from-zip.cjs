/**
 * Upload car images from the local `car_data_export.zip` to R2 under the keys the
 * catalog references (pub-.../cars/<brand>/<model>/car_XXXXXX/image_NN.webp).
 *
 * The zip stores brand/model folders with an exotic (non-UTF8) byte encoding, so
 * matching is done on the ASCII tail `car_XXXXXX/image_NN.webp` and the R2 key is
 * derived from the catalog's own decoded URL path (authoritative UTF-8).
 *
 * Usage:
 *   node _tools/upload-images-from-zip.cjs --zip "C:/Users/marketing/Desktop/car_data_export.zip"
 *   node _tools/upload-images-from-zip.cjs --zip ... --dry-run
 *   node _tools/upload-images-from-zip.cjs --zip ... --concurrency 30
 */

const fs = require('fs')
const path = require('path')
const yauzl = require('yauzl')

const ROOT = process.cwd()
const CARS_FILE = path.join(ROOT, 'src', 'data', 'cars.generated.json')
const R2_PRESENT_FILE = path.join(ROOT, 'src', 'data', 'r2-present.json')
const PROGRESS_FILE = path.join(ROOT, 'src', 'data', 'r2-img-upload-progress.json')

const ZIP = process.argv.find((_, i, a) => a[i - 1] === '--zip') || path.join(ROOT, 'car_data_export.zip')
const DRY_RUN = process.argv.includes('--dry-run')
const CONCURRENCY = parseInt(process.argv.find((_, i, a) => a[i - 1] === '--concurrency') || '24', 10)
const BASE = 'https://pub-7958f84102454e45b228aaa2962ddfe6.r2.dev'

const ACCOUNT_ID  = process.env.R2_ACCOUNT_ID          || '30bd2bf9412bc32edfc6a37d993bfae3'
const ACCESS_KEY  = process.env.R2_ACCESS_KEY_ID        || '0dffd473b578cee0b6e9e41c9dd72a64'
const SECRET_KEY  = process.env.R2_SECRET_ACCESS_KEY    || '3cfe7b1004caa4c60525266f7099a4e97799b4b2e99202432d91078f1257509c'
const BUCKET      = process.env.R2_BUCKET               || 'cargration'
const ENDPOINT    = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`

// ── Needed keys from the catalog ──────────────────────────────────────────────
// key = 'cars/<品牌>/<车型>/car_XXXXXX/image_NN.webp'  (UTF-8, matches catalog URL)
// zip id = '<car_XXXXXX>/<image_NN.webp>' coordination via ASCII tail.
const needed = new Map() // `${carId}/${file}` -> { key, carId, file, url }
let carFolders = new Set()
let totalRefs = 0
let skippedAlready = 0
let collisions = []

function buildNeeded() {
  const cars = JSON.parse(fs.readFileSync(CARS_FILE, 'utf8'))
  for (const c of cars) {
    for (const u of (c.img || [])) {
      if (!u.startsWith(BASE)) continue
      totalRefs++
      const pathname = decodeURIComponent(new URL(u).pathname) // /cars/大众/大众途岳/car_000000/image_01.webp
      if (!pathname.startsWith('/cars/')) continue
      const rel = pathname.slice('/cars/'.length)
      const segs = rel.split('/')
      if (segs.length < 3) continue
      const file = segs[segs.length - 1]
      const carId = segs[segs.length - 2]
      const key = `cars/${rel}`
      const coord = `${carId}/${file}`
      carFolders.add(carId)
      const prev = needed.get(coord)
      if (prev && prev.key !== key) {
        collisions.push({ coord, a: prev.key, b: key })
        continue
      }
      needed.set(coord, { key, carId, file, url: u })
    }
  }
}

// ── Index zip by `car_XXXXXX/<file>` tail ─────────────────────────────────────
function indexZip(zipPath) {
  return new Promise((resolve, reject) => {
    const zipIndex = new Map() // `${carId}/${file}` -> entry
    const zipCarIds = new Set()
    let filesUnderImages = 0
    yauzl.open(zipPath, { lazyEntries: true, autoClose: false }, (err, zipfile) => {
      if (err) return reject(err)
      zipfile.readEntry()
      zipfile.on('entry', (entry) => {
        const raw = entry.fileName // latin1 byte-string (yauzl keeps raw bytes)
        if (raw.startsWith('car_data_export/images/')) {
          const m = /\/car_(\d+)\/([^/]+)$/.exec(raw)
          if (m) {
            filesUnderImages++
            zipCarIds.add(`car_${m[1]}`)
            zipIndex.set(`car_${m[1]}/${m[2]}`, entry)
          }
        }
        zipfile.readEntry()
      })
      zipfile.on('error', reject)
      zipfile.on('end', () => resolve({ zipIndex, filesUnderImages, zipCarIds, zipfile }))
    })
  })
}

// ── Upload ────────────────────────────────────────────────────────────────────
function bufferEntry(zipfile, entry) {
  return new Promise((resolve, reject) => {
    zipfile.openReadStream(entry, (err, stream) => {
      if (err) return reject(err)
      const chunks = []
      stream.on('data', (c) => chunks.push(c))
      stream.on('end', () => resolve(Buffer.concat(chunks)))
      stream.on('error', reject)
    })
  })
}

async function main() {
  buildNeeded()
  console.log(`catalog: ${totalRefs} img refs, ${needed.size} unique pub-.../cars keys, ${carFolders.size} car folders`)

  if (!fs.existsSync(ZIP)) {
    console.error('ZIP not found:', ZIP)
    process.exit(1)
  }
  console.log('indexing zip (100k+ entries... up to a minute)')
  const { zipIndex, filesUnderImages, zipCarIds, zipfile } = await indexZip(ZIP)
  console.log(`zip: ${filesUnderImages} files under images/, ${zipCarIds.size} distinct car folders`)
  const zipNeedMiss = [...carFolders].filter((id) => !zipCarIds.has(id))
  console.log(`catalog car folders missing entirely from zip: ${zipNeedMiss.length}/${carFolders.size}`)
  if (zipNeedMiss.length) console.log('  sample:', zipNeedMiss.slice(0, 5).join(', '))

  let presentInZip = 0
  const missing = []
  for (const [coord, info] of needed) {
    if (zipIndex.has(coord)) presentInZip++
    else missing.push(`${info.key}   (${coord})`)
  }
  console.log(`needed keys present in zip: ${presentInZip}/${needed.size}`)
  console.log(`missing files: ${missing.length}`)
  if (collisions.length) {
    console.warn(`WARN carId/file collisions (same image, different keys): ${collisions.length}`)
    collisions.slice(0, 10).forEach((c) => console.warn('  ', c.a, '<=>', c.b))
  }
  if (missing.length) {
    console.log('sample missing:')
    missing.slice(0, 8).forEach((m) => console.log('  ', m))
  }
  if (DRY_RUN) {
    console.log('\n[DRY RUN] no uploads performed.')
    return
  }

  const r2Present = new Set(JSON.parse(fs.readFileSync(R2_PRESENT_FILE, 'utf8')))
  const S3 = require('@aws-sdk/client-s3')
  const s3 = new S3.S3Client({
    region: 'auto',
    endpoint: ENDPOINT,
    forcePathStyle: true,
    credentials: { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY },
    requestHandler: { httpOptions: { timeout: 120_000, connectTimeout: 15_000 } },
  })

  async function putWithRetry(key, buf, attemptsLeft = 4) {
    try {
      await s3.send(new S3.PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        Body: buf,
        ContentType: 'image/webp',
        CacheControl: 'public, max-age=31536000, immutable',
      }))
      return null
    } catch (e) {
      const code = e && (e.$metadata && e.$metadata.httpStatusCode ? 'HTTP' + e.$metadata.httpStatusCode : (e.code || e.name || 'ERR'))
      const msg = e && (e.message || String(e))
      if (attemptsLeft > 1 && /ENOTFOUND|ECONNRESET|ECONNREFUSED|ETIMEDOUT|socket hang up|network socket|TimeoutError|Throttling|SlowDown|ServiceUnavailable|TooManyRequests/i.test(msg)) {
        await new Promise((r) => setTimeout(r, 700 * (5 - attemptsLeft)))
        return putWithRetry(key, buf, attemptsLeft - 1)
      }
      return `${code}: ${msg}`
    }
  }

  const queue = []
  for (const [coord, info] of needed) {
    const entry = zipIndex.get(coord)
    if (!entry) continue
    if (r2Present.has(info.key)) { skippedAlready++; continue }
    queue.push({ info, entry })
  }
  console.log(`\nto upload: ${queue.length} (${skippedAlready} already uploaded)`)
  const totalQueue = queue.length

  let done = 0, failed = 0
  const failedKeys = []
  const start = Date.now()

  function persistProgress() {
    fs.writeFileSync(R2_PRESENT_FILE, JSON.stringify([...r2Present]))
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify({
      total: totalQueue, done, failed, timestamp: new Date().toISOString(),
      minutes: ((Date.now() - start) / 60000).toFixed(1),
    }))
  }

  async function worker() {
    while (queue.length) {
      const { info, entry } = queue.shift()
      try {
        const buf = await bufferEntry(zipfile, entry)
        const err = await putWithRetry(info.key, buf)
        if (!err) {
          done++
          r2Present.add(info.key)
        } else {
          failed++
          failedKeys.push({ key: info.key, error: err })
        }
      } catch (e) {
        failed++
        failedKeys.push({ key: info.key, error: e && (e.message || String(e)) })
      }
      if ((done + failed) % 300 === 0) {
        const pct = ((done + failed) / totalQueue * 100).toFixed(1)
        console.log(`  [${pct}%] +${done} ok, ${failed} fail (${((Date.now() - start) / 60000).toFixed(1)} min)`)
        try { persistProgress() } catch {}
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, totalQueue || 1) }, worker))

  persistProgress()
  zipfile.close()
  console.log(`\n=== DONE === +${done} ok, ${failed} fail, ${((Date.now() - start) / 60000).toFixed(1)} min`)
  const failPath = path.join(ROOT, 'src', 'data', 'r2-img-upload-failures.json')
  fs.writeFileSync(failPath, JSON.stringify(failedKeys, null, 2))
  console.log(`failures -> ${failPath}`)
}

main().catch((e) => { console.error('Fatal:', e); process.exit(1) })