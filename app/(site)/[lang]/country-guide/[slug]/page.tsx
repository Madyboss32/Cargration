import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hreflangAlternates, ogImageFallback } from '@/src/lib/seo'
import CountryGuidePage from '@/src/views/CountryGuidePage'
import { countryGuides, getCountryMeta, getGuideContent } from '@/src/data/countryGuides'

interface Props {
  params?: { slug?: string; lang?: string }
}

export function generateStaticParams() {
  return Object.keys(countryGuides).map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params?.lang || 'en'
  const slug = params?.slug || ''
  const meta = getCountryMeta(lang)[slug]
  if (!meta) notFound()
  const ov = getGuideContent(lang, slug) as { heroTitle?: string; heroDesc?: string }
  const title = `Import Cars From China to ${meta.name}`
  const description = ov.heroDesc || `Complete guide to importing Chinese vehicles to ${meta.name}: ${meta.transitShort}, customs duties, certification, and how Cargration handles sourcing, inspection, and shipping to ${meta.region}.`
  return {
    title,
    description,
    alternates: hreflangAlternates(`/country-guide/${slug}`, lang),
    openGraph: {
      title,
      description,
      url: lang && lang !== 'en' ? `https://www.cargration.com/${lang}/country-guide/${slug}` : `https://www.cargration.com/country-guide/${slug}`,
      siteName: 'Cargration',
      type: 'website',
      images: [ogImageFallback()],
    },
  }
}

export default async function Page({ params }: Props) {
  const lang = params?.lang || 'en'
  const slug = params?.slug || ''
  if (!countryGuides[slug as keyof typeof countryGuides] || !getCountryMeta(lang)[slug]) notFound()
  return (
    <CountryGuidePage lang={lang} />
  )
}
