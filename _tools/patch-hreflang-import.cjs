// Adds hreflangAlternates import to page files missing it.
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

const IMP = "import { hreflangAlternates } from '@/src/lib/seo'\n";

for (const f of files) {
  let c = fs.readFileSync(f, 'utf8');
  if (!c.includes('hreflangAlternates')) {
    console.log(`SKIP (no usage): ${f}`);
    continue;
  }
  if (c.includes(IMP)) {
    console.log(`OK already: ${f}`);
    continue;
  }
  c = c.replace("import type { Metadata } from 'next'\n", `import type { Metadata } from 'next'\n${IMP}`);
  fs.writeFileSync(f, c);
  console.log(`import added: ${f}`);
}
