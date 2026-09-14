import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hreflangAlternates, ogImageFallback } from '@/src/lib/seo'
import CarDetailPage from '@/src/views/CarDetailPage'
import { resolveCarBySlug, carSlug, getSimilarCars, ensureLoaded } from '@/src/data/cars.server'
import { carKeywords, carMetaDescription, carExportTitle } from '@/src/lib/carSeo'
import { brandSlug } from '@/src/lib/brandSeo'
import { vehicleJsonLd, jsonLdScript } from '@/src/lib/jsonld'
import JsonLdHead from '@/src/components/JsonLdHead'
import { getDictionary, createT } from '@/src/i18n'
import { defaultLocale } from '@/src/i18n/config'
import { SITE } from '@/src/config/site'

interface Props {
  params: { lang: string; slug: string }
}

export const runtime = 'edge'
export const dynamicParams = true

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await ensureLoaded()
  const car = resolveCarBySlug(params.slug)
  if (!car) notFound()
  const title = carExportTitle(car)
  return {
    title,
    description: carMetaDescription(car),
    keywords: carKeywords(car),
    alternates: hreflangAlternates(`/car-detail/${carSlug(car)}`, params.lang),
    openGraph: {
      title: title,
      description: carMetaDescription(car),
      type: 'website',
      images: car.img[0] ? [{ url: car.img[0], width: 1200, height: 630 }] : [ogImageFallback()],
    },
  }
}

export default async function Page({ params }: Props) {
  await ensureLoaded()
  const t = createT(getDictionary(params.lang))
  const car = resolveCarBySlug(params.slug)

  if (!car) notFound()

  const langPrefix = params.lang === defaultLocale ? '' : `/${params.lang}`
  const breadcrumbItems = [
    { position: 1, name: t('crumb.home'), item: `${SITE.url}${langPrefix}` },
    { position: 2, name: t('crumb.brands'), item: `${SITE.url}${langPrefix}/brands` },
    { position: 3, name: car.brand, item: `${SITE.url}${langPrefix}/brands/${brandSlug(car.brand)}` },
    { position: 4, name: car.name, item: `${SITE.url}${langPrefix}/car-detail/${carSlug(car)}` },
  ]

  return (
    <>
      <JsonLdHead html={jsonLdScript(vehicleJsonLd(car)).__html} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems.map((b) => ({
            '@type': 'ListItem',
            position: b.position,
            name: b.name,
            item: b.item,
          })),
        })}
      />
      <CarDetailPage car={car} similar={getSimilarCars(car)} lang={params.lang} />
    </>
  )
}
