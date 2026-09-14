const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');

const translations = {
  en: {
    'cmp.metaTitle': 'Compare Saved Vehicles | Cargration',
    'cmp.metaDesc': 'Compare your saved Chinese export vehicles side by side and request one combined FOB quote with freight to your port.',
    'cmp.eyebrow': 'B2B Tools',
    'cmp.h1': 'Compare & Request Quote',
    'cmp.sub': 'Save vehicles from any listing, stack their specs side by side, then send one RFQ to our export team.',
  },
  ru: {
    'cmp.metaTitle': 'Сравнение сохранённых авто | Cargration',
    'cmp.metaDesc': 'Сравните сохранённые китайские экспортные автомобили бок о бок и запросите единую FOB-цену с доставкой до вашего порта.',
    'cmp.eyebrow': 'Инструменты B2B',
    'cmp.h1': 'Сравнение и запрос цены',
    'cmp.sub': 'Сохраняйте авто из любого каталога, сравнивайте характеристики и отправляйте один запрос нашей экспортной команде.',
  },
  fr: {
    'cmp.metaTitle': 'Comparer les véhicules sauvegardés | Cargration',
    'cmp.metaDesc': 'Comparez vos véhicules d\'exportation chinois sauvegardés côte à côte et demandez une devis FOB combiné avec fret vers votre port.',
    'cmp.eyebrow': 'Outils B2B',
    'cmp.h1': 'Comparer et demander un devis',
    'cmp.sub': 'Enregistrez des véhicules depuis n\'importe quelle liste, comparez leurs spécifications et envoyez une seule demande à notre équipe d\'exportation.',
  },
  ar: {
    'cmp.metaTitle': 'مقارنة المركبات المحفوظة | Cargration',
    'cmp.metaDesc': 'قارن مركباتك الصينية المصدرة المحفوظة جنباً إلى جنب واطلب عرض سعر FOB مجمّع مع الشحن إلى مينائك.',
    'cmp.eyebrow': 'أدوات B2B',
    'cmp.h1': 'مقارنة وطلب عرض سعر',
    'cmp.sub': 'احفظ المركبات من أي قائمة، قارن المواصفات جنباً إلى جنب، ثم أرسل طلباً واحداً لفريق التصدير.',
  },
  pt: {
    'cmp.metaTitle': 'Comparar Veículos Salvos | Cargration',
    'cmp.metaDesc': 'Compare seus veículos de exportação chineses salvos lado a lado e solicite uma cotação FOB combinada com frete para seu porto.',
    'cmp.eyebrow': 'Ferramentas B2B',
    'cmp.h1': 'Comparar e Solicitar Cotação',
    'cmp.sub': 'Salve veículos de qualquer listagem, compare suas especificações lado a lado e envie uma única solicitação à nossa equipe de exportação.',
  },
  es: {
    'cmp.metaTitle': 'Comparar Vehículos Guardados | Cargration',
    'cmp.metaDesc': 'Compare sus vehículos de exportación chinos guardados lado a lado y solicite una cotización FOB combinada con flete a su puerto.',
    'cmp.eyebrow': 'Herramientas B2B',
    'cmp.h1': 'Comparar y Solicitar Cotización',
    'cmp.sub': 'Guarde vehículos de cualquier lista, compare sus especificaciones lado a lado y envíe una sola solicitud a nuestro equipo de exportación.',
  },
};

for (const [locale, keys] of Object.entries(translations)) {
  const filePath = path.join(DIR, `${locale}.json`);
  const dict = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let added = 0;
  for (const [key, value] of Object.entries(keys)) {
    if (!(key in dict)) {
      dict[key] = value;
      added++;
    }
  }
  if (added > 0) {
    fs.writeFileSync(filePath, JSON.stringify(dict, null, 2) + '\n', 'utf8');
    console.log(`${locale}: added ${added} keys`);
  } else {
    console.log(`${locale}: all keys exist`);
  }
}

console.log('Done');
