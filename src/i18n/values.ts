// Localizes raw catalog feed values (colors, transmission codes) at render time.
// Pure functions so both server components (createT) and client components (useI18n) can use them.

type TFn = (key: string) => string

const COLOR_KEYS: Record<string, string> = {
  white: 'col.white',
  black: 'col.black',
  silver: 'col.silver',
  gray: 'col.gray',
  grey: 'col.gray',
  blue: 'col.blue',
  red: 'col.red',
  champagne: 'col.champagne',
  green: 'col.green',
  yellow: 'col.yellow',
  brown: 'col.brown',
  'dark gray': 'col.darkGray',
  beige: 'col.beige',
  purple: 'col.purple',
  gold: 'col.gold',
  orange: 'col.orange',
  pink: 'col.pink',
  cyan: 'col.cyan',
  multicolor: 'col.multicolor',
  other: 'col.other',
  // non-latin / compound source values
  银色: 'col.silver',
  'silver-white': 'col.silver',
  'silver gray': 'col.silverGray',
}

const TRANS_KEYS: Record<string, string> = {
  AT: 'trans.automaticAt',
  CVT: 'trans.cvt',
  MT: 'trans.manualMt',
}

export function colorLabel(t: TFn, v: string | undefined | null): string {
  if (!v) return ''
  return v
    .split('/')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => {
      const key = COLOR_KEYS[p.toLowerCase()]
      return key ? t(key) : p
    })
    .join(' / ')
}

export function transLabel(t: TFn, v: string | undefined | null): string {
  if (!v) return ''
  const key = TRANS_KEYS[v]
  return key ? t(key) : v
}

// Canonical color codes for faceted filtering (col.* dictionary keys share these suffixes).
const COLOR_CODES: Record<string, string> = {
  white: 'white',
  black: 'black',
  silver: 'silver',
  'silver-white': 'silver',
  'silver gray': 'silver',
  银色: 'silver',
  gray: 'gray',
  grey: 'gray',
  'dark gray': 'gray',
  blue: 'blue',
  red: 'red',
  green: 'green',
  yellow: 'yellow',
  brown: 'brown',
  champagne: 'champagne',
  beige: 'beige',
  gold: 'gold',
  orange: 'orange',
  purple: 'purple',
  pink: 'pink',
  cyan: 'cyan',
  multicolor: 'multicolor',
  other: 'other',
}

export function colorCodes(v: string | undefined | null): string[] {
  if (!v) return []
  const out = new Set<string>()
  for (const part of v.split('/')) {
    const code = COLOR_CODES[part.trim().toLowerCase()]
    if (code) out.add(code)
  }
  return [...out]
}
