const fs = require('fs')
const file = 'src/data/blog.ts'
let src = fs.readFileSync(file, 'utf-8')

// Post 0 (id:0) — EV Exports: add links to inventory and inspection
src = src.replace(
  'For buyers interested in importing Chinese EVs, Cargration offers end-to-end support — from selection and inspection to shipping and customs documentation. Contact our team for current pricing and availability.</p>\'',
  'For buyers interested in importing Chinese EVs, Cargration offers end-to-end support — from <a href="/inventory?fuelType=Electric">browsing our EV inventory</a> to <a href="/inspection">inspection</a> and shipping documentation. Contact our team for current pricing and availability.</p>\''
)

// Post 1 (id:1) — Shipping Routes: add link to logistics page
src = src.replace(
  'For a personalized shipping quote to any Latin American destination, contact our logistics team via WhatsApp or Telegram.</p>\'',
  'For a personalized shipping quote to any Latin American destination, visit our <a href="/logistics">logistics page</a> or contact our team via WhatsApp or Telegram.</p>\''
)

// Post 2 (id:2) — Import Guide: add internal links in steps
// Step 1 — link to inventory
src = src.replace(
  'Start by browsing Cargration\'s inventory of 20,800+ vehicles.',
  'Start by browsing <a href="/inventory">Cargration\'s inventory</a> of 20,800+ vehicles.'
)

// Step 2 — link to inspection
src = src.replace(
  'Cargration conducts a 7-point inspection covering engine',
  'Cargration conducts a <a href="/inspection">7-point inspection</a> covering engine'
)

// Step 3 — link to payment
src = src.replace(
  'Payment is made via wire transfer to Cargration\'s corporate account.',
  'Payment is made via wire transfer — see our <a href="/payment">payment page</a> for details.'
)

// Step 4 — link to logistics
src = src.replace(
  'Ocean freight typically takes 25-45 days depending on destination.',
  'Ocean freight typically takes 25-45 days depending on destination. See our <a href="/logistics">logistics page</a> for route details.'
)

// Post 3 (id:3) — Inspection: add link to inspection page
src = src.replace(
  'Every vehicle exported by Cargration undergoes a rigorous 7-point inspection before it is listed for sale.',
  'Every vehicle exported by Cargration undergoes a rigorous <a href="/inspection">7-point inspection</a> before it is listed for sale.'
)

src = src.replace(
  'For an additional fee, Cargration also arranges third-party inspection through independent verification services.</p>\'',
  'For an additional fee, Cargration also arranges third-party inspection through independent verification services. Learn more on our <a href="/inspection">inspection page</a>.</p>\''
)

// Post 4 (id:4) — Top SUVs: add links to inventory filtered by brand
src = src.replace(
  'All vehicles listed above are available for export through Cargration with full inspection, documentation, and shipping support. Contact our team for current inventory and pricing.</p>\'',
  'All vehicles listed above are available for export through Cargration with full inspection, documentation, and shipping support. <a href="/inventory">Browse our full inventory</a> or contact our team for current pricing.</p>\''
)

// Post 5 (id:5) — FOB Pricing: add links to payment and inventory
src = src.replace(
  'At Cargration, all FOB prices are all-inclusive of inspection, documentation, and port loading.',
  'At Cargration, all FOB prices are all-inclusive of inspection, documentation, and port loading. See our <a href="/payment">payment page</a> for a full cost breakdown.'
)

src = src.replace(
  'For a full breakdown of costs for your specific import, contact Cargration\'s team on WhatsApp or Telegram.</p>\'',
  'For a full breakdown of costs for your specific import, visit our <a href="/payment">payment page</a> or contact Cargration\'s team on WhatsApp or Telegram.</p>\''
)

fs.writeFileSync(file, src, 'utf-8')
console.log('Blog internal cross-links added successfully')
