import type { Metadata } from 'next'
import HomePage from '@/src/views/HomePage'
import { ensureLoaded, getAllCars, getBrands, queryCars } from '@/src/data/cars.server'
import { hreflangAlternates, baseOpenGraph, siteTitle } from '@/src/lib/seo'
import { itemListJsonLd, jsonLdScript } from '@/src/lib/jsonld'
import { SITE } from '@/src/config/site'
import { getDictionary, createT } from '@/src/i18n'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = createT(getDictionary(params.lang))
  const title = siteTitle(t('meta.homeTitle'))
  return {
    title,
    description: t('meta.homeDesc'),
    openGraph: baseOpenGraph(title, t('meta.homeDesc'), '/', params.lang),
    alternates: hreflangAlternates('/', params.lang),
  }
}

export default async function Page() {
  await ensureLoaded()
  const cars = getAllCars()
  const brandCounts = new Map<string, number>()
  for (const c of cars) brandCounts.set(c.brand, (brandCounts.get(c.brand) || 0) + 1)
  const topBrands = [...brandCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([b]) => b)

  const preview = queryCars({ pageSize: 12 }).items
  const featuredItems = preview.slice(0, 6).map((c) => ({
    name: `${c.brand} ${c.name} ${c.trim}`,
    url: `${SITE.url}/car-detail/${(c.brand || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${(c.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${(c.trim || 'base').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${c.year || '0'}-${(c.id || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
    ...(c.img?.[0] ? { image: c.img[0] } : {}),
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(itemListJsonLd(featuredItems))}
      />
      <HomePage
      brands={getBrands()}
      topBrands={topBrands}
      totalCars={cars.length}
      preview={queryCars({ pageSize: 12 }).items}
      trending={queryCars({ pageSize: 10 }).items}
      suvs={queryCars({ type: 'suv', pageSize: 10 }).items}
      evs={queryCars({ fuel: 'Electric', pageSize: 10 }).items}
    />
    </>
  )
}
