import type { Dict } from '../i18n'
import { getAllCars } from '../data/cars.server'
import { brandSlug } from '../lib/brandSeo'
import LLink from '../i18n/LLink'

interface FeaturedBrand {
  brand: string
  display: string
  blurb: string
}

const FEATURED: FeaturedBrand[] = [
  { brand: 'BYD', display: 'BYD', blurb: 'China\u2019s EV giant \u2014 Dolphin, Seagull, Han, and the new Ultra series.' },
  { brand: 'Chery', display: 'Chery', blurb: 'One of China\u2019s top exporters \u2014 Tiggo, Arrizo, and Exeed premium SUVs.' },
  { brand: 'Changan', display: 'Changan', blurb: 'Full-line auto maker \u2014 CS SUVs, UNI series, and Deepal EVs.' },
  { brand: 'Geely', display: 'Geely', blurb: 'Owner of Volvo, Lotus and Zeekr \u2014 Coollray, Atlas, and the Galaxy line.' },
  { brand: 'Haval', display: 'Haval', blurb: 'Great Wall\u2019s SUV brand \u2014 H6, H9, Jolion and the Tank off-road family.' },
  { brand: 'AION', display: 'AION', blurb: 'GAC\u2019s electric brand \u2014 AION S, Y, V and RT export hit models.' },
  { brand: 'NIO', display: 'NIO', blurb: 'Premium battery-swap EVs \u2014 ES/EL series with sweeping tech.' },
  { brand: 'ZEEKR', display: 'ZEEKR', blurb: 'Geely\u2019s performance EV brand \u2014 001, X, 7X and the 009 MPV.' },
  { brand: 'XPeng', display: 'XPeng', blurb: 'Smart EVs \u2014 P7 sedan, G6/G9 SUVs with XNGP driving assist.' },
  { brand: 'Li Auto', display: 'Li Auto', blurb: 'Range-extender family SUVs \u2014 L6, L7, L8 and the pure EV MEGA.' },
  { brand: 'Leapmotor', display: 'Leapmotor', blurb: 'Value EVs \u2014 T03 city car and C10/C16 SUVs, now built in Poland.' },
  { brand: 'Hongqi', display: 'Hongqi', blurb: 'FAW\u2019s state flagship brand \u2014 H5, H9 limousine and E-HS9.' },
  { brand: 'Wuling', display: 'Wuling', blurb: 'SAIC-GM-Wuling \u2014 Hongguang Mini EV and affordable people\u2019s cars.' },
  { brand: 'Denza', display: 'Denza', blurb: 'BYD\u2019s premium brand \u2014 D9 MPV and N7 SUV.' },
  { brand: 'Jetour', display: 'Jetour', blurb: 'Chery\u2019s off-road brand \u2014 T2, Traveler, and Shanhai SUV models.' },
  { brand: 'Tank', display: 'Tank', blurb: 'Great Wall\u2019s off-road brand \u2014 Tank 300, 500 and 700.' },
  { brand: 'Great Wall', display: 'Great Wall', blurb: 'Pioneer exporter \u2014 Poer/P-series pickups and the Wingle range.' },
  { brand: 'Roewe', display: 'Roewe', blurb: 'SAIC\u2019s mainstream brand \u2014 RX/EX series and electric D6.' },
  { brand: 'Maxus', display: 'Maxus', blurb: 'SAIC\u2019s commercial brand \u2014 vans, pickups and trucks for export.' },
  { brand: 'Deepal', display: 'Deepal', blurb: 'Changan\u2019s EV brand \u2014 the S05, S07 and SL03 line.' },
  { brand: 'BAIC', display: 'BAIC', blurb: 'North China auto group \u2014 Arcfox EV brand and Beijing OTG off-roads.' },
  { brand: 'Bestune', display: 'Bestune', blurb: 'FAW\u2019s consumer brand \u2014 T77, T99 SUVs and N-series EV.' },
  { brand: 'ORA', display: 'ORA', blurb: 'Great Wall\u2019s cute city EVs \u2014 Good Cat, Punk Cat and Ballet Cat.' },
  { brand: 'Dongfeng', display: 'Dongfeng', blurb: 'State auto group \u2014 Aeolus, Fengon, and the Voyah premium line.' },
  { brand: 'Exeed', display: 'Exeed', blurb: 'Chery\u2019s premium brand \u2014 TXL, RX and the global VX flagship.' },
  { brand: 'Xiaomi', display: 'Xiaomi', blurb: 'The SU7 electric sedan that took the industry by storm.' },
  { brand: 'Fangchengbao', display: 'Fangchengbao', blurb: 'BYD\u2019s rugged EV brand \u2014 Bao 5 and the new Bao 8.' },
  { brand: 'Lynk & Co', display: 'Lynk & Co', blurb: 'Geely-Volvo joint brand \u2014 popular in Europe, sourced on request.' },
]

