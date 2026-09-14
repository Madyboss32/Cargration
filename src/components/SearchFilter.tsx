'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useI18n } from '../i18n/I18nProvider'
import { localeHref } from '../i18n/LLink'
import { track } from '../lib/track'

const TYPE_OPTIONS: [string, string][] = [
  ['suv', 'type.suv'],
  ['sedan', 'type.sedan'],
  ['mpv', 'type.mpv'],
  ['hatchback', 'type.hatchback'],
  ['pickup', 'type.pickup'],
  ['van', 'type.van'],
  ['truck', 'type.truck'],
]

const FUEL_OPTIONS: [string, string][] = [
  ['Electric', 'fuel.electric'],
  ['Hybrid', 'fuel.hybrid'],
  ['Plug-in Hybrid', 'fuel.pluginHybrid'],
  ['REEV', 'fuel.reev'],
  ['Petrol', 'fuel.petrol'],
  ['Diesel', 'fuel.diesel'],
]

const PRICE_OPTIONS: [string, string][] = [
  ['0-8000', 'heroPrice.under8k'],
  ['8000-15000', 'heroPrice.8to15k'],
  ['15000-25000', 'heroPrice.15to25k'],
  ['25000-40000', 'heroPrice.25to40k'],
  ['40000-1000000', 'heroPrice.over40k'],
]

const AGE_OPTIONS: [string, string][] = [
  ['under-1', 'search.ageUnder1'],
  ['1-3', 'search.age1to3'],
  ['3-5', 'search.age3to5'],
  ['5+', 'search.age5plus'],
]

const TRANSMISSION_OPTIONS: [string, string][] = [
  ['AT', 'trans.automaticAt'],
  ['CVT', 'trans.cvt'],
  ['MT', 'trans.manualMt'],
]

const DRIVE_OPTIONS: [string, string][] = [
  ['2WD', '2WD'],
  ['AWD', 'AWD'],
  ['4WD', '4WD'],
]

const CONDITION_OPTIONS: [string, string][] = [
  ['new', 'common.new'],
  ['used', 'common.used'],
]

// Canonical color codes — labels resolve via col.* dictionary keys.
const COLOR_CODES = ['white', 'black', 'silver', 'gray', 'blue', 'red', 'green', 'yellow', 'champagne', 'beige', 'brown', 'gold', 'orange', 'purple', 'pink', 'other'] as const

const SORT_OPTIONS: [string, string][] = [
  ['', 'search.sortRelevance'],
  ['newest', 'search.sortNewest'],
  ['price-asc', 'search.sortPriceAsc'],
  ['price-desc', 'search.sortPriceDesc'],
]

export interface FilterState {
  q?: string
  brand?: string
  model?: string
  type?: string
  fuel?: string
  cond?: string
  price?: string
  age?: string
  transmission?: string
  drive?: string
  color?: string
  sort?: string
}

interface SearchFilterProps {
  brands: string[]
  models: string[]
  colors?: { code: string; count: number }[]
  basePath: string
}

