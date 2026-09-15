/**
 * Prepare + upload the Cloudflare edge catalog artifacts:
 *
 *   cargration/cars.lite.json   – fully processed, <8 MB projection used by the
 *                                 edge runtime (listings, filters, sitemaps,
 *                                 similar-cars). Items carry a precomputed
 *                                 `slug` and `_i` index for detail lookups.
 *   cargration/full/#####.json  – chunks of full sanitized records; a detail
 *                                 page pulls just the one chunk per request.
 *
 * The logic below intentionally mirrors src/data/cars.server.ts
 * (sanitize / localizeImage / normalizeGenerated / carSlug) so the artifacts
 * match what the Node build produces for the static pages.
 *
 * Usage:
 *   node _tools/prepare-edge-catalog.cjs            # prepare + upload to R2
 *   node _tools/prepare-edge-catalog.cjs --dry-run  # report only
 */

const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const CARS_FILE = path.join(ROOT, 'src', 'data', 'cars.generated.json')
const BAD_FILE = path.join(ROOT, 'src', 'data', 'badImages.json')
const R2_PRESENT_FILE = path.join(ROOT, 'src', 'data', 'r2-present.json')

const DRY_RUN = process.argv.includes('--dry-run')
const CHUNK_SIZE = parseInt(process.argv.find((_, i, a) => a[i - 1] === '--chunk-size') || '500', 10)
const LITE_KEY = 'cargration/cars.lite.json'
const FULL_PREFIX = 'cargration/full/'

