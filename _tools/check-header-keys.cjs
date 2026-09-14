const fs = require('fs')
const en = JSON.parse(fs.readFileSync('src/i18n/dictionaries/en.json', 'utf8'))
const header = fs.readFileSync('src/layouts/Header.tsx', 'utf8')
// Pull every quoted key-ish literal from the BROWSE data + direct t('...') calls in Header
const keys = new Set()
for (const m of header.matchAll(/\bt\('([a-zA-Z0-9_.]+)'/g)) keys.add(m[1])
for (const m of header.matchAll(/\['([a-z0-9%.-]+)',\s*'([a-zA-Z0-9_.]+)'\]/g)) keys.add(m[2])
const missing = [...keys].filter(k => !en[k])
console.log(missing.length ? 'MISSING:\n' + missing.join('\n') : 'ALL ' + keys.size + ' HEADER KEYS PRESENT')
