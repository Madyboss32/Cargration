#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import os from 'os'
import process from 'process'
import sharp from 'sharp'

const ROOT = process.cwd()
const IMG_DIR = path.join(ROOT, 'public', 'car-img')
const FAILURES = path.join(ROOT, '_tools', 'webp-failures.json')

const args = process.argv.slice(2)
const argOf = (name, dflt) => {
  const i = args.indexOf(name)
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt
}
const CONCURRENCY = parseInt(argOf('--concurrency', String(Math.max(4, os.cpus().length - 1))), 10)
const LIMIT = parseInt(argOf('--limit', '0'), 10)
const QUALITY = parseInt(argOf('--quality', '78'), 10)

const EXT_RE = /\.(jpe?g|png)$/i

function collect() {
  const out = []
  const stack = [IMG_DIR]
  while (stack.length) {
    const dir = stack.pop()
    let entries
    try { entries = fs.readdirSync(dir, { withFileTypes: true }) } catch { continue }
    for (const e of entries) {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) stack.push(full)
      else if (e.isFile() && EXT_RE.test(e.name)) out.push(full)
    }
  }
  return out
}

async function convertOne(src) {
  const dest = src.replace(EXT_RE, '.webp')
  if (!fs.existsSync(src)) {
    return { ok: fs.existsSync(dest), savedBytes: 0 }
  }
  const part = dest + '.part'
  const before = fs.statSync(src).size
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      await sharp(src).rotate().webp({ quality: QUALITY }).toFile(part)
      const st = fs.statSync(part)
      if (st.size === 0) throw new Error('empty output')
      fs.renameSync(part, dest)
      fs.unlinkSync(src)
      return { ok: true, savedBytes: before - st.size }
    } catch (err) {
      try { fs.existsSync(part) && fs.unlinkSync(part) } catch {}
      if (attempt === 2) {
        // keep source file on failure so nothing is lost
        return { ok: false, reason: err.message }
      }
      await new Promise((r) => setTimeout(r, 300))
    }
  }
}

async function main() {
  console.log(`[webp] scanning ${IMG_DIR}`)
  const all = collect()
  const pending = []
  for (const src of all) {
    const dest = src.replace(EXT_RE, '.webp')
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) continue
    pending.push(src)
  }
  if (LIMIT > 0 && pending.length > LIMIT) {
    console.log(`[webp] limit: truncating pending ${pending.length} -> ${LIMIT}`)
    pending.length = LIMIT
  }
  console.log(`[webp] sources: ${all.length}, skipped (already webp): ${all.length - pending.length}, to convert: ${pending.length} (concurrency ${CONCURRENCY}, q${QUALITY})`)

  let done = 0, ok = 0, failed = 0
  let bytesBefore = 0, bytesAfter = 0
  const failures = []
  const startedAt = Date.now()
  const queue = [...pending]

  async function worker() {
    while (queue.length) {
      const src = queue.shift()
      const before = fs.statSync(src).size
      bytesBefore += before
      const r = await convertOne(src)
      done++
      if (r.ok) {
        ok++
        bytesAfter += r.savedBytes
      } else {
        failed++
        failures.push({ file: src, reason: r.reason })
      }
      if (done % 250 === 0 || done === pending.length) {
        const rate = done / ((Date.now() - startedAt) / 1000)
        const etaMin = ((pending.length - done) / Math.max(rate, 0.5) / 60).toFixed(1)
        const pctSaved = bytesBefore ? Math.round((bytesAfter / bytesBefore) * 100) : 0
        console.log(`[webp] ${done}/${pending.length} ok=${ok} fail=${failed} rate=${rate.toFixed(1)}/s eta=${etaMin}min saved=${pctSaved}%`)
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()))
  fs.writeFileSync(FAILURES, JSON.stringify(failures.map(f => ({ file: path.relative(ROOT, f.file), reason: f.reason })), null, 1))
  console.log(`[webp] DONE ok=${ok} failed=${failed}`)
}

main().catch((e) => { console.error('[webp] fatal:', e); process.exit(1) })
