const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');
const K = {
  'faqp.eyebrow': { en: 'Support', ru: 'Поддержка', fr: 'Support', ar: 'الدعم', pt: 'Suporte', es: 'Soporte' },
  'faqp.title': { en: 'Frequently Asked Questions', ru: 'Часто задаваемые вопросы', fr: 'Foire aux questions', ar: 'الأسئلة المتكررة', pt: 'Perguntas frequentes', es: 'Preguntas frecuentes' },
  'faqp.stillT': { en: 'Still Have Questions?', ru: 'Остались вопросы?', fr: 'Encore des questions ?', ar: 'لا تزال لديك أسئلة؟', pt: 'Ainda tem dúvidas?', es: '¿Todavía tienes preguntas?' },
  'faqp.stillD': {
    en: 'Our team responds within 30 minutes during working hours. Average response time is 12 minutes.',
    ru: 'Наша команда отвечает в течение 30 минут в рабочие часы. Среднее время ответа — 12 минут.',
    fr: 'Notre équipe répond en moins de 30 minutes pendant les heures ouvrées. Temps de réponse moyen : 12 minutes.',
    ar: 'يرد فريقنا خلال 30 دقيقة في ساعات العمل. متوسط وقت الرد 12 دقيقة.',
    pt: 'Nosso time responde em até 30 minutos no horário comercial. Tempo médio de resposta: 12 minutos.',
    es: 'Nuestro equipo responde en menos de 30 minutos en horario laboral. Tiempo medio de respuesta: 12 minutos.',
  },
  'faqp.form': { en: 'Contact Form', ru: 'Форма связи', fr: 'Formulaire de contact', ar: 'نموذج التواصل', pt: 'Formulário de contato', es: 'Formulario de contacto' },
};

for (const f of ['en', 'ru', 'fr', 'ar', 'pt', 'es']) {
  const p = path.join(D, f + '.json');
  const d = JSON.parse(fs.readFileSync(p, 'utf8'));
  let n = 0;
  for (const [k, v] of Object.entries(K)) { if (d[k] === undefined) { d[k] = v[f]; n++; } }
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
  console.log(f, '+' + n);
}
