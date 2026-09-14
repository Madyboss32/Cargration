const fs = require('fs')
const cars = JSON.parse(fs.readFileSync('src/data/cars.generated.json', 'utf8'))
const tally = new Map()
for (const c of cars) {
  if (!(c.price > 0 && c.price < 300000)) continue
  const raw = (c.colorName || '').trim()
  const key = raw || '(empty)'
  tally.set(key, (tally.get(key) || 0) + 1)
}
const sorted = [...tally.entries()].sort((a, b) => b[1] - a[1])
console.log('distinct raw values:', sorted.length)
for (const [k, n] of sorted.slice(0, 40)) console.log(String(n).padStart(6), k)
let covered = 0
for (const [k, n] of sorted) if (k !== '(empty)') covered += n
console.log('with color:', covered, '/ empty:', tally.get('(empty)') || 0)
