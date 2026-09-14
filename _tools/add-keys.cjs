const fs = require('fs')
const additions = {
  en: {
    'search.anyType': 'Any type',
    'search.anyPrice': 'Any price',
    'hero.liveNote': '20,900+ vehicles in stock — search the live database.',
    'heroPrice.under8k': 'Under $8,000',
    'heroPrice.8to15k': '$8,000 – $15,000',
    'heroPrice.15to25k': '$15,000 – $25,000',
    'heroPrice.25to40k': '$25,000 – $40,000',
    'heroPrice.over40k': '$40,000+',
  },
  ru: {
    'search.anyType': 'Любой тип',
    'search.anyPrice': 'Любая цена',
    'hero.liveNote': 'Более 20 900 авто в наличии — поиск по живой базе.',
    'heroPrice.under8k': 'До $8 000',
    'heroPrice.8to15k': '$8 000 – $15 000',
    'heroPrice.15to25k': '$15 000 – $25 000',
    'heroPrice.25to40k': '$25 000 – $40 000',
    'heroPrice.over40k': 'От $40 000',
  },
  fr: {
    'search.anyType': 'Tous les types',
    'search.anyPrice': 'Tous les prix',
    'hero.liveNote': 'Plus de 20 900 véhicules en stock — recherchez dans la base en direct.',
    'heroPrice.under8k': 'Moins de 8 000 $',
    'heroPrice.8to15k': '8 000 – 15 000 $',
    'heroPrice.15to25k': '15 000 – 25 000 $',
    'heroPrice.25to40k': '25 000 – 40 000 $',
    'heroPrice.over40k': '40 000 $ et plus',
  },
  ar: {
    'search.anyType': 'أي نوع',
    'search.anyPrice': 'أي سعر',
    'hero.liveNote': 'أكثر من 20,900 مركبة في المخزون — ابحث في قاعدة البيانات المباشرة.',
    'heroPrice.under8k': 'أقل من 8,000$',
    'heroPrice.8to15k': '8,000$ – 15,000$',
    'heroPrice.15to25k': '15,000$ – 25,000$',
    'heroPrice.25to40k': '25,000$ – 40,000$',
    'heroPrice.over40k': '40,000$ فأكثر',
  },
  pt: {
    'search.anyType': 'Qualquer tipo',
    'search.anyPrice': 'Qualquer preço',
    'hero.liveNote': 'Mais de 20.900 veículos em estoque — pesquise no banco de dados em tempo real.',
    'heroPrice.under8k': 'Até US$ 8.000',
    'heroPrice.8to15k': 'US$ 8.000 – US$ 15.000',
    'heroPrice.15to25k': 'US$ 15.000 – US$ 25.000',
    'heroPrice.25to40k': 'US$ 25.000 – US$ 40.000',
    'heroPrice.over40k': 'Acima de US$ 40.000',
  },
  es: {
    'search.anyType': 'Cualquier tipo',
    'search.anyPrice': 'Cualquier precio',
    'hero.liveNote': 'Más de 20.900 vehículos en stock — busca en la base de datos en vivo.',
    'heroPrice.under8k': 'Menos de $8.000',
    'heroPrice.8to15k': '$8.000 – $15.000',
    'heroPrice.15to25k': '$15.000 – $25.000',
    'heroPrice.25to40k': '$25.000 – $40.000',
    'heroPrice.over40k': '$40.000 o más',
  },
}
for (const [lang, dict] of Object.entries(additions)) {
  const p = `src/i18n/dictionaries/${lang}.json`
  const d = JSON.parse(fs.readFileSync(p, 'utf8'))
  Object.assign(d, dict)
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n')
  console.log(lang, 'now', Object.keys(d).length, 'keys')
}
