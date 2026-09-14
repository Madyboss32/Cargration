const fs = require('fs');
const path = require('path');

const VIEWS_DIR = path.join(__dirname, '..', 'src', 'views');
const IMPORT = "import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'";

const pages = [
  ['AboutPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('nav.about') }]"],
  ['BlogPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('footer.blogNews') }]"],
  ['CareersPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('footer.careers') }]"],
  ['CountryGuidesPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('nav.countryGuides') }]"],
  ['FAQPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('footer.faq') }]"],
  ['HowItWorksPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('nav.howItWorks') }]"],
  ['InspectionPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('nav.inspection') }]"],
  ['LogisticsPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('nav.logistics') }]"],
  ['PaymentPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('footer.payment') }]"],
  ['TestimonialsPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('footer.testimonials') }]"],
  ['WarrantyPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('footer.warranty') }]"],
  ['PrivacyPolicyPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('footer.privacy') }]"],
  ['TermsPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('footer.terms') }]"],
  ['RequestCarPage.tsx', "const bc: BreadcrumbItem[] = [{ label: t('footer.requestCar') }]"],
];

let done = 0, skip = 0;

for (const [filename, bcCode] of pages) {
  const fp = path.join(VIEWS_DIR, filename);
  if (!fs.existsSync(fp)) { skip++; continue; }
  
  let c = fs.readFileSync(fp, 'utf8');
  if (c.includes('BreadcrumbNav')) { console.log('SKIP:', filename); skip++; continue; }
  
  // 1. Add import after last import line
  const lines = c.split('\n');
  let lastImportLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trimStart().startsWith('import ')) lastImportLine = i;
  }
  if (lastImportLine >= 0) {
    lines.splice(lastImportLine + 1, 0, IMPORT);
  }
  c = lines.join('\n');
  
  // 2. Find "return (" and add bc const before it
  const returnMatch = c.match(/(\n  return \()/);
  if (!returnMatch) { console.log('SKIP (no return):', filename); skip++; continue; }
  const returnIdx = c.indexOf(returnMatch[0]);
  
  c = c.slice(0, returnIdx) + '\n\n  ' + bcCode + '\n' + c.slice(returnIdx);
  
  // 3. Find <main> or <div in the return block and insert BreadcrumbNav after the opening tag
  // After inserting bc, the return( block is shifted
  const returnBlock = c.slice(returnIdx + bcCode.length + 4);
  
  // Match the root element opening tag
  const rootTagMatch = returnBlock.match(/<(main|div)(\s[^>]*)?>/) ;
  if (!rootTagMatch) { console.log('SKIP (no root tag):', filename); skip++; continue; }
  
  const rootTagFull = rootTagMatch[0];
  const insertPoint = returnIdx + bcCode.length + 4 + rootTagFull.length;
  
  const bcNav = `\n      <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />`;
  c = c.slice(0, insertPoint) + bcNav + c.slice(insertPoint);
  
  fs.writeFileSync(fp, c);
  done++;
  console.log('DONE:', filename);
}

console.log(`\nDone: ${done}, Skipped: ${skip}`);
