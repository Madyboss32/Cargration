import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { brandSlug, brandPageSeo } from '@/src/lib/brandSeo'
import { getAllCars } from '@/src/data/cars.server'
import { getDictionary, createT } from '@/src/i18n'
import { locales } from '@/src/i18n/config'
import BrandPage from '@/src/views/BrandPage'

interface Props {
  params: { lang: string; brandSlug: string }
}

function resolveBrand(slug: string): string | undefined {
  const brands = [...new Set(getAllCars().map((c) => c.brand))]
  return brands.find((b) => brandSlug(b) === slug)
}

export function generateStaticParams() {
  const brands = [...new Set(getAllCars().map((c) => c.brand))]
  return locales.flatMap((lang) => brands.map((brand) => ({ lang, brandSlug: brandSlug(brand) })))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brand = resolveBrand(params.brandSlug)
  if (!brand) return {}
  const seo = brandPageSeo(brand)
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: baseOpenGraph(seo.title, seo.description, `/brands/${params.brandSlug}`, params.lang),
    alternates: hreflangAlternates(`/brands/${params.brandSlug}`, params.lang),
  }
}

export default function Page({ params }: Props) {
  const brand = resolveBrand(params.brandSlug)
  if (!brand) notFound()
  const t = createT(getDictionary(params.lang))
  return <BrandPage brand={brand} lang={params.lang} t={t} />
}