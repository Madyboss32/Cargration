import type { CatalogItem } from '../types'
import { whatsappWithMessage, SITE } from '../config/site'
import { carDisplayName, carHighlights, carOverview } from '../lib/carSeo'
import type { SimilarCars } from '../data/cars.server'
import CarGallery from '../components/CarGallery'
import VehicleCarousel from '../components/VehicleCarousel'
import TrackViewItem from '../components/TrackViewItem'
import { getDictionary, createT } from '../i18n'
import { colorLabel, transLabel } from '../i18n/values'
import LLink from '../i18n/LLink'

const TYPE_KEYS: Record<string, string> = {
  suv: 'type.suv', sedan: 'type.sedan', mpv: 'type.mpv', hatchback: 'type.hatchback',
  pickup: 'type.pickup', van: 'type.van', truck: 'type.truck',
}

const FUEL_KEYS: Record<string, string> = {
  Electric: 'fuel.electric',
  Hybrid: 'fuel.hybrid',
  'Plug-in Hybrid': 'fuel.pluginHybrid',
  REEV: 'fuel.reev',
  Petrol: 'fuel.petrol',
  Diesel: 'fuel.diesel',
}

interface CarDetailPageProps {
  car: CatalogItem
  similar: SimilarCars
  lang?: string
}

