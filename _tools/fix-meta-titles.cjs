const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');

const fixes = {
  en: {
    'meta.blogDesc': 'Insights, guides and industry news about buying, inspecting and shipping Chinese vehicles for export. Expert advice from Cargration.',
    'meta.newTitle': 'New Cars From China for Export — FOB Pricing | Cargration',
    'meta.usedTitle': 'Used Cars From China for Export — FOB Pricing | Cargration',
    'meta.evsTitle': 'Electric Vehicles From China for Export — FOB Prices | Cargration',
    'meta.faqTitle': 'FAQ — Buying & Shipping Chinese Vehicles | Cargration',
    'meta.faqDesc': 'Answers about buying, inspecting, paying for, and shipping Chinese vehicles abroad. FOB pricing, customs duties, certification and warranty FAQs.',
  },
  ru: {
    'meta.blogDesc': 'Статьи, руководства и новости отрасли о покупке, осмотре и отправке китайских автомобилей на экспорт. Экспертные советы от Cargration.',
    'meta.newTitle': 'Новые авто из Китая на экспорт — FOB цены | Cargration',
    'meta.usedTitle': 'Б/у авто из Китая на экспорт — FOB цены | Cargration',
    'meta.evsTitle': 'Электромобили из Китая на экспорт — FOB цены | Cargration',
    'meta.faqTitle': 'Вопросы и ответы — Покупка и доставка китайских авто | Cargration',
    'meta.faqDesc': 'Ответы о покупке, осмотре, оплате и доставке китайских автомобилей за рубеж. FOB цены, пошлины, сертификация и гарантия.',
  },
  fr: {
    'meta.blogDesc': 'Analyses, guides et actualités sur l\'achat, l\'inspection et l\'expédition de véhicules chinois. Conseils d\'experts de Cargration.',
    'meta.newTitle': 'Voitures neuves de Chine pour export — Prix FOB | Cargration',
    'meta.usedTitle': 'Voitures d\'occasion de Chine pour export — Prix FOB | Cargration',
    'meta.evsTitle': 'Véhicules électriques de Chine pour export — Prix FOB | Cargration',
    'meta.faqTitle': 'FAQ — Achat et expédition de véhicules chinois | Cargration',
    'meta.faqDesc': 'Réponses sur l\'achat, l\'inspection, le paiement et l\'expédition de véhicules chinois. Prix FOB, droits de douane, certification et garantie.',
  },
  ar: {
    'meta.blogDesc': 'رؤى وأدلة وأخبار الصناعة حول شراء وفحص وشحن المركبات الصينية للتصدير. نصائح خبراء من كارغرايشن.',
    'meta.newTitle': 'سيارات جديدة من الصين للتصدير — أسعار FOB | Cargration',
    'meta.usedTitle': 'سيارات مستعملة من الصين للتصدير — أسعار FOB | Cargration',
    'meta.evsTitle': 'مركبات كهربائية من الصين للتصدير — أسعار FOB | Cargration',
    'meta.faqTitle': 'الأسئلة الشائعة — شراء وشحن المركبات الصينية | Cargration',
    'meta.faqDesc': 'إجابات حول الشراء والفحص والدفع وشحن المركبات الصينية. أسعار FOB، رسوم الجمارك، التأهيل والضمان.',
  },
  pt: {
    'meta.blogDesc': 'Insights, guias e notícias do setor sobre compra, inspeção e envio de veículos chineses para exportação. Conselhos de especialistas da Cargration.',
    'meta.newTitle': 'Carros Novos da China para Exportação — Preços FOB | Cargration',
    'meta.usedTitle': 'Carros Usados da China para Exportação — Preços FOB | Cargration',
    'meta.evsTitle': 'Veículos Elétricos da China para Exportação — Preços FOB | Cargration',
    'meta.faqTitle': 'FAQ — Compra e envio de veículos chineses | Cargration',
    'meta.faqDesc': 'Respostas sobre compra, inspeção, pagamento e envio de veículos chineses. Preços FOB, tarifas alfandegárias, certificação e garantia.',
  },
  es: {
    'meta.blogDesc': 'Perspectivas, guías y noticias del sector sobre compra, inspección y envío de vehículos chinos para exportación. Asesoramiento experto de Cargration.',
    'meta.newTitle': 'Autos Nuevos de China para Exportación — Precios FOB | Cargration',
    'meta.usedTitle': 'Autos Usados de China para Exportación — Precios FOB | Cargration',
    'meta.evsTitle': 'Vehículos Eléctricos de China para Exportación — Precios FOB | Cargration',
    'meta.faqTitle': 'FAQ — Compra y envío de vehículos chinos | Cargration',
    'meta.faqDesc': 'Respuestas sobre compra, inspección, pago y envío de vehículos chinos. Precios FOB, aranceles, certificación y garantía.',
  },
};

for (const [locale, keys] of Object.entries(fixes)) {
  const filePath = path.join(DIR, `${locale}.json`);
  const dict = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let changed = 0;
  for (const [key, value] of Object.entries(keys)) {
    if (dict[key] !== value) {
      dict[key] = value;
      changed++;
    }
  }
  if (changed > 0) {
    fs.writeFileSync(filePath, JSON.stringify(dict, null, 2) + '\n', 'utf8');
    console.log(`${locale}: updated ${changed} keys`);
  } else {
    console.log(`${locale}: no changes needed`);
  }
}

console.log('Done');
