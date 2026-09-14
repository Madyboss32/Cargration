'use client'
import { useState } from 'react'
import { getFaq } from '../data/faqData'
import { getDictionary, createT } from '../i18n'
import { faqJsonLd, jsonLdScript } from '../lib/jsonld'

export default function FAQAccordion({ lang = 'en', filter }: { lang?: string; filter?: string[] }) {
  const groups = getFaq(lang, filter)
  const t = createT(getDictionary(lang))
  const allFaqs = groups.flatMap((g) => g.items).map((e) => ({ q: e.q, a: e.a }))
  const [activeTab, setActiveTab] = useState<string>(groups[0]?.id || 'general')
  const [openQ, setOpenQ] = useState<string | null>(null)

  const toggle = (key: string): void => setOpenQ(openQ === key ? null : key)
  const activeGroup = groups.find((g) => g.id === activeTab) || groups[0]

  return (
    <section className="w-full max-w-3xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(allFaqs))} />
      <div className="flex flex-wrap gap-2 mb-8">
        {groups.map((g) => (
          <button
            key={g.id}
            onClick={() => { setActiveTab(g.id); setOpenQ(null) }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === g.id
                ? 'bg-[var(--color-blue-500)] text-white'
                : 'bg-[var(--color-paper-100)] text-[var(--color-ink-700)] hover:bg-[var(--color-paper-50)]'
            }`}
          >
            {t(g.labelKey)}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {(activeGroup?.items || []).map((item, i) => {
          const key: string = `${activeTab}-${i}`
          const isOpen: boolean = openQ === key
          return (
            <div
              key={key}
              className="border border-[var(--color-paper-100)] rounded-xl bg-white overflow-hidden"
            >
              <button
                onClick={() => toggle(key)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-sm md:text-base" style={{ color: 'var(--color-ink-900)' }}>{item.q}</span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full bg-[var(--color-paper-50)] flex items-center justify-center text-lg leading-none transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  style={{ color: 'var(--color-blue-500)' }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-ink-700)' }}>
                  {item.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
