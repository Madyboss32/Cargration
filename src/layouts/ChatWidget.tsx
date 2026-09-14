'use client'
import { useState, useRef, useEffect } from 'react'

import { WHATSAPP_URL } from '../config/site'
import { useI18n } from '../i18n/I18nProvider'
import { localeHref } from '../i18n/LLink'
import type { TFunc } from '../i18n'
import type { Locale } from '../i18n/config'

interface ChatMessage {
  who: 'user' | 'bot'
  html: string
}

const SUGGESTION_KEYS: string[] = ['chat.sug1', 'chat.sug2', 'chat.sug3', 'chat.sug4']

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

interface CatalogCar {
  id: string; brand: string; name: string; trim: string; year: string;
  price: number; fuel: string; type: string; img: string;
}

let catalogCache: CatalogCar[] | null = null

async function loadCatalog(): Promise<CatalogCar[]> {
  if (!catalogCache) {
    const res = await fetch('/catalog-lite.json')
    catalogCache = res.ok ? await res.json() : []
  }
  return catalogCache as CatalogCar[]
}

interface SearchResult {
  items: CatalogCar[]
  total: number
}

async function searchCars(params: URLSearchParams): Promise<SearchResult> {
  const catalog = await loadCatalog()
  let items = catalog
  
  const q = params.get('q')
  if (q) {
    const lower = q.toLowerCase()
    items = items.filter(c => 
      `${c.brand} ${c.name} ${c.trim}`.toLowerCase().includes(lower)
    )
  }
  const brand = params.get('brand')
  if (brand) items = items.filter(c => c.brand.toLowerCase() === brand.toLowerCase())
  const fuel = params.get('fuel')
  if (fuel) items = items.filter(c => c.fuel?.toLowerCase() === fuel.toLowerCase())
  const type = params.get('type')
  if (type) items = items.filter(c => c.type?.toLowerCase() === type.toLowerCase())
  const color = params.get('color')
  if (color) items = items.filter(c => (c as any).color?.toLowerCase() === color.toLowerCase())
  const price = params.get('price')
  if (price) {
    const [min, max] = price.split('-').map(Number)
    if (min) items = items.filter(c => c.price >= min)
    if (max) items = items.filter(c => c.price <= max)
  }
  const sort = params.get('sort')
  if (sort === 'price-asc') items = [...items].sort((a, b) => a.price - b.price)
  else if (sort === 'price-desc') items = [...items].sort((a, b) => b.price - a.price)
  
  const page = parseInt(params.get('page') || '1', 10)
  const pageSize = parseInt(params.get('pageSize') || '24', 10)
  const start = (page - 1) * pageSize
  
  return { items: items.slice(start, start + pageSize), total: items.length }
}

