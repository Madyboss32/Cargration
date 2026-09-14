const fs = require('fs');
const path = require('path');

// Generate a minimal 180x180 PNG with Cargration navy (#0A3161) background
// and white "C" letter using raw PNG encoding (no dependencies needed).

const SIZE = 180;
const BG = [10, 49, 97]; // #0A3161 RGB
const FG = [255, 255, 255]; // white

// Create pixel data (RGBA)
const pixels = Buffer.alloc(SIZE * SIZE * 4);
for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    const idx = (y * SIZE + x) * 4;
    // Simple "C" shape: circle with right side cut out
    const cx = SIZE / 2, cy = SIZE / 2, r = SIZE * 0.38;
    const dx = x - cx, dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const inCircle = dist <= r;
    const inCutout = x > cx + r * 0.3 && Math.abs(dy) < r * 0.7;
    const isForeground = inCircle && !inCutout;
    const color = isForeground ? FG : BG;
    pixels[idx] = color[0];
    pixels[idx + 1] = color[1];
    pixels[idx + 2] = color[2];
    pixels[idx + 3] = 255;
  }
}

// PNG encoding
function crc32(buf) {
  let c = 0xffffffff;
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let v = n;
    for (let k = 0; k < 8; k++) v = v & 1 ? 0xedb88320 ^ (v >>> 1) : v >>> 1;
    table[n] = v;
  }
  for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function adler32(buf) {
  let a = 1, b = 0;
  for (let i = 0; i < buf.length; i++) { a = (a + buf[i]) % 65521; b = (b + a) % 65521; }
  return ((b << 16) | a) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeData = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeData));
  return Buffer.concat([len, typeData, crc]);
}

function deflate(data) {
  // Store method (no compression) for simplicity
  const blocks = [];
  for (let i = 0; i < data.length; i += 65535) {
    const block = data.slice(i, Math.min(i + 65535, data.length));
    const isLast = i + 65535 >= data.length;
    const header = Buffer.alloc(5);
    header[0] = isLast ? 0x01 : 0x00;
    header.writeUInt16LE(block.length, 1);
    header.writeUInt16LE(block.length ^ 0xffff, 3);
    blocks.push(header, block);
  }
  return Buffer.concat(blocks);
}

// Build PNG
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(SIZE, 0);
ihdr.writeUInt32BE(SIZE, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 6; // RGBA
ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

// Add filter byte (0 = none) to each row
const raw = Buffer.alloc(SIZE * (SIZE * 4 + 1));
for (let y = 0; y < SIZE; y++) {
  raw[y * (SIZE * 4 + 1)] = 0; // filter byte
  pixels.copy(raw, y * (SIZE * 4 + 1) + 1, y * SIZE * 4, (y + 1) * SIZE * 4);
}

const compressed = deflate(raw);
const idat = Buffer.concat([Buffer.from([0x78, 0x01]), compressed]);

const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), // PNG signature
  chunk('IHDR', ihdr),
  chunk('IDAT', idat),
  chunk('IEND', Buffer.alloc(0)),
]);

const outPath = path.join(__dirname, '..', 'public', 'apple-touch-icon.png');
fs.writeFileSync(outPath, png);
console.log(`Created ${outPath} (${png.length} bytes)`);
