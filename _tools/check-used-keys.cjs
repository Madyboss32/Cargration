const fs = require('fs')
const en = JSON.parse(fs.readFileSync('src/i18n/dictionaries/en.json', 'utf8'))
const files = [
  'src/layouts/Header.tsx',
  'src/layouts/Footer.tsx',
  'src/components/CarCard.tsx',
  'src/views/HomePage.tsx',
  'src/views/CarDetailPage.tsx',
]
const used = new Set()
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8')
  for (const m of src.matchAll(/\bt\('([a-zA-Z0-9_.]+)'/g)) used.add(m[1])
  for (const m of src.matchAll(/\bt\(`([^`]+)`/g)) { /* template keys skipped */ }
}
const missing = [...used].filter(k => !en[k])
console.log(missing.length ? 'MISSING:\n' + missing.join('\n') : 'ALL ' + used.size + ' KEYS PRESENT')
