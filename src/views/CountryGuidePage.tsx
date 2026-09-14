'use client'
import { useState, useRef, useEffect } from 'react'
import LLink from '../i18n/LLink'
import { useParams } from 'next/navigation'
import { countryGuides, getCountryMeta, getGuideContent } from '../data/countryGuides'
import type { CountryGuide } from '../types'
import { WHATSAPP_URL } from '../config/site'
import { getDictionary, createT } from '../i18n'
import { faqJsonLd, jsonLdScript } from '../lib/jsonld'

const WHATSAPP = WHATSAPP_URL

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    let raf: number
    const step = () => {
      start += increment
      if (start >= target) { setCount(target); return }
      setCount(Math.floor(start))
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [started, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const SECTION_STYLES = {
  light: { background: 'var(--color-paper-50)' },
  white: { background: '#fff' },
  dark: { background: 'var(--color-navy-950)' },
}

export default function CountryGuidePage({ lang }: { lang: string }) {
  const params = useParams()
  const slug = params?.slug as string | undefined
  const t = createT(getDictionary(lang))
  const raw = slug ? (countryGuides as Record<string, any>)[slug] : null
  const metaMap = getCountryMeta(lang)
  const meta = slug ? metaMap[slug] : undefined
  const ov = slug ? getGuideContent(lang, slug) : {}
  const merged = raw && meta ? { ...raw, ...(ov as Record<string, any>), ...meta } : null
  const data: (CountryGuide & Record<string, any>) | null = merged
  const [activeTab, setActiveTab] = useState('standard')
  const [calcResult, setCalcResult] = useState<{ cif: number; duty: number; vat: number; total: number; landed: number; isEv: boolean; dutyRate: number } | null>(null)
  const [dcPrice, setDcPrice] = useState(25000)
  const [dcEngine, setDcEngine] = useState('2300')
  const [dcAge, setDcAge] = useState('new')
  const [dcFreight, setDcFreight] = useState(2000)
  const [dcInsurance, setDcInsurance] = useState(300)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  if (!data) {
    return (
      <main>
        <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('cg.notFoundT')}</h1>
            <p className="mb-8" style={{ color: 'var(--color-steel-200)' }}>{t('cg.notFoundD')}</p>
            <LLink href="/country-guides" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>{t('cg.allGuides')}</LLink>
          </div>
        </section>
      </main>
    )
  }

  const calcDuty = () => {
    const price = dcPrice || 0
    const freight = dcFreight || 0
    const ins = dcInsurance || 0
    const cif = price + freight + ins
    const isEv = dcEngine === 'ev'
    const engineVal = parseInt(dcEngine) || 2300

    let dutyRate = 0.05
    if (slug === 'russia' || slug === 'belarus' || slug === 'kazakhstan') dutyRate = 0.15
    else if (slug === 'bolivia') dutyRate = 0.10
    else if (slug === 'venezuela') dutyRate = engineVal <= 2100 ? 0.20 : 0.40
    else if (slug === 'nigeria') dutyRate = 0.10
    else if (slug === 'colombia') dutyRate = 0.35
    else if (slug === 'poland') dutyRate = 0.10
    else if (slug === 'afghanistan') dutyRate = 0.25
    else if (slug === 'albania') dutyRate = 0.10
    else if (slug === 'cameroon') dutyRate = 0.15
    else if (slug === 'dr-congo') dutyRate = 0.20
    else if (slug === 'ethiopia') dutyRate = 0.40
    else if (slug === 'jamaica') dutyRate = 0.25
    else if (slug === 'senegal') dutyRate = 0.20
    else if (slug === 'syria') dutyRate = 0.25
    else if (slug === 'gabon') dutyRate = 0.15
    else if (slug === 'pakistan') dutyRate = 0.30
    else if (slug === 'cambodia') dutyRate = 0.12

    const duty = isEv ? 0 : cif * dutyRate
    const vatRate = 0.05
    const vat = isEv ? 0 : (cif + duty) * vatRate
    const total = duty + vat
    const landed = cif + total

    setCalcResult({ cif, duty, vat, total, landed, isEv, dutyRate })
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-500)] transition-colors"
  const inputStyle = { borderColor: 'var(--color-paper-100)', background: 'var(--color-paper-50)', color: 'var(--color-ink-900)' }

  const tabs = data.importTabs && data.importTabs.length >= 3 ? data.importTabs : [
    { label: 'Standard Import', infoBox: 'Standard import procedures apply.', bullets: ['Contact our team for detailed import requirements.'], extraText: '' },
    { label: 'Commercial Import', infoBox: 'Commercial import information.', bullets: ['Contact our team for commercial import details.'], extraText: '' },
    { label: 'EV & Green Incentive', infoBox: 'Electric vehicle import information.', bullets: ['Contact our team for EV import details.'], extraText: '' },
  ]

  return (
    <main>
      {data && data.faqItems && data.faqItems.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(data.faqItems))} />
      )}
      <section className="relative overflow-hidden" style={{ background: 'var(--color-navy-950)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, var(--color-blue-500) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 py-20 md:py-28">
          <p className="text-xs font-mono tracking-wider uppercase mb-4 flex items-center gap-2" style={{ color: 'var(--color-blue-500)' }}>
            <span className="w-2 h-2 rounded-full animate-[pulse_2s_ease-in-out_infinite]" style={{ background: 'var(--color-blue-500)' }} />
            {t('cg.expEyebrow')} — {data.name.toUpperCase()}
          </p>
          <p className="text-xs mb-3" style={{ color: 'var(--color-steel-400)' }}>Last updated: August 2026</p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl mb-6" style={{ color: 'var(--color-paper-50)' }}>
            {data.heroTitle}
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-4xl" style={{ color: 'var(--color-steel-200)' }}>
            {data.heroDesc}
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href={`${WHATSAPP}?text=${encodeURIComponent(`Hello, I'm interested in importing vehicles to ${data.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-colors" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
              {t('blg.chatWa')}
            </a>
            <LLink href="/inventory" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-colors" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('tes.ctaInv')}
            </LLink>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14" style={SECTION_STYLES.dark}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {data.stats && data.stats.map((s: { icon: string; target: number; suffix?: string; label: string }, i: number) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(47,115,190,.15)' }}>
                  <svg viewBox="0 0 40 40" className="w-5 h-5" style={{ color: 'var(--color-blue-500)' }}><path d={s.icon} fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
                </div>
                <span className="font-display text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-paper-50)' }}>
                  <AnimatedCounter target={s.target} suffix={s.suffix || ''} />
                </span>
                <span className="text-xs font-medium" style={{ color: 'var(--color-steel-400)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={SECTION_STYLES.light}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono tracking-wider uppercase mb-3" style={{ color: 'var(--color-blue-500)' }}>{t('cg.whoEyebrow')}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--color-ink-900)' }}>{t('cg.importTitle', { name: data.name })}</h2>
          <p className="text-sm md:text-base mb-8 max-w-3xl" style={{ color: 'var(--color-ink-700)' }}>{data.heroDesc?.split('. ').slice(0, 2).join('. ')}</p>

          <div className="flex gap-1 mb-6 flex-wrap">
            {tabs.map((tab: { label: string; infoBox: string; bullets: string[]; extraText: string }, i: number) => (
              <button key={i} onClick={() => setActiveTab(['standard', 'commercial', 'ev'][i])}
                className={`px-5 py-3 rounded-t-lg text-sm font-semibold transition-colors ${activeTab === ['standard', 'commercial', 'ev'][i] ? 'bg-white border border-b-white' : 'bg-[var(--color-paper-100)] text-[var(--color-ink-600)] hover:text-[var(--color-blue-600)]'}`}
                style={activeTab === ['standard', 'commercial', 'ev'][i] ? { borderColor: 'var(--color-paper-100)', color: 'var(--color-blue-600)', marginBottom: -1 } : { border: '1px solid transparent' }}>
                {tab.label}
              </button>
            ))}
          </div>

          {tabs.map((tab: { label: string; infoBox: string; bullets: string[]; extraText: string }, i: number) => {
            const tabKey = ['standard', 'commercial', 'ev'][i]
            if (activeTab !== tabKey) return null
            return (
              <div key={i} className="bg-white rounded-xl border p-6 md:p-8" style={{ borderColor: 'var(--color-paper-100)', borderTopLeftRadius: 0 }}>
                <div className="p-4 rounded-lg mb-6 text-sm leading-relaxed" style={{ background: 'var(--color-blue-50)', borderLeft: '3px solid var(--color-blue-500)', color: 'var(--color-ink-800)' }}>
                  {tab.infoBox}
                </div>
                <ul className="space-y-2 mb-4 text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>
                  {tab.bullets.map((b: string, j: number) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: 'var(--color-blue-500)' }} />
                      {b}
                    </li>
                  ))}
                </ul>
                {tab.extraText && <p className="text-sm leading-relaxed p-4 rounded-lg" style={{ background: 'var(--color-paper-50)', color: 'var(--color-ink-700)' }}>{tab.extraText}</p>}
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 md:py-24" id="dutyEstimator" style={SECTION_STYLES.white}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono tracking-wider uppercase mb-3" style={{ color: 'var(--color-blue-500)' }}>{t('cg.calcEyebrow')}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-ink-900)' }}>{t('cg.calcTitle', { name: data.name })}</h2>
          <p className="text-sm md:text-base mb-8 max-w-3xl" style={{ color: 'var(--color-ink-700)' }}>{data.dutyCalcDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl border p-6 md:p-8" style={{ borderColor: 'var(--color-paper-100)' }}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('cg.priceLbl')}</label>
                <input type="number" value={dcPrice} onChange={(e) => setDcPrice(Number(e.target.value))} min="1000" max="200000" step="500" className={inputCls} style={inputStyle} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('cg.engineLbl')}</label>
                <select value={dcEngine} onChange={(e) => setDcEngine(e.target.value)} className={inputCls} style={inputStyle}>
                  <option value="1000">≤ 1,000cc</option>
                  <option value="1500">1,001–1,500cc</option>
                  <option value="1800">1,501–1,800cc</option>
                  <option value="2300">1,801–2,300cc</option>
                  <option value="3000">2,301–3,000cc</option>
                  <option value="4000">≥ 3,001cc</option>
                  <option value="ev">{t('cg.evOpt')}</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('cg.ageLbl')}</label>
                <select value={dcAge} onChange={(e) => setDcAge(e.target.value)} className={inputCls} style={inputStyle}>
                  <option value="new">{t('cg.ageNew')}</option>
                  <option value="used">{t('cg.ageUsed')}</option>
                  <option value="old">{t('cg.ageOld')}</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('cg.freightLbl')}</label>
                <input type="number" value={dcFreight} onChange={(e) => setDcFreight(Number(e.target.value))} min="500" max="6000" step="100" className={inputCls} style={inputStyle} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('cg.insLbl')}</label>
                <input type="number" value={dcInsurance} onChange={(e) => setDcInsurance(Number(e.target.value))} min="0" max="3000" step="50" className={inputCls} style={inputStyle} />
              </div>
              <button onClick={calcDuty} className="py-3 rounded-xl font-semibold text-sm transition-colors" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
                {t('cg.calcBtn')}
              </button>
            </div>

            <div className="rounded-xl p-6" style={{ background: 'var(--color-paper-50)', border: '1px solid var(--color-paper-100)' }}>
              <h3 className="font-display text-base font-bold mb-4" style={{ color: 'var(--color-ink-900)' }}>{t('cg.resT')}</h3>
              {calcResult ? (
                <>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 text-sm border-b" style={{ borderColor: 'var(--color-paper-100)' }}>
                      <span style={{ color: 'var(--color-ink-600)' }}>{t('cg.cifRow')}</span>
                      <span className="font-semibold" style={{ color: 'var(--color-ink-900)' }}>${calcResult.cif.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2 text-sm border-b" style={{ borderColor: 'var(--color-paper-100)' }}>
                      <span style={{ color: 'var(--color-ink-600)' }}>{t('cg.dutyRow', { pct: (calcResult.dutyRate * 100).toFixed(0) })}</span>
                      <span className="font-semibold" style={{ color: 'var(--color-ink-900)' }}>{calcResult.isEv ? t('cg.evExempt') : `$${calcResult.duty.toLocaleString()}`}</span>
                    </div>
                    <div className="flex justify-between py-2 text-sm border-b" style={{ borderColor: 'var(--color-paper-100)' }}>
                      <span style={{ color: 'var(--color-ink-600)' }}>{t('cg.vatRow')}</span>
                      <span className="font-semibold" style={{ color: 'var(--color-ink-900)' }}>{calcResult.isEv ? t('cg.evExempt') : `$${calcResult.vat.toLocaleString()}`}</span>
                    </div>
                    <div className="flex justify-between py-2 text-sm font-bold" style={{ color: 'var(--color-blue-700)' }}>
                      <span>{t('cg.totalRow')}</span>
                      <span>${calcResult.total.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-lg text-center font-display text-lg font-bold" style={{ background: 'var(--color-blue-50)', color: 'var(--color-blue-600)' }}>
                    {t('cg.landed')} <strong>${calcResult.landed.toLocaleString()}</strong>
                  </div>
                </>
              ) : (
                <p className="text-sm" style={{ color: 'var(--color-ink-700)' }}>{t('cg.emptyHint')}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {data.shippingRoutes && data.shippingRoutes.length > 0 && (
        <section className="py-16 md:py-24" style={SECTION_STYLES.light}>
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
            <p className="text-xs font-mono tracking-wider uppercase mb-3" style={{ color: 'var(--color-blue-500)' }}>{t('cg.shipEyebrow')} — {data.name.toUpperCase()}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--color-ink-900)' }}>{t('cg.shipTitle', { name: data.name })}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.shippingRoutes.map((r: { icon?: string; title: string; summary: string; details: string[] }, i: number) => (
                <div key={i} className="bg-white rounded-2xl border p-6" style={{ borderColor: 'var(--color-paper-100)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{r.icon || '🚢'}</span>
                    <h3 className="font-display text-base font-bold" style={{ color: 'var(--color-ink-900)' }}>{r.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-ink-700)' }}>{r.summary}</p>
                  <ul className="space-y-1.5">
                    {r.details.map((d: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-ink-700)' }}>
                        <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: 'var(--color-blue-500)' }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.popularModels && data.popularModels.length > 0 && (
        <section className="py-16 md:py-24" style={SECTION_STYLES.dark}>
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
            <p className="text-xs font-mono tracking-wider uppercase mb-3" style={{ color: 'var(--color-blue-500)' }}>{t('cg.popEyebrow')} — {data.name.toUpperCase()}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--color-paper-50)' }}>{t('cg.popTitle', { name: data.name })}</h2>
            <p className="text-sm mb-8 max-w-3xl" style={{ color: 'var(--color-steel-400)' }}>{t('cg.popSub', { name: data.name })}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.popularModels.map((m: { rank: number | string; name: string; price: string; desc: string }, i: number) => (
                <div key={i} className="bg-white/5 backdrop-blur rounded-2xl border p-6" style={{ borderColor: 'rgba(255,255,255,.1)' }}>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>{m.rank}</span>
                    <div>
                      <h3 className="font-display text-lg font-bold" style={{ color: 'var(--color-paper-50)' }}>{m.name}</h3>
                      <span className="text-xs font-mono" style={{ color: 'var(--color-blue-500)' }}>{m.price}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-steel-200)' }}>{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <LLink href="/inventory" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
                {t('cg.viewFullInv')}
              </LLink>
            </div>
          </div>
        </section>
      )}

      {data.docSections && data.docSections.length > 0 && (
        <section className="py-16 md:py-24" style={SECTION_STYLES.light}>
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
            <p className="text-xs font-mono tracking-wider uppercase mb-3" style={{ color: 'var(--color-blue-500)' }}>{t('cg.docEyebrow')} — {data.name.toUpperCase()}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--color-ink-900)' }}>{t('cg.docTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.docSections.map((sec: { title: string; items: string[] }, i: number) => (
                <div key={i} className="bg-white rounded-2xl border p-6" style={{ borderColor: 'var(--color-paper-100)' }}>
                  <h3 className="font-display text-base font-bold mb-4" style={{ color: 'var(--color-ink-900)' }}>{sec.title}</h3>
                  <ul className="space-y-2">
                    {sec.items.map((item: string, j: number) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-ink-700)' }}>
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--color-green-track)' }}>
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.whyCards && data.whyCards.length > 0 && (
        <section className="py-16 md:py-24" style={SECTION_STYLES.dark}>
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
            <p className="text-xs font-mono tracking-wider uppercase mb-3" style={{ color: 'var(--color-blue-500)' }}>{t('cg.whyEyebrow')} — {data.name.toUpperCase()}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--color-paper-50)' }}>{t('cg.whyTitle', { name: data.name })}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data.whyCards.map((c: { title: string; desc: string }, i: number) => (
                <div key={i} className="bg-white/5 backdrop-blur rounded-2xl border p-6" style={{ borderColor: 'rgba(255,255,255,.1)' }}>
                  <h3 className="font-display text-base font-bold mb-2" style={{ color: 'var(--color-paper-50)' }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-steel-200)' }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.faqItems && data.faqItems.length > 0 && (
        <section className="py-16 md:py-24" style={SECTION_STYLES.light}>
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
            <p className="text-xs font-mono tracking-wider uppercase mb-3" style={{ color: 'var(--color-blue-500)' }}>{t('cg.faqEyebrow')} — {data.name.toUpperCase()}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--color-ink-900)' }}>{t('cg.faqTitle', { name: data.name })}</h2>
            <div className="max-w-3xl">
              {data.faqItems.map((item: { q: string; a: string }, i: number) => (
                <div key={i} className="border-b" style={{ borderColor: 'var(--color-paper-100)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full flex items-center justify-between py-4 text-left text-sm font-semibold transition-colors hover:text-[var(--color-blue-600)]"
                    style={{ color: 'var(--color-ink-900)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                  >
                    <span className="pr-4">{item.q}</span>
                    <span className={`text-lg shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`} style={{ color: 'var(--color-blue-500)' }}>+</span>
                  </button>
                  <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? '800px' : '0' }}>
                    <p className="pb-4 text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24" style={SECTION_STYLES.dark}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('cg.ctaTitle', { name: data.name })}</h2>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>
            {t('cg.ctaSub', { name: data.name })}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LLink href="/inventory" className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
              {t('tes.ctaInv')}
            </LLink>
            <a href={`${WHATSAPP}?text=${encodeURIComponent(`Hello, I'm interested in importing vehicles to ${data.name}.`)}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('blg.chatWa')}
            </a>
            <LLink href="/country-guides" className="px-6 py-3 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('cg.allGuides')}
            </LLink>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={SECTION_STYLES.light}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <p className="text-xs font-mono tracking-wider uppercase mb-3" style={{ color: 'var(--color-blue-500)' }}>{t('cg.faqEyebrow')}</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8" style={{ color: 'var(--color-ink-900)' }}>{t('nav.howItWorks')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/how-it-works', key: 'nav.howItWorks' },
              { href: '/logistics', key: 'nav.logistics' },
              { href: '/inspection', key: 'nav.inspection' },
              { href: '/payment', key: 'footer.payment' },
              { href: '/warranty', key: 'footer.warranty' },
              { href: '/faq', key: 'footer.faq' },
            ].map((l) => (
              <LLink key={l.href} href={l.href} className="flex items-center justify-between rounded-xl border bg-white px-5 py-4 text-sm font-semibold no-underline transition-all hover:border-[var(--color-blue-500)] hover:text-[var(--color-blue-600)]" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-900)' }}>
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
