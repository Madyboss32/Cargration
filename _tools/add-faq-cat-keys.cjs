const fs = require('fs');
const path = require('path');

const dictDir = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries');

const newKeys = {
  en: {
    'faq.cat.ev-charging': 'EV & Charging',
    'faq.cat.homologation': 'Homologation',
    'contact.faqTitle': 'Frequently Asked Questions',
  },
  ru: {
    'faq.cat.ev-charging': 'Электромобили и зарядка',
    'faq.cat.homologation': 'Гомологация',
    'contact.faqTitle': 'Часто задаваемые вопросы',
  },
  fr: {
    'faq.cat.ev-charging': 'VE et recharge',
    'faq.cat.homologation': 'Homologation',
    'contact.faqTitle': 'Questions fréquentes',
  },
  ar: {
    'faq.cat.ev-charging': 'السيارات الكهربائية والشحن',
    'faq.cat.homologation': 'التوافق',
    'contact.faqTitle': 'الأسئلة الشائعة',
  },
  pt: {
    'faq.cat.ev-charging': 'Veículos Elétricos e Carregamento',
    'faq.cat.homologation': 'Homologação',
    'contact.faqTitle': 'Perguntas frequentes',
  },
  es: {
    'faq.cat.ev-charging': 'Vehículos Eléctricos y Carga',
    'faq.cat.homologation': 'Homologación',
    'contact.faqTitle': 'Preguntas frecuentes',
  },
};

let totalAdded = 0;

for (const [lang, keys] of Object.entries(newKeys)) {
  const filePath = path.join(dictDir, `${lang}.json`);
  const content = fs.readFileSync(filePath, 'utf8');
  const dict = JSON.parse(content);

  let added = 0;
  for (const [key, value] of Object.entries(keys)) {
    if (!(key in dict)) {
      dict[key] = value;
      added++;
    }
  }

  if (added > 0) {
    // Find the line with the last faq.cat key and insert after it
    const lines = content.split('\n');
    let lastFaqCatLine = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('"faq.cat.')) {
        lastFaqCatLine = i;
      }
    }

    if (lastFaqCatLine >= 0) {
      // Find the comma at end of that line and ensure it's there
      // Then insert new lines after it
      const insertLines = [];
      for (const [key, value] of Object.entries(keys)) {
        if (!(key in dict) || !content.includes(`"${key}"`)) {
          insertLines.push(`  "${key}": "${value}",`);
        }
      }

      if (insertLines.length > 0) {
        // Find the line with last faq.cat key and add after it
        lines.splice(lastFaqCatLine + 1, 0, ...insertLines);
        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
        console.log(`${lang}.json: added ${insertLines.length} keys`);
        totalAdded += insertLines.length;
      } else {
        console.log(`${lang}.json: keys already exist`);
      }
    }
  } else {
    console.log(`${lang}.json: all keys already present`);
  }
}

console.log(`\nTotal keys added: ${totalAdded}`);
