const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');

const updates = {
  en: {
    'blg.share': 'Share this article',
    'blg.more': 'More Articles',
    'blg.copyLink': 'Copy link',
    'blg.linkCopied': 'Link copied!',
  },
  ru: {
    'blg.share': 'Поделиться статьёй',
    'blg.more': 'Другие статьи',
    'blg.copyLink': 'Копировать ссылку',
    'blg.linkCopied': 'Ссылка скопирована!',
  },
  fr: {
    'blg.share': 'Partager cet article',
    'blg.more': 'Autres articles',
    'blg.copyLink': 'Copier le lien',
    'blg.linkCopied': 'Lien copié !',
  },
  ar: {
    'blg.share': 'شارك هذا المقال',
    'blg.more': 'مقالات أخرى',
    'blg.copyLink': 'نسخ الرابط',
    'blg.linkCopied': 'تم نسخ الرابط!',
  },
  pt: {
    'blg.share': 'Compartilhar este artigo',
    'blg.more': 'Mais artigos',
    'blg.copyLink': 'Copiar link',
    'blg.linkCopied': 'Link copiado!',
  },
  es: {
    'blg.share': 'Compartir este artículo',
    'blg.more': 'Más artículos',
    'blg.copyLink': 'Copiar enlace',
    'blg.linkCopied': '¡Enlace copiado!',
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
