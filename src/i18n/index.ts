import type { Locale } from './config'
import en from './dictionaries/en.json'
import ru from './dictionaries/ru.json'
import fr from './dictionaries/fr.json'
import ar from './dictionaries/ar.json'
import pt from './dictionaries/pt.json'
import es from './dictionaries/es.json'

export type Dict = Record<string, string>

const DICTIONARIES: Record<Locale, Dict> = { en, ru, fr, ar, pt, es }

export function getDictionary(lang: string): Dict {
  return (DICTIONARIES as Record<string, Dict>)[lang] || en
}

export type TFunc = (key: string, vars?: Record<string, string | number>) => string

export function createT(dict: Dict, lang?: Locale): TFunc {
  const fallback = lang && lang !== 'en' ? en : null
  return (key, vars) => {
    let s = dict[key] ?? (fallback ? fallback[key] : undefined) ?? key
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        s = s.split(`{${k}}`).join(String(v))
      }
    }
    return s
  }
}
