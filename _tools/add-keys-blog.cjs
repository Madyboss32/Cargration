const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');
const K = {
  'blg.eyebrow': { en: 'Blog', ru: 'Блог', fr: 'Blog', ar: 'المدونة', pt: 'Blog', es: 'Blog' },
  'blg.title': { en: 'Industry Insights & Guides', ru: 'Аналитика и руководства отрасли', fr: 'Analyses et guides du secteur', ar: 'رؤى وأدلة القطاع', pt: 'Insights e Guias do Setor', es: 'Perspectivas y Guías del Sector' },
  'blg.read': { en: 'Read Article →', ru: 'Читать статью →', fr: 'Lire l\'article →', ar: 'اقرأ المقال →', pt: 'Ler artigo →', es: 'Leer artículo →' },
  'blg.by': { en: 'by', ru: 'автор:', fr: 'par', ar: 'بقلم', pt: 'por', es: 'por' },
  'blg.chatWa': { en: 'Chat on WhatsApp', ru: 'Написать в WhatsApp', fr: 'Discuter sur WhatsApp', ar: 'محادثة واتساب', pt: 'Conversar no WhatsApp', es: 'Chatea por WhatsApp' },
  'blg.quote': { en: 'Get Quote', ru: 'Запросить цену', fr: 'Demander un devis', ar: 'اطلب عرض سعر', pt: 'Pedir cotação', es: 'Solicitar cotización' },
  'blg.back': { en: 'Back to Blog', ru: 'Назад к блогу', fr: 'Retour au blog', ar: 'العودة إلى المدونة', pt: 'Voltar ao blog', es: 'Volver al blog' },
};

for (const f of ['en', 'ru', 'fr', 'ar', 'pt', 'es']) {
  const p = path.join(D, f + '.json');
  const d = JSON.parse(fs.readFileSync(p, 'utf8'));
  let n = 0;
  for (const [k, v] of Object.entries(K)) { if (d[k] === undefined) { d[k] = v[f]; n++; } }
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
  console.log(f, '+' + n);
}
