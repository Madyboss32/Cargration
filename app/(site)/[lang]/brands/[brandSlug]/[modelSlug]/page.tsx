import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hreflangAlternates, baseOpenGraph } from '@/src/lib/seo'
import { brandSlug, modelSlug, modelPageSeo, modelPageContent } from '@/src/lib/brandSeo'
import { BRAND_MODEL_KEYWORDS } from '@/src/data/seoKeywords'
import { ensureLoaded, getAllCars } from '@/src/data/cars.server'
import { getDictionary, createT } from '@/src/i18n'
import { locales } from '@/src/i18n/config'
import InventoryList from '@/src/views/InventoryList'

export const runtime = 'edge'

interface Props {
  params: { lang: string; brandSlug: string; modelSlug: string }
}

function stripName(name: string, brand: string): string {
  const n = name || ''
  return n.startsWith(brand + ' ') ? n.slice(brand.length + 1) : n
}

function resolveBrand(slug: string): string | undefined {
  const brands = [...new Set(getAllCars().map((c) => c.brand))]
  return brands.find((b) => brandSlug(b) === slug)
}

function resolveModel(brand: string, slug: string): string | undefined {
  const models = [...new Set(getAllCars().filter((c) => c.brand === brand).map((c) => stripName(c.name, brand)))]
  return models.find((m) => modelSlug(m) === slug)
}

/** Skip catalog model names that produce no usable slug (garbled/converted names) —
 *  they would collide with the brand page itself (empty slug) or be meaningless. */
function usableModelSlug(brand: string, slug: string): boolean {
  if (!slug || slug.length < 2) return false
  return slug !== brandSlug(brand)
}

export function generateStaticParams() {
  const cars = getAllCars()
  const out: { lang: string; brandSlug: string; modelSlug: string }[] = []
  for (const kb of BRAND_MODEL_KEYWORDS) {
    const brand = kb.brand
    const seen = new Set<string>()
    const modelSlugs: string[] = []
    for (const m of new Set(cars.filter((c) => c.brand === brand).map((c) => stripName(c.name, brand)))) {
      const key = modelSlug(m)
      if (seen.has(key) || !usableModelSlug(brand, key)) continue
      seen.add(key)
      modelSlugs.push(key)
    }
    for (const lang of locales) {
      for (const key of modelSlugs) {
        out.push({ lang, brandSlug: brandSlug(brand), modelSlug: key })
      }
    }
  }
  return out
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await ensureLoaded()
  const brand = resolveBrand(params.brandSlug)
  if (!brand) return {}
  const model = resolveModel(brand, params.modelSlug)
  if (!model) return {}
  const seo = modelPageSeo(brand, model)
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: baseOpenGraph(seo.title, seo.description, `/brands/${params.brandSlug}/${params.modelSlug}`, params.lang),
    alternates: hreflangAlternates(`/brands/${params.brandSlug}/${params.modelSlug}`, params.lang),
  }
}

export default async function Page({ params, searchParams }: Props & { searchParams: Record<string, string | string[] | undefined> }) {
  await ensureLoaded()
  const brand = resolveBrand(params.brandSlug)
  if (!brand) notFound()
  const model = resolveModel(brand, params.modelSlug)
  if (!model) notFound()

  const t = createT(getDictionary(params.lang))
  const content = modelPageContent(brand, model)
  const base = `/brands/${params.brandSlug}/${params.modelSlug}`
  const crumbBrands = t('crumb.brands')

  return (
    <InventoryList
      lang={params.lang}
      searchParams={searchParams}
      config={{
        base,
        eyebrow: brand,
        title: content.title,
        sub: content.sub,
        preset: { brand, model: model.trim() },
        trail: [
          { label: crumbBrands, href: '/brands' },
          { label: brand, href: `/brands/${params.brandSlug}` },
        ],
      }}
    />
  )
}