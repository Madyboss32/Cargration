const fs = require('fs');
const path = require('path');
const dir = '.next/server/app/en';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
console.log('Checking', files.length, 'English pages for FAQPage schema:\n');
files.forEach(f => {
  const html = fs.readFileSync(path.join(dir, f), 'utf8');
  const has = html.includes('FAQPage');
  if (has) console.log('  ✓', f, '— has FAQPage');
});
