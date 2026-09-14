// Adds gallery/blog aria-label keys to all six dictionaries. Run: node _tools/add-keys-aria.cjs
const fs = require('fs');
const path = require('path');

const additions = {
  en: {
    'gallery.viewPhoto': 'View photo {n}',
    'blog.prevPost': 'Previous post',
    'blog.nextPost': 'Next post',
    'blog.goToPost': 'Go to post {n}',
  },
  ru: {
    'gallery.viewPhoto': 'Смотреть фото {n}',
    'blog.prevPost': 'Предыдущая статья',
    'blog.nextPost': 'Следующая статья',
    'blog.goToPost': 'Перейти к статье {n}',
  },
  fr: {
    'gallery.viewPhoto': 'Voir la photo {n}',
    'blog.prevPost': 'Article précédent',
    'blog.nextPost': 'Article suivant',
    'blog.goToPost': "Aller à l'article {n}",
  },
  es: {
    'gallery.viewPhoto': 'Ver foto {n}',
    'blog.prevPost': 'Artículo anterior',
    'blog.nextPost': 'Artículo siguiente',
    'blog.goToPost': 'Ir al artículo {n}',
  },
  pt: {
    'gallery.viewPhoto': 'Ver foto {n}',
    'blog.prevPost': 'Artigo anterior',
    'blog.nextPost': 'Próximo artigo',
    'blog.goToPost': 'Ir para o artigo {n}',
  },
  ar: {
    'gallery.viewPhoto': 'عرض الصورة {n}',
    'blog.prevPost': 'المقال السابق',
    'blog.nextPost': 'المقال التالي',
    'blog.goToPost': 'الانتقال إلى المقال {n}',
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
