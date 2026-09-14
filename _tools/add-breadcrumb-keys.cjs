const fs = require('fs');
const path = require('path');

const dicts = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');
const locales = {
  en: { 'breadcrumb.home': 'Home' },
  ru: { 'breadcrumb.home': 'Главная' },
  fr: { 'breadcrumb.home': 'Accueil' },
  ar: { 'breadcrumb.home': 'الرئيسية' },
  pt: { 'breadcrumb.home': 'Início' },
  es: { 'breadcrumb.home': 'Inicio' },
};

let count = 0;
for (const [locale, keys] of Object.entries(locales)) {
  const filePath = path.join(dicts, locale + '.json');
  const dict = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let added = 0;
  for (const [k, v] of Object.entries(keys)) {
    if (!dict[k]) { dict[k] = v; added++; }
  }
  if (added > 0) {
    fs.writeFileSync(filePath, JSON.stringify(dict, null, 2) + '\n');
    count += added;
    console.log(locale + ': added ' + added + ' key(s)');
  } else {
    console.log(locale + ': no keys needed');
  }
}
console.log('Total keys added:', count);