// ── Config (mirrors src/config/site.ts) ───────────────────────────────────────
const CAR_IMG_BASE = 'https://pub-7958f84102454e45b228aaa2962ddfe6.r2.dev'
const ACCOUNT_ID  = process.env.R2_ACCOUNT_ID          || '30bd2bf9412bc32edfc6a37d993bfae3'
const ACCESS_KEY  = process.env.R2_ACCESS_KEY_ID        || '0dffd473b578cee0b6e9e41c9dd72a64'
const SECRET_KEY  = process.env.R2_SECRET_ACCESS_KEY    || '3cfe7b1004caa4c60525266f7099a4e97799b4b2e99202432d91078f1257509c'
const BUCKET      = process.env.R2_BUCKET               || 'cargration'
const ENDPOINT    = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`

const IMG_PREFIX = 'https://www.eautoexport.com/'
const RASTER_EXT_RE = /\.(jpe?g|png)$/i
const NOW_YEAR = new Date().getFullYear()
const MAX_PLAUSIBLE_PRICE = 3000000

// ── Catalog transforms (must stay in sync with cars.server.ts) ────────────────
function slugify(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function carSlug(c) {
  return `${slugify(c.brand)}-${slugify(c.name)}-${slugify(c.trim || 'base')}-${c.year || '0'}-${slugify(c.id || '')}`
}

function canonKey(webPath) {
  let k = webPath
  if (k.startsWith('/car-img/')) k = k.slice('/car-img/'.length)
  else {
    try {
      const parsed = new URL(k)
      k = `${parsed.host}${parsed.pathname}`
    } catch {
      if (k.startsWith(IMG_PREFIX)) k = k.slice(IMG_PREFIX.length)
    }
  }
  return k
}

const BAD_KEYS = new Set(JSON.parse(fs.readFileSync(BAD_FILE, 'utf8')).map(canonKey))
const R2_PRESENT = new Set(JSON.parse(fs.readFileSync(R2_PRESENT_FILE, 'utf8')))

function r2KeyForUrl(u) {
  const parsed = new URL(u)
  let pathname = decodeURIComponent(parsed.pathname)
  if (pathname.endsWith('/')) pathname += 'index.webp'
  else pathname = pathname.replace(RASTER_EXT_RE, '.webp')
  return `${parsed.host}${pathname}`
}

function localizeImage(u) {
  let fixed = u
  if (fixed.startsWith(IMG_PREFIX + 'http')) fixed = fixed.slice(IMG_PREFIX.length)
  try {
    const parsed = new URL(fixed)
    if (CAR_IMG_BASE) {
      const key = r2KeyForUrl(fixed)
      if (R2_PRESENT.has(key)) return `${CAR_IMG_BASE.replace(/\/+$/, '')}/${encodeURI(key)}`
      return fixed
    }
  } catch {}
  return fixed
}

function sanitize(car) {
  const c = { ...car }
  const base = Number(c.price) || 0
  c.price = Math.max(100, base - 800)
  const y = parseInt(String(c.year ?? ''), 10)
  if (!Number.isFinite(y) || y < 1980 || y > NOW_YEAR + 1) c.year = ''
  if (c.transmission && /#|n\/a/i.test(c.transmission)) c.transmission = undefined
  if (c.drive && /^#|^other$/i.test(c.drive)) c.drive = undefined
  if (Array.isArray(c.img)) {
    c.img = c.img
      .filter((u) => !u.includes('.baiduyun.p.downloading'))
      .filter((u) => !BAD_KEYS.has(canonKey(u)))
      .map(localizeImage)
  }
  return c
}

function normalizeGenerated(car) {
  if (car.specs && car.specs.length) return car
  const year = car.year ? [car.year] : []
  const fuelPart = car.fuel && car.fuel !== 'Petrol'
    ? [car.fuel]
    : car.displacement
      ? [`${(parseInt(car.displacement, 10) / 1000).toFixed(1)}L Petrol`]
      : ['Petrol']
  return {
    ...car,
    loc: 'FOB China',
    specs: [
      ...year,
      ...fuelPart,
      `${(car.km ?? 0).toLocaleString()} km`,
      car.transmission || 'AT',
    ],
  }
}

// ── Build artifacts ────────────────────────────────────────────────────────────
const source = JSON.parse(fs.readFileSync(CARS_FILE, 'utf8'))
const full = source
  .filter((c) => c.price > 0 && c.price < MAX_PLAUSIBLE_PRICE)
  .map(sanitize)
  .map(normalizeGenerated)

const lite = full.map((c, i) => ({
  id: c.id,
  brand: c.brand,
  name: c.name,
  trim: c.trim,
  type: c.type,
  fuel: c.fuel,
  condition: c.condition,
  price: c.price,
  loc: c.loc || 'FOB China',
  colorName: c.colorName,
  year: c.year,
  km: c.km,
  transmission: c.transmission,
  drive: c.drive,
  listedAt: c.listedAt,
  trending: !!c.trending,
  specs: c.specs || [],
  img: c.img && c.img.length ? [c.img[0]] : [],
  slug: carSlug(c),
  _i: i,
}))

const chunkItems = []
for (let i = 0; i < full.length; i += CHUNK_SIZE) {
  const key = String(chunkItems.length).padStart(5, '0')
  chunkItems.push({ key, cars: full.slice(i, i + CHUNK_SIZE) })
}

const liteJson = JSON.stringify(lite)
console.log(`records: ${full.length}`)
console.log(`lite size: ${(liteJson.length / 1048576).toFixed(1)} MB  (${LITE_KEY})`)
console.log(`full chunks: ${chunkItems.length}  (${chunkItems[0] ? (chunkItems[0].cars.length) : 0}/chunk first)`)
const chunkMB = chunkItems.reduce((n, c) => n + JSON.stringify(c.cars).length, 0) / 1048576
console.log(`full total size: ${chunkMB.toFixed(1)} MB`)

if (DRY_RUN) {
  console.log('\n[DRY RUN] nothing uploaded.')
  process.exit(0)
}

// ── Upload ────────────────────────────────────────────────────────────────────
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const s3 = new S3Client({
  region: 'auto',
  endpoint: ENDPOINT,
  credentials: { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY },
  requestHandler: { httpOptions: { timeout: 60_000, connectTimeout: 15_000 } },
})

async function put(key, body, contentType) {
  await s3.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: body,
    ContentType: contentType,
    CacheControl: 'public, max-age=3600',
  }))
}

;(async () => {
  let done = 0
  console.log('\nuploading lite catalog...')
  await put(LITE_KEY, Buffer.from(liteJson), 'application/json')
  done++

  const workers = Array.from({ length: 8 }, async () => {
    while (chunkItems.length) {
      const c = chunkItems.shift()
      await put(`${FULL_PREFIX}${c.key}.json`, Buffer.from(JSON.stringify(c.cars)), 'application/json')
      done++
      if (done % 10 === 0) console.log(`  uploaded ${done}`)
    }
  })
  await Promise.all(workers)
  console.log(`\n=== DONE === uploaded ${done} objects (1 lite + ${done - 1} chunks)`)
})().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})