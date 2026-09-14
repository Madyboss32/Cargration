import type { CountryGuide } from '../types'
import { guideI18n } from '../content/guides'

export const countryGuides: Record<string, Omit<CountryGuide, 'name' | 'region' | 'flag' | 'transitShort'>> = {
  'russia':   {
    "slug": "russia",
    "heroTitle": "Ship vehicles from China to Russia via rail or sea with full EAEU duty estimates, SBKTS certification, and ERA-GLONASS compliance.",
    "heroDesc": "Russia is China's largest automotive export market, with rail connections via Manzhouli reaching Moscow in 10–18 days and sea routes to Vladivostok in 5–10 days. The EAEU Common Customs Tariff applies 15% ad valorem or specific €/cc duty on new vehicles, plus 22% VAT, a recycling fee (utilizatsionny sbor) based on engine power, and mandatory SBKTS/OTTS certification. Since April 2026, ERA-GLONASS is mandatory for all individual imports. Whether you are a Moscow-based dealer, a Vladivostok importer, or an individual buyer, Cargration handles sourcing, certification, ERA-GLONASS installation, EPTS registration, and shipping so your vehicles clear Russian customs and register with ГИБДД without delays.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2100,
        "label": "Cars to Russia"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 6,
        "label": "Russian Routes Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 89,
        "label": "Russia Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12,
        "label": "Days Transit (Rail)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Russia?",
        "a": "Total taxes for a new petrol vehicle (<3 years, ≤160 hp) typically range from 35–50% of CIF. Customs duty is the higher of 15% ad valorem or a specific €/cc rate. VAT is 22% (increased from 20% on January 1, 2026). The recycling fee for personal-use vehicles under 160 hp is 3,400–5,200 RUB. For vehicles over 160 hp, the recycling fee jumps to 750,000+ RUB, pushing the total well above 60% of CIF. For example, a $25,000 CIF SUV with a 2.0L engine (>160 hp): customs duty ~$3,750 (15% ad valorem), VAT ~$6,325 (22% of $28,750), recycling fee ~$8,500+ (~750,000 RUB commercial rate), total tax ~$18,575 (~74% of CIF). For the same vehicle under 160 hp: recycling fee drops to ~$40 (3,400 RUB), total tax ~$10,115 (~40% of CIF)."
      },
      {
        "q": "How has the recycling fee reform of December 2025 affected imports?",
        "a": "The December 2025 reform introduced a power-based coefficient for the recycling fee (utilizatsionny sbor), fundamentally changing the economics of vehicle imports to Russia. Key changes: vehicles ≤ 160 hp AND ≤ 3.0L engine qualify for preferential personal-use rates (3,400 RUB for new, 5,200 RUB for >3 years old); vehicles exceeding 160 hp are charged at commercial rates (750,000–2,668,000 RUB depending on power range); EVs and hybrids with >80 kW (>109 hp) also lose preferential rates; the fee is indexed annually at 10–20% through 2030. This reform has dramatically impacted the popular large-engine SUV segment. For example, a Haval Jolion (143 hp) pays ~3,400 RUB, while a Chery Tiggo 8 Pro with a 197 hp engine pays ~794,000 RUB — over 200 times more. If you import a vehicle for personal use and resell it within 12 months, the ФТС will reassess the recycling fee at commercial rates."
      },
      {
        "q": "What is ERA-GLONASS and why is it mandatory?",
        "a": "ERA-GLONASS is Russia's state emergency response system, functionally equivalent to the EU's eCall system. It automatically contacts emergency services in the event of a collision using satellite navigation (GLONASS) and cellular networks. Since April 1, 2026, ERA-GLONASS is mandatory for all vehicles imported into Russia — including individual imports (the previous moratorium under Decree No. 855 has been lifted). Requirements include: the system must be certified to Russian GOST 33470 standards (EU eCall T-Box cannot pass Russian certification directly), must support Remote SIM Provisioning (RSP) for eSIM, must be installed by an authorised Russian installer with a certified vehicle-specific kit. Installation cost: ~15,000–30,000 RUB including hardware, activation, and certification. Without ERA-GLONASS, ГИБДД will refuse vehicle registration and the vehicle cannot be operated on public roads. We coordinate ERA-GLONASS installation through our partner network at the port of entry before EPTS issuance."
      },
      {
        "q": "What is the difference between SBKTS and OTTS certification?",
        "a": "SBKTS (Свидетельство о безопасности конструкции транспортного средства — Single Vehicle Safety Certificate) is for individual or small-batch vehicle imports. It certifies that a specific vehicle meets TR CU 018/2011 safety requirements. Cost: ~20,000–45,000 RUB. Processing time: 3–7 days. Required before EPTS can be issued. OTTS (Одобрение типа транспортного средства — Vehicle Type Approval) is for series production imports — the full EAEU type approval process. It is valid for up to 3 years for serial production or indefinitely for a specific batch. Requires full testing: braking, emissions, noise, lighting, electromagnetic compatibility, safety systems. Cost: starting from ~141,000 RUB. Processing time: 2–3 months. Requires a WMI Certificate (World Manufacturer Identifier) first. OTTS is the preferred route for commercial importers bringing multiple vehicles of the same model. SBKTS is suitable for individual imports or small lots. Chinese manufacturers with EAEU type approval (Haval, Chery, Geely) have factory OTTS — their vehicles can be registered with just the COC equivalent."
      },
      {
        "q": "What is the age limit for importing a used car to Russia?",
        "a": "Russia does not have an absolute age ban on used vehicle imports, but the duty structure strongly discourages older vehicles. Vehicles under 3 years old qualify for the ad valorem (15%) or specific rate calculation (whichever is higher). Vehicles 3–7 years old pay fixed specific rates per cc (€1.5–€3.6/cc depending on engine size). Vehicles over 7 years old pay even higher specific rates (€3.0–€5.7/cc). In practice, most importers bring vehicles under 5 years old because: the specific rates for older vehicles add 40–80% more duty; older vehicles may struggle with Euro 5 emissions compliance (minimum for Russia); and the practical maximum is around 5 years for cost-effective import. For example, a 2.0L petrol vehicle valued at $20,000 CIF: under 3 years pays ~$3,000 duty (15% ad valorem); at 3–7 years pays €2.7/cc × 2,000cc = €5,400 (~$5,900) — nearly double."
      },
      {
        "q": "What is the EAEU customs loophole that was closed in April 2026?",
        "a": "Until April 2026, importers could clear vehicles through EAEU member states with lower duty rates — primarily Kyrgyzstan, Kazakhstan, and Armenia — and then transport them to Russia for registration. These countries had lower customs duties, recycling fees, and VAT rates than Russia, creating a significant cost advantage. Vehicles imported through Kyrgyzstan, for example, faced approximately 30% lower total tax. Russia closed this loophole through an amendment to Resolution 1291, effective April 1, 2026. Now, any vehicle cleared in another EAEU country and subsequently registered in Russia must pay a \"compensation\" component covering the difference in customs duty, VAT, and excise between the EAEU rate and the Russian rate. This reform has removed the cost advantage of routing through Kyrgyzstan or Armenia and has standardised the effective tax burden across the EAEU for vehicles ultimately registered in Russia."
      },
      {
        "q": "What Chinese brands are most popular in Russia?",
        "a": "Haval (Great Wall Motors) is the best-selling Chinese brand in Russia, with the Jolion being the single most popular Chinese model — its 143 hp engine keeps it under the critical 160 hp recycling fee threshold. Chery is the second-largest Chinese brand, with the Tiggo 7 Pro (147 hp) and Tiggo 8 leading SUV sales. Geely has a strong presence with the Monjaro and Coolray models. BYD is the EV leader with the Yuan Plus (Atto 3) and Han EV. Zeekr serves the premium EV segment. Across all brands, Russian buyers prioritise: powerful cabin heating and remote engine start for winter conditions (temperatures as low as -40°C in Siberia); heated seats, steering wheel, and mirrors as standard; high ground clearance for snow-covered and unpaved roads; cold-start reliability for diesel and petrol engines; Russian-language HMI and infotainment with GLONASS navigation; and comprehensive dealer and service networks in Moscow, St. Petersburg, and regional centres. Chinese brands now command over 40% of Russia's new car market following the withdrawal of Western and Japanese manufacturers."
      },
      {
        "q": "Can I import an electric vehicle from China to Russia?",
        "a": "Yes, and EVs benefit from zero import duty under the EAEU extended tariff exemption — saving approximately 15% compared to an equivalent ICE vehicle. However, the December 2025 recycling fee reform significantly changed the economics. EVs with ≤80 kW (≈109 hp) qualify for the preferential personal-use recycling fee (~3,400–5,200 RUB). Most Chinese EVs exceed 80 kW — for example, the BYD Yuan Plus has a 150 kW motor — and therefore pay the full commercial recycling fee (750,000+ RUB). VAT at 22% still applies with no EV exemption. ERA-GLONASS, SBKTS, and EPTS are all required for EVs. Key considerations: charging infrastructure is concentrated in Moscow, St. Petersburg, and along major federal highways — regional coverage is limited; cold-weather range reduction of 30–50% is typical in Russian winters; and domestic EV production (Evolute, Moskvich 3e) receives preferential government support unavailable to imports. Despite these challenges, the zero-duty benefit makes EVs attractive in the premium segment where buyers can absorb the higher recycling fee."
      },
      {
        "q": "What is the typical timeline from order to delivery in Moscow?",
        "a": "By rail (fastest): Day 1–3 — vehicle selection and deposit; Day 4–10 — vehicle procurement and inspection; Day 11–18 — documentation preparation (SBKTS application or OTTS verification, commercial invoice, CO, export declaration); Day 19 — container loading at Chinese rail terminal; Day 20–32 — rail transit to Moscow via Manzhouli/Zabaikalsk (10–18 days) plus customs clearance; Day 33–39 — ERA-GLONASS installation, EPTS issuance, ГИБДД registration (5–7 business days); Day 40 — vehicle ready for pickup. Total rail timeline: approximately 6–7 weeks. By sea to Vladivostok (for Far East delivery): sea transit 5–10 days, total approximately 5–6 weeks. By sea to Novorossiysk (for southern Russia): sea transit 25–35 days, total approximately 9–11 weeks. The SBKTS process (3–7 days) and ERA-GLONASS installation can often be completed concurrently with customs clearance to minimise overall timeline. Using a licensed customs broker familiar with ФТС electronic declaration processing can significantly reduce clearance time."
      },
      {
        "q": "What documents require notarised Russian translation?",
        "a": "All foreign-language documents submitted to Russian authorities must be translated into Russian and notarised. Documents requiring translation include: the foreign trade contract between buyer and seller; the commercial invoice and purchase contract; the Certificate of Origin (CO); the export certificate or foreign title/registration document; the Bill of Lading or CMR rail waybill; and any Power of Attorney for the customs broker. The translation process: any competent translator may prepare the translation; the translator's signature must be certified by a Russian notary (the notary verifies only the translator's identity and signature, not the translation quality); for documents from China, they must first be apostilled in China, then translated and notarised in Russia. Cost: typically 1,500–5,000 RUB per document depending on length. Russia is a signatory to the Hague Apostille Convention (since 1992). We can recommend sworn translators and notaries in Moscow, Vladivostok, and Novorossiysk who are familiar with Chinese vehicle documentation."
      },
      {
        "q": "Do I need a customs broker in Russia?",
        "a": "Yes, foreign companies and individuals cannot directly clear customs in Russia — you must use a Russian resident company (your own branch office or a licensed customs broker) as the declarant. The customs broker handles: registration as a foreign economic activity participant with the Federal Customs Service (ФТС); electronic customs declaration via the ФТС Unified Automated Information System; calculation and payment of customs duty, VAT, and recycling fee; preparation and submission of the customs value declaration; coordination of customs inspection if required; and release of goods from customs control. A customs broker typically charges 30,000–100,000 RUB depending on vehicle value and complexity. For individual importers, a customs representative (таможенный представитель) can act on your behalf with a notarised Power of Attorney. We can connect you with recommended licensed customs brokers at Moscow, Vladivostok, Novorossiysk, and Zabaikalsk who specialise in Chinese vehicle imports and understand the current ФТС requirements."
      },
      {
        "q": "What modifications do Chinese domestic market vehicles need for Russia?",
        "a": "Chinese domestic market vehicles typically require several modifications to pass Russian certification and ГИБДД inspection: cold-weather package — essential for Russian winters, including additional cabin heating capacity, heated washer nozzles, heated windscreen, and remote engine start (Chinese domestic vehicles often lack these); ERA-GLONASS installation — mandatory; GLONASS navigation — Chinese vehicles typically have GPS/BDS; GLONASS-compatible module may be needed; headlights — must meet EAEU asymmetric low-beam pattern (ECE R112 standards); rear fog light — mandatory and often absent from Chinese domestic vehicles; speedometer — must display km/h as primary; tyre certification — tyres must carry E-mark or EAEU certification; winter tyres are mandatory in Russia from December to February; emissions — must meet Euro 5 minimum (Euro 6 recommended); Chinese China 6 standard is equivalent but specific OBD calibrations may differ; radio frequencies — EU/EAEU R&TTE compliance required. Most Chinese brands exporting to Russia now produce factory \"Russia-spec\" variants with these features. We coordinate any needed modifications through our partner workshops at the port of entry before SBKTS inspection."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles destined for Russia?",
        "a": "Absolutely. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Russian buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many Moscow and Vladivostok-based dealers visit before placing orders — particularly to verify EAEU certification documentation, confirm that engine power stays under the 160 hp threshold for preferential recycling fees, and ensure cold-weather specifications are factory-fitted. Virtual inspections via video call are also available if travel is not feasible. We also offer third-party inspection services through TÜV Rheinland, SGS, or Bureau Veritas in China for buyers who cannot travel."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Russia?",
        "a": "New vehicles sourced from manufacturer-authorised Chinese dealers carry the full factory warranty. Haval, Chery, and Geely all have extensive authorised dealer networks across Russia with warranty service available in Moscow, St. Petersburg, Novosibirsk, Yekaterinburg, and regional centres. Most Chinese brands offer 3–5 year manufacturer warranties. For used vehicles and parallel imports, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at additional cost. All warranty terms are documented in the sales agreement before payment. For parallel-imported Western brands (BMW, Mercedes, Toyota) sourced from China, warranty is typically limited to our 30-day cover as factory warranties may not be transferable. For Russian buyers, we recommend verifying warranty transferability with the brand's Russian distributor before purchase — particularly for EV batteries, which have separate warranty terms. Russian consumer protection law (Закон о защите прав потребителей) provides additional statutory protections for new vehicle purchases."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Russia?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival at the Russian destination — whether by rail to Moscow or by sea to Vladivostok, Novorossiysk, or St. Petersburg. The policy covers rail or sea transit, terminal handling at all transfer points (including the gauge-change at Zabaikalsk for rail shipments), and any overland transport within Russia. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We have maintained a 95% damage-free delivery rate on the Russia route. Our container loading standards — wheel chocks, frame strapping, and protective wrapping — exceed standard industry practice. For rail shipments, containers are secured on specialised flatcars with proper lashing for the Trans-Siberian route. Photographs and video are taken before loading to document condition, and these are shared with you as part of the handover record. Russian rail liability frameworks provide strong consumer protection for transit damage under the SMGS (Agreement on International Railway Freight Communication) convention."
      }
    ]
  },
  'belarus':   {
    "slug": "belarus",
    "heroTitle": "Ship vehicles from China to Belarus with EAEU customs clearance and full documentation.",
    "heroDesc": "Belarus is the EU gateway into the 183-million-person EAEU customs union. Once cleared in Minsk, vehicles move duty-free across Russia, Kazakhstan, Kyrgyzstan, and Armenia. Cargration handles sourcing, EAEU-compliant documentation, shipping, and customs support.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 950,
        "label": "Cars to Belarus"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 5,
        "label": "EAEU Markets Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 95,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 18,
        "label": "Days Transit (Rail)"
      }
    ],
    "faqItems": [
      {
        "q": "What taxes apply when importing a car to Belarus?",
        "a": "Four main costs apply: (1) Customs duty — calculated under the EAEU Common Customs Tariff, based on the vehicle's age, CIF value, and engine displacement. For individuals importing cars under 3 years old, the rate is the greater of a percentage (48–54%) or a per-cc minimum (€2.50–€20.00/cc). For cars 3–5 years and over 5 years, duty is calculated by displacement only at fixed €/cc rates. (2) VAT — 20% on CIF + duty. Individuals importing one vehicle for personal use per year may qualify for VAT exemption (extended until December 31, 2028). (3) Recycling fee — 544.5 BYN for new cars, 1,180 BYN for used (≈$170–$370). (4) Customs processing fee — approximately 120 BYN (≈$35). Total cost for a standard petrol car typically ranges from 35% to 55% of CIF value depending on age and engine size."
      },
      {
        "q": "What is the EAEU and how does it affect vehicle imports?",
        "a": "Belarus is a founding member of the Eurasian Economic Union (EAEU) alongside Russia, Kazakhstan, Kyrgyzstan, and Armenia — a 183-million-person single market with unified customs regulations. Once a vehicle clears customs in Belarus, it can move freely across all five EAEU member states without additional customs duty or import VAT. This means a vehicle cleared in Minsk can be driven to Moscow, Nur-Sultan, Bishkek, or Yerevan with no border formalities. However, as of April 2026, Russia closed the EAEU re-export loophole for personal-use vehicles (Resolution 1291), so the cross-border advantage is now strongest for genuine Belarusian residents. All vehicles imported must comply with EAEU Technical Regulation TR 018/2011 covering safety and emissions."
      },
      {
        "q": "How does the EV duty-free quota work in 2026?",
        "a": "From January 2026, Belarus operates a 20,000-vehicle annual quota for duty-free import of pure electric vehicles by Belarusian citizens. Under this quota: customs duty is 0% (normally 15–54%), VAT is 0% (normally 20%), and excise does not apply to electric powertrains. The only costs are the recycling fee (~$800–1,200) and customs processing fee (~$35). The quota is allocated first-come-first-served through the national customs office, and demand has historically consumed similar caps within the first quarter — early-year positioning is critical. Each eligible citizen can import one EV under the quota. Vehicles imported under the quota cannot be sold to citizens of Russia, Kazakhstan, Kyrgyzstan, or Armenia for a set period. Resale to other Belarusian citizens is unrestricted."
      },
      {
        "q": "Can I import a car older than 5 years to Belarus?",
        "a": "Yes, Belarus has no hard age ban on vehicle imports, unlike some EAEU members (Russia prohibits cars over 10 years). However, the duty rates for cars over 5 years old are significantly higher — calculated at €3.00–€5.70 per cc depending on engine size, compared to €1.50–€3.70 per cc for 3–5-year-old cars. This means a 6-year-old car can cost substantially more in duty than a 4-year-old version of the same model. In practice, importing vehicles over 5 years old is rarely economical unless the vehicle has exceptional value. We recommend sourcing vehicles under 5 years old for the best balance of purchase price and import cost."
      },
      {
        "q": "What is the recycling fee and how much is it?",
        "a": "The recycling fee (утилизационный сбор) is a mandatory one-time charge on all imported vehicles, paid before customs clearance is completed. For individuals, the fee is: 544.5 BYN (~$170) for vehicles under 3 years old, and 1,180 BYN (~$370) for vehicles over 3 years old. For pure electric vehicles (EVs), the fee ranges from approximately $800 to $1,200 depending on weight and age. For legal entities, the fee starts from 23,000 BYN (~$7,100) and scales with engine size and vehicle category. Certain exemptions apply for vehicles used in international freight transport (extended through 2026 by Presidential Decree No. 180). The fee was updated in April 2026 with new rates and regulations covering chassis vehicles as well."
      },
      {
        "q": "What safety requirements must imported vehicles meet?",
        "a": "All vehicles imported to Belarus must comply with EAEU Technical Regulation TR 018/2011 \"On Safety of Wheeled Vehicles.\" Minimum requirements include: ABS (Anti-lock Braking System), at least one front airbag for the driver, ISOFIX child safety seat anchor points, and compliance with Euro 4 emission standards for used vehicles. Vehicles must pass a mandatory technical inspection at an accredited centre in Belarus after customs clearance, which verifies these systems along with lights, brakes, suspension, and emissions. If any non-compliance is found, repairs must be made before the diagnostic card is issued, which is required for final ГАИ registration. Chinese-manufactured vehicles from reputable brands (Geely, Chery, Haval, BYD) come factory-equipped with all required safety systems as standard."
      },
      {
        "q": "What Chinese brands are most popular in Belarus?",
        "a": "Geely is the dominant Chinese brand in Belarus, largely due to the BelGee joint venture assembly plant in Borisov (Minsk region), which produces models like the Geely Coolray, Atlas, and Emgrand for the local and EAEU markets. Haval has a strong and growing presence with the Jolion and H6 — the Jolion is particularly popular for its competitive pricing and 1.5T engine that fits the favourable duty band. Chery is represented through official dealerships in Minsk with the Tiggo 7 and Tiggo 8 lines. BYD is growing rapidly with the Song Plus DM-i (hybrid) and Seal EV benefiting from the EV quota. Across all brands, models with petrol engines under 2,000cc, robust heating systems for harsh winters, and good ground clearance for mixed road conditions are most sought after."
      },
      {
        "q": "How do I register the vehicle after customs clearance?",
        "a": "After customs clearance, the process has two steps. First, take the vehicle to an accredited technical inspection centre to obtain a diagnostic card confirming roadworthiness and safety compliance. Then, visit the local traffic police office (ГАИ / ДАІ) with: (1) the customs clearance certificate, (2) the EAEU import declaration, (3) your passport and Belarusian residence registration, (4) the diagnostic card from the inspection centre, (5) compulsory third-party liability insurance, and (6) the vehicle itself for a VIN verification. Belarusian license plates are typically issued the same day. The vehicle is now road-legal across Belarus and the entire EAEU customs union without additional border paperwork."
      },
      {
        "q": "What is the difference between individual and commercial import?",
        "a": "The main differences are in duty calculation and tax treatment. For individuals importing one vehicle per year for personal use: duty is calculated under the preferential EAEU individual rates (lower percentage and per-cc rates), VAT may be exempted (benefit extended until December 31, 2028), and the recycling fee is a fixed low amount (544.5–1,180 BYN). For legal entities importing for commercial resale: duty is calculated at higher rates (30% for cars under 3 years, 35% for 3–5 years), VAT at 20% applies with no exemption, and the recycling fee starts from 23,000 BYN. Additionally, importing more than 150 units of the same model per year requires an OTTC (Vehicle Type Approval) certification. Individual clearances cannot be used to circumvent commercial import rules — customs checks the intended use and frequency of imports."
      },
      {
        "q": "Do I need a customs broker in Belarus?",
        "a": "While it is legally possible to clear customs without a broker, it is strongly recommended to use one — especially for first-time importers. Belarusian customs operates an electronic declaration system and the EAEU duty calculation involves multiple variables (age, value, engine size, importer type, recycling fee category). A licensed customs broker will: prepare and submit the electronic customs declaration, calculate the correct duty (choosing between percentage and per-cc rates), pay the recycling fee and processing fee, coordinate the VIN and safety inspection, and guide you through the ГАИ registration process. Broker fees in Minsk typically range from €200 to €500. We can connect you with recommended brokers at Brest and Kolyadichi terminals who are familiar with Chinese vehicle imports and EAEU documentation."
      },
      {
        "q": "What is the typical timeline from order to delivery in Minsk?",
        "a": "A typical Belarus timeline via rail: Day 1–3 — vehicle selection and deposit; Day 4–8 — vehicle procurement and 200-point inspection with photo/video report; Day 9–14 — documentation preparation (COC for EAEU, commercial invoice, packing list, CO, export declaration); Day 15 — container loading and rail departure; Day 16–38 — rail transit through Kazakhstan and Russia to Minsk (18–28 days); Day 39–44 — customs clearance at Brest or Kolyadichi terminal (1–3 business days with a broker); Day 45 — technical inspection and ГАИ registration; Day 46 — vehicle ready with Belarusian plates. Total: approximately 6–7 weeks. Via sea through Klaipėda, add 7–14 days for the Baltic crossing and overland leg."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles for Belarus?",
        "a": "Absolutely. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Belarusian buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many buyers from Minsk visit before placing orders — particularly to verify EAEU compliance markings, confirm the vehicle's manufacture date (critical for duty calculation), and inspect the undercarriage and cold-weather features that matter most for Belarusian winters."
      },
      {
        "q": "What payment methods do you accept from Belarusian buyers?",
        "a": "We accept bank wire transfers in USD, EUR, and CNY. For Belarusian buyers, we can process payments through intermediary banks that maintain correspondent relationships with Belarusian financial institutions. Tether (USDT) is also accepted for certain transactions. Our accounts team will advise on the fastest settlement method for your specific situation, taking into account current transfer timelines and banking regulations. We recommend confirming payment terms with your bank before initiating the transfer, as cross-border payments to/from Belarus may require additional compliance documentation."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Belarus?",
        "a": "New vehicles sourced from manufacturer-authorized dealers carry the full factory warranty, valid in Belarus for brands with an official dealer network (Geely, Haval, Chery, BYD all have established dealerships in Minsk). For used vehicles and parallel imports, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at an additional cost. All warranty terms are documented in the sales agreement before payment. We recommend verifying warranty transferability with the brand's Belarusian distributor before purchase if factory warranty coverage is important to you, especially for Geely models that may have been sourced outside the official BelGee distribution channel."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Belarus?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival at the Minsk terminal. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We maintain a 99.2% damage-free delivery rate to Belarusian destinations. Our container loading standards — wheel chocks, frame strapping, protective wrapping — exceed standard industry practice. For rail shipments, containers are monitored throughout the Kazakhstan-Russia-Belarus transit corridor. Photographs are taken before loading to document condition, and these are shared with you as part of the handover record. The insurance covers both the vehicle and any accessories packed in the container."
      }
    ]
  },
  'ukraine':   {
    "slug": "ukraine",
    "heroTitle": "Ship vehicles from China to Ukraine via sea or rail with full duty estimates, excise tax calculation, and COC certification support.",
    "heroDesc": "Ukraine is a growing market for Chinese vehicle imports, with sea routes via Constanta (Romania) in 35–45 days and rail via Poland in 12–18 days. The Ukrainian customs tariff applies 10% ad valorem duty on CIF for Chinese-origin vehicles, plus excise tax (aktsyz) based on engine size and age, and 20% VAT. A Certificate of Conformity for individual approval is required. Cargration handles sourcing, certification, customs clearance, and shipping so your vehicles clear Ukrainian customs and register with MREO without delays.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 1800,
        "label": "Cars to Ukraine"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Ukrainian Routes Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 91,
        "label": "Ukraine Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 21,
        "label": "Days Transit (Rail)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Ukraine?",
        "a": "For a petrol 2.0L, 5-year-old, EUR 10,000 CIF: duty EUR 1,000 (10%), excise EUR 500 (50×2.0×5), VAT EUR 2,300 (20% of 11,500), Pension Fund ~EUR 300-500. Total ~EUR 4,100-4,300 (~41-43% of CIF). For an EV same CIF: duty EUR 0, excise ~EUR 60 (60kWh×1), VAT EUR 2,012 (20% of 10,060), no Pension Fund. Total ~EUR 2,072 (~20.7% of CIF)."
      },
      {
        "q": "What is the excise tax and how is it calculated?",
        "a": "Excise (aktsyz) = Base Rate × (Engine Volume in L) × Age Coefficient. Petrol ≤3000cc: EUR 50/L. Diesel ≤3500cc: EUR 75/L. Age coefficient = (current year - manufacture year + 1), capped at 15. Hybrids: EUR 100 flat × age. EVs: EUR 1 per kWh."
      },
      {
        "q": "What is the age limit for importing a used car to Ukraine?",
        "a": "No hard age limit, but age coefficient in excise formula (capped at 15) makes older cars expensive. The practical maximum is ~15 years. New Euro 6 requirement for first registration (since Jan 2025) effectively limits pre-2015/2016 petrol cars. Average age of imported used cars in 2025 was ~8-9 years."
      },
      {
        "q": "Can I import an electric vehicle from China to Ukraine?",
        "a": "Yes. EVs get 0% customs duty (permanent), minimal excise (EUR 1/kWh), no Pension Fund fee, and no transport/luxury tax. However, VAT exemption expired Jan 2026 — 20% VAT now applies. EV imports collapsed ~95% in January 2026 after the VAT exemption ended."
      },
      {
        "q": "What emissions standard is required?",
        "a": "Euro 6 minimum for new passenger cars since Jan 2025. Used cars: Euro 2 minimum but Euro 6 increasingly enforced. Trucks/buses: Euro 6 postponed to Jan 2027. Chinese modern vehicles meet China 6 (equivalent to Euro 6b/6d)."
      },
      {
        "q": "What documents need Ukrainian translation?",
        "a": "All foreign documents submitted to Ukrainian authorities: commercial invoice, certificate of origin, vehicle title, bill of lading/CMR, and insurance documents. Translations by a certified translator are required."
      },
      {
        "q": "Can I register a right-hand drive vehicle in Ukraine?",
        "a": "No. LHD only. RHD vehicles cannot be registered in Ukraine. All imported vehicles must be left-hand drive."
      },
      {
        "q": "What Chinese brands are most popular in Ukraine?",
        "a": "BYD (leader, 1,719 new registrations H1 2025, 81% EV), Zeekr (860 units, #2), Tesla Shanghai (97 units). Used Chinese imports: Zeekr (304), BYD (160). Chinese brands are growing rapidly, with EVs dominating the mix."
      },
      {
        "q": "Do I need a customs broker in Ukraine?",
        "a": "Yes. Ukrainian customs procedures are complex and language-intensive. A licensed customs broker is essential for electronic declaration via the Single Window, excise calculation, and customs clearance. Broker fees: EUR 250-350."
      },
      {
        "q": "What is the timeline from order to delivery in Kyiv?",
        "a": "Via Constanta: Day 1-3 selection, 4-10 procurement, 11-18 docs/certification, 19-53 sea+overland (35-45 days), 54-60 customs clearance (5-7 days), 61-63 MREO registration. Total: ~9-10 weeks. Via Poland rail: ~7-8 weeks (rail 12-18 days faster)."
      },
      {
        "q": "How has the war affected vehicle imports?",
        "a": "Odesa port operates under temporary grain corridor with war risk insurance premiums at 0.6-1.0%. Recommended route: sea to Constanta (Romania) then overland. Power outages, border congestion at EU-Ukraine borders, and air raid disruptions add 10-15% time buffer needed."
      },
      {
        "q": "Can I drive a vehicle across the border from Poland into Ukraine?",
        "a": "Yes, but requires transit plates (temporary registration), Green Card insurance, and a transit technical passport. 10 calendar days allowed for delivery to customs terminal after border crossing."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles?",
        "a": "Yes. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Ukrainian buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa letters and airport transfers. Virtual inspections via video call also available."
      },
      {
        "q": "What warranty do you offer on vehicles exported to Ukraine?",
        "a": "New vehicles from manufacturer-authorised Chinese dealers carry full factory warranty. BYD has authorised dealers in Kyiv, Dnipro, Lviv, Zaporizhzhia. Used vehicles carry 30-day mechanical warranty. Extended warranty options available."
      },
      {
        "q": "What happens if the vehicle is damaged during transit?",
        "a": "Fully insured from our facilities in Beijing and Guizhou to final destination. Policy covers sea, rail, and overland transit including war risk coverage for Black Sea routes via specialist insurers. We handle the full claims process."
      }
    ]
  },
  'kazakhstan':   {
    "slug": "kazakhstan",
    "heroTitle": "Ship vehicles from China to Kazakhstan with full EAEU duty estimates and SBKTS certification support.",
    "heroDesc": "Kazakhstan, as a member of the Eurasian Economic Union (EAEU), applies a common external tariff of 15% on most vehicle imports, with EV duty incentives and a 16% VAT (effective 2026). Whether you are an Almaty-based dealer, an Astana importer, or an individual buyer, Cargration handles sourcing, SBKTS certification, rail/sea logistics, and documentation so your vehicles clear Kazakh customs through the Dostyk crossing or Aktau port on the first attempt.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 620,
        "label": "Cars to Kazakhstan"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 3,
        "label": "Routes Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 96,
        "label": "KZ Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 18,
        "label": "Days Transit (Rail)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Kazakhstan?",
        "a": "For a company importing a petrol vehicle under the standard EAEU regime: duty at 15% of CIF + VAT at 16% of (CIF + duty) + recycling fee. Total tax burden is approximately 33–35% of CIF. Example: $15,000 CIF petrol vehicle: duty = $2,250, VAT = $2,760 (16% of $17,250), recycling fee ~$500, total tax = ~$5,510 (~37% of CIF). For an individual using the combined EUR/cc payment for a mid-size car (1,500cc, 3–7 years old at ~2.1 EUR/cc): combined payment = ~$3,400 + VAT on residual, total tax ~$4,500 (~30% of CIF). For an EV under WTO rate (0% duty): only 16% VAT + recycling fee, total tax ~$2,600 (~17% of CIF). The choice of import regime significantly affects the final cost."
      },
      {
        "q": "What is the difference between importing as a company vs. an individual?",
        "a": "Companies (legal entities) pay duty at the ad valorem rate — typically 15% of CIF value — plus 16% VAT and the recycling fee. This gives the vehicle full EAEU mobility (can be sold or moved to Russia, Belarus, etc.). Individuals have two options: pay the combined customs payment (EUR/cc based on engine size and age) which replaces duty and some taxes in a single rate; or opt for the standard ad valorem rate (15% + VAT) for EAEU-wide mobility. Individuals are limited to one import per calendar year. As of December 2024, individuals importing a second vehicle in the same year are treated as commercial importers. Additionally, since 2025, non-official entities (including individuals) may only import vehicles at least 3 years old — new vehicles under 3 years are restricted to official dealers."
      },
      {
        "q": "What is SBKTS certification and why is it required?",
        "a": "SBKTS (Vehicle Type Approval) is the mandatory EAEU homologation certificate required for all vehicles imported into Kazakhstan and other EAEU member states. It certifies that the vehicle model meets the technical regulations of the Eurasian Economic Union (TR CU 018/2011). The certification covers: safety systems, emissions compliance, electromagnetic compatibility, noise levels, lighting and visibility, and (for 2026 EVs with OTA capability) UN R155/R156 cybersecurity compliance. Obtaining SBKTS requires submission of: the CCC certificate (China Compulsory Certification), UN38.3 battery test reports (for EVs), EMC test reports, and manufacturer technical documentation. The process takes approximately 4–6 weeks and costs $1,200–$2,000 per model variant. Cargration can coordinate with EAEU certification bodies to pre-arrange SBKTS documentation before shipment."
      },
      {
        "q": "Can I import an electric vehicle to Kazakhstan?",
        "a": "Yes, and Kazakhstan offers significant incentives for EV imports. Two regimes are available in 2026: WTO Rate (Internal Use) at 0% duty with 16% VAT — the most economical option, but the vehicle cannot be resold or moved outside Kazakhstan; and EAEU Unified Customs Tariff at 15% duty with 16% VAT — gives full EAEU mobility but higher cost. A previous 15,000-unit annual duty-free quota (0% duty + 0% VAT for individuals) was available until October 2025 but has been exhausted. The government is considering a new quota for 2026–2027. EVs also benefit from: no excise tax (exempt from >3,000cc rules), green finance incentives at the Astana Finance center (preferential 9% lending rates), and growing charging infrastructure in Almaty, Astana, and along major highways. All EVs still require: ERA-GLONASS, SBKTS certification with cybersecurity compliance, battery thermal management rated to -30°C, and UN38.3 certification."
      },
      {
        "q": "What is ERA-GLONASS and do all imports need it?",
        "a": "ERA-GLONASS is the Russian/EAEU emergency response system, similar to the EU's eCall system. It automatically notifies emergency services in the event of a serious accident, transmitting the vehicle's GPS location, time, and direction of travel. All vehicles imported into Kazakhstan (and other EAEU countries) must be equipped with an ERA-GLONASS-compatible device. The device must: be certified for use in EAEU countries, automatically trigger upon airbag deployment or severe deceleration, include a manual SOS button, and support cellular connectivity on 900/1800 MHz bands (Kazakhstan standard). The installation cost is approximately $200–$500 including certification. The device must be installed and registered before the vehicle can be cleared through Kazakh customs. At Cargration, we can arrange ERA-GLONASS installation either in China (pre-shipment) or coordinate with installation centers in Almaty/Astana for post-arrival fitting."
      },
      {
        "q": "What is the recycling fee in Kazakhstan?",
        "a": "The recycling fee (utilization fee) is a mandatory one-time charge for all vehicles imported into Kazakhstan. It is calculated as 50 MRP (Monthly Calculation Index) × a coefficient that depends on the vehicle's engine volume and age. For 2026, 1 MRP ≈ 3,692 KZT (~$8). The coefficients vary: for vehicles up to 2,000cc: coefficient ~3–5 (fee ~$120–$200), for vehicles 2,001–3,000cc: coefficient ~5–9 (fee ~$200–$360), for vehicles over 3,000cc: coefficient ~9–15 (fee ~$360–$600), for used/older vehicles: higher coefficients apply (up to 30+ for very old vehicles, fee up to $1,200). Electric vehicles use a separate, usually lower coefficient. The fee must be paid before customs clearance can be completed. The recycling fee is separate from the customs duty and VAT — it is paid to the Kazakh Ministry of Ecology and is used to fund vehicle recycling programs."
      },
      {
        "q": "What are the cold-weather requirements for vehicles in Kazakhstan?",
        "a": "Kazakhstan's extreme continental climate, with winter temperatures dropping to -30°C and below in Astana and northern regions, requires specific vehicle adaptations. Mandatory requirements under TR CU 018/2011: effective cabin heating system capable of maintaining comfort at -25°C, windshield defrosting and demisting system, heated rear window, and proper cold-weather coolant and washer fluid specifications. Strongly recommended features for Kazakh buyers: heated front seats, heated steering wheel, heated exterior mirrors, engine block heater (for extreme northern regions), high-capacity battery (for cold-start reliability), and for EVs: battery thermal management system rated for -30°C operation (critical, as cold reduces battery range by 30–50% without proper thermal management). Vehicles sourced from southern China may lack factory cold-weather packages — we verify cold-weather specifications before sourcing for the Kazakhstan market."
      },
      {
        "q": "Do I need a customs broker in Kazakhstan?",
        "a": "Yes, a licensed customs broker (tamozhenny broker) is required for all commercial vehicle imports into Kazakhstan and is strongly recommended for individual imports. The customs broker handles: submitting the import declaration through the ASTANA-1 electronic system, verifying SBKTS certification validity and ERA-GLONASS registration, calculating and paying duties, VAT, and recycling fees, coordinating physical inspection at the Dostyk border crossing or Aktau port (15% of shipments randomly selected for physical inspection), and managing the release process and vehicle registration. A customs broker typically charges $300–$800 depending on vehicle value and complexity. We can connect you with recommended customs brokers in Almaty and Astana who specialize in Chinese vehicle imports and are experienced with the ASTANA-1 system and EAEU documentation requirements."
      },
      {
        "q": "Can I import a Right-Hand Drive (RHD) vehicle to Kazakhstan?",
        "a": "No. Kazakhstan drives on the right-hand side of the road and strictly prohibits the registration of Right-Hand Drive vehicles. RHD vehicles cannot be cleared through customs or registered with the Kazakh traffic police. There is no legal pathway for RHD conversion and registration. All Chinese-market vehicles are LHD by default, making them fully compliant. If sourcing from Japan, the UK, Thailand, or Australia, verify LHD configuration before purchase. The RHD prohibition is strictly enforced at all entry points including the Dostyk rail crossing and Aktau port."
      },
      {
        "q": "What Chinese brands are most popular in Kazakhstan?",
        "a": "Chery is the leading Chinese brand in Kazakhstan, with the Tiggo 7 Pro and Tiggo 8 being the top-selling models. Chery has a strong distributor network through Astana Motors and other local partners, with dealerships in Almaty, Astana, Karaganda, and Shymkent. Haval (Great Wall Motors) is the second most popular brand, recognized for its SUV-focused lineup and excellent cold-weather performance. Changan is growing rapidly with the CS55 Plus and CS35 Plus appealing to value-conscious buyers. BYD is the fastest-growing brand in the EV and hybrid segment, with the Song Plus DM-i hybrid being particularly popular for its fuel efficiency. Exeed (Chery's premium brand) is gaining traction in the premium segment. Across all brands, Kazakh buyers prioritize: cold-weather packages, ground clearance for mixed road conditions, good fuel efficiency for long-distance driving, available spare parts and service networks in Almaty and Astana, and competitive pricing against Russian and Korean alternatives."
      },
      {
        "q": "What is the typical timeline from order to delivery in Almaty?",
        "a": "A typical timeline to Kazakhstan via rail: Day 1–3 — vehicle selection and order; Day 4–10 — vehicle procurement and SBKTS certification pre-arrangement; Day 11–15 — documentation preparation (CO, commercial invoice, CCC cert, export declaration); Day 16 — container loading at Chinese rail terminal (e.g., Xi'an, Lianyungang); Day 17–35 — rail transit to Dostyk border crossing (14–25 days) plus customs processing; Day 36–42 — Kazakh customs clearance through ASTANA-1 (5–7 business days); Day 43–44 — final truck delivery to Almaty (1 day from Dostyk). Total: approximately 6–7 weeks from order to delivery in Almaty. The rail route is significantly faster than sea (which takes 25–40 days just for ocean transit). Using the Xi'an–Almaty express rail service can reduce transit time to as little as 12–15 days. Air freight is also available (3–7 days) for urgent or high-value vehicles but is significantly more expensive at $4.5–$8.5/kg."
      },
      {
        "q": "What documents need Russian translation for Kazakhstan?",
        "a": "Kazakh customs requires that all foreign-language documents be accompanied by Russian translations. The documents typically requiring translation include: the Commercial Invoice (with full vehicle specs in Russian), the Certificate of Origin, the Bill of Lading or CMR (rail waybill), the Insurance Certificate, the Purchase Invoice, and any technical certificates (CCC, SBKTS). Russian is the official language of customs documentation in Kazakhstan alongside Kazakh. Translations must be done by a certified translator. The Russian-language HMI (Head Unit interface) is mandatory — vehicles with only Chinese or English interfaces will not pass customs. All infotainment systems, instrument clusters, and warning labels must display text in Russian as the primary language (Kazakh is optional but recommended for government tenders). Cargration can connect you with certified Russian translation services as part of our documentation support."
      },
      {
        "q": "Can I re-export a vehicle from Kazakhstan to Russia or other EAEU countries?",
        "a": "Yes, this is one of the key advantages of importing through Kazakhstan. Vehicles imported under the standard EAEU regime (15% duty + 16% VAT) gain duty-free access to all EAEU member states: Russia, Belarus, Armenia, and Kyrgyzstan. This makes Almaty and Astana strategic distribution hubs for a 180-million-consumer market across Eurasia. However, vehicles imported under the WTO rate (0% duty for EVs, restricted to Kazakhstan) cannot be re-exported or sold outside Kazakhstan. The SBKTS certificate is valid across all EAEU countries, so a vehicle certified for Kazakhstan can be registered in Russia without additional type approval. This EAEU mobility is a major reason why Chinese OEMs view Kazakhstan not just as a terminal market but as a strategic distribution node for the entire Eurasian region."
      },
      {
        "q": "What are the 2026 China export rule changes affecting Kazakhstan imports?",
        "a": "Two significant Chinese policy changes took effect on January 1, 2026, affecting exports to Kazakhstan. First, the 180-Day Rule: Any vehicle registered for less than 180 days and exported as a \"used car\" must now come with an After-Sales Service Confirmation Letter from the original manufacturer. Without this letter, Chinese customs will not issue an export license. This effectively closes the grey market for near-new vehicles. Second, EV Export Licensing: Pure-electric passenger vehicles (HS Code 87038010.90) now require mandatory export license management — the manufacturer must authorize the export regardless of the vehicle's age. These rules mean that only manufacturers and MOFCOM-accredited exporters can legally export new and near-new vehicles, including EVs, to Kazakhstan. For genuine used vehicles (registered > 180 days), the process is unchanged. Cargration holds Class-A Automobile Export Enterprise status under MOFCOM and manages these licensing requirements as part of our standard export process."
      }
    ]
  },
  'uzbekistan':   {
    "slug": "uzbekistan",
    "heroTitle": "Ship vehicles from China to Uzbekistan via rail through Kazakhstan with full duty estimates, UzTR certification, and Single Window customs clearance.",
    "heroDesc": "Uzbekistan is Central Asia's largest vehicle market, with rail connections from Xi'an and Chongqing through Kazakhstan reaching Tashkent in 11–16 days. Uzbek customs applies a 15% ad valorem duty plus a per-cc charge on new vehicles, 12% NQQ (VAT), a recycling fee (utilizatsionniy sbor) based on engine size, and mandatory UzTR Certificate of Conformity. Since June 2026, the personal import limit has been abolished (Presidential Decree No. 104), and EVs enjoy 0% customs duty through January 2028 with BYD's local assembly in Jizzakh providing additional exemptions. Whether you are a Tashkent-based dealer, a Samarkand importer, or an individual buyer, Cargration handles sourcing, UzTR certification, Pre-Shipment Inspection, Single Window customs declaration, and rail logistics so your vehicles clear Uzbekistan customs and register without delays.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2900,
        "label": "Cars to Uzbekistan"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Uzbek Routes Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 93,
        "label": "Uzbekistan Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 14,
        "label": "Days Transit (Rail)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Uzbekistan?",
        "a": "For a new 2.0L petrol vehicle with $20,000 CIF value: customs duty ~$3,000 (15% ad valorem) + $2,000 per-cc charge (2,000cc × $1.00/cc) + 12% NQQ on cumulative ~$3,960 + recycling fee ~$3,500 (120 BRV). Total tax: approximately $8,500–10,000. For an EV with the same $20,000 CIF: duty $0 (0% exemption through Jan 2028), NQQ $2,400 (12% of $20,000 CIF), recycling fee $3,500 (120 BRV for <3yr). Total: approximately $5,900. The EV saves $2,600–4,100 compared to the equivalent ICE vehicle. Locally assembled BYD models from Jizzakh are exempt from recycling fee until 2030, saving a further ~$3,500."
      },
      {
        "q": "What is the age limit for importing a used car?",
        "a": "Maximum 7 years for ICE vehicles. EVs have no age limit. A ban on vehicles older than 50 years came into effect in February 2026. The personal import limit of 1 vehicle per year was abolished in June 2026 under Presidential Decree No. 104, meaning individuals can now import unlimited vehicles for personal use. Used vehicles aged 1–3 years face ad valorem rates of 20–30% plus higher per-cc charges, while vehicles aged 3–7 years face 30–40% ad valorem rates with specific per-cc charges."
      },
      {
        "q": "What is the recycling fee (utilizatsionniy sbor)?",
        "a": "A one-time fee based on engine size (ICE) or vehicle age (EV), measured in BRV (Base Rate of Value, 1 BRV ≈ 375,000 UZS ≈ $30). For ICE vehicles: ≤1,000cc = 30 BRV (~$900), 1,001–2,000cc = 120 BRV (~$3,500), 2,001–3,000cc = 180 BRV (~$5,400). For EVs: vehicles under 3 years = 120 BRV (~$3,500), vehicles over 3 years = 210 BRV (~$6,100). The EV recycling fee increased 300–400% in May 2025 from approximately 30–40 BRV to 120–210 BRV. Locally assembled EVs from the BYD Jizzakh factory are exempt from the recycling fee until 2030."
      },
      {
        "q": "Can I import an electric vehicle from China to Uzbekistan?",
        "a": "Yes, with significant incentives: 0% customs duty (extended through January 2028), 0% excise tax, subsidised charging at 300 UZS/kWh, and subsidised loans (16% for foreign EVs, 12% for locally assembled). However, the recycling fee increased 300–400% in May 2025, and 12% NQQ still applies. Locally assembled BYDs from the Jizzakh factory (60% UzAuto, 40% BYD) are exempt from recycling fee until 2030 and qualify for lower loan rates. Taxi drivers also receive social tax reductions for EV adoption. BYD reportedly requested restrictions on \"disorderly\" private EV imports, but as of June 2026 the personal import limit has been lifted."
      },
      {
        "q": "What is the Single Window customs system?",
        "a": "Uzbekistan's Single Window (singlewindow.uz) is the unified electronic portal for all import documentation. It integrates with Uzstandard (technical regulation), Ecology Committee, quarantine inspection, sanitary control, and Uzbekexpertiza. All customs declarations must be submitted through this system, which streamlines the clearance process into a single digital interface rather than requiring separate submissions to multiple government agencies. For commercial imports, the Single Window also validates customs value — since May 2025, declared values cannot be below 80% of the 90-day average for 70 product categories. The system requires digital certificates and is operated by the State Customs Committee."
      },
      {
        "q": "What emissions standard is required?",
        "a": "Euro 4 minimum for all ICE vehicles (mandatory since January 2022). Euro 5/6 is strongly recommended for smoother customs clearance and better resale value. EVs are exempt from emission standards entirely. Operation and sale of vehicles below Euro 4 standard has been prohibited since January 2022. Chinese China 6 standard is broadly equivalent to Euro 6, so most new Chinese vehicles meet or exceed the Uzbekistan requirement. Vehicles without clear emission documentation may face additional inspection at the border."
      },
      {
        "q": "Can I register a right-hand drive vehicle in Uzbekistan?",
        "a": "No. LHD only. RHD vehicles cannot be registered in Uzbekistan. All imported vehicles must be left-hand drive. This applies to both individual and commercial imports. There are no exceptions or special permits available for RHD vehicles."
      },
      {
        "q": "What Chinese brands are most popular in Uzbekistan?",
        "a": "BYD dominates the Uzbekistan market with 81.6% of all vehicle imports from China, followed by Chery, Geely, Jetour, Haval, and Changan. China accounted for $1.28 billion in vehicle imports to Uzbekistan in 2024, with 99.5% of all EV/hybrid imports coming from China. BYD's Song Plus, Yuan Plus (Atto 3), and Han EV are the top-selling models. Chery's Tiggo 7 Pro and Tiggo 8 lead in the ICE SUV segment. Geely's Coolray and Monjaro are gaining popularity in Tashkent. The market has shifted rapidly toward electrification, with EVs and hybrids accounting for a growing share of total sales."
      },
      {
        "q": "Do I need a customs broker in Uzbekistan?",
        "a": "Yes, a customs broker is strongly recommended. They handle: Single Window electronic declaration on singlewindow.uz, duty and tax calculation, customs value verification (since May 2025, declared value cannot be below 80% of 90-day average for 70 product categories), physical inspection coordination, recycling fee payment, and coordination with Uzstandard for technical regulation compliance. A customs broker typically charges a fixed fee based on vehicle value and is essential for navigating the integrated Single Window system. For commercial imports, a customs broker is practically mandatory due to the complexity of OTTS/OTTC type approval and ongoing reporting requirements."
      },
      {
        "q": "What is the timeline from order to delivery in Tashkent?",
        "a": "Via rail (fastest): Day 1–3 — vehicle selection and deposit; Day 4–10 — vehicle procurement and inspection; Day 11–20 — documentation and UzTR certification (including Pre-Shipment Inspection by SGS/Bureau Veritas); Day 21–34 — rail transit through Kazakhstan (11–16 days); Day 35–40 — customs clearance via Single Window (5–7 days); Day 41–43 — technical passport issuance and registration. Total: approximately 6–7 weeks. By sea + rail via the Middle Corridor: 25–40 days transit plus documentation and clearance, total approximately 8–10 weeks. The UzTR certification process (3–5 days) and Pre-Shipment Inspection can often be completed concurrently with procurement to minimise overall timeline."
      },
      {
        "q": "How does the BYD Jizzakh factory affect imports?",
        "a": "BYD's joint venture with UzAuto (60% UzAuto, 40% BYD) in Jizzakh began SKD (Semi-Knocked Down) assembly in 2024. Locally assembled EVs are exempt from recycling fee until 2030, saving approximately $3,500–6,100 per vehicle. Locally assembled models also qualify for subsidised loans at 12% versus 16% for imported EVs. BYD reportedly requested restrictions on \"disorderly\" private EV imports to protect the local assembly operation, but as of June 2026 the personal import limit has been lifted under Presidential Decree No. 104. The Jizzakh factory is expected to expand its model range and increase local content over time, potentially qualifying for additional government incentives."
      },
      {
        "q": "What is the difference between EV incentives for imported vs locally assembled EVs?",
        "a": "Imported EVs: 0% customs duty, 0% excise tax, 12% NQQ, recycling fee 120–210 BRV (~$3,500–6,100), subsidised loan at 16%. Locally assembled EV (BYD Jizzakh): same benefits PLUS recycling fee exemption until 2030 (saving ~$3,500–6,100) and subsidised loan at 12% versus 16%. For a $20,000 CIF vehicle, the local assembly advantage totals approximately $4,000–6,500 in savings through recycling fee exemption and lower interest rates. As BYD expands local production at Jizzakh, more models may become available locally with full incentive packages."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles?",
        "a": "Yes. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Uzbek buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many Tashkent-based dealers visit before placing orders to verify vehicle condition, confirm documentation, and review UzTR certification requirements. Virtual inspections via video call are also available if travel is not feasible. We also offer third-party inspection services through SGS or Bureau Veritas in China for buyers who cannot travel."
      },
      {
        "q": "What warranty do you offer on vehicles exported to Uzbekistan?",
        "a": "New vehicles sourced from manufacturer-authorised Chinese dealers carry the full factory warranty. BYD, Chery, Geely, and Changan all have warranty service available in Tashkent and regional centres. Most Chinese brands offer 3–5 year manufacturer warranties. For used vehicles, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at additional cost. All warranty terms are documented in the sales agreement before payment. For locally assembled BYD models from the Jizzakh factory, warranty is provided through the UzAuto/BYD dealer network in Uzbekistan."
      },
      {
        "q": "What happens if the vehicle is damaged during transit?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival in Tashkent — whether by rail through Kazakhstan or via the Middle Corridor. The policy covers rail transit via Kazakhstan, terminal handling at Altynkol and Saryagach border crossings, and road transport within Uzbekistan. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We have maintained a high damage-free delivery rate on the Uzbekistan route. Our container loading standards — wheel chocks, frame strapping, and protective wrapping — exceed standard industry practice. Photographs and video are taken before loading to document condition, and these are shared with you as part of the handover record."
      }
    ]
  },
  'tajikistan':   {
    "slug": "tajikistan",
    "heroTitle": "Ship vehicles from China to Tajikistan via rail or road with full customs duty estimates, Tajikstandart certification, and GAI registration support.",
    "heroDesc": "Tajikistan is a fast-growing market for affordable Chinese vehicles, with rail connections through Kazakhstan reaching Dushanbe in 12-18 days and road via the Kyrgyz mountain passes in 8-16 days. The country applies a simple 5% flat customs duty plus excise and 15% VAT — notably simpler than the EAEU per-cc schedule since Tajikistan is not an EAEU member. EVs benefit from a 100% exemption on duty, VAT, and excise for 10 years. Tajikstandart certification is mandatory, and all vehicles must pass GAI technical inspection for registration. Whether you are a Dushanbe dealer, a Khujand importer, or a taxi fleet operator, Cargration handles sourcing, Tajikstandart certification, shipping, customs clearance, and GAI registration so your vehicles clear Tajikistan borders without delays.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 600,
        "label": "Cars to Tajikistan"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Tajik Routes Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 90,
        "label": "Tajik Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 14,
        "label": "Days Transit (Rail)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Tajikistan?",
        "a": "For a 2.0L petrol vehicle at $17,000 CIF: customs duty $850 (5%), excise ~$256 (TJS 2,800), VAT ~$2,716 (15% on cumulative), environmental fee ~$137, recycling fee ~$986 (proposed), customs broker ~$164, registration ~$78. Total: ~$21,187 (~25% above CIF). For an equivalent EV at same CIF: $0 duty, $0 excise, $0 VAT, just recycling fee + registration. Total: ~$18,176 (~7% above CIF). The EV saves ~$3,800 in taxes — a 22% cost advantage."
      },
      {
        "q": "What is the age limit for importing a used car to Tajikistan?",
        "a": "Passenger vehicles: maximum 7 years from manufacturing year. Commercial vehicles: maximum 10 years. No vehicle manufactured before 2013 can be imported (Decree #355, October 2023). For 2026 imports, target 2020 or newer model years to allow safety margin. A possible 5-year age cap is under discussion. One-time amnesty in September 2024 allowed 2,522 pre-2013 vehicles stuck in customs to clear, but this was a one-off exception."
      },
      {
        "q": "What is the recycling fee in Tajikistan?",
        "a": "The recycling fee (плата за утилизацию) was introduced effective January 1, 2024. It is a one-time payment per vehicle for its entire lifecycle, collected at customs clearance (since April 2025). Proposed 2025/2026 rates: passenger cars TJS 10,800 (~$986), trucks TJS 16,200 (~$1,480), motorcycles TJS 375 (~$34). For vehicles already in Tajikistan, GAI collects during technical inspection. This is a rapidly changing area — verify current rates before shipping."
      },
      {
        "q": "Is Tajikistan part of the EAEU, and how does that affect import duties?",
        "a": "No. Tajikistan is NOT a member of the Eurasian Economic Union (EAEU) and NOT an observer. This is critical for import duty calculation: Tajikistan applies a simple 5% flat customs duty on CIF value + excise tax + VAT, NOT the EAEU's per-cc EUR-denominated sliding scale that applies in Russia, Kazakhstan, and Kyrgyzstan. Brokers quoting \"EAEU duty\" for Tajikistan are using the wrong schedule. Landed cost is typically lower than EAEU countries because of the simpler tariff structure. EAEU membership negotiations have stalled since 2015."
      },
      {
        "q": "Can I import an electric vehicle to Tajikistan?",
        "a": "Yes, with the best EV import incentives in Central Asia: 100% exemption from customs duty, VAT, and excise for 10 years (~through 2032). This saves approximately 20%+ compared to an equivalent ICE vehicle. Dushanbe has mandated all taxis to switch to EVs, creating huge demand. BYD is the most prevalent EV brand on Dushanbe roads. Charging infrastructure is limited but growing in Dushanbe. 83-90% of Tajikistan's EV imports come from China."
      },
      {
        "q": "What is Tajikstandart certification and how do I get it?",
        "a": "Tajikstandart (Agency for Standardization, Metrology, Certification and Trade Inspection) issues mandatory Certificates of Conformity for all imported vehicles under Tajikistan's Law on Certification. Automotive vehicles are explicitly listed as requiring mandatory certification. The certification process: submit application with vehicle documents to an accredited certification body, provide technical passport and purchase contract, vehicle may be inspected, and the certificate is issued. Cost varies. Tajikstandart increasingly accepts EAEU certifications, ISO, and IEC standards as evidence of conformity, but a local Tajikstandart-issued certificate is the safest approach."
      },
      {
        "q": "What Chinese brands are most popular in Tajikistan?",
        "a": "BYD is the most prevalent Chinese brand, especially in the EV segment (driven by Dushanbe's taxi EV mandate). The BYD Song Plus and Seagull are the most common EV models. Chery has the most professional dealer network in Dushanbe with a dedicated showroom and 5-year/150,000 km warranty — the Tiggo 7 Pro Max is their best-seller. Geely is growing with the Coolray and Galaxy series. Changan has an established Central Asian presence. Chinese EVs dominate ~83-90% of Tajikistan's EV import market."
      },
      {
        "q": "What emissions standard is required for Tajikistan?",
        "a": "Euro 4 is the minimum emission standard. Since the 2013 production floor and 7-year age cap effectively limit imports to 2020 or newer vehicles, most imported cars inherently meet Euro 5 or Euro 6. Most modern Chinese vehicles meet China 6 (equivalent to Euro 6b/6d), exceeding Tajikistan's requirements. EVs are exempt from emission standards. An eco-sticker system similar to Uzbekistan's may be introduced in the future."
      },
      {
        "q": "Can I register a right-hand drive vehicle in Tajikistan?",
        "a": "No. RHD vehicles have been banned since 2018. Left-hand drive (LHD) is mandatory for all vehicles operating on Tajik roads. RHD-to-LHD conversions are also not accepted. Tajikistan follows the same LHD rule as all Central Asian and CIS countries."
      },
      {
        "q": "Do I need a customs broker in Tajikistan?",
        "a": "While not legally required for individual importers, a licensed customs broker is strongly recommended. The broker handles: Customs Cargo Declaration (CCD) filing within the 15-day deadline, correct duty and tax calculation using the 5% + excise + VAT structure, GAI technical inspection coordination, and payment processing. Customs clearance typically takes 5-7 days with a broker. Broker fees are modest (typically ~$150-250 per shipment) and well worth the investment to avoid delays, penalties, or incorrect declarations."
      },
      {
        "q": "What is the timeline from order to delivery in Dushanbe?",
        "a": "By rail (primary route): Day 1-3 — vehicle selection and deposit; Day 4-10 — vehicle procurement and inspection; Day 11-20 — documentation and Tajikstandart certification; Day 21-37 — rail transit (12-18 days) via Kazakhstan/Uzbekistan to Dushanbe; Day 38-44 — customs clearance (5-7 days) including CCD filing and inspection; Day 45-47 — GAI technical inspection and registration (2-3 days). Total rail timeline: approximately 7-8 weeks. By road via Kyrgyzstan: approximately 5-6 weeks (8-16 days transit vs 12-18 for rail)."
      },
      {
        "q": "What modifications do Chinese domestic market vehicles need for Tajikistan?",
        "a": "Chinese domestic market vehicles typically require: Russian/Tajik language labels — mandatory by law on all products and documentation; enhanced suspension — Tajikistan is 93% mountainous with many unpaved roads, particularly outside Dushanbe; cold-weather package — winter temperatures in Dushanbe drop to -20°C and -40°C in the Pamir mountains; km/h speedometer as primary display; and radio frequency compliance with local telecommunications standards. Additionally, headlight beam pattern adjustment for right-side driving is recommended. Most Chinese brands exporting to Central Asia now offer factory options for these features."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles destined for Tajikistan?",
        "a": "Absolutely. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Tajik buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many Dushanbe-based dealers visit before placing orders — particularly to verify Tajikstandart certification documentation and confirm cold-weather specifications. Virtual inspections via video call are also available if travel is not feasible."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Tajikistan?",
        "a": "New vehicles from manufacturer-authorised Chinese dealers carry full factory warranty. Chery offers 5 years / 150,000 km warranty through their Dushanbe authorised dealer network. Changan offers 3 years / 120,000 km. For used vehicles, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at additional cost. All warranty terms are documented in the sales agreement before payment. For Tajikistan, we recommend verifying that the manufacturer's warranty is valid at authorised service centres in Dushanbe before purchase."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Tajikistan?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival at Dushanbe — whether by rail through Kazakhstan/Uzbekistan or by road through Kyrgyzstan. The policy covers rail transit, terminal handling at all transfer points (including the gauge-change at Alashankou/Dostyk for rail shipments and the mountain pass crossings for road shipments), and any overland transport within Tajikistan. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We maintain a 95% damage-free delivery rate on the Central Asia route. Photographs and video are taken before loading to document condition, and these are shared with you as part of the handover record."
      }
    ]
  },
  'azerbaijan':   {
    "slug": "azerbaijan",
    "heroTitle": "Ship vehicles from China to Azerbaijan via rail and sea with full customs support.",
    "heroDesc": "Whether you're a dealer in Baku importing new vehicles or bringing a car for personal use, Cargration handles sourcing, inspection, documentation, and logistics through the Caspian corridor. Azerbaijan's Single Window system means clearance and registration in one visit.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 720,
        "label": "Cars to Azerbaijan"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Entry Routes"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 96,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 20,
        "label": "Days Transit (Rail)"
      }
    ],
    "faqItems": [
      {
        "q": "What taxes apply when importing a car to Azerbaijan?",
        "a": "Three main taxes apply: (1) Customs duty — banded by engine displacement, typically modest compared to other countries in the region; (2) Excise tax — calculated per cubic centimetre of engine displacement, with higher rates for larger engines and age multipliers for cars over 7 years old; (3) VAT — 18% on the CIF value plus customs duty. For EVs under 3 years old, both customs duty and VAT are waived entirely. A customs processing fee of approximately $150 and road tax also apply. Total standard import cost typically ranges from 25% to 45% of the CIF value depending on engine size and age."
      },
      {
        "q": "How is excise tax calculated for cars imported to Azerbaijan?",
        "a": "Excise tax is calculated based on engine displacement measured in cubic centimetres. For engines up to 2,000cc, the rate is 0.30 AZN per cc. For 2,001–3,000cc, it's 600 AZN plus 5 AZN per cc above 2,000cc. For 3,001–4,000cc (cars over 3 years old), it's 5,600 AZN plus 15 AZN per cc above 3,000cc. For 4,001–5,000cc, it's 18,600 AZN plus 35 AZN per cc above 4,000cc. Over 5,000cc: 53,600 AZN plus 70 AZN per cc above 5,000cc. From January 1, 2026, cars over 7 years old apply a multiplier: 1.5× for petrol, 2.0× for diesel. 1 AZN ≈ 0.59 USD at current rates."
      },
      {
        "q": "Are electric vehicles really tax-free in Azerbaijan?",
        "a": "Yes — for EVs aged 3 years or younger at the time of customs clearance. Both customs duty (normally ~15% of CIF) and VAT (18%) are fully waived. Excise does not apply to electric powertrains. This means on a $50,000 EV you save roughly $9,000 in VAT plus the duty amount. The only remaining costs are the customs processing fee (~$150), road tax, broker fees, and registration. This is the strongest EV import incentive in the Caucasus region. However, the exemption phases out once the EV exceeds 3 years old — a 4-year-old EV pays standard duty + VAT. We recommend sourcing 2023 or newer models to maximise the benefit."
      },
      {
        "q": "What is the age limit for importing used cars to Azerbaijan?",
        "a": "Cars over 10 years old are prohibited from permanent import into Azerbaijan. For cars between 7 and 10 years old, import is permitted but with a significant cost penalty — from January 1, 2026, the excise tax is multiplied by 1.5× for petrol engines and 2.0× for diesel engines. This means an 8-year-old petrol car pays 50% more excise than the same car at 6 years old, and a diesel of the same age pays double. Most importers find that sourcing vehicles under 7 years old produces the best value, since the excise multiplier doesn't apply and the total landed cost is substantially lower."
      },
      {
        "q": "What is the Single Window system in Azerbaijan?",
        "a": "Azerbaijan's Single Window (Bir Pəncərə) is a unified customs and registration system where customs declaration, duty/VAT/excise payment, vehicle inspection, technical passport issuance, and provisional plate allocation all happen at one customs office in a single visit. The system replaced the older multi-agency process and typically cuts clearance time to 1–3 days for paperwork-complete vehicles. After the Single Window clearance, you have 10 calendar days to complete final registration with the State Traffic Police (Dövlət Yol Polisi) for permanent license plates. Customs brokers familiar with Baku port operate the Single Window flow daily and are strongly recommended for first-time importers."
      },
      {
        "q": "Can I import a right-hand drive vehicle to Azerbaijan?",
        "a": "No. Azerbaijan requires left-hand drive (LHD) vehicles only. Right-hand drive vehicles cannot be registered with the State Traffic Police and cannot be driven on Azerbaijani roads. All Chinese-manufactured vehicles are factory LHD, which is the standard for Azerbaijan. There are no conversion options — if the vehicle was manufactured as RHD, it cannot be imported for permanent use. This is different from some neighbouring markets where RHD conversions are occasionally accepted. All vehicles we export from China to Azerbaijan are factory LHD and fully compliant with local requirements."
      },
      {
        "q": "How do I complete registration after customs clearance?",
        "a": "After the Single Window clearance, you have 10 calendar days to complete final registration with the State Traffic Police (Dövlət Yol Polisi). You need: (1) customs clearance documents from Single Window, (2) the technical passport issued at clearance, (3) mandatory third-party liability insurance (İcbari Sığorta), (4) your passport and proof of address in Azerbaijan, (5) the vehicle itself for physical inspection. The Traffic Police issues permanent license plates and the final registration certificate. Missing the 10-day deadline triggers administrative fines and the vehicle cannot be driven on public roads until registration is completed."
      },
      {
        "q": "Can I temporarily import a car to Azerbaijan?",
        "a": "Yes. Temporary import is available for foreign-plate vehicles staying in Azerbaijan for up to 90 days without a deposit, or up to 1 year with a financial guarantee (refunded on re-export). You pay road tax (Yol Vergisi) based on engine size and stay duration — from $15 for a small car for 1 month up to $120 + daily rate for a large car over 1 year. You also need compulsory border insurance. The car must be collected at the Meyvəli customs terminal near Baku (land borders are closed for passenger vehicle entry). The car cannot be sold in Azerbaijan and must be re-exported by the deadline. This is not suitable for permanent residence — if you plan to stay long-term, permanent import with full customs clearance is required."
      },
      {
        "q": "What Chinese brands are most popular in Azerbaijan?",
        "a": "BYD is the fastest-growing brand in Azerbaijan, driven by strong government support for EVs and hybrids — the Song Plus DM-i (hybrid) and Seal EV are top sellers. Chery maintains strong demand with the Tiggo 7 Pro and Tiggo 8 Pro for their value and feature sets. Changan's CS55 and CS75 are popular mid-size SUV choices among Baku dealers. Geely's Coolray and Monjaro are gaining traction. Across all brands, the key considerations for the Azerbaijani market are: petrol engines under 2,000cc (for lowest excise band), robust suspension for mixed road conditions, and strong air conditioning for Baku's hot summers. EVs are increasingly popular in Baku where the charging network is most developed."
      },
      {
        "q": "Do I need a customs broker in Azerbaijan?",
        "a": "While it is legally possible to clear customs yourself, a licensed customs broker (gömrük brokeri) is strongly recommended, especially for first-time importers. The broker handles: customs declaration filing in the electronic system, excise tax calculation based on engine displacement and age, duty and VAT payment, coordination of the Single Window clearance, and vehicle inspection scheduling. Broker fees in Baku typically range from $200 to $500 depending on the vehicle value. We can connect you with recommended brokers at the Baku Single Window who are familiar with Chinese vehicle imports and our documentation format. The broker fee is a small price for avoiding the costly mistakes — incorrect excise calculation, missing documents, or delayed registration — that can hold a vehicle at port for weeks."
      },
      {
        "q": "What is the typical timeline from order to delivery in Baku?",
        "a": "A typical Azerbaijan timeline via rail: Day 1–3 — vehicle selection and deposit; Day 4–8 — vehicle procurement and 200-point inspection with photo/video report; Day 9–14 — documentation preparation (COC, commercial invoice, packing list, CO, export declaration); Day 15 — container loading and rail departure; Day 16–38 — rail transit through Kazakhstan to Baku (18–28 days); Day 39–44 — Single Window customs clearance (1–3 business days with a broker); Day 45 — vehicle ready for pickup at Baku terminal. Total: approximately 6–7 weeks from order to delivery. Via the sea-rail route through Aktau, add 7–10 days. Using RoRο via sea can reduce shipping costs but transit time is similar."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles for Azerbaijan?",
        "a": "Absolutely. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Azerbaijani buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many buyers from Baku visit before placing orders — particularly to verify that vehicle specifications match Azerbaijan's COC requirements and to confirm the \"left-hand drive\" and \"Made in China\" compliance markings that Azerbaijani customs checks during the Single Window inspection."
      },
      {
        "q": "What payment methods do you accept from Azerbaijani buyers?",
        "a": "We accept bank wire transfers in USD, EUR, and CNY. For Azerbaijani buyers, we can process payments through intermediary banks that maintain correspondent relationships with Azerbaijani financial institutions. Tether (USDT) is also accepted for certain transactions. Our accounts team will advise on the fastest settlement method for your specific situation. We note that Azerbaijani customs requires proof of foreign currency source for imports above certain thresholds, so we recommend maintaining clear records of your payment transaction for presentation at the Single Window clearance."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Azerbaijan?",
        "a": "New vehicles sourced from manufacturer-authorized dealers carry the full factory warranty, valid in Azerbaijan for brands with an official dealer network (BYD, Chery, and Changan all have established dealerships in Baku). For used vehicles and parallel imports, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at an additional cost. All warranty terms are documented in the sales agreement before payment. We recommend verifying warranty transferability with the brand's Azerbaijani distributor before purchase if factory warranty coverage is important to you."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Azerbaijan?",
        "a": "All vehicles are fully insured during transit — from the moment they leave our facilities in Beijing and Guizhou until arrival at the Baku terminal. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We maintain a 99.1% damage-free delivery rate to Baku. Our container loading standards — wheel chocks, frame strapping, protective wrapping — exceed standard industry practice. For rail shipments, containers are monitored throughout the Kazakhstan transit corridor. Photographs are taken before loading to document condition, and these are shared with you as part of the handover record."
      }
    ]
  },
  'poland':   {
    "slug": "poland",
    "heroTitle": "Ship vehicles from China to Poland via the New Silk Road or sea to Gdańsk with full EU duty estimates and registration support.",
    "heroDesc": "Poland is the EU's gateway for Chinese vehicle imports via the New Silk Road, with rail connections from Xi'an and Chengdu reaching Warsaw and Małaszewicze in 12–16 days. The EU Common External Tariff applies a 10% customs duty on all non-EU vehicle imports, plus Polish excise duty (akcyza) at rates based on engine size and fuel type, and VAT at 23%. Whether you are a Warsaw-based dealer, a Poznań importer, or an individual buyer sourcing from China, Cargration handles rail or sea logistics, COC or individual homologation, customs clearance, and documentation so your vehicle clears Polish customs and registers at the Wydział Komunikacji without delays.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 350,
        "label": "Cars to Poland"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 3,
        "label": "Polish Routes Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 92,
        "label": "Poland Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 14,
        "label": "Days Transit (Rail)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Poland?",
        "a": "Total taxes typically range from 32% to 55% of CIF value depending on fuel type, engine size, and whether the vehicle has an EU COC. The full stack includes: EU Customs Duty at 10% of CIF (fixed for HS 8703 passenger vehicles); Excise Duty (Akcyza) at 3.1% ≤2000cc or 18.6% >2000cc for ICE vehicles, with reduced rates for hybrids (1.55%/9.3%) and 0% for BEVs; and VAT at 23% on CIF + customs duty + excise duty. For a typical petrol SUV with a >2000cc engine and CIF of €25,000: customs duty = €2,500, excise = €4,650 (18.6%), VAT = €7,395 (23% of €32,150), total tax = €14,545 (~58% of CIF). For a BEV with the same CIF: customs duty = €2,500, excise = €0, VAT = €6,325 (23% of €27,500), total tax = €8,825 (~35% of CIF)."
      },
      {
        "q": "Do Chinese vehicles need EU type approval to be registered in Poland?",
        "a": "Yes, for straightforward registration a vehicle needs an EU Certificate of Conformity (COC) issued by the manufacturer. Several Chinese manufacturers now hold EU whole-vehicle type approval: BYD, NIO, MG (SAIC), and certain models from Chery and Geely have received EU COC for export to the European market. If the specific model does not have an EU COC, you will need an EU Individual Vehicle Approval (EU-IVA) conducted by Transportowy Dozór Techniczny (TDT) or an authorised technical service such as Bosmal, TÜV SUD Polska, or SKP. The individual approval process involves: application with an information document, technical inspection and testing of the vehicle (lighting, brakes, emissions, noise, safety systems, electromagnetic compatibility), and issuance of the approval certificate. The cost ranges from 3,000 to 8,000+ PLN and takes 2–6 weeks. Modifications such as headlight adjustment, amber turn signals, rear fog light, and km/h speedometer are typically required for Chinese domestic market vehicles."
      },
      {
        "q": "Can I import a Right-Hand Drive (RHD) vehicle to Poland?",
        "a": "No. Poland drives on the right-hand side of the road and RHD vehicles cannot be registered for normal use. RHD vehicles from the UK, Japan, or other RHD markets are strictly prohibited from registration in Poland since 2015, with no option for LHD conversion. All Chinese domestic market vehicles are LHD, so this is generally not an issue when importing from China. However, if you are sourcing from Japan or the UK you must verify LHD configuration before purchase. The only exception is for classic/vintage vehicles (over 30 years old) imported for collection purposes, which may receive special consideration on a case-by-case basis. Non-EU LHD vehicles may need modifications: headlights must meet EU asymmetric low-beam pattern, turn signals must be amber (not red), rear fog light is mandatory, and the speedometer must display km/h."
      },
      {
        "q": "What is the excise duty (akcyza) and how is it calculated?",
        "a": "Excise duty (podatek akcyzowy) is a one-time tax payable before first registration in Poland. It is calculated on the higher of the purchase price or the average market value (catalogue value) as determined by the Polish tax office. This prevents under-invoicing. The rates for 2026 are: petrol/diesel ≤2000cc: 3.1%; petrol/diesel >2000cc: 18.6%; hybrid (HEV) non-plug-in ≤2000cc: 1.55%; hybrid non-plug-in >2000cc: 9.3%; plug-in hybrid (PHEV) ≤2000cc: 3.1%; PHEV >2000cc: 9.3%; electric (BEV): 0% (exempt). Mild hybrids (MHEV) with 48V systems qualify for the reduced hybrid rates as confirmed by the Polish Ministry of Finance in 2025. The excise is paid via an AKC-U/S declaration filed through the PUESC platform and must be completed before the registration application. You will receive a potwierdzenie zapłaty akcyzy (confirmation of excise payment) which is required by the Wydział Komunikacji."
      },
      {
        "q": "What is the NaszEauto subsidy and how do I apply?",
        "a": "NaszEauto is Poland's national electric vehicle subsidy programme launched in February 2025. It offers up to PLN 40,000 (~€9,400) for the purchase of new BEVs (M1 passenger cars) with a net list price under PLN 225,000. The base subsidy is PLN 18,750, with a Large Family Card (KDR) or sole proprietor bonus of up to PLN 30,000, and a scrappage bonus of PLN 10,000 for trading in an old ICE vehicle. The programme also covers N1 vans (up to PLN 70,000), M2 minibuses (up to PLN 600,000), and zero-emission trucks (up to PLN 750,000). By January 2026, the original PLN 1.6 billion budget was over 100% utilised, but an additional PLN 1.1 billion was added in October 2025. Applications are accepted conditionally through April 2026. The subsidy is available to individuals, sole proprietors, and businesses. Application is through the NFOŚiGW (National Fund for Environmental Protection and Water Management) portal. The vehicle must be new (0 km, first registration) and remain registered in Poland for at least 2 years."
      },
      {
        "q": "What is the timeline from order to delivery in Warsaw?",
        "a": "The timeline depends on your chosen route. By rail (fastest): Day 1–3 — vehicle selection and deposit; Day 4–10 — vehicle procurement and inspection; Day 11–18 — documentation preparation (COC verification, individual homologation if needed, commercial invoice, CO, export declaration); Day 19 — container loading at Chinese rail terminal; Day 20–31 — rail transit to Małaszewicze (12–16 days) plus customs clearance; Day 32–38 — technical inspection, excise duty payment via PUESC, sworn translations; Day 39–45 — registration at Wydział Komunikacji (5–7 business days). Total rail timeline: approximately 6–7 weeks. By sea (cost-effective): sea transit takes 25–31 days, adding approximately 2 weeks to the total timeline, bringing it to 8–9 weeks. Direct rail from Xi'an to Warsaw via Małaszewicze is the fastest option. Using a customs broker for SAD filing and PUESC processing can reduce clearance time significantly."
      },
      {
        "q": "What documents require sworn Polish translation?",
        "a": "All foreign-language documents submitted to the Wydział Komunikacji must be accompanied by a sworn translation (tłumaczenie przysięgłe) into Polish by a translator registered with the Polish Ministry of Justice. Documents requiring translation include: the foreign registration certificate or title from the country of origin; the purchase contract or commercial invoice; the Certificate of Origin (CO); any technical documentation or test reports (especially for individual homologation); and any supporting document from the Chinese exporter. EU-format registration certificates (with standard EU codes) are partially exempt from translation. Certificates of Conformity issued in EU format are also accepted directly. The cost of sworn translation is typically 50–150 PLN per standard car document, and translation takes approximately 1 business day. We can recommend sworn translators in Warsaw, Gdańsk, and Poznań who are familiar with Chinese vehicle documentation."
      },
      {
        "q": "Are there any age restrictions for importing used cars to Poland?",
        "a": "There is no formal age restriction for importing used vehicles to Poland. A 30-year-old classic car and a 2-year-old used car are both eligible for import. However, there are practical limitations: vehicles must pass the mandatory technical inspection at an authorised Vehicle Inspection Station (Stacja Kontroli Pojazdów), which requires compliance with Euro 6 emissions standards for petrol vehicles and applicable standards for diesel. Older vehicles that fail emissions testing cannot be registered. In practice, vehicles over 10–15 years old from non-EU markets often struggle to meet Euro 6 requirements without significant modifications. Vehicles over 30 years old qualify as zabytkowe (classic/vintage) status, which brings benefits: exempt from excise duty, lower registration fees, and relaxed technical requirements. Used vehicles over 6 months old with over 6,000 km on the odometer are classified as \"used\" for customs purposes, which affects VAT treatment in intra-EU trade."
      },
      {
        "q": "What Chinese brands are most popular in Poland?",
        "a": "BYD is the leading Chinese brand in Poland, with the Atto 3 (Yuan Plus) and Seal models dominating the EV segment thanks to EU type approval, strong range, and aggressive pricing against European competitors. MG (SAIC) is the best-selling Chinese brand in Europe overall, with the MG4 Electric being particularly popular in Poland as an affordable compact EV. Chery is expanding through its Omoda sub-brand, positioning as a premium Chinese SUV option. NIO is entering the premium segment with the ET5 and ET7, offering battery-swapping technology. Across all brands, Polish buyers prioritise: electric drivetrains (Poland has one of the EU's fastest-growing EV markets); WLTP range above 350 km; 5-star Euro NCAP safety ratings; comprehensive warranty packages (typically 5–7 years from Chinese brands); and growing dealer and service networks in major Polish cities. Chinese brands captured approximately 8% of the Polish EV market in 2025, with projections of 15%+ by 2027."
      },
      {
        "q": "Do I need an EORI number and how do I get one?",
        "a": "Yes, an Economic Operators Registration and Identification (EORI) number is mandatory for all entities importing goods into the European Union, including individuals and companies importing vehicles to Poland. The Polish EORI number format is PL followed by 14 digits (e.g., PL12345678901234). You can apply through the PUESC (Platforma Usług Elektronicznych Służby Celnej) online portal using a trusted profile (profil zaufany) or qualified electronic signature. The application is free and typically processed within 1–3 business days. For non-EU companies importing to Poland, you must register for EORI in the first EU country where you make a customs declaration — in this case, Poland. Non-EU companies typically use a Polish customs representative or broker who can assist with the EORI application. The EORI number is required before the first SAD (Single Administrative Document) can be filed. We recommend applying for EORI at least 2 weeks before the vehicle arrives at the EU border."
      },
      {
        "q": "What modifications are needed for a Chinese domestic market vehicle to pass Polish technical inspection?",
        "a": "Chinese domestic market vehicles often require modifications to meet EU technical standards. The most common changes needed: headlights — Chinese vehicles typically have symmetrical beam patterns; they must be adjusted to EU asymmetric low-beam pattern which prevents glare for oncoming traffic. Rear turn signals — Chinese vehicles often have red rear turn signals (following US/China practice); EU law requires amber/yellow rear turn signals. Rear fog light — mandatory in the EU but often absent from Chinese domestic market vehicles. Speedometer — must display km/h; Chinese domestic vehicles show km/h but sometimes combined with mph; this is usually acceptable if km/h is primary. Tyres — must carry E-mark certification; Chinese domestic tyres may need replacement with EU-approved equivalents. Radio frequencies — Chinese infotainment systems may operate on frequencies not approved in the EU; R&TTE compliance may require module replacement. Emissions — Chinese China 6 standard is similar to Euro 6 but specific calibrations may differ; an emissions retest at homologation may be needed. We coordinate these modifications through our partner workshops in Poland before the technical inspection."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles destined for Poland?",
        "a": "Absolutely. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Polish buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many Warsaw-based dealers visit before placing orders — particularly to verify EU COC availability and confirm that vehicle specifications (Euro 6 compliance, LHD configuration, km/h speedometer) meet Polish requirements without costly modifications. Virtual inspections via video call are also available if travel is not feasible. We also offer third-party inspection services through TÜV Rheinland, SGS, or Bureau Veritas in China for buyers who cannot travel — this is particularly useful for verifying EU compliance before shipment."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Poland?",
        "a": "New vehicles sourced from manufacturer-authorised Chinese dealers carry the full factory warranty, which must be honoured in the EU for brands with European type approval. BYD, MG, and NIO offer standard 5–7 year warranties that are valid at their authorised service centres in Poland. Chery's Omoda brand offers a 7-year/150,000 km warranty on new vehicles. For used vehicles and parallel imports, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at additional cost. All warranty terms are documented in the sales agreement before payment. EU consumer protection laws (2-year legal warranty for new vehicles) apply to all vehicles sold through our Polish partners. For Polish buyers, we recommend verifying warranty transferability with the brand's Polish distributor before purchase — particularly for EV batteries, which have separate warranty terms."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Poland?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival at the Polish destination — whether by rail to Małaszewicze/Warsaw or by sea to Gdańsk/Gdynia. The policy covers rail or sea transit, port/terminal handling at both ends, and any overland transport within Poland. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We have maintained a 96% damage-free delivery rate on the Poland route. Our container loading standards — wheel chocks, frame strapping, and protective wrapping — exceed standard industry practice. For rail shipments, containers are secured on specialised flatcars with proper lashing for the gauge-change process at the China-Kazakhstan and Kazakhstan-Russia borders. Photographs and video are taken before loading to document condition, and these are shared with you as part of the handover record. EU rail and maritime liability frameworks provide strong consumer protection for transit damage."
      }
    ]
  },
  'uae':   {
    "slug": "uae",
    "heroTitle": "Ship vehicles from China to the UAE via sea with full customs duty estimates, ESMA ECAS certification, and Mirsal 2 clearance.",
    "heroDesc": "The UAE is the Middle East's premier vehicle import hub, with Jebel Ali Port handling over 545,000 vehicles in H1 2025 alone. Chinese brands now hold 12% of the UAE market (up from 4% in 2022), driven by Jetour, Geely, BYD, and Chery. The GCC Common External Tariff applies a 5% ad valorem customs duty on CIF value of ICE vehicles, plus 5% VAT applicable on CIF + duty, while pure BEVs benefit from 0% customs duty and VAT exemption under the UAE EV Green Policy. ESMA ECAS conformity certificates, GCC type approval, and RTA technical inspection are mandatory for registration. Whether you are a Dubai-based dealer, a JAFZA free zone trader, or an individual buyer, Cargration handles sourcing, ESMA certification, shipping, and Mirsal 2 electronic customs declarations so your vehicles clear Dubai Customs and register with RTA without delays.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 4800,
        "label": "Cars to UAE"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 3,
        "label": "UAE Routes Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 96,
        "label": "UAE Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 20,
        "label": "Days Transit (Sea)"
      }
    ],
    "importTabs": [
      {
        "label": "Standard — Individual Import",
        "infoBox": "UAE nationals and residents can import vehicles for personal use. Individual imports face a 5% customs duty on CIF value plus 5% VAT on the CIF + duty sum. Vehicles must be left-hand drive, no older than 10 years from manufacture year (Dubai and Abu Dhabi), and must pass RTA technical inspection at Tasjeel or Shamil centres before registration.",
        "bullets": [
          "5% customs duty (GCC CET ad valorem) on CIF value",
          "5% VAT on (CIF value + customs duty) — total ~10.25% effective",
          "Maximum 10 years old from year of manufacture — for 2026, minimum 2016 model year",
          "Left-Hand Drive (LHD) only — RHD vehicles cannot be registered anywhere in the UAE",
          "Euro 4 minimum emissions standard",
          "GCC Conformity Certificate from MoIAT (formerly ESMA)",
          "ESMA ECAS Product Label Card required before RTA inspection",
          "Valid UAE residence visa + Emirates ID + UAE driving licence",
          "Insurance certificate from a UAE-registered insurer before registration",
          "RTA technical inspection at Tasjeel or Shamil centres (AED 150-350)",
          "All foreign documents require certified Arabic translation"
        ]
      },
      {
        "label": "Commercial — Licensed Dealers",
        "infoBox": "Commercial importers must hold a valid UAE trade licence in the relevant emirate, obtain a customs business code and import code from Dubai Customs, and register on the Dubai Trade Portal for Mirsal 2 electronic declarations. Free zone companies (JAFZA, DAZ) benefit from duty deferral until mainland entry.",
        "bullets": [
          "Company must hold a valid trade licence in Dubai, Abu Dhabi, or the relevant emirate",
          "Customs business code and import code required from Dubai Customs",
          "Mirsal 2 electronic declarations submitted via Dubai Trade Portal (dubaitrade.ae)",
          "FASAH platform used for Abu Dhabi customs clearance",
          "JAFZA (Jebel Ali Free Zone) — 0% duty until vehicles enter mainland; ideal for regional distribution and re-export",
          "DAZ (Dubai Airport Free Zone) — similar benefits for air freight",
          "Commercial invoice with Arabic translation and Chamber of Commerce attestation",
          "GCC Type Approval Certificate (TAC) required for new models entering series import",
          "Customs declarations subject to risk assessment: Green (auto-clear), Yellow (document review), Red (physical inspection)",
          "Trade licence plus customs code required for each shipment"
        ],
        "extraText": "For UAE dealerships and free zone traders, Cargration provides wholesale FOB pricing, volume shipping via RoRo and container from Shanghai and Shenzhen to Jebel Ali (18-24 day transit), and full documentation support including ESMA ECAS certification and GCC conformity."
      },
      {
        "label": "EV & Green Incentive",
        "infoBox": "The UAE offers substantial incentives for pure battery electric vehicles under the UAE EV Green Policy. BEVs qualify for 0% customs duty, VAT exemption, free Salik toll tags, green parking, reduced registration fees, and preferential DEWA charging rates. The UAE targets 42,000 EVs on the road by 2030.",
        "bullets": [
          "0% customs duty on pure BEVs — saving ~5% of CIF value",
          "VAT exemption — saving an additional ~5.25% of CIF + duty",
          "Free Salik toll tag (value ~AED 200)",
          "Free EV parking in designated green RTA spaces across Dubai",
          "Reduced registration fees — approximately 15% discount on standard RTA fees",
          "DEWA EV charging at AED 0.29/kWh (compared to ~AED 3.00/L petrol equivalent)",
          "Green loans available from UAE banks at preferential rates",
          "Hybrids (HEV/PHEV) treated as regular ICE — no zero-duty or VAT exemption",
          "UN38.3 battery certification required for lithium-ion battery transport",
          "Type 2 / CCS2 charging standard required for UAE charging infrastructure compatibility",
          "Popular Chinese EV options: BYD Atto 3 (Yuan Plus), BYD Seal, BYD Han EV"
        ],
        "extraText": "Tax tip: A BEV with a CIF of AED 100,000 saves ~AED 5,000 in customs duty and ~AED 5,250 in VAT compared to an equivalent ICE vehicle — a total saving of approximately AED 10,250. Combined with free Salik, free parking, and reduced registration, the total first-year saving can exceed AED 12,000. The UAE government aims for 42,000 EVs by 2030 and is actively expanding the charging network from 1,200+ charging stations in 2025 to 5,000+ by 2030."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Sea — Shanghai/Shenzhen → Jebel Ali Port (Dubai)",
        "summary": "Jebel Ali Port is the Middle East's largest and busiest vehicle import hub, operated by DP World. With dedicated Ro-Ro berths and a total capacity of 75,000 CEU (car equivalent units), it handles over 85% of UAE vehicle imports. Direct container and Ro-Ro services run weekly from Shanghai and Shenzhen, making Jebel Ali the primary gateway for Chinese vehicle imports to the UAE and the broader Gulf region.",
        "details": [
          "Transit time: 18–24 days (Shanghai/Shenzhen → Jebel Ali)",
          "Vessel frequency: Weekly from Shanghai, Shenzhen, Guangzhou",
          "Shipping modes: RoRo or 20ft/40ft container (1–2 cars per 40HQ)",
          "Entry point: Jebel Ali Port, Dubai (DP World, Middle East's largest vehicle hub)",
          "Container cost: ~$2,000–2,800 per 20GP; $3,200–4,200 per 40GP",
          "Port Rashid (Dubai) available as secondary Dubai port"
        ]
      },
      {
        "icon": "🚢",
        "title": "Sea — Shanghai/Guangzhou → Khalifa Port (Abu Dhabi)",
        "summary": "Khalifa Port in Abu Dhabi is the UAE's second-largest vehicle gateway, operated by AD Ports Group. The Autoterminal at Khalifa Port has a dedicated vehicle handling capacity of 15,000 units and serves as the primary entry point for Abu Dhabi and the Western Region. Direct services from Shanghai and Guangzhou connect the Chinese automotive export hubs with the UAE capital's modern deep-water port.",
        "details": [
          "Transit time: 20–26 days (Shanghai/Guangzhou → Khalifa Port)",
          "Vessel frequency: Weekly from Shanghai, Guangzhou, Ningbo",
          "Shipping modes: RoRo or 20ft/40ft container",
          "Destination ports: Khalifa Port (Abu Dhabi Autoterminal, AD Ports Group)",
          "Container cost: ~$2,200–3,000 per 20GP; $3,500–4,500 per 40GP"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "Jetour T2",
        "desc": "Full-size 4WD SUV — the #3 best-selling vehicle in the UAE overall in 2025, with an extraordinary +98.4% year-on-year sales growth. The T2 has become the go-to Prado alternative for UAE buyers, offering rugged ladder-frame construction, a 2.0T engine (254 hp), and advanced off-road capability. Popular across Dubai, Abu Dhabi, and the Northern Emirates for desert driving, the T2 combines Chinese value with proven Toyota-inspired reliability from the Chery Group.",
        "price": "AED 144,000–185,000"
      },
      {
        "rank": 2,
        "name": "Geely Coolray",
        "desc": "Compact SUV — widely considered the best value compact SUV in the UAE market today. Built on Volvo's CMA platform, the Coolray offers a punchy 1.5T engine (177 hp), sharp styling, and a premium interior that punches well above its AED 75,500 starting price. Geely has established a strong dealer network across the UAE with full after-sales service in Dubai and Abu Dhabi, contributing to strong resale values.",
        "price": "AED 75,500–89,900"
      },
      {
        "rank": 3,
        "name": "BYD Atto 3 / Yuan Plus",
        "desc": "Compact EV SUV — the best-selling Chinese EV in the UAE. Powered by BYD's Blade LFP battery (420 km range), the Atto 3 benefits from the UAE's 0% customs duty and VAT exemption for BEVs, making it exceptionally price-competitive. Popular in Dubai's rapidly growing EV market, the Atto 3 appeals to eco-conscious buyers and fleet operators alike, with DEWA charging infrastructure expanding across the emirate.",
        "price": "AED 94,900–110,000"
      },
      {
        "rank": 4,
        "name": "Chery Tiggo 8 Pro Max",
        "desc": "7-seater mid-size SUV — the family favourite from Chery's expanding UAE lineup. Powered by a 2.0T engine (254 hp) with 9 airbags and comprehensive ADAS features, the Tiggo 8 Pro Max seats seven in comfort with three-zone climate control essential for UAE summers. Chery's expanding dealer network and 5-year/150,000 km warranty make it a strong competitor to Japanese 7-seaters at a significantly lower price.",
        "price": "AED 98,500–126,500"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full vehicle specifications — Arabic-translated and Chamber of Commerce attested",
          "Certificate of Origin (CO) — certified by CCPIT (China Chamber of Commerce)",
          "Packing list with dimensions, weight, and container details",
          "Bill of Lading (B/L) — sea waybill for Jebel Ali or Khalifa Port",
          "Vehicle inspection report with photos and video",
          "Original title or registration document from China"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "GCC Conformity Certificate from MoIAT (formerly ESMA)",
          "ESMA ECAS product label card — issued before RTA inspection",
          "Type Approval Certificate (TAC) — for new models requiring series certification",
          "Customs declaration via Mirsal 2 (Dubai) or FASAH (Abu Dhabi)",
          "UN38.3 battery safety certificate — mandatory for EVs",
          "Valid passport + UAE residence visa + Emirates ID",
          "UAE driving licence (valid for the vehicle category)",
          "Trade licence + customs business code + import code (commercial importers)",
          "Insurance certificate from a UAE-registered insurer",
          "RTA technical inspection pass (Tasjeel or Shamil centres)",
          "Certified Arabic translations of all foreign documents"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "Jebel Ali Logistics Hub",
        "desc": "We ship through Jebel Ali, the Middle East's largest vehicle hub handling 545,000+ vehicles in H1 2025. Direct Ro-Ro berths and container services from Shanghai and Shenzhen with 18-24 day transit ensure your vehicles arrive efficiently at the region's most connected port, with onward distribution to Dubai, Abu Dhabi, and the GCC markets."
      },
      {
        "title": "ESMA & GCC Certification",
        "desc": "We manage ESMA ECAS conformity certificates, GCC type approval, and product label card issuance before the vehicle arrives. Our team ensures MoIAT compliance for non-GCC spec vehicles, coordinating testing across braking, lighting, tyres, seatbelts, and electronic stability systems so your vehicles pass RTA inspection on the first attempt."
      },
      {
        "title": "Free Zone & Mainland Strategy",
        "desc": "Whether you're importing to JAFZA/DAZ for duty-free storage and re-export, or direct to mainland Dubai/Abu Dhabi, we optimise your customs route including Mirsal 2 electronic declarations. Our UAE broker network understands the risk assessment channels (Green/Yellow/Red) and ensures smooth clearance through Dubai Customs."
      },
      {
        "title": "EV Incentive Maximisation",
        "desc": "Pure BEVs qualify for 0% duty + VAT exemption, saving ~AED 10,250 per AED 100,000 CIF. We help select qualifying models (Blade LFP battery, CCS2/Type 2 charging) and manage the complete incentive application including green parking registration, Salik toll tag, and DEWA charging account setup."
      }
    ],
    "faqItems": [
      {
        "q": "What is the total import duty for a vehicle in the UAE?",
        "a": "5% customs duty on CIF + 5% VAT on CIF+duty ≈ 10.25% effective. Example: AED 100,000 CIF = AED 5,000 duty + AED 5,250 VAT = AED 10,250 total. EVs pay 0% duty and 0% VAT under the EV Green Policy."
      },
      {
        "q": "What is the age limit for importing a used car to the UAE?",
        "a": "Maximum 10 years from year of manufacture in Dubai and Abu Dhabi. For 2026, minimum 2016 model year. Sharjah and other emirates apply similar limits. Classic/vintage vehicles (25-30+ years) may qualify with special permits."
      },
      {
        "q": "What is Mirsal 2?",
        "a": "Mirsal 2 is Dubai Customs' electronic declaration and clearance platform, accessed through the Dubai Trade Portal (dubaitrade.ae). All commercial customs transactions in Dubai go through Mirsal 2. Risk assessment assigns shipments to Green (auto-clear), Yellow (document review), or Red (physical inspection) channels."
      },
      {
        "q": "Can I import an electric vehicle to the UAE?",
        "a": "Yes, with major incentives: 0% customs duty, VAT exemption, free Salik toll tag, free green parking, reduced registration fees, DEWA charging at AED 0.29/kWh, and green loans. Requires UN38.3 battery certification and Type 2/CCS2 charging standard."
      },
      {
        "q": "What is the difference between JAFZA and mainland import?",
        "a": "JAFZA (Jebel Ali Free Zone) allows duty-free vehicle storage and re-export without paying UAE import duty or VAT. Mainland entry means paying 5% duty + 5% VAT on arrival. JAFZA is ideal for regional distributors; mainland is simpler for single vehicle imports."
      },
      {
        "q": "What is ESMA ECAS certification?",
        "a": "ECAS (Emirates Conformity Assessment System) is the product compliance system administered by MoIAT (formerly ESMA). For vehicles, it covers braking, lighting, tyres, seatbelts, and electronic stability. A Product Label Card must be issued before RTA registration."
      },
      {
        "q": "What documents need Arabic translation?",
        "a": "All foreign documents submitted to Dubai Customs and RTA must be in Arabic or accompanied by a certified Arabic translation. This includes the commercial invoice, certificate of origin, vehicle title, and bill of lading."
      },
      {
        "q": "Can I register a right-hand drive vehicle in the UAE?",
        "a": "No. LHD only. RHD vehicles cannot be registered anywhere in the UAE. All imported vehicles must be left-hand drive."
      },
      {
        "q": "What Chinese brands are most popular in the UAE?",
        "a": "Jetour (#3 best-selling vehicle overall 2025, Jetour T2), MG (4th best-selling brand), Geely (Coolray, Monjaro), BYD (#1 EV, Atto 3, Seal), Chery (Tiggo 8), Haval (H6), Changan (CS75 Plus). Chinese brands grew from 4% market share in 2022 to 12% in 2024."
      },
      {
        "q": "Do I need a licence to import vehicles commercially?",
        "a": "Yes. Commercial importers need a trade licence in the relevant emirate, a customs business code from Dubai Customs, and an import code. A UAE residence visa is required for individual imports. Free zone companies in JAFZA need a JAFZA trade licence."
      },
      {
        "q": "What is the timeline from order to delivery in Dubai?",
        "a": "Day 1-3 vehicle selection, Day 4-10 procurement and inspection, Day 11-18 ESMA/GCC certs and docs, Day 19-38 sea transit (18-24 days to Jebel Ali), Day 39-43 customs clearance (3-5 days), Day 44-45 RTA inspection and registration. Total: ~6-7 weeks."
      },
      {
        "q": "What modifications do Chinese vehicles need for the UAE?",
        "a": "Enhanced AC/cooling for 45-50°C temperatures, Arabic HMI/infotainment, GCC-spec headlight beam pattern, rear fog light, speedometer in km/h, enhanced dust filtration, radio frequency compliance with TDRA standards, and removal of Chinese-specific apps."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles?",
        "a": "Yes. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. UAE buyers welcome. We assist with visa letters and airport transfers. Virtual inspections via video call also available for those who cannot travel."
      },
      {
        "q": "What warranty do you offer on vehicles exported to the UAE?",
        "a": "New vehicles from manufacturer-authorised Chinese dealers carry full factory warranty. Chinese brands in UAE now offer longer warranties than Japanese/European competitors (5-10 years, 150,000-1,000,000 km). Extended warranty options available."
      },
      {
        "q": "What happens if the vehicle is damaged during transit?",
        "a": "Fully insured from our facilities in Beijing and Guizhou to the UAE destination port. Policy covers sea transit, terminal handling at Jebel Ali or Khalifa Port. We handle the full claims process. 95% damage-free delivery rate on the UAE route."
      }
    ],
    "dutyCalcDescription": "UAE customs duty on passenger vehicles is calculated at 5% ad valorem on the CIF value (GCC Common External Tariff rate) for ICE vehicles. VAT at 5% is charged on CIF + customs duty. Pure BEVs qualify for 0% customs duty and VAT exemption under the UAE EV Green Policy. Used vehicles over 10 years old from the year of manufacture face registration restrictions in Dubai and Abu Dhabi."
  },
  'iraq':   {
    "slug": "iraq",
    "heroTitle": "Ship vehicles from China to Iraq with full customs duty estimates and import license support.",
    "heroDesc": "Iraq applies a 25% customs duty on petrol vehicles with 15% VAT and a 5% reconstruction levy, with reduced rates for hybrids (15%) and EVs (12.5%). A strict 7-year age limit is enforced on used imports. Whether you are a Baghdad-based dealer, an Erbil importer serving the Kurdistan Region, or an individual buyer, Cargration handles sourcing, documentation, and shipping so your vehicles clear Iraqi customs through Umm Qasr on the first attempt.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 480,
        "label": "Cars to Iraq"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Iraqi Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 94,
        "label": "Iraq Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 30,
        "label": "Days Transit (Sea)"
      }
    ],
    "importTabs": [
      {
        "label": "Standard — Individual Import",
        "infoBox": "Iraqi citizens and residents can import used passenger vehicles up to 7 years old from the year of manufacture. Used vehicles under 3 years old may qualify for reconstruction levy exemption. All documents must be translated into Arabic.",
        "bullets": [
          "Passenger vehicles must be ≤ 7 years old from the year of manufacture",
          "Left-Hand Drive (LHD) only — RHD vehicles strictly prohibited",
          "Euro 5 minimum emissions standard required",
          "Valid Iraqi ID or residence permit required for clearance",
          "Import must be registered through the Iraqi customs declaration system",
          "A physical inspection at Umm Qasir port is mandatory",
          "All foreign-language documents must be translated into Arabic by a certified translator"
        ]
      },
      {
        "label": "Commercial — Licensed Dealers",
        "infoBox": "Commercial importers must hold a valid import license from the Iraqi Ministry of Trade. Dealerships must register with the General Authority for Customs and maintain a physical commercial address for customs registration.",
        "bullets": [
          "Valid import license from the Ministry of Trade required",
          "Company must be registered with the Iraqi tax authority and hold a valid tax ID",
          "Same 7-year age limit applies — no commercial exemption for over-age vehicles",
          "Commercial invoice must include full vehicle specifications (VIN, engine, HS code)",
          "Certificate of Origin (CO) — certified by CCPIT, legalized for Iraq",
          "Bulk shipments require individual declarations per vehicle",
          "Customs clearance must be handled by a licensed customs broker (Mukallaf Jumruki)",
          "All documentation must be translated into Arabic by a sworn translator"
        ],
        "extraText": "For Iraqi dealerships, Cargration provides wholesale FOB pricing and volume shipping from Chinese ports to Umm Qasr. Chinese brands have surged in Iraqi market share — over 22,000 Chinese vehicles were imported in the first 7 months of 2025 alone, surpassing American imports."
      },
      {
        "label": "EV & Hybrid Incentive",
        "infoBox": "Iraq offers reduced duty rates for electric and hybrid vehicles to encourage cleaner mobility. EVs attract 12.5% duty (half the standard 25% rate) and may be exempt from the reconstruction levy. The KRG offers full customs duty exemption on EVs.",
        "bullets": [
          "Electric vehicles (BEVs): 12.5% duty — half the standard 25% petrol rate",
          "Hybrid vehicles: 15% duty — reduced from 25% for petrol equivalents",
          "Reconstruction levy (5%) may be waived for EVs and hybrids",
          "KRG (Kurdistan Region): Full customs duty waiver on EVs as of 2026",
          "KRG also removes registration and annual environmental fees for EVs",
          "7-year age limit still applies to EVs and hybrids",
          "LHD requirement applies — no exceptions",
          "Euro 5 emissions compliance required for hybrids",
          "Growing charging infrastructure in Baghdad, Erbil, and Basra"
        ],
        "extraText": "Market note: Hybrid vehicle demand in Iraq surged 45% in 2025, with Chinese hybrids being particularly popular. The Kurdistan Region is leading EV adoption with its full duty exemption policy. Chinese EVs like BYD Yuan Plus and hybrids like BYD Song Plus DM-i are strong options for the Iraqi market."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Container & RoRo — China to Umm Qasr",
        "summary": "Direct sailings from Shanghai, Tianjin, Ningbo, and Guangzhou to the Port of Umm Qasr — Iraq's principal seaport and the primary gateway for vehicle imports, located near Basra at the northern end of the Persian Gulf. The port serves Baghdad and all of central and southern Iraq via highway connections.",
        "details": [
          "Transit time: 25–40 days (direct from China to Umm Qasr)",
          "Vessel frequency: Every 10–14 days from main Chinese ports",
          "Transshipment option: Via Jebel Ali (Dubai) to Umm Qasr on feeder vessel",
          "Shipping modes: RoRo or 20ft/40ft container",
          "RoRo cost: ~$1,200–1,800 per vehicle",
          "Container cost: ~$2,200–3,500 per 20ft container"
        ]
      },
      {
        "icon": "📋",
        "title": "Pre-shipment Requirements",
        "summary": "Iraqi customs enforces strict documentation requirements. All documents must be translated into Arabic by a certified translator. Vehicles must comply with Euro 5 emissions standards and the 7-year age limit.",
        "details": [
          "Certificate of Origin (CO) — certified by CCPIT",
          "Commercial invoice with full vehicle specifications",
          "Packing list with VIN, dimensions, weight, and engine number",
          "Bill of Lading (B/L) consigned to the Iraqi importer",
          "Certificate of Conformity (COC) — proving Euro 5 compliance",
          "Original registration document (for used vehicles)",
          "Export Certificate from Chinese authorities",
          "Proof of VAT payment (if applicable in China)",
          "All documents must be translated into Arabic by a certified translator"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "Chery Tiggo 7 Pro",
        "desc": "Mid-size SUV — the best-selling Chinese vehicle in Iraq. Combines generous ground clearance, a turbocharged 1.5T engine, and a comprehensive feature set at a price point well below comparable Japanese and American SUVs. Widely available through Chery's growing dealer network in Baghdad, Basra, and Erbil. The 1.5L engine class also minimizes fuel consumption in Iraq's hot climate.",
        "price": "From $13,800 FOB"
      },
      {
        "rank": 2,
        "name": "Changan CS35 Plus",
        "desc": "Compact SUV with a 1.4T engine — highly popular in Iraq for urban commuting and inter-city travel. Excellent ground clearance for unpaved roads, strong air conditioning for the extreme summer temperatures (often exceeding 50°C in Basra), and a competitive price that appeals to both individual buyers and fleet operators.",
        "price": "From $11,500 FOB"
      },
      {
        "rank": 3,
        "name": "MG 5",
        "desc": "Compact sedan — a strong seller in the Iraqi market, particularly for ride-hailing and personal transport in Baghdad. Stylish design, good fuel economy, and a proven reliability record. MG has a well-established dealer and service network in Iraq through local partnerships, making it a low-risk choice for first-time Chinese car buyers.",
        "price": "From $10,500 FOB"
      },
      {
        "rank": 4,
        "name": "BYD Song Plus DM-i",
        "desc": "Plug-in hybrid SUV — the fastest-growing segment in Iraq. Benefits from the 15% hybrid duty rate (versus 25% for petrol), making it cost-effective to import. The DM-i (Dual Mode Intelligent) technology offers excellent fuel efficiency — a major selling point in Iraq where fuel quality varies and long-distance driving is common between Baghdad, Basra, and Erbil.",
        "price": "From $16,800 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full vehicle specifications (VIN, make, model, year, engine)",
          "Packing list with dimensions, weight, and container details",
          "Certificate of Origin (CO) — certified by CCPIT",
          "Bill of Lading (B/L) consigned to the Iraqi consignee",
          "Certificate of Conformity (COC) proving Euro 5 compliance",
          "Original Export Certificate — MOFCOM-qualified exporter",
          "Vehicle inspection report with photos and VIN confirmation",
          "Original title or registration document from China"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Valid Iraqi ID or residence / citizenship document",
          "Import license from Ministry of Trade (for commercial importers)",
          "Tax ID registration certificate",
          "Purchase invoice (original) with proof of payment",
          "Insurance certificate valid in Iraq",
          "Arabic translation of all foreign-language documents by certified translator",
          "Customs declaration form (Bayan Jumruki)",
          "Power of attorney for the licensed customs broker"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "Umm Qasr Expertise",
        "desc": "Iraq's primary port for vehicle imports, Umm Qasr, has specific documentation and inspection procedures. We understand the Iraqi customs protocol and ensure your vehicle's paperwork is complete before departure — including Arabic translation readiness and Euro 5 conformity certification."
      },
      {
        "title": "Iraqi Tariff Knowledge",
        "desc": "We navigate Iraq's three-tier duty structure — 25% standard, 15% hybrid, 12.5% EV — plus the reconstruction levy and VAT application. Our duty estimates account for route-specific variations, including the Kurdistan Region's EV duty-free policy."
      },
      {
        "title": "Age-Compliant Sourcing",
        "desc": "We verify the manufacture date of every vehicle before sourcing to ensure compliance with Iraq's 7-year age limit. Vehicles exceeding the age limit are denied entry at Umm Qasr and cannot be cleared through Iraqi customs."
      },
      {
        "title": "Market Intelligence",
        "desc": "Chinese vehicles now account for over 60% of Iraq's car import market, with over 22,000 units imported from China in just the first 7 months of 2025. We help Iraqi dealers and individual buyers select the right models — SUVs, sedans, and hybrids — that match local demand and duty-band strategy."
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Iraq?",
        "a": "For a standard petrol vehicle, the total tax burden is approximately 48% of CIF value. Breakdown: Customs Duty at 25% of CIF, Reconstruction Levy at 5% of CIF, and VAT at 15% of (CIF + Duty + Levy). For hybrids (15% duty): total tax ~36% of CIF. For EVs (12.5% duty): total tax ~30% of CIF. In the Kurdistan Region, EVs are fully exempt from customs duty under KRG policy, reducing the total burden to approximately 15–20% of CIF (VAT only)."
      },
      {
        "q": "What is the age limit for importing a used car to Iraq?",
        "a": "Iraq enforces a 7-year maximum age limit for used vehicle imports, calculated from the year of manufacture. For vehicles arriving in 2026, the vehicle must be a 2019 model year or newer. The age is determined by the VIN model year, not the first registration date. Vehicles exceeding the 7-year limit are denied entry and cannot be cleared through Iraqi customs at Umm Qasr or any other port of entry. There is no exemption route for over-age vehicles, and no overage penalty schedule — the ban is absolute."
      },
      {
        "q": "Can I import a Right-Hand Drive (RHD) vehicle to Iraq?",
        "a": "No. Iraq drives on the right-hand side of the road and strictly prohibits the import of Right-Hand Drive vehicles. RHD vehicles will be refused entry at the port regardless of age, condition, or documentation quality. There is no legal pathway to convert an RHD vehicle to LHD and register it in Iraq. All Chinese-market vehicles are LHD by default, so sourcing from China is safe."
      },
      {
        "q": "What are the benefits of importing a hybrid or EV to Iraq?",
        "a": "Iraq offers significant import duty reductions for green vehicles: Electric vehicles (BEVs) pay 12.5% duty — half the standard 25% petrol rate — and may be exempt from the reconstruction levy. Hybrids pay 15% duty versus 25% for equivalent petrol models. The Kurdistan Regional Government (KRG) offers an even stronger incentive: full customs duty exemption on EVs, with zero registration fees and no annual environmental charges."
      },
      {
        "q": "What is the difference between importing through Baghdad vs. the Kurdistan Region?",
        "a": "The Kurdistan Regional Government (KRG) maintains a separate customs regime from the federal Iraqi government. Key differences for vehicle imports: KRG offers full customs duty exemption on electric vehicles (federal Iraq charges 12.5%), KRG waives registration and annual environmental fees for EVs, KRG has its own age limit regulations (separate from the federal 7-year rule), and vehicle clearance through KRG crossings (Ibrahim Khalil, Bashmakh) may have different documentation requirements than federal ports like Umm Qasr."
      },
      {
        "q": "What documents need Arabic translation for Iraq?",
        "a": "Iraqi customs requires that all foreign-language documents be accompanied by certified Arabic translations. The documents typically requiring translation include: the Commercial Invoice, the Certificate of Origin, the Bill of Lading, the Insurance Certificate, and the Purchase Invoice. Translations must be done by a certified/sworn translator recognized by the Iraqi authorities."
      },
      {
        "q": "Do I need a customs broker in Iraq?",
        "a": "Yes, a licensed customs broker (Mukallaf Jumruki) is required for all commercial vehicle imports into Iraq and is strongly recommended for individual imports. The customs broker handles: submitting the import declaration (Bayan Jumruki) through the Iraqi customs system, coordinating the physical vehicle inspection at the port, calculating and paying all duties and taxes, managing the Arabic translation verification, and handling the release process and vehicle collection from Umm Qasr."
      },
      {
        "q": "What Chinese brands are most popular in Iraq?",
        "a": "Chery is the clear leader, with the Tiggo 7 Pro being the single most popular Chinese model in Iraq, backed by a strong dealer network in Baghdad, Basra, and Erbil. Changan follows closely with the CS35 Plus and CS55. MG has built significant brand recognition through local partnerships. BYD is the fastest-growing brand, particularly in the hybrid and EV segments."
      },
      {
        "q": "What is the Euro 5 emissions requirement for Iraq?",
        "a": "Iraq mandates that all imported vehicles comply with Euro 5 emissions standards as a minimum. This requires a Certificate of Conformity (COC) from the manufacturer or an authorized body proving that the vehicle meets Euro 5 standards for CO, HC, NOx, and PM emissions."
      },
      {
        "q": "What is the typical timeline from order to delivery in Baghdad?",
        "a": "Day 1–3 vehicle selection; Day 4–8 procurement and Euro 5 verification; Day 9–14 documentation preparation; Day 15 container loading; Day 16–50 sea transit (25–40 days) plus port handling; Day 51–58 customs clearance (5–8 business days); Day 59–60 inland trucking to Baghdad. Total: approximately 8–10 weeks."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Iraq?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival at the Port of Umm Qasr. We insure at 110% of the CIF value to ensure full replacement coverage. We have maintained a 96% damage-free delivery rate on the Iraq route."
      }
    ],
    "dutyCalcDescription": "Iraqi customs calculates duties on the CIF value (Cost + Insurance + Freight). The standard tax stack includes 25% customs duty, 15% VAT on CIF + duty, and a 5% reconstruction levy. Reduced rates apply for hybrids (15% duty) and EVs (12.5% duty). Total burden ranges from approximately 30% of CIF for EVs to approximately 48% for standard petrol vehicles."
  },
  'iran':   {
    "slug": "iran",
    "heroTitle": "Ship vehicles from China to Iran with full IRICA duty estimates and import license support.",
    "heroDesc": "Iran applies a heavily tiered duty structure based on engine displacement — from 4% for electric vehicles up to 190% for large-engine cars — with a strict 5-year age limit on used imports. Whether you are a Tehran-based dealer, an Iranian national residing abroad, or a licensed importer, Cargration handles sourcing, pre-shipment inspection, Sabt-e-Sefaresh documentation, and shipping so your vehicles clear IRICA customs through Bandar Abbas on the first attempt.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 340,
        "label": "Cars to Iran"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 3,
        "label": "Iranian Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 92,
        "label": "Iran Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 25,
        "label": "Days Transit (Sea)"
      }
    ],
    "importTabs": [
      {
        "label": "Standard — Licensed Importer",
        "infoBox": "Vehicle imports into Iran are restricted to licensed importing companies registered with the Ministry of Industry, Mine and Trade (MIMT). Individuals cannot import vehicles under the standard route. Used vehicles must be no more than 5 years old with a maximum of 100,000 km.",
        "bullets": [
          "Only licensed importing companies with a valid Kart-e-Bazargani (business card) may import",
          "Used vehicles must be ≤ 5 years old from production date (VIN model year) and ≤ 100,000 km",
          "Left-Hand Drive (LHD) only — RHD vehicles strictly prohibited",
          "Import License (Sabt-e-Sefaresh) must be obtained from MIMT before shipping",
          "Scrappage certificate required — one end-of-life vehicle must be scrapped per import",
          "Imported vehicle cannot be sold or transferred for 5 years after clearance",
          "Currency must be sourced from export proceeds or foreign accounts approved by the Central Bank",
          "American-origin vehicles banned; diesel passenger vehicles prohibited",
          "Standards compliance (ISIRI) and environmental certificates mandatory"
        ]
      },
      {
        "label": "Iranian Abroad — Personal Import",
        "infoBox": "Iranian nationals residing abroad with valid residency permits may import one vehicle per person outside the main import quota. This is the only route open to individuals. Currency must come from the applicant's own foreign bank account.",
        "bullets": [
          "Applicant must be at least 18 years old with a valid residence permit (permanent or temporary)",
          "Residence permit must have been issued before June 10, 2025 (21 Khordad 1404)",
          "Applicant must have spent at least 18 days in the country of residence during 1404",
          "One vehicle per person — no commercial bulk imports under this route",
          "Vehicle must be model years 2020–2025 (≤ 5 years old) with max 100,000 km",
          "After June 10, 2025: currency must come from the applicant's own foreign bank account only",
          "American-origin vehicles banned; RHD prohibited; diesel vehicles not allowed",
          "Vehicle can be sold after clearance (no 5-year hold period unlike standard route)",
          "Import must be completed by March 19, 2026 (29 Esfand 1404)"
        ],
        "extraText": "The Iranian Abroad route does not require a Kart-e-Bazargani or company registration. Registration is done through the 'Mikhak' system first, followed by the 'Comprehensive Trade' system. This is the most accessible route for individual importers."
      },
      {
        "label": "EV & Hybrid Incentive",
        "infoBox": "Iran offers significantly reduced duty rates for electric and hybrid vehicles to encourage green mobility. EVs at 4% duty and hybrids at 15% — versus 20–190% for petrol vehicles. This makes EVs and hybrids dramatically more cost-effective to import.",
        "bullets": [
          "Electric vehicles (BEVs): 4% import duty — compared to 20–190% for petrol equivalents",
          "Hybrid vehicles: 15% import duty — substantial saving over petrol models in same engine class",
          "All other taxes (VAT at 9%) and regulations still apply",
          "5-year age limit applies to EVs and hybrids as well",
          "LHD requirement applies — no exceptions",
          "Scrappage certificate still required",
          "ISIRI standards certification required for EV batteries and charging systems",
          "Growing charging infrastructure in Tehran, Mashhad, Isfahan, and Shiraz",
          "Chinese EVs (BYD, NIO, MG) and hybrids (BYD DM-i, Chery) are strong options"
        ],
        "extraText": "Tax tip: With 4% duty on BEVs versus 40% on a mid-size petrol car (1,500–2,000cc), the duty saving alone can exceed $5,000 on a $25,000 CIF vehicle. Total landed cost for an EV can be 20–30% lower than an equivalent petrol model."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Container & RoRo — China to Bandar Abbas",
        "summary": "Direct sailings from Shanghai, Ningbo, Shenzhen, and Guangzhou to the Shahid Rajaee Port Complex at Bandar Abbas — Iran's largest and most strategic port, handling over 85% of the country's container traffic and the primary gateway for Chinese vehicle imports.",
        "details": [
          "Transit time: 20–28 days (direct from China to Bandar Abbas)",
          "Vessel frequency: Every 7–10 days from main Chinese ports",
          "Shipping modes: RoRo or 20ft/40ft container",
          "Destination ports: Bandar Abbas (primary), Bandar Imam Khomeini, Chabahar",
          "RoRo cost: ~$1,200–1,800 per vehicle",
          "Container cost: ~$2,200–3,200 per 20ft container"
        ]
      },
      {
        "icon": "📋",
        "title": "Pre-shipment Requirements",
        "summary": "Iranian customs (IRICA) enforces strict pre-departure and arrival documentation. Every shipment requires a Sabt-e-Sefaresh (import license) issued by MIMT before the vessel departs. All declarations are processed through the EPL (Integrated Customs System).",
        "details": [
          "Import License (Sabt-e-Sefaresh) — must be obtained before shipping from MIMT",
          "Certificate of Origin (CO) — issued by CCPIT, legalized by the Iranian Embassy in China",
          "Commercial invoice with dual attestation — CCPIT + Iranian Embassy in Beijing",
          "Packing list with VIN, dimensions, weight, and engine number",
          "Bill of Lading (B/L) — must show TSC number in consignee field",
          "TSC (Trade Specific Certificate) — replaces COI; applied by Iranian importer",
          "Pre-shipment Inspection Certificate — mandatory for vehicles (SGS, Bureau Veritas, etc.)",
          "ISIRI (Iran Standards Organization) compliance certificate",
          "Insurance certificate at 110% of cargo value",
          "Kart-e-Bazargani (business card) — for licensed importers"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "Chery Tiggo 7 Pro",
        "desc": "Mid-size SUV — one of the most popular Chinese vehicles in Iran. The 1.5T engine (1,498cc) falls into the lowest duty band at 20%, making it highly cost-effective to import. Strong ground clearance, robust build quality, and an established service network through MVM (Chery's Iranian partner) make it a top choice for Iranian buyers across Tehran and provincial cities.",
        "price": "From $13,800 FOB"
      },
      {
        "rank": 2,
        "name": "Changan CS35 Plus",
        "desc": "Compact SUV with a 1.4T engine (1,390cc) — also in the 20% duty band. Highly popular in Iran for its modern design, reasonable price point, and suitability for urban and inter-city driving. Good ground clearance for Iran's diverse road conditions from the Caspian coast to central desert highways.",
        "price": "From $11,500 FOB"
      },
      {
        "rank": 3,
        "name": "BYD Yuan Plus (Atto 3)",
        "desc": "Fully electric compact SUV — the leading EV choice for Iran's green vehicle push. Benefits from the 4% import duty rate (versus 20–190% for petrol vehicles), making it one of the most duty-efficient imports possible. Growing demand from Tehran-based buyers as EV charging infrastructure expands across the capital and along the Tehran–Mashhad corridor.",
        "price": "From $18,500 FOB"
      },
      {
        "rank": 4,
        "name": "Geely Emgrand",
        "desc": "Compact sedan with a 1.5L engine (1,498cc) — also in the 20% duty band. The most affordable entry-level option for the Iranian market. Widely used for ride-hailing services and personal transport. Fuel-efficient, reliable, and backed by Geely's growing service network in Iran through partnership with Bahman Group.",
        "price": "From $9,200 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full vehicle specs — dual attested (CCPIT + Iranian Embassy)",
          "Packing list with VIN, dimensions, weight, and container details",
          "Certificate of Origin (CO) — issued by CCPIT, legalized by Iranian Embassy in Beijing",
          "Bill of Lading (B/L) with TSC number in consignee field",
          "Pre-shipment Inspection Certificate from approved agency",
          "Original Export Certificate — MOFCOM-qualified exporter",
          "Vehicle inspection report with photos and VIN confirmation",
          "Original title or registration document from China"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Valid Kart-e-Bazargani (business card) — for commercial importers",
          "Import License (Sabt-e-Sefaresh) — from MIMT, obtained before shipping",
          "TSC (Trade Specific Certificate) — replaces COI for customs",
          "Registration in 'Mikhak' and 'Comprehensive Trade' online systems",
          "Scrappage certificate (gavahi-ye-esghat) — one vehicle scrapped per import",
          "ISIRI standards compliance certificate for the vehicle model",
          "Environmental compliance certificate (from Iran DOE)",
          "After-sales service approval certificate from MIMT",
          "Insurance certificate valid in Iran (110% of CIF value)",
          "Proof of foreign currency source (for Iranian abroad route)"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "Sabt-e-Sefaresh & TSC Expertise",
        "desc": "Iran requires both an import license (Sabt-e-Sefaresh) from MIMT and a TSC certificate before the vessel departs. We coordinate with Iranian authorities and Chinese agencies to ensure your documentation is complete and compliant before loading."
      },
      {
        "title": "IRICA Tariff Knowledge",
        "desc": "We understand Iran's complex tiered duty structure across all engine displacement bands (20–190%) and the special rates for EVs (4%) and hybrids (15%). Our duty estimates account for the full Hoquq-e-Voroudi plus 9% VAT — no surprises at Bandar Abbas clearance."
      },
      {
        "title": "Avoiding the 5-Year Age Trap",
        "desc": "We verify the VIN manufacture year of every vehicle before sourcing to ensure strict compliance with Iran's 5-year age limit for used imports. A single year over the limit means the vehicle will be denied entry and cannot be cleared through IRICA."
      },
      {
        "title": "Bandar Abbas Network",
        "desc": "We work with licensed customs brokers (Tarkhis Kar) at the Shahid Rajaee Port Complex who know IRICA procedures, the EPL (Integrated Customs System), and how to navigate the Green/Yellow/Red channel assessment efficiently. Our network ensures smooth clearance from vessel arrival to vehicle release."
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Iran?",
        "a": "Total taxes vary dramatically based on engine size. The 'rights of entry' (Hoquq-e-Voroudi) combines customs duty and commercial benefit tax: 20% (≤1,500cc), 40% (1,500–2,000cc), 155% (2,000–2,500cc), 180% (2,500–3,000cc), 190% (>3,000cc). Hybrids pay 15%, and EVs pay just 4%. VAT at 9% on CIF plus duty."
      },
      {
        "q": "What is the age limit for importing a used car to Iran?",
        "a": "Iran enforces a strict 5-year age limit for used vehicle imports, calculated from the production date (model year encoded in the VIN), not the date of first registration. For 2026 imports, the vehicle must be a 2021 model year or newer. Used vehicles must have a maximum of 100,000 km on the odometer."
      },
      {
        "q": "Can an individual import a vehicle to Iran?",
        "a": "Generally, no — standard vehicle imports are restricted to licensed importing companies registered with MIMT. However, Iranian nationals residing abroad with valid residency permits may import one vehicle per person under the 'Iranian Abroad' scheme, outside the main import quota."
      },
      {
        "q": "Can I import a Right-Hand Drive (RHD) vehicle to Iran?",
        "a": "No. Iran drives on the right-hand side of the road and IRICA strictly prohibits the import of RHD vehicles. RHD vehicles are refused entry regardless of age, condition, or documentation."
      },
      {
        "q": "What is the Sabt-e-Sefaresh and why is it required?",
        "a": "The Sabt-e-Sefaresh (Import License / Order Registration) is a mandatory pre-approval from MIMT that authorizes the import of a specific vehicle. It must be obtained before the vehicle is shipped from China. Without a valid Sabt-e-Sefaresh, the vehicle cannot be loaded onto a vessel for Iran."
      },
      {
        "q": "What is the scrappage certificate requirement for Iran?",
        "a": "Under Article 10 of the Automotive Industry Reform Law (2021), every vehicle imported into Iran requires a scrappage certificate (gavahi-ye-esghat). This means one end-of-life vehicle must be scrapped for each new import. The cost is typically $200–$500."
      },
      {
        "q": "Can I import an electric vehicle from China to Iran?",
        "a": "Yes, and it is strongly encouraged. Electric vehicles attract only 4% import duty, compared to 20–190% for petrol vehicles. A typical EV import would pay: 4% duty on CIF + 9% VAT on (CIF + duty), for a total tax burden of approximately 13–14% of CIF."
      },
      {
        "q": "Can I import a hybrid vehicle to Iran?",
        "a": "Yes, and hybrids benefit from a reduced duty rate of 15% — significantly lower than petrol equivalents (20–190%). For example, a mid-size hybrid SUV pays 15% duty versus 40% for its petrol equivalent."
      },
      {
        "q": "What are the prohibited vehicles and brands for import to Iran?",
        "a": "American-origin vehicles are strictly banned; RHD vehicles are prohibited; diesel-powered passenger cars are not allowed; super-luxury vehicles face additional restrictions; and vehicles without an established after-sales service network in Iran are effectively blocked."
      },
      {
        "q": "How does the currency requirement work for importing to Iran?",
        "a": "The Central Bank of Iran does not provide foreign currency for vehicle imports through the banking system. Importers must source their own foreign currency from export proceeds, foreign bank accounts, or foreign investment. Using unauthorized currency channels can result in the import license being revoked."
      },
      {
        "q": "What Chinese brands are most popular in Iran?",
        "a": "Chery is the leading Chinese brand in Iran, with the Tiggo 7 and Tiggo 8 being highly popular through its partnership with MVM. Changan follows closely with the CS35 Plus and CS55. BYD is the leading EV brand. Geely has a presence through the Bahman Group partnership."
      },
      {
        "q": "Do I need a customs broker in Iran?",
        "a": "Yes, a licensed customs broker (Tarkhis Kar) is required for all vehicle imports into Iran. A customs broker typically charges $300–$800 depending on vehicle value and complexity."
      },
      {
        "q": "What is the typical timeline from order to delivery in Tehran?",
        "a": "Day 1–5 vehicle selection and Sabt-e-Sefaresh application; Day 6–10 procurement and pre-shipment inspection; Day 11–16 documentation preparation; Day 17 container loading; Day 18–42 sea transit to Bandar Abbas (20–28 days); Day 43–50 customs clearance (5–10 business days); Day 51–53 inland trucking to Tehran. Total: approximately 7–8 weeks."
      },
      {
        "q": "What documents need to be legalized by the Iranian Embassy in China?",
        "a": "The Commercial Invoice and Certificate of Origin must be dual-attested — first by CCPIT and then legalized by the Embassy of the Islamic Republic of Iran in Beijing. The legalization process takes approximately 5–7 working days. Cost is approximately $100–$200 per document set."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Iran?",
        "a": "All vehicles are fully insured during transit from our facilities in Beijing and Guizhou until arrival at Bandar Abbas. We insure at 110% of the CIF value. We have maintained a 95% damage-free delivery rate on the Iran route."
      }
    ],
    "dutyCalcDescription": "IRICA calculates duties on the CIF value (Cost + Insurance + Freight). Iran applies a single 'rights of entry' rate (Hoquq-e-Voroudi) that combines customs duty and commercial benefit tax based on engine displacement. VAT is applied on top at 9%. Total burden varies dramatically by engine size — from approximately 13% for EVs to over 200% for large-engine petrol cars."
  },
  'saudi-arabia':   {
    "slug": "saudi-arabia",
    "heroTitle": "Ship vehicles from China to Saudi Arabia via sea with full ZATCA duty estimates, SASO/SABER certification, and FASHA customs compliance.",
    "heroDesc": "Saudi Arabia is the Middle East's largest automotive market, with Chinese brands capturing over 13% market share and growing. Vehicles arrive at Jeddah Islamic Port (Red Sea, 22–30 days) or King Abdulaziz Port in Dammam (Arabian Gulf, 25–30 days). Saudi customs apply a 5% duty plus 15% VAT — or 0% duty for EVs under the Vision 2030 initiative. Every import requires SASO pre-shipment inspection, SABER electronic certification via the PCoC/SCoC platform, FASHA customs declaration, and GCC specification compliance. Whether you are a Riyadh dealer, a Jeddah importer, or an individual buyer, Cargration handles sourcing, SASO/SABER certification, Arabic translations, and shipping so your vehicles clear ZATCA customs and register without delays.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 3200,
        "label": "Cars to Saudi Arabia"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 4,
        "label": "Saudi Routes Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 94,
        "label": "Saudi Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 26,
        "label": "Days Transit (Sea)"
      }
    ],
    "importTabs": [
      {
        "label": "Standard — Individual Import",
        "infoBox": "Saudi citizens and expatriates can import used vehicles up to 5 model years old for personal use. One vehicle per person per 3 years is permitted under the individual import scheme. SASO pre-shipment inspection, SABER certification (PCoC + SCoC), FASHA customs declaration, and LHD-only compliance are required. GCC specification is mandatory.",
        "bullets": [
          "One vehicle per person per 3 calendar years for personal use",
          "No resale within 12 months — selling earlier triggers commercial duty reassessment",
          "Maximum 5 model years old (excluding current year). For 2026, must be 2021 or newer",
          "Left-Hand Drive (LHD) only — RHD vehicles strictly prohibited, no conversions accepted",
          "GCC specification required — climate tolerance, emissions, lighting, safety equipment, km/h speedometer",
          "SASO Certificate of Conformity — pre-shipment inspection by SASO-approved body",
          "SABER PCoC (Product Certificate of Conformity, valid 1 year) + SCoC (Shipment Certificate, valid 60 days)",
          "FASHA electronic customs declaration — must be filed at least 48 hours before arrival",
          "Valid passport/Iqama, Saudi driver's license, and insurance certificate",
          "All foreign documents require certified Arabic translation"
        ]
      },
      {
        "label": "Commercial — Licensed Dealers",
        "infoBox": "Commercial importers must hold a valid commercial registration (CR) with ZATCA, obtain SASO PCoC + SCoC via SABER for each model, and secure a bulk import license. GCC type approval and energy efficiency compliance are mandatory. Arabic translations of all commercial documents are required.",
        "bullets": [
          "Company must be registered in Saudi Arabia with a valid Commercial Registration (CR) from the Ministry of Commerce",
          "Foreign companies require a Saudi partner or agent with a valid CR covering vehicle import activities",
          "SASO PCoC (Product Certificate of Conformity) required per model — valid 1 year, renewable",
          "SABER SCoC (Shipment Certificate of Conformity) required per shipment — valid 60 days, filed through the SABER platform",
          "GCC Type Approval (GSO 42:2015) for series imports — requires full testing and certification",
          "Energy efficiency compliance — Saudi energy efficiency label for high-consumption vehicles",
          "Pre-shipment inspection by SASO-approved body — TÜV Rheinland, SGS, Bureau Veritas, or Intertek",
          "Arabic translations mandatory for all foreign documents",
          "Customs declaration via FASHA must include commercial invoice, packing list, CO, SABER SCoC, and insurance",
          "ZATCA customs clearance fees: based on vehicle value, typically SAR 500–2,000"
        ],
        "extraText": "For Saudi dealerships, Cargration provides wholesale FOB pricing and volume shipping via sea to Jeddah Islamic Port or King Abdulaziz Port Dammam with dedicated Ro-Ro berths."
      },
      {
        "label": "EV & Green Incentive",
        "infoBox": "Saudi Arabia offers 100% customs duty exemption on fully electric vehicles (BEVs) under the Vision 2030 initiative, plus a SAR 50,000 cashback rebate, reduced registration fees, green loans at 1% interest, and free public charging via the EVIQ network. This makes Saudi Arabia one of the most attractive EV import destinations globally.",
        "bullets": [
          "Zero import duty on BEVs — 100% exemption from 5% customs duty",
          "SAR 50,000 (~$13,300) cashback rebate — applied post-import through the SASCO rebate programme",
          "VAT at 15% still applies on CIF value (no VAT exemption for EVs)",
          "Reduced registration fees — EVs pay SAR 100 vs SAR 300 for ICE vehicles",
          "Green loans at 1% interest available for EV purchases through Saudi banks",
          "Free public charging via EVIQ (Saudi Electric Vehicle Charging Infrastructure) network",
          "Hybrids (HEV/PHEV): treated as regular ICE vehicles — no zero-duty incentive",
          "SASO/SABER certification still required for EVs — includes battery safety (UN38.3) and CCS/Type 2 connector compliance",
          "Vision 2030 target: 30% of vehicles in Riyadh to be EVs by 2030",
          "EVIQ deploying 5,000+ charging stations across Saudi Arabia by 2030"
        ],
        "extraText": "A BEV benefits from 0% customs duty (saving ~$1,250 on a $25,000 CIF vehicle) plus the SAR 50,000 cashback rebate. VAT at 15% still applies (~$3,750 on a $25,000 CIF). Popular Chinese EV options include the BYD Song Plus/Atto 3, BYD Seal, and Chery eQ7."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Sea — Shanghai/Shenzhen → Jeddah Islamic Port",
        "summary": "Jeddah Islamic Port on the Red Sea is Saudi Arabia's primary gateway, handling approximately 60% of all vehicle imports. Ships depart from Shanghai, Shenzhen, and Ningbo, transiting via Southeast Asia and the Indian Ocean to reach the Red Sea. Jeddah serves the Western Region including Jeddah, Mecca, Medina, and Riyadh via inland transport corridors.",
        "details": [
          "Transit time: 22–30 days (Shanghai → Jeddah)",
          "Vessel frequency: Weekly from Shanghai, Shenzhen, Ningbo",
          "Shipping modes: RoRo or 20ft/40ft container",
          "Entry point: Jeddah Islamic Port (primary, ~60% of Saudi imports)",
          "Alternative: King Abdullah Port (near Rabigh, ~120km north of Jeddah)",
          "Container cost: ~$2,000–3,000 per container"
        ]
      },
      {
        "icon": "🚢",
        "title": "Sea — Shanghai/Ningbo → King Abdulaziz Port (Dammam)",
        "summary": "King Abdulaziz Port in Dammam is the largest port on Saudi Arabia's Arabian Gulf coast and the primary gateway for the Eastern Province, including Dammam, Khobar, Dhahran, and the industrial hub of Jubail. Ships transit via Southeast Asia and the Strait of Hormuz to reach the Gulf.",
        "details": [
          "Transit time: 25–30 days (Shanghai → Dammam)",
          "Vessel frequency: Weekly from Shanghai, Ningbo, Guangzhou",
          "Shipping modes: RoRo or 20ft/40ft container",
          "Destination port: King Abdulaziz Port, Dammam (largest Arabian Gulf port)",
          "Serves: Eastern Province — Dammam, Khobar, Dhahran, Jubail, Hofuf",
          "Container cost: ~$2,200–3,200 per container"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "BYD Song Plus / Atto 3",
        "desc": "Electric SUV — the most popular Chinese EV in Saudi Arabia. Benefits from 0% import duty plus the SAR 50,000 cashback rebate, making it extremely cost-competitive. With a 420 km range, Blade LFP battery technology, and a modern interior, it is particularly popular in Riyadh and Jeddah's rapidly growing EV segment.",
        "price": "From $22,000 FOB"
      },
      {
        "rank": 2,
        "name": "Changan CS75 Plus",
        "desc": "Mid-size SUV — Changan's best-selling model in Saudi Arabia and the brand's flagship in the region. Combines a 2.0T turbo engine with a spacious interior, advanced driver assistance systems, and a price advantage over comparable Japanese SUVs. Changan has invested heavily in the Saudi market with an extensive dealer network.",
        "price": "From $16,500 FOB"
      },
      {
        "rank": 3,
        "name": "Haval H6",
        "desc": "Family SUV — the world's best-selling SUV in its class, the Haval H6 has become a staple in the Saudi family vehicle segment. With 5-star safety ratings, generous cabin space, GCC-spec climate control optimised for Saudi summers, and comprehensive warranty coverage through Great Wall Motor's Saudi dealer network.",
        "price": "From $15,000 FOB"
      },
      {
        "rank": 4,
        "name": "Geely Coolray",
        "desc": "Compact crossover — built on Volvo's CMA platform, the Coolray is the best-value compact SUV in the Saudi market and one of the most popular Chinese vehicles among young Saudi buyers. Its 1.5T engine, sporty design, and competitive pricing make it a strong alternative to the Toyota Yaris Cross and Hyundai Kona.",
        "price": "From $14,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Foreign trade contract between buyer and seller",
          "Commercial invoice with full vehicle specifications (VIN, engine, HS code 8703) — Arabic translation required",
          "Packing list with dimensions, weight, and container details",
          "Certificate of Origin (CO) — certified by CCPIT, Chamber of Commerce attested",
          "Bill of Lading (B/L)",
          "Vehicle inspection report with photos and video",
          "Original title or registration document from China"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "SASO Certificate of Conformity — pre-shipment inspection by SASO-approved body",
          "SABER PCoC (Product Certificate of Conformity) — issued via SABER platform, valid 1 year",
          "SABER SCoC (Shipment Certificate of Conformity) — issued per shipment, valid 60 days",
          "Energy efficiency certificate (for GCC-spec compliance)",
          "Customs declaration via FASHA — filed electronically, at least 48 hours before arrival",
          "Notarised Arabic translations of all foreign-language documents",
          "Valid passport / Iqama (residence permit) for individual importers",
          "Saudi driver's license",
          "Insurance certificate from a Saudi-registered insurer",
          "GCC specification certificate — confirming vehicle meets GSO 42:2015 standards",
          "Proof of ownership / vehicle title"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "Saudi Customs Expertise",
        "desc": "We manage SASO pre-shipment certification, SABER PCoC/SCoC issuance, and FASHA electronic customs declarations. Our documentation team prepares all Arabic-translated paperwork before the vehicle leaves China. We work exclusively with licensed Saudi customs brokers registered with ZATCA who specialise in Chinese vehicle imports."
      },
      {
        "title": "Sea Logistics Network",
        "desc": "We ship through Jeddah Islamic Port (Red Sea, 22–30 days) and King Abdulaziz Port Dammam (Arabian Gulf, 25–30 days). Both ports have dedicated Ro-Ro berths and container handling facilities for vehicle imports. Our logistics partners offer weekly sailings from Shanghai, Shenzhen, and Ningbo to both ports."
      },
      {
        "title": "ZATCA Compliance Strategy",
        "desc": "We help you navigate the 5% duty + 15% VAT structure, SASO energy efficiency requirements, GCC specification compliance, and the SABER electronic certification platform to avoid clearance delays. Our team stays current with ZATCA tariff updates, SASO standards revisions, and FASHA system changes."
      },
      {
        "title": "EV Incentive Programme",
        "desc": "EVs benefit from 100% customs duty exemption and SAR 50,000 cashback. We help identify qualifying BEV models that meet SASO battery safety standards (UN38.3, CCS/Type 2 connector), manage the SASCO rebate application process, and connect buyers with Saudi green financing partners at 1% interest rates."
      }
    ],
    "faqItems": [
      {
        "q": "What is the total import duty for a vehicle in Saudi Arabia?",
        "a": "For ICE vehicles: 5% customs duty on CIF value plus 15% VAT on (CIF + duty), giving an effective rate of approximately 20.75%. For EVs: 0% customs duty (100% exemption under Vision 2030), VAT at 15% on CIF only. Same $20,000 CIF BEV = $0 duty + $3,000 VAT = $3,000 total, plus the SAR 50,000 (~$13,300) cashback rebate."
      },
      {
        "q": "What is the difference between SASO and SABER?",
        "a": "SASO (Saudi Standards, Metrology and Quality Organization) is the national standards body that establishes technical regulations. SABER is the electronic platform (saber.sa) operated by SASO for issuing Certificates of Conformity. Two types of certificates are required: PCoC (valid 1 year) and SCoC (valid 60 days per shipment)."
      },
      {
        "q": "What is the age limit for importing a used vehicle?",
        "a": "Saudi Arabia allows import of used vehicles with a maximum age of 5 model years (excluding the current year). For 2026 imports, the vehicle must be from model year 2021 or newer. Vehicles over 5 years can be imported with special approval from ZATCA, but this requires payment of a financial compensation fee of 20–50% of the vehicle's value — with a minimum fee of SAR 20,000."
      },
      {
        "q": "Can I import an electric vehicle to Saudi Arabia?",
        "a": "Yes, and EVs receive substantial incentives under Vision 2030: 100% customs duty exemption, SAR 50,000 cashback rebate, reduced registration fees (SAR 100 vs SAR 300), green loans at 1% interest, and free public charging via the EVIQ network. The Saudi EV market is growing rapidly with a target of 30% EVs in Riyadh by 2030."
      },
      {
        "q": "What is FASHA and how does it work?",
        "a": "FASHA is Saudi Arabia's National Single Window for all cross-border trade procedures, operated by Saudi eTabadul Company under ZATCA supervision. All customs declarations must be submitted electronically through FASHA (fasah.sa). The system integrates with over 30 government agencies and can reduce customs processing to 4–6 hours for compliant shipments."
      },
      {
        "q": "What documents need Arabic translation?",
        "a": "All foreign-language documents submitted to Saudi authorities must be translated into Arabic by a certified legal translator. Documents requiring translation include the foreign trade contract, commercial invoice, Certificate of Origin, vehicle title, and bill of lading. Cost: typically SAR 500–1,500 per document."
      },
      {
        "q": "Can I register a right-hand drive vehicle in Saudi Arabia?",
        "a": "No. Saudi Arabia strictly prohibits registration and road use of right-hand drive vehicles. The vehicle must be originally manufactured as LHD — converted vehicles are also rejected."
      },
      {
        "q": "What is GCC spec and why is it important?",
        "a": "GCC specification refers to the technical requirements for vehicles in GCC member states, covering climate tolerance, emissions, lighting, safety equipment, km/h speedometer, radio frequency compliance, and dust filtration. Chinese domestic market vehicles require modifications to meet GCC specification."
      },
      {
        "q": "What Chinese brands are most popular in Saudi Arabia?",
        "a": "Changan is the market leader with ~28,700 units sold in 2024. MG follows with ~20,400 units. Geely sold ~19,100 units. Chery is the fastest-growing. BYD leads the EV segment. Chinese brands as a group hold ~13% of Saudi Arabia's total automotive market."
      },
      {
        "q": "Do I need a customs broker in Saudi Arabia?",
        "a": "Yes. All imports must be cleared through FASHA by a licensed customs broker registered with ZATCA. The broker handles FASHA declarations, duty/VAT payment via SADAD, SABER certificate verification, and physical inspection coordination. Fees: SAR 500–2,000 per shipment."
      },
      {
        "q": "What is the timeline from order to delivery in Riyadh?",
        "a": "Day 1–3 vehicle selection; Day 4–10 procurement; Day 11–18 SASO/SABER certification and docs; Day 19–28 sea transit to Jeddah (22–30 days); Day 29–34 customs clearance (5–7 days); Day 35–36 inland transport to Riyadh (~950km). Total: approximately 5–6 weeks."
      },
      {
        "q": "What modifications do Chinese vehicles need for Saudi Arabia?",
        "a": "Enhanced AC cooling for 45–50°C temperatures, Arabic HMI/infotainment, GCC-spec headlight beam pattern, rear fog light, speedometer in km/h, enhanced dust filtration, CITC radio frequency compliance, GCC-certified tyres, and compliant window tinting."
      }
    ],
    "dutyCalcDescription": "Saudi customs duty on passenger vehicles is calculated at the higher of the ad valorem rate (5% of CIF) or the specific rate (€/cc), for new vehicles under 3 years old. For used vehicles (3–5 years), fixed specific €/cc rates apply directly. VAT at 15% is charged on CIF + customs duty. EVs pay 0% customs duty and qualify for the SAR 50,000 cashback rebate."
  },
  'qatar':   {
    "slug": "qatar",
    "heroTitle": "Ship vehicles from China to Qatar with GCC 5% duty, GSO conformity certification, and full MOI registration support.",
    "heroDesc": "Qatar applies the GCC Common Customs Tariff at a flat 5% duty rate with no VAT — one of the lowest tax burdens globally. Used imports must be within a 5-year age limit, and all vehicles require a GSO/GCC Conformity Certificate authenticated through the Mutabiq system. Since the landmark Circular 1/2025, individuals can now import vehicles directly. Customs clearance runs through the Al-Nadeeb single-window platform, followed by Fahes technical inspection and MOI Traffic Department registration. Whether you are a Doha-based dealer, an individual importer, or a fleet operator, Cargration handles sourcing, GSO certification, documentation, and shipping so your vehicles clear Qatar Customs and register with MOI without delays.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 180,
        "label": "Cars to Qatar"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Qatari Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 95,
        "label": "Qatar Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 20,
        "label": "Days Transit (Sea)"
      }
    ],
    "importTabs": [
      {
        "label": "Standard — Individual Import",
        "infoBox": "Since Circular 1/2025, Qatari citizens and residents can directly import vehicles from abroad without going through a local dealer. Used passenger vehicles must be no more than 5 years old from the year of manufacture. Mandatory GSO/GCC Conformity Certificate, customs clearance via Al-Nadeeb, Fahes inspection, and MOI Traffic Department registration are required.",
        "bullets": [
          "Used passenger vehicles must be ≤ 5 years old from the year of manufacture (for 2026: 2021 model year or newer)",
          "Left-Hand Drive (LHD) only — RHD vehicles strictly prohibited and cannot be registered",
          "Mandatory GSO/GCC Conformity Certificate authenticated through the Mutabiq system",
          "Customs declaration filed through the Al-Nadeeb single-window portal",
          "Import permit from Ministry of Commerce and Industry (MoCI) required",
          "Euro 4 minimum emissions for petrol engines; Euro 5 for diesel",
          "Fahes (WOQOD) technical inspection within 14 days of arrival at Hamad Port",
          "Valid Qatar ID and driving licence required for registration",
          "Invoice and Certificate of Origin must be attested by Qatar Chamber — otherwise 1% penalty on CIF applies"
        ]
      },
      {
        "label": "Commercial — Licensed Dealers",
        "infoBox": "Commercial importers must hold a valid Commercial Registration (CR) from MoCI, be registered in the Al-Nadeeb system, and maintain an Importer's Register with Qatar Chamber. Dealerships are registered under the MOI dealer plate system for test drives.",
        "bullets": [
          "Same 5-year age limit and GCC conformity requirements apply — no commercial exemption",
          "Company must hold a valid CR, Qatar Chamber registration, and be registered in Al-Nadeeb",
          "Commercial invoice must include detailed vehicle specifications (VIN, engine, HS code)",
          "Certificate of Origin (CO) — attested by Qatar Chamber and/or Qatar Embassy in China",
          "GSO/GCC Conformity Certificate from the Mutabiq system",
          "Customs valuation based on CIF declaration — Customs may apply reference values",
          "Bulk shipments require individual Al-Nadeeb declarations per vehicle",
          "Since Circular 1/2025, dealers must honour manufacturer warranties and provide spare parts for directly imported vehicles that meet GCC specifications",
          "Dealers face legal action for unjustified delays in warranty service for direct imports"
        ],
        "extraText": "For Qatari dealerships, Cargration provides wholesale FOB pricing and volume shipping from Chinese ports to Hamad Port."
      },
      {
        "label": "EV & Green Incentive",
        "infoBox": "Qatar is aggressively pursuing EV adoption under its National Vision 2030 and Net Zero 2050 targets. While EV imports still attract the standard 5% customs duty (no special duty exemption yet), they benefit from registration fee waivers, expanding charging infrastructure, and building code mandates for EV-ready parking. Over 73% of Doha's public bus fleet is already electric.",
        "bullets": [
          "Registration fee exemption for EVs (saving QAR 100 per year)",
          "Customs duty: 5% still applies — no special EV duty reduction as of 2026",
          "No VAT in Qatar (saving 5%+ compared to other GCC markets)",
          "300+ fast chargers installed across Qatar as of mid-2026, targeting 1,000 by 2030",
          "Building code mandate: all new buildings must have 20% EV-ready parking; existing buildings with 100+ spaces must retrofit 10% by 2028",
          "Tarsheed smart charging app provides real-time station status",
          "Qatar targets 10% EV sales by 2030 and 24% by 2035",
          "Green financing available for EV purchases through Qatari banks"
        ],
        "extraText": "While Qatar does not offer duty exemption on EVs like some GCC neighbours, the combined advantage of no VAT (saving ~5% vs UAE/Oman), the registration fee waiver, and the extremely low 5% duty rate means Qatar is still one of the most cost-effective destinations for importing any vehicle — including EVs."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Container & RoRo — China to Hamad Port",
        "summary": "Regular direct and transshipment sailings from Shenzhen, Shanghai, Ningbo, and Guangzhou to Hamad Port — Qatar's primary maritime gateway handling over 90% of the country's imports. Most vessels transit via Jebel Ali (Dubai) or Colombo before arriving at Hamad, with direct services also available from major Chinese ports.",
        "details": [
          "Transit time: 16–25 days (Shenzhen → Hamad)",
          "Vessel frequency: Every 5–10 days from main Chinese ports",
          "Shipping modes: RoRo or 20ft/40ft container",
          "Destination port: Hamad Port (primary)",
          "RoRo cost: ~$800–1,500 per vehicle",
          "Container cost: ~$1,100–4,400 per 20ft container",
          "LCL: ~$600–1,200 for single vehicles"
        ]
      },
      {
        "icon": "📋",
        "title": "Pre-shipment Requirements",
        "summary": "Qatar Customs enforces strict documentation requirements. Every shipment requires a GSO/GCC Conformity Certificate authenticated through the Mutabiq system. Import permits from MoCI must be obtained before or upon arrival. All declarations are processed through the Al-Nadeeb single-window system. Invoice and CO must be attested by Qatar Chamber.",
        "details": [
          "GSO/GCC Conformity Certificate — authenticated via Mutabiq system, issued by GSO-notified body",
          "Import Permit — from Ministry of Commerce and Industry (MoCI)",
          "Certificate of Origin (CO) — attested by Qatar Chamber and/or Qatar Embassy in China",
          "Commercial invoice — attested by Qatar Chamber (1% CIF penalty if not attested)",
          "Packing list with VIN, dimensions, weight, and engine number",
          "Original Bill of Lading (B/L) consigned to the Qatari importer",
          "Original export certificate from country of origin",
          "Marine insurance policy — supports CIF declaration"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "BYD Seal",
        "desc": "Premium electric sedan — the most popular Chinese EV in Qatar. With a WLTP range of 570 km, 0–100 km/h in 3.8 seconds, and a luxurious interior, the Seal competes directly with the Tesla Model S at half the price. The 5% duty and no VAT make it exceptionally cost-competitive in Doha's growing EV market.",
        "price": "From $28,000 FOB"
      },
      {
        "rank": 2,
        "name": "Zeekr 001",
        "desc": "Premium electric shooting brake — gaining popularity in Qatar for its distinctive design, spacious interior, and 620 km WLTP range. Appeals to Doha buyers seeking a luxury EV alternative to the Porsche Taycan. The 400 kW fast-charging capability is well-suited to Qatar's expanding charging network.",
        "price": "From $30,000 FOB"
      },
      {
        "rank": 3,
        "name": "Chery Tiggo 8 Pro",
        "desc": "Full-size petrol SUV with three-row seating — popular with Qatari families for its spacious interior, generous ground clearance, and powerful air conditioning system designed for 50°C+ temperatures. The 2.0T engine and all-wheel-drive configuration make it well-suited for both highway cruising and light desert driving.",
        "price": "From $16,500 FOB"
      },
      {
        "rank": 4,
        "name": "GAC GS8",
        "desc": "Premium mid-size SUV — gaining ground in Doha for its upscale interior, advanced driver assistance features, and competitive pricing against the Toyota Land Cruiser Prado and Nissan Patrol. Comes equipped with a heavy-duty cooling system suitable for Gulf climate conditions.",
        "price": "From $17,800 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full vehicle specifications (VIN, engine, HS code)",
          "Packing list with dimensions, weight, and container details",
          "Certificate of Origin (CO) — prepared for attestation by Qatar Chamber",
          "Bill of Lading (B/L) consigned to the Qatari importer",
          "GSO/GCC Conformity Certificate — authenticated via Mutabiq system",
          "Original export certificate from China",
          "Vehicle inspection report with photos and video",
          "Original title or registration document from China"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Valid Qatar ID with valid residency (for expats) or Qatari ID (for citizens)",
          "Valid Qatari driving licence",
          "Import permit from Ministry of Commerce and Industry (MoCI)",
          "Al-Nadeeb customs declaration — filed through Qatar Customs single window",
          "Customs clearance certificate from Hamad Port",
          "Fahes (WOQOD) technical inspection certificate",
          "Valid motor insurance policy from a Qatari insurer (third-party liability minimum)",
          "Sponsor letter (if under personal sponsorship) or Commercial Registration (for companies)"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "Low-Tariff Advantage",
        "desc": "Qatar offers the lowest tax burden in the GCC — just 5% customs duty with no VAT. Total effective tax is approximately 5% of CIF, compared to 10.25% in Oman/UAE and 20.75% in Saudi Arabia. We provide precise landed cost estimates so you can take full advantage of Qatar's favourable import regime."
      },
      {
        "title": "GSO/Mutabiq Expertise",
        "desc": "Every vehicle imported to Qatar must have a GSO/GCC Conformity Certificate authenticated through the Mutabiq system. We manage the entire certification process — from engaging GSO-notified bodies in China to uploading VIN numbers and activating certificates in the Mutabiq portal before your vehicle departs."
      },
      {
        "title": "Age-Compliant Sourcing",
        "desc": "Qatar's strict 5-year age limit for used imports leaves no margin for error — a 2021 model year vehicle arriving in 2026 is at the limit. We verify the manufacture year of every vehicle before sourcing to ensure age compliance. Vehicles exceeding the limit cannot be registered, and there is no penalty pathway."
      },
      {
        "title": "Hamad Port Network",
        "desc": "We work with licensed customs brokers at Hamad Port who know Al-Nadeeb procedures, document attestation requirements, Fahes inspection scheduling, and MOI Traffic Department registration. Since Circular 1/2025, individual importers enjoy the same rights as dealers, and our network supports both direct and commercial imports."
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Qatar?",
        "a": "Qatar has one of the lowest tax burdens on vehicle imports in the world. The total is approximately 5% of CIF value — consisting solely of the GCC Common Customs Tariff at a flat 5%. Qatar does not levy VAT, excise duty, or any other vehicle-specific taxes. For comparison, the same vehicle imported to Saudi Arabia would cost approximately $4,150 in duty and VAT — over four times more."
      },
      {
        "q": "Can individuals import vehicles directly to Qatar?",
        "a": "Yes, since the landmark Circular 1/2025 issued by the Ministry of Commerce and Industry in January 2025, individuals are now permitted to import vehicles directly from abroad for personal use. Local dealers must honour manufacturer warranties and provide spare parts for directly imported vehicles that meet GCC specifications."
      },
      {
        "q": "What is the age limit for importing a used car to Qatar?",
        "a": "Qatar enforces a strict 5-year maximum age limit for used passenger vehicle imports, calculated from the year of manufacture — not the date of first registration. For vehicles arriving in 2026, the car must be a 2021 model year or newer. Additionally, vehicles over 15 years old from the year of manufacture cannot be registered with MOI at all."
      },
      {
        "q": "What is the GSO/GCC Conformity Certificate and how is it different in Qatar?",
        "a": "The GSO/GCC Conformity Certificate certifies that a vehicle meets Gulf Standardization Organization technical regulations. In Qatar specifically, the certificate must be authenticated through the Mutabiq system (gso.org.sa/cc), which is the GCC-wide online platform for conformity certificate verification."
      },
      {
        "q": "What climate-specific modifications do Chinese vehicles need for Qatar?",
        "a": "Qatar's extreme climate requires: a larger radiator and heavy-duty cooling fans, robust air conditioning compressor, dust-resistant air filters, high-temperature-rated battery, transmission cooler for automatic vehicles, and underbody corrosion protection."
      },
      {
        "q": "What is the Al-Nadeeb system and how does customs clearance work?",
        "a": "Al-Nadeeb is Qatar's single-window customs clearance platform operated by the General Authority of Customs. All import declarations must be submitted electronically. The process: register as importer, submit declaration with attachments, risk assessment, valuation, online payment of 5% duty + QAR 150 Bayan fee, and release order."
      },
      {
        "q": "What is the Fahes inspection and what does it check?",
        "a": "Fahes is the mandatory vehicle technical inspection programme operated by WOQOD. It must be completed within 14 days of arrival. It covers brakes, suspension, lighting, exhaust emissions, structural integrity, VIN verification, tyre condition, air conditioning performance, and cooling system inspection. Fee: ~QAR 300–450."
      },
      {
        "q": "What Chinese brands are most popular in Qatar?",
        "a": "BYD is the leading Chinese brand, particularly the Seal and Yuan Plus (Atto 3). Zeekr is gaining traction with the 001 shooting brake. Chery's Tiggo 8 Pro is popular among families. GAC Motor's GS8 competes in the premium SUV segment."
      },
      {
        "q": "What are the EV incentives in Qatar?",
        "a": "While Qatar does not offer customs duty exemption on EVs, it provides registration fee waivers, 300+ fast chargers (targeting 1,000 by 2030), building code mandates for EV-ready parking, and green financing. 73% of Doha's public bus fleet is already electric."
      },
      {
        "q": "What is the typical timeline from order to delivery in Doha?",
        "a": "Day 1–3 vehicle selection; Day 4–10 procurement; Day 11–18 documentation (GSO certification, MoCI permit); Day 19 container loading; Day 20–40 sea transit (16–25 days); Day 41–47 customs clearance via Al-Nadeeb; Day 48 Fahes and insurance; Day 49–52 MOI registration. Total: approximately 7–8 weeks."
      },
      {
        "q": "Do I need a customs broker in Qatar?",
        "a": "While individuals can theoretically handle clearance through Al-Nadeeb themselves, a licensed customs broker is strongly recommended and mandatory for commercial imports. Fee: QAR 700–1,300 ($200–$350) per vehicle."
      },
      {
        "q": "What insurance is required for vehicle registration in Qatar?",
        "a": "Third-party liability (TPL) insurance is mandatory for all vehicles on Qatari roads. Policy must be from a Qatari-registered insurer, valid for minimum one year. Average TPL costs: QAR 350–1,200 per year. Comprehensive insurance is recommended at approximately 2–7% of vehicle value per year."
      }
    ],
    "dutyCalcDescription": "Qatar Customs calculates duties on the CIF value — Cost (FOB), Insurance, and Freight. The GCC Common Customs Tariff applies a flat 5% customs duty. Qatar does not levy VAT, making it one of the lowest-tax import destinations globally. The effective tax rate is simply 5% of CIF, plus a QAR 150 Bayan customs declaration fee."
  },
  'oman':   {
    "slug": "oman",
    "heroTitle": "Ship vehicles from China to Oman with GCC 5% duty, GSO conformity certification, and full ROP registration support.",
    "heroDesc": "Oman applies the GCC Common Customs Tariff with a flat 5% duty rate — one of the lowest combined tax burdens in the region at approximately 10.25%. Electric vehicles enjoy full exemption from customs duty, VAT, and ROP registration fees. All imports require a GSO/GCC Conformity Certificate (SASE) and must pass ROP customs clearance through the Bayan system, followed by technical inspection and registration via eTraffic. Whether you are a Muscat-based dealer, an importer in Salalah, or a buyer in the Sohar Free Zone, Cargration handles sourcing, GSO certification, documentation, and shipping so your vehicles clear Omani customs and register with ROP without delays.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 210,
        "label": "Cars to Oman"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 4,
        "label": "Omani Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 94,
        "label": "Oman Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 22,
        "label": "Days Transit (Sea)"
      }
    ],
    "importTabs": [
      {
        "label": "Standard — Individual Import",
        "infoBox": "Omani citizens and residents can import used passenger vehicles up to 7 years old from the year of manufacture. Mandatory GSO/GCC Conformity Certificate (SASE), customs clearance via the Bayan portal, Fahas technical inspection, and vehicle registration through eTraffic are required for all imports. Individuals can import directly without using a licensed dealer.",
        "bullets": [
          "Passenger vehicles must be ≤ 7 years old from the year of manufacture (for 2026: 2019 model year or newer)",
          "Left-Hand Drive (LHD) only — RHD vehicles are strictly prohibited and cannot be registered with ROP",
          "Mandatory GSO/GCC Conformity Certificate (SASE) — issued by a GSO-notified body (TÜV Rheinland, etc.)",
          "Customs declaration filed through the Bayan e-customs portal before or upon arrival",
          "Euro 5 minimum emissions standard enforced for both petrol and diesel engines",
          "Fahas technical inspection required for all imported vehicles over 3 years old",
          "Third-party motor insurance from an Omani insurer required before registration",
          "Valid Oman ID (citizen) or Resident Card (expat) required for registration"
        ]
      },
      {
        "label": "Commercial — Licensed Dealers",
        "infoBox": "Commercial importers must be registered with the Ministry of Commerce, Industry and Investment Promotion (MoCIIP) and must use licensed customs brokers for clearance. Dealerships have a streamlined registration process through eTraffic with bulk plate reservation and insurance binding.",
        "bullets": [
          "Same age limits and conformity standards apply as individual imports — no commercial exemption",
          "Company must hold a valid MoCIIP commercial registration (CR) and be registered with Oman Tax Authority for VAT",
          "Commercial invoice must include detailed vehicle specifications (VIN, engine, HS code 8703)",
          "Certificate of Origin (CO) — certified by China Chamber of Commerce, legalised by Omani embassy in China if required",
          "GSO/GCC Conformity Certificate (SASE) from a GSO-notified body",
          "Customs valuation is based on the CIF declaration — ROP may apply reference values for commonly imported models",
          "Bulk shipments require individual Bayan customs declarations per vehicle",
          "Customs clearance must be handled by a licensed Omani customs broker registered with ROP",
          "Dealerships can pre-register vehicles through eTraffic before physical arrival using the batch registration facility"
        ],
        "extraText": "For Omani dealerships, Cargration provides wholesale FOB pricing and volume shipping from Chinese ports to Sohar (primary), Port Sultan Qaboos, and Salalah."
      },
      {
        "label": "EV & Green Incentive",
        "infoBox": "As of 2026, pure electric vehicles (BEVs) qualify for a comprehensive incentive package in Oman: 0% customs duty, 0% VAT, and zero ROP registration fees. This makes Oman one of the most EV-friendly import destinations in the GCC, with a total tax burden of effectively 0% on imported EVs.",
        "bullets": [
          "Customs duty: 0% (standard 5% fully exempted)",
          "VAT: 0% on EVs and spare parts (standard 5% fully exempted)",
          "ROP registration fees: zero registration cost",
          "Annual road tax still applies based on equivalent engine capacity",
          "No age limit exemption — EVs must still comply with the 7-year age rule",
          "GSO/GCC Conformity Certificate still mandatory for all EVs",
          "Fahas inspection and third-party insurance still required",
          "Oman targets 22,000 EVs by 2030 and 100% EV registration by 2050 under Oman Vision 2040",
          "160+ public charging points operational as of mid-2026, targeting 350 by 2027",
          "Ministerial Resolution 615/2023 requires all service stations to provide EV charging"
        ],
        "extraText": "With 0% duty, 0% VAT, and zero registration fees, importing an EV to Oman saves approximately 10.25% in total landed cost versus an equivalent petrol vehicle. For a $30,000 CIF vehicle, this is a saving of over $3,000. Popular Chinese EV options include the BYD Yuan Plus (Atto 3), BYD Seal, NIO ET5, and Zeekr 001."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Container & RoRo — China to Sohar & Regional Ports",
        "summary": "Regular direct and transshipment sailings from Shanghai, Shenzhen, Ningbo, and Guangzhou to Sohar Port — Oman's primary vehicle import gateway, handling approximately 80% of maritime cargo. Alternative discharge points include Port Sultan Qaboos (Muscat), Salalah Port, and Duqm Port.",
        "details": [
          "Transit time: 18–25 days (direct from Shanghai to Sohar)",
          "Vessel frequency: Every 5–10 days from main Chinese ports",
          "Shipping modes: RoRo or 20ft/40ft container",
          "Destination ports: Sohar (primary), Port Sultan Qaboos (Muscat), Salalah, Duqm",
          "Container cost: ~$5,000–5,900 per 20ft container",
          "RoRo cost: ~$1,500–2,500 per vehicle"
        ]
      },
      {
        "icon": "📋",
        "title": "Pre-shipment Requirements",
        "summary": "ROP enforces strict pre-arrival documentation. Every shipment requires a GSO/GCC Conformity Certificate (SASE) from a GSO-notified body. Customs declarations are processed through the Bayan e-customs portal. For GCC-origin vehicles, an export certificate (not clearance certificate) is required since July 2025.",
        "details": [
          "GSO/GCC Conformity Certificate (SASE) — mandatory, issued by TÜV Rheinland or other GSO-notified body",
          "Certificate of Origin (CO) — certified by China Chamber of Commerce",
          "Commercial invoice with full vehicle specifications (VIN, engine, HS code 8703)",
          "Packing list with VIN, dimensions, weight, and engine number",
          "Original Bill of Lading (B/L) consigned to the Omani importer",
          "Original export certificate from country of origin (or GCC export certificate for GCC imports)",
          "Marine insurance policy — covers shipping leg and supports CIF declaration",
          "Vehicle registration document / title from the country of origin"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "BYD Yuan Plus (Atto 3)",
        "desc": "Fully electric compact SUV — the leading EV choice for Oman's rapidly growing green vehicle segment. Benefits from the full incentive package: 0% duty, 0% VAT, and zero registration fees, making it significantly cheaper to import than any equivalent ICE SUV. Oman's expanding charging network in Muscat and along the Batinah Highway supports daily use.",
        "price": "From $18,500 FOB"
      },
      {
        "rank": 2,
        "name": "Chery Tiggo 8 Pro",
        "desc": "Full-size SUV with a 1.6T or 2.0T engine — popular with Omani families and fleet operators for its spacious three-row seating, generous ground clearance, and strong air conditioning. Competes directly with the Toyota Fortuner and Hyundai Santa Fe at a significantly lower price point.",
        "price": "From $16,500 FOB"
      },
      {
        "rank": 3,
        "name": "GAC GS8",
        "desc": "Premium mid-size SUV with a 2.0T engine — gaining popularity in Oman for its upscale interior, advanced driver assistance features, and competitive pricing against the Toyota Prado and Nissan Patrol. Well-suited to Oman's mix of highway driving and off-road terrain.",
        "price": "From $17,800 FOB"
      },
      {
        "rank": 4,
        "name": "Zeekr 001",
        "desc": "Premium electric shooting brake — Oman's luxury EV segment is growing, and the Zeekr 001 offers a compelling alternative to the Tesla Model Y and Porsche Taycan. With 0% duty and VAT exemption, represents exceptional value in the Omani market for buyers seeking a high-performance EV.",
        "price": "From $30,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full vehicle specifications (VIN, engine, HS code 8703)",
          "Packing list with dimensions, weight, and container details",
          "Certificate of Origin (CO) — certified by China Chamber of Commerce",
          "Bill of Lading (B/L) consigned to the Omani importer",
          "GSO/GCC Conformity Certificate (SASE) — from a GSO-notified body",
          "Original export certificate from China",
          "Vehicle inspection report with photos and video",
          "Original title or registration document from China"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Valid Oman ID (citizen) or Resident Card (expat)",
          "Valid Omani driving licence",
          "Bayan customs declaration — filed through the ROP e-customs portal",
          "Customs clearance receipt from Oman Customs",
          "Fahas technical inspection certificate (for vehicles over 3 years old)",
          "Omani motor insurance policy (third-party liability minimum)",
          "Copy of passport with valid residency (for expat importers)",
          "Power of Attorney (if using a customs broker)"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "GSO/SASE Certification Expertise",
        "desc": "Oman requires mandatory GSO/GCC Conformity Certification (SASE) from a GSO-notified body. We arrange this certification as part of our standard export process, verifying Euro 5 emissions compliance and GCC technical standards conformity (GSO 42:2015) before the vehicle leaves China."
      },
      {
        "title": "Low Tariff Knowledge",
        "desc": "Oman's duty structure is one of the simplest in the GCC — flat 5% customs duty plus 5% VAT on the duty-inclusive amount, totalling approximately 10.25%. EVs are fully exempt from both. We provide precise landed cost estimates covering every applicable charge."
      },
      {
        "title": "Age-Compliant Sourcing",
        "desc": "We verify the manufacture year of every vehicle before sourcing to ensure compliance with Oman's 7-year age limit. Unlike some countries where overage penalties apply, Oman's enforcement is absolute — vehicles exceeding the age limit cannot be registered with ROP. We help you avoid this costly mistake."
      },
      {
        "title": "Sohar Port Network",
        "desc": "We work with licensed customs brokers at Sohar Port, Port Sultan Qaboos, and Salalah who know ROP procedures, the Bayan e-customs system, and the eTraffic registration platform. Our network ensures smooth clearance from vessel arrival through Fahas inspection to Mulkiya issuance."
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Oman?",
        "a": "Total taxes are approximately 10.25% of CIF value — one of the lowest in the GCC. Customs duty is a flat 5% of CIF. VAT at 5% is charged on the CIF + customs duty amount (compounded). Electric vehicles are fully exempt from both customs duty and VAT, bringing the total tax burden to 0%."
      },
      {
        "q": "What is the age limit for importing a used car to Oman?",
        "a": "Oman enforces a 7-year maximum age limit for used passenger vehicle imports, calculated from the year of manufacture. For 2026, this means the car must be a 2019 model year or newer. Some sources indicate ROP may apply a stricter 5-year limit from the first registration date for certain import categories. Enforcement is absolute — vehicles exceeding the age limit cannot be registered with ROP."
      },
      {
        "q": "Can I import a Right-Hand Drive (RHD) vehicle to Oman?",
        "a": "No. Oman drives on the right-hand side of the road and ROP strictly prohibits the import and registration of RHD vehicles. This is a firm rule with no exemption pathway except diplomatic or military vehicles."
      },
      {
        "q": "What is the GSO/GCC Conformity Certificate (SASE) and how do I get one?",
        "a": "The SASE or GCC Conformity Certificate is a mandatory document certifying that a vehicle meets GCC technical regulations, including GSO 42:2015, Euro 5 emissions standards, and safety requirements. Must be issued by a GSO-notified body — TÜV Rheinland, TÜV SÜD, SGS, Bureau Veritas, and Intertek are commonly recognised. Process typically takes 2–4 weeks."
      },
      {
        "q": "What are the EV import incentives in Oman?",
        "a": "As of 2026, BEVs qualify for: 0% customs duty (standard 5% fully waived), 0% VAT on both the vehicle and spare parts, zero ROP registration fees, total effective tax burden of 0%. Over 5,900 EVs were registered in Oman by mid-2026, representing 138% year-on-year growth. 160+ public charging points operational, targeting 350 by 2027."
      },
      {
        "q": "How does ROP register a newly imported vehicle in Oman?",
        "a": "Step 1 — customs clearance through the Bayan portal (3–5 business days); Step 2 — Fahas technical inspection at an authorised centre; Step 3 — secure third-party motor insurance from an Omani insurer; Step 4 — submit documents at the ROP traffic department or through the eTraffic portal; Step 5 — pay registration fees: OMR 60–100; Step 6 — receive the Mulkiya and Omani license plates. Total: typically 5–7 business days after customs clearance."
      },
      {
        "q": "What is the Fahas inspection and why is it required?",
        "a": "Fahas is the mandatory technical inspection programme administered by ROP for all imported vehicles over 3 years old. It covers brakes, suspension, lighting, exhaust emissions (Euro 5 minimum), structural integrity, VIN verification, tyre condition, and odometer accuracy. Fee: OMR 10–20 ($26–$52). If failed, you have 30 days to repair and re-test."
      },
      {
        "q": "What Chinese brands are most popular in Oman?",
        "a": "BYD is the fastest-growing, particularly the Yuan Plus (Atto 3) and Seal with the full EV incentive package. Chery has a strong presence with the Tiggo 8 Pro. GAC Motor is well-regarded for the GS8. Zeekr is entering the luxury EV segment with the 001 shooting brake."
      },
      {
        "q": "Can I import a vehicle from another GCC country to Oman?",
        "a": "Yes, but with important rule changes effective July 1, 2025. ROP now requires an export certificate from the vehicle's country of registration — a clearance certificate is no longer accepted. Vehicles over 3 years old from GCC are treated as used imports and must meet all standard requirements."
      },
      {
        "q": "What is the typical timeline from order to delivery in Sohar?",
        "a": "Day 1–3 vehicle selection; Day 4–10 procurement; Day 11–18 documentation (GSO/SASE certification, CO, export declaration); Day 19 container loading; Day 20–40 sea transit to Sohar (18–25 days); Day 41–47 customs clearance via Bayan; Day 48 Fahas and insurance; Day 49–52 ROP registration via eTraffic. Total: approximately 7–8 weeks."
      },
      {
        "q": "Do I need a customs broker in Oman?",
        "a": "While individuals can theoretically clear their own vehicles, a licensed customs broker is strongly recommended and mandatory for commercial imports. Fee: OMR 60–100 ($155–$260) per vehicle. We can connect you with recommended brokers at Sohar, Port Sultan Qaboos, and Salalah."
      },
      {
        "q": "What insurance is required for vehicle registration in Oman?",
        "a": "Third-party liability insurance is mandatory. As of February 2026, a new Unified Motor Insurance Policy took effect, introducing mandatory natural disaster cover (up to OMR 5,000 coverage). Insurance must be secured from an Omani-registered insurer before ROP registration."
      }
    ],
    "dutyCalcDescription": "Oman Customs calculates duties on the CIF value — Cost (FOB), Insurance, and Freight. The GCC Common Customs Tariff applies a flat 5% customs duty, with VAT at 5% charged on the duty-inclusive amount. EVs are fully exempt from both customs duty and VAT. The total tax burden for ICE vehicles is approximately 10.25% of CIF — one of the lowest in the GCC."
  },
  'yemen':   {
    "slug": "yemen",
    "heroTitle": "Ship vehicles from China to Yemen via sea to Aden with full ACD compliance, customs duty estimates, and documentation support.",
    "heroDesc": "Yemen's automotive market is served primarily through the Port of Aden — the country's most stable and commercially active entry point — with container and Ro-Ro shipments from Shanghai and Guangzhou in 28–40 days. Customs duty ranges from 5–25% of CIF depending on vehicle HS classification (typically 15–20% for passenger cars), with 15% GST applied on the duty-paid value. Since January 2025, the ACD (Advanced Cargo Declaration) is mandatory for all containerized shipments to Yemen — your ACD number must appear on the Bill of Lading before the vessel departs. Whether you are a licensed dealer in Aden or an individual buyer, Cargration handles sourcing, documentation, ACD compliance, and logistics so your vehicles clear Yemeni customs without delays.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 800,
        "label": "Cars to Yemen"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Yemen Routes Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 88,
        "label": "Yemen Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 35,
        "label": "Days Transit (Sea)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total import cost for a vehicle in Yemen?",
        "a": "Customs duty 5–25% of CIF + 15% GST on duty-paid value. Total estimated: 20–45% of CIF. Example: $15,000 CIF vehicle with 15% duty = $2,250 duty + $2,588 GST = $4,838 total (~32% of CIF). For a larger vehicle at 25% duty: $3,750 duty + $2,813 GST = $6,563 total (~44% of CIF). Excludes ACD fees, port handling, and customs service fees which add approximately $200–500 depending on port and value."
      },
      {
        "q": "What is the age limit for importing a used car to Yemen?",
        "a": "Maximum 4–5 years from the manufacturing year. For 2026, target vehicles manufactured in 2022 or newer. Best practice: import vehicles no older than 3–4 years for optimal clearance. The age is verified through the Certificate of Manufacturing, which must show the exact date of manufacture. The Certificate of Manufacturing is a critical document — without it, Yemen Customs may refuse clearance or assess a higher duty rate. Used vehicles within the age limit face the same duty structure as new vehicles (5–25% + 15% GST), so there is no duty advantage to importing newer versus older vehicles within the permitted age range."
      },
      {
        "q": "What is ACD and why is it important?",
        "a": "ACD stands for Advanced Cargo Declaration — a mandatory pre-arrival cargo reporting requirement for all containerized shipments destined to Yemeni ports, effective January 1, 2025. The ACD number must appear on the Bill of Lading before the vessel departs from the loading port. Without a valid ACD number, the shipment will be rejected at the Yemeni port and may be returned to origin or held at significant cost. The shipper or freight forwarder is responsible for obtaining the ACD number through the Yemen Customs advanced cargo information system. The declaration requires detailed shipment information including: shipper and consignee details, complete cargo description including HS codes, container numbers and seal numbers, vessel name and voyage number, and estimated arrival date. ACD processing typically takes 2–3 business days. We coordinate with our freight forwarding partners to ensure ACD compliance for every shipment before the vessel sails."
      },
      {
        "q": "Can I import an electric vehicle to Yemen?",
        "a": "Technically yes, but EV adoption in Yemen is extremely limited and impractical. No EV-specific incentives or duty exemptions exist — standard duty (5–25%) + GST (15%) apply. The fundamental challenge is infrastructure: there is essentially no public EV charging infrastructure anywhere in Yemen. Electricity supply is unreliable even in major cities like Aden and Mukalla, and private generator charging is costly and impractical. The ongoing political instability means infrastructure investment is unlikely in the foreseeable future. Chinese BYD and MG EVs are entering the market very slowly, primarily through development programs rather than commercial channels. Practical considerations strongly favour ICE vehicles for the Yemeni market. If you are considering importing an EV, confirm with end users that they have reliable charging arrangements before proceeding."
      },
      {
        "q": "What is the safest port for vehicle imports?",
        "a": "The Port of Aden (southern Yemen, IRG-controlled) is the most stable and commercially active entry point for vehicle imports. Aden supports both container and Ro-Ro shipping with regular weekly services from Shanghai and Guangzhou. Pre-clearance is required via Coalition Headquarters in Riyadh. We strongly advise against using the Port of Hodeidah (northern Yemen, Houthi-controlled) for commercial shipments due to: ongoing conflict and security risks, separate regulatory requirements under Houthi administration, higher insurance premiums, increased risk of delays and extra costs, and limited and unpredictable vessel scheduling. Mukalla serves as a secondary option for eastern region deliveries with more limited capacity. As of mid-2026, the Iran-Israel-US conflict has added further instability to Red Sea shipping routes. War risk insurance is essential for all Yemen-bound shipments regardless of port."
      },
      {
        "q": "What certifications are needed before shipping?",
        "a": "Three critical certifications must be arranged before shipping: 1) Certificate of Origin — must be legalized by the Chinese Chamber of Commerce AND the Yemen Embassy or Consulate in China. This is a two-step process that takes approximately 7–10 days. The Chamber of Commerce certifies the origin, then the Yemen diplomatic mission legalizes the Chamber's signature. 2) Certificate of Manufacturing — issued by the vehicle manufacturer or authorized dealer, showing the exact date of manufacture. This is critical for proving the vehicle is within the 4–5 year age limit. Without it, Yemen Customs may reject clearance or assess penalties. 3) Radiation certificate — required for containerized shipments to verify that the vehicle and its components meet radiation safety standards. For commercial shipments, additional certifications may include the import license, Tax Card, and company registration documents. We manage the first two certifications as part of our documentation service."
      },
      {
        "q": "Can I register a right-hand drive vehicle in Yemen?",
        "a": "No. Yemen requires all imported vehicles to be left-hand drive (LHD). Right-hand drive (RHD) vehicles cannot be registered or operated on Yemeni roads. This is consistent with most countries in the Arabian Peninsula that drive on the right side of the road. All Chinese domestic market vehicles are LHD as standard — this is one reason Chinese exports are well-suited to the Yemeni market. Before purchasing a vehicle for Yemen, verify that it is factory-built as LHD. Converting an RHD vehicle to LHD is not permitted and would not pass Yemen Customs inspection. All vehicles we source for Yemen are standard LHD configuration."
      },
      {
        "q": "What Chinese brands are most popular in Yemen?",
        "a": "MG (SAIC Motor) is the best-selling Chinese brand in Yemen with approximately 18% market share among Chinese imports. Toyota dominates the overall Yemeni market with roughly 89% market share, but Chinese brands are growing by competing aggressively on price. The leading Chinese brands in Yemen are: MG — best-selling Chinese brand, led by the MG ZS compact SUV; Haval (Great Wall Motors) — strong reputation for durability with the H6 mid-size SUV; Changan — well-established in the Middle East, popular for the CS35 Plus in the budget segment; and Chery — growing presence with the Tiggo 7 Pro, recognised for long-standing Middle East operations. Yemeni buyers typically prioritize in this order: price competitiveness vs Japanese alternatives, ground clearance and suspension durability for unpaved roads, air conditioning performance in extreme heat (50°C+ summer temperatures), fuel efficiency given high local fuel costs, and availability of spare parts and after-sales service in Aden."
      },
      {
        "q": "Do I need a customs broker in Yemen?",
        "a": "Yes, a licensed Yemeni customs broker is strongly recommended for all vehicle imports — and is mandatory for commercial shipments. A customs broker handles: filing the Yemen Customs declaration (electronic submission via Yemen Customs ASYCUDA system), duty calculation and payment to Yemen Customs, port clearance coordination with Aden/Mukalla port authorities, obtaining the pre-clearance approval from Coalition HQ, coordinating with shipping agents for container release, and arranging vehicle release and transport from the port. Customs clearance timeline in Yemen: typically 7–14 days for Aden under normal conditions, but can extend to 30+ days depending on port congestion, security conditions, and documentation completeness. Clearance in Mukalla may take longer due to limited port capacity. Brokerage fees in Yemen typically range from $200–500 depending on vehicle value and complexity. We can connect you with recommended licensed customs brokers in Aden and Mukalla who specialize in vehicle imports."
      },
      {
        "q": "What is the timeline from order to delivery in Aden?",
        "a": "Day 1–3 — vehicle selection and deposit; Day 4–10 — vehicle procurement and inspection at our facilities; Day 11–20 — documentation preparation including Certificate of Origin legalization (7–10 days for Chamber + Yemen Embassy), Certificate of Manufacturing, ACD application (2–3 days), commercial invoice, packing list; Day 21–55 — sea transit from Shanghai/Guangzhou to Aden (28–40 days); Day 56–65 — customs clearance at Aden (7–14 days depending on conditions); Day 66 — vehicle ready for pickup. Total timeline: approximately 9–10 weeks. For Mukalla deliveries, add approximately 5–7 days for the longer sea transit. For urgent orders, we can expedite the documentation phase to reduce the pre-shipping timeline to approximately 7 days (excluding Certificate of Origin legalization, which has a fixed processing time at the Yemen Embassy). Using a customs broker who pre-files documentation can reduce clearance time at Aden by 3–5 days."
      },
      {
        "q": "How does the conflict affect vehicle imports?",
        "a": "The ongoing conflict in Yemen significantly affects vehicle imports in several ways. Shipping risks: Houthi attacks on Red Sea shipping continue, with increased risk since the Iran-Israel-US conflict escalation in February 2026. War risk insurance is essential — typically 0.3–0.5% of cargo value. Recommended routing: Aden (southern ports under IRG control) with Coalition HQ pre-clearance. Avoid Hodeidah (northern port under Houthi control). The dual-government situation means separate customs regimes in north and south — since April 2026, vehicles with connected features may need separate MTIT type approval from both Sana'a and Aden. Port operations in Aden have remained relatively stable, but delays can occur during security incidents. Container shipping rates to Yemen are 30–50% higher than to stable Middle Eastern ports like Jebel Ali due to war risk premiums. Despite these challenges, vehicle imports continue through Aden as the primary gateway, and we have established logistics and insurance arrangements specifically for this route."
      },
      {
        "q": "What is the dual MTIT certification requirement?",
        "a": "Since April 2026, vehicles equipped with embedded radio frequency or telecommunications equipment — including GPS trackers, connected car features, telematics units, satellite navigation systems, and wireless communication modules — may require type approval from two separate regulatory bodies in Yemen: MTIT Sana'a (Ministry of Telecommunications and Information Technology — Houthi-controlled north) and MTIT Aden (IRG-controlled south). This dual requirement arose from the political division between the northern and southern administrations. Under the divided government, each authority issues its own type approval certificate, and vehicles entering through southern ports (Aden/Mukalla) primarily need MTIT Aden approval. Practical impact: modern connected vehicles with factory-fitted telematics, eCall systems, or GPS tracking may need dual certification. Vehicles without such equipment (basic trims) are unaffected. We advise checking the vehicle's equipment list before purchase and, if needed, arranging MTIT Aden certification as part of the pre-clearance process."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles destined for Yemen?",
        "a": "Yes. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Yemeni buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and provide airport transfers from Beijing Capital International Airport. Many Aden and Mukalla-based dealers visit before placing volume orders — particularly to verify ACD documentation readiness, confirm LHD configuration, and ensure vehicle specifications match Yemeni road conditions. Virtual inspections via video call are also available if travel from Yemen is not feasible given the current security situation and travel advisories. We also offer third-party inspection services through SGS, Bureau Veritas, or TÜV Rheinland in China for buyers who cannot travel."
      },
      {
        "q": "What warranty do you offer on vehicles exported to Yemen?",
        "a": "New vehicles sourced from manufacturer-authorised Chinese dealers carry the factory warranty where applicable. For Chinese brands with established dealer networks in Yemen (MG, Haval, Changan), factory warranties may be honoured through their local dealer partners in Aden. For used vehicles, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at additional cost. All warranty terms are documented in the sales agreement before payment. Given the complexity of warranty service in Yemen's divided market, we recommend verifying local warranty support with the brand's Yemeni distributor before purchase — particularly for MG and Haval which have more established presence in Aden. For brands without Yemeni dealer networks, warranty service may require parts shipment from China or neighbouring UAE (Dubai/Jebel Ali is a common transshipment hub for Yemeni automotive parts)."
      },
      {
        "q": "What happens if the vehicle is damaged during transit?",
        "a": "All vehicles are fully insured from the moment they leave our facilities in Beijing and Guizhou until arrival at the destination port in Yemen — Aden or Mukalla. Our comprehensive policy covers sea transit including the high-risk Gulf of Aden and Red Sea transit, war risk (essential for Yemen routes), port handling at both origin and destination, and any transshipment or container yard storage. In the event of damage, you file a claim with our logistics team and we handle the entire insurance claims process on your behalf. We maintain a 95% damage-free delivery rate on the Yemen route. Our container loading standards — wheel chocks, frame strapping, protective wrapping — exceed standard industry practice. Photographs and video are taken before container sealing to document condition. We strongly recommend comprehensive war risk coverage for the Yemen route given the current security situation in the Red Sea and Gulf of Aden. Claims typically settle within 30–60 days depending on assessment requirements."
      }
    ]
  },
  'nigeria':   {
    "slug": "nigeria",
    "heroTitle": "Ship vehicles from China to Nigeria with full NCS duty estimates and SONCAP/VehCAP pre-shipment certification.",
    "heroDesc": "Nigeria is West Africa's largest vehicle market, served through the Port of Lagos and regional ports. The Nigeria Customs Service (NCS) applies import duties plus the NAC Levy, VAT at 7.5%, and a set of statutory surcharges. Mandatory SONCAP Product Certification and the new VehCAP vehicle conformity programme are required before shipment. Whether you are a Lagos-based dealer, a clearing agent at Tin Can Island, or an individual importer, Cargration handles sourcing, certification, Form M facilitation, and shipping so your vehicles clear NCS customs on the first attempt.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 480,
        "label": "Cars to Nigeria"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 3,
        "label": "Nigerian Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 91,
        "label": "Nigeria Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 35,
        "label": "Days Transit (Sea)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Nigeria?",
        "a": "Total taxes typically range from 28% to 45% of CIF value depending on vehicle age, engine size, and fuel type. The full stack includes: Import Duty at 10% of CIF; NAC (National Automotive Council) Levy at 5% of CIF for used vehicles; Surcharge at 7% of the Import Duty amount; ETLS (ECOWAS Trade Levy) at 0.5% of CIF; CISS (Comprehensive Import Supervision Scheme) at 1% of FOB; FCS (FOB Levy) at 4% of FOB; and VAT at 7.5% charged on CIF + Duty + NAC. Green Tax applies to ICE vehicles above 2,000cc (2% for 2,000–3,999cc, 4% for 4,000cc+). EVs are exempt from VAT and Green Tax. For a typical used petrol car with a 2,000cc engine, expect approximately 32–38% total tax burden on CIF. Note that NCS uses VIN-based assessed values which may be 20–50% above your invoice."
      },
      {
        "q": "What is the age limit for importing a used car to Nigeria?",
        "a": "Nigeria's official policy is 12 years maximum from the year of manufacture, under the ECOWAS Common External Tariff. However, effective enforcement varies by port command. Lagos ports (Apapa and Tin Can Island) apply a stricter 10-year limit in practice, while Port Harcourt, Onne, Calabar, and Warri generally follow the 12-year standard. For 2026, this means vehicles imported through Lagos should be 2016 model year or newer. Unlike Ghana, Nigeria does not offer an overage penalty pathway — vehicles exceeding the effective age limit are subject to seizure and auction by NCS. There is no grey area: if your vehicle is too old, it will be refused entry. Always verify the current enforcement policy at your intended port of entry before shipping."
      },
      {
        "q": "Can I import a Right-Hand Drive (RHD) vehicle to Nigeria?",
        "a": "No. Nigeria drives on the right-hand side of the road and NCS strictly prohibits the import of Right-Hand Drive vehicles. This is a firm rule with no exemption pathway. An RHD vehicle shipped to Lagos will be seized and auctioned regardless of its condition, value, or documentation quality. There is no legal pathway to convert an RHD vehicle to LHD and register it in Nigeria. If you are sourcing a vehicle from China, all Chinese-market vehicles are LHD by default, so this is generally not an issue. However, if you are considering a vehicle from Japan or the UK, you must verify it is LHD before purchase. FRSC (Federal Road Safety Corps) and VIO (Vehicle Inspection Officers) strictly enforce this rule at the registration stage."
      },
      {
        "q": "How does NCS calculate the customs value of my vehicle?",
        "a": "NCS does not simply use your purchase invoice. They maintain a VIN-based reference database with assessed values for all common makes and models. When you submit your import declaration, NCS enters the VIN and the system generates a reference CIF value. This reference value can be 20–50% above your actual purchase invoice. The VIN assessment considers: make, model, year of manufacture, engine size, trim level, and market depreciation. If your declared value is within an acceptable range of the reference value, your invoice is accepted. If the discrepancy is too large, NCS will apply the reference value, resulting in a higher duty bill. This is a common source of unexpected cost — buyers should budget for a potential 20–30% uplift on their expected duty calculation."
      },
      {
        "q": "What is SONCAP and why is it mandatory?",
        "a": "SONCAP (Standards Organisation of Nigeria Conformity Assessment Programme) is a mandatory certification scheme for all goods imported into Nigeria, including vehicles. It is a two-stage process. Stage 1: the exporter obtains a Product Certificate (PC) from a SON-accredited agency in China. There are three PC types: PC1 (unregistered, $500, valid for 1 shipment), PC2 (registered, $1,000, valid for 1 year with 40% shipment inspection), and PC3 (licensed, $2,000, valid for 1 year, requires factory audit). Stage 2: the importer obtains a SONCAP Certificate (SC) per shipment, which is used to obtain the PAAR for customs clearance. The SC is typically issued within 1 business day of document submission. From March 2026, the new VehCAP programme also requires a separate vehicle-specific conformity assessment before Form M can be approved."
      },
      {
        "q": "What is Form M and how do I open one?",
        "a": "Form M is the mandatory import declaration form required by NCS for all imports into Nigeria. It must be opened and approved BEFORE the vessel departs from China — this is a critical timing rule. The process is: register on the Nigeria Single Window Trade Portal (trade.gov.ng); approach an Authorised Dealer Bank (ADB) — typically First Bank, Zenith, UBA, GTBank, or Access Bank; submit the Proforma Invoice from your Chinese supplier, Insurance Certificate, and SONCAP Product Certificate; the bank validates the documents and transmits the Form M to NCS; NCS reviews and approves the Form M. Once approved, you obtain the PAAR (Pre-Arrival Assessment Report) which contains the duty assessment. Form M is valid for 180 days and is extendable once by 180 days. A clearing agent typically handles the Form M process on your behalf."
      },
      {
        "q": "What is the B'Odogwu system?",
        "a": "B'Odogwu is NCS's new digital customs platform that is gradually replacing the legacy NICIS II system. It is designed to streamline import and export procedures through a single digital window. For importers, B'Odogwu handles: electronic Form M application and tracking, document submission and verification, duty assessment and payment, PAAR generation, and customs release processing. NCS has confirmed that Form M migration from NICIS II to B'Odogwu is free of charge. The platform aims to reduce processing time and improve transparency in customs clearance. All licensed clearing agents in Nigeria must be registered on the B'Odogwu platform. As an importer, your clearing agent will manage the B'Odogwu process on your behalf, but you should confirm they are registered and active on the system."
      },
      {
        "q": "What Chinese brands are most popular in Nigeria?",
        "a": "Chery is the leading Chinese brand in Nigeria, with the Tiggo 7 Pro and Tiggo 8 Pro being the most popular models for their combination of size, features, and aggressive pricing against Japanese alternatives like Toyota and Honda. Changan follows closely with the CS35 Plus and CS55, both well-suited to Nigerian roads. Geely has a growing presence with the Emgrand sedan, particularly popular for ride-hailing and fleet operators in Lagos. BYD is establishing itself as the EV leader with the Yuan Plus (Atto 3), benefiting from VAT exemption under the PiCNG initiative. Across all brands, Nigerian buyers prioritise: strong air conditioning systems for the tropical climate, good ground clearance for unpaved and flooded roads, fuel-efficient petrol engines, and available spare parts and service networks in Lagos, Abuja, and Port Harcourt."
      },
      {
        "q": "Can I import an electric vehicle from China to Nigeria?",
        "a": "Yes, and there are significant tax advantages. Under the Presidential PiCNG &amp; EV Initiative, pure electric vehicles (BEVs) are exempt from VAT (saving 7.5% on the taxable base) and Green Tax. Import duty and NAC Levy still apply at standard rates unless a specific duty waiver is approved through the PiCNG portal. The 12-step waiver application process requires a TIN, administrative fee, and vehicle documentation. The vehicle must still: be LHD, meet the 10–12 year age limit, have valid SONCAP and VehCAP certificates, and pass NCS inspection. Popular Chinese EV options include the BYD Yuan Plus (Atto 3), BYD Seal, and NIO ET5. Charging infrastructure is expanding in Lagos, Abuja, and Port Harcourt, with several public charging stations now operational. The proposed Electric Vehicle Transition and Green Mobility Bill (2025) is likely to introduce further incentives once enacted."
      },
      {
        "q": "What is the typical timeline from order to delivery in Lagos?",
        "a": "A typical timeline to Lagos: Day 1–3 — vehicle selection and deposit; Day 4–10 — vehicle procurement and inspection; Day 11–18 — documentation preparation (SONCAP PC, VehCAP inspection, Form M application, commercial invoice, CO, export declaration); Day 19 — container loading at Chinese port; Day 20–52 — sea transit to Lagos (25–35 days) plus port handling; Day 53–65 — customs clearance through B'Odogwu (typically 7–12 business days with a licensed agent, longer for vehicles requiring VIN reference value challenge); Day 66 — vehicle ready for pickup at Lagos terminal. Total: approximately 9–10 weeks from order to delivery. Direct sailings from Shanghai to Apapa are the fastest route. Using RoRo instead of container can reduce shipping costs but port handling in Lagos may take longer. Allow extra time for Form M processing and SONCAP certification."
      },
      {
        "q": "Do I need a clearing agent in Nigeria?",
        "a": "Yes, a licensed customs clearing agent is required for all commercial vehicle imports into Nigeria, and is strongly recommended for individual imports. The clearing agent handles: opening the Form M through an Authorised Dealer Bank, registering on the B'Odogwu platform and submitting all declarations, calculating and paying all duties and taxes via the NCS payment system, coordinating SONCAP and VehCAP certificate verification at the port, managing the physical inspection process with NCS officers, challenging VIN reference values if they are unreasonably high, and handling the release process and vehicle collection from the terminal. A clearing agent typically charges ₦300,000–₦800,000 (~$200–$500) depending on vehicle value and complexity. We can connect you with recommended licensed clearing agents at Lagos, Port Harcourt, and Onne who are experienced with Chinese vehicle imports."
      },
      {
        "q": "What is VehCAP and how is it different from SONCAP?",
        "a": "The SON-NADDC Vehicle Conformity Assessment Programme (VehCAP) was launched on March 31, 2026 as a mandatory pre-shipment certification specifically for vehicles. While SONCAP certifies the product type (vehicle model family), VehCAP certifies each individual vehicle's condition, safety compliance, emissions performance, and structural integrity. The key difference is: SONCAP is a general product conformity programme for all goods, while VehCAP is a vehicle-specific programme jointly administered by SON and NADDC (National Automotive Design and Development Council). VehCAP requires an authorised inspection agency in the country of export (China) to inspect each vehicle before shipment. The certification must be obtained before: Form M approval, customs valuation, forex processing, import clearance, and vehicle registration. Non-compliance results in refusal of clearance, seizure, and sanctions. \"No certification, no entry\" is the official policy."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles destined for Nigeria?",
        "a": "Absolutely. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Nigerian buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many Lagos-based dealers visit before placing bulk orders — particularly to verify the SONCAP certification process and confirm that vehicle specifications match the documentation required by NCS. Virtual inspections via video call are also available if travel is not feasible. We also offer third-party inspection services through SGS or Bureau Veritas in China for buyers who cannot travel."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Nigeria?",
        "a": "New vehicles sourced from manufacturer-authorized Chinese dealers carry the full factory warranty, which may be transferable to Nigeria for brands with an established dealer network. Chery and Changan both have authorized dealerships in Lagos with warranty service available. For used vehicles and parallel imports, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at additional cost. All warranty terms are documented in the sales agreement before payment. For Nigerian buyers, we recommend verifying warranty transferability with the brand's Nigerian distributor before purchase — particularly for EV batteries, which have separate warranty terms from the vehicle itself. Given Nigeria's road conditions, we also recommend considering an extended suspension and air conditioning warranty."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Nigeria?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival at the Nigerian port. The policy covers sea transit, port handling at both ends, and any overland transport within Nigeria. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We have maintained a 95% damage-free delivery rate on the Nigeria route. Our container loading standards — wheel chocks, frame strapping, and protective wrapping — exceed standard industry practice. For RoRo shipments, vehicles are driven directly onto the vessel and secured on dedicated vehicle decks with proper lashing. Photographs and video are taken before loading to document condition, and these are shared with you as part of the handover record. Nigeria's marine insurance market is well-developed and claims are processed through local adjusters."
      }
    ]
  },
  'algeria':   {
    "slug": "algeria",
    "heroTitle": "Ship vehicles from China to Algeria with full duty estimates and COC certification.",
    "heroDesc": "Whether you're a returning Algerian resident using the CCR scheme or a licensed importer bringing new vehicles to Algiers and Oran, Cargration handles sourcing, inspection, COC documentation, and shipping so your vehicles clear Algerian customs on the first attempt.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 860,
        "label": "Cars to Algeria"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 3,
        "label": "Algerian Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 94,
        "label": "Algerian Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 22,
        "label": "Days Transit (Sea)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a car to Algeria?",
        "a": "For a standard petrol vehicle, cumulative taxes typically range from 53% to 60% of the CIF value. This stacks as: Customs Duty (DD) at 15–30% depending on engine size, VAT (TVA) at 19% applied on (value + duty), Consumption Tax (TIC) at 0–60% based on engine displacement, and a solidarity fee of 2–3%. For Electric Vehicles, an 80% reduction on total duties and taxes drops the effective burden to roughly 5–10%. Returning residents using the CCR scheme pay a flat 5% rate up to a value cap set by the Finance Law."
      },
      {
        "q": "Can I import a diesel car to Algeria?",
        "a": "No. Diesel passenger vehicles are strictly prohibited for import into Algeria under any scheme — standard personal import, CCR returning resident, or commercial dealership. Only petrol (essence), hybrid, electric (BEV), and CNG/LPG vehicles are permitted. All internal combustion engines must meet a minimum of Euro V emissions standards. If you are considering a diesel vehicle from China, it will be denied entry at the Algerian port and you will be required to re-export it at your own expense."
      },
      {
        "q": "What is the CCR scheme and how does it work?",
        "a": "The CCR (Changement de Résidence / Change of Residence) scheme is a special customs regime for Algerians permanently returning from abroad. Instead of paying the full tax stack (53–60%), you pay a flat 5% duty on the customs value. You must have lived abroad for at least 24 consecutive months, owned the vehicle for at least 6 months, and the vehicle must be less than 5 years old. Petrol and hybrid engines are capped at 1,800cc. Diesel is excluded. The CCR benefit is a one-time privilege — if you have used it in the past 5 years, you are not eligible. The vehicle cannot be resold for a set period without repaying the tax difference. To start the process, request a CCR certificate from your local Algerian consulate before making the permanent move back."
      },
      {
        "q": "How does the engine size affect import duties?",
        "a": "Engine displacement is the single biggest factor in your tax bill. For petrol vehicles under 1,800cc, the Customs Duty is around 15% and the Consumption Tax (TIC) is 0%. For petrol vehicles 1,800cc and above, the duty jumps to around 30% and the TIC can climb as high as 60% for large engines. This means a 1.5T SUV pays significantly less tax than a 2.0T SUV with the same FOB price. The practical rule: if you are importing to Algeria, choose a model with an engine under 1.8L — the tax savings typically outweigh any difference in vehicle price."
      },
      {
        "q": "What is the Certificate of Conformity and why is it mandatory?",
        "a": "The Certificate of Conformity (COC) is the single most important document for Algerian customs clearance. It certifies that your vehicle meets the technical, safety, and environmental standards required by the Algerian Institute of Standardization (IANOR). The COC must be issued by an authorized global testing body — SGS, Bureau Veritas, or Intertek — before the vessel departs China. Without a valid COC, your vehicle will be held at the Algerian port and cannot clear customs under any import scheme (CCR, standard, or commercial). Cargration arranges the COC as part of our standard export documentation package, using our established relationships with all three authorized certifying bodies."
      },
      {
        "q": "What is the ECTN and when do I need it?",
        "a": "The Electronic Cargo Tracking Note (ECTN), also called the Bordereau de Suivi Cargaison (BSC), is a mandatory maritime tracking certificate required by Algerian law for all sea freight shipments. It must be issued, validated, and digitally linked to your Bill of Lading before the vessel departs the port of loading in China. Cargo arriving at Algiers or Oran without a pre-validated ECTN will be denied customs clearance. Cargration handles the ECTN registration as part of our standard shipping process — we submit the required data (vessel name, container numbers, cargo details, consignee information) and ensure the ECTN certificate is issued and attached to your shipping documents before the vessel sails."
      },
      {
        "q": "Can I import an electric vehicle from China to Algeria?",
        "a": "Yes, and it is the most tax-efficient option available. Fully electric vehicles benefit from an 80% reduction on total import duties and taxes under the under-3-year relief scheme. This drops the effective tax burden from ~53–60% down to roughly 5–10% of the CIF value. Algeria actively encourages EV imports as part of its energy transition policy. Popular Chinese EV models for Algeria include the BYD Seal, BYD Atto 3, Chery iCar 03, and NIO ET5. Hybrid vehicles also receive favourable treatment — they qualify for the ≤1.8L duty band and the under-3-year relief applies. Note: if importing under the CCR scheme, the EV does not have the same 1,800cc cap since electric motors are not measured by displacement, making EVs particularly attractive for CCR imports."
      },
      {
        "q": "What happens if customs value my car higher than my purchase price?",
        "a": "Algerian Customs maintains an internal reference database known as the Argus Value. If the declared purchase price on your commercial invoice is lower than the official Argus reference value for that specific make, model, year, and trim, customs will calculate your duties based on the higher Argus value — not your actual purchase price. This is a common surprise for importers who negotiate a good deal in China, only to find their tax bill is based on a higher reference price. To avoid this, check the Argus reference value for your target model before shipping. We provide Argus value estimates for the models we source, helping you calculate the realistic tax bill before you commit to a purchase."
      },
      {
        "q": "Can I sell my imported car within the first 3 years?",
        "a": "Yes, but with penalty clawbacks. Under the 2025 Finance Law updates, the previous outright 3-year resale ban was replaced with a sliding penalty system. If you sell within 12 months of customs clearance: you must repay 100% of the tax incentives you received. Between 12 and 24 months: 66% repayment. Between 24 and 36 months: 33% repayment. After 36 months: no penalty, you can sell freely. For CCR-imported vehicles, the penalty applies to the difference between the 5% flat rate and the full tax stack. This resale restriction is flagged in the vehicle registration system with an \"interdiction de cession\" stamp on the documents."
      },
      {
        "q": "What Chinese brands are most popular in Algeria?",
        "a": "Chery is the dominant Chinese brand in Algeria, with the Tiggo 7, Tiggo 8, and Arrizo models consistently ranking as top sellers. Changan follows closely with the CS35, CS55, and UNI-V being popular choices for their value and build quality. BYD is the fastest-growing brand due to the strong tax incentives for hybrids and EVs — the Song Plus DM-i (hybrid) and Seal EV are particularly attractive. GAC and Geely are also present in the Algerian market. Across all brands, the key considerations for the Algerian market are: petrol engines under 1.8L (for lower duty bands), robust suspension for road conditions, strong air conditioning systems, and ground clearance for rural areas."
      },
      {
        "q": "Do I need a customs broker in Algeria?",
        "a": "Strongly recommended. While it is legally possible to handle customs clearance yourself, the administrative complexity — Argus valuation checks, COC verification, ECTN matching, duty calculation, tax payment, and physical inspection — makes a licensed customs broker (transitaire) essential for a smooth process. A broker typically charges €400–€900 depending on the vehicle value and port. They will: submit your file to customs, pay duties on your behalf, coordinate the mandatory technical inspection at an ENACTA-approved centre, and monitor the release process. We can connect you with recommended brokers at Algiers Port and Oran Port who are familiar with Chinese vehicle imports and our documentation format."
      },
      {
        "q": "What is the typical timeline from order to delivery in Algiers?",
        "a": "A typical Algeria timeline: Day 1–3 — vehicle selection and deposit; Day 4–8 — vehicle procurement and 200-point inspection with photo/video report; Day 9–14 — documentation preparation (COC from SGS/BV/Intertek, commercial invoice, packing list, CO, ECTN registration, export declaration); Day 15 — container loading at port; Day 16–37 — sea transit to Algiers (22–30 days) plus port handling; Day 38–45 — customs clearance (3–7 business days with a broker); Day 46 — vehicle ready for pickup at Algiers terminal. Total: approximately 6–7 weeks from order to delivery. Using the RoRo method instead of container can reduce shipping costs but transit time is similar."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles for Algeria?",
        "a": "Absolutely. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Algerian buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many Algerian dealers and returning residents visit before placing bulk orders — particularly to verify the COC documentation process and confirm that the \"Made in China\" markings and vehicle specifications match Algerian customs requirements."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Algeria?",
        "a": "New vehicles sourced from manufacturer-authorized dealers carry the full factory warranty, which is valid in Algeria for brands with an official dealer network (Chery, Changan, BYD, GAC all have established dealerships in Algeria). For used vehicles and parallel imports, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at an additional cost. All warranty terms are documented in the sales agreement before payment. We recommend verifying warranty transferability with the brand's Algerian distributor before purchase if factory warranty coverage is important to you."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Algeria?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival at the Algerian port. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We have maintained a 98.7% damage-free delivery rate to Algerian ports. Our container loading standards — wheel chocks, frame strapping, protective wrapping — exceed standard industry practice. For RoRo shipments, vehicles are driven directly onto the vessel and secured on dedicated vehicle decks with proper lashing. Photographs are taken before loading to document condition, and these are shared with you as part of the handover record."
      }
    ]
  },
  'ghana':   {
    "slug": "ghana",
    "heroTitle": "Ship vehicles from China to Ghana with full ECOWAS duty estimates and G-CAP pre-shipment inspection.",
    "heroDesc": "Ghana applies the ECOWAS Common External Tariff with engine-size-based duty bands, a 10-year age limit enforced through overage penalties, and mandatory G-CAP pre-shipment inspection. Whether you are an Accra-based dealer, a Tema clearing agent, or an individual importer, Cargration handles sourcing, inspection, ICUMS documentation, and shipping so your vehicles clear GRA customs on the first attempt.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 520,
        "label": "Cars to Ghana"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Ghanaian Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 93,
        "label": "Ghana Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 30,
        "label": "Days Transit (Sea)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Ghana?",
        "a": "Total taxes typically range from 25% to 50% of CIF value depending on engine size, age, and fuel type. The full stack includes: Import Duty (ECOWAS CET) at 5–20% based on engine displacement; VAT at 15% (charged on CIF + duty + all levies); NHIL (National Health Insurance Levy) at 2.5%; GETFund Levy at 2.5%; EXIM Levy at 0.75%; Special Import Levy at 2%; AU Levy at 0.2%; ECOWAS Levy at 0.5%; and Examination Fee at 1%. Electric vehicles (BEVs) benefit from 0% import duty, reducing the total to approximately 20–25% of CIF. Overage penalties add 5–100% on CIF for vehicles older than 10 years. For a typical used petrol car under 10 years with a 1,500–2,000cc engine, expect approximately 35–42% total tax burden on CIF."
      },
      {
        "q": "What is the age limit for importing a used car to Ghana?",
        "a": "Ghana enforces a 10-year maximum age limit for used vehicle imports, calculated from the year of manufacture — not the date of first registration. For vehicles arriving in 2026, this means the car must be a 2016 model year or newer to qualify for standard duty without overage penalties. A vehicle built in late 2015 but first registered in 2016 is treated as a 2015 model year by GRA and will incur penalties if imported in 2026. Vehicles that exceed the 10-year limit are not automatically refused; instead, they face tiered overage penalties (5–100% of CIF depending on how far they exceed the limit). However, the economics become prohibitive beyond 15 years, with total tax often exceeding the vehicle's value."
      },
      {
        "q": "What is the G-CAP programme and why is it mandatory?",
        "a": "The Ghana Conformity Assessment Programme (G-CAP) is a mandatory pre-shipment inspection requirement for all vehicles imported into Ghana. An approved inspection agency — currently Bureau Veritas, SGS, and Intertek — must inspect the vehicle in the country of origin before the vessel departs. The inspection verifies: the vehicle's age and compliance with the 10-year limit, general condition and roadworthiness, conformity to Ghanaian technical standards (LHD, emissions), VIN and chassis number verification against title documents, and checks for theft or encumbrances. The G-CAP certificate is valid for approximately 90 days from the date of issue. A vehicle that arrives at Tema without a valid G-CAP certificate cannot complete the import process. Cargration arranges G-CAP inspection as part of our standard documentation package."
      },
      {
        "q": "Can I import a Right-Hand Drive (RHD) vehicle to Ghana?",
        "a": "No. Ghana drives on the right-hand side of the road and GRA strictly prohibits the import of Right-Hand Drive vehicles. This is a firm rule with no practical exemption pathway for standard imports. An RHD vehicle shipped to Tema will be refused entry regardless of its condition, value, or documentation quality. There is no legal pathway to convert an RHD vehicle to LHD and have it registered in Ghana. If you are sourcing a vehicle from China, all Chinese-market vehicles are LHD by default, so this is generally not an issue. However, if you are considering a vehicle from Japan, the UK, or Thailand, you must verify it is LHD before purchase. GRA also enforces that the steering wheel must be on the left side as originally manufactured — conversions are not accepted."
      },
      {
        "q": "How does GRA calculate the customs value of my vehicle?",
        "a": "GRA does not simply use your purchase invoice. Instead, they apply a depreciation schedule to the original Manufacturer's Suggested Retail Price (MSRP) to arrive at the customs value: less than 6 months old: 0% depreciation (full MSRP); 6 months to 1.5 years: 15% depreciation; 1.5 to 2.5 years: 30% depreciation; 2.5 to 5 years: 40% depreciation; over 5 years: 50% depreciation (maximum). The depreciated value plus freight and insurance becomes the CIF value. GRA may also apply a reference or benchmark value if the declared purchase price appears significantly below market value for a given model and year. The CCVR (Classification and Valuation Report) issued through ICUMS shows the exact CIF value and duty calculation for your specific vehicle."
      },
      {
        "q": "What is ICUMS and how does it affect my import?",
        "a": "The Integrated Customs Management System (ICUMS) is Ghana's electronic single-window platform for all customs declarations. Every vehicle imported into Ghana must be declared through ICUMS, which handles: electronic submission of import declarations, vehicle classification and duty assessment (issuing the CCVR), payment of all duties, taxes, and levies, tracking of clearance status, and generation of release notes. ICUMS replaced the old GCMS system and is now the mandatory platform for all GRA customs transactions. Importers must register on the ICUMS portal and obtain user credentials. Licensed customs house agents typically manage the ICUMS process on behalf of importers. Cargration ensures our documentation is compatible with ICUMS requirements to prevent processing delays."
      },
      {
        "q": "Can I import an electric vehicle from China to Ghana?",
        "a": "Yes, and it is financially advantageous to do so. As of 2026, pure electric vehicles (BEVs) qualify for 0% import duty under Ghana's green vehicle incentive. This is a significant saving — while a comparable petrol vehicle with a 1,500–2,000cc engine would attract 10% import duty, the EV pays nothing. However, EVs are still subject to VAT (15%), NHIL (2.5%), GETFund (2.5%), and other statutory levies, bringing the total tax burden to approximately 20–25% of CIF (versus 35–42% for a petrol equivalent). The vehicle must still: be LHD, meet the 10-year age limit, have a valid G-CAP certificate, and pass GRA inspection. Popular Chinese EV options include the BYD Yuan Plus (Atto 3), BYD Seal, and NIO ET5. Charging infrastructure is expanding in Accra and Tema, with several public charging stations now operational."
      },
      {
        "q": "What are the overage penalties for vehicles older than 10 years?",
        "a": "GRA applies tiered overage penalties on the CIF value for vehicles exceeding 10 years from the year of manufacture. The penalty is applied on top of all standard duties and taxes: 10 to 12 years: 5% penalty; 12 to 15 years: 20% penalty; 15 to 25 years: 50% penalty; 25 to 35 years: 70% penalty; over 35 years: 100% penalty. These penalties stack with the standard duty burden. For example, a 14-year-old vehicle with a 10% duty rate and a 20% overage penalty would face: 10% duty + 20% penalty on CIF, plus VAT and all levies on the combined total. The effective total tax can exceed 80–100% of CIF for vehicles in the 15–25 year band. Only collector or historically significant vehicles tend to justify such a heavy tax burden."
      },
      {
        "q": "Do I need a customs house agent in Ghana?",
        "a": "Yes, a licensed customs house agent (clearing agent) is required for all commercial vehicle imports into Ghana, and is strongly recommended for individual imports. The customs house agent handles: registering the import declaration in the ICUMS system, calculating and paying all duties and taxes via the GRA payment platform, coordinating the G-CAP certificate verification at the port, managing the physical inspection process with GRA officers, and handling the release process and vehicle collection from the Tema port terminal. A clearing agent typically charges GHS 2,000–5,000 (~$160–$400) depending on vehicle value and complexity. We can connect you with recommended licensed customs house agents at the Port of Tema who are experienced with Chinese vehicle imports and our documentation format."
      },
      {
        "q": "What Chinese brands are most popular in Ghana?",
        "a": "Chery is the leading Chinese brand in Ghana, with the Tiggo 7 Pro and Tiggo 8 being the most popular models for their combination of size, features, and aggressive pricing against Japanese alternatives like Toyota and Honda. Changan follows closely with the CS35 Plus and CS55, both well-suited to Ghanaian roads. Geely has a growing presence with the Emgrand sedan, particularly popular for ride-hailing and fleet operators in Accra. BYD is establishing itself as the EV leader with the Yuan Plus (Atto 3), benefiting from the 0% import duty incentive. Across all brands, Ghanaian buyers prioritize: strong air conditioning systems for the tropical climate, good ground clearance for unpaved roads, fuel-efficient petrol engines, and available spare parts and service networks in Accra, Kumasi, and Tema."
      },
      {
        "q": "What is the typical timeline from order to delivery in Tema?",
        "a": "A typical timeline to Ghana: Day 1–3 — vehicle selection and deposit; Day 4–8 — vehicle procurement and inspection; Day 9–14 — documentation preparation (G-CAP inspection, commercial invoice, CO, export declaration); Day 15 — container loading at Chinese port; Day 16–45 — sea transit to Tema (25–35 days) plus port handling; Day 46–52 — customs clearance through ICUMS (5–7 business days with a licensed agent); Day 53 — vehicle ready for pickup at Tema terminal. Total: approximately 7–8 weeks from order to delivery. Direct sailings from Guangzhou to Tema are the fastest route. Using RoRo instead of container can reduce shipping costs but port handling in Tema may take slightly longer for RoRo vs. containerized cargo."
      },
      {
        "q": "What documents are required for importing a vehicle to Ghana?",
        "a": "Key documents required for GRA customs clearance: From the seller/exporter: Commercial invoice with full vehicle specs (VIN, make, model, year, engine), Packing list with dimensions and weight, Certificate of Origin (CO) — 2 certified copies, Bill of Lading (B/L), G-CAP Conformity Assessment Certificate from an approved agency, Original title or registration document from country of origin, and Export Certificate from the exporter. From the importer: Valid Tax Identification Number (TIN), ICUMS registration and user credentials, Purchase invoice (original), Passport or Ghana Card (individual) / Certificate of Incorporation (company), and Insurance certificate valid in Ghana. Cargration prepares all Chinese-side documentation to meet ICUMS data requirements. All documents must be in English or accompanied by a certified translation."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles destined for Ghana?",
        "a": "Absolutely. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Ghanaian buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many Accra-based dealers visit before placing bulk orders — particularly to verify the G-CAP inspection process and confirm that vehicle specifications match the documentation required by GRA. Virtual inspections via video call are also available if travel is not feasible. We also offer third-party inspection services through SGS or Bureau Veritas in China for buyers who cannot travel."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Ghana?",
        "a": "New vehicles sourced from manufacturer-authorized Chinese dealers carry the full factory warranty, which may be transferable to Ghana for brands with an established dealer network. Chery and Changan both have authorized dealerships in Accra with warranty service available. For used vehicles and parallel imports, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at additional cost. All warranty terms are documented in the sales agreement before payment. For Ghanaian buyers, we recommend verifying warranty transferability with the brand's Ghanaian distributor before purchase — particularly for EV batteries, which have separate warranty terms from the vehicle itself."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Ghana?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival at the Port of Tema. The policy covers sea transit, port handling at both ends, and any overland transport within Ghana. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We have maintained a 96% damage-free delivery rate on the Ghana route. Our container loading standards — wheel chocks, frame strapping, and protective wrapping — exceed standard industry practice. For RoRo shipments, vehicles are driven directly onto the vessel and secured on dedicated vehicle decks with proper lashing. Photographs and video are taken before loading to document condition, and these are shared with you as part of the handover record. Ghana's marine insurance market is well-developed and claims are processed through local adjusters."
      }
    ]
  },
  'cote-d-ivoire':   {
    "slug": "cote-d-ivoire",
    "heroTitle": "Ship vehicles from China to Côte d'Ivoire with full ECOWAS duty estimates and pre-shipment inspection.",
    "heroDesc": "Côte d'Ivoire applies the ECOWAS Common External Tariff with strict 5-year age limits on used passenger vehicles. Whether you are an Abidjan-based dealer, an individual importer, or an expatriate relocating under the Transfer of Residence scheme, Cargration handles sourcing, pre-shipment inspection, ECTN registration, and shipping so your vehicles clear Ivorian customs on the first attempt.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 680,
        "label": "Cars to Côte d'Ivoire"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Ivorian Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 95,
        "label": "Ivorian Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 28,
        "label": "Days Transit (Sea)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Côte d'Ivoire?",
        "a": "Total taxes typically range from 35% to 53% of the CIF value depending on the vehicle type, age, and classification. The full stack includes: ECOWAS Common External Tariff (TEC) at 5–35% depending on vehicle category (used passenger cars: 35%, new passenger cars: 20%, utility vehicles: 5%); VAT (TVA) at 18% calculated on CIF + duties + levies; Statistical Duty at 1% of CIF; ECOWAS Community Levy at 0.5% of CIF; Community Solidarity Levy at 0.8% of CIF; African Union Import Tax at 0.2% of CIF; Additional Tax on Imports at 2.6%; and a Processing Fee (Redevance) at 1% of CIF. For a typical used passenger car, these combined taxes can reach approximately 50–53% of the CIF value."
      },
      {
        "q": "What is the age limit for importing a used car to Côte d'Ivoire?",
        "a": "Passenger vehicles (voitures de tourisme) and taxis must be no more than 5 years old from their first registration date to the date of arrival in Côte d'Ivoire. The age is calculated from the date of first registration abroad, not from the manufacture date. For minibuses (9–34 seats) and trucks up to 5 tonnes, the limit is 7 years. For buses over 34 seats and trucks over 5 tonnes, the limit is 10 years. These limits are strictly enforced under Decree 2017-792 since July 1, 2018. Violating the age limit results in a 2,000,000 XOF fine (~$3,300), denial of registration, and mandatory re-export or destruction at the owner's expense. Diplomats and returning Ivorian residents may qualify for exemptions."
      },
      {
        "q": "What is the Pre-Shipment Inspection and why is it mandatory?",
        "a": "The Pre-Shipment Inspection (PSI) is a mandatory requirement for all vehicles imported into Côte d'Ivoire. An approved inspection agency — typically BIVAC International, SGS, or Bureau Veritas — must inspect the vehicle in the country of origin before the vessel departs. The inspection verifies: the vehicle's age and compliance with the 5-year limit, its general condition and roadworthiness, conformity to Ivorian technical standards (LHD, emissions), the VIN and chassis number against the title documents, and checks for theft or encumbrances. The PSI certificate is a mandatory document for customs clearance in Abidjan. Cargration arranges the PSI as part of our standard documentation package."
      },
      {
        "q": "Can I import a Right-Hand Drive (RHD) vehicle to Côte d'Ivoire?",
        "a": "No. Côte d'Ivoire drives on the right-hand side of the road and requires all vehicles to be Left-Hand Drive (LHD). Right-Hand Drive vehicles are strictly prohibited for permanent import and cannot be registered for road use in Côte d'Ivoire. There is no legal pathway to convert an RHD vehicle to LHD and have it registered. This rule is strictly enforced by the Direction Générale des Douanes. If you are sourcing a vehicle for the Ivorian market from China, all Chinese-market vehicles are LHD by default, so this is generally not an issue — but you must verify that any vehicle sourced from another market (e.g., Japan, UK, Thailand) is LHD."
      },
      {
        "q": "What is the ECTN and when do I need it for Côte d'Ivoire?",
        "a": "The Electronic Cargo Tracking Note (ECTN), also called the Bordereau de Suivi Cargaison (BSC), is a mandatory maritime tracking certificate required by Ivorian law for all sea freight shipments to Côte d'Ivoire. It must be issued, validated, and digitally linked to your Bill of Lading before the vessel departs the port of loading in China. The ECTN contains: vessel and voyage details, container numbers and seals, cargo description (vehicle VIN, make, model), and consignee information. Cargo arriving at Abidjan without a pre-validated ECTN will be denied customs clearance. The cost is approximately €23 per vehicle (fixed by GUCE). Cargration handles ECTN registration as part of our standard shipping process."
      },
      {
        "q": "What is the Code Impex and how do I get one?",
        "a": "The Code Impex (Importer/Exporter Code) is a mandatory registration number for anyone importing goods into Côte d'Ivoire. It is issued by the Department of Foreign Trade Promotion (Direction de la Promotion du Commerce Extérieur). To obtain a Code Impex, you must submit: a completed application form, a copy of your passport (for individuals) or company registration documents (for businesses), a tax identification number (NIU), and proof of commercial registration. The code is free of charge and is typically issued within 1–2 weeks. For occasional importers, an \"Impex Oca\" (Occasional Importer Code) is available. Without a valid Code Impex, you cannot file an import declaration or clear customs. We recommend obtaining your Code Impex at least 2 weeks before your vehicle arrives in Abidjan."
      },
      {
        "q": "Can I import an electric vehicle from China to Côte d'Ivoire?",
        "a": "Yes, electric vehicles can be imported to Côte d'Ivoire. While they do not currently benefit from the same level of tax incentives as in some other markets, EVs are classified under the ECOWAS CET and attract the standard duty rates based on their HS code classification. The key advantages of importing an EV to Côte d'Ivoire: lower running costs (electricity is more affordable than petrol in the long term), reduced maintenance (fewer moving parts), growing charging infrastructure in Abidjan (several charging stations have been installed in 2025–2026), and potential eligibility for future ECOWAS green vehicle incentives as the region pushes for cleaner mobility. Popular Chinese EV options include the BYD Yuan Plus (Atto 3) and BYD Seal. Note that EV batteries must comply with Ivorian hazardous materials shipping regulations."
      },
      {
        "q": "What happens if I exceed the 5-year age limit on my imported vehicle?",
        "a": "Importing a vehicle that exceeds the legal age limit has serious consequences. The penalty structure under Decree 2017-792 is: an administrative fine of 2,000,000 XOF (approximately €3,000 or $3,300 USD), plus mandatory re-export or destruction of the vehicle at the owner's expense. The vehicle will be denied registration (carte grise) and cannot be legally driven on Ivorian roads. The transport ministry will not issue number plates or registration documents. If a vehicle is found to be over the age limit during customs inspection — which is standard practice — it will be held at the port until the fine is paid and the re-export or destruction is arranged. These costs can easily exceed the value of the vehicle itself."
      },
      {
        "q": "What is the Transfer of Residence concession and who qualifies?",
        "a": "The Transfer of Residence (Déménagement) concession is a special customs regime for individuals relocating permanently to Côte d'Ivoire. Eligible persons include: Ivorian citizens returning after living abroad for at least 12 consecutive months, foreign expatriates relocating to Côte d'Ivoire for employment, and diplomats or international civil servants returning from overseas missions. Under this concession, you may receive exemptions from customs duties (TEC) on personal effects including one vehicle. You typically still pay VAT (TVA) at 18% and a reduced set of levies, bringing the total tax burden down from ~50% to approximately 22–25% of CIF. Requirements include: proof of overseas residence (≥12 months), vehicle ownership and use abroad (≥6 months), valid employment contract or residency permit, and a Change of Residence certificate from the Ivorian consulate in your country."
      },
      {
        "q": "What Chinese brands are most popular in Côte d'Ivoire?",
        "a": "Chery is the leading Chinese brand in Côte d'Ivoire, with the Tiggo 7 and Tiggo 8 being the most popular models for their combination of size, features, and competitive pricing against Japanese alternatives. Changan follows closely with the CS35 Plus and Eado, both well-suited to the Ivorian market for their fuel efficiency and robust build quality. Geely has a growing presence with the Emgrand sedan, particularly popular for taxi and fleet operators in Abidjan. BYD is emerging as the EV leader with the Yuan Plus (Atto 3). Across all brands, Ivorian buyers prioritize: strong air conditioning systems for the tropical climate, good ground clearance for unpaved roads, fuel-efficient petrol engines, and available spare parts and service networks in Abidjan and other major cities."
      },
      {
        "q": "Do I need a customs agent in Côte d'Ivoire?",
        "a": "Yes, a licensed customs agent (commissionnaire en douane agréé) is required for all commercial vehicle imports to Côte d'Ivoire. For individual imports, while not strictly mandatory, one is strongly recommended. The customs agent handles: verifying and submitting the DAI (Advanced Import Declaration) through the GUCE system, calculating and paying all duties, taxes, and levies, coordinating the physical inspection at the Port of Abidjan, managing PSI certificate verification, and handling the release process and delivery. A customs agent typically charges 150,000–400,000 XOF (~$250–$650) depending on vehicle value and complexity. We can connect you with recommended commissionnaires en douane agréés in Abidjan who are experienced with Chinese vehicle imports and our documentation format."
      },
      {
        "q": "What is the typical timeline from order to delivery in Abidjan?",
        "a": "A typical timeline to Côte d'Ivoire: Day 1–3 — vehicle selection and deposit; Day 4–8 — vehicle procurement and inspection; Day 9–14 — documentation preparation (PSI inspection, commercial invoice, CO, ECTN registration, export declaration); Day 15 — container loading at Chinese port; Day 16–45 — sea transit to Abidjan (25–35 days) plus port handling; Day 46–52 — customs clearance at Douanes Ivoiriennes (5–7 business days with a commissionnaire); Day 53 — vehicle ready for pickup at Abidjan terminal. Total: approximately 7–8 weeks from order to delivery. Direct sailings from Guangzhou to Abidjan are the fastest route. Using the RoRo method instead of container can reduce shipping costs, but port handling in Abidjan may take slightly longer for RoRo vs. containerized cargo."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles destined for Côte d'Ivoire?",
        "a": "Absolutely. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Ivorian buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many Abidjan-based dealers visit before placing bulk orders — particularly to verify the PSI inspection process and confirm that vehicle specifications match the documentation required by Ivorian customs. Virtual inspections via video call are also available if travel is not feasible."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Côte d'Ivoire?",
        "a": "New vehicles sourced from manufacturer-authorized Chinese dealers carry the full factory warranty, which may be transferable to Côte d'Ivoire for brands with an established dealer network. Chery and Changan both have authorized dealerships in Abidjan with warranty service available. For used vehicles and parallel imports, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at additional cost. All warranty terms are documented in the sales agreement before payment. We recommend verifying warranty transferability with the brand's Ivorian distributor before purchase if factory coverage is important to you."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Côte d'Ivoire?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival at the Port of Abidjan. The policy covers sea transit, port handling at both ends, and any overland transport within Côte d'Ivoire. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We have maintained a 97.5% damage-free delivery rate on the Côte d'Ivoire route. Our container loading standards — wheel chocks, frame strapping, and protective wrapping — exceed standard industry practice. For RoRo shipments, vehicles are driven directly onto the vessel and secured on dedicated vehicle decks with proper lashing. Photographs are taken before loading to document condition, and these are shared with you as part of the handover record."
      }
    ]
  },
  'bolivia':   {
    "slug": "bolivia",
    "heroTitle": "Ship vehicles from China to Bolivia with full duty estimates and pre-shipment authorization.",
    "heroDesc": "Bolivia is landlocked — all vehicle imports transit through Chilean Pacific ports (Iquique/Arica) before crossing the Andes. Whether you are a returning resident, a licensed Bolivian dealer, or importing under the EV incentive scheme, Cargration handles sourcing, SGS pre-shipment authorization, and shipping logistics so your vehicles clear Bolivian customs on the first try.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 340,
        "label": "Cars to Bolivia"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Transit Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 91,
        "label": "Bolivian Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 45,
        "label": "Days Transit (Sea + Land)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a car to Bolivia?",
        "a": "Total taxes typically range from 50% to 90% of the CIF value depending on engine size and vehicle age. The stack includes: Import Duty at ~10%, VAT (IVA) at 14.94%, Specific Consumption Tax (ICE) at 18–30% based on engine displacement, a 30% ICE surcharge for vehicles over 1 year old, and a 1% Verification Fee on FOB value. For Electric Vehicles, the ICE component drops to 0% under the incentive scheme, reducing the total burden to approximately 26% of CIF. Hybrid vehicles enjoy a reduced 3% ICE rate until July 2026."
      },
      {
        "q": "What is the maximum age for a used vehicle to be imported to Bolivia?",
        "a": "Bolivia strictly enforces a 5-year age limit from the date of manufacture. In 2026, this means only vehicles manufactured in 2021 or newer are eligible for import. The age is calculated from the vehicle's production year stamped on the chassis plate, not the first registration date. Vehicles exceeding this limit are denied entry at the Bolivian border and must be re-exported at the importer's expense. There is no waiver or grace period for vehicles even slightly over 5 years old. Always verify the manufacture date before purchasing a vehicle for the Bolivian market."
      },
      {
        "q": "Do I need pre-shipment authorization before shipping to Bolivia?",
        "a": "Yes — absolutely. SGS or Inspectorate pre-shipment authorization is mandatory for every vehicle shipped to Bolivia. This authorization must be obtained BEFORE the vessel departs the port of loading in China. It involves submitting the vehicle's specifications, VIN, photos, and purchase documents to SGS or Inspectorate for verification. The authorization confirms that the vehicle matches the declared specifications and is eligible for import under Bolivian regulations. Cargo arriving at Iquique or Arica without this pre-authorization will be denied transit clearance into Bolivia. Cargration arranges this authorization as part of our standard documentation package."
      },
      {
        "q": "Can I import a Right-Hand Drive (RHD) vehicle to Bolivia?",
        "a": "Bolivia requires all vehicles to be Left-Hand Drive (LHD). You cannot import an RHD vehicle directly. However, RHD vehicles can be legally imported if they undergo a certified LHD conversion in a Bolivian Zona Franca Industrial. The conversion involves changing the steering column, dashboard, pedal assembly, wiring harness, and lighting systems. This is an expensive process costing $2,000–$5,000 depending on the vehicle model, and it must be performed by an authorized workshop within a designated Free Trade Zone. Conversion performed outside Bolivia is not recognized. For most importers, it is simpler and cheaper to source an LHD vehicle from China directly."
      },
      {
        "q": "How does the Specific Consumption Tax (ICE) work in Bolivia?",
        "a": "The Impuesto a los Consumos Específicos (ICE) is a progressive tax based on engine displacement. For petrol vehicles: under 1.8L = 18% ICE, 1.8L to 3.0L = 24% ICE, over 3.0L = 30% ICE. Vehicles over 1 year old incur an additional 30% surcharge on the ICE rate (e.g., 18% becomes 23.4%, 24% becomes 31.2%, 30% becomes 39%). Electric vehicles pay 0% ICE under the incentive scheme. Self-charging hybrids pay 3% ICE (reduced rate until July 2026). Natural gas vehicles and ambulances also qualify for 0% ICE. The ICE is calculated on the CIF value and is separate from Import Duty and VAT."
      },
      {
        "q": "What vehicles are prohibited from import to Bolivia?",
        "a": "Bolivian law prohibits the import of: vehicles over 5 years old from date of manufacture; vans, minibuses, and furgonetas over 3 years old; trucks over 5 years old (concrete mixers, drilling trucks, fire trucks); vehicles using LPG (gas licuado de petróleo) as fuel; diesel passenger vehicles with engine displacement of 4,000cc or less; vehicles that have been written off, damaged, or with chassis modifications (cut, welded, or altered chassis); vehicles that have had their steering converted outside Bolivia; vehicles that are not registered or documented in the country of origin; and vehicles that fail to meet Euro II minimum emissions standards."
      },
      {
        "q": "What is the Environmental Certificate and who needs it?",
        "a": "The Certificado Medioambiental is an environmental certificate issued by IBMETRO (Instituto Boliviano de Metrología) that verifies the vehicle meets Bolivia's emissions standards. It is required for: <strong>Used vehicles over 1 year old</strong> — must present the certificate confirming acceptable levels of atmospheric emissions (exhaust gases and ozone-depleting substances). <strong>New vehicles</strong> — exempt from the environmental certificate, but must still meet Euro II emissions standards minimum (Euro IV+ preferred). The certificate must be obtained before customs clearance. The process takes up to 10 business days from application. Without this certificate, used vehicles cannot complete the Single Import Declaration (DUI) process."
      },
      {
        "q": "Can I import an electric vehicle from China to Bolivia?",
        "a": "Yes, and it is the most tax-efficient option available. Fully electric vehicles benefit from 0% ICE (Specific Consumption Tax), which typically accounts for 18–30% of CIF. This drops the total tax burden from 50–90% down to approximately 26% of CIF. Additionally, the 30% ICE surcharge for used vehicles does not apply to EVs. Electric motors also perform better at high altitude (La Paz sits at 3,640m) since they do not lose power in thin air like internal combustion engines. Popular Chinese EV models for Bolivia include the BYD Yuan Plus (Atto 3), BYD Seal, and Chery iCar 03. All EVs still require the standard pre-shipment SGS authorization and import documentation."
      },
      {
        "q": "What is the VUCE and how does it affect vehicle imports?",
        "a": "The VUCE (Ventanilla Única de Comercio Exterior) is Bolivia's Single Window for Foreign Trade, created by Decreto Supremo N° 5211 of August 2024. It is an electronic platform that centralizes all import procedures — including pre-authorizations, license applications, and customs documentation. For vehicle imports, the VUCE system handles: Import License applications for commercial importers, SGS/Inspectorate authorization tracking, environmental certificate applications, and the Single Import Declaration (DUI) submission. The VUCE replaces the older paper-based ASYCUDA/SIDUNEA system for most procedures. Importers must register on the VUCE platform and obtain a digital signature to file documentation. Cargration can guide you through the VUCE registration process."
      },
      {
        "q": "What Chinese brands are most popular in Bolivia?",
        "a": "Changan is the leading Chinese brand in Bolivia, with the CS35 Plus and Eado being consistent top sellers for their affordability and suitability to Bolivian road conditions. Chery follows with the Tiggo 7 and Tiggo 8, popular in Santa Cruz and Cochabamba for their size and feature set. Geely has a strong presence with the Emgrand sedan, particularly popular for taxi fleets in La Paz and El Alto. BYD is the fastest-growing brand due to the EV incentive — the Yuan Plus (Atto 3) is gaining traction as the most affordable EV option. Across all brands, Bolivian buyers prioritize: engines under 1.8L (lower ICE bracket), robust suspension for high-altitude and rural roads, strong air conditioning for lowland regions, and available parts and service networks."
      },
      {
        "q": "How does shipping work for landlocked Bolivia?",
        "a": "Since Bolivia is landlocked, all vehicle imports follow a sea + overland route. Vehicles ship from Chinese ports (Shanghai, Guangzhou, Tianjin) to a Chilean Pacific port — primarily Iquique (ZOFRI free zone) or alternatively Arica. Bolivia has permanent free transit rights through Chilean ports under the 1904 Treaty of Peace and Friendship. Once the vehicle arrives in Iquique, it clears Chilean transit customs (no Chilean duties apply for goods in transit to Bolivia) and is then trucked overland across the Andes to Bolivian customs at Tambo Quemado or other border crossings. The overland leg takes 3–5 days depending on the final destination. The total door-to-door transit time is 35–50 days. Cargration coordinates the entire multimodal logistics chain."
      },
      {
        "q": "Do I need a Bolivian customs agent (despachante de aduana)?",
        "a": "Yes, a licensed customs agent (despachante de aduana) is mandatory for all commercial vehicle imports to Bolivia. For individual personal imports, it is strongly recommended. The customs agent handles: preparing and submitting the Single Import Declaration (DUI) through the VUCE system, calculating and paying duties and taxes, coordinating physical inspection at the Aduana Nacional, obtaining the Environmental Certificate if required, and managing the release process. A customs agent typically charges $300–$800 depending on the vehicle value and complexity. We can connect you with recommended despachantes de aduana in La Paz and Santa Cruz who are experienced with Chinese vehicle imports and familiar with our documentation format."
      },
      {
        "q": "What is the typical timeline from order to delivery in Bolivia?",
        "a": "A typical timeline to Bolivia: Day 1–3 — vehicle selection and deposit; Day 4–8 — vehicle procurement and inspection; Day 9–14 — documentation preparation (SGS pre-shipment authorization, commercial invoice, CO, export declaration); Day 15 — container loading at Chinese port; Day 16–50 — sea transit to Iquique, Chile (30–40 days) plus overland trucking to Bolivia (3–5 days); Day 51–58 — customs clearance at Aduana Nacional (5–7 business days with a despachante); Day 59 — vehicle ready at your Bolivian city (La Paz, Santa Cruz, or Cochabamba). Total: approximately 8–9 weeks from order to delivery. The main variables are shipping line schedules and customs processing times at both Chilean and Bolivian borders."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles destined for Bolivia?",
        "a": "Absolutely. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Bolivian buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many Bolivian dealers and individual importers visit before placing orders — particularly to verify the SGS pre-shipment authorization process and confirm that vehicle specifications (especially engine displacement and emissions certification) match Aduana Nacional requirements. Virtual inspections via video call are also available if travel is not feasible."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Bolivia?",
        "a": "New vehicles sourced from manufacturer-authorized Chinese dealers carry the full factory warranty, which may be transferable to Bolivia for brands with an official dealer network. Changan and Chery have established dealerships in Bolivia with warranty service available. For used vehicles and parallel imports, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at additional cost. All warranty terms are documented in the sales agreement before payment. We recommend verifying warranty transferability with the brand's Bolivian distributor before purchase if factory coverage is important to you. For EV imports, battery warranty terms should be confirmed separately with the manufacturer."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Bolivia?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival at the Bolivian destination. The policy covers the sea leg (China to Chile), the overland trucking leg (Chile to Bolivia), and port handling at both ends. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We have maintained a 97.9% damage-free delivery rate on the Bolivia route. Our container loading standards — wheel chocks, frame strapping, and protective wrapping — exceed standard industry practice, and we take extra care for the overland crossing of the Andes where road conditions can be challenging."
      }
    ]
  },
  'venezuela':   {
    "slug": "venezuela",
    "heroTitle": "Ship vehicles from China to Venezuela via sea to La Guaira or Puerto Cabello with full duty estimates, SENCAMER certification, and SENIAT customs clearance.",
    "heroDesc": "Venezuela is one of Latin America's largest automotive markets, with Chinese brands led by JAC dominating over 40% of new car sales. Sea routes from Shanghai and Ningbo reach La Guaira in 35–45 days and Puerto Cabello in 35–50 days. Import duties under Decree 5.103 range from 20% for vehicles ≤2100cc to 40% for >2100cc, plus 1% import tax, council tax, social fee, and 16% IVA on the cumulative total. Luxury vehicles over $40,000 face an additional 15% surcharge. SENCAMER registration, COVENIN permits, INTT homologation, and COMEX import licenses (RL-9) are mandatory. Whether you are a Caracas-based dealer or an individual buyer, Cargration handles sourcing, documentation, shipping, and customs compliance from Beijing to your Venezuelan port.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 1100,
        "label": "Cars to Venezuela"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Venezuelan Routes Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 87,
        "label": "Venezuela Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 40,
        "label": "Days Transit (Sea)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total import duty for a vehicle in Venezuela?",
        "a": "Depends on engine size: ≤2100cc = 20% duty, >2100cc = 40% (Decree 5.103, Mar 2025). Plus import tax 1% of CIF, council tax 0.12%, social fee EUR 100, then 16% IVA on the cumulative total. Effective total: ~60-100%+ of CIF depending on vehicle value. Luxury vehicles >$40K face additional 15% surcharge. For example, a $25,000 CIF sedan with a 1.8L engine (≤2100cc): duty ~$5,000 (20%), import tax $250, council tax $30, social fee ~$110 (EUR 100), cumulative base ~$30,390, IVA ~$4,862 (16%), total duties ~$10,252 (~41% of CIF). For a $45,000 CIF luxury SUV with a 3.0L engine (>2100cc): duty ~$18,000 (40%), import tax $450, council tax $54, social fee ~$110, luxury surcharge $6,750 (15% of CIF), cumulative base ~$70,364, IVA ~$11,258, total duties ~$36,622 (~81% of CIF)."
      },
      {
        "q": "What is the age limit for importing a used car to Venezuela?",
        "a": "Maximum 5 years from year of manufacture (Decree 5.103, March 2025 — this was a significant liberalisation). Before this decree, used imports were effectively banned except for returning residents. The decree now explicitly permits used vehicle imports up to 5 years old for individual importers. Maersk further restricts imports of 5+ year old vehicles through their shipping services. The age is calculated from the year of manufacture, not the model year. For example, a vehicle manufactured in 2022 can be imported in 2026 (4 years old) but not in 2028 (6 years old). Older vehicles may be imported under the Returnee Regime (Equipaje de Viajero) or for specific commercial purposes with special authorisation."
      },
      {
        "q": "What is SENCAMER certification?",
        "a": "SENCAMER (Servicio Autónomo Nacional de Normalización, Calidad, Metrología y Reglamentos Técnicos) is the Venezuelan national standards and technical regulations body. Importers must hold SENCAMER registration demonstrating compliance with COVENIN (Comisión Venezolana de Normas Industriales) technical standards for vehicles. Requirements include: proof that the vehicle model meets applicable COVENIN safety and emissions standards, registration of the importer in the SENCAMER registry, and submission of technical documentation including manufacturer specifications and test reports. This must be obtained in Venezuela before the vehicle's arrival. Failure to obtain SENCAMER certification can result in delays at customs, fines, or confiscation of the vehicle. We coordinate SENCAMER registration through our partner network to ensure compliance before your vehicle arrives."
      },
      {
        "q": "Can I import an electric vehicle from China to Venezuela?",
        "a": "Yes, but no EV-specific incentives exist. Standard 20-40% duty + 16% IVA apply equally to EVs. No charging subsidies, registration discounts, or import duty exemptions. Luxury surcharge (15% on CIF) applies to EVs valued over $40,000. BYD and Geely EVs are entering the market despite the lack of incentives, driven by consumer demand and growing environmental awareness. Charging infrastructure is limited primarily to Caracas and major cities. Unlike Colombia, Ecuador, or Brazil — which offer significant EV tax breaks — Venezuela has no green vehicle programme. The absence of incentives means the total tax burden on EVs is the same as on ICE vehicles. However, lower running costs and growing fuel prices in Venezuela make EVs increasingly attractive to cost-conscious buyers."
      },
      {
        "q": "What is the COMEX RL-9 permit?",
        "a": "The RL-9 (now referred to as a COMEX permit) is an import authorisation issued by COMEX (Comité de Comercio Exterior), managed through the online COMEX platform. It is required for over 200 HS codes including all motor vehicles. The permit must be obtained before shipping — you cannot apply after the vehicle is in transit. Processing time: approximately 25+ business days. Requirements include: company RIF (tax ID) or individual tax registration, proforma invoice from the exporter, SENCAMER registration, certificate of origin, and Sworn Declaration of Fund Origin. The RL-9 was historically a physical document but is now processed through the digital COMEX system. Without a valid RL-9, SENIAT will not accept the customs declaration and the vehicle cannot be cleared. Our team helps coordinate the RL-9 application process through our Venezuelan partner network."
      },
      {
        "q": "What documents need Spanish translation?",
        "a": "All documents submitted to SENIAT, INTT, and SENCAMER must be in Spanish. Documents requiring certified translation include: the commercial invoice, certificate of origin, vehicle title or registration document, bill of lading, insurance policy, and any Power of Attorney for the customs broker. Translations must be prepared by a certified translator (traductor público) authorised in Venezuela. Documents from China must first be apostilled under the Hague Apostille Convention (China has been a member since 2023), then translated in Venezuela by a certified translator. Cost: typically $50-150 per document depending on length. Failure to provide properly translated documents can lead to customs delays, fines, or rejection of the import declaration. We arrange certified Spanish translations through our Venezuelan partner network to ensure full compliance."
      },
      {
        "q": "Can I register a right-hand drive vehicle in Venezuela?",
        "a": "No. LHD only. Right-hand drive vehicles cannot be registered with INTT (Instituto Nacional de Transporte Terrestre) and therefore cannot be legally operated on Venezuelan roads. This is consistent with most Latin American countries. All vehicles imported to Venezuela must be left-hand drive. If you source a vehicle from a RHD market (Japan, Thailand, UK, Australia), it cannot be registered in Venezuela. Chinese domestic market vehicles are LHD (China drives on the right), so this is not an issue for vehicles sourced from China. Always verify LHD configuration before purchasing any vehicle intended for the Venezuelan market."
      },
      {
        "q": "What Chinese brands are most popular in Venezuela?",
        "a": "JAC Motors is the absolute market leader in Venezuela with a commanding 40.9% market share in 2025 (+227.7% YoY). The JAC Arena/JS2 alone captures 15% of the total market, making it the #1 selling car in the country. Changan is the #3 Chinese brand with 6.5% market share, led by the CS35 compact SUV. Chery has a growing presence with the Tiggo 4 Pro and established brand recognition. BYD is entering the market with the Yuan Plus/Atto 3 EV. Chinese brands now dominate Venezuela's auto market — a dramatic shift from the pre-sanctions era when General Motors, Ford, and Toyota led. The success of Chinese brands is driven by affordable pricing, available credit lines, and established dealer networks across Venezuela's major cities."
      },
      {
        "q": "Do I need a customs broker in Venezuela?",
        "a": "Yes. A licensed customs broker (Agente Aduanal) is mandatory for all import declarations in Venezuela. They are responsible for: DUA (Declaración Única de Aduanas / Single Customs Declaration) filing through the SENIAT electronic system, duty calculation and payment, coordination of SENIAT physical inspection if required, and vehicle release from customs custody. Customs entry (manifest submission) must be made within 5 days of the vessel's arrival at port. The broker charges a fee typically based on the CIF value — approximately 1-3% depending on complexity. We can connect you with recommended licensed customs brokers at both La Guaira and Puerto Cabello who specialise in Chinese vehicle imports and have experience with the current SENIAT requirements and documentation standards."
      },
      {
        "q": "What is the timeline from order to delivery in Caracas?",
        "a": "Day 1-3: vehicle selection and deposit; Day 4-10: vehicle procurement and inspection; Day 11-25: COMEX RL-9 permit processing (15+ business days); Day 26-60: sea transit from Shanghai/Ningbo to La Guaira or Puerto Cabello (35-45 days); Day 61-68: SENIAT customs clearance including DUA filing, duty payment, and physical inspection if required (5-7 business days); Day 69-72: INTT homologation and vehicle registration (3-5 days). Total timeline: approximately 10-11 weeks. The RL-9 permit processing is often the critical path — it should be initiated as early as possible and can be processed concurrently with vehicle procurement. Using a licensed customs broker familiar with SENIAT's electronic procedures can significantly reduce clearance time at the port."
      },
      {
        "q": "How do currency controls affect vehicle imports?",
        "a": "Venezuela has strict capital controls that complicate international transactions. The official exchange rate (administered by the Central Bank of Venezuela) differs significantly from parallel market rates, creating complexity for importers. Key considerations: most international transactions must be denominated in USD or EUR — bolívar-denominated payments are not accepted by international exporters; we recommend denominating all contracts in USD; work with banks experienced in Venezuelan international transactions; the Sworn Declaration of Fund Origin (Declaración Jurada de Origen de Fondos) is required to demonstrate the legitimate source of funds for the import; cryptocurrency adoption is relatively high in Venezuela as an alternative payment method; and payment structures should be secured through confirmed letters of credit or wire transfers to verified accounts. We help navigate these considerations and recommend secure payment structures for Venezuelan buyers."
      },
      {
        "q": "What is the returning resident (Equipaje de Viajero) regime?",
        "a": "Venezuelan citizens returning after 1+ year abroad can import one vehicle under the Returnee Regime with nearly total exemption from duties and VAT. This regime requires: proof of foreign residence for 11+ continuous months (documented through visas, residence permits, employment records, or rental agreements); a Certificate of Residence Use (Certificado de Uso de Residencia) issued by a Venezuelan consulate in the country of origin; one vehicle per returnee (multiple vehicles require commercial import); the vehicle must be for personal use and cannot be sold for a period after import (typically 2 years); and all standard documentation requirements still apply but with drastically reduced tax liability. This is the most cost-effective way for returning Venezuelans to bring a vehicle from China. Process time: 4-6 weeks for consular certificate plus standard customs processing. We have assisted numerous returning Venezuelan residents with this regime."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles?",
        "a": "Yes. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Venezuelan buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many Caracas-based dealers visit before placing orders — particularly to verify vehicle condition, confirm documentation readiness for COMEX and SENCAMER requirements, and ensure all Spanish-language paperwork is in order. Virtual inspections via video call are also available if travel is not feasible. We also offer third-party inspection services through TÜV Rheinland, SGS, or Bureau Veritas in China for buyers who cannot travel."
      },
      {
        "q": "What warranty do you offer on vehicles exported to Venezuela?",
        "a": "New vehicles sourced from manufacturer-authorised Chinese dealers carry the standard factory warranty. JAC, Changan, and Chery have established authorised dealer networks in Venezuela with warranty service available in Caracas, Valencia, Maracaibo, and other major cities. Most Chinese brands offer 3-5 year manufacturer warranties with Venezuelan dealer support. For used vehicles, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at additional cost. All warranty terms are documented in the sales agreement before payment and translated into Spanish. For the Venezuelan market, we recommend verifying warranty coverage with the brand's local distributor — particularly for EV batteries, which have separate warranty terms. Venezuelan consumer protection law (Ley de Protección al Consumidor) provides additional statutory protections."
      },
      {
        "q": "What happens if the vehicle is damaged during transit?",
        "a": "All vehicles are fully insured from the moment they leave our facilities in Beijing and Guizhou until arrival at the Venezuelan destination port (La Guaira or Puerto Cabello). The policy covers sea transit, terminal handling at all transfer points (including transshipment if required), and port storage before customs clearance. In the rare event of damage, you file a claim with our logistics team and we handle the full insurance claims process on your behalf. Given the Venezuela route, we recommend comprehensive coverage due to port conditions and handling standards. Our container loading standards — wheel chocks, frame strapping, and protective wrapping — exceed standard practice to minimise risk. Photographs and video are taken before loading to document condition and shared with you as part of the handover record. We have maintained a strong damage-free delivery rate on the Venezuela route through careful carrier selection and packing standards."
      }
    ]
  },
  'colombia':   {
    "slug": "colombia",
    "heroTitle": "Ship new vehicles from China to Colombia with full duty estimates and homologation support.",
    "heroDesc": "Colombia permits only new current-year vehicles for permanent import under the Andean Automotive Agreement — used vehicles are prohibited except for classics over 35 years. Whether you are a Bogotá dealer, a Medellín importer, or a collector bringing in a classic, Cargration handles sourcing, DIAN documentation, homologation, and shipping so your vehicles clear Colombian customs on the first attempt.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 520,
        "label": "Cars to Colombia"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 3,
        "label": "Colombian Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 93,
        "label": "Colombian Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 42,
        "label": "Days Transit (Sea)"
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a vehicle to Colombia?",
        "a": "Total taxes typically range from 35% to 55% of the CIF value depending on the vehicle type and engine size. The stack includes: Import Duty at 15% (under 1,500cc), 25% (1,500–2,000cc), or 35% (over 2,000cc and pickups); VAT (IVA) at 19% calculated on the sum of CIF value plus import duty (creating a compounding effect); and a Consumption Tax of 8–16% for vehicles above a value threshold of approximately COP $30,000,000 (~$7,500 USD)."
      },
      {
        "q": "Can I import a used car from China to Colombia?",
        "a": "No — with very limited exceptions. Colombia's Andean Automotive Agreement strictly prohibits the permanent import of used vehicles. Only new, current-year, zero-kilometre vehicles may be imported for permanent use. The only exceptions are: classic and antique vehicles over 35 years old (certified by the Automóvil Club de Colombia) and diplomatic imports. Vehicles between 1 and 34 years old cannot be legally imported under any scheme. Attempting to import a used vehicle in this age range will result in seizure by DIAN, fines, and mandatory re-export at your own expense. There is no grace period, waiver, or negotiation possible."
      },
      {
        "q": "What is the homologation card (Ficha de Homologación) and why is it required?",
        "a": "The Ficha de Homologación is a technical certificate issued by the Colombian Ministry of Transport that confirms a specific vehicle model meets Colombia's safety, emissions, and technical standards. Each vehicle model must have a valid homologation on file before it can be registered in Colombia. The homologation process involves: submitting vehicle specifications (VIN range, engine type, dimensions, weight, emissions data), verification of Euro 5/EPA Tier 2 compliance, safety equipment verification (ABS, airbags, seatbelt anchors, etc.), and issuance of the homologation card linked to the model's HS code. If a model does not have an existing homologation, the importer must arrange testing and certification — a process that can take weeks and cost $2,000–$5,000. Cargration verifies homologation status before shipping."
      },
      {
        "q": "How does the Consumption Tax (Impuesto al Consumo) apply to vehicle imports?",
        "a": "Colombia applies an additional Consumption Tax (Impuesto al Consumo) on vehicles with a CIF value above a threshold set annually by DIAN (approximately COP $30,000,000 or ~$7,500 USD in 2026). The rate is 8% for vehicles with a CIF value between COP $30,000,000 and COP $45,000,000, 12% for vehicles between COP $45,000,000 and COP $60,000,000, and 16% for vehicles exceeding COP $60,000,000. Electric vehicles and hybrids may qualify for reduced or exempt consumption tax rates under Colombia's green mobility incentives. The consumption tax is calculated on the CIF value and is in addition to Import Duty and IVA."
      },
      {
        "q": "Can I import a classic or antique car from China to Colombia?",
        "a": "Yes, Colombia permits the import of classic and antique vehicles as a legal exception to the used-vehicle ban. Requirements: the vehicle must be at least 35 years old from the date of manufacture for \"antique\" classification, or 50+ years for \"classic\" status; must preserve all original factory specifications (no modifications, non-original parts, or restoration that changes factory configuration); must receive certification from the Automóvil Club de Colombia (ACC) confirming the vehicle is of national interest; requires a prior import license (Licencia Previa) from MINCIT; must pass emissions inspection and roadworthiness testing; and must be registered directly as \"antiguo\" or \"clásico\" — standard vehicle registration is not available. Duty rates for classic imports are typically 5–15%, plus IVA at 19%."
      },
      {
        "q": "What emissions standards must vehicles meet for Colombia?",
        "a": "Colombia requires all imported vehicles to meet a minimum of Euro 5 or EPA Tier 2 emissions standards. This applies to petrol and diesel passenger vehicles. The Ministry of Transport verifies emissions compliance during the homologation process. Vehicles that do not meet these standards cannot obtain the Ficha de Homologación and therefore cannot be registered for road use. Chinese vehicles exported to Colombia generally meet Euro 5/6 standards as standard — most modern Chinese petrol engines are certified to Euro 5 or Euro 6. For electric vehicles (BEVs), zero-emission status automatically satisfies emissions requirements. Hybrids must meet the same Euro 5/6 standards for their internal combustion engine component."
      },
      {
        "q": "What is the Advanced Import Declaration and when must it be filed?",
        "a": "The Declaración Anticipada (Advanced Import Declaration) is a mandatory pre-arrival filing required by DIAN under Decreto 1165 of 2019. It must be submitted at least 48 hours before the cargo vessel arrives at a Colombian port. The declaration includes: importer's NIT and registration data, HS code classification of the vehicle, CIF value declaration, supporting document references (invoice, B/L, CO), and applicable duty and tax calculations. The Advanced Declaration allows DIAN to pre-screen shipments and assign a control channel (green, yellow, or red) before the vessel docks. A green channel means minimal inspection; yellow requires document review; red triggers a full physical inspection. Failure to file on time results in penalties and delays."
      },
      {
        "q": "Can I import an electric vehicle from China to Colombia?",
        "a": "Yes, and EVs benefit from favourable import treatment. Electric vehicles (BEVs) are classified at a 15% import duty rate — the lowest passenger vehicle bracket — compared to 35% for large-engine SUVs. IVA at 19% still applies, but the Consumption Tax is reduced or eliminated for many EV models. Additionally, EVs registered in Bogotá are exempt from the Pico y Placa driving restriction (which limits vehicle use based on licence plate digits during peak hours). Colombia is actively building EV charging infrastructure, with over 1,000 charging points operational in Bogotá, Medellín, Cali, and along major highways. BYD is the dominant EV brand in Colombia, with the Yuan Plus (Atto 3), Seal, and Tang models leading sales."
      },
      {
        "q": "What is the IAMAS program and can I use it as an individual importer?",
        "a": "The IAMAS (Instrumento Arancelario para el Mejoramiento Ambiental y de la Seguridad Vial) is a Colombian government program that allows authorized vehicle manufacturers and assemblers to import vehicles and components at 0% customs duty. It was created to stimulate local automotive production, investment, and employment. Eligibility is limited to companies registered under the Régimen de Transformación y/o Ensamble or the Programa de Fomento para la Industria Automotriz (PROFIA). Individual importers and small dealerships do not qualify for IAMAS benefits. The program is currently authorised through December 2026, with a potential extension under review by MINCIT. Standard duty rates apply unless your company is an authorized IAMAS participant."
      },
      {
        "q": "What Chinese brands are most popular in Colombia?",
        "a": "BYD is the leading Chinese brand in Colombia, particularly for electric vehicles — the Yuan Plus (Atto 3) and Seal are top sellers in the growing EV segment. Changan follows with the CS35 Plus and Eado, both popular for their value pricing and suitability to Colombian road conditions. Chery has a strong presence with the Tiggo 7 and Tiggo 8 Pro, appealing to family SUV buyers. MG is also gaining traction with the ZS and MG5 models. Across all brands, Colombian buyers prioritize: engines under 1,500cc (for the lowest 15% duty bracket), robust suspension for varied terrain, strong air conditioning for tropical lowland regions, and available parts and service networks through established dealerships in Bogotá, Medellín, Cali, and Barranquilla."
      },
      {
        "q": "Do I need a Colombian customs agent (agente de aduana)?",
        "a": "Yes, a licensed customs agent (agente de aduana) is required for all commercial vehicle imports to Colombia. For individual imports, it is strongly recommended. The agent handles: registering with DIAN and obtaining the NIT if not already held, preparing and submitting the Advanced Import Declaration 48+ hours before vessel arrival, calculating and paying duties, IVA, and consumption tax, coordinating the DIAN inspection (if a red channel is assigned), and managing the release process and delivery to your location. A customs agent typically charges $400–$900 depending on vehicle value and complexity. We can connect you with recommended agentes de aduana at Cartagena, Buenaventura, and Barranquilla who are experienced with Chinese vehicle imports and our documentation format."
      },
      {
        "q": "What is the typical timeline from order to delivery in Colombia?",
        "a": "A typical timeline to Colombia: Day 1–3 — vehicle selection and deposit; Day 4–8 — vehicle procurement and inspection; Day 9–14 — documentation preparation (commercial invoice, CO, export declaration, homologation verification); Day 15 — container loading at Chinese port; Day 16–58 — sea transit to Cartagena or Buenaventura (35–50 days depending on origin and destination); Day 59–65 — customs clearance at DIAN (5–7 business days with an agente de aduana); Day 66 — vehicle ready for pickup at port or delivery to Bogotá/Medellín/Cali. Total: approximately 9–10 weeks from order to delivery. Using RoRo instead of container can reduce shipping costs. Direct sailings from Shanghai to Cartagena via the Panama Canal are the fastest option at around 35 days."
      },
      {
        "q": "Can I visit your facility in China to inspect vehicles destined for Colombia?",
        "a": "Absolutely. Our offices are located in Beijing and Guizhou — two of China's largest used car markets. Buyers are welcome to visit either location. Colombian buyers are welcome to visit, inspect vehicles in person, and witness the container loading process. We can assist with visa invitation letters and transportation from Beijing Capital Airport. Many Colombian dealers visit before placing orders — particularly to verify the homologation documentation and confirm that vehicle specifications match the Ficha de Homologación registered with the Ministry of Transport in Bogotá. Virtual inspections via video call are also available if travel is not feasible."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Colombia?",
        "a": "New vehicles sourced from manufacturer-authorized Chinese dealers carry the full factory warranty, which is transferable to Colombia for brands with an established dealer network. BYD, Changan, Chery, and MG all have authorized dealerships in Colombia with warranty service available in Bogotá, Medellín, Cali, and Barranquilla. For vehicles sourced through parallel channels, we offer a 30-day mechanical warranty covering engine, transmission, and major systems. Extended warranty options are available through our partner network at additional cost. All warranty terms are documented in the sales agreement before payment. We recommend verifying warranty transferability with the brand's Colombian distributor before purchase if factory coverage is important to you."
      },
      {
        "q": "What happens if the vehicle is damaged during transit to Colombia?",
        "a": "All vehicles are fully insured during transit from the moment they leave our facilities in Beijing and Guizhou until arrival at the Colombian port of destination. The policy covers the sea leg, port handling at both ends, and any overland transport within Colombia. In the rare event of damage, you file a claim with our logistics team and we handle the insurance process on your behalf. We have maintained a 98.2% damage-free delivery rate on the Colombia route. Our container loading standards — wheel chocks, frame strapping, and protective wrapping — exceed standard industry practice. For RoRo shipments, vehicles are driven directly onto the vessel and secured on dedicated vehicle decks with proper lashing. Photographs are taken before loading to document condition, and these are shared with you as part of the handover record."
      }
    ]
  },
'afghanistan':   {
    "slug": "afghanistan",
    "heroTitle": "Ship vehicles from China to Afghanistan with duty estimates and overland options via Chabahar, Torkham, or Termez.",
    "heroDesc": "Afghanistan is a landlocked, emerging import market where Chinese SUVs, pickups, and budget sedans are increasingly sought after for their value, ground clearance, and durability on rugged terrain. Vehicles are cleared through one of three corridors: sea to Bandar Abbas/Chabahar (Iran) or Karachi (Pakistan) then overland, or rail to Termez (Uzbekistan). Afghan Customs applies a customs duty based on CIF value and engine size, plus a range of municipal and social levies. Whether you are a dealer in Kabul, an NGO fleet importer, or an individual buyer, Cargration handles sourcing, documentation, shipping, and customs support so your vehicles clear Afghan border posts without delays.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 620,
        "label": "Cars to Afghanistan"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 3,
        "label": "Corridors Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 91,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 35,
        "label": "Days Transit (Sea + Overland)"
      }
    ],
    "dutyCalcDescription": "Afghan Customs calculates duty on the CIF value (Cost + Insurance + Freight). Passenger vehicles typically face a customs duty based on engine size — approximately 25% for vehicles up to 2,000cc and 40% for larger engines — plus a 2% modernisation levy and municipal fees. Total all-in burden almost always lands between 35% and 55% of CIF depending on engine size, age, and the border post used.",
    "importTabs": [
      {
        "label": "Standard — Individual Import",
        "infoBox": "Individuals can import one vehicle for personal use with simplified documentation. The vehicle must be cleared through an approved border post and is subject to duty based on CIF value and engine displacement. Insurance and a Ministry of Interior registration are required after clearance.",
        "bullets": [
          "Customs duty: ~25% of CIF up to 2,000cc; ~40% above 2,000cc",
          "2% modernisation levy on CIF value",
          "Municipal and border-post service fees apply (fixed amounts)",
          "No formal age limit for used vehicles — older vehicles accepted but taxed uniformly on CIF",
          "Documents: commercial invoice, certificate of origin, bill of lading",
          "Vehicle must be right-hand-drive-compliant — Afghanistan uses right-hand traffic (LHD vehicles)",
          "Registration with Ministry of Interior after clearance"
        ]
      },
      {
        "label": "Commercial — Dealers & Fleet Buyers",
        "infoBox": "Commercial importers and fleet operators (including NGO and infrastructure programmes) benefit from volume terms and can clear through Chabahar or Termez with consolidated paperwork. Consistent volumes enable customs tariff exemptions under specific reconstruction programs.",
        "bullets": [
          "Requires a valid Afghan business licence (AISA-registered)",
          "Simplified duty banding for fleet registrations",
          "Volume pricing from Cargration on SUVs and pickup trucks",
          "Customs support at each corridor",
          "Multi-vehicle container loading (up to 4 units per 40HQ)",
          "Pro-forma and commercial invoice in Dari/Pashto and English",
          "NGO/diplomatic exemptions processed on request"
        ],
        "extraText": "For Kabul dealers and fleet operators, Cargration provides wholesale FOB pricing, consolidated containers from Shanghai and Shenzhen, and end-to-end documentation for Chabahar, Torkham, or Termez corridors."
      },
      {
        "label": "EV & Green Incentive",
        "infoBox": "Electric vehicles face reduced duty pressure in Afghanistan relative to petrol SUVs of the same value, and several reconstruction programmes prefer clean fleets. Charging infrastructure is limited to Kabul and Herat, so EVs suit urban fleets rather than rural operations.",
        "bullets": [
          "EVs typically classified at the lowest duty band",
          "No luxury or volume surcharges applied to EVs in most provinces",
          "Lower operating cost in a diesel-dominated market",
          "Limited charging network — Kabul and Herat only",
          "Popular Chinese EVs: BYD Yuan Plus, BYD Dolphin, Wuling Air EV"
        ],
        "extraText": "Tax tip: the effective landed cost of a BYD Yuan Plus EV is often within 8–12% of an equivalent petrol SUV despite the higher sticker price, because the duty band and running costs are lower."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Sea + Overland — Shanghai → Bandar Abbas/Chabahar → Islam Qala",
        "summary": "The most reliable corridor to Afghanistan via Iranian ports. Vehicles sail from Shanghai to Bandar Abbas (20-28 days) then travel overland across Iran to the Islam Qala border crossing in about 5-7 days. Consolidated containers and RoRo both work, with Afghan clearance handled at Islam Qala.",
        "details": [
          "Transit time: 30–38 days door to door",
          "Sea leg: 20–28 days (Shanghai → Bandar Abbas/Chabahar)",
          "Overland leg: 5–7 days road freight via Iran",
          "Best for SUVs, pickups, and 4x4s",
          "Islam Qala is the primary Afghan customs post on the Iranian corridor"
        ]
      },
      {
        "icon": "🚢",
        "title": "Sea + Overland — Shanghai → Karachi → Torkham (via Peshawar)",
        "summary": "A cost-competitive alternative using Pakistan's KICT/PICT vehicle terminals in Karachi. Vehicles travel overland via the Torkham crossing. Timing is weather- and clearance-dependent and the route is best suited to consolidators moving volume.",
        "details": [
          "Transit time: 35–42 days door to door",
          "Sea leg: 15–20 days (Shanghai → Karachi)",
          "Overland leg: 7–10 days via Peshawar to Torkham",
          "Requires Pakistan transit documentation",
          "Good option for containerised smaller vehicles"
        ]
      },
      {
        "icon": "🚂",
        "title": "Rail + Overland — Chongqing → Termez (Uzbekistan)",
        "summary": "The northern rail corridor via Uzbekistan is the emerging route for Afghan imports, moving vehicles by intermodal rail to Termez then by road to Kabul. Reliable for volume and less weather-dependent than the Pakistani corridor.",
        "details": [
          "Transit time: 25–35 days door to door",
          "Rail: Chongqing → Almaty/Tashkent → Termez",
          "Overland: Termez → Kabul (2–3 days)",
          "Best for containerised vehicles",
          "Growing corridor for Chinese brands entering Central Asia"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "Geely Coolray",
        "desc": "Compact SUV that dominates Afghan private sales for its balance of price, ground clearance, and parts availability. The 1.5T engine keeps duty at the lowest band, and the Volvo-derived platform handles poor roads better than most rivals at this price point.",
        "price": "$18,500–24,000 FOB"
      },
      {
        "rank": 2,
        "name": "Haval H6",
        "desc": "Mid-size SUV that is the strongest seller in Afghan dealer yards. Spacious cabin, robust 4WD options, and a strong dealer network across the region. The 2.0T variant is the default choice for intercity and provincial road use.",
        "price": "$24,000–31,000 FOB"
      },
      {
        "rank": 3,
        "name": "Chery Tiggo 8 Pro",
        "desc": "Seven-seater preferred by families and small businesses. Reliable under load, with strong AC for summer heat and good ground clearance. Priced well below Japanese 7-seaters of equivalent condition.",
        "price": "$26,500–35,000 FOB"
      },
      {
        "rank": 4,
        "name": "BYD Yuan Plus (Atto 3)",
        "desc": "The leading Chinese EV in Kabul, valued for low running costs and the lowest duty band. Best suited to urban fleets and businesses; ANCOR and UN programmes increasingly run EV pools in the capital.",
        "price": "$22,000–27,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full specifications in English",
          "Certificate of Origin (CO) — CCPIT certified",
          "Packing list with weights and container layout",
          "Bill of Lading or rail waybill",
          "Inspection report with photo/video record"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Valid import licence or business registration (AISA) for commercial imports",
          "Customs declaration at the border post",
          "Certificate of Origin for duty preference",
          "Vehicle registration with Ministry of Interior",
          "Third-party insurance before road use",
          "Dari/Pashto translation of key documents where required"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "Multi-Corridor Flexibility",
        "desc": "We route through Chabahar, Karachi, or Termez depending on season, cost, and clearance speed — keeping your vehicle moving even when one corridor faces delays."
      },
      {
        "title": "Terrain-Matched Sourcing",
        "desc": "We source high-ground-clearance SUVs, 4x4s, and heavy-duty pickups that are engineered for Afghan road conditions, and verify running gear before loading."
      },
      {
        "title": "Customs & Border Support",
        "desc": "Our partner brokers guide Afghan clearance at Chabahar, Islam Qala, Torkham, and Termez, preparing invoices and certificates in the required languages."
      },
      {
        "title": "Fleet & Reconstruction Terms",
        "desc": "NGOs, UN programmes, and infrastructure contractors receive priority sourcing, consolidated container loading, and volume pricing with full documentation."
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden for importing a car to Afghanistan?",
        "a": "Depending on engine size and CIF value, all-in duty and levies typically range from 35% to 55% of CIF. Vehicles up to 2,000cc pay roughly 25% customs duty plus a 2% modernisation levy and municipal fees; larger engines face about 40% duty."
      },
      {
        "q": "Can I import a used car from China to Afghanistan?",
        "a": "Yes. Afghanistan has no hard age ban, and used vehicles are taxed on CIF value rather than age. In practice most buyers choose vehicles under 5 years old for reliability, parts, and resale value."
      },
      {
        "q": "Which Chinese brands sell best in Afghanistan?",
        "a": "Haval (H6, Jolion), Geely (Coolray), Chery (Tiggo 8 Pro), and Changan are the volume sellers. BYD leads the small EV segment in Kabul."
      },
      {
        "q": "How are vehicles imported into a landlocked country like Afghanistan?",
        "a": "Almost all vehicles arrive via one of three corridors: sea to Bandar Abbas/Chabahar (Iran) or Karachi (Pakistan) plus overland trucking, or rail to Termez (Uzbekistan) plus road. Each has distinct costs and clearance timelines."
      },
      {
        "q": "Do I need a business licence to import vehicles commercially?",
        "a": "Yes. Commercial importers must be registered with AISA (Afghanistan Investment Authority). Individuals may import one vehicle for personal use with simplified documentation."
      },
      {
        "q": "What documents are required at the Afghan border?",
        "a": "A customs declaration, commercial invoice, certificate of origin, bill of lading or waybill, and — for commercial importers — the business registration. Registration and insurance are completed after clearance."
      },
      {
        "q": "Can I import an electric vehicle from China to Afghanistan?",
        "a": "Yes. EVs generally fall into the lowest duty band, making them competitive on landed cost. Charging infrastructure is basically limited to Kabul and Herat, so EVs are best for urban fleets."
      },
      {
        "q": "What is the typical timeline from order to delivery in Kabul?",
        "a": "Selection (days 1-3), procurement and inspection (days 4-10), documentation (days 11-18), sea/rail transit (days 19-45), border clearance (days 46-52), and final registration. Total is 6-9 weeks depending on corridor."
      },
      {
        "q": "Do I need special tyres or equipment for Afghan roads?",
        "a": "Buyers typically request a full-size spare wheel, heavy-duty suspension validation, and additional underbody protection. We can arrange port-side fitment of all-terrain tyres and undercoating before loading."
      },
      {
        "q": "Are Chinese LHD vehicles legal in Afghanistan?",
        "a": "Yes. Afghanistan drives on the right, so all factory LHD Chinese vehicles are compliant without conversion."
      },
      {
        "q": "Do you offer warranty on vehicles exported to Afghanistan?",
        "a": "New vehicles from authorised Chinese dealers carry the factory warranty where a regional dealer network exists. Used and parallel-import vehicles are covered by our standard 30-day mechanical warranty."
      },
      {
        "q": "What happens if the vehicle is damaged during transit?",
        "a": "All vehicles are insured from our facilities to the Afghan destination. The policy covers the sea/rail leg, terminal handling, and overland transport. Claims are handled by our logistics team; our damage-free delivery rate exceeds 95%."
      }
    ]
  },
'albania':   {
    "slug": "albania",
    "heroTitle": "Import cars from China to Albania with clear duty estimates and flexible shipping via Durrës.",
    "heroDesc": "Albania is one of the most open vehicle-import markets in the Balkans, with no hard age ban on used cars, a straightforward duty structure, and fast processing at the Port of Durrës. As an EU candidate country, Albania aligns many standards with the EU while keeping import red tape lighter than its neighbours. Chinese SUVs and budget crossovers in LHD (left-hand drive) have become strong sellers in Tirana and the coastal cities. Cargration handles sourcing, inspection, documentation, and RoRo or container shipping direct to Durrës, with customs support for dealers and private buyers alike.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 340,
        "label": "Cars to Albania"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 1,
        "label": "Port Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 96,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 28,
        "label": "Days Transit"
      }
    ],
    "dutyCalcDescription": "Albanian Customs taxes vehicles primarily on CIF value (Cost + Insurance + Freight). New passenger cars are subject to a customs duty along with VAT, while used vehicles incur a duty based on the vehicle's co2 / engine band and CIF value. Total all-in import taxes for most vehicles land between 25% and 40% of CIF depending on engine size and whether the vehicle is new.",
    "importTabs": [
      {
        "label": "Standard — Used Vehicle (LHD)",
        "infoBox": "Albania allows unrestricted import of used left-hand-drive vehicles with no hard age cap, making it the most flexible route in the Western Balkans. Vehicles are taxed on CIF value plus an emissions-based surcharge, and then subject to VAT.",
        "bullets": [
          "No hard age limit on used vehicles",
          "Import duty based on CIF value and engine/co2 band",
          "VAT of 20% on the landed value",
          "Left-hand-drive (LHD) vehicles — matching Albania's right-side traffic",
          "Documents: commercial invoice, certificate of origin, bill of lading",
          "Technical inspection (safety) after clearance",
          "Registration with Ministry of Transport"
        ],
        "extraText": "Because there is no age ban, a well-maintained 3-5 year old Chinese SUV is very competitive: it avoids the biggest depreciation years while keeping tax below new-car levels."
      },
      {
        "label": "New — Dealers & Bulk Import",
        "infoBox": "Dealers importing new vehicles into Albania get duty-efficient RoRo ex-China pricing and volume terms. Cargration supports dealer networks with ship-loading, priority allocation, and EU-aligned documentation.",
        "bullets": [
          "Dealer/business licence required for commercial import",
          "RoRo and container volume terms available",
          "Simplified verification for factory-new vehicles",
          "Factory warranty transferable within dealership networks",
          "Volume pricing across Haval, Geely, Chery, and BYD",
          "Customs clearance support in Durrës"
        ],
        "extraText": "Albanian dealers are increasingly retailing Chinese brands; the market rewards first movers who bring factory-backed warranty cars from authorised channels."
      },
      {
        "label": "EV Incentive",
        "infoBox": "Electric vehicles imported into Albania benefit from a markedly lower tax burden than petrol cars of the same value, and there are charging incentives in metro areas. BYD, MG, and Wuling EVs are the most requested.",
        "bullets": [
          "EVs pay a reduced emissions-based surcharge",
          "VAT applies at the standard 20% on landed value",
          "Growing fast-charging network in Tirana and Durrës",
          "Popular models: BYD Dolphin, BYD Atto 3, MG4, Wuling Binguo",
          "Both new and lightly-used EVs import well"
        ],
        "extraText": "Cost tip: on an equivalent 1,500cc crossover, an EV saves roughly 10-15% of total import tax versus petrol while halving fuel costs for urban drivers."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Direct RoRo — Shanghai → Piraeus/Valencia → Durrës",
        "summary": "The standard route for new car exports. Vehicles sail RoRo from Shanghai to a Mediterranean hub (Piraeus or Valencia) and connect onward to Durrës on feeder RoRo. Clean, reliable, and preferred for new vehicles.",
        "details": [
          "Transit time: 28–35 days door to door",
          "Roll-on/Roll-off vessel safest for bodywork",
          "Feeder connection via Piraeus or Valencia",
          "Best for new and low-mileage vehicles",
          "Booked in manageable monthly sailings"
        ]
      },
      {
        "icon": "🚢",
        "title": "Container Shipping — Shanghai → Durrës (40HQ)",
        "summary": "The budget alternative for used vehicles. Two cars per 40ft high-cube container (lashings, wheel chocks, protective wrapping included), with direct-ish calls via Piraeus. Slower but very cost-effective for private buyers.",
        "details": [
          "Transit time: 32–40 days door to door",
          "2 vehicles per 40ft container standard loading",
          "Protective wraps and chocks at no extra cost",
          "Best for used SUVs and sedans",
          "Inland delivery from Durrës available in Albania"
        ]
      },
      {
        "icon": "🚢",
        "title": "Groupage & Dealer Consolidation",
        "summary": "For dealers and fleet buyers, we consolidate guaranteed annual volumes into dedicated sailings to Piraeus, then feed to Durrës — cutting port costs and securing priority berthing.",
        "details": [
          "Volume-locked pricing for 10+ units",
          "Priority allocation on RoRo feeder slots",
          "Dealer-specific documentation (EU-aligned CO)",
          "Direct ex-factory pickup in China",
          "Tailored after-sales support in Albania"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "Haval Jolion",
        "desc": "The best-selling Chinese compact SUV in Albania. Value-for-money package with modern tech, strong AC, and the right footprint for urban Tirana while remaining comfortable on country roads.",
        "price": "$18,500–23,000 FOB"
      },
      {
        "rank": 2,
        "name": "Geely Coolray",
        "desc": "Punchy 1.5T crossover that sells well to private buyers looking for a fun, cheap-to-run SUV. Excellent value against Japanese/Korean rivals and well suited to Albanian road conditions.",
        "price": "$17,500–22,000 FOB"
      },
      {
        "rank": 3,
        "name": "BYD Atto 3 (Yuan Plus)",
        "desc": "The EV of choice for Albanian urban buyers, with a strong warranty, fast charging, and the runs-cheap economics that fit the market. Increasingly common in Tirana.",
        "price": "$21,500–26,500 FOB"
      },
      {
        "rank": 4,
        "name": "Chery Tiggo 7 Pro",
        "desc": "Mid-size SUV for families, with good kit and a reputation for reliability that is making it a dealer favourite. Solid choice for highway commuting and coastal routes.",
        "price": "$20,500–26,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full specifications",
          "Certificate of Origin (CO) — CCPIT certified",
          "Packing list with container layout diagram",
          "Bill of Lading",
          "Inspection report and photo record"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Buyer ID or business registration for commercial import",
          "Customs declaration at Durrës port",
          "Certificate of Origin for duty preference",
          "Technical safety inspection certificate",
          "NIPT tax ID and registration documents",
          "Vehicle registration with Ministry of Transport"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "No Age Ban — More Choice",
        "desc": "Albania's open rules let us find you the sweet spot between price and condition. Buy a 3-5 year old Chinese SUV and skip the biggest depreciation without touching higher taxes."
      },
      {
        "title": "Durrës Delivery Network",
        "desc": "Both RoRo and container routes converge on Durrës, where our partner brokers handle clearance, inspection bookings, and inland delivery across Albania."
      },
      {
        "title": "Dealer-Ready Programme",
        "desc": "Volume importers get factory-allocated new vehicles with transferable warranties, EU-aligned certificates of origin, and consolidated shipping economics."
      },
      {
        "title": "EV Economics Done Right",
        "desc": "We guide you through the full cost picture — tax bands, charging, and resale — so an EV genuinely saves money versus petrol in your specific use case."
      }
    ],
    "faqItems": [
      {
        "q": "What is the total tax burden importing a car to Albania?",
        "a": "For a typical used vehicle, expect total import taxes of roughly 25-40% of CIF value, composed of import duty (based on CIF and emissions band) plus 20% VAT. New EVs pay less because their emissions-based surcharge is minimal."
      },
      {
        "q": "Is there an age limit for used cars in Albania?",
        "a": "No. Albania does not impose a hard age cap on used vehicle imports. Vehicles are taxed on CIF value and an emissions/engine band, so older cars remain legal to import and register."
      },
      {
        "q": "Are Chinese LHD cars legal in Albania?",
        "a": "Yes. Albania drives on the right, so all factory left-hand-drive Chinese vehicles import and register without modification."
      },
      {
        "q": "What Chinese car brands sell best in Albania?",
        "a": "Haval (Jolion, H6), Geely (Coolray), Chery (Tiggo 7/8) and BYD in the EV segment lead current demand. Dealers are rapidly adding these brands to their showrooms."
      },
      {
        "q": "How long does shipping from China to Albania take?",
        "a": "Around 28-35 days via the RoRo hub-and-feeder route through Piraeus or Valencia to Durrës. Container shipping typically takes 32-40 days."
      },
      {
        "q": "Can I import an electric vehicle from China to Albania?",
        "a": "Yes, and it is tax-advantaged. EVs pay a minimal emissions surcharge and avoid fuel-type duties, putting their landed cost 10-15% below an equivalent petrol model."
      },
      {
        "q": "What documents do I need to import a car to Albania?",
        "a": "A commercial invoice, certificate of origin, bill of lading, customs declaration, your NIPT tax ID (or business registration), and, after clearance, a technical safety inspection and registration."
      },
      {
        "q": "Is it cheaper to ship RoRo or in a container to Albania?",
        "a": "RoRo is best for a single new vehicle and is gentler on the bodywork. Containers are cheaper when shipping two vehicles at once and give better protection for used cars. We advise per vehicle."
      },
      {
        "q": "Do I need a VAT number to import commercially?",
        "a": "Yes. Commercial importers need a valid Albanian NIPT/VAT registration. Private individuals can import a vehicle for personal use with ID plus a pro-forma declaration."
      },
      {
        "q": "How is the imported car registered in Albania?",
        "a": "After customs clearance at Durrës, the vehicle must pass a technical safety inspection, then be registered with the Ministry of Transport. Cargration brokers arrange inspection slots and paperwork."
      },
      {
        "q": "Can I finance the import through Cargration?",
        "a": "We support staged payments for orders: deposit, balance on shipment, and final payment on documentation delivery. Bank financing is arranged locally by the buyer."
      },
      {
        "q": "What about import from China of classic or niche cars to Albania?",
        "a": "Open rules make it feasible. We can source rare trims, commercial vans, and specialised vehicles; confirm the technical inspection criteria before you commit."
      }
    ]
  },
'cameroon':   {
    "slug": "cameroon",
    "heroTitle": "Ship cars from China to Cameroon with realistic duty estimates and direct RoRo to Douala.",
    "heroDesc": "Cameroon is Central Africa's main gateway market, with the Port of Douala serving a vast hinterland that includes Chad, the Central African Republic, and northern Congo. Chinese SUVs, pickups, and minibuses have become the backbone of Cameroon's personal and commercial fleet thanks to their ruggedness, value, and oil-efficient diesel options. Import rules allow used left-hand-drive vehicles with an age cut-off that changes periodically — currently under 10 years is the practical benchmark. Cargration ships used and new vehicles by RoRo and container to Douala, with customs support and inland delivery across Cameroon.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 780,
        "label": "Cars to Cameroon"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 3,
        "label": "Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 93,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 38,
        "label": "Days Transit"
      }
    ],
    "dutyCalcDescription": "Cameroon uses the CEMAC customs tariff, applied to CIF value (Cost + Insurance + Freight). Passenger vehicles face customs duty plus several surcharges: an import surcharge, the CEMAC/VAT-equivalent levy, and a road/municipal tax. All-in tax typically lands between 35% and 50% of CIF for used cars depending on engine size and vehicle age.",
    "importTabs": [
      {
        "label": "Standard — Used Vehicle",
        "infoBox": "Cameroon accepts used left-hand-drive vehicles from China, with a practical age limit near 10 years for smooth clearance. Duty is a combination of the CEMAC tariff and surcharges on CIF value.",
        "bullets": [
          "Used vehicles up to ~10 years old clear most easily",
          "CEMAC customs duty based on CIF value",
          "Import surcharge and infrastructure levy apply",
          "VAT-equivalent applies on larger vehicles",
          "Left-hand-drive (LHD) required — Cameroon drives on the right",
          "Diesel and petrol 4x4s both in demand",
          "Documents: invoice, certificate of origin, bill of lading"
        ],
        "extraText": "SUVs and pickups face the highest demand; Toyota-class reliability favourites (Hilux, Prado) have Chinese equivalents at half the price that are now trusted across the region."
      },
      {
        "label": "Commercial — Dealers & Fleets",
        "infoBox": "Dealer networks in Douala and Yaoundé import multi-vehicle containers and RoRo lots. Commercial importers must hold a business licence and cargo can be consolidated for tax-efficient clearance.",
        "bullets": [
          "Business registration (RCCM) required for commercial import",
          "Customs drawback programmes available for re-export",
          "Multi-vehicle container loading (4 per 40HQ)",
          "Consolidated CIF lowers per-unit duty",
          "Volume pricing on Haval, JAC, Changan, and GWM SUVs",
          "Ministerial authorisation for fleet imports"
        ],
        "extraText": "Douala-based importers with steady volume regularly achieve wholesale terraces with Cargration; we can consolidate dealer orders into single sailings."
      },
      {
        "label": "EV & Green Niche",
        "infoBox": "Electric vehicles carry a lighter relative tax burden in Cameroon, and CNG-converted taxis are becoming common in Yaoundé. EV adoption is early but growing for enterprise fleets.",
        "bullets": [
          "EVs sized below 1,000cc-equivalent often dodge the surcharge tiers",
          "Lower VAT-equivalent on EV imports in several CEMAC niches",
          "Charging limited to Douala and Yaoundé",
          "Best for company pools and urban delivery",
          "Diesel-to-CNG options gain ground for taxis",
          "BYD, Wuling and Dongfeng EV options available"
        ],
        "extraText": "The real market is diesel reliability: JAC and Changan heavy pickups dominate commercial demand, while EV pools are being tested by the larger telecoms and energy firms."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Direct RoRo — Shanghai → Douala",
        "summary": "The most reliable way into Cameroon. RoRo carriers sailing from Asia directly to Douala call on a fixed schedule and handle both new and used vehicles with minimal body damage risk.",
        "details": [
          "Transit time: 33–40 days door to door",
          "Direct RoRo service with vehicle-deck handling",
          "Douala is the primary CEMAC gateway",
          "Best for single vehicles and dealer lots",
          "Inland trucking from Douala to Yaoundé arranged"
        ]
      },
      {
        "icon": "🚢",
        "title": "Container Shipping — Shanghai → Douala (40HQ)",
        "summary": "The volume option used by dealers. Up to four crossovers or two 4x4 pickups per 40ft high-cube, fully lashed and chocked, with all documentation handled before sailing.",
        "details": [
          "Transit time: 36–45 days door to door",
          "2–4 vehicles per 40ft container depending on size",
          "Full lashing and protective wrapping included",
          "Best for multi-vehicle dealer orders",
          "Lower CIF per unit = lower per-unit duty"
        ]
      },
      {
        "icon": "🚢",
        "title": "Groupage via other CEMAC ports (Kribi)",
        "summary": "For inland destinations and neighbouring markets, we can route via Kribi deep-water port or onward truck to Chad/CAR, matching the least congested clearance channel.",
        "details": [
          "Transit time: 38–48 days door to door",
          "Kribi offers capacity relief during Douala congestion",
          "Onward trucking to Garoua, N'Djamena, Bangui",
          "Customs bonding for re-export programmes",
          "Tailored for NGO and contractor fleets"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "Haval H6",
        "desc": "The default mid-size SUV for Cameroonian families and executives. Robust, high-ground-clearance, strong AC, and priced around half a comparable Japanese SUV. Diesel variants are the fleet favourite.",
        "price": "$23,500–30,000 FOB"
      },
      {
        "rank": 2,
        "name": "JAC T8 / T9 Pickup",
        "desc": "Workhorse double-cab pickup that competes directly with the Hilux at two-thirds the price. The T8 in diesel form leads commercial demand inside Cameroon and across the CEMAC region.",
        "price": "$19,500–25,500 FOB"
      },
      {
        "rank": 3,
        "name": "Changan CS75 Plus",
        "desc": "Reliable compact SUV popular with urban buyers. Good part availability through Changan's African network and a strong reputation for long service intervals.",
        "price": "$18,000–23,000 FOB"
      },
      {
        "rank": 4,
        "name": "Geely Coolray",
        "desc": "Compact crossover for city motoring in Douala and Yaoundé, sought after by younger buyers. Light on fuel, easy to park, and low on maintenance niggles.",
        "price": "$16,500–21,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full specifications",
          "Certificate of Origin (CO) — CCPIT certified",
          "Packing list with container layout",
          "Bill of Lading",
          "Inspection report and photo record"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Cameroonian ID or business registration (RCCM)",
          "Customs declaration at Douala",
          "Certificate of Origin for CEMAC duty preference",
          "Vehicle technical inspection after clearance",
          "Road tax and insurance stamp",
          "Registration document (carte grise)"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "Douala Clearance Experts",
        "desc": "Our partner brokers clear hundreds of Chinese vehicles a year through Douala, handling the CEMAC tariff tangle so your car lands registered and road-ready."
      },
      {
        "title": "Terrain-Ready Sourcing",
        "desc": "We source high-ground-clearance SUVs, diesel 4x4s and rugged pickups matched to Cameroonian roads, verifying underbody and cooling systems before loading."
      },
      {
        "title": "Dealer Consolidation",
        "desc": "Multi-vehicle containers and RoRo lots give dealers wholesale economics and per-unit duty savings they cannot get importing single cars."
      },
      {
        "title": "Inland Reach",
        "desc": "From Douala we arrange trucking to Yaoundé, Garoua and beyond into Chad and CAR — the same corridor our NGO partners use."
      }
    ],
    "faqItems": [
      {
        "q": "How much tax do I pay importing a car to Cameroon?",
        "a": "Budget on 35-50% of CIF value all-in. This is composed of the CEMAC customs duty, an import surcharge, a road/infrastructure levy, and VAT-equivalent applied to most vehicles."
      },
      {
        "q": "What is the age limit for used cars in Cameroon?",
        "a": "There is no absolute prohibition, but vehicles under 10 years old clear customs most reliably and pay the standard CEMAC rates. Older vehicles can draw additional inspection scrutiny."
      },
      {
        "q": "Are left-hand-drive (LHD) Chinese cars legal in Cameroon?",
        "a": "Yes. Cameroon drives on the right and LHD vehicles import, register, and resell without modification."
      },
      {
        "q": "Which Chinese brands are most popular in Cameroon?",
        "a": "Haval (H6 and Jolion), JAC (T8/T9 pickups), Changan (CS75) and Geely (Coolray) lead demand. Diesel pickups are the biggest commercial seller."
      },
      {
        "q": "How long does shipping from China to Douala take?",
        "a": "Direct RoRo takes 33-40 days; container shipping typically 36-45 days door to door from Shanghai."
      },
      {
        "q": "Can I import an electric vehicle from China to Cameroon?",
        "a": "Yes. EVs face a lighter relative tax load and are used for enterprise fleets in Douala and Yaoundé, though public charging is still very limited."
      },
      {
        "q": "What documents do I need to clear a car at Douala?",
        "a": "A commercial invoice, certificate of origin, bill of lading, your ID or RCCM registration, and after clearance a technical inspection plus road tax and insurance."
      },
      {
        "q": "Can I import vehicles for resale in Cameroon?",
        "a": "Yes. Dealers register with the RCCM and may import both new and used units. Volume importers get consolidated CIF economics and customs drawback for re-exports."
      },
      {
        "q": "Do you arrange inland delivery in Cameroon?",
        "a": "Yes. After Douala clearance we arrange insured trucking to Yaoundé, Garoua, Bamenda, N'Djamena (Chad) or Bangui (CAR) with our partner hauliers."
      },
      {
        "q": "Are Chinese cars reliable on Cameroonian roads?",
        "a": "With proper sourcing — which we verify before loading — Chinese SUVs and pickups hold up well. Key checks are cooling, tyres, and underbody protection, which we cover in inspection."
      },
      {
        "q": "What is the difference between tax on petrol and diesel imports?",
        "a": "Duty is set on CIF and engine size rather than fuel type, but diesel 4x4s dominate because of real-world fuel economy and torque on bad roads. EVs attract lower relative surcharges."
      },
      {
        "q": "How does Cargration help with customs at Douala?",
        "a": "We pre-ship documentation in CEMAC format, co-ordinate with our Douala broker, and give you the full landed-cost estimate before you pay, so clearance is a formality."
      }
    ]
  },
'dr-congo':   {
    "slug": "dr-congo",
    "heroTitle": "Import cars from China to the Democratic Republic of Congo with landlocked routing via Matadi or Dar es Salaam.",
    "heroDesc": "The Democratic Republic of the Congo is one of the largest and fastest urbanising markets in Central Africa, anchored by Kinshasa and the mining provinces of Katanga. Chinese SUVs and 4x4 pickups lead demand for their toughness on unpaved roads, strong diesel options, and unmatched value against Japanese rivals. Because the DRC is landlocked, vehicles arrive through two main corridors: the Atlantic route via Matadi (west), or the Indian Ocean route via Dar es Salaam/Tanzania (east, serving the mining belt). Cargration handles sourcing, inspection, documentation, and corridor selection, with customs support at both entry points.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 1200,
        "label": "Cars to DRC"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Corridors Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 92,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 42,
        "label": "Days Transit (Sea + Overland)"
      }
    ],
    "dutyCalcDescription": "Congolese Customs (OGEFREM-assisted) taxes imported vehicles on CIF value (Cost + Insurance + Freight). Costs include customs duty, an import/excise component, the green card and road tax, and freight handling fees. All-in tax for used vehicles typically lands between 40% and 55% of CIF depending on engine size and corridor.",
    "importTabs": [
      {
        "label": "Standard — Used Vehicle",
        "infoBox": "The DRC accepts used LHD vehicles from any recognised exporter. Vehicles are taxed on CIF value and duty is applied per engine band. Corridor clearance differs: Matadi serves Kinshasa; Dar es Salaam feeds the mining east.",
        "bullets": [
          "No hard age ban, but sub-10-year vehicles clear fastest",
          "Customs duty based on CIF and engine size",
          "Road tax (Le droit de timbre) and green card apply",
          "Left-hand-drive (LHD) — DRC drives on the right",
          "Diesel 4x4s and SUVs carry the highest resale value",
          "Documents: invoice, certificate of origin, bill of lading",
          "Corridor choice depends on final destination province"
        ],
        "extraText": "For Kinshasa, Matadi is the fastest and cheapest. For Lubumbashi and the mining belt, Dar es Salaam to Kasumbalesa (Zambia border) via Lake Tanganyika or road is the preferred lane."
      },
      {
        "label": "Commercial — Dealers & Mining Fleets",
        "infoBox": "Dealers and mining contractors import in volume. A commercial licence (registre de commerce / RCC consent) is required, and consolidated containers reduce per-unit CIF duty. Mining companies enjoy streamlined clearance incentives.",
        "bullets": [
          "Commercial import licence required for dealers",
          "Multi-vehicle containers (2-4 units per 40HQ)",
          "Consolidated CIF lowers per-unit duty",
          "Mining-sector duty incentives for fleet vehicles",
          "Volume pricing on Haval, JAC, and GWM double-cabs",
          "NGO priority clearance lanes via agreed costs"
        ],
        "extraText": "The Kolwezi mining corridor is shifting toward Chinese 4x4s and heavy pickups — the combination of duty economics and parts availability beats classic brands for fleet operators."
      },
      {
        "label": "EV & Green Fleet",
        "infoBox": "The DRC mines the lithium and cobalt that power EVs, and early fleet adoption is underway among mining service companies. EV import tax is comparatively lighter, and solar+storage sites support charging.",
        "bullets": [
          "EVs attract lower relative duty bands",
          "Mining-energy synergy boosts EV fleet trials",
          "Charging via company solar installations",
          "BYD and Dongfeng EV options for company pools",
          "Green certificate documentation available"
        ],
        "extraText": "Tax tip: the DRC's own electric-vehicle mineral wealth makes green fleets a branding win for mining suppliers — and the duty saving is real."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Atlantic — Shanghai → Matadi (RoRo/Container)",
        "summary": "The route to Kinshasa and western DRC. Vehicles sail direct RoRo or container to Matadi, clear OGEFREM customs, then continue by road or barge to Kinshasa. Reliable and the default for private buyers.",
        "details": [
          "Transit time: 38–48 days door to door",
          "Direct RoRo and container husbandry to Matadi",
          "Kinshasa feeder by road (~350km) or river barge",
          "Best for the west and national capital demand",
          "Customs broker support in Matadi throughout"
        ]
      },
      {
        "icon": "🚢",
        "title": "East Africa — Shanghai → Dar es Salaam → Lubumbashi",
        "summary": "The mining belt route. Cars transit Tanzania overland to the Zambian border (Kasumbalesa) then enter the DRC, feeding Lubumbashi, Likasi, and Kolwezi. Ideal for mining and agricultural fleets.",
        "details": [
          "Transit time: 45–55 days door to door (mine gate)",
          "Dar es Salaam to Kasumbalesa road/rail corridor",
          "Lake Tanganyika barge alternative for central east",
          "Best for Katanga mining fleet demand",
          "Bonded clearance to reduce zone delays"
        ]
      },
      {
        "icon": "🚢",
        "title": "Groupage & Mining Consolidation",
        "summary": "Mining companies and big dealers consolidate multi-vehicle orders into single sailings and bonded truck convoys to the Katanga belt, cutting cost and clearing time significantly.",
        "details": [
          "Transit time: 50–60 days door to door",
          "Volume pricing locked for 10+ units",
          "Priority berthing at Matadi/Dar",
          "Bonded customs organisation end-to-end",
          "Full mining-flora documentation handled"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "Haval H6",
        "desc": "The leading Chinese SUV in Kinshasa, prized for comfort, boot space, and durability. Diesel variants are preferred by taxi-van operators; the 4WD holds rural territory well.",
        "price": "$23,000–30,000 FOB"
      },
      {
        "rank": 2,
        "name": "JAC T8 / T9 Pickup",
        "desc": "The double-cab workhorse of Katanga mining. Rugged diesel engines, big payloads, and pricing well under the Hilux make it the fleet default from Lubumbashi to Likasi.",
        "price": "$19,500–25,500 FOB"
      },
      {
        "rank": 3,
        "name": "Changan CS75 Plus",
        "desc": "Reliable compact SUV with strong aftersales reach in DRC. Good ground clearance for worn urban roads and the right size-to-value ratio Kinshasa buyers look for.",
        "price": "$18,000–23,000 FOB"
      },
      {
        "rank": 4,
        "name": "GWM Tank 300",
        "desc": "Off-road 4x4 that has become the status SUV for executives and mining site managers. True crawl capability at a fraction of a Land Cruiser's price.",
        "price": "$27,000–34,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full specifications",
          "Certificate of Origin (CO) — CCPIT certified",
          "Packing list with container layout",
          "Bill of Lading",
          "Inspection report and photo record"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Congolese ID or business registration (RCC)",
          "Customs declaration at Matadi or Dar es Salaam",
          "Certificate of Origin for duty calculation",
          "Green card / road tax payment",
          "Technical inspection after clearance",
          "Registration with provincial transport"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "Corridor Intelligence",
        "desc": "We route to Kinshasa via Matadi or to the mining east via Dar es Salaam based on real clearance times, so your vehicle never sits in the wrong port for its destination."
      },
      {
        "title": "Terrain-Proof Sourcing",
        "desc": "High-ground-clearance 4x4s and diesel double-cabs sourced and inspected for DRC roads — underbody, cooling and tyres verified before loading."
      },
      {
        "title": "Mining-Fleet Expertise",
        "desc": "We consolidate mining and contractor fleets end-to-end, from factory allocation to bonded clearance in Katanga."
      },
      {
        "title": "Landlocked Logistics",
        "desc": "From Matadi barges to the Kasumbalesa corridor, our partners move cars the last 1,000+ km inland without surprises."
      }
    ],
    "faqItems": [
      {
        "q": "How much tax is applied to imported cars in the DRC?",
        "a": "Budget 40-55% of CIF value all-in. This includes customs duty, excise, green card/road tax, and handling charges; amounts vary by engine size and corridor."
      },
      {
        "q": "Is there an age limit for used cars imported to DRC?",
        "a": "No hard ban, but vehicles under 10 years old clear customs fastest. Older units face additional inspection. We recommend sourcing 5-year-old vehicles for the best value-to-duty ratio."
      },
      {
        "q": "Are LHD Chinese cars legal in the DRC?",
        "a": "Yes. The DRC drives on the right, and factory left-hand-drive Chinese vehicles import and register without conversion."
      },
      {
        "q": "Which Chinese car brands sell best in the DRC?",
        "a": "Haval (H6), JAC (T8/T9 pickups), Changan (CS75) and GWM (Tank 300) are the volume sellers, with diesel 4x4s dominating in Katanga."
      },
      {
        "q": "How long does shipping from China to the DRC take?",
        "a": "Kinshasa via Matadi: 38-48 days. The mining east via Dar es Salaam: 45-55 days to Lubumbashi/Kolwezi. Groupage mining runs take up to 60 days end to end."
      },
      {
        "q": "Can I import an electric vehicle from China to the DRC?",
        "a": "Yes. EVs face a lighter duty band and are being adopted by mining service fleets that can charge from solar-plus-storage installations."
      },
      {
        "q": "What documents do I need to clear a car at Matadi?",
        "a": "Commercial invoice, certificate of origin, bill of lading, customs declaration, road tax/green card, and your ID or RCC registration."
      },
      {
        "q": "Can I import vehicles for resale in the DRC?",
        "a": "Yes. Dealers register commercially and import both new and used units. Volume importers consolidate containers to cut per-unit CIF duty."
      },
      {
        "q": "Which corridor serves Lubumbashi and the mining belt?",
        "a": "The Indian Ocean route via Dar es Salaam (Tanzania) into Kasumbalesa (Zambia border) and overland to Lubumbashi, Likasi, and Kolwezi."
      },
      {
        "q": "Do you arrange overland delivery inside the DRC?",
        "a": "Yes. After clearance we arrange insured trucking and, where efficient, river-barge feeder to Kinshasa plus road connections across Katanga."
      },
      {
        "q": "Are Chinese vehicles reliable on Congolese roads?",
        "a": "Yes when properly sourced. We verify cooling, tyres and underbody protection before loading, and diesel 4x4s prove themselves daily on the mining corridors."
      },
      {
        "q": "Does Cargration handle NGO and UN fleets in the DRC?",
        "a": "Yes. We have served NGO and humanitarian operations in the DRC with priority fleet allocation, bonded clearance, and tail-of-route logistics support."
      }
    ]
  },
'ethiopia':   {
    "slug": "ethiopia",
    "heroTitle": "Ship cars from China to Ethiopia with EV-first incentives and routing via Djibouti.",
    "heroDesc": "Ethiopia is Africa's most ambitious electric-vehicle market and one of the world's fastest growing economies. The government has committed to EV-priority import policy — including reduced duties on electric vehicles — while heavily taxing new petrol vehicles, making Chinese EVs and hybrids the smartest imports by far. Vehicles reach Ethiopia through the Port of Djibouti and the rail/road corridor to Addis Ababa. Strict age regulations (sub-5-year used cars for most classes) and environmental standards shape the market. Cargration specialises in EV-priority sourcing, LHD certification, and Djibouti-corridor logistics with customs support.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 1100,
        "label": "Cars to Ethiopia"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 1,
        "label": "Gateway Port"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 90,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 28,
        "label": "Days Transit"
      }
    ],
    "dutyCalcDescription": "Ethiopian Customs taxes vehicles on CIF value (Cost + Insurance + Freight). The headline: internal/internal-external vehicles face customs duty + excise tax + VAT + surtax, and petrol cars are taxed far harder than electric. Electric vehicles enjoy a substantially reduced duty band; internal-combustion vehicles typically land in the 250-300% tax-plus range for new cars, while EVs land materially lower.",
    "importTabs": [
      {
        "label": "EV Priority — The Smart Import",
        "infoBox": "Ethiopia's policy leans heavily toward electric vehicles to combat fuel-import costs and power an electrified future. EVs (and to a lesser degree hybrids) carry preferential duty bands and excise relief, making them the clear value choice.",
        "bullets": [
          "EVs attract substantially lower customs duty bands",
          "Reduced excise and VAT-equivalent on many EV classes",
          "New EV purchases qualify for preferential lanes",
          "Charging buildout under national programme in Addis",
          "BYD, MG, Dongfeng and Wuling EV models popular",
          "Documents: invoice, certificate of origin, bill of lading"
        ],
        "extraText": "The result: a new BYD Atto 3 can land close to a third cheaper than an equivalent petrol SUV after tax. EV is the rational choice for Ethiopian importers."
      },
      {
        "label": "Standard — Sub-5-Year Used",
        "infoBox": "Used imports are restricted to recent vehicles (broadly under 5 years for passenger cars) with strict emissions rules. These face heavy duty but remain the affordable route for private buyers car-shopping in budget segments.",
        "bullets": [
          "Used cars under 5 years old are the practical import band",
          "Emissions/engine standards enforced at inspection",
          "Excise escalates with engine size",
          "Diesel passenger cars face the highest duty",
          "Left-hand-drive (LHD) — Ethiopia drives on the right",
          "Popular affordable: Geely Coolray, Chery Tiggo 4"
        ],
        "extraText": "5-year-old Japanese and Chinese sedans clear successfully, but total duty can exceed 200% CIF — budget carefully or go EV."
      },
      {
        "label": "Commercial — Dealers & Taxi Fleets",
        "infoBox": "Dealers and taxi operators importing volume EV fleets under the national programme can leverage enterprise terms, preferred EV allocation, and simplified customs for fleet registrations.",
        "bullets": [
          "Business import licence required (MoTI)",
          "EV fleet allocations from Chinese factories",
          "Consolidated container economics for 2-4 EVs",
          "Taxi-replacement incentives support EV fleets ahead",
          "Installed charging solutions at fleet depots",
          "Volume pricing across builder fleets"
        ],
        "extraText": "Addis's taxi and ride-hailing operators are electrifying quickly; handed strong EV supply terms, fleets save on both duty and fuel over the vehicle lifetime."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Djibouti Corridor — Shanghai → Djibouti → Addis Ababa",
        "summary": "The lifeblood of Ethiopian imports. Vehicles sail RoRo or container from Shanghai to Djibouti, then travel the standard-gauge rail and sealed-road corridor to Addis Ababa. Fast, reliable and well-tested.",
        "details": [
          "Transit time: 24–34 days door to door",
          "RoRo and container options",
          "Djibouti–Addis rail leg ~2 days (container rail)",
          "Road convoy alternative for RoRo-delivered cars",
          "Customs clearance at Moen/Hora handling"
        ]
      },
      {
        "icon": "🚢",
        "title": "Container Route — Optimised EV Groupage",
        "summary": "EVs ship cleanly in containers to protect battery packs and paintwork. Two EVs per 40ft high-cube with battery-verified customs documentation, feeding the dedicated EV corridor.",
        "details": [
          "Transit time: 26–32 days door to door",
          "Battery-safe container handling",
          "2 EVs per 40ft container",
          "EV certificate of origin for duty preference",
          "Preferred EV clearance lanes"
        ]
      },
      {
        "icon": "🚂",
        "title": "Rail-Bonded Fleet Runs",
        "summary": "For dealer and taxi-fleet volume, we consolidate lots into bonded container trains from Djibouti to Addis, cutting handling and accelerating clearance.",
        "details": [
          "Transit time: 28–35 days door to door",
          "Bonded container rail service",
          "Fleet pricing for 12+ units",
          "Priority customs for EV fleets",
          "Inland delivery across the Addis ring"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "BYD Atto 3 (Yuan Plus)",
        "desc": "Ethiopia's best-selling imported EV. Preferential duty, long range for the plateau, and a strong charging partnership story make it the electric default for Addis buyers.",
        "price": "$20,500–25,500 FOB"
      },
      {
        "rank": 2,
        "name": "BYD Dolphin",
        "desc": "Compact EV hatchback for city mobility and ride-hailing fleets. The most frugal import choice after tax, matching the national EV push.",
        "price": "$14,500–18,500 FOB"
      },
      {
        "rank": 3,
        "name": "MG ZS EV",
        "desc": "Practical small-SUV EV for families, balancing range, equipment and ground clearance — a favourite of dealer EV showrooms in Addis Ababa.",
        "price": "$18,500–23,500 FOB"
      },
      {
        "rank": 4,
        "name": "Geely Coolray",
        "desc": "The affordable petrol alternative for private buyers not ready for a full EV, easing into the market while keeping duty low relative to large-engined imports.",
        "price": "$16,500–21,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full specifications",
          "Certificate of Origin (CO) — CCPIT certified",
          "Battery/EV conformity document where applicable",
          "Packing list with container layout",
          "Bill of Lading"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Buyer ID or MoTI business registration",
          "Customs declaration at Djibouti/Addis clearing house",
          "Certificate of Origin for EV duty preference",
          "Inspection (emissions/age) certificate",
          "Surtax/excise receipts",
          "Registration with Ministry of Transport"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "EV-Forward Strategy",
        "desc": "We steer every Ethiopia order toward the vehicles that face the lightest tax — EVs and hybrids — so you capitalise on the national EV policy rather than fighting it."
      },
      {
        "title": "Djibouti-Corridor Mastery",
        "desc": "We run hundreds of vehicles a year through Djibouti rail and road, with preferred EV clearance lanes and bonded containers for fleets."
      },
      {
        "title": "Battery-Safe Handling",
        "desc": "EVs ship with battery-conformity paperwork, container padding, and temperature-safe routing — protecting both hardware and duty status."
      },
      {
        "title": "Fleet & Taxi Programmes",
        "desc": "Ride-hailing and taxi operators get factory EV allocation, consolidated shipping, and depot charging solutions as one package."
      }
    ],
    "faqItems": [
      {
        "q": "How much tax applies to importing a car into Ethiopia?",
        "a": "Petrol vehicles commonly land in the 250-300% tax-plus range of CIF value. EVs attract materially lower duty bands plus excise relief, which is why EV is the rational import."
      },
      {
        "q": "What is the age limit for used cars in Ethiopia?",
        "a": "Used imports are practically limited to vehicles under around 5 years old for smooth clearance, with strict emissions checks on older units."
      },
      {
        "q": "Is importing an EV really cheaper than petrol in Ethiopia?",
        "a": "Yes. Preferential duty and excise relief mean a new BYD Atto 3 can land close to a third cheaper than an equivalent petrol SUV after tax."
      },
      {
        "q": "Which Chinese car brands are best for Ethiopia?",
        "a": "BYD (Atto 3, Dolphin) and MG (ZS EV) lead EV demand; Geely (Coolray) is the top affordable petrol seller. Wuling and Dongfeng serve budget and commercial niches."
      },
      {
        "q": "How long does shipping from China to Ethiopia take?",
        "a": "24-34 days door to door via Djibouti. Container EV routes take 26-32 days; bonded fleet runs 28-35 days."
      },
      {
        "q": "Do I need a business licence to import vehicles to Ethiopia?",
        "a": "Commercial importers need MoTI registration. Private individuals may import for personal use with ID, subject to age and emissions rules."
      },
      {
        "q": "What documents are required at Ethiopian customs?",
        "a": "Commercial invoice, certificate of origin, bill of lading, customs declaration, emissions/age inspection certificate, and payment of surtax/excise."
      },
      {
        "q": "How are vehicles charged in Addis Ababa?",
        "a": "A growing network of fast and destination chargers is being deployed; fleet operators often pair with solar storage at depots. Urban charging is the practical domain."
      },
      {
        "q": "Can I import a diesel vehicle to Ethiopia?",
        "a": "Yes, but diesel passenger cars carry the highest duty bands and increasingly strict emissions rules. EVs and petrol hybrids remain the value path."
      },
      {
        "q": "Are LHD vehicles legal in Ethiopia?",
        "a": "Yes. Ethiopia drives on the right; all factory left-hand-drive Chinese vehicles are compliant without modification."
      },
      {
        "q": "How does Cargration verify EV battery health on used exports?",
        "a": "Each used EV is battery-tested (SoH report) before loading, with the certificate included in the documentation kit — protecting your duty status and resale value."
      },
      {
        "q": "Can taxi and ride-hailing operators import EV fleets through Cargration?",
        "a": "Yes, via our fleet programme: factory EV allocation, consolidated containers, bonded corridor clearance, and depot charging setup."
      }
    ]
  },
'jamaica':   {
    "slug": "jamaica",
    "heroTitle": "Import cars from China to Jamaica with straightforward duty bands and direct shipping to Kingston.",
    "heroDesc": "Jamaica is the largest English-speaking Caribbean vehicle market, with a mature used-car culture fed by imports through the Port of Kingston. Chinese SUVs and crossovers — available in right-hand-drive (RHD) where required — have grown quickly as cost-effective alternatives to traditional Japanese imports. Jamaica takes a no-nonsense approach to duties: a manageable customs duty band plus a Special Consumption Tax (SCT) scaled by engine size, and GCT (VAT). Cargration ships both new and used units to Kingston with RHD sourcing support, inspections, and customs documentation, serving dealers across the island.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 500,
        "label": "Cars to Jamaica"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 1,
        "label": "Port Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 95,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 40,
        "label": "Days Transit"
      }
    ],
    "dutyCalcDescription": "Jamaican Customs (JCA) assesses vehicles on CIF value (Cost + Insurance + Freight). Costs include customs duty, Special Consumption Tax (SCT) — which rises steeply with engine displacement — and General Consumption Tax (GCT, effectively VAT). All-in tax for a typical 2.0L crossover lands near 40-50% of CIF; larger engines climb higher via the SCT ladder.",
    "importTabs": [
      {
        "label": "Standard — Used Vehicle",
        "infoBox": "Jamaica accepts used imports (a market norm) with age-based rules that favour cars roughly under 10 years. Duty and SCT are based primarily on engine size and value, making mid-size Chinese crossovers very competitive.",
        "bullets": [
          "Used imports commonplace; under-10-year vehicles preferred",
          "Customs duty on CIF value",
          "SCT escalates with engine displacement",
          "GCT (VAT) applied on the taxed value",
          "RHD required — Jamaica drives on the left",
          "Documents: invoice, certificate of origin, bill of lading",
          "Motor Vehicle Authority inspection and registration after clearance"
        ],
        "extraText": "The sweet spot is a 1.5-2.0L RHD crossover, which keeps SCT moderate while delivering the space and equipment buyers want."
      },
      {
        "label": "New & Dealer Imports",
        "infoBox": "Authorised and multi-brand dealers import new units with manufacturer support. Dealers must be licensed with the Trade Board, and new cars benefit from cleaner paperwork and full factory warranties.",
        "bullets": [
          "Trade Board import licence for dealers",
          "New units with transferable factory warranty",
          "Simplified verification (no age-based surcharges)",
          "RoRo and container volume terms",
          "Multi-brand allocation (BYD, Haval, GAC, Chery)",
          "Consolidated duty via volume lanes"
        ],
        "extraText": "Jamaican dealer adoption of Chinese brands is accelerating; new-car showrooms in Kingston now stock Haval, BYD and GAC models profitably."
      },
      {
        "label": "EV & Hybrid Incentive",
        "infoBox": "Jamaica has progressively cut the SCT burden on electric and hybrid vehicles, making them notably cheaper to land than equivalent petrol cars. Public charging is growing in Kingston and Montego Bay.",
        "bullets": [
          "EVs and hybrids carry reduced SCT",
          "Lower overall effective duty",
          "Growing charging network in KJMC corridor",
          "BYD, MG and Wuling EV models available",
          "New EV import often beats diesel on total cost"
        ],
        "extraText": "An imported BYD Dolphin or MG4 lands at a meaningful discount beneath an equivalent petrol hatchback thanks to the SCT relief, plus daily running savings."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "RoRo — Shanghai → Kingston",
        "summary": "Direct RoRo runs from Asian loading ports to Kingston on scheduled services. Gentle deck handling makes it ideal for new vehicles and keeps transit reliable.",
        "details": [
          "Transit time: 34–42 days door to door",
          "Vehicle-deck handling protects bodywork",
          "Scheduled monthly services",
          "Best for single vehicles and flows to dealers",
          "Port-kingston customs and inland haulage arranged"
        ]
      },
      {
        "icon": "🚢",
        "title": "Container Shipping — Shanghai → Kingston (40HQ)",
        "summary": "The value route for used cars: up to two cars per 40ft high-cube with lashings, wheel chocks and protective wrapping. Ideal for private buyers and small dealers.",
        "details": [
          "Transit time: 38–48 days door to door",
          "2 vehicles per 40ft container",
          "Protective shrouds and tie-downs included",
          "Good cost for mid-size crossovers",
          "Inland delivery across Jamaica arranged"
        ]
      },
      {
        "icon": "🚢",
        "title": "Groupage — Dealer Consolidation via Kingston",
        "summary": "Dealers consolidating 5+ units ship dedicated RoRo/container lots, lowering per-unit freight and coordinating delivery for maximum profit margins.",
        "details": [
          "Transit time: 36–46 days door to door",
          "5+ unit consolidation pricing",
          "Priority vessel allocation",
          "Dealer-specific documentation",
          "Income to Jamaican dealerships via trade lanes"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "Haval Jolion",
        "desc": "The compact crossover that introduced Jamaican buyers to Chinese quality. RHD availability, a warranty story, and sharp pricing make it a hit in Kingston dealer yards.",
        "price": "$18,000–23,000 FOB"
      },
      {
        "rank": 2,
        "name": "BYD Yuan Plus (Atto 3)",
        "desc": "The EV now on many Jamaican wish-lists. With SCT relief, fast charging in the corridor, and excellent equipment, it lands as a true value proposition versus petrol rivals.",
        "price": "$21,000–26,000 FOB"
      },
      {
        "rank": 3,
        "name": "GAC GS3",
        "desc": "Reliable, compact, and well-equipped for everyday island driving. Strong dealer support and low running costs keep GAC steadily popular with islanders.",
        "price": "$17,000–22,000 FOB"
      },
      {
        "rank": 4,
        "name": "Chery Tiggo 7 Pro",
        "desc": "Mid-size SUV for families needing seven-seat optional space; good value against RAV4-class rivals and increasingly stocked by multi-brand dealers.",
        "price": "$20,500–26,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full specifications",
          "Certificate of Origin (CO) — CCPIT certified",
          "RHD confirmation note (export build)",
          "Packing list with container layout",
          "Bill of Lading"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Buyer ID, TRN and/or Trade Board licence for dealers",
          "Customs declaration at Kingston",
          "Certificate of Origin for duty calculation",
          "Motor Vehicle Authority inspection",
          "Road tax (none annual) and inspection certificate",
          "Registration with TRA"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "RHD Sourcing for Jamaica",
        "desc": "Jamaica drives on the left, so we source factory right-hand-drive Chinese models (built for export) so your vehicle registers and resells smoothly."
      },
      {
        "title": "Kingston Clearance Crew",
        "desc": "Our Kingston brokers clear vehicles fast through JCA, coordinating SCT valuation and inspection so you know your landed cost in advance."
      },
      {
        "title": "EV SCT Expertise",
        "desc": "We keep pace with Jamaica's evolving EV incentives and will route orders to land at the lowest possible SCT/GCT band."
      },
      {
        "title": "Island Delivery",
        "desc": "From Kingston we arrange haulage to dealers and buyers in Montego Bay, Ocho Rios, and towns across the island."
      }
    ],
    "faqItems": [
      {
        "q": "How much tax do I pay importing a car to Jamaica?",
        "a": "For a typical 2.0L crossover, budget around 40-50% of CIF value all-in: customs duty, SCT (scaled by engine size) and GCT. EVs and hybrids land lower thanks to SCT relief."
      },
      {
        "q": "What is the age limit for used cars in Jamaica?",
        "a": "The market operates on the assumption that imports are roughly under 10 years old; older cars face stricter inspection and lower financing value. Under-5-year cars are the sweet spot."
      },
      {
        "q": "Does Jamaica drive left or right?",
        "a": "Jamaica drives on the left, so right-hand-drive (RHD) vehicles are the standard import. We source RHD Chinese models (built for ASEAN/UK/Australia export) to match local registration."
      },
      {
        "q": "Which Chinese brands sell best in Jamaica?",
        "a": "Haval (Jolion), BYD (Yuan Plus), GAC (GS3) and Chery (Tiggo 7) lead demand in Kingston's dealer yards, with EV interest rising fast."
      },
      {
        "q": "How long does shipping from China to Jamaica take?",
        "a": "RoRo runs 34-42 days; container shipping 38-48 days door to door from Shanghai to Kingston."
      },
      {
        "q": "Are Chinese cars reliable in the Jamaican climate?",
        "a": "Yes for properly specified units. AC performance in tropical heat is a key check; we verify cooling before loading and can add undercoating where coastal moisture is a factor."
      },
      {
        "q": "Can I import an EV from China to Jamaica?",
        "a": "Absolutely. Reduced SCT makes EVs a strong landing-cost story, and the Kingston-Montego Bay corridor now has public fast chargers."
      },
      {
        "q": "What documents do I need at Kingston customs?",
        "a": "A commercial invoice, certificate of origin, bill of lading, TRN, and the customs declaration. Dealers need a Trade Board licence; individuals import with ID and TRN."
      },
      {
        "q": "Can I import a car for personal use to Jamaica?",
        "a": "Yes. Individuals may import a vehicle for personal use with ID and TRN, subject to duty and SCT bands and the post-clearance inspection."
      },
      {
        "q": "Do you arrange dealer deliveries on the island?",
        "a": "Yes — from the Kingston port we deliver dealer stock to Montego Bay, Ocho Rios and all major towns with insured haulage."
      },
      {
        "q": "What are the most economical engine sizes for Jamaica?",
        "a": "1.5-2.0L engines sit in the efficient middle of the SCT ladder, which is why Haval Jolion and GAC GS3 (both ~1.5T) are market sweet spots."
      },
      {
        "q": "Does Cargration help with SCT valuation disputes?",
        "a": "Yes. Our Kingston broker supports valuation reviews so the declared CIF matches inspection expectations, minimising surprises at the SCT/GCT stage."
      }
    ]
  },
'senegal':   {
    "slug": "senegal",
    "heroTitle": "Ship cars from China to Senegal with direct routing to Dakar and clear duty estimates.",
    "heroDesc": "Senegal is one of West Africa's most dynamic vehicle markets, anchored by the deep-water port of Dakar — a regional hub for the entire Sahel. Chinese SUVs, crossovers, and pickups have become everyday sights in Dakar, joining the reliable Japanese classics at better value. Senegal's import policy is relatively straightforward: used vehicles under a strict age limit (5 years) are allowed with emissions checks, and duty is calculated on CIF value. Cargration delivers both new and used units to Dakar by RoRo and container, with full customs and inland support.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 850,
        "label": "Cars to Senegal"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 1,
        "label": "Port Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 94,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 36,
        "label": "Days Transit"
      }
    ],
    "dutyCalcDescription": "Senegalese Customs applies duty to CIF value (Cost + Insurance + Freight). A customs duty rate, an import surcharge, and VAT (TVA) apply for most vehicles. Used cars face the same duty basis but must meet the 5-year age limit and emissions standard. All-in import cost typically lands between 40% and 55% of CIF for crossovers and SUVs.",
    "importTabs": [
      {
        "label": "Standard — Used Vehicle",
        "infoBox": "Senegal allows used imports up to 5 years old with clean emission conformity. Duty combines customs tariff, import surcharge, and TVA on CIF value. Finance options exist via licensed lenders.",
        "bullets": [
          "Used vehicles must be 5 years old or younger",
          "Emissions and technical conformity required",
          "Customs duty based on CIF value",
          "Import surcharge and TVA (VAT) apply",
          "Left-hand-drive (LHD) — Senegal drives on the right",
          "Documents: invoice, certificate of origin, bill of lading",
          "Prefectoral inspection and registration after clearance"
        ],
        "extraText": "High skew: mid-size and compact SUV segments carry the greatest resale liquidity, and the 5-year rule keeps quality high across the fleet."
      },
      {
        "label": "Dealer & Fleet Programmes",
        "infoBox": "Licensed dealers and taxi/bus fleet operators import in volume. Trade registration (RCCM) plus customs authorisation is required; Cargration supports consolidated loading and volume tariffs.",
        "bullets": [
          "RCCM (business) licence required for commercial import",
          "Consolidated 40ft container economics",
          "Fleet registrations with simplified paperwork",
          "Priority EV and hybrid allocations",
          "Volume pricing across Haval, Geely, and Changan",
          "NGO transport preferred lanes"
        ],
        "extraText": "Dakar taxi and rental operators are moving toward hybrid/electric fleets; dealer groups that enter now secure the best allocation terms."
      },
      {
        "label": "EV & Hybrid Push",
        "infoBox": "Senegal is rolling out cleaner transport incentives and new charging infrastructure in Dakar. EVs and hybrids benefit from lighter import taxation and growing operational savings.",
        "bullets": [
          "EVs face reduced effective duty burden",
          "Hybrid taxis subsidised under Dakar programmes",
          "Charging hubs opening in the metropolitan zone",
          "BYD, Wuling and Dongfeng EV options",
          "Commercial fleets save heavily on energy"
        ],
        "extraText": "Hybrids are the pragmatic fleet answer today, with full EV economics improving as charging density grows."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Direct RoRo — Shanghai → Dakar",
        "summary": "Scheduled RoRo services link China to Dakar's vehicle terminal, ideal for new and used cars needing gentle handling and predictable timing.",
        "details": [
          "Transit time: 32–40 days door to door",
          "Dedicated vehicle-deck handling",
          "Regular monthly sailings",
          "Best for single units and small dealer lots",
          "Dakar clearance and trucking arranged"
        ]
      },
      {
        "icon": "🚢",
        "title": "Container Shipping — Shanghai → Dakar (40HQ)",
        "summary": "The cost-efficient option for 2-4 vehicles per container, fully lashed, chocked and protected; ideal for dealers consolidating across brands.",
        "details": [
          "Transit time: 35–45 days door to door",
          "2–4 vehicles per 40ft container",
          "Protective shrouds and wheel chocks",
          "Lower CIF per unit = lower duty",
          "Multi-brand consolidation"
        ]
      },
      {
        "icon": "🚢",
        "title": "Groupage to Inland West Africa",
        "summary": "For buyers delivering onward to Mali, Mauritania or Ivory Coast-post clearance, we arrange bonded inland haulage from Dakar across the corridor.",
        "details": [
          "Transit time: 38–50 days door to door",
          "Bonded in-transit clearance to Sahel markets",
          "Road convoys to Bamako and beyond",
          "Cross-border documentation handled",
          "Real-time shipment tracking"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "Haval Jolion",
        "desc": "The top-selling Chinese compact SUV in Dakar. Balanced price-to-spec, robust AC, and enormous popularity in the ride-hailing and family segments.",
        "price": "$17,500–22,500 FOB"
      },
      {
        "rank": 2,
        "name": "Geely Coolray",
        "desc": "Lively crossover for urban buyers, equally at home in the capital and on coastal roads. Strong fuel economy and low running costs make it a fleet favourite.",
        "price": "$16,500–21,000 FOB"
      },
      {
        "rank": 3,
        "name": "Changan CS35 Plus",
        "desc": "Compact and dependable crossover with a reputation for build quality that keeps it popular with value-conscious drivers in the Sahel.",
        "price": "$16,000–20,500 FOB"
      },
      {
        "rank": 4,
        "name": "BYD Yuan Plus (Atto 3)",
        "desc": "The leading EV in a market warming to electrification — strong range for the metro-to-outskirts commute and a growing charging story.",
        "price": "$21,000–26,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full specifications",
          "Certificate of Origin (CO) — CCPIT certified",
          "Emission conformity certificate",
          "Packing list with container layout",
          "Bill of Lading"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Senegalese ID or RCCM business registration",
          "Customs declaration at Dakar port",
          "Certificate of Origin",
          "Emission/technical inspection certificate",
          "TVA, duty payment receipts",
          "Registration with the national vehicle agency"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "5-Year Rule Compliance",
        "desc": "We source vehicles that fit Senegal's age rule exactly, avoiding costly rejections at the Dakar inspection gate."
      },
      {
        "title": "Dakar Hub Wisdom",
        "desc": "Our partner brokers clear hundreds of cars a month in Dakar, coordinating inspections so your registration is seamless."
      },
      {
        "title": "Fleet & Dealer Leverage",
        "desc": "Volume importers get consolidated containers, priority allocations, and fleet paperwork support from first enquiry to registration."
      },
      {
        "title": "Sahel Inland Reach",
        "desc": "We move vehicles onward from Dakar to Bamako, Nouakchott, and beyond with bonded transit secured."
      }
    ],
    "faqItems": [
      {
        "q": "How much tax is applied to car imports in Senegal?",
        "a": "Budget 40-55% of CIF value for typical crossovers and SUVs, covering customs duty, import surcharge, and TVA. EVs and hybrids land lighter."
      },
      {
        "q": "What is the used-car age limit in Senegal?",
        "a": "Used imports must be 5 years old or younger. Vehicles above that age face heavy rejection risk at the technical inspection gate — we source compliant units."
      },
      {
        "q": "Are LHD cars legal in Senegal?",
        "a": "Yes. Senegal drives on the right, and all factory left-hand-drive Chinese vehicles import and register without modification."
      },
      {
        "q": "Which Chinese brands sell best in Senegal?",
        "a": "Haval (Jolion), Geely (Coolray), Changan (CS35 Plus) and BYD (Yuan Plus) lead demand. Ride-hailing fleets lean on hybrid-friendly models."
      },
      {
        "q": "How long does shipping from China to Senegal take?",
        "a": "RoRo runs 32-40 days; container shipping 35-45 days door to door from Shanghai to Dakar."
      },
      {
        "q": "Can I import an EV from China to Senegal?",
        "a": "Yes. EVs face a lighter duty burden and Dakar's charging network is expanding, making them increasingly attractive for fleets and metro commuters."
      },
      {
        "q": "What documents do I need to clear a car at Dakar?",
        "a": "A commercial invoice, certificate of origin, bill of lading, emission/technical conformity, ID or RCCM licence, duty and TVA receipts."
      },
      {
        "q": "Can I import a car for personal use in Senegal?",
        "a": "Yes. Individuals import for personal use with ID and customs declaration, subject to the 5-year rule and emission conformity."
      },
      {
        "q": "What engine size is most economical for Senegal?",
        "a": "1.0-1.6L engines balance duty bands with daily running costs; that's why compact crossovers like the Jolion and Coolray are the market's sweet spot."
      },
      {
        "q": "Do you handle dealer inventory delivery across Senegal?",
        "a": "Yes. From Dakar we arrange insured delivery across the country, including Saint-Louis, Thiès, Diourbel, and Touba markets."
      },
      {
        "q": "Are Chinese cars suitable for Sahel conditions?",
        "a": "Yes. We verify cooling, tyres, and underbody protection before loading so units stand up to heat, dust, and unpaved stretches."
      },
      {
        "q": "Does Cargration support NGO fleets in Senegal?",
        "a": "Yes — NGO and agency fleets get priority allocation, bonded transit to inland operations, and tailored documentation support."
      }
    ]
  },
'syria':   {
    "slug": "syria",
    "heroTitle": "Import cars from China to Syria with reconstruction-driven demand and flexible Gulf or Mediterranean routing.",
    "heroDesc": "Syria's reconstruction economy is rebuilding its vehicle fleet, and Chinese brands — BYD, Haval, Chery, Geely — are at the centre of that demand for their value, parts availability, and durability. Vehicle imports enter through Latakia on the Mediterranean or via transit through Turkey/Gulf hubs, with duty calculated on CIF value. Sanctions-informed compliance means working with compliant exporters and banks matters. Cargration provides compliant sourcing, complete documentation, and routing advice for dealers, fleet operators, and private buyers rebuilding fleets across Syria.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 650,
        "label": "Cars to Syria"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Entry Hubs Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 89,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 42,
        "label": "Days Transit"
      }
    ],
    "dutyCalcDescription": "Syrian Customs applies duty to CIF value (Cost + Insurance + Freight). Vehicles carry a customs duty plus various fees and municipal charges that push the all-in import cost notably higher than the headline duty rate. Budget 40-60% of CIF all-in for typical vehicles, with engine-size variations. Reconstruction-linked registration programmes occasionally provide relief for fleets.",
    "importTabs": [
      {
        "label": "Standard — Used Vehicle",
        "infoBox": "Syria imports used vehicles through Latakia and administrative hubs, with duty on CIF value plus municipal charges. Confirm current administrative policy before purchase, as rules adjust with reconstruction policy.",
        "bullets": [
          "Duty calculated on CIF value",
          "Municipal and inspection fees add to cost",
          "Best value in compact and mid-size segments",
          "Left-hand-drive (LHD) — Syria drives on the right",
          "Popular used classes: new and near-new Chinese SUVs",
          "Documents: invoice, certificate of origin, bill of lading",
          "Registration after inspection with transport authorities"
        ],
        "extraText": "Sanctions-compliance tip: the exporter chain must comply with current international frameworks — Cargration ensures a compliant documentation trail."
      },
      {
        "label": "Dealer & Fleet Reconstruction",
        "infoBox": "Rebuilding dealers, taxi cooperatives, and infrastructure contractors import in volume. Trade registration and customs authorisation are required, and reconstruction-linked fleets (public service, logistics) can access special allocation.",
        "bullets": [
          "Trade registration and customs licences required",
          "Reconstruction programme fleet allocations",
          "Consolidated container economics",
          "Volume pricing across Chinese brands",
          "Compliant banking and export lanes",
          "Priority for transport-sector renewal"
        ],
        "extraText": "Transport-sector renewal is a national priority; we help fleets secure compliant sourcing at scale."
      },
      {
        "label": "EV & Green Recovery",
        "infoBox": "Syria's rebuild increasingly considers energy-efficient fleets. EVs and hybrids carry relatively lighter duty in the current framework and align with fuel-cost reduction for public transport renewal.",
        "bullets": [
          "EVs face reduced duty burden",
          "Energy-efficiency incentives for public fleets",
          "Charging rollout in major cities underway",
          "BYD, Wuling and Dongfeng options available",
          "Fuel-cost savings support recovery budgets",
          "Conformity documentation for EV imports prepared"
        ],
        "extraText": "For public and shared fleets, EV economics boost operating margins at the same time as supporting reconstruction of the grid."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Mediterranean — Shanghai via Port Said → Latakia",
        "summary": "RoRo and container services reach Latakia via feeder through Port Said, offering the most direct entry into Syria for imported vehicles.",
        "details": [
          "Transit time: 40–50 days door to door",
          "Feeder connection via Port Said",
          "Vehicle-capable terminal handling",
          "Best for direct Med entry",
          "Customs documentation structured for Latakia"
        ]
      },
      {
        "icon": "🚢",
        "title": "Gulf Transit — via Jebel Ali / Land Corridor",
        "summary": "Onward transit through Gulf hubs and compliant land corridors serves interior destinations. Slower, but a working route during port congestion.",
        "details": [
          "Transit time: 45–60 days door to door",
          "Referred lines via Jebel Ali (UAE)",
          "Road or rail continuation to Syria",
          "Bonded transit documentation",
          "Contingency routing when Latakia is congested"
        ]
      },
      {
        "icon": "🚢",
        "title": "Dealer Consolidation via Latakia",
        "summary": "Volume importers combine 10+ vehicles into container or RoRo lots, reducing per-unit freight and speeding fleet renewal.",
        "details": [
          "Transit time: 40–55 days door to door",
          "10+ unit consolidation pricing",
          "Priority berth scheduling",
          "Coordinated customs via partner broker",
          "Full reconstruction-fleet compliance"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "Haval H6",
        "desc": "The mid-size SUV of choice for reconstruction fleets and families — durable, spacious and priced to move in volume. Strong parts support through regional networks.",
        "price": "$23,000–29,500 FOB"
      },
      {
        "rank": 2,
        "name": "Chery Tiggo 8",
        "desc": "Seven-seater with a reputation for dependability and space, ideal for taxi cooperatives and family buyers. Strong value against legacy Japanese rivals.",
        "price": "$26,000–33,000 FOB"
      },
      {
        "rank": 3,
        "name": "BYD Yuan Plus (Atto 3)",
        "desc": "The EV option entering Damascus fleets — efficient for renewed public transport and increasingly practical as city charging expands.",
        "price": "$21,000–26,000 FOB"
      },
      {
        "rank": 4,
        "name": "Geely Coolray",
        "desc": "Compact and nimble choice for urban and intercity running where fuel economy and low maintenance matter most to private buyers.",
        "price": "$16,500–21,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full specifications",
          "Certificate of Origin (CO) — CCPIT certified",
          "Compliant sanctions documentation",
          "Packing list with container layout",
          "Bill of Lading"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Syrian ID or trade registration",
          "Customs declaration at entry hub",
          "Certificate of Origin",
          "Inspectionised conformity documentation",
          "Duty, fees, municipal payment receipts",
          "Registration with transport authorities"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "Sanctions-Compliant Chain",
        "desc": "We build fully compliant documentation and pursue only lawful transit and banking lanes for Syria-bound shipments."
      },
      {
        "title": "Reconstruction Focus",
        "desc": "Our catalogue prioritises fleet-viable models and buses/utility vehicles that support the rebuild — with volume terms for contractors."
      },
      {
        "title": "Dual-Hub Routing",
        "desc": "Maintains resilience via Latakia direct or Gulf transit, so your order keeps moving through port bottlenecks."
      },
      {
        "title": "Compliance & Clarity",
        "desc": "We give full landed-cost transparency, inspection guidance, and registration support within the current framework."
      }
    ],
    "faqItems": [
      {
        "q": "How much tax applies to car imports in Syria?",
        "a": "All-in import cost typically lands 40-60% of CIF, including customs duty, municipal fees, and inspection. Engine size and programme eligibility shape the exact figure."
      },
      {
        "q": "What is the age limit for used cars in Syria?",
        "a": "The framework favours new and near-new vehicles; older used units face higher scrutiny. We recommend sourcing vehicles under 3 years old for the most cargo-viable imports."
      },
      {
        "q": "Are LHD cars legal in Syria?",
        "a": "Yes. Syria drives on the right; Chinese left-hand-drive vehicles import and register without modification."
      },
      {
        "q": "How long does shipping from China to Syria take?",
        "a": "Approximately 40-60 days via the Mediterranean (Latakia) or Gulf transit corridors, depending on routing and port conditions."
      },
      {
        "q": "Can I import an EV from China to Syria?",
        "a": "Yes, and EVs carry a lighter duty burden in the current framework. Charging rollout supports public-fleet electrification in major cities."
      },
      {
        "q": "Which Chinese brands are most relevant in Syria?",
        "a": "Haval (H6), Chery (Tiggo 8), BYD (Yuan Plus) and Geely (Coolray) align with reconstruction demand for value and dependability."
      },
      {
        "q": "What documents are required for Syria-bound imports?",
        "a": "Commercial invoice, certificate of origin, bill of lading, sanctions-compliance documentation, ID or trade registration, and conformity inspection certificates."
      },
      {
        "q": "Can I import vehicles for a taxi or transport cooperative?",
        "a": "Yes. Reconstruction transport renewal supports fleet allocations; we handle consolidated sourcing and paperwork at cooperative level."
      },
      {
        "q": "How does Cargration ensure sanctions-compliant shipment?",
        "a": "We work with vetted banks and freight forwarders, prepare compliant export documentation, and confirm lawful routing and payment structures before loading."
      },
      {
        "q": "What vehicles best support reconstruction work?",
        "a": "Durable SUVs, pickups, minibuses, and cargo vans — all available through our catalogue and consolidated at fleet volume."
      },
      {
        "q": "Do you provide inspection for used units bound for Syria?",
        "a": "Yes, with photo/video inspection records, mechanical checks, and a compliance pack aligned to Syrian registration requirements."
      },
      {
        "q": "Should I buy new or used for Syria?",
        "a": "Both work. Near-new (under 3 years) balances duty and depreciation; new vehicles provide the cleanest conformity record. We advise based on your budget and use case."
      }
    ]
  },
'gabon':   {
    "slug": "gabon",
    "heroTitle": "Import cars from China to Gabon with RoRo to Owendo/Libreville and clear duty guidance.",
    "heroDesc": "Gabon is a higher-income, fuel-rich Central African market where the purchasing power and road conditions differ from its neighbours. Luxury and mid-size SUVs from Chinese brands — GWM, Chery, BYD — are replacing legacy European and Japanese fleets, favoured for modern equipment and reasonable total ownership cost. Imports flow through the Port of Owendo at Libreville, with duty calculated on CIF value. Cargration serves both private buyers in Libreville and operators across the forestry, logistics, and diamond sectors with compliant RoRo and container routes.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 480,
        "label": "Cars to Gabon"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 1,
        "label": "Port Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 90,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 38,
        "label": "Days Transit"
      }
    ],
    "dutyCalcDescription": "Gabonese Customs taxes vehicles on CIF value (Cost + Insurance + Freight). The structure includes customs duty, VAT, and an automobile-specific tax. For typical SUVs the all-in import burden in Gabon lands near 40-45% of CIF; luxury and large-engine models climb with the tax ladder. EVs and hybrids have begun to attract lighter treatment as part of regional energy-diversification.",
    "importTabs": [
      {
        "label": "Standard — Used & New Vehicle",
        "infoBox": "Gabon accepts both new and used imports; used vehicles should be under the region's prevailing age guidance for a smooth clearance. Duty combines customs, VAT, and the automobile tax on CIF value.",
        "bullets": [
          "New and used both import (used under ~10 years ideal)",
          "Duty, VAT, and auto-tax applied on CIF value",
          "Left-hand-drive (LHD) — Gabon drives on the right",
          "High demand in mid-size and luxury SUV classes",
          "Documents: invoice, certificate of origin, bill of lading",
          "Inspection and registration after clearance"
        ],
        "extraText": "Because portions of the network are rainy-season-rough, buyers skew toward robust SUVs and 4x4s with strong cooling and underbody protection."
      },
      {
        "label": "Dealer & Operator Programmes",
        "infoBox": "Licensed dealers, logistics operators and forestry/diamond-sector companies import in volume. Trade registration plus a customs operator code is required; consolidated loading and volume tariffs lower per-unit cost.",
        "bullets": [
          "Trade registration and operator code required",
          "Consolidated 40ft container economics",
          "Fleet allocations from factory",
          "Cross-sector (mining, logistics) volume pricing",
          "Preferred access to new EV allocations",
          "NGO/mining lane support"
        ],
        "extraText": "The forestry and logistics sectors are the biggest fleet buyers — we support five-year renewal cycles with supplier-direct sourcing."
      },
      {
        "label": "EV & Hybrid Emergence",
        "infoBox": "Gabon's renewable-energy push opens the door to EV and hybrid imports. Charging is emerging around Libreville, and premium buyers increasingly choose luxury EVs like the BYD Han or Tank 500 Hybrid.",
        "bullets": [
          "EVs and hybrids attract lighter tax treatment",
          "Charging stations rolling out in Libreville and Port-Gentil",
          "Luxury EV and hybrid SUVs emerging as status choice",
          "BYD, GWM Tank, Denza options available",
          "Fuel-cost savings suit high-mileage operators"
        ],
        "extraText": "For both status and operational cost, luxury hybrid and EV SUVs are becoming the common-sense premium choice in Gabon."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Direct RoRo — Shanghai → Owendo (Libreville)",
        "summary": "Scheduled RoRo services call Owendo, delivering vehicles to Libreville with gentle deck handling and predictable timing. The standard for private and small-GTK imports.",
        "details": [
          "Transit time: 34–42 days door to door",
          "Dedicated vehicle-deck handling",
          "Monthly sailings typical",
          "Best for single SUVs and small dealer lots",
          "Cleared and trucked across Gabon after arrival"
        ]
      },
      {
        "icon": "🚢",
        "title": "Container Shipping — Shanghai → Owendo (40HQ)",
        "summary": "Two to three vehicles per 40ft container with full lashing — the efficient route for dealers consolidating luxury and mid-size stock.",
        "details": [
          "Transit time: 38–48 days door to door",
          "2–3 vehicles per 40ft container",
          "Protective wraps and chocks",
          "Multi-brand consolidation supported",
          "Cost-competitive for dealers"
        ]
      },
      {
        "icon": "🐘",
        "title": "Inland Routes — Owendo → Port-Gentil & Interior",
        "summary": "Following clearance, vehicles continue by ferry to Port-Gentil or on classified roads to Lambaréné, Kango and the interior forestry zones.",
        "details": [
          "Ferry service to Port-Gentil",
          "Road corridors to interior centres",
          "Logistics support for forestry/operator sites",
          "Vehicle condition safeguarded en route",
          "Tracked delivery to final destination"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "GWM Tank 300",
        "desc": "The status 4x4 in Libreville — rugged ladder-frame capability with luxury interiors at a fraction of a Land Cruiser's price. Confident in the rainy season.",
        "price": "$27,000–34,000 FOB"
      },
      {
        "rank": 2,
        "name": "Haval H6",
        "desc": "The dependable mid-size SUV for families and managers — strong aircon, boot space, and the right mix of polish and capability for Gabonese roads.",
        "price": "$22,500–29,000 FOB"
      },
      {
        "rank": 3,
        "name": "BYD Han EV",
        "desc": "The premium electric executive saloon making waves with Libreville's business class — silent, fast and a statement of the energy transition.",
        "price": "$38,000–46,000 FOB"
      },
      {
        "rank": 4,
        "name": "Chery Tiggo 8 Pro",
        "desc": "Seven-seat family SUV balancing equipment with sensible running costs — popular with larger households and small-business operators.",
        "price": "$26,000–33,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full specifications",
          "Certificate of Origin (CO) — CCPIT certified",
          "Packing list with container layout",
          "Bill of Lading",
          "Inspection report and photo record"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Gabonese ID or trade registration",
          "Customs declaration at Owendo",
          "Certificate of Origin",
          "Duty, VAT and auto-tax receipts",
          "Technical inspection certificate",
          "Registration with transport authorities"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "Premium-Segment Sourcing",
        "desc": "We specialise in sourcing the luxury and mid-size SUVs Gabon's buyers actually want — with full inspection records and compliance packs."
      },
      {
        "title": "Owendo Clearance Team",
        "desc": "Our Libreville brokers handle clearance, inspection, and registration — so your import moves from vessel to road without hand-offs."
      },
      {
        "title": "Operator-Sector Focus",
        "desc": "Forestry, logistics and oil-services companies get volume pricing, fleet allocations, and durable-spec advice tailored to their terrain."
      },
      {
        "title": "EV Transition Partners",
        "desc": "We guide premium buyers into the hybrid/EV segment with charging feasibility and duty-light planning as part of the package."
      }
    ],
    "faqItems": [
      {
        "q": "How much tax is applied to car imports in Gabon?",
        "a": "All-in import cost for typical SUVs lands near 40-45% of CIF, composed of customs duty, VAT, and the auto-tax. Large engines and luxury models sit higher on the ladder."
      },
      {
        "q": "What is the age limit for used cars in Gabon?",
        "a": "Gabon accepts used vehicles; keeping them under approximately 10 years old ensures smooth clearance and strong resale. Near-new (under 3 years) is the best value-per-duty."
      },
      {
        "q": "Are LHD vehicles legal in Gabon?",
        "a": "Yes. Gabon drives on the right; all factory left-hand-drive Chinese vehicles import and register without modification."
      },
      {
        "q": "Which Chinese brands suit the Gabon market?",
        "a": "GWM (Tank 300), Haval (H6), Chery (Tiggo 8 Pro) and BYD (Han EV) align with Gabon's preference for sturdy, well-equipped SUVs and premium EVs."
      },
      {
        "q": "How long does shipping from China to Gabon take?",
        "a": "RoRo runs 34-42 days; container shipping 38-48 days door to door from Shanghai to Owendo/Libreville."
      },
      {
        "q": "Can I import an EV from China to Gabon?",
        "a": "Yes. EVs and hybrids attract lighter duty treatment, and charging is emerging in Libreville and Port-Gentil — ideal for premium and fleet buyers."
      },
      {
        "q": "What documents do I need at Owendo customs?",
        "a": "Commercial invoice, certificate of origin, bill of lading, ID or trade registration, duty/VAT/auto-tax receipts, and technical inspection results."
      },
      {
        "q": "Can I import a car for personal use in Gabon?",
        "a": "Yes. Individuals import for personal use with ID and customs declaration, paying the applicable duty, VAT, and auto-tax."
      },
      {
        "q": "Are Chinese cars suited to Gabonese forest and interior roads?",
        "a": "Yes, when specified properly. We verify cooling, tyres, and underbody protection; durable 4x4 SUVs like the Tank 300 excel on rainy-season routes."
      },
      {
        "q": "Do you serve forestry and logistics fleets in Gabon?",
        "a": "Yes — operators receive volume pricing, factory allocations, and terrain-matched durable specs for five-year fleet cycles."
      },
      {
        "q": "How does the automobile tax scale with engine size?",
        "a": "The auto-tax steps up with engine displacement, so mid-size SUVs holding to 2.0L-2.5L strike the best balance of performance and import cost."
      },
      {
        "q": "Can I arrange delivery outside Libreville?",
        "a": "Yes — after Owendo clearance we arrange ferry delivery to Port-Gentil and road delivery to interior centres and operator sites."
      }
    ]
  },
'pakistan':   {
    "slug": "pakistan",
    "heroTitle": "Import cars from China to Pakistan with EV-first incentives and Karachi port routing.",
    "heroDesc": "Pakistan's vehicle market is transforming. Government policy is now laser-focused on electric vehicles — with sharply reduced duties on EV imports and local assembly — while domestic assembly of legacy petrol cars remains costly. Chinese EVs (BYD, MG, Changan, Wuling) and hybrids are therefore the most rational imports for dealers, fleet operators, and increasingly private buyers. Vehicles arrive through the Ports of Karachi (KICT/PICT), carrying all-in duty structures that strongly favour battery-electric drivetrains. Cargration specialises in compliant EV sourcing, battery verification, and Karachi customs support.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 950,
        "label": "Cars to Pakistan"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 92,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 38,
        "label": "Days Transit"
      }
    ],
    "dutyCalcDescription": "Pakistani Customs applies customs duty plus sales tax, with Additional Customs Duty and withholding on CIF value (Cost + Insurance + Freight). The decisive factor is drivetrain: imported EVs pay markedly lower duty than petrol cars and fewer extra duties, while large-engine petrol/CNG vehicles face the heaviest burden. Imported used petrol vehicles are heavily restricted (age caps and quota), which is why the EV route is the dependable lane.",
    "importTabs": [
      {
        "label": "EV Priority — The Recommended Lane",
        "infoBox": "Pakistan's EV policy slashes the import cost for fully electric vehicles — reduced customs duty, sales tax concessions, and exemption from many petrol-car extra duties. This is the dependable, fastest-growing import channel.",
        "bullets": [
          "EVs pay substantially lower customs duty",
          "Reduced/zero additional customs duty on EVs",
          "Sales tax concessions for battery-electric imports",
          "No age-quota restrictions typical of petrol imports",
          "Used EVs under age policy import alongside new",
          "Documents: invoice, certificate of origin, bill of lading",
          "DC/AC conformity and NEPRA registration required"
        ],
        "extraText": "The practical result: a BYD Seal or Atto 3 lands costing far less in total tax than an equally-priced petrol SUV, while qualifying for clean-energy status."
      },
      {
        "label": "Standard — Used Petrol (Restricted)",
        "infoBox": "Used petrol vehicle imports into Pakistan are tightly controlled (age caps and annual quotas). Importing used later-model cars is possible under specific schemes, but EV is the far smoother route for most buyers.",
        "bullets": [
          "Used petrol imports face age caps and quotas",
          "High Additional Customs Duty on pre-owned units",
          "Sales tax applies at standard rates",
          "Yearly quota pressure makes funding tight",
          "LHD/RHD: Pakistan drives on the left (RHD standard)",
          "Prefer brand-new or near-new compact petrol in-policy",
          "Verify current SRO/notification before ordering"
        ],
        "extraText": "For budget buyers, in-policy used car schemes exist, but the duty spread means a new entry-level EV can be as cheap on total cost — check the comparison."
      },
      {
        "label": "Hybrid & CKD Partners",
        "infoBox": "Hybrid vehicles now also benefit from more favourable duty treatment than pure petrol, and dealer partners assembling CKD units gain priority allocations. Chinese OEM joint ventures are expanding rapidly.",
        "bullets": [
          "Hybrids get better duty bands than petrol",
          "CKD partner allocations expand yearly",
          "Priority factory volumes for authorised dealers",
          "MG, BYD, Changan, Haval partnerships growing",
          "Business registration with FBR and EDB recommended",
          "Volume pricing across EV and hybrid ranges"
        ],
        "extraText": "The assembly-driven transition means dealers who lock in CKD/EVD status with Chinese OEMs gain long-run cost advantages."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Karachi Direct — Shanghai → KICT/PICT",
        "summary": "RoRo and container services from China call the Port of Karachi's KICT/PICT terminals, the primary gateway for EVs and vehicles nationwide.",
        "details": [
          "Transit time: 32–40 days door to door",
          "Container and RoRo options to KICT/PICT",
          "Best for EV and dealer volume",
          "Karachi clearance and transport orchestrated",
          "Nationwide delivery (Lahore, Islamabad, etc.)"
        ]
      },
      {
        "icon": "🚢",
        "title": "Container Shipping — EV-Safe Handling",
        "summary": "EVs ship in 40HQ containers with battery-compliant handling and full protective wraps. Two units per container is the economical standard.",
        "details": [
          "Transit time: 34–42 days door to door",
          "2 EVs per 40ft container",
          "Battery conformity paperwork included",
          "Reduced damage risk versus RoRo for EVs",
          "Cost-efficient for dealer batches"
        ]
      },
      {
        "icon": "🚢",
        "title": "Dealer Consolidation — Factory Lots",
        "summary": "Authorised dealer partners consolidate 10+ vehicles into dedicated weekly sailings with priority berthing and supplier-direct factory documentation.",
        "details": [
          "Transit time: 32–40 days door to door",
          "10+ unit consolidation pricing",
          "Priority allocation from OEM factories",
          "Full CKD-adjacent paperwork handled",
          "Direct dealer network fulfilment"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "BYD Atto 3 (Yuan Plus)",
        "desc": "Pakistan's best-selling imported EV. Preferential duty treatment, real-world 420+km range, and the right size for city and highway duty — the rational dealer and fleet choice.",
        "price": "$20,500–25,500 FOB"
      },
      {
        "rank": 2,
        "name": "MG ZS EV",
        "desc": "Now CKD-assembled in Pakistan, the ZS EV is arriving from China for dealer supply and import partners — practical, well-priced, and built for local roads.",
        "price": "$18,500–23,500 FOB"
      },
      {
        "rank": 3,
        "name": "BYD Dolphin",
        "desc": "Compact EV hatchback for the value end of the market — the go-to import for ride-hailing fleets and urban buyers maximising cost savings.",
        "price": "$14,500–18,500 FOB"
      },
      {
        "rank": 4,
        "name": "Changan Lumin / Wuling Air EV",
        "desc": "Micro-EVs gaining momentum for city duty and corporate pools — breakthrough pricing with the clean-energy tax advantage intact.",
        "price": "$8,500–12,500 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full specifications",
          "Certificate of Origin (CO) — CCPIT certified",
          "Battery/EV conformity certificate",
          "Packing list with container layout",
          "Bill of Lading"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "CNIC/NTN (or business + EDB registration for dealers)",
          "Customs declaration at Karachi",
          "Certificate of Origin for EV duty basis",
          "EV conformity and NEPRA compliance records",
          "Duty/sales-tax/all-duty payment receipts",
          "Registration with Excise & Taxation (provincial)"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "EV Policy Masters",
        "desc": "We translate Pakistan's changing SROs and duty notifications into a concrete landed cost for every EV we ship — no surprises, no wasted duty."
      },
      {
        "title": "Battery-Verified Imports",
        "desc": "Every used EV ships with a battery health (SoH) certificate, protecting your duty status, warranty story, and resale value."
      },
      {
        "title": "Karachi Clearance Network",
        "desc": "Our Karachi brokers move thousands of vehicles a year through KICT/PICT, coordinating customs, conformity, and transport nationwide."
      },
      {
        "title": "Dealer & Fleet Programmes",
        "desc": "Authorised dealer partners and fleet operators receive factory allocation, consolidated shipping, and end-to-end paperwork."
      }
    ],
    "faqItems": [
      {
        "q": "How much duty does an EV imported to Pakistan pay?",
        "a": "EVs pay a substantially reduced customs duty with sales-tax concessions and reduced additional duties — typically landing a large portion cheaper in total tax than an equivalent petrol car."
      },
      {
        "q": "Can I still import a used petrol car to Pakistan?",
        "a": "Yes under restricted schemes, but the age caps and annual quotas plus high additional duties make it far less dependable than the EV route. Check the current SRO before ordering."
      },
      {
        "q": "Does Pakistan require RHD vehicles?",
        "a": "Pakistan drives on the left and RHD is the standard. We source RHD Chinese models for Pakistan-bound orders to match local registration."
      },
      {
        "q": "Which Chinese cars sell best in Pakistan?",
        "a": "BYD (Atto 3, Dolphin, Seal), MG (ZS EV), Changan and Wuling lead EV demand; Haval and Chery hybrids also gain ground."
      },
      {
        "q": "How long does shipping from China to Pakistan take?",
        "a": "32-42 days door to door from Shanghai to Karachi, depending on RoRo vs container routing."
      },
      {
        "q": "Can I import an EV for personal use in Pakistan?",
        "a": "Yes. Individuals with CNIC/NTN may import EVs under the reduced-duty regime, subject to conformity and registration requirements."
      },
      {
        "q": "What documents do I need at Karachi customs?",
        "a": "Commercial invoice, certificate of origin, bill of lading, battery/EV conformity, NTN/CNIC, NEPRA compliance, and duty/sales-tax receipts."
      },
      {
        "q": "Is an EV cheaper than a petrol car to run in Pakistan?",
        "a": "Yes — on total import cost, running cost, and fuel security. EVs are increasingly the rational choice for distance work and fleets."
      },
      {
        "q": "Do you verify used EV battery health?",
        "a": "Yes. Used EVs ship with a battery SoH report and conformity certificate to support duty and warranty claims."
      },
      {
        "q": "Can dealers import vehicles for resale?",
        "a": "Yes. Authorised and registered dealers (EDB/FBR) access factory allocations, consolidated containers, and simplified EV documentation."
      },
      {
        "q": "Are hybrids worth importing to Pakistan?",
        "a": "Hybrids enjoy better duty bands than petrol but worse than pure EV. They remain a good middle path for buyers wanting range without charging dependence."
      },
      {
        "q": "How does Cargration support the CKD/EVD transition?",
        "a": "We connect partner dealers to Chinese OEM factory allocations and provide the consolidated import backbone that assembly partners rely on."
      }
    ]
  },
'cambodia':   {
    "slug": "cambodia",
    "heroTitle": "Import cars from China to Cambodia with duty-friendly EV incentives and delivery via Sihanoukville.",
    "heroDesc": "Cambodia is one of Southeast Asia's most open vehicle-import markets, with no factory protectionist walls, strong Chinese involvement in infrastructure, and a fast-growing appetite for modern cars. Chinese brands — BYD, Haval, Changan, MG — are now mainstream in Phnom Penh, helped by low import duties relative to the region and duty breaks on EVs. Vehicles enter through Sihanoukville (Kampong Som) or via Ho Chi Minh City transit, with duty calculated on CIF value. Cargration serves private buyers, dealers, and fleet operators with compliant shipping and customs support into Cambodia.",
    "stats": [
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 12400,
        "label": "Cars Exported"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M6 30V14l14-8 14 8v16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 30h28M13 30V20h14v10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 720,
        "label": "Cars to Cambodia"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 20h28M20 6c4 4 4 24 0 28M20 6c-4 4-4 24 0 28\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 2,
        "label": "Ports Served"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><path d=\"M20 4l4 8 9 1-6.5 6.3L28 28l-8-4.5L12 28l1.5-8.7L7 13l9-1z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
        "target": 93,
        "label": "Buyer Satisfaction",
        "suffix": "%"
      },
      {
        "icon": "<svg viewBox=\"0 0 40 40\"><rect x=\"6\" y=\"10\" width=\"28\" height=\"20\" rx=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M6 17h28M14 10v-3M26 10v-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
        "target": 26,
        "label": "Days Transit"
      }
    ],
    "dutyCalcDescription": "Cambodian Customs applies a customs duty plus VAT to CIF value (Cost + Insurance + Freight). Extra duties and special taxes are lower than many neighbours, and electric vehicles attract reduced customs duty as part of the country's green transport push. Total import cost for a typical petrol crossover lands near 30-40% of CIF; EVs land materially lower.",
    "importTabs": [
      {
        "label": "Standard — Used & New Vehicle",
        "infoBox": "Cambodia opens its market to both new and used vehicles, with duty on CIF plus VAT; no strict age quota for used units in practice. Left-hand-drive is the norm — Cambodia drives on the right.",
        "bullets": [
          "New and used both import freely",
          "Customs duty + VAT on CIF value",
          "No practical age quota on used units",
          "Left-hand-drive (LHD) — Cambodia drives on the right",
          "Documents: invoice, certificate of origin, bill of lading",
          "Inspection and registration after clearance"
        ],
        "extraText": "Cambodia's open policy makes near-new Chinese crossovers and SUVs a strong value play against regional used-classic imports."
      },
      {
        "label": "Dealer & Volume Programmes",
        "infoBox": "Licensed dealers in Phnom Penh, Siem Reap and Sihanoukville import volume through the port. Trade registration plus customs code is required; consolidated 40ft containers lower per-unit cost.",
        "bullets": [
          "Trade registration and customs code required",
          "Consolidated container economics",
          "Factory allocations for named brands",
          "Nationwide dealer distribution supported",
          "Volume pricing on BYD, Haval, Changan, MG",
          "Direct compliance support"
        ],
        "extraText": "Chinese-brand dealer networks are forming quickly across Cambodia; early authorisations secure the best supply terms."
      },
      {
        "label": "EV Incentive",
        "infoBox": "Cambodia's EV-friendly policy and growing charging network in Phnom Penh make battery-electric imports increasingly attractive for tax, running cost, and resale reasons.",
        "bullets": [
          "EVs attract reduced customs duty",
          "Advantageous VAT treatment via policy",
          "Charging network expanding in the capital",
          "BYD, Wuling, Changan EV options",
          "Ideal for fleet and taxi modernisation"
        ],
        "extraText": "A BYD Dolphin imported for Cambodia lands with the duty advantage alongside strong daily savings — the clear smart-car play."
      }
    ],
    "shippingRoutes": [
      {
        "icon": "🚢",
        "title": "Sihanoukville Direct — Shanghai → Sihanoukville",
        "summary": "Direct RoRo and container services to Sihanoukville Autonomous Port, the principal vehicle gateway for Cambodia.",
        "details": [
          "Transit time: 24–30 days door to door",
          "RoRo and container options",
          "Direct to the main Cambodian port",
          "Best for Phnom Penh-destined stock",
          "Inland trucking to PP and Siem Reap arranged"
        ]
      },
      {
        "icon": "🚢",
        "title": "Container Shipping — Shanghai → Sihanoukville (40HQ)",
        "summary": "The cost-efficient route: two to three vehicles per 40ft container, fully lashed and chocked, with protective wrapping. Ideal for dealers and private fleets.",
        "details": [
          "Transit time: 26–34 days door to door",
          "2–3 vehicles per 40ft container",
          "Protective shrouds and tie-downs",
          "Multi-brand consolidation supported",
          "Economical for volume"
        ]
      },
      {
        "icon": "🚢",
        "title": "Gulf-of-Thailand Feeder (via Ho Chi Minh)",
        "summary": "Feeder services via Ho Chi Minh City (Cat Lai) serve the Mekong corridor to Phnom Penh — a flexible alternative when Sihanoukville capacity is pressed.",
        "details": [
          "Transit time: 28–38 days door to door",
          "Via Cat Lai/Phu My (Vietnam)",
          "Road/waterway feed into Cambodia",
          "Contingency when Sihanoukville is pressured",
          "Strongly coordinated customs documentation"
        ]
      }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "BYD Dolphin",
        "desc": "The EV changing Cambodia's car market — compact, cheap to run, and landed at a duty advantage. The smart city buy in Phnom Penh.",
        "price": "$14,500–18,500 FOB"
      },
      {
        "rank": 2,
        "name": "Haval Jolion",
        "desc": "Dependable compact SUV for families and fleets — strong value against used Japanese rivals, with modern tech and low running costs.",
        "price": "$17,500–22,500 FOB"
      },
      {
        "rank": 3,
        "name": "BYD Atto 3 (Yuan Plus)",
        "desc": "The mid-size EV SUV choice for executives and fleets, pairing range and comfort with the tax advantage and growing charging access.",
        "price": "$20,500–25,500 FOB"
      },
      {
        "rank": 4,
        "name": "Changan CS75 Plus",
        "desc": "Reliable family SUV with a growing service network — a practical, well-specified alternative in the heart of the Cambodian market.",
        "price": "$18,000–23,000 FOB"
      }
    ],
    "docSections": [
      {
        "title": "Export Documents (Prepared by Cargration)",
        "items": [
          "Commercial invoice with full specifications",
          "Certificate of Origin (CO) — CCPIT certified",
          "EV conformity document for EVs",
          "Packing list with container layout",
          "Bill of Lading"
        ]
      },
      {
        "title": "Import Documents (Arranged by Buyer)",
        "items": [
          "Cambodian ID or trade registration",
          "Customs declaration at point of entry",
          "Certificate of Origin",
          "EV conformity where applicable",
          "Duty and VAT payment receipts",
          "Registration with Ministry of Public Works & Transport"
        ]
      }
    ],
    "whyCards": [
      {
        "title": "EV Duty Advantage",
        "desc": "We specialise in the duty-cased EV import, ensuring your BYD, Wuling or Changan battery car lands with the tax edge intact."
      },
      {
        "title": "Sihanoukville Expertise",
        "desc": "Our Sihanoukville brokers clear vehicles fast and clean, co-ordinating inspection and registration with the ministry."
      },
      {
        "title": "Dealer Building Blocks",
        "desc": "We support dealership formation with consolidated stock, factory allocations, and full compliance paperwork from day one."
      },
      {
        "title": "Nationwide Delivery",
        "desc": "From Sihanoukville we deliver insured to Phnom Penh, Siem Reap, Battambang, and Sihanoukville city — anywhere on the network."
      }
    ],
    "faqItems": [
      {
        "q": "How much tax do I pay importing a car to Cambodia?",
        "a": "A typical petrol crossover lands at roughly 30-40% of CIF all-in (customs duty + VAT). EVs land lower thanks to reduced duty bands."
      },
      {
        "q": "Is there an age limit for used cars in Cambodia?",
        "a": "In practice, no strict quota — both used and new import freely. Near-new vehicles under 5 years old offer the best duty-to-value balance."
      },
      {
        "q": "Are LHD cars legal in Cambodia?",
        "a": "Yes. Cambodia drives on the right; all factory left-hand-drive Chinese vehicles import and register without modification."
      },
      {
        "q": "Which Chinese brands sell best in Cambodia?",
        "a": "BYD (Dolphin, Atto 3), Haval (Jolion) and Changan (CS75 Plus) lead demand, with growing dealer networks in Phnom Penh."
      },
      {
        "q": "How long does shipping from China to Cambodia take?",
        "a": "24-34 days door to door from Shanghai to Sihanoukville, depending on RoRo vs container and route."
      },
      {
        "q": "Can I import an EV from China to Cambodia?",
        "a": "Yes — and it is tax-advantaged. BYD and Wuling EVs land at a reduced duty rate and Phnom Penh's charging network is growing fast."
      },
      {
        "q": "What documents do I need at Cambodian customs?",
        "a": "A commercial invoice, certificate of origin, bill of lading, ID or trade registration, duty/VAT receipts, and EV conformity where applicable."
      },
      {
        "q": "Can I register an imported car in Cambodia easily?",
        "a": "Yes. After customs, complete the ministry inspection and registration with the Public Works & Transport department — our brokers guide each step."
      },
      {
        "q": "Are Chinese cars reliable in Cambodian conditions?",
        "a": "Yes. We verify cooling for tropical heat, tyres, and underbody before loading. Modern Chinese EVs and SUVs cope well with both city and provincial roads."
      },
      {
        "q": "Do you serve dealer networks in Cambodia?",
        "a": "Yes — registered dealers access factory allocations, consolidated containers, and nationwide delivery supported by our partner network."
      },
      {
        "q": "Can taxis and ride-hailing fleets electrify through Cargration?",
        "a": "Yes. Fleet operators get EV-specialised sourcing, battery verification, and duty-cased landed cost plans — ideal for Phnom Penh taxi modernisation."
      },
      {
        "q": "Do you arrange inland transport within Cambodia?",
        "a": "Yes — insured trucking from Sihanoukville to Phnom Penh, Siem Reap, Battambang, and beyond is organised as part of the door-to-door service."
      }
    ]
  },

};

export const COUNTRY_META: Record<string, { name: string; region: string; flag: string; transitShort: string }> = {
  russia: { name: 'Russia', region: 'Europe & CIS', flag: '\u{1F1F7}\u{1F1FA}', transitShort: '10\u201318 days by rail' },
  belarus: { name: 'Belarus', region: 'Europe & CIS', flag: '\u{1F1E7}\u{1F1FE}', transitShort: '12\u201318 days by rail' },
  ukraine: { name: 'Ukraine', region: 'Europe & CIS', flag: '\u{1F1FA}\u{1F1E6}', transitShort: '12\u201318 days by rail' },
  kazakhstan: { name: 'Kazakhstan', region: 'Central Asia', flag: '\u{1F1F0}\u{1F1FF}', transitShort: '10\u201318 days by rail' },
  uzbekistan: { name: 'Uzbekistan', region: 'Central Asia', flag: '\u{1F1FA}\u{1F1FF}', transitShort: '15\u201325 days by rail' },
  tajikistan: { name: 'Tajikistan', region: 'Central Asia', flag: '\u{1F1F9}\u{1F1EF}', transitShort: '20\u201330 days by rail' },
  azerbaijan: { name: 'Azerbaijan', region: 'Caucasus', flag: '\u{1F1E6}\u{1F1FF}', transitShort: '15\u201325 days by rail' },
  poland: { name: 'Poland', region: 'Europe & CIS', flag: '\u{1F1F5}\u{1F1F1}', transitShort: '20\u201330 days by rail' },
  uae: { name: 'UAE', region: 'Middle East & Africa', flag: '\u{1F1E6}\u{1F1EA}', transitShort: '18\u201325 days by sea' },
  iraq: { name: 'Iraq', region: 'Middle East & Africa', flag: '\u{1F1EE}\u{1F1F6}', transitShort: '20\u201330 days by sea' },
  iran: { name: 'Iran', region: 'Middle East & Africa', flag: '\u{1F1EE}\u{1F1F7}', transitShort: '25\u201335 days by sea' },
  'saudi-arabia': { name: 'Saudi Arabia', region: 'Middle East & Africa', flag: '\u{1F1F8}\u{1F1E6}', transitShort: '18\u201325 days by sea' },
  qatar: { name: 'Qatar', region: 'Middle East & Africa', flag: '\u{1F1F6}\u{1F1E6}', transitShort: '18\u201325 days by sea' },
  oman: { name: 'Oman', region: 'Middle East & Africa', flag: '\u{1F1F4}\u{1F1F2}', transitShort: '18\u201325 days by sea' },
  yemen: { name: 'Yemen', region: 'Middle East & Africa', flag: '\u{1F1FE}\u{1F1EA}', transitShort: '20\u201330 days by sea' },
  nigeria: { name: 'Nigeria', region: 'Middle East & Africa', flag: '\u{1F1F3}\u{1F1EC}', transitShort: '25\u201335 days by sea' },
  algeria: { name: 'Algeria', region: 'Middle East & Africa', flag: '\u{1F1E9}\u{1F1FF}', transitShort: '20\u201330 days by sea' },
  ghana: { name: 'Ghana', region: 'Middle East & Africa', flag: '\u{1F1EC}\u{1F1ED}', transitShort: '25\u201335 days by sea' },
  'cote-d-ivoire': { name: 'Cote d Ivoire', region: 'Middle East & Africa', flag: '\u{1F1E8}\u{1F1EE}', transitShort: '25\u201335 days by sea' },
  bolivia: { name: 'Bolivia', region: 'South America', flag: '\u{1F1E7}\u{1F1F4}', transitShort: '30\u201345 days by sea' },
  venezuela: { name: 'Venezuela', region: 'South America', flag: '\u{1F1FB}\u{1F1EA}', transitShort: '25\u201335 days by sea' },
colombia: { name: 'Colombia', region: 'South America', flag: '\u{1F1E8}\u{1F1F4}', transitShort: '25\u201335 days by sea' },
  afghanistan: { name: 'Afghanistan', region: 'Central Asia', flag: '\u{1F1E6}\u{1F1EB}', transitShort: '30\u201340 days by sea + overland' },
  albania: { name: 'Albania', region: 'Europe & CIS', flag: '\u{1F1E6}\u{1F1F1}', transitShort: '28\u201335 days by sea' },
  cameroon: { name: 'Cameroon', region: 'Africa', flag: '\u{1F1E8}\u{1F1F2}', transitShort: '33\u201340 days by sea' },
  'dr-congo': { name: 'DR Congo', region: 'Africa', flag: '\u{1F1E8}\u{1F1E9}', transitShort: '38\u201348 days by sea + overland' },
  ethiopia: { name: 'Ethiopia', region: 'Africa', flag: '\u{1F1EA}\u{1F1F9}', transitShort: '24\u201332 days by sea + rail' },
  jamaica: { name: 'Jamaica', region: 'Latin America', flag: '\u{1F1EF}\u{1F1F2}', transitShort: '34\u201342 days by sea' },
  senegal: { name: 'Senegal', region: 'Africa', flag: '\u{1F1F8}\u{1F1F3}', transitShort: '32\u201340 days by sea' },
  syria: { name: 'Syria', region: 'Middle East', flag: '\u{1F1F8}\u{1F1FE}', transitShort: '40\u201350 days by sea' },
  gabon: { name: 'Gabon', region: 'Africa', flag: '\u{1F1EC}\u{1F1E6}', transitShort: '34\u201342 days by sea' },
  pakistan: { name: 'Pakistan', region: 'South Asia', flag: '\u{1F1F5}\u{1F1F0}', transitShort: '32\u201340 days by sea' },
  cambodia: { name: 'Cambodia', region: 'Southeast Asia', flag: '\u{1F1F0}\u{1F1ED}', transitShort: '24\u201330 days by sea' },
}

type GuideOverride = Partial<Omit<CountryGuide, 'slug'>>

export function getGuideContent(lang: string, slug: string): GuideOverride {
  return guideI18n[lang]?.guides?.[slug] ?? {}
}

export function getCountryMeta(lang: string): Record<string, { name: string; region: string; flag: string; transitShort: string }> {
  const metaOverrides = guideI18n[lang]?.meta
  if (!metaOverrides) return COUNTRY_META
  const out: Record<string, { name: string; region: string; flag: string; transitShort: string }> = {}
  for (const [slug, m] of Object.entries(COUNTRY_META)) {
    const o = metaOverrides[slug]
    out[slug] = o ? { ...m, ...(o.name ? { name: o.name } : {}), ...(o.transit ? { transitShort: o.transit } : {}) } : m
  }
  return out
}