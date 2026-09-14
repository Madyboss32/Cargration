'use client'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { SITE, WHATSAPP_URL, whatsappWithMessage } from '../config/site'
import { useI18n } from '../i18n/I18nProvider'
import BreadcrumbNav, { type BreadcrumbItem } from '../components/BreadcrumbNav'
import LLink from '../i18n/LLink'
import { track } from '../lib/track'

const WHATSAPP = WHATSAPP_URL
const TELEGRAM = SITE.telegram

type Status = 'idle' | 'sending' | 'success' | 'error'

interface ContactForm {
  name: string
  email: string
  phone: string
  country: string
  interest: string
  message: string
}

export default function ContactPage() {
  const { t } = useI18n()
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', phone: '', country: '', interest: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update = (field: keyof ContactForm) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const honeypot = String(new FormData(e.currentTarget).get('website') || '')
    if (honeypot) { setStatus('success'); return }
    if (!form.name || !form.email || !form.country || !form.message) {
      setErrorMsg(t('form.errGeneric'))
      setStatus('error')
      return
    }
    const msg = `Hello, I have a question.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nCountry: ${form.country}\nInterest: ${form.interest || 'N/A'}\n\n${form.message}`
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, '_blank')
    track('generate_lead', { method: 'contact_form' })
    setStatus('success')
  }

  const inputCls = 'input'
  const inputStyle = { borderColor: 'var(--color-paper-100)', background: '#fff', color: 'var(--color-ink-900)' }
  const bc: BreadcrumbItem[] = [{ label: t('footer.contact') }]

  return (
    <main>
      <section className="py-20 md:py-28" style={{ background: 'var(--color-navy-950)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={bc} homeLabel={t('breadcrumb.home')} />
          <span className="text-xs font-mono tracking-wider uppercase mb-4 block" style={{ color: 'var(--color-blue-500)' }}>{t('contact.eyebrow')}</span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-paper-50)' }}>{t('contact.title')}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border p-8 flex flex-col gap-5" style={{ borderColor: 'var(--color-paper-100)' }}>
            <h2 className="font-display text-2xl font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('contact.formTitle')}</h2>

            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="#059669" className="w-8 h-8"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--color-ink-900)' }}>{t('form.sentTitle')}</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--color-ink-700)' }}>{t('form.sentSub')}</p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <a href={whatsappWithMessage('Hello, I just submitted a message on your website.')} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg font-semibold text-sm text-white" style={{ background: 'var(--color-whatsapp)' }}>{t('common.chatOnWhatsapp')}</a>
                  <button type="button" onClick={() => { setForm({ name: '', email: '', phone: '', country: '', interest: '', message: '' }); setStatus('idle') }} className="px-5 py-2.5 rounded-lg font-semibold text-sm border" style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)' }}>{t('form.sendAnother')}</button>
                </div>
              </div>
            ) : (
              <>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('form.name')} *</label>
                <input type="text" required value={form.name} onChange={update('name')} placeholder={t('form.phName')} className={inputCls} style={inputStyle} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('form.email')} *</label>
                <input type="email" required value={form.email} onChange={update('email')} placeholder={t('form.phEmail')} className={inputCls} style={inputStyle} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('form.phone')}</label>
                <input type="tel" value={form.phone} onChange={update('phone')} placeholder={t('form.phPhone')} className={inputCls} style={inputStyle} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('form.country')} *</label>
                <input type="text" required value={form.country} onChange={update('country')} placeholder={t('form.phCountry')} className={inputCls} style={inputStyle} />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('form.lookingFor')}</label>
              <select value={form.interest} onChange={update('interest')} className={inputCls} style={inputStyle}>
                <option value="">{t('form.selectOption')}</option>
                <option value="new">{t('form.optNew')}</option>
                <option value="used">{t('form.optUsed')}</option>
                <option value="fleet">{t('form.optFleet')}</option>
                <option value="shipping">{t('form.optShipping')}</option>
                <option value="partnership">{t('form.optPartnership')}</option>
                <option value="other">{t('form.optOther')}</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('form.message')} *</label>
              <textarea required rows={5} value={form.message} onChange={update('message')} placeholder={t('form.phMessage')} className={inputCls} style={{ ...inputStyle, resize: 'vertical' }} />
            </div>
            {status === 'error' && (
              <div className="rounded-xl border px-4 py-3 text-sm" style={{ borderColor: '#fecaca', background: '#fef2f2', color: '#b91c1c' }}>
                {errorMsg}
                <a href={whatsappWithMessage(`Hello, I tried the contact form. Name: ${form.name}. Message: ${form.message}`)} target="_blank" rel="noopener noreferrer" className="underline font-semibold ml-1">{t('contact.waInstead')}</a>
              </div>
            )}
            <button type="submit" disabled={status === 'sending'} className="py-3 rounded-xl font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed" style={{ background: 'var(--color-blue-500)', color: '#fff' }}>
              {status === 'sending' ? t('form.sending') : t('form.send')}
            </button>
              </>
            )}
          </form>

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border p-6 flex flex-col gap-5" style={{ borderColor: 'var(--color-paper-100)' }}>
              <h3 className="font-display text-lg font-bold" style={{ color: 'var(--color-ink-900)' }}>{t('contact.infoTitle')}</h3>
              <div className="flex flex-col gap-4 text-sm" style={{ color: 'var(--color-ink-700)' }}>
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-blue-500)' }}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--color-ink-900)' }}>{t('form.phone')}</p>
                    <p>{SITE.phoneDisplay}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-blue-500)' }}><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" /><path d="M19 8.839l-7.5 3.75-7.5-3.75V14a2 2 0 002 2h11a2 2 0 002-2V8.839z" /></svg>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--color-ink-900)' }}>{t('form.email')}</p>
                    <p>{SITE.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-blue-500)' }}><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--color-ink-900)' }}>{t('contact.address')}</p>
                    <p>{t('contact.addressValue')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-blue-500)' }}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--color-ink-900)' }}>{t('contact.hours')}</p>
                    <p>{t('contact.hoursValue')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: 'var(--color-navy-950)' }}>
              <h3 className="font-display text-sm font-bold" style={{ color: 'var(--color-paper-50)' }}>{t('contact.instantChat')}</h3>
              <p className="text-sm" style={{ color: 'var(--color-steel-200)' }}>{t('contact.instantChatSub')}</p>
              <div className="flex gap-3">
                <a href={`${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to inquire about vehicle export.')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-whatsapp)', color: '#fff' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
                <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm" style={{ background: 'var(--color-telegram)', color: '#fff' }}>
                  Telegram
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--color-paper-100)', height: 220 }}>
              <iframe
                src="https://maps.google.com/maps?q=China&t=&z=5&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cargration — Beijing & Guizhou, China"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--color-paper-50)' }}>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              { href: '/how-it-works', key: 'nav.howItWorks' },
              { href: '/inspection', key: 'nav.inspection' },
              { href: '/logistics', key: 'nav.logistics' },
              { href: '/inventory', key: 'nav.compare' },
              { href: '/faq', key: 'footer.faq' },
              { href: '/country-guides', key: 'nav.countryGuides' },
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
