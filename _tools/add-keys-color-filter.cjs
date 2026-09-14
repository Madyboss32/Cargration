// Adds search.color / search.anyColor to all 6 dictionaries (parity-checked).
const fs = require('fs')
const path = require('path')

const KEYS = {
  'search.color': {
    en: 'Color', ru: 'Цвет', fr: 'Couleur', ar: 'اللون', pt: 'Cor', es: 'Color',
  },
  'search.anyColor': {
    en: 'Any color', ru: 'Любой цвет', fr: 'Toutes couleurs', ar: 'أي لون', pt: 'Qualquer cor', es: 'Cualquier color',
  },
}

const dictDir = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries')
const locales = ['en', 'ru', 'fr', 'ar', 'pt', 'es']

for (const loc of locales) {
  const file = path.join(dictDir, `${loc}.json`)
  const dict = JSON.parse(fs.readFileSync(file, 'utf8'))
  let added = 0
  for (const [key, translations] of Object.entries(KEYS)) {
    if (dict[key] !== undefined) continue
    dict[key] = translations[loc]
    added++
  }
  fs.writeFileSync(file, JSON.stringify(dict, null, 2) + '\n', 'utf8')
  console.log(`${loc}: +${added} keys -> ${Object.keys(dict).length} total`)
}
