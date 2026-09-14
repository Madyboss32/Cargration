#!/usr/bin/env node
// One-shot: dedupe re-downloaded rasters that already exist as .webp twins,
// drop known-corrupt files, then audit true mirror coverage against cars.generated.json
import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()
const IMG_DIR = path.join(ROOT, 'public', 'car-img')
const DATA = path.join(ROOT, 'src', 'data', 'cars.generated.json')
const FAILURES = path.join(ROOT, '_tools', 'webp-failures.json')
const SRC_PREFIX = 'https://www.eautoexport.com/'
const RASTER_RE = /\.(jpe?g|png)$/i

let freedBytes = 0
let dupDeleted = 0
let corruptDeleted = 0
const keptRaster = []
let partFiles = 0

function walk(dir, cb) {
  let entries
  try { entries = fs.readdirSync(dir, { withFileTypes: true }) } catch { return }
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, cb)
    else cb(full)
  }
}

// pass 1: collect stems
const stems = new Map() // stem -> { raster?: {file,size}, webp?: {file,size} }
walk(IMG_DIR, (f) => {
  const ext = path.extname(f).toLowerCase()
  const size = fs.statSync(f).size
  if (ext === '.part') { partFiles++; return }
  const isRaster = RASTER_RE.test(ext)
  const isWebp = ext === '.webp'
  if (!isRaster && !isWebp) return
  const stem = f.slice(0, -ext.length)
  let rec = stems.get(stem)
  if (!rec) { rec = {}; stems.set(stem, rec) }
  if (isRaster) rec.raster = { file: f, size }
  else rec.webp = { file: f, size }
})

let webpCount = 0, rasterCount = 0
for (const rec of stems.values()) {
  if (rec.webp) webpCount++
  if (rec.raster) rasterCount++
}
console.log(`[audit] unique assets (stems): ${stems.size}, with webp: ${webpCount}, raster-only: ${rasterCount}`)

// pass 2: dedupe + corrupt purge
const failList = (() => {
  try { return JSON.parse(fs.readFileSync(FAILURES, 'utf8')) } catch { return [] }
})()
const failSet = new Set(failList.map((f) => path.join(ROOT, f.file)))

for (const rec of stems.values()) {
  if (!rec.raster) continue
  if (rec.webp) {
    // twin exists -> original is a redundant re-download
    fs.unlinkSync(rec.raster.file)
    dupDeleted++
    freedBytes += rec.raster.size
    rec.raster = undefined
  } else if (failSet.has(rec.raster.file)) {
    // undecodable garbage -> remove so resolver falls back to remote origin
    fs.unlinkSync(rec.raster.file)
    corruptDeleted++
    freedBytes += rec.raster.size
    rec.raster = undefined
  } else {
    keptRaster.push(path.relative(ROOT, rec.raster.file))
  }
}
console.log(`[cleanup] duplicate rasters deleted: ${dupDeleted} (${mb(freedBytes)} MB freed)`)
console.log(`[cleanup] corrupt (sharp-failed) deleted: ${corruptDeleted}`)
console.log(`[cleanup] raster-only kept (not in failure list): ${keptRaster.length}`)
keptRaster.slice(0, 10).forEach((f) => console.log('   KEPT ' + f))
console.log(`[cleanup] stray .part files: ${partFiles}`)

// pass 3: coverage vs source data
function normUrl(u) {
  let x = u
  if (x.startsWith(SRC_PREFIX + 'http')) x = x.slice(SRC_PREFIX.length)
  try {
    const parsed = new URL(x)
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') return x
  } catch {}
  return null
}

const cars = JSON.parse(fs.readFileSync(DATA, 'utf8'))
const urls = new Set()
for (const c of cars) for (const raw of c.img || []) { const u = normUrl(raw); if (u) urls.add(u) }

function covered(u) {
  const p = new URL(u)
  const base = path.join(IMG_DIR, p.host, decodeURIComponent(p.pathname))
  if (fs.existsSync(base) && fs.statSync(base).size > 0) return true
  const webp = base.replace(RASTER_RE, '.webp')
  return fs.existsSync(webp) && fs.statSync(webp).size > 0
}

let miss = 0
const missUrls = []
for (const u of urls) {
  if (!covered(u)) { miss++; if (missUrls.length < 25) missUrls.push(u) }
}
console.log(`[coverage] unique URLs in data: ${urls.size}, locally available: ${urls.size - miss}, MISSING: ${miss}`)
missUrls.forEach((u) => console.log('   MISS ' + u))

// final disk state
let total = 0, files = 0
walk(IMG_DIR, (f) => { total += fs.statSync(f).size; files++ })
console.log(`[disk] ${files} files, ${mb(total)} MB total`)

function mb(b) { return (b / 1048576).toFixed(1) }
