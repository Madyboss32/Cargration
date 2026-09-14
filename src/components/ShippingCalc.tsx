'use client'
import { useState } from 'react'
import { RATES, TYPE_MULTIPLIER, TYPE_LABELS_SHORT, DEST_LABELS, TRANSIT } from '../data/shippingRates'
import { whatsappWithMessage } from '../config/site'
import { useI18n } from '../i18n/I18nProvider'

interface CalcResult {
  perUnit: number
  subtotal: number
  discountPct: number
  discount: number
  total: number
  transit: string
  fobTotal: number
  landedTotal: number
}

interface ShippingCalcProps {
  fobPrice?: number
  defaultType?: string
  contextLabel?: string
}

const origins: string[] = Object.keys(RATES)
const vehicleTypes: string[] = Object.keys(TYPE_MULTIPLIER)
const methods: string[] = ['sea', 'rail']

function destsFor(o: string, m: string): string[] {
  return Object.keys(RATES[o]?.[m as 'sea' | 'rail'] || {})
}

export default function ShippingCalc({ fobPrice, defaultType, contextLabel }: ShippingCalcProps) {
  const { t } = useI18n()
  const [origin, setOrigin] = useState<string>(origins[0])
  const [dest, setDest] = useState<string>('')
  const [vType, setVType] = useState<string>(defaultType && vehicleTypes.includes(defaultType) ? defaultType : 'sedan')
  const [method, setMethod] = useState<string>('sea')
  const [qty, setQty] = useState<number>(1)
  const [fob, setFob] = useState<string>(fobPrice != null ? String(fobPrice) : '')
  const [result, setResult] = useState<CalcResult | null>(null)

  const availableDests: string[] = destsFor(origin, method)

  const calculate = (): void => {
    const rate: number | undefined = RATES[origin]?.[method as 'sea' | 'rail']?.[dest]
    if (!rate) { setResult(null); return }

    const multiplier: number = TYPE_MULTIPLIER[vType]
    const perUnit: number = Math.round(rate * multiplier)
    const subtotal: number = perUnit * qty

    let discountPct = 0
    if (qty >= 10) discountPct = 12
    else if (qty >= 5) discountPct = 6
    else if (qty >= 3) discountPct = 3

    const discount: number = Math.round(subtotal * discountPct / 100)
    const total: number = subtotal - discount
    const transit: string = TRANSIT[method]?.[dest] || '—'

    const fobVal = parseInt(fob, 10) || 0
    const fobTotal = fobVal * qty

    setResult({ perUnit, subtotal, discountPct, discount, total, transit, fobTotal, landedTotal: total + fobTotal })
  }

  const waEstimate = (): string => {
    if (!result) return t('calc.waGeneric')
    const parts = [
      t('calc.waIntro'),
      t('calc.waVehicle', { v: contextLabel || '—' }),
      t('calc.waRoute', {
        q: qty,
        t: TYPE_LABELS_SHORT[vType] || vType,
        m: method === 'sea' ? t('calc.ocean') : t('calc.rail'),
        o: origin,
        d: DEST_LABELS[dest] || dest,
      }),
      t('calc.waFreight', { f: result.total.toLocaleString(), t: result.transit }),
    ]
    if (result.fobTotal > 0) parts.push(t('calc.waLanded', { f: result.landedTotal.toLocaleString() }))
    return parts.join('\n')
  }

  return (
    <section className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-white rounded-2xl border border-[var(--color-paper-100)] shadow-sm">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-[var(--color-ink-700)]">{t('calc.originPort')}</label>
          <select
            value={origin}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setOrigin(e.target.value); setDest(''); setResult(null) }}
            className="px-3 py-2.5 rounded-lg border border-[var(--color-paper-100)] bg-[var(--color-paper-50)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-500)]"
          >
            {origins.map((o: string) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-[var(--color-ink-700)]">{t('calc.destination')}</label>
          <select
            value={dest}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setDest(e.target.value); setResult(null) }}
            className="px-3 py-2.5 rounded-lg border border-[var(--color-paper-100)] bg-[var(--color-paper-50)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-500)]"
          >
            <option value="">{t('calc.selectDestination')}</option>
            {availableDests.map((d: string) => (
              <option key={d} value={d}>{DEST_LABELS[d] || d}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-[var(--color-ink-700)]">{t('calc.vehicleType')}</label>
          <select
            value={vType}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setVType(e.target.value); setResult(null) }}
            className="px-3 py-2.5 rounded-lg border border-[var(--color-paper-100)] bg-[var(--color-paper-50)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-500)]"
          >
            {vehicleTypes.map((vt: string) => (
              <option key={vt} value={vt}>{TYPE_LABELS_SHORT[vt]}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-[var(--color-ink-700)]">{t('calc.quantity')}</label>
          <input
            type="number"
            min={1}
            max={50}
            value={qty}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setQty(Math.max(1, +e.target.value)); setResult(null) }}
            className="px-3 py-2.5 rounded-lg border border-[var(--color-paper-100)] bg-[var(--color-paper-50)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-500)]"
          />
        </div>

        {fobPrice != null && (
          <div className="flex flex-col gap-1 sm:col-span-2">
            <label className="text-xs font-semibold text-[var(--color-ink-700)]">{t('calc.fobPrice')}</label>
            <input
              type="number"
              min={0}
              value={fob}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFob(e.target.value); setResult(null) }}
              placeholder={t('calc.carValuePh')}
              className="px-3 py-2.5 rounded-lg border border-[var(--color-paper-100)] bg-[var(--color-paper-50)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-500)]"
            />
          </div>
        )}

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-semibold text-[var(--color-ink-700)]">{t('calc.method')}</label>
          <div className="flex gap-4">
            {methods.map((m: string) => (
              <label key={m} className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name={`method-${fobPrice != null ? 'car' : 'page'}`}
                  value={m}
                  checked={method === m}
                  onChange={() => { setMethod(m); setDest(''); setResult(null) }}
                  className="accent-[var(--color-blue-500)]"
                />
                {m === 'sea' ? t('calc.ocean') : t('calc.rail')}
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={calculate}
          disabled={!dest}
          className="sm:col-span-2 py-3 rounded-lg bg-[var(--color-blue-500)] text-white text-sm font-semibold hover:bg-[var(--color-blue-600)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {t('calc.calculate')}
        </button>
      </div>

      {result && (
        <div className="mt-4 p-6 bg-white rounded-2xl border border-[var(--color-paper-100)] shadow-sm">
          <h3 className="font-display text-lg font-bold mb-4">{result.fobTotal > 0 ? t('calc.landedEstimate') : t('calc.shippingEstimate')}</h3>
          <div className="flex flex-col gap-3 text-sm">
            {result.fobTotal > 0 && (
              <div className="flex justify-between">
                <span className="text-[var(--color-ink-700)]">{t('calc.fobRow', { q: qty, p: `$${(result.fobTotal / qty).toLocaleString()}` })}</span>
                <span className="font-semibold">${result.fobTotal.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-[var(--color-ink-700)]">{t('calc.freightPerVehicle')}</span>
              <span className="font-semibold">${result.perUnit.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-ink-700)]">{t('calc.freightSubtotal', { q: qty, s: qty > 1 ? 's' : '' })}</span>
              <span className="font-semibold">${result.subtotal.toLocaleString()}</span>
            </div>
            {result.discountPct > 0 && (
              <div className="flex justify-between text-[var(--color-green-track)]">
                <span>{t('calc.discount', { p: result.discountPct })}</span>
                <span className="font-semibold">-${result.discount.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between text-[var(--color-ink-700)]">
              <span>{t('calc.transitTime')}</span>
              <span className="font-semibold">{result.transit}</span>
            </div>
            <div className="border-t border-[var(--color-paper-100)] pt-3 flex justify-between text-base">
              <span className="font-bold">{result.fobTotal > 0 ? t('calc.landedTotal') : t('calc.total')}</span>
              <span className="font-bold font-display">${(result.fobTotal > 0 ? result.landedTotal : result.total).toLocaleString()}</span>
            </div>
          </div>
          <a
            href={whatsappWithMessage(waEstimate())}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center py-3 rounded-lg text-sm font-semibold transition-colors"
            style={{ background: 'var(--color-whatsapp)', color: '#fff' }}
          >
            {t('calc.confirmWhatsapp')}
          </a>
        </div>
      )}
    </section>
  )
}
