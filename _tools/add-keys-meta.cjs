// Adds meta.newDesc / meta.usedDesc to all six dictionaries. Run: node _tools/add-keys-meta.cjs
const fs = require('fs');
const path = require('path');

const additions = {
  en: {
    'meta.newDesc': 'Brand-new Chinese vehicles with minimal mileage, ready for immediate export. BYD, Li Auto, Chery, Geely and more at FOB prices.',
    'meta.usedDesc': 'Quality pre-owned vehicles from the Chinese domestic market, fully inspected with verified mileage and export documentation.',
  },
  ru: {
    'meta.newDesc': 'Совершенно новые автомобили из Китая с минимальным пробегом, готовые к немедленному экспорту. BYD, Li Auto, Chery, Geely и другие по ценам FOB.',
    'meta.usedDesc': 'Качественные автомобили с пробегом с внутреннего рынка Китая: полный осмотр, проверенный пробег и экспортные документы.',
  },
  fr: {
    'meta.newDesc': "Véhicules chinois neufs à faible kilométrage, prêts pour une exportation immédiate. BYD, Li Auto, Chery, Geely et plus aux prix FOB.",
    'meta.usedDesc': "Véhicules d'occasion de qualité du marché chinois, entièrement inspectés avec kilométrage vérifié et documents d'exportation.",
  },
  es: {
    'meta.newDesc': 'Vehículos chinos nuevos con kilometraje mínimo, listos para exportación inmediata. BYD, Li Auto, Chery, Geely y más a precios FOB.',
    'meta.usedDesc': 'Vehículos usados de calidad del mercado chino, totalmente inspeccionados con kilometraje verificado y documentación de exportación.',
  },
  pt: {
    'meta.newDesc': 'Veículos chineses novos com quilometragem mínima, prontos para exportação imediata. BYD, Li Auto, Chery, Geely e mais a preços FOB.',
    'meta.usedDesc': 'Veículos usados de qualidade do mercado chinês, totalmente inspecionados com quilometragem verificada e documentação de exportação.',
  },
  ar: {
    'meta.newDesc': 'سيارات صينية جديدة بمسافات منخفضة وجاهزة للتصدير الفوري. BYD وLi Auto وChery وGeely والمزيد بأسعار FOB.',
    'meta.usedDesc': 'سيارات مستعملة عالية الجودة من السوق الصينية، مفحوصة بالكامل بمسافات موثقة ووثائق تصدير.',
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
