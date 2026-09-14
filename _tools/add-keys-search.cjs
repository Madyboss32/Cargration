// Adds SearchFilter-related keys to all six dictionaries. Run: node _tools/add-keys-search.cjs
const fs = require('fs');
const path = require('path');

const additions = {
  en: {
    'search.allModels': 'All models',
    'search.selectBrand': 'Select brand',
    'search.selectBrandFirst': 'Select a brand above',
    'search.model': 'Model',
    'fuel.electric': 'Electric',
    'fuel.hybrid': 'Hybrid',
    'fuel.pluginHybrid': 'Plug-in Hybrid',
    'fuel.reev': 'REEV',
    'fuel.petrol': 'Petrol',
    'fuel.diesel': 'Diesel',
    'trans.automaticAt': 'Automatic (AT)',
    'trans.cvt': 'CVT',
    'trans.manualMt': 'Manual (MT)',
  },
  ru: {
    'search.allModels': 'Все модели',
    'search.selectBrand': 'Выберите бренд',
    'search.selectBrandFirst': 'Сначала выберите бренд',
    'search.model': 'Модель',
    'fuel.electric': 'Электро',
    'fuel.hybrid': 'Гибрид',
    'fuel.pluginHybrid': 'Подключаемый гибрид',
    'fuel.reev': 'REEV',
    'fuel.petrol': 'Бензин',
    'fuel.diesel': 'Дизель',
    'trans.automaticAt': 'Автомат (AT)',
    'trans.cvt': 'Вариатор (CVT)',
    'trans.manualMt': 'Механика (MT)',
  },
  fr: {
    'search.allModels': 'Tous les modèles',
    'search.selectBrand': 'Choisir une marque',
    'search.selectBrandFirst': "Choisissez d'abord une marque",
    'search.model': 'Modèle',
    'fuel.electric': 'Électrique',
    'fuel.hybrid': 'Hybride',
    'fuel.pluginHybrid': 'Hybride rechargeable',
    'fuel.reev': 'REEV',
    'fuel.petrol': 'Essence',
    'fuel.diesel': 'Diesel',
    'trans.automaticAt': 'Automatique (AT)',
    'trans.cvt': 'CVT',
    'trans.manualMt': 'Manuelle (MT)',
  },
  es: {
    'search.allModels': 'Todos los modelos',
    'search.selectBrand': 'Elegir marca',
    'search.selectBrandFirst': 'Elige primero una marca',
    'search.model': 'Modelo',
    'fuel.electric': 'Eléctrico',
    'fuel.hybrid': 'Híbrido',
    'fuel.pluginHybrid': 'Híbrido enchufable',
    'fuel.reev': 'REEV',
    'fuel.petrol': 'Gasolina',
    'fuel.diesel': 'Diésel',
    'trans.automaticAt': 'Automática (AT)',
    'trans.cvt': 'CVT',
    'trans.manualMt': 'Manual (MT)',
  },
  pt: {
    'search.allModels': 'Todos os modelos',
    'search.selectBrand': 'Escolher marca',
    'search.selectBrandFirst': 'Escolha primeiro uma marca',
    'search.model': 'Modelo',
    'fuel.electric': 'Elétrico',
    'fuel.hybrid': 'Híbrido',
    'fuel.pluginHybrid': 'Híbrido plug-in',
    'fuel.reev': 'REEV',
    'fuel.petrol': 'Gasolina',
    'fuel.diesel': 'Diesel',
    'trans.automaticAt': 'Automática (AT)',
    'trans.cvt': 'CVT',
    'trans.manualMt': 'Manual (MT)',
  },
  ar: {
    'search.allModels': 'كل الموديلات',
    'search.selectBrand': 'اختر الماركة',
    'search.selectBrandFirst': 'اختر الماركة أولاً',
    'search.model': 'الموديل',
    'fuel.electric': 'كهربائي',
    'fuel.hybrid': 'هايبرد',
    'fuel.pluginHybrid': 'هايبرد قابل للشحن',
    'fuel.reev': 'REEV',
    'fuel.petrol': 'بنزين',
    'fuel.diesel': 'ديزل',
    'trans.automaticAt': 'أوتوماتيك (AT)',
    'trans.cvt': 'CVT',
    'trans.manualMt': 'عادي (MT)',
  },
};

for (const [lang, keys] of Object.entries(additions)) {
  const file = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries', `${lang}.json`);
  const dict = JSON.parse(fs.readFileSync(file, 'utf8'));
  let added = 0;
  for (const [k, v] of Object.entries(keys)) {
    if (!(k in dict)) { dict[k] = v; added++; }
  }
  fs.writeFileSync(file, JSON.stringify(dict, null, 2) + '\n', 'utf8');
  console.log(`${lang}: +${added} keys -> ${Object.keys(dict).length} total`);
}
