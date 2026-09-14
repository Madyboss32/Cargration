#!/usr/bin/env node
// Regenerate every car's public id with a cryptographically-random, non-derivable
// opaque token. Decouples Cargration's ids completely from the source inventory
// (cars.sql / eautoexport p_id & p_no) so no reverse-mapping is possible.
import fs from 'fs'
import path from 'path'
import process from 'process'
import { randomBytes } from 'node:crypto'

const ROOT = process.cwd()
const FILE = path.join(ROOT, 'src', 'data', 'cars.generated.json')

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const ID_LEN = 22

function genToken() {
  const bytes = randomBytes(ID_LEN)
  let s = ''
  for (let i = 0; i < ID_LEN; i++) s += ALPHABET[bytes[i] % ALPHABET.length]
  return s
}

const cars = JSON.parse(fs.readFileSync(FILE, 'utf8'))
if (!Array.isArray(cars) || cars.length === 0) throw new Error('empty catalog')

const used = new Set()
let collisions = 0
for (const car of cars) {
  let id = ''
  do {
    id = 'cr-' + genToken()
    if (used.has(id)) { collisions++; continue }
    break
  } while (true)
  used.add(id)
  car.id = id
}

fs.writeFileSync(FILE, JSON.stringify(cars))
console.log(`Regenerated unique ids for ${cars.length} cars (${collisions} re-collisions)`)
console.log('Sample ids:')
for (const c of cars.slice(0, 3)) console.log(`  ${c.id}  (${c.brand} ${c.name})`)