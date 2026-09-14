import LLink from '../i18n/LLink'
import FAQAccordion from '../components/FAQAccordion'
import { WHATSAPP_URL } from '../config/site'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'

const WHATSAPP = WHATSAPP_URL

const routes = [
  { from: 'Tianjin', to: 'Vladivostok', method: 'ocean', days: '7–12' },
  { from: 'Shanghai', to: 'Jebel Ali, UAE', method: 'ocean', days: '18–24' },
  { from: 'Guangzhou', to: 'Abidjan, Côte d\'Ivoire', method: 'ocean', days: '25–35' },
  { from: 'Shanghai', to: 'Santos, Brazil', method: 'ocean', days: '30–45' },
  { from: 'Shenzhen', to: 'Algiers, Algeria', method: 'ocean', days: '22–30' },
  { from: 'Alashankou', to: 'Moscow, Russia', method: 'rail', days: '14–20' },
  { from: 'Alashankou', to: 'Almaty, Kazakhstan', method: 'rail', days: '12–16' },
  { from: 'Khorgos', to: 'Almaty, Kazakhstan', method: 'truck', days: '2–4' },
  { from: 'Khorgos', to: 'Moscow, Russia', method: 'truck', days: '16–22' },
]

const portInfo = [
  { name: 'log.port1', desc: 'log.port1d' },
  { name: 'log.port2', desc: 'log.port2d' },
  { name: 'log.port3', desc: 'log.port3d' },
  { name: 'log.port4', desc: 'log.port4d' },
  { name: 'log.port5', desc: 'log.port5d' },
  { name: 'log.port6', desc: 'log.port6d' },
  { name: 'log.port7', desc: 'log.port7d' },
]

const transitTable = [
  { dest: 'Vladivostok', sea: '7–12', rail: '', land: '' },
  { dest: 'Moscow', sea: '25–32', rail: '14–20', land: '16–22' },
  { dest: 'Yekaterinburg', sea: '22–28', rail: '12–18', land: '16–20' },
  { dest: 'Novosibirsk', sea: '20–26', rail: '12–16', land: '14–18' },
  { dest: 'Almaty, Kazakhstan', sea: '', rail: '', land: '2–4' },
  { dest: 'Tashkent, Uzbekistan', sea: '', rail: '', land: '10–14' },
  { dest: 'Jebel Ali, UAE', sea: '18–24', rail: '', land: '' },
  { dest: 'Abidjan, Côte d\'Ivoire', sea: '25–35', rail: '', land: '' },
  { dest: 'Santos, Brazil', sea: '30–45', rail: '', land: '' },
  { dest: 'Algiers, Algeria', sea: '22–30', rail: '', land: '' },
]

