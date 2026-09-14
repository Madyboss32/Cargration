// Adds listing-page header strings to all six dictionaries. Run: node _tools/add-keys-listing-headers.cjs
const fs = require('fs');
const path = require('path');

const additions = {
  en: {
    'listing.inventoryEyebrow': 'Inventory',
    'listing.inventoryTitle': 'Our Inventory',
    'listing.inventorySub': 'Live export stock from China — filter by brand, body type, fuel, or price. Every vehicle is inspected, documented, and ready to ship.',
    'listing.usedEyebrow': 'Used Vehicles',
    'listing.usedTitle': 'Used Cars',
    'listing.usedSub': 'Pre-owned vehicles with verified mileage and condition reports — inspected, documented, and priced to move.',
    'listing.newEyebrow': 'New Vehicles',
    'listing.newTitle': 'New Cars',
    'listing.newSub': 'Brand-new vehicles with minimal mileage — sourced directly from dealers, inspected, documented, and ready for export.',
    'listing.evsEyebrow': 'New Energy',
    'listing.evsTitle': 'Electric & Hybrid Vehicles',
    'listing.evsSub': 'China leads the world in new-energy vehicles — browse EVs, plug-in hybrids and range-extenders ready for export.',
  },
  ru: {
    'listing.inventoryEyebrow': 'Каталог',
    'listing.inventoryTitle': 'Наш автопарк',
    'listing.inventorySub': 'Актуальный экспортный сток из Китая — фильтруйте по бренду, типу кузова, топливу или цене. Каждый автомобиль проверен, оформлен и готов к отправке.',
    'listing.usedEyebrow': 'С пробегом',
    'listing.usedTitle': 'Авто с пробегом',
    'listing.usedSub': 'Автомобили с проверенным пробегом и отчётами о состоянии — осмотрены, оформлены и предложены по привлекательной цене.',
    'listing.newEyebrow': 'Новые авто',
    'listing.newTitle': 'Новые автомобили',
    'listing.newSub': 'Совершенно новые автомобили с минимальным пробегом — напрямую от дилеров: осмотрены, оформлены и готовы к экспорту.',
    'listing.evsEyebrow': 'Электротранспорт',
    'listing.evsTitle': 'Электро- и гибридные автомобили',
    'listing.evsSub': 'Китай — мировой лидер в сегменте новых энергоносителей: смотрите EV, подключаемые гибриды и REEV, готовые к экспорту.',
  },
  fr: {
    'listing.inventoryEyebrow': 'Catalogue',
    'listing.inventoryTitle': 'Notre inventaire',
    "listing.inventorySub": "Stock d'exportation en direct de Chine — filtrez par marque, carrosserie, carburant ou prix. Chaque véhicule est inspecté, documenté et prêt à expédier.",
    'listing.usedEyebrow': 'Occasion',
    'listing.usedTitle': "Voitures d'occasion",
    'listing.usedSub': "Véhicules d'occasion avec kilométrage vérifié et rapports d'état — inspectés, documentés et à prix attractifs.",
    'listing.newEyebrow': 'Neufs',
    'listing.newTitle': 'Voitures neuves',
    "listing.newSub": "Véhicules neufs à faible kilométrage — sourcés directement auprès des concessionnaires, inspectés, documentés et prêts à l'exportation.",
    'listing.evsEyebrow': 'Nouvelle énergie',
    'listing.evsTitle': 'Véhicules électriques & hybrides',
    "listing.evsSub": "La Chine est leader mondial du véhicule à nouvelle énergie — parcourez nos VE, hybrides rechargeables et prolongateurs d'autonomie prêts à exporter.",
  },
  es: {
    'listing.inventoryEyebrow': 'Catálogo',
    'listing.inventoryTitle': 'Nuestro inventario',
    'listing.inventorySub': 'Existencias de exportación en vivo desde China: filtre por marca, carrocería, combustible o precio. Cada vehículo está inspeccionado, documentado y listo para enviar.',
    'listing.usedEyebrow': 'Usados',
    'listing.usedTitle': 'Autos usados',
    'listing.usedSub': 'Vehículos de segunda mano con kilometraje verificado e informes de estado: inspeccionados, documentados y con precios para vender.',
    'listing.newEyebrow': 'Nuevos',
    'listing.newTitle': 'Autos nuevos',
    'listing.newSub': 'Vehículos nuevos con kilometraje mínimo: obtenidos directamente de concesionarios, inspeccionados, documentados y listos para exportar.',
    'listing.evsEyebrow': 'Nueva energía',
    'listing.evsTitle': 'Vehículos eléctricos e híbridos',
    'listing.evsSub': 'China lidera el mundo en vehículos de nueva energía: explore VE, híbridos enchufables y de autonomía extendida listos para exportar.',
  },
  pt: {
    'listing.inventoryEyebrow': 'Catálogo',
    'listing.inventoryTitle': 'Nosso estoque',
    'listing.inventorySub': 'Estoque de exportação ao vivo da China — filtre por marca, tipo de carroceria, combustível ou preço. Cada veículo é inspecionado, documentado e está pronto para envio.',
    'listing.usedEyebrow': 'Usados',
    'listing.usedTitle': 'Carros usados',
    'listing.usedSub': 'Veículos seminovos com quilometragem verificada e relatórios de estado — inspecionados, documentados e com preços para vender.',
    'listing.newEyebrow': 'Novos',
    'listing.newTitle': 'Carros novos',
    'listing.newSub': 'Veículos novos com quilometragem mínima — obtidos diretamente de concessionárias, inspecionados, documentados e prontos para exportação.',
    'listing.evsEyebrow': 'Nova energia',
    'listing.evsTitle': 'Veículos elétricos e híbridos',
    "listing.evsSub": "A China lidera o mundo em veículos de nova energia — explore VEs, híbridos plug-in e de autonomia estendida prontos para exportação.",
  },
  ar: {
    'listing.inventoryEyebrow': 'المخزون',
    'listing.inventoryTitle': 'مخزوننا',
    'listing.inventorySub': 'مخزون تصدير مباشر من الصين — قم بالتصفية حسب الماركة أو نوع الهيكل أو الوقود أو السعر. كل سيارة مفحوصة وموثقة وجاهزة للشحن.',
    'listing.usedEyebrow': 'مستعملة',
    'listing.usedTitle': 'سيارات مستعملة',
    'listing.usedSub': 'سيارات بمسافات موثقة وتقارير حالة — مفحوصة وموثقة وبأسعار جذابة.',
    'listing.newEyebrow': 'جديدة',
    'listing.newTitle': 'سيارات جديدة',
    'listing.newSub': 'سيارات جديدة تمامًا بمسافات منخفضة — مصدرها الوكالات مباشرة، مفحوصة وموثقة وجاهزة للتصدير.',
    'listing.evsEyebrow': 'الطاقة الجديدة',
    'listing.evsTitle': 'السيارات الكهربائية والهجينة',
    'listing.evsSub': 'الصين تتصدر العالم في مركبات الطاقة الجديدة — تصفح السيارات الكهربائية والهجينة القابلة للشحن وسيارات REEV الجاهزة للتصدير.',
  },
};

for (const [lang, keys] of Object.entries(additions)) {
  const file = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries', `${lang}.json`);
  const dict = JSON.parse(fs.readFileSync(file, 'utf8'));
  let added = 0;
  for (const [k, v] of Object.entries(keys)) {
    if (v === undefined) continue;
    if (!(k in dict)) { dict[k] = v; added++; }
  }
  fs.writeFileSync(file, JSON.stringify(dict, null, 2) + '\n', 'utf8');
  console.log(`${lang}: +${added} keys -> ${Object.keys(dict).length} total`);
}
