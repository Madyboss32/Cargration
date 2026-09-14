import type { FAQCategory } from '../types'
import { faqI18n } from '../content/faq'

export interface FaqEntry extends FAQCategory {
  id: string
}

export interface FaqCategoryGroup {
  id: string
  labelKey: string
  items: FaqEntry[]
}

const RAW: Record<string, Omit<FaqEntry, 'id'>[]> = {
  general: [
    { q: 'Do you sell to individual buyers, or only dealers?', a: 'Both. Most of our volume is B2B dealer orders, but individual buyers can purchase a single new or used car from China through the same inspection and export process.' },
    { q: 'Is the FOB price final, or are there hidden fees?', a: 'The FOB price you\'re quoted is what you pay us. Most Cargration Chinese car prices are quoted FOB China with no hidden fees. Destination-side duties, VAT, and clearing agent fees are separate and vary by country \u2014 we\'ll help you estimate them.' },
    { q: 'How long does shipping take?', a: 'Ocean freight typically runs 25\u201345 days depending on destination port. Rail routes to Central Asia and parts of Europe run 12\u201320 days. Specific transit times for your destination can be provided by our logistics team.' },
    { q: 'Can I get a deeper inspection before I commit?', a: 'Yes. A deep inspection report is available for an additional fee, which is refunded against the FOB price if you proceed with the purchase.' },
    { q: 'Do you ship spare parts with the vehicle?', a: 'In most cases, yes \u2014 parts can ship with the vehicle provided they\'re truthfully declared to customs. Some items need to be reviewed case by case.' },
    { q: 'Which countries can you currently ship to?', a: '42 countries as of now, including Russia, Algeria, Armenia, Brazil, the UAE, C\u00f4te d\'Ivoire, and Iran. If your country isn\'t listed, reach out \u2014 we\'re adding routes regularly.' },
    { q: 'Can I visit your facility before committing to a large order?', a: 'Absolutely. We welcome buyers to visit our Beijing and Guizhou facilities to inspect vehicles in person before placing bulk orders. We recommend scheduling at least one week in advance.' },
    { q: 'Do you provide export compliance certificates?', a: 'Yes. We prepare all required export documentation including certificates of origin, export declarations, and destination-specific compliance documents as part of our standard service.' },
    { q: 'What if the vehicle doesn\'t meet my country\'s import requirements?', a: 'We help verify your country\'s import regulations before purchase and advise on compliance requirements. If a vehicle cannot be legally imported to your destination, we\'ll help you find an alternative.' },
    { q: 'Can you source vehicles not listed on your platform?', a: 'Yes. Our sourcing team can search dealer and factory inventory across China to locate specific models, trims, or configurations not currently in our catalog.' },
    { q: 'Do you provide after-sale technical support?', a: 'Yes. Our team assists with technical questions after purchase, including software setup, feature activation, and connecting you with local service networks in your country.' },
  ],
  buying: [
    { q: 'Do you inspect the vehicle before payment?', a: 'Yes. Every vehicle undergoes a documented 200-point inspection before it is listed on our platform. We also provide a full photo and video report so you can assess the condition firsthand. If you want additional confidence, we offer a deep inspection at a nominal fee that is fully refunded against the FOB price if you proceed with the purchase.' },
    { q: 'What happens after payment is made?', a: 'Once payment is confirmed, our documentation team immediately begins preparing your export paperwork including the commercial invoice, export certificate, bill of lading, and any destination-specific customs documents. Simultaneously, our logistics team books the container slot at your chosen departure port and schedules the vehicle for transport.' },
    { q: 'Can I choose the exact vehicle I want?', a: 'Absolutely. You can request a specific Chinese car brand, model, year, trim, color, and mileage range. If it\'s in our catalog, we can show you the exact unit available, new or used. If it\'s not currently listed, our sourcing team can search dealer and factory inventory across China to locate a match.' },
    { q: 'How long does it take to confirm an order?', a: 'Most orders are confirmed within 1-3 business days of selecting a vehicle and completing the inspection review.' },
    { q: 'Is a deposit required before booking?', a: 'Deposit requirements vary depending on the vehicle type, price, and order volume. For first-time buyers, we typically request a partial deposit to confirm the booking, with the balance due before the vehicle is loaded for shipment.' },
    { q: 'How do I know I won\'t be scammed buying from China?', a: 'We\'re a registered company with verified offices in Beijing and Guizhou. Every transaction includes a signed contract, official invoice, and documented inspection. We never ask for payment to personal accounts, and you can verify our business registration before committing.' },
    { q: 'What payment methods do you accept?', a: 'We accept international wire transfer (T/T), and for certain transactions, trade assurance through major platforms. All payments go to our official company bank account. We do not accept cryptocurrency or payments to individual accounts.' },
    { q: 'Can I use escrow or a third-party payment service?', a: 'Yes. We support escrow arrangements through major platforms, which adds an extra layer of buyer protection. The escrow fee is typically borne by the buyer and releases funds once you confirm vehicle condition at destination.' },
    { q: 'What happens if the vehicle doesn\'t match the listing?', a: 'We document every vehicle thoroughly with photos, videos, and a 200-point inspection report before listing. If material discrepancies exist between the listing and the actual vehicle, we offer a full refund before shipment or a replacement vehicle at no extra cost.' },
    { q: 'How do I calculate my total landed cost?', a: 'Your total landed cost includes: the FOB price we quote, ocean/rail freight, cargo insurance, destination customs duties, VAT/GST, port handling fees, and your clearing agent\'s charges. We provide a detailed cost breakdown before you commit.' },
    { q: 'Do you offer volume discounts for fleet purchases?', a: 'Yes. We offer tiered pricing for bulk orders \u2014 typically 5+ vehicles. Pricing is negotiated based on vehicle type, model mix, and destination. Contact our sales team for a custom fleet quote.' },
    { q: 'Can I get a proforma invoice before paying?', a: 'Yes. We issue a detailed proforma invoice covering the vehicle specification, FOB price, estimated shipping costs, and payment terms. This document can also be used to arrange bank financing or import licenses.' },
  ],
  inspection: [
    { q: 'What documents are prepared before shipment?', a: 'Our documentation team prepares a complete export package including the commercial invoice, packing list, export certificate, certificate of origin, and the bill of lading (B/L) for ocean freight or rail waybill for overland routes.' },
    { q: 'Can I get a deeper inspection report?', a: 'Yes. Our standard 200-point inspection covers mechanical, cosmetic, and history verification. For buyers who want extra detail, we offer a deep inspection that includes a compression test, detailed paint meter readings, interior moisture check, undercarriage inspection with photos, and a comprehensive test drive report.' },
    { q: 'What details are included in the inspection report?', a: 'The standard inspection report includes: engine condition and noise assessment, transmission operation, brake pad thickness and rotor condition, tire tread depth and evenness, suspension component inspection, exterior panel alignment and paint condition with photos, interior condition including seats and electronics, glass condition, and mileage verification against service records.' },
    { q: 'Are export certificates prepared in advance?', a: 'Yes. One of the key advantages of working with Cargration is that we prepare all export documentation before the vehicle is transported to the port.' },
    { q: 'How do I receive the paperwork after purchase?', a: 'All documentation is shared digitally through your account manager as each document is completed. The original bill of lading and export certificate are prepared and can be sent via courier to you or your clearing agent at the destination port.' },
    { q: 'Can I send my own inspector to verify the vehicle?', a: 'Yes. You\'re welcome to send an independent inspector or third-party inspection agency to our facility. We\'ll coordinate access and provide any additional documentation your inspector needs.' },
    { q: 'What diagnostic tools do you use during inspection?', a: 'We use OBD-II scanners for engine and electronic diagnostics, paint thickness gauges for body panel analysis, brake lathe testers, and compression testers. Our deep inspection includes all of these plus a comprehensive test drive evaluation.' },
    { q: 'Do you check for structural damage or previous accident history?', a: 'Yes. Our inspection includes frame/structural integrity checks, panel gap measurements, and cross-referencing with China\'s national vehicle history database. Any accident history is disclosed in the inspection report.' },
    { q: 'How do you verify odometer accuracy?', a: 'We cross-reference the displayed odometer reading against official service records, diagnostic tool data, and physical wear indicators. China\'s national vehicle registration system also logs mileage at each annual inspection, providing an additional verification layer.' },
    { q: 'Do you provide emission test data for my country?', a: 'We can provide the vehicle\'s original emission standard classification (China V, China VI, etc.) and tailpipe test results where available. For specific country compliance, we recommend consulting your local import authority.' },
  ],
  shipping: [
    { q: 'Which shipping methods do you offer?', a: 'We offer ocean container freight and rail freight. Ocean is the most common option, with vehicles loaded into 20ft or 40ft containers at departure ports in China (Shanghai, Guangzhou, Shenzhen, Ningbo). Rail is a faster alternative to Central Asia, Russia, and parts of Europe.' },
    { q: 'Do you assist with customs clearance?', a: 'We coordinate the shipping and documentation process to support smooth customs clearance at destination. While we do not act as your clearing agent, we provide your local agent with all the documentation they need in advance.' },
    { q: 'How is the vehicle delivered to the customer?', a: 'Delivery is completed at the destination port, where the vehicle is released to you or your appointed clearing agent. Your agent handles customs clearance, pays any applicable duties and taxes, and arranges inland transport.' },
    { q: 'How long does international shipping take?', a: 'Ocean freight from Chinese ports: Vladivostok 7\u201312 days, Jebel Ali 18\u201322 days, Abidjan 25\u201335 days, Santos 30\u201345 days, Algiers 22\u201330 days. Rail routes to Central Asia and European destinations typically range from 12\u201320 days. As a Chinese car exporter, we match your destination to the fastest available route.' },
    { q: 'Will I receive tracking updates during transit?', a: 'Yes. Once your container is loaded and the vessel or train departs, you will receive a tracking number and link to monitor your shipment in real time.' },
    { q: 'Do you offer cargo insurance?', a: 'Yes. Cargo insurance covering the full transit value is available for both ocean and rail shipments. The cost is calculated as a percentage of the cargo value.' },
    { q: 'Can I ship multiple vehicles in one container?', a: 'Yes. We regularly consolidate 2\u20134 vehicles into a single 40ft container depending on vehicle dimensions. This significantly reduces per-unit shipping costs and is our most popular option for multi-vehicle orders.' },
    { q: 'What happens if my vehicle is damaged during transit?', a: 'All vehicles are professionally secured with wheel chocks, ratchet straps, and soft ties before loading. We photograph the vehicle condition before and after loading. If damage occurs, our cargo insurance covers full repair or replacement value.' },
    { q: 'Can you ship non-running or salvage vehicles?', a: 'Yes. Non-running vehicles can be loaded using forklifts or cranes. Salvage and rebuilt-title vehicles are shipped with the same documentation and care. Additional handling fees may apply for non-operational units.' },
    { q: 'Do you offer RoRo (roll-on/roll-off) shipping?', a: 'We primarily use container shipping for better protection. However, RoRo is available for certain routes and vehicle types, particularly commercial vehicles and oversized units. Contact us for RoRo availability to your destination.' },
    { q: 'What\'s the difference between FCL and LCL for vehicle shipping?', a: 'FCL (Full Container Load) means your vehicle occupies the entire container \u2014 maximum protection and usually more cost-effective for single vehicles. LCL (Less than Container Load) shares container space with other cargo \u2014 cheaper for very small vehicles but with slightly more handling risk.' },
    { q: 'Can you arrange door-to-door delivery?', a: 'Yes. We coordinate end-to-end logistics including inland pickup, port loading, international transit, destination port clearance, and final delivery to your specified address. Door-to-door pricing is provided as a separate quote.' },
    { q: 'How do you handle port congestion or vessel delays?', a: 'We monitor vessel schedules proactively and maintain relationships with multiple shipping lines. If a delay occurs, we notify you immediately, provide updated ETAs, and can arrange alternative routing if the delay is significant.' },
    { q: 'What customs documentation do I need at my end?', a: 'Typically you need: the original Bill of Lading, commercial invoice, packing list, certificate of origin, and your import permit or license. Requirements vary by country \u2014 we provide destination-specific documentation checklists and coordinate with your clearing agent.' },
  ],
  support: [
    { q: 'How quickly will my message be answered?', a: 'Our team typically responds within 30 minutes during working hours. Average response time is 12 minutes.' },
    { q: 'Which languages do you support?', a: 'We support English, Russian, French, Arabic, Portuguese, Spanish, and Chinese. Our team includes native speakers across all these languages.' },
    { q: 'Can I visit your office in China?', a: 'Yes. We have offices in both Beijing and Guizhou \u2014 two of China\'s largest used car markets. Our Beijing office is at 12-B2 Floor, Konggang Ronghuiyuan, Shunyi District. Our Guizhou hub is at Hepeng Village, Shiban Town, Huaxi District, Guiyang. We recommend scheduling an appointment at least one week in advance.' },
    { q: 'How do I contact Cargration?', a: 'You can reach us via WhatsApp, Telegram, email at support@cargration.com, or through the contact form on our website.' },
    { q: 'Do you provide warranty coverage after purchase?', a: 'We offer a limited warranty on major mechanical and electrical components for a defined period after delivery. Coverage details vary by vehicle and are specified in your purchase agreement. Extended warranty options are also available.' },
    { q: 'How do I file a warranty claim?', a: 'Contact your account manager with a description and photos/video of the issue. Our team will assess the claim, and if covered, we either arrange local repair reimbursement or ship replacement parts depending on the nature and severity of the issue.' },
    { q: 'Can you help source replacement parts for my imported vehicle?', a: 'Yes. We maintain relationships with OEM and aftermarket parts suppliers across China. We can source and ship genuine replacement parts for any vehicle purchased through our platform.' },
    { q: 'Do you provide software or OTA update support for Chinese EVs?', a: 'For Chinese-brand EVs, we assist with initial software setup, language configuration, and connectivity activation. For ongoing OTA updates, we connect you with the manufacturer\'s regional support or provide guidance on manual update procedures.' },
    { q: 'What happens if a safety recall affects my vehicle after purchase?', a: 'We notify you immediately if we become aware of any recall affecting vehicles we\'ve exported. We coordinate with the manufacturer to determine available remedies and help arrange repairs through authorized service networks in your country.' },
    { q: 'Do you assist with vehicle registration in my country?', a: 'While registration is ultimately your responsibility, we provide all documentation required by your local authorities including export certificates, technical specifications, and compliance documents. We can also advise on typical registration procedures based on our experience with your country.' },
  ],
  'ev-charging': [
    { q: 'Are Chinese EVs compatible with my country\'s charging infrastructure?', a: 'Compatibility depends on the charging standard used. Most Chinese EVs use GB/T (China\'s national standard). For markets using CCS or CHAdeMO, we can source EVs with compatible ports or provide certified adapter solutions.' },
    { q: 'What charging standards do Chinese EVs use?', a: 'Chinese domestic market EVs primarily use the GB/T standard for both AC and DC charging. Some export-oriented models from BYD, NIO, and others come with CCS2 (European) or CHAdeMO connectors. We help select vehicles with the right standard for your market.' },
    { q: 'Can the charging port be adapted for my country?', a: 'Yes. GB/T to CCS2 and GB/T to CHAdeMO adapters are available from certified manufacturers. We recommend using only UL/T\u00dcV-certified adapters to ensure safety. Some vehicles also support aftermarket port conversion.' },
    { q: 'What is the real-world range of Chinese EVs?', a: 'Real-world range varies by model, driving conditions, and climate. Most Chinese EVs achieve 70\u201385% of their NEDC/CLTC rated range in mixed driving. Highway driving, cold weather, and heavy loads reduce range. We provide real-world range estimates for each electric car so you can pick the right Chinese EV for your market.' },
    { q: 'How does cold weather affect Chinese EV battery performance?', a: 'Like all lithium-ion batteries, Chinese EV batteries experience reduced range in cold temperatures \u2014 typically 20\u201335% reduction below -10\u00b0C. Most newer models include battery preconditioning which significantly improves cold-weather performance and charging speed.' },
    { q: 'Do Chinese EVs support vehicle-to-load (V2L) functionality?', a: 'Many newer Chinese EVs from BYD, Hyundai (Chinese-built), and others offer V2L, allowing the vehicle to power external appliances up to 2\u20133kW. This is useful for camping, emergency power, or off-grid applications.' },
    { q: 'What\'s the typical battery degradation rate for Chinese EVs?', a: 'Modern Chinese EV batteries (LFP and NMC chemistry) typically retain 80\u201390% capacity after 200,000 km or 8\u201310 years. BYD\'s Blade Battery (LFP) and CATL\'s NMC cells are among the most durable. Battery health reports are available in our inspection data.' },
  ],
  homologation: [
    { q: 'Can Chinese vehicles be homologated for road use in my country?', a: 'Most Chinese vehicles can be homologated in markets that accept vehicles meeting comparable safety and emission standards. The process and requirements vary significantly by country. We provide guidance specific to your destination market.' },
    { q: 'Do you provide left-hand drive or right-hand drive?', a: 'Chinese domestic market vehicles are left-hand drive (LHD). We can source LHD vehicles for most markets. Right-hand drive (RHD) variants are available for select models from manufacturers like MG (SAIC) and BYD that produce export-spec RHD versions.' },
    { q: 'Are there countries where Chinese vehicles can\'t be legally imported?', a: 'Some countries have restrictions on vehicle age, emission standards, or origin. We maintain up-to-date import regulation databases for our 42 destination countries and will flag any issues before you commit to a purchase.' },
    { q: 'Do vehicles come with a Certificate of Conformity?', a: 'We provide a Certificate of Origin and export documentation. For markets requiring a Certificate of Conformity (CoC) or type approval, we can assist with the application process through the relevant authorities in your country.' },
  ],
}

