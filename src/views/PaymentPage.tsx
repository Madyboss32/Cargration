'use client'
import LLink from '../i18n/LLink'
import { WHATSAPP_URL } from '../config/site'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'
import { faqJsonLd, jsonLdScript } from '../lib/jsonld'

const WHATSAPP = WHATSAPP_URL

const currencies = ['USD', 'EUR', 'CNY', 'GBP', 'JPY', 'AED', 'RUB', 'BRL', 'KRW', 'SGD']

export default function PaymentPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const faqs = [1, 2, 3, 4].map((i) => ({ q: t(`pay.q${i}`), a: t(`pay.a${i}`) }))
  const steps = [1, 2, 3].map((i) => ({ n: i, title: t(`pay.st${i}t`), desc: t(`pay.st${i}d`) }))
  const bc: BreadcrumbItem[] = [{ label: t('footer.payment') }]

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqs))} />
      <section className="relative overflow-hidden" style={{ background: 'var(--color-navy-950)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #1D70B8 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-20 md:py-28">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-wider uppercase mb-4 block text-[#1D70B8]">{t('pay.eyebrow')}</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--color-paper-50)' }}>
              {t('pay.title1')}{' '}
              <span style={{ color: '#1D70B8' }}>{t('pay.title2')}</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>
              {t('pay.sub')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('pay.howEyebrow')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161] mb-6">{t('pay.howTitle')}</h2>
              <p className="text-base text-[#555555] mb-8 leading-relaxed">{t('pay.howSub')}</p>
              <div className="flex flex-col gap-5">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1D70B8] flex items-center justify-center text-sm font-bold font-display text-white shrink-0">{s.n}</div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-[#0A3161] mb-1">{s.title}</h3>
                      <p className="text-sm text-[#555555]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-8" style={{ borderColor: '#E7E5E4' }}>
              <h3 className="font-display text-lg font-bold text-[#0A3161] mb-4">{t('pay.currenciesT')}</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {currencies.map(c => (
                  <span key={c} className="px-3 py-1.5 rounded-lg text-sm font-mono font-semibold bg-blue-50 text-[#1D70B8] border border-blue-100">{c}</span>
                ))}
              </div>

              <div className="rounded-xl bg-blue-50 border border-blue-100 p-5 mb-6">
                <h4 className="font-display text-sm font-bold text-[#0A3161] mb-2">{t('pay.ratePolicyT')}</h4>
                <p className="text-sm text-[#555555] leading-relaxed">{t('pay.ratePolicy')}</p>
              </div>

              <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to know the payment method and bank account details.')}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#1D70B8', color: '#fff' }}>
                {t('pay.ctaBankBtn')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F7FAFA' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('pay.bankEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161]">{t('pay.bankTitle')}</h2>
            <p className="text-base text-[#555555] max-w-2xl mx-auto mt-3">{t('pay.bankSub')}</p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="rounded-2xl border bg-white p-8 text-center" style={{ borderColor: '#E7E5E4' }}>
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
                <svg viewBox="0 0 24 24" fill="#1D70B8" className="w-8 h-8"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm10 2v8H8V8h8zm-2 2h-4v4h4v-4z"/></svg>
              </div>
              <div className="space-y-3 text-sm text-[#555555]">
                <p><strong className="text-[#0A3161]">{t('pay.lBank')}</strong> Industrial and Commercial Bank of China (ICBC)</p>
                <p><strong className="text-[#0A3161]">{t('pay.lAccountName')}</strong> Beijing**********</p>
                <p className="font-mono text-lg font-bold text-[#0A3161] tracking-widest">0200300**********</p>
                <p className="text-xs text-stone-400 mt-2">{t('pay.fullNote')}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-stone-100">
                <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to receive the full bank account details for payment.')}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#1D70B8', color: '#fff' }}>
                  {t('pay.ctaFullDetails')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F7FAFA' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('pay.secEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161]">{t('pay.secTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="rounded-xl border bg-white p-6" style={{ borderColor: '#E7E5E4' }}>
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center mb-3">
                  <svg viewBox="0 0 20 20" fill="#059669" className="w-4 h-4"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <h3 className="font-display text-sm font-bold text-[#0A3161] leading-snug">{t(`pay.sec${n}`)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">FAQ</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161]">{t('pay.faqTitle')}</h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((item, i) => (
                <div key={i} className="border rounded-xl bg-white overflow-hidden" style={{ borderColor: '#E7E5E4' }}>
                  <details className="group">
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                      <span className="font-semibold text-sm md:text-base text-[#0A3161]">{item.q}</span>
                      <span className="shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-lg leading-none transition-transform duration-200 group-open:rotate-45 text-[#1D70B8]">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-sm leading-relaxed text-[#555555]">{item.a}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--color-navy-950)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(29,112,184,.2) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('pay.ctaTitle')}</h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>
            {t('pay.ctaSub')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LLink href="/inventory" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#1D70B8', color: '#fff' }}>
              {t('hero.browse')}
            </LLink>
            <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to receive the bank account details and payment instructions.')}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('pay.ctaDetails')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              { href: '/how-it-works', key: 'nav.howItWorks' },
              { href: '/logistics', key: 'nav.logistics' },
              { href: '/warranty', key: 'footer.warranty' },
              { href: '/faq', key: 'footer.faq' },
              { href: '/contact', key: 'nav.contact' },
              { href: '/inventory', key: 'nav.inventory' },
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
