const fs = require('fs');
const path = require('path');

const carsPath = path.join(__dirname, '..', 'src', 'data', 'cars.generated.json');
const publicDir = path.join(__dirname, '..', 'public');

const cars = JSON.parse(fs.readFileSync(carsPath, 'utf8'));

const full = cars.map(car => ({
  id: car.id,
  brand: car.brand,
  name: car.name,
  trim: car.trim,
  year: car.year,
  price: car.price,
  km: car.km,
  fuel: car.fuel,
  type: car.type,
  condition: car.condition,
  transmission: car.transmission,
  drive: car.drive,
  color: car.color,
  img: car.img?.[0] || '',
}));

const lite = cars.map(car => ({
  id: car.id,
  brand: car.brand,
  name: car.name,
  trim: car.trim,
  year: car.year,
  price: car.price,
  fuel: car.fuel,
  type: car.type,
  img: car.img?.[0] || '',
}));

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

fs.writeFileSync(path.join(publicDir, 'catalog-full.json'), JSON.stringify(full, null, 2));
fs.writeFileSync(path.join(publicDir, 'catalog-lite.json'), JSON.stringify(lite, null, 2));

console.log(`Processed ${cars.length} cars`);
console.log(`Wrote catalog-full.json and catalog-lite.json to public/`);
