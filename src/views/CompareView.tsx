'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  getSaved, removeSaved, clearSaved, subscribe,
  type SavedVehicle,
} from '../lib/saved'
import { DEST_LABELS } from '../data/shippingRates'
import LLink from '../i18n/LLink'
import { useI18n } from '../i18n/I18nProvider'

type Status = 'idle' | 'sending' | 'success' | 'error'

const ROWS: [string, string, (v: SavedVehicle) => string][] = [
  ['image', 'compare.image', () => ''],
  ['price', 'compare.price', (v) => `$${v.price.toLocaleString()}`],
  ['brand', 'detail.brand', (v) => v.brand],
  ['model', 'compare.model', (v) => `${v.name}${v.trim ? ` ${v.trim}` : ''}`.replace(v.brand, '').trim() || v.name],
  ['condition', 'detail.condition', (v) => v.condition === 'new' ? 'new' : 'used'],
  ['year', 'detail.year', (v) => v.year],
  ['mileage', 'detail.mileage', (v) => (v.km ? `${v.km.toLocaleString()} km` : '—')],
  ['fuel', 'detail.fuelType', (v) => v.fuel || '—'],
  ['transmission', 'detail.transmission', (v) => v.transmission || '—'],
  ['drive', 'detail.drivetrain', (v) => v.drive || '—'],
]