function formatMatches(
  matches: CatalogCar[],
  total: number,
  introLine: string,
  t: TFunc,
  lang: Locale,
  inventoryQs: string,
): string {
  if (!matches.length) {
    return `${introLine}<br>${t('chat.noMatch')}`
  }
  const top: CatalogCar[] = matches.slice(0, 4)
  const list: string = top
    .map((c: CatalogCar) => {
      const slug = `${(c.brand || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${(c.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${(c.trim || 'base').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${c.year || '0'}-${(c.id || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
      const href = localeHref(`/car-detail/${slug}`, lang)
      return `<li style="margin:4px 0;line-height:1.5"><a href="${href}" style="color:var(--color-blue-500);text-decoration:underline">${escapeHtml(c.name)}</a> (${escapeHtml(c.trim)}) — $${c.price.toLocaleString()} FOB</li>`
    })
    .join('')
  const more: string =
    total > top.length
      ? `<br><a href="${localeHref(`/inventory?${inventoryQs}`, lang)}" style="color:var(--color-blue-500);text-decoration:underline">${t('chat.moreMatches', { n: total - top.length, es: total - top.length === 1 ? '' : 'es' })}</a>`
      : ''
  return `${introLine}<ul style="margin:6px 0;padding-left:18px;font-size:0.85rem">${list}</ul>${more}`
}

async function getBrands(): Promise<string[]> {
  const catalog = await loadCatalog()
  return [...new Set(catalog.map(c => c.brand))].sort()
}

const COLOR_WORDS: Record<string, string> = {
  white: 'white',
  black: 'black',
  silver: 'silver',
  gray: 'gray',
  grey: 'gray',
  blue: 'blue',
  red: 'red',
  green: 'green',
  yellow: 'yellow',
  brown: 'brown',
  beige: 'beige',
  orange: 'orange',
  purple: 'purple',
  pink: 'pink',
  gold: 'gold',
  champagne: 'champagne',
}

async function answerQuery(raw: string, t: TFunc, lang: Locale): Promise<string> {
  const q: string = raw.toLowerCase()

  const shipMatch: RegExpMatchArray | null =
    q.match(/ship(?:ping)?\s*to\s*([a-z\s]+)/) ||
    q.match(/(?:to|deliver to)\s+(brazil|russia|algeria|armenia|uae|iran|côte d'ivoire|ivory coast)/)
  if (shipMatch && !/\bev\b|electric|suv|sedan|pickup|truck/.test(q)) {
    const dest: string = shipMatch[1].trim()
    const capitalized: string = dest.charAt(0).toUpperCase() + dest.slice(1)
    return t('chat.shipTo', { c: capitalized })
  }

  if (/^(hello|hi|hey)\b/.test(q)) {
    return t('chat.hello')
  }
  if (/inspect|quality|verify/.test(q)) {
    return t('chat.inspect')
  }
  if (/document|paperwork|export cert|bill of lading|b\/l/.test(q)) {
    return t('chat.docs')
  }

  const params = new URLSearchParams()

  let cleaned: string = raw.trim()
  let maxPriceLabel = ''
  const priceMatch: RegExpMatchArray | null = q.match(/(?:under|below|less than)\s*\$?\s*([\d,.]+)\s*(k)?/)
  if (priceMatch) {
    const maxPrice = Math.round(parseFloat(priceMatch[1].replace(/,/g, '')) * (priceMatch[2] ? 1000 : 1))
    if (Number.isFinite(maxPrice) && maxPrice > 0) {
      params.set('price', `0-${maxPrice}`)
      maxPriceLabel = t('chat.matchUnder', { p: maxPrice.toLocaleString() })
      cleaned = cleaned.replace(priceMatch[0], ' ')
    }
  }

  if (/\bev\b|electric/.test(q)) {
    params.set('fuel', 'Electric')
    cleaned = cleaned.replace(/\bev\b|electric/gi, ' ')
  } else {
    const typeMap: Array<[RegExp, string]> = [
      [/\bsuv\b|crossover/, 'suv'],
      [/\bsedans?\b|\bsaloons?\b/, 'sedan'],
      [/pickups?\b|\btrucks?\b/, 'pickup'],
      [/\bmpvs?\b|minivans?\b|\bvans?\b/, 'mpv'],
      [/\bhatchbacks?\b/, 'hatchback'],
      [/\bcoupes?\b/, 'coupe'],
      [/convertibles?\b|cabriolets?\b/, 'convertible'],
      [/\bwagons?\b|estate\b/, 'wagon'],
    ]
    for (const [re, val] of typeMap) {
      const m = q.match(re)
      if (m) {
        params.set('type', val)
        cleaned = cleaned.replace(new RegExp(m[0], 'gi'), ' ')
        break
      }
    }
  }

  for (const [word, code] of Object.entries(COLOR_WORDS)) {
    if (new RegExp(`\\b${word}\\b`).test(q)) {
      params.set('color', code)
      cleaned = cleaned.replace(new RegExp(`\\b${word}\\b`, 'gi'), ' ')
      break
    }
  }

  const brands: string[] = await getBrands()
  for (const brand of brands) {
    if (new RegExp(`\\b${brand.toLowerCase().replace(/[^a-z0-9]/g, '')}`).test(q.replace(/[^a-z0-9\s]/g, ' '))) {
      params.set('brand', brand)
      break
    }
  }

  const wantsCheapest: boolean = /cheapest|lowest price|most affordable/.test(q)
  if (wantsCheapest) params.set('sort', 'price-asc')

  const leftover: string = cleaned.replace(/[^\p{L}\p{N}\s-]/gu, ' ').trim().replace(/\s+/g, ' ')
  if (leftover.length >= 2) params.set('q', leftover)

  let result: SearchResult
  try {
    result = await searchCars(params)
  } catch {
    return t('chat.fallbackErr')
  }

  if (!result.items.length && params.get('q')) {
    params.delete('q')
    result = await searchCars(params).catch(() => result)
  }

  if (wantsCheapest && result.items.length) {
    return formatMatches(result.items.slice(0, 1), result.total, t('chat.cheapestIntro'), t, lang, params.toString())
  }

  const intro = t('chat.matchesIntro', { q: escapeHtml(raw.trim()), price: maxPriceLabel })
  return formatMatches(result.items, result.total, intro, t, lang, params.toString())
}

export default function ChatWidget() {
  const [open, setOpen] = useState<boolean>(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState<string>('')
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const { t, lang } = useI18n()

  useEffect(() => {
    setMessages([{ who: 'bot', html: t('chat.greeting') }])
    // Re-seed the greeting when the language changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages])

  const addMessage = (html: string, who: 'user' | 'bot'): void => {
    setMessages((prev: ChatMessage[]) => [...prev, { who, html }])
  }

  const respond = async (text: string): Promise<void> => {
    addMessage(text, 'user')
    try {
      const html = await answerQuery(text, t, lang)
      addMessage(html, 'bot')
    } catch {
      addMessage(t('chat.fallbackErr'), 'bot')
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!input.trim()) return
    const text = input
    setInput('')
    void respond(text)
  }

  const handleSuggestion = (text: string): void => {
    void respond(text)
  }

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 50 }}>
      {open && (
        <div
          style={{
            width: 360,
            maxWidth: 'calc(100vw - 2rem)',
            height: 480,
            maxHeight: 'calc(100vh - 6rem)',
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 12px 40px rgba(0,0,0,.18)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            marginBottom: 12,
          }}
        >
          <div
            style={{
              background: 'var(--color-navy-950)',
              color: '#fff',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem' }}>
              {t('chat.title')}
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label={t('chat.close')}
              style={{
                background: 'none', border: 'none', color: '#fff',
                fontSize: '1.3rem', cursor: 'pointer', padding: 0, lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>

          <div
            ref={bodyRef}
            style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            {messages.map((msg: ChatMessage, i: number) => (
              <div
                key={i}
                style={{
                  maxWidth: '85%',
                  padding: '8px 12px',
                  borderRadius: 12,
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                  alignSelf: msg.who === 'user' ? 'flex-end' : 'flex-start',
                  background: msg.who === 'user' ? 'var(--color-blue-500)' : 'var(--color-paper-100)',
                  color: msg.who === 'user' ? '#fff' : 'var(--color-ink-900)',
                  borderBottomRightRadius: msg.who === 'user' ? 4 : 12,
                  borderBottomLeftRadius: msg.who === 'user' ? 12 : 4,
                }}
                dangerouslySetInnerHTML={{ __html: msg.html }}
              />
            ))}
          </div>

          <div style={{ padding: '8px 12px', display: 'flex', gap: 6, flexWrap: 'wrap', flexShrink: 0, borderTop: '1px solid var(--color-paper-100)' }}>
            {SUGGESTION_KEYS.map((key: string) => {
              const s = t(key)
              return (
                <button
                  key={key}
                  onClick={() => handleSuggestion(s)}
                  style={{
                    padding: '5px 10px', borderRadius: 20, fontSize: '0.72rem',
                    border: '1px solid var(--color-paper-100)', background: '#fff',
                    color: 'var(--color-ink-700)', cursor: 'pointer',
                    transition: 'background .15s, border-color .15s', whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.background = 'var(--color-blue-100)'; e.currentTarget.style.borderColor = 'var(--color-blue-500)' }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = 'var(--color-paper-100)' }}
                >
                  {s}
                </button>
              )
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex', gap: 8, padding: '8px 12px 12px',
              borderTop: '1px solid var(--color-paper-100)', flexShrink: 0,
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              placeholder={t('chat.placeholder')}
              autoComplete="off"
              style={{
                flex: 1, padding: '8px 12px', borderRadius: 8,
                border: '1px solid var(--color-paper-100)', fontSize: '0.85rem',
                outline: 'none', fontFamily: 'var(--font-body)',
              }}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = 'var(--color-blue-500)'}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.currentTarget.style.borderColor = 'var(--color-paper-100)'}
            />
            <button
              type="submit"
              aria-label={t('chat.send')}
              style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'var(--color-blue-500)', color: '#fff',
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M3 12l18-9-6 9 6 9-18-9z" /></svg>
            </button>
          </form>

          <button
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
            style={{
              display: 'block', width: '100%', padding: '10px',
              background: 'var(--color-whatsapp)', color: '#fff',
              border: 'none', cursor: 'pointer', fontSize: '0.82rem',
              fontWeight: 600, fontFamily: 'var(--font-body)', flexShrink: 0,
            }}
          >
            {t('chat.continueWhatsapp')}
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? t('chat.close') : t('chat.open')}
        style={{
          width: 56, height: 56, borderRadius: '50%',
          background: 'var(--color-blue-500)', color: '#fff',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0,0,0,.2)',
          animation: !open ? 'chat-pulse 2s infinite' : 'none',
          marginLeft: 'auto',
        }}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="26" height="26"><path fill="currentColor" d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="26" height="26"><path fill="currentColor" d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-4 4V17H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" /></svg>
        )}
      </button>
    </div>
  )
}
