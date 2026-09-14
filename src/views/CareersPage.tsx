import { WHATSAPP_URL } from '../config/site'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'
import LLink from '../i18n/LLink'

const WHATSAPP = WHATSAPP_URL

export default function CareersPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const openings = [
    { title: 'Logistics Coordinator', deptKey: 'car.deptOps', location: 'Beijing / Guizhou', typeKey: 'car.fulltime' },
    { title: 'Vehicle Inspector', deptKey: 'car.deptQa', location: 'Tianjin / Guizhou', typeKey: 'car.fulltime' },
    { title: 'Sales Manager — Middle East', deptKey: 'car.deptSales', location: 'Beijing / Remote', typeKey: 'car.fulltime' },
    { title: 'Russian-Speaking Account Manager', deptKey: 'car.deptSupport', location: 'Beijing / Guizhou', typeKey: 'car.fulltime' },
  ]
  const perks = [1, 2, 3].map((i) => ({ title: t(`car.p${i}t`), desc: t(`car.p${i}d`) }))
  const bc: BreadcrumbItem[] = [{ label: t('footer.careers') }]

  return (
    <main>
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <span className="text-xs font-mono tracking-wider uppercase mb-4 block" style={{ color: 'var(--color-blue-500)' }}>{t('car.eyebrow')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('car.title')}</h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>
            {t('car.sub')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {perks.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border p-6 flex flex-col gap-3" style={{ borderColor: 'var(--color-paper-100)' }}>
                <h2 className="font-display text-base font-bold" style={{ color: 'var(--color-ink-900)' }}>{item.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--color-ink-900)' }}>{t('car.openTitle')}</h2>
          <div className="flex flex-col gap-3">
            {openings.map((o, i) => (
              <div key={i} className="flex items-center justify-between gap-4 p-5 rounded-2xl border bg-white" style={{ borderColor: 'var(--color-paper-100)' }}>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-base font-bold" style={{ color: 'var(--color-ink-900)' }}>{o.title}</h3>
                  <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--color-ink-700)' }}>
                    <span>{t(o.deptKey)}</span>
                    <span>·</span>
                    <span>{o.location}</span>
                    <span>·</span>
                    <span>{t(o.typeKey)}</span>
                  </div>
                </div>
                <a href={`${WHATSAPP}?text=${encodeURIComponent(`Hi, I'm interested in the ${o.title} position at Cargration.`)}`} target="_blank" rel="noopener noreferrer" className="shrink-0 px-5 py-2 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
                  {t('car.apply')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
            <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: 'var(--color-navy-950)' }}>
              <h2 className="font-display text-xl md:text-2xl font-bold" style={{ color: 'var(--color-paper-50)' }}>{t('car.cultureTitle')}</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-steel-200)' }}>{t('car.cultureD')}</p>
            </div>
            <div>
              <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('car.procEyebrow')}</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8" style={{ color: 'var(--color-ink-900)' }}>{t('car.procTitle')}</h2>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-display text-white shrink-0" style={{ background: 'var(--color-blue-500)' }}>{String(n).padStart(2, '0')}</div>
                    <div>
                      <h3 className="font-display text-base font-bold mb-1" style={{ color: 'var(--color-ink-900)' }}>{t(`car.proc${n}t`)}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{t(`car.proc${n}d`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-ink-900)' }}>{t('car.noRoleT')}</h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'var(--color-ink-700)' }}>
            {t('car.noRoleD')}
          </p>
          <a href={`${WHATSAPP}?text=${encodeURIComponent("Hello, I'd like to send my CV for a position at Cargration.")}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
            {t('car.sendCv')}
          </a>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <h2 className="font-display text-lg font-bold mb-4 text-center" style={{ color: 'var(--color-ink-900)' }}>{t('contact.faqTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              { href: '/about', key: 'nav.about' },
              { href: '/how-it-works', key: 'nav.howItWorks' },
              { href: '/inspection', key: 'nav.inspection' },
              { href: '/logistics', key: 'nav.logistics' },
              { href: '/blog', key: 'footer.blogNews' },
              { href: '/contact', key: 'footer.contact' },
            ].map((l) => (
              <LLink key={l.href} href={l.href} className="flex items-center justify-between rounded-xl border bg-white px-5 py-3 text-sm font-semibold no-underline transition-all hover:border-[var(--color-blue-500)] hover:text-[var(--color-blue-600)]" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-900)' }}>
                {t(l.key)}
                <span aria-hidden="true" style={{ color: 'var(--color-blue-500)' }}>→</span>
              </LLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