export default function CompareView() {
  const { t } = useI18n()
  const [vehicles, setVehicles] = useState<SavedVehicle[]>([])
  const [loaded, setLoaded] = useState<boolean>(false)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', destination: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const sync = (): void => {
      setVehicles(getSaved())
      setLoaded(true)
    }
    sync()
    return subscribe(sync)
  }, [])

  const toggleSelect = (id: string): void => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const chosen = vehicles.filter((v) => selected.has(v.id))
  const update = (k: string, val: string): void => setForm((f) => ({ ...f, [k]: val }))

  const submitQuote = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!chosen.length) return
    const vehicleLines = chosen
      .map((v, i) => `${i + 1}. ${v.name} ${v.trim} (${v.year || 'n/a'}) — FOB $${v.price.toLocaleString()}`)
      .join('\n')
    const msg = `Quote Request — ${chosen.length} vehicle(s)\n\n${vehicleLines}\n\nName: ${form.name}\nEmail: ${form.email || 'N/A'}\nPhone: ${form.phone}\nCountry: ${form.country}\nDestination Port: ${form.destination || 'TBD'}\n\nNotes: ${form.message || 'None'}`
    window.open(`https://wa.me/8617813301870?text=${encodeURIComponent(msg)}`, '_blank')
    setStatus('success')
  }

  if (!loaded) {
    return <div className="py-24 text-center text-sm text-[var(--color-ink-700)]">{t('common.loading')}</div>
  }

  if (status === 'success') {
    return (
      <div className="max-w-lg mx-auto text-center rounded-2xl border bg-white p-10" style={{ borderColor: 'var(--color-paper-100)' }}>
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" fill="#059669" className="w-8 h-8"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-[#0A3161] mb-3">{t('compare.successTitle')}</h3>
        <p className="text-sm text-[#555555] mb-6">
          {t('compare.successSub', { n: chosen.length, s: chosen.length > 1 ? 's' : '' })}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <LLink href="/inventory" className="btn btn-primary">
            {t('compare.browseMore')}
          </LLink>
          <button
            onClick={() => { clearSaved(); setSelected(new Set()); setStatus('idle') }}
            className="btn btn-outline"
          >
            {t('compare.clearSavedList')}
          </button>
        </div>
      </div>
    )
  }

  if (!vehicles.length) {
    return (
      <div className="max-w-lg mx-auto text-center rounded-2xl border bg-white p-10" style={{ borderColor: 'var(--color-paper-100)' }}>
        <h3 className="font-display text-xl font-bold text-[#0A3161] mb-3">{t('compare.noSavedTitle')}</h3>
        <p className="text-sm text-[#555555] mb-6">
          {t('compare.noSavedSub')}
        </p>
        <LLink href="/inventory" className="btn btn-primary">
          {t('compare.browseInventory')}
        </LLink>
      </div>
    )
  }

  const inputClass = 'input'
  const labelClass = 'label'

  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-display text-2xl sm:text-3xl font-bold" style={{ color: 'var(--color-ink-900)' }}>
        {t('cmp.h1')}
      </h1>
      {/* COMPARE TABLE */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-bold" style={{ color: 'var(--color-ink-900)' }}>
            {t('compare.savedCount', { n: vehicles.length, s: vehicles.length > 1 ? 's' : '' })}
          </h2>
          <div className="flex gap-3 text-xs">
            <button
              onClick={() => setSelected(new Set(vehicles.map((v) => v.id)))}
              className="px-3 py-1.5 rounded-lg font-semibold"
              style={{ background: 'var(--color-blue-100)', color: 'var(--color-blue-600)' }}
            >
              {t('compare.selectAll')}
            </button>
            <button
              onClick={clearSaved}
              className="px-3 py-1.5 rounded-lg font-semibold"
              style={{ background: 'var(--color-paper-50)', color: 'var(--color-ink-700)', border: '1px solid var(--color-paper-100)' }}
            >
              {t('compare.clearAll')}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm" style={{ borderColor: 'var(--color-paper-100)' }}>
          <table className="w-full text-sm" style={{ minWidth: 520 + vehicles.length * 180 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-paper-100)' }}>
                <th className="text-left px-4 py-3 text-xs uppercase tracking-wider" style={{ color: 'var(--color-ink-700)', width: 130 }}>{t('compare.spec')}</th>
                {vehicles.map((v) => (
                  <th key={v.id} className="text-left px-4 py-3 align-top">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={selected.has(v.id)} onChange={() => toggleSelect(v.id)} className="accent-[var(--color-blue-500)]" />
                      <span className="text-xs font-semibold" style={{ color: 'var(--color-ink-700)' }}>{t('compare.includeInQuote')}</span>
                    </label>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([id, key, fn]) => (
                <tr key={id} style={{ borderBottom: '1px solid var(--color-paper-100)' }}>
                  <td className="px-4 py-3 text-xs font-semibold uppercase tracking-wide align-top" style={{ color: 'var(--color-ink-700)' }}>{t(key)}</td>
                  {vehicles.map((v) => (
                    <td key={`${id}-${v.id}`} className="px-4 py-3 align-top" style={{ color: 'var(--color-ink-900)' }}>
                      {id === 'image' && v.img ? (
                        <Image src={v.img} alt={v.name} width={220} height={112} sizes="220px" className="w-full max-w-[220px] h-28 object-cover rounded-lg" />
                      ) : id === 'model' ? (
                        <>
                          <span className="font-semibold">{fn(v)}</span>
                          <button
                            onClick={() => removeSaved(v.id)}
                            className="block mt-1 text-xs underline"
                            style={{ color: 'var(--color-ink-700)' }}
                          >
                            {t('common.remove')}
                          </button>
                        </>
                      ) : id === 'condition' ? (
                        fn(v) === 'new' ? t('common.new') : t('common.used')
                      ) : (
                        fn(v)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="px-4 py-3" />
                {vehicles.map((v) => (
                  <td key={`link-${v.id}`} className="px-4 py-3">
                    <LLink href={`/car-detail/${(v.brand || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${(v.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${(v.trim || 'base').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${v.year || '0'}-${(v.id || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`} className="text-xs font-semibold underline" style={{ color: 'var(--color-blue-500)' }}>
                      {t('common.viewDetails')}
                    </LLink>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* RFQ FORM */}
      <div className="max-w-xl mx-auto w-full">
        <div className="rounded-2xl p-6 sm:p-8 bg-white border shadow-sm" style={{ borderColor: 'var(--color-paper-100)' }}>
          <h3 className="font-display text-xl font-bold text-[#0A3161] mb-1">{t('compare.rfqTitle')}</h3>
          <p className="text-sm text-[#555555] mb-6">
            {chosen.length
              ? t('compare.rfqSelected', { n: chosen.length, s: chosen.length > 1 ? 's' : '' })
              : t('compare.rfqSelectFirst')}
          </p>

          <form onSubmit={submitQuote} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="website" value="" onChange={() => {}} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div>
              <label className={labelClass}>{t('compare.name')} *</label>
              <input required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputClass} placeholder={t('form.phName')} autoComplete="name" />
            </div>
            <div>
              <label className={labelClass}>{t('compare.email')}</label>
              <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass} placeholder={t('form.phEmail')} autoComplete="email" />
            </div>
            <div>
              <label className={labelClass}>{t('compare.phone')} *</label>
              <input required value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputClass} placeholder="+1 555 000 0000" autoComplete="tel" />
            </div>
            <div>
              <label className={labelClass}>{t('compare.country')} *</label>
              <input required value={form.country} onChange={(e) => update('country', e.target.value)} className={inputClass} placeholder={t('form.phCountry')} autoComplete="country-name" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>{t('compare.destPort')}</label>
              <select value={form.destination} onChange={(e) => update('destination', e.target.value)} className={inputClass}>
                <option value="">{t('compare.destAdvise')}</option>
                {Object.entries(DEST_LABELS).map(([code, label]) => (
                  <option key={code} value={label}>{label}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>{t('compare.notes')}</label>
              <textarea rows={3} value={form.message} onChange={(e) => update('message', e.target.value)} className={inputClass} placeholder={t('compare.notesPh')} />
            </div>

            {status === 'error' && (
              <p className="sm:col-span-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={!chosen.length || status === 'sending'}
              className="btn btn-primary w-full sm:col-span-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? t('compare.sending') : t('compare.send', { n: chosen.length || 0, s: chosen.length === 1 ? '' : 's' })}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