export default function LogisticsPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const bc: BreadcrumbItem[] = [{ label: t('nav.logistics') }]

  return (
    <main>
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <span className="text-xs font-mono tracking-wider uppercase mb-4 block" style={{ color: 'var(--color-blue-500)' }}>{t('log.eyebrow')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('log.title')}</h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>
            {t('log.sub')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('log.routesEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('log.routesTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes.map((r, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border bg-white" style={{ borderColor: 'var(--color-paper-100)' }}>
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-xs font-mono" style={{ color: 'var(--color-ink-700)' }}>{t(`log.${r.method}`)}</span>
                  <span className="text-sm font-bold" style={{ color: 'var(--color-ink-900)' }}>{r.from}</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" style={{ color: 'var(--color-blue-500)' }}>
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-bold" style={{ color: 'var(--color-ink-900)' }}>{r.to}</span>
                </div>
                <span className="text-sm font-mono font-bold px-3 py-1 rounded-full" style={{ background: 'var(--color-blue-100)', color: 'var(--color-blue-600)' }}>{r.days} {t('log.days')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('log.portEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('log.portTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portInfo.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border p-6 flex flex-col gap-3" style={{ borderColor: 'var(--color-paper-100)', borderTop: '3px solid var(--color-blue-500)' }}>
                <h3 className="font-display text-base font-bold" style={{ color: 'var(--color-ink-900)' }}>{t(p.name)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{t(p.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('log.transitEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('log.transitTitle')}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border" style={{ borderColor: 'var(--color-paper-100)' }}>
              <thead>
                <tr style={{ background: 'var(--color-navy-950)' }}>
                  <th className="text-start px-5 py-3 font-semibold" style={{ color: 'var(--color-paper-50)' }}>{t('log.thDest')}</th>
                  <th className="text-start px-5 py-3 font-semibold" style={{ color: 'var(--color-paper-50)' }}>{t('log.thSea')}</th>
                  <th className="text-start px-5 py-3 font-semibold" style={{ color: 'var(--color-paper-50)' }}>{t('log.thRail')}</th>
                  <th className="text-start px-5 py-3 font-semibold" style={{ color: 'var(--color-paper-50)' }}>{t('log.thLand')}</th>
                </tr>
              </thead>
              <tbody>
                {transitTable.map((r, i) => (
                  <tr key={i} className="border-t" style={{ borderColor: 'var(--color-paper-100)', background: i % 2 === 0 ? '#fff' : 'var(--color-paper-50)' }}>
                    <td className="px-5 py-3 font-semibold" style={{ color: 'var(--color-ink-900)' }}>{r.dest}</td>
                    <td className="px-5 py-3" style={{ color: 'var(--color-ink-700)' }}>{r.sea ? `${r.sea} ${t('log.days')}` : '—'}</td>
                    <td className="px-5 py-3" style={{ color: 'var(--color-ink-700)' }}>{r.rail ? `${r.rail} ${t('log.days')}` : '—'}</td>
                    <td className="px-5 py-3" style={{ color: 'var(--color-ink-700)' }}>{r.land ? `${r.land} ${t('log.days')}` : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="khorgos" className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('log.khorgosEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('log.khorgosTitle')}</h2>
            <p className="text-base max-w-2xl mx-auto mt-3" style={{ color: 'var(--color-ink-700)' }}>{t('log.khorgosSub')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex flex-col gap-3 rounded-2xl border bg-white p-6" style={{ borderColor: 'var(--color-paper-100)', borderTop: '3px solid var(--color-blue-500)' }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold font-display text-white" style={{ background: 'var(--color-navy-950)' }}>{String(n).padStart(2, '0')}</div>
                <h3 className="font-display text-base font-bold leading-snug" style={{ color: 'var(--color-ink-900)' }}>{t(`log.khorgos${n}t`)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{t(`log.khorgos${n}d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('log.incEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('log.incTitle')}</h2>
            <p className="text-base max-w-2xl mx-auto mt-3" style={{ color: 'var(--color-ink-700)' }}>{t('log.incSub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { code: 'FOB', dKey: 'log.fobD', best: 'log.fobBest' },
              { code: 'CIF', dKey: 'log.cifD', best: 'log.cifBest' },
              { code: 'CIP', dKey: 'log.cipD', best: 'log.cipBest' },
              { code: 'DAP', dKey: 'log.dapD', best: 'log.dapBest' },
            ].map((term) => (
              <div key={term.code} className="rounded-2xl border bg-white p-6 flex flex-col gap-3" style={{ borderColor: 'var(--color-paper-100)', borderTop: '3px solid var(--color-blue-500)' }}>
                <span className="font-display text-2xl font-bold" style={{ color: 'var(--color-navy-950)' }}>{term.code}</span>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-ink-700)' }}>{t(term.dKey)}</p>
                <p className="text-xs font-semibold rounded-lg px-3 py-2" style={{ background: 'var(--color-blue-100)', color: 'var(--color-blue-600)' }}>{t(term.best)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block" style={{ color: 'var(--color-blue-500)' }}>{t('log.faqEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('log.faqTitle')}</h2>
          </div>
          <FAQAccordion lang={lang} />
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('log.ctaTitle')}</h2>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>
            {t('log.ctaSub')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I need a shipping quote for vehicle export from China.')}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
              {t('log.ctaQuote')}
            </a>
            <LLink href="/contact" className="px-6 py-3 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('nav.contact')}
            </LLink>
          </div>
        </div>
      </section>
    </main>
  )
}