const IDS: Record<string, string[]> = {
  general: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', 'g11'],
  buying: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12'],
  inspection: ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10'],
  shipping: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13', 's14'],
  support: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8', 'u9', 'u10'],
  'ev-charging': ['ev1', 'ev2', 'ev3', 'ev4', 'ev5', 'ev6', 'ev7'],
  homologation: ['h1', 'h2', 'h3', 'h4'],
}

export const faqCategoryIds = ['general', 'buying', 'inspection', 'shipping', 'support', 'ev-charging', 'homologation']

export function getFaq(lang = 'en', filter?: string[]): FaqCategoryGroup[] {
  const ov = faqI18n[lang]
  const cats = filter ? faqCategoryIds.filter((c) => filter.includes(c)) : faqCategoryIds
  return cats.map((catId) => ({
    id: catId,
    labelKey: `faq.cat.${catId}`,
    items: (RAW[catId] || []).map((item, i) => {
      const id = IDS[catId][i]
      return { ...item, ...(ov?.[id] ?? {}), id }
    })
  }))
}

export const faqCategories: string[] = ['General', 'Buying Process', 'Inspection & Documents', 'Shipping & Delivery', 'Support', 'EV & Charging', 'Homologation']
export const faqData: Record<string, FAQCategory[]> = RAW as Record<string, FAQCategory[]>
