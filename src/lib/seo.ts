import type { Metadata } from 'next'
import { SITE } from '../config/site'
import { locales, defaultLocale } from '../i18n/config'

const LOCALE_MAP: Record<string, string> = {
  en: 'en_US', ru: 'ru_RU', fr: 'fr_FR', ar: 'ar_AE', pt: 'pt_BR', es: 'es_ES',
}

export function hreflangAlternates(path: string, lang: string = defaultLocale): Metadata['alternates'] {
  const clean = path === '/' ? '' : path
  const canonicalPath = lang === defaultLocale ? (clean || '/') : `/${lang}${clean}`
  return {
    canonical: canonicalPath,
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, l === defaultLocale ? `${SITE.url}${clean || '/'}` : `${SITE.url}/${l}${clean}`])),
      'x-default': `${SITE.url}${clean || '/'}`,
    },
  }
}

export const OG_IMAGE_PATH = '/assets/img/og-default.jpg'

const OG_IMAGE = {
  url: `${SITE.url}${OG_IMAGE_PATH}`,
  width: 1200,
  height: 630,
  alt: `${SITE.name} — Chinese vehicles for export, FOB pricing`,
}

export function ogImageFallback(): { url: string; width: number; height: number; alt: string } {
  return { ...OG_IMAGE }
}

/**
 * Applies the site-wide title template ("%s | Cargration").
 * Next.js skips the layout title.template on index routes, so pages that
 * render at a layout's index segment must build the full titled string themselves.
 */
export function siteTitle(title: string): string {
  return `${title} | ${SITE.name}`
}

export function baseOpenGraph(title: string, description: string, path?: string, lang?: string): Metadata['openGraph'] {
  return {
    title,
    description,
    url: path ? (lang && lang !== defaultLocale ? `${SITE.url}/${lang}${path === '/' ? '' : path}` : `${SITE.url}${path}`) : SITE.url,
    siteName: SITE.name,
    type: 'website',
    locale: lang ? LOCALE_MAP[lang] || 'en_US' : 'en_US',
    alternateLocale: locales.filter((l) => l !== (lang || 'en')).map((l) => LOCALE_MAP[l] || l),
    images: [OG_IMAGE],
  }
}

export function pageMeta(title: string, description: string, path?: string): Metadata {
  return {
    title,
    description,
    ...(path ? { alternates: hreflangAlternates(path) } : {}),
    openGraph: baseOpenGraph(title, description, path),
  }
}
