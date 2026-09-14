const fs = require('fs')
const path = require('path')

const KEYS = {
  'form.phPhone': {
    en: '+44 7700 900123',
    ru: '+44 7700 900123',
    fr: '+44 7700 900123',
    ar: '+44 7700 900123',
    pt: '+44 7700 900123',
    es: '+44 7700 900123',
  },
  'calc.carValuePh': {
    en: 'e.g. 12500',
    ru: 'напр. 12500',
    fr: 'ex. 12500',
    ar: 'مثال: 12500',
    pt: 'ex.: 12500',
    es: 'ej. 12500',
  },
}

const dictDir = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries')
for (const locale of Object.keys(KEYS['form.phPhone'])) {
  const file = path.join(dictDir, `${locale}.json`)
  const dict = JSON.parse(fs.readFileSync(file, 'utf8'))
  let added = 0
  for (const [key, translations] of Object.entries(KEYS)) {
    if (!(key in dict)) {
      if (!translations[locale]) throw new Error(`missing ${locale} translation for ${key}`)
      dict[key] = translations[locale]
      added++
    }
  }
  fs.writeFileSync(file, JSON.stringify(dict, null, 2) + '\n', 'utf8')
  console.log(`${locale}: +${added} keys -> ${Object.keys(dict).length} total`)
}
