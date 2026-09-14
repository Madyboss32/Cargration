const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');
const K = {
  'car.eyebrow': { en: 'Careers', ru: 'Вакансии', fr: 'Carrières', ar: 'وظائف', pt: 'Carreiras', es: 'Empleo' },
  'car.title': { en: 'Join Cargration', ru: 'Присоединяйтесь к Cargration', fr: 'Rejoignez Cargration', ar: 'انضم إلى Cargration', pt: 'Junte-se à Cargration', es: 'Únete a Cargration' },
  'car.sub': {
    en: 'We are building the most trusted vehicle export platform from China. Join a team of 40+ specialists across Beijing, Tianjin, and Shanghai.',
    ru: 'Мы создаём самую надёжную платформу экспорта автомобилей из Китая. Присоединяйтесь к команде из 40+ специалистов в Пекине, Тяньцзине и Шанхае.',
    fr: 'Nous construisons la plateforme d\'exportation de véhicules la plus fiable de Chine. Rejoignez une équipe de plus de 40 spécialistes à Pékin, Tianjin et Shanghai.',
    ar: 'نبني منصة تصدير المركبات الأكثر موثوقية من الصين. انضم إلى فريق يضم أكثر من 40 متخصصًا في بكين وتيانجين وشنغهاي.',
    pt: 'Estamos construindo a plataforma de exportação de veículos mais confiável da China. Junte-se a uma equipe de mais de 40 especialistas em Pequim, Tianjin e Xangai.',
    es: 'Estamos construyendo la plataforma de exportación de vehículos más confiable de China. Únete a un equipo de más de 40 especialistas en Pekín, Tianjin y Shanghái.',
  },
  'car.p1t': { en: 'Global Impact', ru: 'Глобальное влияние', fr: 'Impact mondial', ar: 'تأثير عالمي', pt: 'Impacto global', es: 'Impacto global' },
  'car.p1d': {
    en: 'Export to 42+ countries. Every role at Cargration contributes to connecting Chinese manufacturers with international buyers.',
    ru: 'Экспорт в более чем 42 страны. Каждая роль в Cargration помогает связывать китайских производителей с международными покупателями.',
    fr: 'Exporter vers plus de 42 pays. Chaque rôle chez Cargration contribue à connecter les constructeurs chinois aux acheteurs internationaux.',
    ar: 'التصدير إلى أكثر من 42 دولة. كل دور في Cargration يساهم في ربط الشركات الصينية بالمشترين الدوليين.',
    pt: 'Exportação para mais de 42 países. Cada função na Cargration ajuda a conectar fabricantes chineses a compradores internacionais.',
    es: 'Exportación a más de 42 países. Cada rol en Cargration contribuye a conectar a los fabricantes chinos con compradores internacionales.',
  },
  'car.p2t': { en: 'Multilingual Team', ru: 'Многоязычная команда', fr: 'Équipe multilingue', ar: 'فريق متعدد اللغات', pt: 'Equipe multilíngue', es: 'Equipo multilingüe' },
  'car.p2d': {
    en: 'Work alongside native speakers of English, Russian, French, Arabic, Portuguese, Spanish, and Chinese.',
    ru: 'Работайте бок о бок с носителями английского, русского, французского, арабского, португальского, испанского и китайского языков.',
    fr: 'Travaillez aux côtés de locuteurs natifs anglais, russe, français, arabe, portugais, espagnol et chinois.',
    ar: 'اعمل جنبًا إلى جنب مع متحدثين أصليين بالإنجليزية والروسية والفرنسية والعربية والبرتغالية والإسبانية والصينية.',
    pt: 'Trabalhe ao lado de falantes nativos de inglês, russo, francês, árabe, português, espanhol e chinês.',
    es: 'Trabaja junto a hablantes nativos de inglés, ruso, francés, árabe, portugués, español y chino.',
  },
  'car.p3t': { en: 'Growth', ru: 'Рост', fr: 'Croissance', ar: 'نمو', pt: 'Crescimento', es: 'Crecimiento' },
  'car.p3d': {
    en: 'From 500 exports in 2022 to 12,400+ in 2026. Fast-growing team with real career advancement.',
    ru: 'От 500 экспортов в 2022 году до более 12 400 в 2026-м. Быстрорастущая команда с реальным карьерным ростом.',
    fr: 'De 500 exportations en 2022 à plus de 12 400 en 2026. Une équipe en forte croissance avec de vraies évolutions de carrière.',
    ar: 'من 500 عملية تصدير في 2022 إلى أكثر من 12400 في 2026. فريق سريع النمو مع تقدم وظيفي حقيقي.',
    pt: 'De 500 exportações em 2022 para mais de 12.400 em 2026. Equipe em rápido crescimento com real progressão de carreira.',
    es: 'De 500 exportaciones en 2022 a más de 12.400 en 2026. Equipo en rápido crecimiento con verdadero desarrollo profesional.',
  },
  'car.openTitle': { en: 'Open Positions', ru: 'Открытые вакансии', fr: 'Postes ouverts', ar: 'الوظائف المتاحة', pt: 'Vagas abertas', es: 'Vacantes abiertas' },
  'car.deptOps': { en: 'Operations', ru: 'Операции', fr: 'Opérations', ar: 'العمليات', pt: 'Operações', es: 'Operaciones' },
  'car.deptQa': { en: 'Quality Assurance', ru: 'Контроль качества', fr: 'Assurance qualité', ar: 'ضمان الجودة', pt: 'Garantia de qualidade', es: 'Control de calidad' },
  'car.deptSales': { en: 'Sales', ru: 'Продажи', fr: 'Ventes', ar: 'المبيعات', pt: 'Vendas', es: 'Ventas' },
  'car.deptSupport': { en: 'Customer Support', ru: 'Поддержка клиентов', fr: 'Service client', ar: 'دعم العملاء', pt: 'Suporte ao cliente', es: 'Atención al cliente' },
  'car.fulltime': { en: 'Full-time', ru: 'Полная занятость', fr: 'Temps plein', ar: 'دوام كامل', pt: 'Tempo integral', es: 'Tiempo completo' },
  'car.apply': { en: 'Apply', ru: 'Откликнуться', fr: 'Postuler', ar: 'قدّم الآن', pt: 'Candidatar-se', es: 'Aplicar' },
  'car.noRoleT': { en: 'Don\'t See Your Role?', ru: 'Не нашли свою роль?', fr: 'Vous ne trouvez pas votre poste ?', ar: 'لم تجد وظيفتك؟', pt: 'Não encontrou sua vaga?', es: '¿No encuentras tu puesto?' },
  'car.noRoleD': {
    en: 'Send us your CV and tell us how you can contribute to Cargration. We are always looking for talented people.',
    ru: 'Пришлите нам своё резюме и расскажите, чем вы можете быть полезны Cargration. Мы всегда ищем талантливых людей.',
    fr: 'Envoyez-nous votre CV et dites-nous comment vous pouvez contribuer à Cargration. Nous recherchons toujours des talents.',
    ar: 'أرسل لنا سيرتك الذاتية وأخبرنا كيف يمكن أن تساهم في Cargration. نبحث دائمًا عن المواهب.',
    pt: 'Envie seu currículo e conte como você pode contribuir com a Cargration. Estamos sempre em busca de talentos.',
    es: 'Envíanos tu CV y cuéntanos cómo puedes contribuir a Cargration. Siempre buscamos personas con talento.',
  },
  'car.sendCv': { en: 'Send Your CV', ru: 'Отправить резюме', fr: 'Envoyer votre CV', ar: 'أرسل سيرتك الذاتية', pt: 'Enviar seu currículo', es: 'Envía tu CV' },
};

for (const f of ['en', 'ru', 'fr', 'ar', 'pt', 'es']) {
  const p = path.join(D, f + '.json');
  const d = JSON.parse(fs.readFileSync(p, 'utf8'));
  let n = 0;
  for (const [k, v] of Object.entries(K)) { if (d[k] === undefined) { d[k] = v[f]; n++; } }
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
  console.log(f, '+' + n);
}
