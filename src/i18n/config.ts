export const locales = ['en', 'ru', 'fr', 'ar', 'pt', 'es'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  fr: 'Français',
  ar: 'العربية',
  pt: 'Português',
  es: 'Español',
}

const RTL_LANGS = new Set<string>(['ar'])
export function isRTL(lang: string): boolean {
  return RTL_LANGS.has(lang)
}

export function isValidLocale(s: string): s is Locale {
  return (locales as readonly string[]).includes(s)
}

export function normalizeLocale(accept?: string | null): Locale {
  if (!accept) return defaultLocale
  const prefs = accept
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=')
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)
  for (const { tag } of prefs) {
    const base = tag.split('-')[0]
    if (isValidLocale(base)) return base
  }
  return defaultLocale
}
