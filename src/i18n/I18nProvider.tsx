'use client'
import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { createT, type Dict, type TFunc } from './index'
import type { Locale } from './config'

interface I18nContextValue {
  lang: Locale
  t: TFunc
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ lang, dict, children }: { lang: Locale; dict: Dict; children: ReactNode }) {
  const value = useMemo<I18nContextValue>(() => ({ lang, t: createT(dict, lang) }), [lang, dict])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    return { lang: 'en', t: createT({}, 'en') }
  }
  return ctx
}
