const http = require('http');
const url = process.argv[2] || 'http://127.0.0.1:3000/en/faq/';
http.get(url, { headers: { Accept: 'text/html' } }, (r) => {
  let d = '';
  r.on('data', c => d += c);
  r.on('end', () => {
    const ldCount = (d.match(/application\/ld\+json/g) || []).length;
    const hasFAQ = d.includes('FAQPage');
    const qCount = (d.match(/"@type":"Question"/g) || []).length;
    const hasAnswer = d.match(/"@type":"Answer"/g) || [];
    console.log('URL:', url);
    console.log('Status:', r.statusCode);
    console.log('ld+json script blocks:', ldCount);
    console.log('Has FAQPage schema:', hasFAQ);
    console.log('Question entries:', qCount);
    console.log('Answer entries:', hasAnswer.length);
    if (hasFAQ) {
      // Extract the FAQ JSON-LD block
      const faqMatch = d.match(/"@type":"FAQPage"[\s\S]*?<\/script>/);
      if (!faqMatch) {
        const idx = d.indexOf('FAQPage');
        console.log('\nFirst 200 chars around FAQPage:', d.substring(idx - 50, idx + 150));
      }
    }
  });
}).on('error', e => console.log('Error:', e.message));
