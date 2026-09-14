'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useI18n } from '../i18n/I18nProvider'
import { localeHref } from '../i18n/LLink'
import { track } from '../lib/track'

function ArrowIcon({ s = 13 }: { s?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function ChevronIcon({ open, s = 14 }: { open: boolean; s?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .2s ease' }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

const TYPES = [
  { v: '', k: '' },
  { v: 'suv', k: 'type.suv' },
  { v: 'sedan', k: 'type.sedan' },
  { v: 'ev', k: 'type.ev' },
  { v: 'mpv', k: 'type.mpv' },
  { v: 'pickup', k: 'type.pickup' },
  { v: 'van', k: 'type.van' },
  { v: 'truck', k: 'type.truck' },
  { v: 'hatchback', k: 'type.hatchback' },
]

const PRICES = [
  { v: '', l: 'search.anyPrice' },
  { v: '0-8000', l: 'heroPrice.under8k' },
  { v: '8000-15000', l: 'heroPrice.8to15k' },
  { v: '15000-25000', l: 'heroPrice.15to25k' },
  { v: '25000-40000', l: 'heroPrice.25to40k' },
  { v: '40000-', l: 'heroPrice.over40k' },
]

const FUELS = [
  { v: '', k: '' },
  { v: 'Electric', k: 'fuel.electric' },
  { v: 'Hybrid', k: 'fuel.hybrid' },
  { v: 'Plug-in Hybrid', k: 'fuel.pluginHybrid' },
  { v: 'REEV', k: 'fuel.reev' },
  { v: 'Petrol', k: 'fuel.petrol' },
  { v: 'Diesel', k: 'fuel.diesel' },
]

const AGES = [
  { v: '', k: '' },
  { v: 'under-1', k: 'search.ageUnder1' },
  { v: '1-3', k: 'search.age1to3' },
  { v: '3-5', k: 'search.age3to5' },
  { v: '5+', k: 'search.age5plus' },
]

const TRANSMISSIONS = [
  { v: '', k: '' },
  { v: 'AT', k: 'trans.automaticAt' },
  { v: 'CVT', k: 'trans.cvt' },
  { v: 'MT', k: 'trans.manualMt' },
]

const DRIVES = [
  { v: '', k: '' },
  { v: '2WD', k: '2WD' },
  { v: 'AWD', k: 'AWD' },
  { v: '4WD', k: '4WD' },
]

const CONDITIONS = [
  { v: '', k: '' },
  { v: 'new', k: 'common.new' },
  { v: 'used', k: 'common.used' },
]

interface HeroSearchProps {
  brands: string[]
}

export default function HeroSearch({ brands }: HeroSearchProps) {
  const router = useRouter()
  const [brand, setBrand] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [fuel, setFuel] = useState('')
  const [age, setAge] = useState('')
  const [transmission, setTransmission] = useState('')
  const [drive, setDrive] = useState('')
  const [cond, setCond] = useState('')
  const [expanded, setExpanded] = useState(false)
  const { t } = useI18n()

  const go = () => {
    const p = new URLSearchParams()
    if (brand) p.set('brand', brand)
    if (type === 'ev') p.set('fuel', 'Electric')
    else if (type) p.set('type', type)
    if (price) p.set('price', price)
    if (fuel && type !== 'ev') p.set('fuel', fuel)
    if (age) p.set('age', age)
    if (transmission) p.set('transmission', transmission)
    if (drive) p.set('drive', drive)
    if (cond) p.set('cond', cond)
    const qs = p.toString()
    track('search', { search_term: qs })
    router.push(localeHref(qs ? `/inventory?${qs}` : '/inventory'))
  }

  const sel =
    'w-full px-3 py-2.5 rounded-lg text-sm text-[#333333] bg-white border border-stone-200 focus:border-[#1D70B8] focus:outline-none focus:ring-2 focus:ring-[#1D70B8]/15 transition-all'

  return (
    <div>
      {/* Row 1 — core filters */}
      <div className="grid grid-cols-2 sm:grid-cols-[1fr_1fr_1fr_auto] gap-2">
        <select aria-label={t('search.brand')} value={brand} onChange={(e) => setBrand(e.target.value)} className={sel}>
          <option value="">{t('search.allBrands')}</option>
          {brands.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <select aria-label={t('search.type')} value={type} onChange={(e) => setType(e.target.value)} className={sel}>
          {TYPES.map((tp) => (
            <option key={tp.v} value={tp.v}>{tp.k ? t(tp.k) : t('search.anyType')}</option>
          ))}
        </select>
        <select aria-label={t('search.price')} value={price} onChange={(e) => setPrice(e.target.value)} className={sel}>
          {PRICES.map((p) => (
            <option key={p.v} value={p.v}>{t(p.l)}</option>
          ))}
        </select>
        <div className="col-span-2 sm:col-span-1 flex gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            type="button"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-semibold text-sm border border-stone-200 bg-white text-[#333333] hover:bg-stone-50 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="16" y2="12" /><line x1="4" y1="18" x2="12" y2="18" />
            </svg>
            {t('hero.moreFilters')}
            <ChevronIcon open={expanded} />
          </button>
          <button
            onClick={go}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#1D70B8] hover:bg-[#1555A0] active:bg-[#0A3161] text-white transition-colors"
          >
            {t('search.searchBtn')}
            <ArrowIcon />
          </button>
        </div>
      </div>

      {/* Row 2 — expanded filters */}
      {expanded && (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-2 pt-2 border-t border-stone-100">
          <select aria-label={t('search.fuel')} value={fuel} onChange={(e) => setFuel(e.target.value)} className={sel}>
            {FUELS.map((f) => (
              <option key={f.v} value={f.v}>{f.k ? t(f.k) : t('search.anyFuel')}</option>
            ))}
          </select>
          <select aria-label={t('search.age')} value={age} onChange={(e) => setAge(e.target.value)} className={sel}>
            {AGES.map((a) => (
              <option key={a.v} value={a.v}>{a.k ? t(a.k) : t('search.anyAge')}</option>
            ))}
          </select>
          <select aria-label={t('search.transmission')} value={transmission} onChange={(e) => setTransmission(e.target.value)} className={sel}>
            {TRANSMISSIONS.map((tr) => (
              <option key={tr.v} value={tr.v}>{tr.k ? t(tr.k) : t('search.anyTransmission')}</option>
            ))}
          </select>
          <select aria-label={t('search.drive')} value={drive} onChange={(e) => setDrive(e.target.value)} className={sel}>
            {DRIVES.map((d) => (
              <option key={d.v} value={d.v}>{d.k ? t(d.k) : t('search.anyDrive')}</option>
            ))}
          </select>
          <select aria-label={t('search.condition')} value={cond} onChange={(e) => setCond(e.target.value)} className={sel}>
            {CONDITIONS.map((c) => (
              <option key={c.v} value={c.v}>{c.k ? t(c.k) : t('search.anyCondition')}</option>
            ))}
          </select>
        </div>
      )}

      <p className="mt-2 text-[11px] text-stone-400">
        {t('hero.liveNote')}
      </p>
    </div>
  )
}
