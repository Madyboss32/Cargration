const fs = require('fs');
const html = fs.readFileSync('.next/server/app/en/faq.html', 'utf8');
const scripts = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g);
console.log('Total ld+json blocks:', scripts.length);
scripts.forEach((s, i) => {
  try {
    const json = JSON.parse(s.replace(/<\/?script[^>]*>/g, ''));
    console.log('\nBlock', i + 1, ': @type =', json['@type']);
    if (json['@type'] === 'FAQPage') {
      const q = json.mainEntity || [];
      console.log('  Total questions:', q.length);
      console.log('  First Q:', q[0]?.name?.substring(0, 80));
      console.log('  Last Q:', q[q.length - 1]?.name?.substring(0, 80));
      const hasEmpty = q.some(e => !e.name || !e.acceptedAnswer?.text);
      console.log('  Has empty fields:', hasEmpty);
      const categories = {};
      q.forEach(e => {
        const qText = e.name;
        if (qText.includes('EV') || qText.includes('charging') || qText.includes('battery') || qText.includes('Battery')) {
          categories['ev-charging'] = (categories['ev-charging'] || 0) + 1;
        } else if (qText.includes('homologat') || qText.includes('left-hand') || qText.includes('Certificate of Conformity')) {
          categories['homologation'] = (categories['homologation'] || 0) + 1;
        }
      });
    }
  } catch(e) {
    console.log('Block', i + 1, ': INVALID JSON -', e.message);
  }
});