const CN_AFFIXES = ['Aion', 'AION', 'Zeekr', 'ZEEKR', 'Xpeng', 'XPeng', 'Denza', 'DENZA', 'Deepal', 'DEEPAL', 'Exeed', 'EXEED', 'Leapmotor', 'LEAPMOTOR', 'Arcfox', 'ARCFOX', 'Yangwang', 'Avatr', 'IM', 'Seres', 'AITO', 'Voyah', 'GAC', 'JAC', 'MG', 'FAW', 'Zotye', 'Skywell', 'Roewe', 'Maxus', 'Wuling', 'Wuling Motors', 'Hongqi', 'Bestune', 'Jetour', 'Haval', 'Tank', 'Great Wall', 'BYD', 'Chery', 'Changan', 'Geely', 'NIO', 'Li Auto', 'LEAPMOTOR', 'Dongfeng']

export default function BrandsPage({ t, lang }: { t: (k: string) => string; lang: string }) {
  const cars = getAllCars()
  const countsRaw = new Map<string, number>()
  for (const c of cars) {
    countsRaw.set(c.brand, (countsRaw.get(c.brand) || 0) + 1)
  }
  const counts = new Map<string, number>()
  for (const [b, n] of countsRaw) {
    const canon = countsKey(b)
    counts.set(canon, (counts.get(canon) || 0) + n)
  }
  const catalogBrands = [...counts.entries()]
    .filter(([b]) => CN_AFFIXES.some((x) => b.toLowerCase() === x.toLowerCase()))
    .sort((a, b) => b[1] - a[1])

  return (
    <div className="container" style={{ paddingTop: '2.25rem' }}>
      <nav aria-label="Breadcrumb" className="pb-6 text-[.78rem]" style={{ color: 'var(--color-steel-500)' }}>
        <LLink href="/" className="no-underline hover:underline">{t('crumb.home')}</LLink>
        <span className="px-2">/</span>
        <span style={{ color: 'var(--color-ink-900)' }}>{t('crumb.brands')}</span>
      </nav>

      <header style={{ paddingBottom: '2rem' }}>
        <div className="mb-2 font-mono text-[.68rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-pine-700)' }}>
          {t('brands.eyebrow')}
        </div>
        <h1 className="mb-3 font-display text-3xl font-bold md:text-4xl">{t('brands.title')}</h1>
        <p className="max-w-3xl text-[.95rem] leading-relaxed" style={{ color: 'var(--color-ink-600)' }}>
          {t('brands.sub')}
        </p>
      </header>

      <section style={{ paddingBottom: '3rem' }}>
        <SectionHead eyebrow={t('brands.featuredEyebrow')} title={t('brands.featuredTitle')} sub={t('brands.featuredSub')} />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURED.map((f) => {
            const n = counts.get(countsKey(f.brand)) || 0
            const href = n > 0 ? `/brands/${brandSlug(canonicalBrand(f.brand, countsRaw))}` : '/request-car'
            return (
              <LLink
                key={f.display}
                href={href}
                className="group flex flex-col justify-between rounded-xl border bg-white p-4 no-underline transition-colors hover:border-stone-300"
                style={{ borderColor: 'var(--color-paper-100)' }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-base font-bold">{f.display}</h3>
                    {n > 0 && (
                      <span className="rounded-md px-1.5 py-0.5 font-mono text-[.62rem] font-semibold" style={{ background: 'var(--color-paper-50)', color: 'var(--color-steel-500)' }}>
                        {n.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-[.8rem] leading-snug" style={{ color: 'var(--color-ink-600)' }}>
                    {f.blurb}
                  </p>
                </div>
                <div className="mt-3 text-[.8rem] font-semibold no-underline" style={{ color: 'var(--color-pine-700)' }}>
                  {n > 0 ? t('brands.viewInventory').replace('{b}', String(n)) : t('brands.ctaRequest')}
                  <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden> →</span>
                </div>
              </LLink>
            )
          })}
        </div>
      </section>

      <section style={{ paddingBottom: '4rem' }}>
        <SectionHead eyebrow={t('brands.catalogEyebrow')} title={t('brands.catalogTitle')} sub={t('brands.catalogSub')} />
        <div className="overflow-x-auto rounded-xl border bg-white" style={{ borderColor: 'var(--color-paper-100)' }}>
          <table className="w-full min-w-[26rem] border-collapse text-left text-[.85rem]">
            <thead>
              <tr className="uppercase" style={{ background: 'var(--color-paper-50)' }}>
                <th className="px-4 py-2.5 font-mono text-[.65rem] font-semibold tracking-widest" style={{ color: 'var(--color-steel-500)' }}>Brand</th>
                <th className="px-4 py-2.5 font-mono text-[.65rem] font-semibold tracking-widest" style={{ color: 'var(--color-steel-500)' }}>Units</th>
                <th className="px-4 py-2.5 font-mono text-[.65rem] font-semibold tracking-widest" style={{ color: 'var(--color-steel-500)' }}></th>
              </tr>
            </thead>
            <tbody>
              {catalogBrands.map(([b, n], i) => (
                <tr key={b} style={{ borderTop: '1px solid var(--color-paper-100)' }}>
                  <td className="px-4 py-2.5 font-semibold">{b}</td>
                  <td className="px-4 py-2.5" style={{ color: 'var(--color-ink-600)' }}>{n.toLocaleString()}</td>
                  <td className="px-4 py-2.5 text-right">
                    <LLink
                      href={`/brands/${brandSlug(b)}`}
                      className="font-semibold no-underline hover:underline"
                      style={{ color: 'var(--color-pine-700)' }}
                    >
                      {t('listing.inventoryTitle')} →
                    </LLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="rounded-2xl p-8 text-center" style={{ background: 'var(--color-navy-950)' }}>
        <div className="mx-auto max-w-2xl">
          <div className="mb-2 font-mono text-[.68rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-pine-200)' }}>
            {t('brands.ctaEyebrow')}
          </div>
          <h2 className="mb-3 font-display text-2xl font-bold text-white">{t('brands.ctaTitle')}</h2>
          <p className="mb-6 text-[.9rem] leading-relaxed" style={{ color: 'var(--color-steel-200)' }}>
            {t('brands.ctaSub')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <LLink href="/request-car" className="rounded-lg px-5 py-2.5 text-[.9rem] font-semibold no-underline transition-opacity hover:opacity-90" style={{ background: 'var(--color-pine-400)', color: '#fff' }}>
              {t('brands.ctaRequest')}
            </LLink>
            <LLink href="/inventory" className="rounded-lg border px-5 py-2.5 text-[.9rem] font-semibold no-underline transition-opacity hover:opacity-90" style={{ borderColor: 'var(--color-steel-300)', color: '#fff' }}>
              {t('brands.ctaBrowse')}
            </LLink>
          </div>
        </div>
      </div>
    </div>
  )

  function countsKey(b: string): string {
    return b.toLowerCase()
  }

  function canonicalBrand(display: string, raw: Map<string, number>): string {
    let best = display
    let bestN = -1
    for (const [b, n] of raw) {
      if (b.toLowerCase() === display.toLowerCase() && n > bestN) {
        best = b
        bestN = n
      }
    }
    return best
  }
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div style={{ paddingBottom: '1rem' }}>
      <div className="mb-1.5 font-mono text-[.68rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-pine-700)' }}>
        {eyebrow}
      </div>
      <h2 className="mb-2 font-display text-xl font-bold md:text-2xl">{title}</h2>
      <p className="max-w-3xl text-[.9rem] leading-relaxed" style={{ color: 'var(--color-ink-600)' }}>
        {sub}
      </p>
    </div>
  )
}