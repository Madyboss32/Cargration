import fs from 'fs'
import path from 'path'
import process from 'process'
import sharp from 'sharp'
import { performance } from 'perf_hooks'

const DATA = path.join(process.cwd(), 'src', 'data', 'cars.generated.json')
const cars = JSON.parse(fs.readFileSync(DATA, 'utf8'))
const urls = []
for (const c of cars) for (const img of (c.img || [])) urls.push(img)

// pick 20 distinct not-yet-tested URLs
const test = []
const seen = new Set()
const all = []
;function collect() {
  for (const c of cars) for (const img of c.img || []) { const k = img.split('/').pop(); if (!seen.has(k)) { seen.add(k); all.push(img) } }
}
collect()

async function dl(u) {
  const t0 = performance.now()
  const ac = new AbortController(); const timer = setTimeout(() => ac.abort(), 30000)
  try { const r = await fetch(u, { signal: ac.signal }); clearTimeout(timer); const b = Buffer.from(await r.arrayBuffer()); return { ms: performance.now() - t0, bytes: b.length, buf: b } }
  catch (e) { clearTimeout(timer); return { ms: performance.now() - t0, err: e.message } }
}
async function conv(buf) { const t0 = performance.now(); await sharp(buf).rotate().webp({ quality: 80 }).toBuffer(); return performance.now() - t0 }

// measure download
let dlTotal = 0, convTotal = 0, n = 0
for (const u of all.slice(0, 25)) {
  const d = await dl(u); if (d.err || !d.buf) continue
  dlTotal += d.ms
  const c = await conv(d.buf); convTotal += c
  n++
}
console.log(`download avg: ${(dlTotal / n).toFixed(0)}ms/image  (${n} samples)`)
console.log(`convert  avg: ${(convTotal / n).toFixed(0)}ms/image`)