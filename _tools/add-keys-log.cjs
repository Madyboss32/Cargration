const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');
const K = {
  'log.eyebrow': { en: 'Logistics', ru: 'Логистика', fr: 'Logistique', ar: 'اللوجستيات', pt: 'Logística', es: 'Logística' },
  'log.title': { en: 'Shipping & Logistics', ru: 'Доставка и логистика', fr: 'Expédition & logistique', ar: 'الشحن والخدمات اللوجستية', pt: 'Frete & logística', es: 'Envío & logística' },
  'log.sub': {
    en: 'Ocean freight from 8 Chinese ports, rail corridors to Central Asia and Russia, and documentation support for 42+ destination countries.',
    ru: 'Морские перевозки из 8 портов Китая, железнодорожные коридоры в Центральную Азию и Россию и документационная поддержка более чем для 42 стран.',
    fr: 'Fret maritime depuis 8 ports chinois, corridors ferroviaires vers l\'Asie centrale et la Russie, et accompagnement documentaire pour plus de 42 pays de destination.',
    ar: 'شحن بحري من 8 موانئ صينية وممرات سكك حديدية إلى آسيا الوسطى وروسيا ودعم مستندي لأكثر من 42 دولة.',
    pt: 'Frete marítimo a partir de 8 portos chineses, corredores ferroviários para Ásia Central e Rússia e suporte documental para mais de 42 países.',
    es: 'Flete marítimo desde 8 puertos chinos, corredores ferroviarios hacia Asia Central y Rusia, y soporte documental para más de 42 países de destino.',
  },
  'log.routesEyebrow': { en: 'Routes', ru: 'Маршруты', fr: 'Itinéraires', ar: 'المسارات', pt: 'Rotas', es: 'Rutas' },
  'log.routesTitle': { en: 'Active Shipping Routes', ru: 'Действующие маршруты', fr: 'Itinéraires d\'expédition actifs', ar: 'مسارات الشحن النشطة', pt: 'Rotas de envio ativas', es: 'Rutas de envío activas' },
  'log.ocean': { en: 'Ocean', ru: 'Море', fr: 'Maritime', ar: 'بحري', pt: 'Marítimo', es: 'Marítimo' },
  'log.rail': { en: 'Rail', ru: 'Ж/д', fr: 'Ferroviaire', ar: 'سكة حديد', pt: 'Ferroviário', es: 'Ferroviario' },
  'log.days': { en: 'days', ru: 'дн.', fr: 'jours', ar: 'أيام', pt: 'dias', es: 'días' },
  'log.calcEyebrow': { en: 'Calculator', ru: 'Калькулятор', fr: 'Calculateur', ar: 'الحاسبة', pt: 'Calculadora', es: 'Calculadora' },
  'log.calcTitle': { en: 'Estimate Your Shipping Cost', ru: 'Рассчитайте стоимость доставки', fr: 'Estimez votre coût d\'expédition', ar: 'قدّر تكلفة شحنك', pt: 'Estime seu custo de frete', es: 'Estima tu costo de envío' },
  'log.portEyebrow': { en: 'Port Information', ru: 'Информация о портах', fr: 'Informations portuaires', ar: 'معلومات الموانئ', pt: 'Informações dos portos', es: 'Información de puertos' },
  'log.portTitle': { en: 'Departure Ports', ru: 'Порты отправления', fr: 'Ports de départ', ar: 'موانئ الشحن', pt: 'Portos de partida', es: 'Puertos de salida' },
  'log.port1': { en: 'Tianjin Port', ru: 'Порт Тяньцзинь', fr: 'Port de Tianjin', ar: 'ميناء تيانجين', pt: 'Porto de Tianjin', es: 'Puerto de Tianjin' },
  'log.port1d': {
    en: 'Northern China\'s largest port. Primary hub for Russia, Central Asia, and Europe. Full container and Ro-Ro facilities.',
    ru: 'Крупнейший порт Северного Китая. Главный хаб для России, Центральной Азии и Европы. Полная контейнерная и Ro-Ro инфраструктура.',
    fr: 'Plus grand port du nord de la Chine. Hub principal pour la Russie, l\'Asie centrale et l\'Europe. Installations conteneurs et Ro-Ro complètes.',
    ar: 'أكبر موانئ شمال الصين. المحور الرئيسي لروسيا وآسيا الوسطى وأوروبا، بمرافق حاويات وRo-Ro كاملة.',
    pt: 'Maior porto do norte da China. Hub principal para Rússia, Ásia Central e Europa, com estrutura completa de contêineres e Ro-Ro.',
    es: 'El mayor puerto del norte de China. Centro principal para Rusia, Asia Central y Europa, con instalaciones completas de contenedores y Ro-Ro.',
  },
  'log.port2': { en: 'Shanghai Port', ru: 'Порт Шанхай', fr: 'Port de Shanghai', ar: 'ميناء شنغهاي', pt: 'Porto de Xangai', es: 'Puerto de Shanghái' },
  'log.port2d': {
    en: 'World\'s busiest container port. Covers Middle East, Africa, South America, and Oceania routes.',
    ru: 'Самый загруженный контейнерный порт мира. Направления на Ближний Восток, в Африку, Южную Америку и Океанию.',
    fr: 'Port à conteneurs le plus fréquenté au monde. Couvre les routes vers le Moyen-Orient, l\'Afrique, l\'Amérique du Sud et l\'Océanie.',
    ar: 'أكثر موانئ الحاويات ازدحامًا في العالم، ويغطي مسارات الشرق الأوسط وأفريقيا وأمريكا الجنوبية وأوقيانوسيا.',
    pt: 'Porto de contêineres mais movimentado do mundo. Cobre rotas para Oriente Médio, África, América do Sul e Oceania.',
    es: 'El puerto de contenedores más concurrido del mundo. Cubre rutas hacia Medio Oriente, África, Sudamérica y Oceanía.',
  },
  'log.port3': { en: 'Guangzhou Port', ru: 'Порт Гуанчжоу', fr: 'Port de Guangzhou', ar: 'ميناء قوانغتشو', pt: 'Porto de Cantão (Guangzhou)', es: 'Puerto de Cantón' },
  'log.port3d': {
    en: 'Southern China hub. Direct services to Southeast Asia, Africa, and South America.',
    ru: 'Хаб Южного Китая. Прямые линии в Юго-Восточную Азию, Африку и Южную Америку.',
    fr: 'Hub du sud de la Chine. Services directs vers l\'Asie du Sud-Est, l\'Afrique et l\'Amérique du Sud.',
    ar: 'محور جنوب الصين، بخدمات مباشرة إلى جنوب شرق آسيا وأفريقيا وأمريكا الجنوبية.',
    pt: 'Hub do sul da China. Serviços diretos para Sudeste Asiático, África e América do Sul.',
    es: 'Centro del sur de China. Servicios directos al Sudeste Asiático, África y Sudamérica.',
  },
  'log.port4': { en: 'Shenzhen Port', ru: 'Порт Шэньчжэнь', fr: 'Port de Shenzhen', ar: 'ميناء شنجن', pt: 'Porto de Shenzhen', es: 'Puerto de Shenzhen' },
  'log.port4d': {
    en: 'Major tech and automotive hub. Routes to Middle East, Africa, and Europe.',
    ru: 'Крупный технологический и автомобильный хаб. Маршруты на Ближний Восток, в Африку и Европу.',
    fr: 'Grand pôle technologique et automobile. Routes vers le Moyen-Orient, l\'Afrique et l\'Europe.',
    ar: 'قطب تقني وسيارات رئيسي، بمسارات إلى الشرق الأوسط وأفريقيا وأوروبا.',
    pt: 'Grande polo tecnológico e automotivo. Rotas para Oriente Médio, África e Europa.',
    es: 'Gran polo tecnológico y automotriz. Rutas hacia Medio Oriente, África y Europa.',
  },
  'log.port5': { en: 'Ningbo Port', ru: 'Порт Нинбо', fr: 'Port de Ningbo', ar: 'ميناء نينغبو', pt: 'Porto de Ningbo', es: 'Puerto de Ningbo' },
  'log.port5d': {
    en: 'Key Zhejiang hub. Complementary routes to Shanghai with competitive rates.',
    ru: 'Ключевой хаб Чжэцзяна. Дополняет шанхайские направления по конкурентным ставкам.',
    fr: 'Hub clé du Zhejiang. Routes complémentaires à Shanghai avec tarifs compétitifs.',
    ar: 'محور رئيسي في تشجيانغ، بمسارات مكمّلة لشنغهاي وبأسعار تنافسية.',
    pt: 'Hub-chave de Zhejiang. Rotas complementares às de Xangai com tarifas competitivas.',
    es: 'Centro clave de Zhejiang. Rutas complementarias a Shanghái con tarifas competitivas.',
  },
  'log.port6': { en: 'Dalian Port', ru: 'Порт Далянь', fr: 'Port de Dalian', ar: 'ميناء داليان', pt: 'Porto de Dalian', es: 'Puerto de Dalian' },
  'log.port6d': {
    en: 'Northeast China hub. Fastest routes to Vladivostok and Russian Far East.',
    ru: 'Хаб Северо-Восточного Китая. Самые быстрые маршруты во Владивосток и на российский Дальний Восток.',
    fr: 'Hub du nord-est chinois. Routes les plus rapides vers Vladivostok et l\'Extrême-Orient russe.',
    ar: 'محور شمال شرق الصين، بأسرع المسارات إلى فلاديفوستوك والشرق الأقصى الروسي.',
    pt: 'Hub do nordeste chinês. Rotas mais rápidas para Vladivostok e Extremo Oriente russo.',
    es: 'Centro del noreste chino. Rutas más rápidas a Vladivostok y el Lejano Oriente ruso.',
  },
  'log.transitEyebrow': { en: 'Transit Times', ru: 'Сроки в пути', fr: 'Temps de transit', ar: 'مدة العبور', pt: 'Tempo de trânsito', es: 'Tiempos de tránsito' },
  'log.transitTitle': { en: 'Estimated Transit Times', ru: 'Ориентировочные сроки доставки', fr: 'Temps de transit estimés', ar: 'مدد العبور التقديرية', pt: 'Tempos de trânsito estimados', es: 'Tiempos de tránsito estimados' },
  'log.thDest': { en: 'Destination', ru: 'Направление', fr: 'Destination', ar: 'الوجهة', pt: 'Destino', es: 'Destino' },
  'log.thSea': { en: 'Ocean Freight', ru: 'Морем', fr: 'Fret maritime', ar: 'شحن بحري', pt: 'Frete marítimo', es: 'Flete marítimo' },
  'log.thRail': { en: 'Rail Freight', ru: 'По ж/д', fr: 'Fret ferroviaire', ar: 'شحن بالسكة', pt: 'Frete ferroviário', es: 'Flete ferroviario' },
  'log.faqEyebrow': { en: 'Shipping FAQ', ru: 'FAQ о доставке', fr: 'FAQ expédition', ar: 'أسئلة الشحن', pt: 'FAQ frete', es: 'FAQ de envíos' },
  'log.faqTitle': { en: 'Questions About Shipping', ru: 'Вопросы о доставке', fr: 'Questions sur l\'expédition', ar: 'أسئلة عن الشحن', pt: 'Perguntas sobre frete', es: 'Preguntas sobre el envío' },
  'log.ctaTitle': { en: 'Need a Custom Quote?', ru: 'Нужен индивидуальный расчёт?', fr: 'Besoin d\'un devis sur mesure ?', ar: 'تحتاج عرض سعر مخصص؟', pt: 'Precisa de uma cotação sob medida?', es: '¿Necesitas una cotización personalizada?' },
  'log.ctaSub': {
    en: 'Contact our logistics team for personalized shipping rates and transit times to your destination port.',
    ru: 'Свяжитесь с логистической командой для персональных ставок и сроков до вашего порта назначения.',
    fr: 'Contactez notre équipe logistique pour des tarifs personnalisés et des temps de transit vers votre port de destination.',
    ar: 'تواصل مع فريقنا اللوجستي للحصول على أسعار ومدد عبور مخصصة إلى مينائك.',
    pt: 'Fale com nosso time logístico para tarifas personalizadas e tempos de trânsito até o seu porto de destino.',
    es: 'Contacta a nuestro equipo logístico para tarifas y tiempos de tránsito personalizados hasta tu puerto de destino.',
  },
  'log.ctaQuote': { en: 'Get Shipping Quote', ru: 'Получить расчёт доставки', fr: 'Obtenir un devis d\'expédition', ar: 'احصل على عرض شحن', pt: 'Solicitar cotação de frete', es: 'Solicitar cotización de envío' },
};

for (const f of ['en', 'ru', 'fr', 'ar', 'pt', 'es']) {
  const p = path.join(D, f + '.json');
  const d = JSON.parse(fs.readFileSync(p, 'utf8'));
  let n = 0;
  for (const [k, v] of Object.entries(K)) { if (d[k] === undefined) { d[k] = v[f]; n++; } }
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
  console.log(f, '+' + n);
}
