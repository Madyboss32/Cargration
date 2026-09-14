// Swaps `alternates: { canonical: X }` for `alternates: hreflangAlternates(X)` in page files.
const fs = require('fs');

const files = [
  'app/(site)/[lang]/inventory/page.tsx',
  'app/(site)/[lang]/new-cars/page.tsx',
  'app/(site)/[lang]/used-cars/page.tsx',
  'app/(site)/[lang]/evs/page.tsx',
  'app/(site)/[lang]/compare/page.tsx',
  'app/(site)/[lang]/blog-post/[id]/page.tsx',
  'app/(site)/[lang]/country-guide/[slug]/page.tsx',
  'app/(site)/[lang]/car-detail/page.tsx',
];

for (const f of files) {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/alternates: \{ canonical: ([^}]+?) \}/g, 'alternates: hreflangAlternates($1)');
  fs.writeFileSync(f, c);
  console.log(`patched ${f}`);
}
