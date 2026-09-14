'use client'
import { useState, useCallback } from 'react'
import { SITE, WHATSAPP_URL } from '../config/site'
import LLink from '../i18n/LLink'
import { useI18n } from '../i18n/I18nProvider'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'

const WHATSAPP = WHATSAPP_URL

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function RequestCarPage() {
  const { t } = useI18n()
  const [form, setForm] = useState({ brand: '', model: '', budget: '', destination: '', quantity: '1', timeline: '', name: '', email: '', phone: '', notes: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update = useCallback((k: string, v: string) => setForm(f => ({ ...f, [k]: v })), [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const honeypot = String(new FormData(e.currentTarget).get('website') || '')
    if (honeypot) { setStatus('success'); return }
    const msg = `Vehicle Sourcing Request\n\nBrand: ${form.brand}\nModel: ${form.model || 'Any'}\nBudget: $${form.budget}/unit\nQuantity: ${form.quantity}\nDestination: ${form.destination}\nTimeline: ${form.timeline || 'Flexible'}\n\nContact: ${form.name}\nEmail: ${form.email || 'N/A'}\nPhone: ${form.phone}\n\nNotes: ${form.notes || 'None'}`
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, '_blank')
    setStatus('success')
  }

  const inputClass = 'input'
  const labelClass = "text-sm font-semibold text-[#0A3161] mb-1.5 block" as const
  const bc: BreadcrumbItem[] = [{ label: t('footer.requestCar') }]

  return (
    <main>
      <section className="relative overflow-hidden" style={{ background: 'var(--color-navy-950)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #1D70B8 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-20 md:py-28">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-wider uppercase mb-4 block text-[#1D70B8]">{t('source.eyebrow')}</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--color-paper-50)' }}>
              {t('source.title1')}{' '}
              <span style={{ color: '#1D70B8' }}>{t('source.title2')}</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--color-steel-200)' }}>
              {t('source.sub')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#F7FAFA' }}>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-wider uppercase mb-3 block text-[#1D70B8]">{t('source.formEyebrow')}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A3161]">{t('source.formHeading')}</h2>
            <p className="text-base text-[#555555] mt-3">{t('source.formSub')}</p>
          </div>

          {status === 'success' ? (
            <div className="max-w-lg mx-auto text-center rounded-2xl border bg-white p-10" style={{ borderColor: '#E7E5E4' }}>
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="#059669" className="w-8 h-8"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0A3161] mb-3">{t('source.successTitle')}</h3>
              <p className="text-sm text-[#555555] mb-6">{t('source.successSub', { email: form.email ? t('source.successEmail') : '.' })}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <LLink href="/inventory" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: '#1D70B8', color: '#fff' }}>
                  {t('source.browseInventory')}
                </LLink>
                <a href={`${WHATSAPP}?text=${encodeURIComponent(`Hello, I just submitted a sourcing request for a ${form.brand} ${form.model}. Name: ${form.name}`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border" style={{ borderColor: '#E7E5E4', color: '#555555' }}>
                  {t('source.waFollowUp')}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border bg-white p-8 md:p-10" style={{ borderColor: '#E7E5E4' }}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <div className="grid md:grid-cols-2 gap-5 mb-8">
                <div>
                  <label className={labelClass}>{t('source.brand')} *</label>
                  <input type="text" value={form.brand} onChange={e => update('brand', e.target.value)} required placeholder={t('source.phBrand')} className={inputClass} style={{ borderColor: '#E7E5E4' }} />
                </div>
                <div>
                  <label className={labelClass}>{t('source.model')}</label>
                  <input type="text" value={form.model} onChange={e => update('model', e.target.value)} placeholder={t('source.phModel')} className={inputClass} style={{ borderColor: '#E7E5E4' }} />
                </div>
                <div>
                  <label className={labelClass}>{t('source.budgetPerUnit')} *</label>
                  <input type="text" value={form.budget} onChange={e => update('budget', e.target.value)} required placeholder={t('source.phBudget')} className={inputClass} style={{ borderColor: '#E7E5E4' }} />
                </div>
                <div>
                  <label className={labelClass}>{t('source.quantity')} *</label>
                  <select value={form.quantity} onChange={e => update('quantity', e.target.value)} required className={inputClass} style={{ borderColor: '#E7E5E4' }}>
                    {[1,2,3,5,10,20,50,100].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{t('source.destination')} *</label>
                  <input type="text" value={form.destination} onChange={e => update('destination', e.target.value)} required placeholder={t('source.phDestination')} className={inputClass} style={{ borderColor: '#E7E5E4' }} />
                </div>
                <div>
                  <label className={labelClass}>{t('source.timeline')}</label>
                  <select value={form.timeline} onChange={e => update('timeline', e.target.value)} className={inputClass} style={{ borderColor: '#E7E5E4' }}>
                    <option value="">{t('source.timelineSelect')}</option>
                    <option value="ASAP">{t('source.tlAsap')}</option>
                    <option value="1-2 months">{t('source.tl1to2')}</option>
                    <option value="3-6 months">{t('source.tl3to6')}</option>
                    <option value="Not urgent">{t('source.tlNotUrgent')}</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-base font-bold text-[#0A3161] mb-4">{t('source.contactHeading')}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>{t('compare.name')} *</label>
                    <input type="text" value={form.name} onChange={e => update('name', e.target.value)} required placeholder={t('form.phName')} className={inputClass} style={{ borderColor: '#E7E5E4' }} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('compare.email')}</label>
                    <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder={t('form.phEmail')} className={inputClass} style={{ borderColor: '#E7E5E4' }} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('compare.phone')} *</label>
                    <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} required placeholder={t('form.phPhone')} className={inputClass} style={{ borderColor: '#E7E5E4' }} />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className={labelClass}>{t('source.notes')}</label>
                <textarea value={form.notes} onChange={e => update('notes', e.target.value)} rows={3} placeholder={t('source.notesPh')} className={inputClass} style={{ borderColor: '#E7E5E4', resize: 'vertical' }} />
              </div>

              {status === 'error' && (
                <div className="rounded-xl border px-4 py-3 text-sm mb-6" style={{ borderColor: '#fecaca', background: '#fef2f2', color: '#b91c1c' }}>
                  {errorMsg}
                  <a href={`${WHATSAPP}?text=${encodeURIComponent(`Hello, I tried the sourcing request form. Brand: ${form.brand}, Model: ${form.model}, Qty: ${form.quantity}. Name: ${form.name}`)}`} target="_blank" rel="noopener noreferrer" className="underline font-semibold ml-1">{t('source.waFallback')}</a>
                </div>
              )}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0" style={{ background: '#1D70B8', color: '#fff' }}>
                  {status === 'sending' ? t('source.submitting') : t('source.submit')}
                </button>
                <p className="text-xs text-stone-400">{t('source.privacy')}</p>
              </div>
            </form>
          )}

          <div className="mt-10 text-center">
            <p className="text-sm text-[#555555]">
              {t('source.viewInventoryFirst')}{' '}
              <LLink href="/inventory" className="font-semibold text-[#1D70B8] hover:text-[#0A3161]">{t('source.viewInventoryLink')}</LLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
