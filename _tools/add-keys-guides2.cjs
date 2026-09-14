const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');
const K = {
  'cg.docTitle': { en: 'Complete documentation checklist', ru: 'Полный чек-лист документов', fr: 'Checklist documentaire complète', ar: 'قائمة المستندات الكاملة', pt: 'Checklist completo de documentos', es: 'Lista de verificación completa de documentos' },
  'cg.ageLbl': { en: 'Vehicle Age', ru: 'Возраст автомобиля', fr: 'Âge du véhicule', ar: 'عمر السيارة', pt: 'Idade do veículo', es: 'Antigüedad del vehículo' },
};

for (const f of ['en', 'ru', 'fr', 'ar', 'pt', 'es']) {
  const p = path.join(D, f + '.json');
  const d = JSON.parse(fs.readFileSync(p, 'utf8'));
  let n = 0;
  for (const [k, v] of Object.entries(K)) { if (d[k] === undefined) { d[k] = v[f]; n++; } }
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
  console.log(f, '+' + n);
}
