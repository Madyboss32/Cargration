// Adds ContactPage strings to all six dictionaries. Run: node _tools/add-keys-contact.cjs
const fs = require('fs');
const path = require('path');

const additions = {
  en: {
    'contact.eyebrow': 'Contact',
    'contact.title': 'Get in Touch',
    'contact.formTitle': 'Send Us a Message',
    'contact.infoTitle': 'Contact Information',
    'contact.address': 'Address',
    'contact.addressValue': 'Beijing, China',
    'contact.hours': 'Working Hours',
    'contact.hoursValue': 'Mon–Sat: 9:00 AM – 9:00 PM (Beijing Time)',
    'contact.instantChat': 'Prefer Instant Chat?',
    'contact.instantChatSub': 'Reach us directly on WhatsApp or Telegram. Average response time: 12 minutes.',
    'contact.waInstead': 'Message us on WhatsApp instead',
    'form.selectOption': 'Select an option',
  },
  ru: {
    'contact.eyebrow': 'Контакты',
    'contact.title': 'Свяжитесь с нами',
    'contact.formTitle': 'Напишите нам',
    'contact.infoTitle': 'Контактная информация',
    'contact.address': 'Адрес',
    'contact.addressValue': 'Пекин, Китай',
    'contact.hours': 'Часы работы',
    'contact.hoursValue': 'Пн–Сб: 9:00 – 21:00 (пекинское время)',
    'contact.instantChat': 'Предпочитаете мгновенный чат?',
    'contact.instantChatSub': 'Пишите нам напрямую в WhatsApp или Telegram. Среднее время ответа: 12 минут.',
    'contact.waInstead': 'Написать в WhatsApp',
    'form.selectOption': 'Выберите вариант',
  },
  fr: {
    'contact.eyebrow': 'Contact',
    'contact.title': 'Contactez-nous',
    'contact.formTitle': 'Envoyez-nous un message',
    'contact.infoTitle': 'Coordonnées',
    'contact.address': 'Adresse',
    'contact.addressValue': 'Pékin, Chine',
    'contact.hours': "Horaires d'ouverture",
    'contact.hoursValue': 'Lun–Sam : 9h00 – 21h00 (heure de Pékin)',
    'contact.instantChat': 'Vous préférez le chat instantané ?',
    'contact.instantChatSub': 'Contactez-nous directement sur WhatsApp ou Telegram. Temps de réponse moyen : 12 minutes.',
    'contact.waInstead': 'Écrivez-nous plutôt sur WhatsApp',
    'form.selectOption': 'Choisir une option',
  },
  es: {
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Póngase en contacto',
    'contact.formTitle': 'Envíenos un mensaje',
    'contact.infoTitle': 'Información de contacto',
    'contact.address': 'Dirección',
    'contact.addressValue': 'Pekín, China',
    'contact.hours': 'Horario de atención',
    'contact.hoursValue': 'Lun–Sáb: 9:00 – 21:00 (hora de Pekín)',
    'contact.instantChat': '¿Prefiere el chat instantáneo?',
    'contact.instantChatSub': 'Contáctenos directamente por WhatsApp o Telegram. Tiempo medio de respuesta: 12 minutos.',
    'contact.waInstead': 'Escríbanos por WhatsApp',
    'form.selectOption': 'Seleccione una opción',
  },
  pt: {
    'contact.eyebrow': 'Contato',
    'contact.title': 'Entre em contato',
    'contact.formTitle': 'Envie-nos uma mensagem',
    'contact.infoTitle': 'Informações de contato',
    'contact.address': 'Endereço',
    'contact.addressValue': 'Pequim, China',
    'contact.hours': 'Horário de atendimento',
    'contact.hoursValue': 'Seg–Sáb: 9:00 – 21:00 (horário de Pequim)',
    'contact.instantChat': 'Prefere chat instantâneo?',
    'contact.instantChatSub': 'Fale conosco diretamente no WhatsApp ou Telegram. Tempo médio de resposta: 12 minutos.',
    'contact.waInstead': 'Fale conosco pelo WhatsApp',
    'form.selectOption': 'Selecione uma opção',
  },
  ar: {
    'contact.eyebrow': 'اتصل بنا',
    'contact.title': 'تواصل معنا',
    'contact.formTitle': 'أرسل لنا رسالة',
    'contact.infoTitle': 'معلومات الاتصال',
    'contact.address': 'العنوان',
    'contact.addressValue': 'بكين، الصين',
    'contact.hours': 'ساعات العمل',
    'contact.hoursValue': 'الاثنين–السبت: 9:00 صباحًا – 9:00 مساءً (بتوقيت بكين)',
    'contact.instantChat': 'تفضّل الدردشة الفورية؟',
    'contact.instantChatSub': 'تواصل معنا مباشرة عبر واتساب أو تليجرام. متوسط وقت الرد: 12 دقيقة.',
    'contact.waInstead': 'راسلنا على واتساب بدلاً من ذلك',
    'form.selectOption': 'اختر خيارًا',
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