export default function SearchFilter({ brands, models, colors, basePath }: SearchFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t } = useI18n()

  // Draft for the free-text field only — everything else is URL-driven.
  const [qDraft, setQDraft] = useState<string | null>(null)

  const val = (key: keyof FilterState): string => searchParams.get(key) || ''

  const apply = (patch: Partial<FilterState>): void => {
    const params = new URLSearchParams(searchParams.toString())
    for (const [k, v] of Object.entries(patch)) {
      if (v) params.set(k, String(v))
      else params.delete(k)
    }
    // Any filter change resets pagination.
    params.delete('page')
    const qs = params.toString()
    track('search', { search_term: params.get('q') || '', filters: qs })
    router.push(localeHref(qs ? `${basePath}?${qs}` : basePath))
    setQDraft(null)
  }

  const clear = (): void => {
    setQDraft(null)
    router.push(localeHref(basePath))
  }

  const selectCls = 'select disabled:opacity-50 disabled:cursor-not-allowed'

  return (
    <div className="flex flex-wrap items-end gap-3 p-4 bg-white rounded-2xl border border-[var(--color-paper-100)] shadow-sm">
      <div className="flex flex-col gap-1 flex-[2] min-w-[180px]">
        <label className="label">{t('search.searchBtn')}</label>
        <input
          type="text"
          value={qDraft ?? val('q')}
          onChange={(e) => setQDraft(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') apply({ q: qDraft ?? '' }) }}
          placeholder={t('search.searchPlaceholder')}
          className="input"
        />
      </div>

      <div className="flex flex-col gap-1 flex-1 min-w-[130px]">
        <label className="label">{t('search.brand')}</label>
        <select value={val('brand')} onChange={(e) => apply({ brand: e.target.value, model: '' })} className={selectCls}>
          <option value="">{t('search.allBrands')}</option>
          {brands.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1 flex-1 min-w-[130px]">
        <label className="label">{t('search.model')}</label>
        <select
          value={val('model')}
          onChange={(e) => apply({ model: e.target.value })}
          disabled={!val('brand')}
          title={val('brand') ? undefined : t('search.selectBrandFirst')}
          className={selectCls}
        >
          <option value="">{val('brand') ? t('search.allModels') : t('search.selectBrand')}</option>
          {models.map((m) => (
            <option key={m} value={m}>
              {val('brand') && m.startsWith(val('brand') + ' ') ? m.slice(val('brand').length + 1) : m}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1 flex-1 min-w-[120px]">
        <label className="label">{t('search.type')}</label>
        <select value={val('type')} onChange={(e) => apply({ type: e.target.value })} className={selectCls}>
          <option value="">{t('search.anyType')}</option>
          {TYPE_OPTIONS.map(([v, k]) => <option key={v} value={v}>{t(k)}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1 flex-1 min-w-[120px]">
        <label className="label">{t('search.fuel')}</label>
        <select value={val('fuel')} onChange={(e) => apply({ fuel: e.target.value })} className={selectCls}>
          <option value="">{t('search.anyFuel')}</option>
          {FUEL_OPTIONS.map(([v, k]) => <option key={v} value={v}>{t(k)}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1 flex-1 min-w-[120px]">
        <label className="label">{t('search.color')}</label>
        <select value={val('color')} onChange={(e) => apply({ color: e.target.value })} className={selectCls}>
          <option value="">{t('search.anyColor')}</option>
          {(colors?.length ? colors : COLOR_CODES.map((code) => ({ code, count: 0 }))).map(({ code }) => (
            <option key={code} value={code}>{t(`col.${code}`)}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1 flex-1 min-w-[130px]">
        <label className="label">{t('search.age')}</label>
        <select value={val('age')} onChange={(e) => apply({ age: e.target.value })} className={selectCls}>
          <option value="">{t('search.anyAge')}</option>
          {AGE_OPTIONS.map(([v, k]) => <option key={v} value={v}>{t(k)}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1 flex-1 min-w-[130px]">
        <label className="label">{t('search.price')}</label>
        <select value={val('price')} onChange={(e) => apply({ price: e.target.value })} className={selectCls}>
          <option value="">{t('search.anyPrice')}</option>
          {PRICE_OPTIONS.map(([v, k]) => <option key={v} value={v}>{t(k)}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1 flex-1 min-w-[140px]">
        <label className="label">{t('search.transmission')}</label>
        <select value={val('transmission')} onChange={(e) => apply({ transmission: e.target.value })} className={selectCls}>
          <option value="">{t('search.anyTransmission')}</option>
          {TRANSMISSION_OPTIONS.map(([v, k]) => <option key={v} value={v}>{t(k)}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1 flex-1 min-w-[100px]">
        <label className="label">{t('search.drive')}</label>
        <select value={val('drive')} onChange={(e) => apply({ drive: e.target.value })} className={selectCls}>
          <option value="">{t('search.anyDrive')}</option>
          {DRIVE_OPTIONS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1 flex-1 min-w-[110px]">
        <label className="label">{t('search.condition')}</label>
        <select value={val('cond')} onChange={(e) => apply({ cond: e.target.value })} className={selectCls}>
          <option value="">{t('search.anyCondition')}</option>
          {CONDITION_OPTIONS.map(([v, k]) => <option key={v} value={v}>{t(k)}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1 min-w-[130px]">
        <label className="label">{t('search.sort')}</label>
        <select value={val('sort')} onChange={(e) => apply({ sort: e.target.value })} className={`${selectCls} w-auto`}>
          {SORT_OPTIONS.map(([v, k]) => <option key={v} value={v}>{t(k)}</option>)}
        </select>
      </div>

      <div className="flex gap-2">
        <button onClick={() => apply({ q: qDraft ?? val('q') })} className="btn btn-primary btn-sm">
          {t('search.searchBtn')}
        </button>
        <button onClick={clear} className="btn btn-outline btn-sm">
          {t('search.clear')}
        </button>
      </div>
    </div>
  )
}
