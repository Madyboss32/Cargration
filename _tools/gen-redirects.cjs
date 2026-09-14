const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

fs.writeFileSync(path.join(publicDir, '_redirects'), '/car-detail /inventory 302\n');

fs.writeFileSync(path.join(publicDir, 'index.html'), `<!DOCTYPE html>
<html><head><meta http-equiv="refresh" content="0;url=/en/"></head><body><script>window.location.replace('/en/')</script></body></html>
`);

console.log('Wrote _redirects and index.html to public/');
