import LLink from '../i18n/LLink'
import { WHATSAPP_URL } from '../config/site'
import { getDictionary, createT } from '../i18n'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'
import Counter from '../components/InspectionCounters'
import { INSPECTION_CATEGORIES, CHECKLIST_ITEMS_PER_CATEGORY } from '../data/inspectionChecklist'

const WHATSAPP = WHATSAPP_URL

export default function InspectionPage({ lang }: { lang: string }) {
  const t = createT(getDictionary(lang))
  const stats = [
    { v: 12400, s: '+', l: t('ins.stat1') },
    { v: 98, s: '%', l: t('ins.stat2') },
    { v: 200, l: t('ins.stat3') },
    { v: 3, l: t('ins.stat4') },
  ]
  const items = [
    { icon: '🔧', t: t('ins.p1t'), d: t('ins.p1d') },
    { icon: '🛞', t: t('ins.p2t'), d: t('ins.p2d') },
    { icon: '⚡', t: t('ins.p3t'), d: t('ins.p3d') },
    { icon: '🎨', t: t('ins.p4t'), d: t('ins.p4d') },
    { icon: '🪑', t: t('ins.p5t'), d: t('ins.p5d') },
    { icon: '🦴', t: t('ins.p6t'), d: t('ins.p6d') },
  ]
  const stages = [1, 2, 3].map((n) => ({
    tag: t(`ins.s${n}tag`),
    title: t(`ins.s${n}t`),
    desc: t(`ins.s${n}d`),
    items: [1, 2, 3, 4, 5].map((i) => ({ t: t(`ins.s${n}i${i}t`), d: t(`ins.s${n}i${i}d`) })),
    outT: t(`ins.s${n}outT`),
    out: t(`ins.s${n}out`),
  }))
  const whyItems = [1, 2, 3, 4].map((i) => ({ t: t(`ins.w${i}t`), d: t(`ins.w${i}d`) }))
  const faqs = [1, 2, 3, 4, 5, 6].map((i) => ({ q: t(`ins.q${i}`), a: t(`ins.a${i}`) }))
  const checklist = INSPECTION_CATEGORIES.map((cat) => ({
    cat,
    title: t(`chk.${cat}Name`),
    items: Array.from({ length: CHECKLIST_ITEMS_PER_CATEGORY }, (_, j) => ({
      title: t(`chk.${cat}.${j + 1}t`),
      desc: t(`chk.${cat}.${j + 1}d`),
    })),
  }))
  const vhPoints = [1, 2, 3, 4].map((i) => ({ t: t(`vh.p${i}t`), d: t(`vh.p${i}d`) }))
  const bc: BreadcrumbItem[] = [{ label: t('nav.inspection') }]

  return (
    <main>
      <section className="relative overflow-hidden" style={{ background: 'var(--color-navy-950)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #1D70B8 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-20 md:py-28">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-wider uppercase mb-4 block text-[#1D70B8]">{t('ins.eyebrow')}</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--color-paper-50)' }}>
              {t('ins.title1')}{' '}
              <span style={{ color: '#1D70B8' }}>{t('ins.title2')}</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>
              {t('ins.sub')}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <LLink href="/inventory" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm" style={{ background: '#1D70B8', color: '#fff' }}>
                {t('ins.ctaBrowse')}
              </LLink>
              <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to know more about your inspection process.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-colors" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
                {t('ins.ctaAsk')}
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                { href: '#checklist', label: t('chk.title') },
                { href: '#history', label: t('vh.title') },
                { href: '#faq', label: t('ins.faqTitle') },
              ].map((l) => (
                <a key={l.href} href={l.href} className="px-4 py-2 rounded-lg text-xs font-semibold no-underline border transition-colors hover:border-[#1D70B8] hover:text-[#1D70B8]" style={{ borderColor: 'var(--color-steel-700)', color: 'var(--color-paper-50)' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#F7FAFA' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200">
            {stats.map((s, i) => (
              <div key={i} className="py-6 px-4 text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-[#1D70B8]"><Counter target={s.v} s={s.s || ''} /></div>
                <div className="text-xs text-[#555555] mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('ins.twoEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161]">{t('ins.twoTitle')}</h2>
            <p className="text-base text-[#555555] max-w-2xl mx-auto mt-3">{t('ins.twoSub')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {stages.map((stage, idx) => (
              <div key={idx} className="rounded-2xl border relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: '#E7E5E4' }}>
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: '#1D70B8' }} />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1D70B8] text-white font-display font-bold text-sm">{idx + 1}</span>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#1D70B8]">{stage.tag}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0A3161] mb-3">{stage.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed mb-6">{stage.desc}</p>
                  <div className="space-y-3 mb-6">
                    {stage.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg viewBox="0 0 20 20" fill="#1D70B8" className="w-5 h-5 shrink-0 mt-0.5"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                        <div>
                          <p className="text-sm font-semibold text-[#0A3161]">{item.t}</p>
                          <p className="text-xs text-[#555555]">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl p-4 bg-blue-50 border border-blue-100 text-sm text-[#555555] leading-relaxed">
                    <strong className="text-[#0A3161]">{stage.outT}</strong> {stage.out}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F7FAFA' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('ins.checkEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161]">{t('ins.checkTitle')}</h2>
            <p className="text-base text-[#555555] max-w-2xl mx-auto mt-3">{t('ins.checkSub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div key={i} className="group rounded-xl p-6 bg-white border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" style={{ borderColor: '#E7E5E4' }}>
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h3 className="font-display text-base font-bold text-[#0A3161] mb-2">{item.t}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="checklist" className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('chk.eyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161]">{t('chk.title')}</h2>
            <p className="text-base text-[#555555] max-w-2xl mx-auto mt-3">{t('chk.sub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {checklist.map((cat) => (
              <div key={cat.cat} className="flex flex-col gap-4 rounded-2xl border bg-white p-6" style={{ borderColor: '#E7E5E4', borderTop: '3px solid #1D70B8' }}>
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold font-display text-white" style={{ background: '#0A3161' }}>{String((checklist.findIndex((c) => c.cat === cat.cat) || 0) + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-base font-bold text-[#0A3161]">{cat.title}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg viewBox="0 0 20 20" fill="#1D70B8" className="w-4 h-4 shrink-0 mt-0.5"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                      <div>
                        <p className="text-sm font-semibold text-[#0A3161]">{item.title}</p>
                        <p className="text-xs text-[#555555] leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="py-20" style={{ background: '#F7FAFA' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('vh.eyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161]">{t('vh.title')}</h2>
            <p className="text-base text-[#555555] max-w-2xl mx-auto mt-3">{t('vh.sub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {vhPoints.map((point, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6" style={{ borderColor: '#E7E5E4' }}>
                <span className="text-2xl block mb-3">🔎</span>
                <h3 className="font-display text-base font-bold text-[#0A3161] mb-2">{point.t}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{point.d}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl p-8 bg-blue-50 border border-blue-100">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-[#0A3161] mb-2">{t('vh.guarT')}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{t('vh.guarD')}</p>
              </div>
              <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to ask about vehicle history verification.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm shrink-0" style={{ background: '#1D70B8', color: '#fff' }}>
                {t('vh.ctaAsk')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            <div>
              <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('ins.whyEyebrow')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161] mb-6">{t('ins.whyTitle')}</h2>
              <div className="space-y-5">
                {whyItems.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 20 20" fill="#1D70B8" className="w-4 h-4"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0A3161] mb-1">{item.t}</h3>
                      <p className="text-sm text-[#555555] leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8 bg-blue-50 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <svg viewBox="0 0 24 24" fill="#1D70B8" className="w-8 h-8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                <h3 className="font-display text-lg font-bold text-[#0A3161]">{t('ins.guarT')}</h3>
              </div>
              <div className="space-y-4 text-sm text-[#555555] leading-relaxed">
                <p>{t('ins.guar1')}</p>
                <p>{t('ins.guar2')}</p>
                <p>{t('ins.guar3')}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to learn more about your inspection guarantee.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm" style={{ background: '#1D70B8', color: '#fff' }}>
                  {t('ins.ctaQuality')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F7FAFA' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161]">{t('ins.faqTitle')}</h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
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
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--color-navy-950)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(29,112,184,.2) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #1D70B8 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--color-paper-50)' }}>{t('ins.ctaTitle')}</h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-steel-200)' }}>
            {t('ins.ctaSub')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LLink href="/inventory" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#1D70B8', color: '#fff' }}>
              {t('ins.ctaBrowse')}
            </LLink>
            <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to know more about your inspection process.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-paper-50)' }}>
              {t('common.chatOnWhatsapp')}
            </a>
            <LLink href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5" style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-steel-200)' }}>
              {t('nav.contact')}
            </LLink>
          </div>
        </div>
      </section>
    </main>
  )
}
