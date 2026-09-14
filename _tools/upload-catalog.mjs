#!/usr/bin/env node
// Upload the inventory catalog (cars.generated.json) to R2 as a single JSON
// object so the site can fetch it at runtime for on-demand/ISR rendering.
import fs from 'fs'
import path from 'path'
import process from 'process'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const ROOT = process.cwd()
const SRC = path.join(ROOT, 'src', 'data', 'cars.generated.json')
const KEY = process.argv[2] || 'cargration/cars.json'

function loadDotEnv() {
  const envPath = path.join(ROOT, '.env')
  if (!fs.existsSync(envPath)) return
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const m = line.trim().match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/)
    if (!m) continue
    if (process.env[m[1]] === undefined) process.env[m[1]] = m[2].trim()
  }
}
loadDotEnv()

for (const k of ['R2_ACCOUNT_ID', 'R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY', 'R2_BUCKET']) {
  if (!process.env[k]) { console.error(`[catalog] missing ${k}`); process.exit(1) }
}

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
})

const body = fs.readFileSync(SRC)
await client.send(new PutObjectCommand({
  Bucket: process.env.R2_BUCKET,
  Key: KEY,
  Body: body,
  ContentType: 'application/json',
  CacheControl: 'public, max-age=3600',
}))
console.log(`[catalog] uploaded ${SRC} (${(body.length / 1024 / 1024).toFixed(1)} MB) -> ${KEY}`)