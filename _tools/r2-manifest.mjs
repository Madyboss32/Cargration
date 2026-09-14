#!/usr/bin/env node
// List all object keys currently in the R2 bucket and write them to
// src/data/r2-present.json so builds can skip images not yet mirrored.
import fs from 'fs'
import path from 'path'
import process from 'process'
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'

const ROOT = process.cwd()

function loadDotEnv() {
  const envPath = path.join(ROOT, '.env')
  if (!fs.existsSync(envPath)) return
  const text = fs.readFileSync(envPath, 'utf8')
  for (const line of text.split(/\r?\n/)) {
    const m = line.trim().match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/)
    if (!m) continue
    let value = m[2].trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1)
    if (process.env[m[1]] === undefined) process.env[m[1]] = value
  }
}
loadDotEnv()

const accountId = process.env.R2_ACCOUNT_ID
const bucket = process.env.R2_BUCKET
if (!accountId || !bucket) { console.error('[r2-manifest] missing R2_ACCOUNT_ID/R2_BUCKET'); process.exit(1) }

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: process.env.R2_ACCESS_KEY_ID, secretAccessKey: process.env.R2_SECRET_ACCESS_KEY },
})

const keys = []
let token
do {
  const r = await client.send(new ListObjectsV2Command({ Bucket: bucket, ContinuationToken: token, MaxKeys: 1000 }))
  for (const o of r.Contents || []) keys.push(o.Key)
  token = r.IsTruncated ? r.NextContinuationToken : undefined
} while (token)

const set = new Set(keys)
const out = path.join(ROOT, 'src', 'data', 'r2-present.json')
fs.writeFileSync(out, JSON.stringify([...set], null, 0))
console.log(`[r2-manifest] ${set.size} keys -> ${path.relative(ROOT, out)}`)