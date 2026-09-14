import { getAllCars } from '../data/cars.server'
import { findBrandKeywords } from '../data/seoKeywords'
import { brandSlug, modelSlug, titleCaseWords, brandPageContent } from '../lib/brandSeo'
import LLink from '../i18n/LLink'
import BreadcrumbNav from '../components/BreadcrumbNav'

function modelWord(name: string, brand: string): string {
  const n = name || ''
  return n.startsWith(brand + ' ') ? n.slice(brand.length + 1) : n
}

function usableSlug(brand: string, model: string): boolean {
  const slug = modelSlug(model)
  if (!slug || slug.length < 2) return false
  return slug !== brandSlug(brand)
}

interface ModelGroup {
  model: string
  count: number
  img?: string
  prices: [number, number]
}

export default function BrandPage({ brand, lang, t }: { brand: string; lang: string; t: (k: string) => string }) {
  const cars = getAllCars().filter((c) => c.brand === brand)
  const content = brandPageContent(brand)
  const keywordEntry = findBrandKeywords(brand)

  const byModel = new Map<string, ModelGroup>()
  for (const c of cars) {
    const m = modelWord(c.name, brand)
    const g = byModel.get(m) || { model: m, count: 0, img: undefined as string | undefined, prices: [Infinity, 0] as [number, number] }
    g.count += 1
    g.prices = [Math.min(g.prices[0], c.price), Math.max(g.prices[1], c.price)]
    if (!g.img && c.img && c.img.length) g.img = c.img[0]
    byModel.set(m, g)
  }
  const groups = [...byModel.values()].filter((g) => usableSlug(brand, g.model)).sort((a, b) => b.count - a.count)

  const onRequest = keywordEntry ? keywordEntry.models.filter((m) => m.matches.length === 0) : []
  const unitTotal = cars.length

  return (
    <div className="container" style={{ paddingTop: '2.25rem' }}>
      <div className="pb-6">
        <BreadcrumbNav items={[{ label: t('crumb.brands'), href: '/brands' }, { label: brand }]} homeLabel={t('breadcrumb.home')} />
      </div>

      <header className="pb-8">
        <div className="mb-2 font-mono text-[.68rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-pine-700)' }}>
          {t('crumb.brands')}
        </div>
        <h1 className="mb-3 font-display text-3xl font-bold md:text-4xl">{content.title}</h1>
        <p className="max-w-3xl text-[.95rem] leading-relaxed" style={{ color: 'var(--color-ink-600)' }}>
          {content.sub}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <div className="flex gap-6 rounded-xl border bg-white px-5 py-3" style={{ borderColor: 'var(--color-paper-100)' }}>
            <Stat label="Units in stock" value={unitTotal.toLocaleString()} />
            <Stat label="Models" value={String(groups.length)} />
            <Stat label="FOB price from" value={`$${groups.length ? Math.min(...groups.map((g) => g.prices[0])) : 0}`} />
          </div>
          <LLink href={`/inventory?brand=${encodeURIComponent(brand)}`} className="rounded-lg px-4 py-3 text-center text-sm font-semibold no-underline transition-opacity hover:opacity-90" style={{ background: 'var(--color-pine-400)', color: '#fff' }}>
            View all {brand} cars in inventory →
          </LLink>
        </div>
      </header>

      <section className="pb-10">
        <h2 className="mb-4 font-display text-xl font-bold md:text-2xl">{brand} models & price range</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {groups.map((g) => {
            const href = keywordEntry
              ? `/brands/${brandSlug(brand)}/${modelSlug(g.model)}`
              : `/inventory?brand=${encodeURIComponent(brand)}&model=${encodeURIComponent(g.model)}`
            return (
              <LLink
                key={g.model}
                href={href}
                className="group flex items-start gap-3 rounded-xl border bg-white p-3 no-underline transition-colors hover:border-stone-300"
                style={{ borderColor: 'var(--color-paper-100)' }}
              >
                {g.img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={g.img} alt={`${brand} ${g.model}`} width={96} height={72} loading="lazy" className="rounded-lg object-cover" style={{ width: 96, height: 72, flexShrink: 0 }} />
                )}
                <div className="min-w-0">
                  <h3 className="truncate font-display text-sm font-bold">{brand} {g.model}</h3>
                  <p className="text-[.72rem]" style={{ color: 'var(--color-ink-600)' }}>
                    {g.count.toLocaleString()} {g.count === 1 ? 'unit' : 'units'}
                  </p>
                  <p className="text-[.72rem] font-semibold" style={{ color: 'var(--color-pine-700)' }}>
                    from ${g.prices[0].toLocaleString()}
                    <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden> →</span>
                  </p>
                </div>
              </LLink>
            )
          })}
        </div>
      </section>

      {onRequest.length > 0 && (
        <section className="pb-10">
          <h2 className="mb-2 font-display text-xl font-bold md:text-2xl">Popular {brand} models we can source on request</h2>
          <p className="mb-4 text-[.9rem]" style={{ color: 'var(--color-ink-600)' }}>
            {brand} models not in today&apos;s stock can be sourced to order — same fixed FOB pricing, inspection and export documents.
          </p>
          <div className="flex flex-wrap gap-2">
            {onRequest.map((m) => (
              <LLink
                key={m.primary}
                href="/request-car"
                className="rounded-full border bg-white px-3 py-1.5 text-[.78rem] font-medium no-underline transition-colors hover:text-white"
                style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)', lineHeight: '1.4' }}
              >
                {(() => { const bpc = titleCaseWords(m.primary.replace(/^(byd|denza|yangwang|changan|deepal|jetour|li auto|li|gac|trumpchi|geely|lynk & co|oshan|dongfeng|forthing|aeolus|chery|wuling|landwind|voyah|zotye|roewe|toyota|bmw|mercedes|volkswagen|honda|audi|nissan)\s*/i, '')); return brand.toLowerCase().endsWith((' ' + bpc).toLowerCase()) ? brand : `${brand} ${bpc}`.trim() })()}
              </LLink>
            ))}
          </div>
        </section>
      )}

      <div className="mb-10 rounded-2xl p-8 text-center" style={{ background: 'var(--color-navy-950)' }}>
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-3 font-display text-2xl font-bold text-white">Can&apos;t find the exact {brand} model?</h2>
          <p className="mb-6 text-[.9rem] leading-relaxed" style={{ color: 'var(--color-steel-200)' }}>
            Tell us the {brand} you need — model, trim, year and spec — and get a fixed FOB quote within 24 hours.
          </p>
          <LLink href="/request-car" className="rounded-lg px-5 py-2.5 text-[.9rem] font-semibold no-underline transition-opacity hover:opacity-90" style={{ background: 'var(--color-pine-400)', color: '#fff' }}>
            Request a {brand} →
          </LLink>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[.62rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-steel-400)' }}>{label}</div>
      <div className="font-display text-lg font-bold" style={{ color: 'var(--color-ink-900)' }}>{value}</div>
    </div>
  )
}