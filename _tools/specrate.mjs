import fs from 'fs'
import path from 'path'
import process from 'process'
import sharp from 'sharp'
import { S3Client, HeadObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'

const ROOT = process.cwd()
const DATA = path.join(ROOT, 'src', 'data', 'cars.generated.json')
const SRC_PREFIX = 'https://www.eautoexport.com/'

function loadDotEnv() {
  const envPath = path.join(ROOT, '.env')
  if (!fs.existsSync(envPath)) return
  const text = fs.readFileSync(envPath, 'utf8')
  for (const line of text.split(/\r?\n/)) {
    const m = line.trim().match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/)
    if (!m) continue
    const key = m[1]
    let value = m[2].trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1)
    if (process.env[key] === undefined) process.env[key] = value
  }
}
loadDotEnv()

const client = new S3Client({ region: 'auto', endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`, credentials: { accessKeyId: process.env.R2_ACCESS_KEY_ID, secretAccessKey: process.env.R2_SECRET_ACCESS_KEY } })

function keyFor(u) {
  const parsed = new URL(u)
  let pathname = decodeURIComponent(parsed.pathname)
  if (pathname.endsWith('/')) pathname += 'index.webp'
  else pathname = pathname.replace(/\.(jpe?g|png)$/i, '.webp')
  return `${parsed.host}${pathname}`
}

const cars = JSON.parse(fs.readFileSync(DATA, 'utf8'))
const urls = []
for (const c of cars) for (const img of c.img || []) { if (!img.includes('.baiduyun.p.downloading')) urls.push(img) }
console.log('total image refs:', urls.length)

async function exists(key) { try { await client.send(new HeadObjectCommand({ Bucket: process.env.R2_BUCKET, Key: key })); return true } catch { return false } }

// find some not-uploaded ones
const pending = []
const doneAll = []
let scanned = 0
for (const u of urls) {
  const k = keyFor(u)
  const hit = doneAll[k]
  if (hit === undefined) { doneAll[k] = await exists(k); scanned++ }
  if (!doneAll[k]) pending.push(u)
  if (pending.length >= 20) break
}
console.log('scan head-checks:', scanned, 'pending found:', pending.length)

const CONCURRENCY = 40
let ok = 0, fail = 0, i = 0
const t0 = Date.now()
async function worker() {
  while (i < pending.length) {
    const u = pending[i++]
    try {
      const res = await fetch(u, { redirect: 'follow' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buf = Buffer.from(await res.arrayBuffer())
      let p = sharp(buf).rotate()
      const meta = await sharp(buf).metadata()
      const w = meta.width || 0, h = meta.height || 0
      if (w > 8000 || h > 8000) p = p.resize({ width: 8000, height: 8000, fit: 'inside', withoutEnlargement: true })
      const webp = await p.webp({ quality: 80 }).toBuffer()
      await client.send(new PutObjectCommand({ Bucket: process.env.R2_BUCKET, Key: keyFor(u), Body: webp, ContentType: 'image/webp', CacheControl: 'public, max-age=31536000, immutable' }))
      ok++
    } catch (e) { fail++; console.log('FAIL', u, e.message.slice(0, 120)) }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()))
const sec = (Date.now() - t0) / 1000
console.log(`new-download rate: ${ok} uploaded in ${sec.toFixed(0)}s = ${(ok / sec).toFixed(1)}/s  (fail ${fail})`)