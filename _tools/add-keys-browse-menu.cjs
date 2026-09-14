// Adds nav.browseCars / nav.viewAllInventory to all 6 dictionaries (parity-checked).
const fs = require('fs')
const path = require('path')

const KEYS = {
  'nav.browseCars': {
    en: 'Browse Cars', ru: 'Каталог авто', fr: 'Nos véhicules', ar: 'تصفح السيارات', pt: 'Estoque', es: 'Inventario',
  },
  'nav.viewAllInventory': {
    en: 'View all inventory', ru: 'Весь каталог', fr: 'Tout le stock', ar: 'عرض كل المخزون', pt: 'Ver todo o estoque', es: 'Ver todo el inventario',
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