export default function CarDetailPage({ car, similar, lang = 'en' }: CarDetailPageProps) {
  const t = createT(getDictionary(lang))
  const title = `${carDisplayName(car)} ${car.trim}`.trim()
  const msg = whatsappWithMessage(`Hi, I'm interested in the ${title} — FOB $${car.price.toLocaleString()}`)
  const year = car.year ? String(car.year) : ''
  const typeName = TYPE_KEYS[car.type] ? t(TYPE_KEYS[car.type]) : (car.type || '')
  const fuelName = (car.fuel && FUEL_KEYS[car.fuel]) ? t(FUEL_KEYS[car.fuel]) : (car.fuel || '')

  const vitalStats: [string, string][] = [
    [t('detail.condition'), car.condition === 'new' ? t('common.new') : t('common.used')],
    [year ? t('detail.year') : '', year],
    [t('detail.mileage'), `${(car.km ?? 0).toLocaleString()} km`],
    [t('detail.fuelType'), fuelName || t('fuel.petrol')],
    [t('detail.transmission'), transLabel(t, car.transmission) || '—'],
    [t('detail.drivetrain'), car.drive || '—'],
  ].filter(([k]) => k) as [string, string][]

  const specGroups: { titleKey: string; rows: [string, string][] }[] = [
    {
      titleKey: 'detail.groupIdentity',
      rows: (
        [
          [t('detail.brand'), car.brand],
          [t('detail.model'), car.name],
          [t('detail.trim'), car.trim],
          [t('detail.condition'), car.condition === 'new' ? t('common.new') : t('common.used')],
          [t('detail.modelYear'), year],
          [t('detail.extColor'), colorLabel(t, car.colorName)],
          [t('detail.refId'), car.id?.toUpperCase() || ''],
        ] as [string, string][]
      ).filter(([, v]) => v),
    },
    {
      titleKey: 'detail.groupPowertrain',
      rows: (
        [
          [t('detail.fuelType'), fuelName || t('fuel.petrol')],
          [t('detail.displacement'), car.displacement || ''],
          [t('detail.power'), car.powerKw ? `${car.powerKw} kW (${Math.round(car.powerKw * 1.36)} hp)` : ''],
          [t('detail.battery'), car.batteryKwh ? `${car.batteryKwh} kWh` : ''],
          [t('detail.range'), car.rangeKm ? `${car.rangeKm} km` : ''],
          [t('detail.transmission'), transLabel(t, car.transmission)],
          [t('detail.drivetrain'), car.drive || ''],
        ] as [string, string][]
      ).filter(([, v]) => v),
    },
    {
      titleKey: 'detail.groupBody',
      rows: (
        [
          [t('detail.bodyType'), typeName],
          [t('detail.seats'), car.seats ? t('detail.seatsCount', { n: car.seats }) : ''],
          [t('detail.doors'), car.doors ? String(car.doors) : ''],
          [t('detail.dims'), car.dims ? `${car.dims.split('*').join(' × ')} mm` : ''],
          [t('detail.tires'), car.wheelSize || ''],
          [t('detail.odometer'), `${(car.km ?? 0).toLocaleString()} km`],
        ] as [string, string][]
      ).filter(([, v]) => v),
    },
  ]

  const similarGroups = (
    [
      [similar.sameModel.length > 0, t('detail.moreName', { name: carDisplayName(car) }), similar.sameModel],
      [similar.sameType.length > 0, t('detail.otherTypes', { type: typeName || t('detail.similar') }), similar.sameType],
      [similar.sameFuel.length > 0, t('detail.moreFuel', { fuel: fuelName || t('fuel.petrol') }), similar.sameFuel],
      [similar.sameBudget.length > 0, t('detail.similarBudget', { p: `$${car.price.toLocaleString()}` }), similar.sameBudget],
      [similar.sameEra.length > 0 && !!year, t('detail.sameEra', { a: parseInt(year, 10) - 2, b: parseInt(year, 10) + 2 }), similar.sameEra],
    ] as [boolean, string, CatalogItem[]][]
  ).filter(([show]) => show)

  return (
    <main>
      <TrackViewItem car={car} />
      {/* BREADCRUMB */}
      <section className="py-4 border-b bg-white" style={{ borderColor: 'var(--color-paper-100)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm flex-wrap" style={{ color: 'var(--color-ink-700)' }}>
            <LLink href="/" className="hover:underline">{t('crumb.home')}</LLink>
            <span>/</span>
            <LLink href="/inventory" className="hover:underline">{t('crumb.inventory')}</LLink>
            <span>/</span>
            <LLink href={`/inventory?brand=${encodeURIComponent(car.brand)}`} className="hover:underline">{car.brand}</LLink>
            <span>/</span>
            <span style={{ color: 'var(--color-ink-900)' }}>{car.name}</span>
          </nav>
        </div>
      </section>

      {/* HERO */}
      <section className="py-8 md:py-12" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="mb-4 text-base md:text-lg font-semibold" style={{ color: 'var(--color-ink-900)' }}>
            <a href="/" className="hover:underline" style={{ color: 'var(--color-blue-600)' }}>Chinese Cars for Export →</a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-8 items-start">
            <div className="flex flex-col gap-5 min-w-0">
              <CarGallery images={car.img} alt={title} />
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {vitalStats.map(([k, v]) => (
                  <div key={k} className="rounded-xl border bg-white p-2.5 text-center" style={{ borderColor: 'var(--color-paper-100)' }}>
                    <div className="text-[10px] uppercase tracking-wider font-semibold mb-0.5" style={{ color: 'var(--color-ink-700)' }}>{k}</div>
                    <div className="text-sm font-bold truncate" style={{ color: 'var(--color-ink-900)' }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:sticky lg:top-6">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={car.condition === 'new'
                      ? { background: 'var(--color-green-track)', color: '#fff' }
                      : { background: 'var(--color-blue-100)', color: 'var(--color-blue-600)' }}
                  >
                    {car.condition === 'new' ? t('common.new').toUpperCase() : t('common.used').toUpperCase()}
                  </span>
                  {(car.units ?? 1) > 1 && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: '#0A9E6B' }}>
                      {t('detail.unitsAvailable', { n: car.units ?? 1 })}
                    </span>
                  )}
                  {car.trending && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: 'var(--color-navy-950)' }}>{t('home.trending')}</span>
                  )}
                </div>
                <h1 className="font-display text-2xl md:text-3xl font-bold leading-tight" style={{ color: 'var(--color-ink-900)' }}>{carDisplayName(car)}</h1>
                {car.trim && <p className="text-sm mt-1" style={{ color: 'var(--color-ink-700)' }}>{car.trim}</p>}
              </div>

              <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: 'var(--color-navy-950)' }}>
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest font-mono mb-1" style={{ color: 'var(--color-steel-200)' }}>FOB</div>
                    <div className="font-display text-3xl md:text-4xl font-bold" style={{ color: '#fff' }}>${car.price.toLocaleString()}</div>
                  </div>
                  <div className="text-right text-xs" style={{ color: 'var(--color-green-track)' }}>
                    <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ background: 'var(--color-green-track)' }} />{t('detail.inStock')}
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-steel-200)' }}>
                  {t('detail.priceNote')}
                </p>
                <a href={msg} target="_blank" rel="noopener noreferrer"
                  className="text-center py-3 rounded-xl font-semibold text-sm transition-transform hover:-translate-y-0.5"
                  style={{ background: 'var(--color-whatsapp)', color: '#fff' }}>
                  {t('common.chatOnWhatsapp')} — {SITE.phoneDisplay}
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <LLink href="/logistics" className="text-center py-2.5 rounded-xl font-semibold text-xs border" style={{ borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
                    {t('detail.shippingQuote')}
                  </LLink>
                  <LLink href={`/request-car?ref=${encodeURIComponent(car.id || '')}`} className="text-center py-2.5 rounded-xl font-semibold text-xs border" style={{ borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
                    {t('detail.requestReport')}
                  </LLink>
                </div>
                <div className="pt-1 flex justify-between text-[11px] font-mono" style={{ color: 'var(--color-steel-200)' }}>
                  <span>REF {car.id?.toUpperCase()}</span>
                  <span>{car.loc}</span>
                </div>
              </div>

              <ul className="grid grid-cols-3 gap-2 text-[11px] font-medium text-center" style={{ color: 'var(--color-ink-700)' }}>
                {[t('detail.trust1'), t('detail.trust2'), t('detail.trust3')].map((s) => (
                  <li key={s} className="rounded-lg bg-white border py-2 px-1" style={{ borderColor: 'var(--color-paper-100)' }}>
                    <span style={{ color: 'var(--color-green-track)' }} className="mr-1">✓</span>{s}
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl border p-4 flex flex-col gap-1.5" style={{ borderColor: 'var(--color-paper-100)', background: 'var(--color-paper-50)' }}>
                <h3 className="font-display text-sm font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('detail.shipBoxT')}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{t('detail.shipBoxD')}</p>
                <LLink href="/logistics" className="text-center py-2 rounded-lg font-semibold text-xs mt-1" style={{ background: '#1D70B8', color: '#fff' }}>
                  {t('detail.shippingQuote')} →
                </LLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-10 md:py-14 border-t bg-white" style={{ borderColor: 'var(--color-paper-100)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-10 items-start">
          <div className="flex flex-col gap-8 min-w-0">

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold mb-4" style={{ color: 'var(--color-ink-900)' }}>
                {t('detail.about', { name: carDisplayName(car) })}
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed max-w-3xl" style={{ color: 'var(--color-ink-700)' }}>
                {carOverview(car).map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {carHighlights(car).length > 0 && (
                <>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider mt-6 mb-3" style={{ color: 'var(--color-ink-900)' }}>{t('detail.keyFeatures')}</h3>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm" style={{ color: 'var(--color-ink-700)' }}>
                    {carHighlights(car).map((f, i) => (
                      <li key={i} className="flex gap-2">
                        <span style={{ color: 'var(--color-green-track)' }}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold mb-4" style={{ color: 'var(--color-ink-900)' }}>{t('detail.specs')}</h2>
              <div className="rounded-2xl border overflow-hidden" style={{ borderColor: 'var(--color-paper-100)' }}>
                {specGroups.map((g, gi) => (
                  g.rows.length > 0 && (
                    <div key={g.titleKey} className={gi > 0 ? 'border-t' : ''} style={{ borderColor: 'var(--color-paper-100)' }}>
                      <div className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest" style={{ background: 'var(--color-paper-50)', color: 'var(--color-blue-600)' }}>
                        {t(g.titleKey)}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {g.rows.map(([k, v], ri) => (
                          <div key={`${k}-${ri}`} className="flex justify-between items-center gap-4 px-5 py-2.5 text-sm border-b last:border-b-0" style={{ borderColor: 'var(--color-paper-100)' }}>
                            <span style={{ color: 'var(--color-ink-700)' }}>{k}</span>
                            <span className="font-semibold text-right" style={{ color: 'var(--color-ink-900)' }}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold mb-4" style={{ color: 'var(--color-ink-900)' }}>{t('detail.processTitle')}</h2>
              <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
                {([1, 2, 3, 4, 5] as const).map((n) => (
                  <li key={n} className="rounded-2xl border p-4 flex flex-col gap-1.5" style={{ borderColor: 'var(--color-paper-100)' }}>
                    <span className="font-display text-lg font-bold" style={{ color: 'var(--color-blue-500)' }}>{String(n).padStart(2, '0')}</span>
                    <span className="text-sm font-bold" style={{ color: 'var(--color-ink-900)' }}>{t(`detail.step${n}`)}</span>
                    <span className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{t(`detail.step${n}d`)}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border p-6" style={{ borderColor: 'var(--color-paper-100)', background: 'var(--color-paper-50)' }}>
              <h2 className="font-display text-lg font-bold mb-3" style={{ color: 'var(--color-ink-900)' }}>{t('detail.included')}</h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm" style={{ color: 'var(--color-ink-700)' }}>
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <li key={n} className="flex items-center gap-2"><span style={{ color: 'var(--color-green-track)' }}>✓</span> {t(`detail.inc${n}`)}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="hidden lg:flex flex-col gap-4 h-fit lg:sticky lg:top-6">
            <div className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: 'var(--color-navy-950)' }}>
              <h3 className="font-display text-base font-bold" style={{ color: '#fff' }}>{t('home.talkAdvisor')}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-steel-200)' }}>
                {t('detail.asideSub')}
              </p>
              <a href={msg} target="_blank" rel="noopener noreferrer" className="text-center py-2.5 rounded-xl font-semibold text-sm" style={{ background: 'var(--color-whatsapp)', color: '#fff' }}>
                {t('common.chatOnWhatsapp')}
              </a>
              <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Inquiry: ${title} (${car.id})`)}`} className="text-center py-2.5 rounded-xl font-semibold text-xs border" style={{ borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
                {SITE.email}
              </a>
              <LLink href="/inspection" className="text-center text-xs underline underline-offset-2" style={{ color: 'var(--color-steel-200)' }}>
                {t('detail.inspectionLink')}
              </LLink>
            </div>
            <div className="rounded-2xl border p-5 flex flex-col gap-2.5" style={{ borderColor: 'var(--color-paper-100)' }}>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-ink-700)' }}>{t('detail.protection')}</h3>
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex gap-2 text-xs" style={{ color: 'var(--color-ink-700)' }}>
                  <span style={{ color: 'var(--color-blue-500)' }}>◆</span>{t(`detail.prot${n}`)}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* SIMILAR VEHICLES */}
      {similarGroups.length > 0 && (
        <section className="py-12 md:py-16 border-t" style={{ background: 'var(--color-paper-50)', borderColor: 'var(--color-paper-100)' }}>
          <div className="max-w-[1320px] mx-auto">
            <div className="px-4 sm:px-6 mb-8">
              <span className="text-xs font-mono tracking-widest uppercase block mb-1" style={{ color: 'var(--color-blue-500)' }}>{t('detail.keepBrowsing')}</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('detail.similar')}</h2>
            </div>
            <div className="flex flex-col gap-12">
              {similarGroups.map(([, groupTitle, cars]) => (
                <VehicleCarousel key={groupTitle} title={groupTitle} vehicles={cars} count={cars.length} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <section className="py-14" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3" style={{ color: '#fff' }}>
            {t('detail.ctaTitle', { car: carDisplayName(car) })}
          </h2>
          <p className="text-sm md:text-base mb-7 max-w-xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>
            {t('detail.ctaSub')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={msg} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: 'var(--color-whatsapp)', color: '#fff' }}>
              {t('common.chatOnWhatsapp')}
            </a>
            <LLink href="/contact" className="px-6 py-3 rounded-xl font-semibold text-sm border" style={{ borderColor: 'rgba(255,255,255,.3)', color: '#fff' }}>
              {t('detail.sendInquiry')}
            </LLink>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA BAR */}
      <div
        className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t px-4 py-3 flex items-center gap-3"
        style={{ background: 'rgba(255,255,255,.96)', borderColor: 'var(--color-paper-100)', backdropFilter: 'blur(8px)', paddingBottom: 'max(.75rem, env(safe-area-inset-bottom))' }}
      >
        <div className="min-w-0">
          <div className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--color-ink-700)' }}>FOB</div>
          <div className="font-display text-lg font-bold leading-none" style={{ color: 'var(--color-ink-900)' }}>${car.price.toLocaleString()}</div>
        </div>
        <a
          href={msg}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm ml-auto shrink-0"
        >
          <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          {t('common.chatOnWhatsapp')}
        </a>
      </div>
    </main>
  )
}
