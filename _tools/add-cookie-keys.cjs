const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');

const translations = {
  en: {
    'cookie.banner': 'We use cookies for analytics and to improve your experience. You can accept or decline analytics cookies.',
    'cookie.accept': 'Accept All',
    'cookie.decline': 'Essential Only',
    'cookie.learnMore': 'Learn More',
  },
  ru: {
    'cookie.banner': 'Мы используем файлы cookie для аналитики и улучшения вашего опыта. Вы можете принять или отклонить аналитические cookie.',
    'cookie.accept': 'Принять все',
    'cookie.decline': 'Только необходимые',
    'cookie.learnMore': 'Подробнее',
  },
  fr: {
    'cookie.banner': 'Nous utilisons des cookies pour l\'analytics et pour améliorer votre expérience. Vous pouvez accepter ou refuser les cookies analytiques.',
    'cookie.accept': 'Tout accepter',
    'cookie.decline': 'Essentiels uniquement',
    'cookie.learnMore': 'En savoir plus',
  },
  ar: {
    'cookie.banner': 'نستخدم ملفات تعريف الارتباط لتحليلات وتحسين تجربتك. يمكنك قبول أو رفض ملفات تعريف الارتباط التحليلية.',
    'cookie.accept': 'قبول الكل',
    'cookie.decline': 'الضرورية فقط',
    'cookie.learnMore': 'اعرف المزيد',
  },
  pt: {
    'cookie.banner': 'Usamos cookies para analytics e para melhorar sua experiência. Você pode aceitar ou recusar cookies analíticos.',
    'cookie.accept': 'Aceitar Todos',
    'cookie.decline': 'Apenas Essenciais',
    'cookie.learnMore': 'Saiba Mais',
  },
  es: {
    'cookie.banner': 'Usamos cookies para analytics y para mejorar tu experiencia. Puedes aceptar o rechazar las cookies analíticas.',
    'cookie.accept': 'Aceptar Todas',
    'cookie.decline': 'Solo Esenciales',
    'cookie.learnMore': 'Más Información',
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
