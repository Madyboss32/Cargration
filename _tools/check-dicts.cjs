const fs = require('fs')
const langs = ['en', 'ru', 'fr', 'ar', 'pt', 'es']
const base = Object.keys(JSON.parse(fs.readFileSync('src/i18n/dictionaries/en.json', 'utf8')))
let ok = true
for (const l of langs.slice(1)) {
  const d = JSON.parse(fs.readFileSync('src/i18n/dictionaries/' + l + '.json', 'utf8'))
  const missing = base.filter(k => !(k in d))
  const extra = Object.keys(d).filter(k => !base.includes(k))
  if (missing.length || extra.length) {
    ok = false
    console.log(l, 'missing:', missing, 'extra:', extra)
  } else {
    console.log(l + ': OK (' + base.length + ' keys)')
  }
}
console.log(ok ? 'ALL PARITY OK' : 'PARITY FAIL')
