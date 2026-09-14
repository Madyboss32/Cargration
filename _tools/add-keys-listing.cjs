// Adds CarListingPage strings to all six dictionaries. Run: node _tools/add-keys-listing.cjs
const fs = require('fs');
const path = require('path');

const additions = {
  en: {
    'listing.activeFilters': 'Active filters',
    'listing.prev': '← Prev',
    'listing.next': 'Next →',
    'listing.noVehicles': 'No vehicles found',
    'listing.resetFilters': 'Reset Filters',
  },
  ru: {
    'listing.activeFilters': 'Активные фильтры',
    'listing.prev': '← Назад',
    'listing.next': 'Вперёд →',
    'listing.noVehicles': 'Авто не найдены',
    'listing.resetFilters': 'Сбросить фильтры',
  },
  fr: {
    'listing.activeFilters': 'Filtres actifs',
    'listing.prev': '← Précédent',
    'listing.next': 'Suivant →',
    'listing.noVehicles': 'Aucun véhicule trouvé',
    'listing.resetFilters': 'Réinitialiser les filtres',
  },
  es: {
    'listing.activeFilters': 'Filtros activos',
    'listing.prev': '← Anterior',
    'listing.next': 'Siguiente →',
    'listing.noVehicles': 'No se encontraron vehículos',
    'listing.resetFilters': 'Restablecer filtros',
  },
  pt: {
    'listing.activeFilters': 'Filtros ativos',
    'listing.prev': '← Anterior',
    'listing.next': 'Próximo →',
    'listing.noVehicles': 'Nenhum veículo encontrado',
    'listing.resetFilters': 'Limpar filtros',
  },
  ar: {
    'listing.activeFilters': 'الفلاتر النشطة',
    'listing.prev': '← السابق',
    'listing.next': 'التالي →',
    'listing.noVehicles': 'لا توجد سيارات',
    'listing.resetFilters': 'إعادة تعيين الفلاتر',
  },
};

for (const [lang, keys] of Object.entries(additions)) {
  const file = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries', `${lang}.json`);
  const dict = JSON.parse(fs.readFileSync(file, 'utf8'));
  let added = 0;
  for (const [k, v] of Object.entries(keys)) {
    if (!(k in dict)) { dict[k] = v; added++; }
  }
  fs.writeFileSync(file, JSON.stringify(dict, null, 2) + '\n', 'utf8');
  console.log(`${lang}: +${added} keys -> ${Object.keys(dict).length} total`);
}
