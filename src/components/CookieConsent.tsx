'use client'
import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import LLink from '../i18n/LLink'

const CONSENT_KEY = 'cg_cookie_consent'

export interface ConsentState {
  analytics: boolean
  marketing: boolean
}

const NO_CONSENT: ConsentState = { analytics: false, marketing: false }

export function getConsentState(): ConsentState {
  if (typeof window === 'undefined') return NO_CONSENT
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return NO_CONSENT
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === 'object' && 'analytics' in parsed) {
      return { analytics: !!parsed.analytics, marketing: !!parsed.marketing }
    }
    if (raw === 'accepted') return { analytics: true, marketing: true }
    if (raw === 'declined') return NO_CONSENT
  } catch {
    // ignore malformed storage
  }
  return NO_CONSENT
}

export function setConsentState(state: ConsentState): void {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state))
  } catch {
    // storage unavailable
  }
  window.dispatchEvent(new Event('cookie-consent-changed'))
}

export function hasConsentChoice(): boolean {
  if (typeof window === 'undefined') return false
  const raw = localStorage.getItem(CONSENT_KEY)
  return raw !== null && raw.length > 0
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="w-10 h-6 rounded-full relative transition-colors cursor-pointer"
      style={{ background: checked ? 'var(--color-blue-500)' : 'var(--color-steel-600)', border: 'none' }}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${checked ? 'translate-x-4' : ''}`}
      />
    </button>
  )
}

export default function CookieConsent() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)
  const [prefs, setPrefs] = useState<ConsentState>({ analytics: false, marketing: false })

  useEffect(() => {
    if (!hasConsentChoice()) setVisible(true)
  }, [])

  const updatePref = (key: keyof ConsentState) => (v: boolean) =>
    setPrefs((p) => ({ ...p, [key]: v }))

  const save = (state: ConsentState) => {
    setConsentState(state)
    setVisible(false)
  }

  if (!visible) return null

  const toggleRow = (label: string, checked: boolean, onChange: (v: boolean) => void) => (
    <div className="flex items-center justify-between gap-6 py-1.5">
      <span className="text-xs" style={{ color: 'var(--color-steel-200)' }}>{label}</span>
      <Toggle checked={checked} onChange={onChange} />
    </div>
  )

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      style={{ background: 'var(--color-navy-950)', borderTop: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-stretch lg:items-center gap-6">
        <div className="flex-1">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-steel-200)' }}>
            {t('cookie.banner')}
          </p>
          <div className="mt-3 grid grid-cols-2 max-w-xs gap-x-6">
            {toggleRow(t('cookie.analytics'), prefs.analytics, updatePref('analytics'))}
            {toggleRow(t('cookie.marketing'), prefs.marketing, updatePref('marketing'))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 shrink-0 items-center">
          <LLink
            href="/privacy-policy"
            className="px-4 py-2 rounded-lg text-xs font-semibold border no-underline transition-all"
            style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-steel-200)' }}
          >
            {t('cookie.learnMore')}
          </LLink>
          <button
            onClick={() => save(prefs)}
            className="px-4 py-2 rounded-lg text-xs font-semibold border cursor-pointer transition-all"
            style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-steel-200)', background: 'transparent' }}
          >
            {t('cookie.save')}
          </button>
          <button
            onClick={() => save({ analytics: false, marketing: false })}
            className="px-4 py-2 rounded-lg text-xs font-semibold border cursor-pointer transition-all"
            style={{ borderColor: 'var(--color-steel-400)', color: 'var(--color-steel-200)', background: 'transparent' }}
          >
            {t('cookie.decline')}
          </button>
          <button
            onClick={() => save({ analytics: true, marketing: true })}
            className="px-5 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all"
            style={{ background: 'var(--color-blue-500)', color: '#fff', border: 'none' }}
          >
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}