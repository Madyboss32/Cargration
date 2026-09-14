const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');

const updates = {
  en: {
    'how.title': 'How to Buy a Chinese Vehicle: Step-by-Step Guide',
    'contact.title': 'Contact Cargration: Get a Quote for Chinese Vehicle Export',
    'about.title': 'About Cargration: Your Trusted Chinese Vehicle Export Partner',
    'blg.title': 'Chinese Vehicle Export Blog: Insights & Guides',
    'car.title': 'Join Cargration: Vehicle Export Careers',
    'war.title1': 'Extended Warranty',
    'war.title2': 'for Chinese Vehicle Imports',
    'pay.title1': 'Payment & Pricing',
    'pay.title2': 'for Chinese Vehicle Imports',
    'priv.h1': 'Privacy Policy | Cargration Vehicle Export',
    'toc.h1': 'Terms & Conditions | Cargration Vehicle Export',
  },
  ru: {
    'how.title': 'Как купить китайский автомобиль: пошаговое руководство',
    'contact.title': 'Свяжитесь с Cargration: получите расчёт экспорта китайских авто',
    'about.title': 'О Cargration: ваш надёжный партнёр по экспорту китайских автомобилей',
    'blg.title': 'Блог об экспорте китайских автомобилей: аналитика и гайды',
    'car.title': 'Присоединяйтесь к Cargration: карьера в экспорте автомобилей',
    'war.title1': 'Расширенная гарантия',
    'war.title2': 'на импорт китайских авто',
    'pay.title1': 'Оплата и цены',
    'pay.title2': 'на импорт китайских авто',
    'priv.h1': 'Политика конфиденциальности | Cargration',
    'toc.h1': 'Условия и положения | Cargration',
  },
  fr: {
    'how.title': 'Comment acheter un véhicule chinois : guide étape par étape',
    'contact.title': 'Contactez Cargration : obtenez un devis pour l\'export de véhicules chinois',
    'about.title': 'À propos de Cargration : votre partenaire de confiance pour l\'export de véhicules chinois',
    'blg.title': 'Blog export véhicules chinois : analyses et guides',
    'car.title': 'Rejoignez Cargration : carrières dans l\'export automobile',
    'war.title1': 'Garantie étendue',
    'war.title2': 'pour l\'import de véhicules chinois',
    'pay.title1': 'Paiement et tarifs',
    'pay.title2': 'pour l\'import de véhicules chinois',
    'priv.h1': 'Politique de confidentialité | Cargration',
    'toc.h1': 'Conditions générales | Cargration',
  },
  ar: {
    'how.title': 'كيفية شراء مركبة صينية: دليل خطوة بخطوة',
    'contact.title': 'تواصل مع Cargration: احصل على عرض أسعار لتصدير المركبات الصينية',
    'about.title': 'عن Cargration: شريكك الموثوق لتصدير المركبات الصينية',
    'blg.title': 'مدونة تصدير المركبات الصينية: رؤى وأدلة',
    'car.title': 'انضم إلى Cargration: وظائف في تصدير السيارات',
    'war.title1': 'ضمان موسّع',
    'war.title2': 'لاستيراد المركبات الصينية',
    'pay.title1': 'الدفع والأسعار',
    'pay.title2': 'لاستيراد المركبات الصينية',
    'priv.h1': 'سياسة الخصوصية | Cargration',
    'toc.h1': 'الشروط والأحكام | Cargration',
  },
  pt: {
    'how.title': 'Como comprar um veículo chinês: guia passo a passo',
    'contact.title': 'Fale com a Cargration: obtenha um orçamento para exportação de veículos chineses',
    'about.title': 'Sobre a Cargration: seu parceiro de confiança na exportação de veículos chineses',
    'blg.title': 'Blog de exportação de veículos chineses: insights e guias',
    'car.title': 'Junte-se à Cargration: carreiras na exportação automotiva',
    'war.title1': 'Garantia estendida',
    'war.title2': 'para importação de veículos chineses',
    'pay.title1': 'Pagamento e preços',
    'pay.title2': 'para importação de veículos chineses',
    'priv.h1': 'Política de Privacidade | Cargration',
    'toc.h1': 'Termos e Condições | Cargration',
  },
  es: {
    'how.title': 'Cómo comprar un vehículo chino: guía paso a paso',
    'contact.title': 'Contacta con Cargration: obtén una cotización para exportación de vehículos chinos',
    'about.title': 'Sobre Cargration: tu socio de confianza en la exportación de vehículos chinos',
    'blg.title': 'Blog de exportación de vehículos chinos: información y guías',
    'car.title': 'Únete a Cargration: carreras en exportación automotriz',
    'war.title1': 'Garantía extendida',
    'war.title2': 'para importación de vehículos chinos',
    'pay.title1': 'Pago y precios',
    'pay.title2': 'para importación de vehículos chinos',
    'priv.h1': 'Política de Privacidad | Cargration',
    'toc.h1': 'Términos y Condiciones | Cargration',
  },
};

let total = 0;
for (const [locale, keys] of Object.entries(updates)) {
  const file = path.join(dir, `${locale}.json`);
  const dict = JSON.parse(fs.readFileSync(file, 'utf8'));
  let updated = 0;
  for (const [key, val] of Object.entries(keys)) {
    if (dict[key] !== val) {
      dict[key] = val;
      updated++;
    }
  }
  if (updated > 0) {
    fs.writeFileSync(file, JSON.stringify(dict, null, 2) + '\n', 'utf8');
    console.log(`${locale}: updated ${updated} keys`);
    total += updated;
  } else {
    console.log(`${locale}: no changes`);
  }
}
console.log(`Done — ${total} total updates`);
