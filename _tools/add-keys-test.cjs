const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');
const K = {
  'tes.eyebrow': { en: 'Testimonials', ru: 'Отзывы', fr: 'Témoignages', ar: 'آراء العملاء', pt: 'Depoimentos', es: 'Testimonios' },
  'tes.title1': { en: 'Trusted by importers in', ru: 'Нам доверяют импортёры из', fr: 'Ils nous font confiance dans', ar: 'يثق بنا مستوردون من', pt: 'A confiança de importadores em', es: 'La confianza de importadores en' },
  'tes.title2': { en: '{n}+ countries', ru: '{n}+ странах', fr: '{n}+ pays', ar: '{n}+ دولة', pt: '{n}+ países', es: '{n}+ países' },
  'tes.sub': {
    en: 'Hear from real buyers who have sourced, inspected, and imported vehicles through Cargration.',
    ru: 'Отзывы реальных покупателей, которые выбирали, проверяли и импортировали автомобили через Cargration.',
    fr: 'Découvrez les retours d\'acheteurs réels qui ont sourcé, inspecté et importé des véhicules via Cargration.',
    ar: 'استمع إلى مشترين حقيقيين اختاروا وفحصوا واستوردوا سيارات عبر Cargration.',
    pt: 'Ouça compradores reais que escolheram, inspecionaram e importaram veículos pela Cargration.',
    es: 'Escucha a compradores reales que han buscado, inspeccionado e importado vehículos a través de Cargration.',
  },
  'tes.all': { en: 'All ({n})', ru: 'Все ({n})', fr: 'Tous ({n})', ar: 'الكل ({n})', pt: 'Todos ({n})', es: 'Todos ({n})' },
  'tes.reviews': { en: '{n} reviews', ru: '{n} отзывов', fr: '{n} avis', ar: '{n} تقييمات', pt: '{n} avaliações', es: '{n} reseñas' },
  'tes.avg': { en: 'Avg', ru: 'Сред.', fr: 'Moy.', ar: 'المتوسط', pt: 'Média', es: 'Prom.' },
  'tes.clear': { en: '← Clear filter', ru: '← Сбросить фильтр', fr: '← Réinitialiser le filtre', ar: '← إزالة التصفية', pt: '← Limpar filtro', es: '← Quitar filtro' },
  'tes.none': {
    en: 'No testimonials found for this filter.',
    ru: 'По этому фильтру отзывы не найдены.',
    fr: 'Aucun témoignage trouvé pour ce filtre.',
    ar: 'لا توجد آراء مطابقة لهذه التصفية.',
    pt: 'Nenhum depoimento encontrado para este filtro.',
    es: 'No se encontraron testimonios para este filtro.',
  },
  'tes.viewAll': { en: 'View all testimonials', ru: 'Показать все отзывы', fr: 'Voir tous les témoignages', ar: 'عرض كل الآراء', pt: 'Ver todos os depoimentos', es: 'Ver todos los testimonios' },
  'tes.share': {
    en: 'Share your experience with other importers.',
    ru: 'Поделитесь своим опытом с другими импортёрами.',
    fr: 'Partagez votre expérience avec d\'autres importateurs.',
    ar: 'شارك تجربتك مع المستوردين الآخرين.',
    pt: 'Compartilhe sua experiência com outros importadores.',
    es: 'Comparte tu experiencia con otros importadores.',
  },
  'tes.leave': { en: 'Leave a Review', ru: 'Оставить отзыв', fr: 'Laisser un avis', ar: 'اكتب تقييمًا', pt: 'Deixar um depoimento', es: 'Dejar un testimonio' },
  'tes.ctaTitle': {
    en: 'See why importers choose us',
    ru: 'Узнайте, почему импортёры выбирают нас',
    fr: 'Découvrez pourquoi les importateurs nous choisissent',
    ar: 'تعرف على لماذا يختارنا المستوردون',
    pt: 'Veja por que importadores nos escolhem',
    es: 'Descubre por qué los importadores nos eligen',
  },
  'tes.ctaSub': {
    en: 'Browse our inventory and start your own success story.',
    ru: 'Просмотрите наш каталог и начните собственную историю успеха.',
    fr: 'Parcourez notre inventaire et commencez votre propre réussite.',
    ar: 'تصفح مخزوننا وابدأ قصة نجاحك الخاصة.',
    pt: 'Navegue pelo nosso estoque e comece sua própria história de sucesso.',
    es: 'Explora nuestro inventario y comienza tu propia historia de éxito.',
  },
  'tes.ctaInv': { en: 'Browse Inventory', ru: 'Каталог автомобилей', fr: 'Voir l\'inventaire', ar: 'تصفح المخزون', pt: 'Ver o estoque', es: 'Ver inventario' },
  'tes.ctaChat': { en: 'Start a Conversation', ru: 'Начать общение', fr: 'Démarrer une conversation', ar: 'ابدأ محادثة', pt: 'Iniciar uma conversa', es: 'Iniciar una conversación' },
};

for (const f of ['en', 'ru', 'fr', 'ar', 'pt', 'es']) {
  const p = path.join(D, f + '.json');
  const d = JSON.parse(fs.readFileSync(p, 'utf8'));
  let n = 0;
  for (const [k, v] of Object.entries(K)) { if (d[k] === undefined) { d[k] = v[f]; n++; } }
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
  console.log(f, '+' + n);
}
