#!/usr/bin/env node
// Adds col.* base color words (composed at render time for multi-color values)
const fs = require('fs')
const path = require('path')

const DICT_DIR = path.join(__dirname, '..', 'src', 'i18n', 'dictionaries')

const EN = {
  'col.white': 'White', 'col.black': 'Black', 'col.silver': 'Silver', 'col.gray': 'Gray',
  'col.blue': 'Blue', 'col.red': 'Red', 'col.champagne': 'Champagne', 'col.green': 'Green',
  'col.yellow': 'Yellow', 'col.brown': 'Brown', 'col.darkGray': 'Dark Gray', 'col.beige': 'Beige',
  'col.purple': 'Purple', 'col.gold': 'Gold', 'col.orange': 'Orange', 'col.pink': 'Pink',
  'col.cyan': 'Cyan', 'col.multicolor': 'Multicolor', 'col.other': 'Other',
  'col.silverGray': 'Silver Gray',
}
const RU = {
  'col.white': 'Белый', 'col.black': 'Чёрный', 'col.silver': 'Серебристый', 'col.gray': 'Серый',
  'col.blue': 'Синий', 'col.red': 'Красный', 'col.champagne': 'Цвета шампанского', 'col.green': 'Зелёный',
  'col.yellow': 'Жёлтый', 'col.brown': 'Коричневый', 'col.darkGray': 'Тёмно-серый', 'col.beige': 'Бежевый',
  'col.purple': 'Фиолетовый', 'col.gold': 'Золотистый', 'col.orange': 'Оранжевый', 'col.pink': 'Розовый',
  'col.cyan': 'Голубой', 'col.multicolor': 'Многоцветный', 'col.other': 'Другой',
  'col.silverGray': 'Серебристо-серый',
}
const FR = {
  'col.white': 'Blanc', 'col.black': 'Noir', 'col.silver': 'Argenté', 'col.gray': 'Gris',
  'col.blue': 'Bleu', 'col.red': 'Rouge', 'col.champagne': 'Champagne', 'col.green': 'Vert',
  'col.yellow': 'Jaune', 'col.brown': 'Brun', 'col.darkGray': 'Gris foncé', 'col.beige': 'Beige',
  'col.purple': 'Violet', 'col.gold': 'Doré', 'col.orange': 'Orange', 'col.pink': 'Rose',
  'col.cyan': 'Cyan', 'col.multicolor': 'Multicolore', 'col.other': 'Autre',
  'col.silverGray': 'Gris argenté',
}
const AR = {
  'col.white': 'أبيض', 'col.black': 'أسود', 'col.silver': 'فضي', 'col.gray': 'رمادي',
  'col.blue': 'أزرق', 'col.red': 'أحمر', 'col.champagne': 'شمبانيا', 'col.green': 'أخضر',
  'col.yellow': 'أصفر', 'col.brown': 'بني', 'col.darkGray': 'رمادي داكن', 'col.beige': 'بيج',
  'col.purple': 'بنفسجي', 'col.gold': 'ذهبي', 'col.orange': 'برتقالي', 'col.pink': 'وردي',
  'col.cyan': 'سماوي', 'col.multicolor': 'متعدد الألوان', 'col.other': 'أخرى',
  'col.silverGray': 'فضي رمادي',
}
const PT = {
  'col.white': 'Branco', 'col.black': 'Preto', 'col.silver': 'Prateado', 'col.gray': 'Cinza',
  'col.blue': 'Azul', 'col.red': 'Vermelho', 'col.champagne': 'Champanhe', 'col.green': 'Verde',
  'col.yellow': 'Amarelo', 'col.brown': 'Marrom', 'col.darkGray': 'Cinza escuro', 'col.beige': 'Bege',
  'col.purple': 'Roxo', 'col.gold': 'Dourado', 'col.orange': 'Laranja', 'col.pink': 'Rosa',
  'col.cyan': 'Ciano', 'col.multicolor': 'Multicolorido', 'col.other': 'Outro',
  'col.silverGray': 'Prata cinza',
}
const ES = {
  'col.white': 'Blanco', 'col.black': 'Negro', 'col.silver': 'Plata', 'col.gray': 'Gris',
  'col.blue': 'Azul', 'col.red': 'Rojo', 'col.champagne': 'Champán', 'col.green': 'Verde',
  'col.yellow': 'Amarillo', 'col.brown': 'Marrón', 'col.darkGray': 'Gris oscuro', 'col.beige': 'Beige',
  'col.purple': 'Morado', 'col.gold': 'Dorado', 'col.orange': 'Naranja', 'col.pink': 'Rosa',
  'col.cyan': 'Cian', 'col.multicolor': 'Multicolor', 'col.other': 'Otro',
  'col.silverGray': 'Plata gris',
}

const BATCHES = { en: EN, ru: RU, fr: FR, ar: AR, pt: PT, es: ES }

let totalAdded = 0
for (const [loc, keys] of Object.entries(BATCHES)) {
  const file = path.join(DICT_DIR, `${loc}.json`)
  const dict = JSON.parse(fs.readFileSync(file, 'utf8'))
  let added = 0, skipped = 0
  for (const [k, v] of Object.entries(keys)) {
    if (dict[k] === undefined) { dict[k] = v; added++ } else skipped++
  }
  fs.writeFileSync(file, JSON.stringify(dict, null, 2) + '\n', 'utf8')
  totalAdded += added
  console.log(`${loc}: +${added} added -> total ${Object.keys(dict).length}`)
}
console.log(`DONE: ${totalAdded} keys added overall`)
