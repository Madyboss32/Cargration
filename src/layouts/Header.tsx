'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { WHATSAPP_URL, SITE } from '../config/site'
import { getSaved, subscribe } from '../lib/saved'
import { useI18n } from '../i18n/I18nProvider'
import { localeHref } from '../i18n/LLink'
import LLink from '../i18n/LLink'
import { locales, LOCALE_NAMES, type Locale } from '../i18n/config'

interface NavLink {
  key: string
  to: string
}

const NAV_LINKS: NavLink[] = [
  { key: 'nav.inspection', to: '/inspection' },
  { key: 'nav.howItWorks', to: '/how-it-works' },
  { key: 'nav.logistics', to: '/logistics' },
  { key: 'nav.countryGuides', to: '/country-guides' },
  { key: 'nav.about', to: '/about' },
]

interface BrowseItem { labelKey: string; href: string }
interface BrowseGroup { titleKey: string; items: BrowseItem[] }

const BROWSE_GROUPS: BrowseGroup[] = [
  {
    titleKey: 'search.condition',
    items: [
      { labelKey: 'nav.newCars', href: '/new-cars' },
      { labelKey: 'nav.usedCars', href: '/used-cars' },
      { labelKey: 'nav.evs', href: '/evs' },
    ],
  },
  {
    titleKey: 'home.byType',
    items: [
      ['suv', 'type.suv'], ['sedan', 'type.sedan'], ['mpv', 'type.mpv'], ['hatchback', 'type.hatchback'],
      ['pickup', 'type.pickup'], ['van', 'type.van'], ['truck', 'type.truck'],
    ].map(([v, k]) => ({ labelKey: k, href: `/inventory?type=${v}` })),
  },
  {
    titleKey: 'search.fuel',
    items: [
      ['Electric', 'fuel.electric'], ['Hybrid', 'fuel.hybrid'], ['Plug-in%20Hybrid', 'fuel.pluginHybrid'],
      ['REEV', 'fuel.reev'], ['Petrol', 'fuel.petrol'], ['Diesel', 'fuel.diesel'],
    ].map(([v, k]) => ({ labelKey: k, href: `/inventory?fuel=${v}` })),
  },
  {
    titleKey: 'search.age',
    items: [
      ['under-1', 'search.ageUnder1'], ['1-3', 'search.age1to3'], ['3-5', 'search.age3to5'], ['5%2B', 'search.age5plus'],
    ].map(([v, k]) => ({ labelKey: k, href: `/inventory?age=${v}` })),
  },
  {
    titleKey: 'home.byPrice',
    items: [
      ['0-8000', 'heroPrice.under8k'], ['8000-15000', 'heroPrice.8to15k'], ['15000-25000', 'heroPrice.15to25k'],
      ['25000-40000', 'heroPrice.25to40k'], ['40000-1000000', 'heroPrice.over40k'],
    ].map(([v, k]) => ({ labelKey: k, href: `/inventory?price=${v}` })),
  },
]

function localeSwitchHref(pathname: string, target: Locale): string {
  const segments = pathname.split('/')
  if (segments[1] && locales.includes(segments[1] as Locale)) {
    segments[1] = target
    const joined = segments.join('/')
    return target === 'en' && joined.startsWith('/en/') ? joined.slice(3) || '/' : joined
  }
  return localeHref(pathname === '' ? '/' : pathname, target)
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const [browseOpen, setBrowseOpen] = useState<boolean>(false)
  const [drawerBrowseOpen, setDrawerBrowseOpen] = useState<boolean>(false)
  const [condensed, setCondensed] = useState<boolean>(false)
  const [langOpen, setLangOpen] = useState<boolean>(false)
  const [savedCount, setSavedCount] = useState<number>(0)
  const { t, lang } = useI18n()
  const pathname = usePathname() || '/'

  useEffect(() => {
    const sync = (): void => setSavedCount(getSaved().length)
    sync()
    return subscribe(sync)
  }, [])

  useEffect(() => {
    const onScroll = (): void => setCondensed(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent): void => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!langOpen) return
    const close = (): void => setLangOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [langOpen])

  useEffect(() => {
    if (!browseOpen) return
    const close = (): void => setBrowseOpen(false)
    const onKey = (e: KeyboardEvent): void => { if (e.key === 'Escape') close() }
    document.addEventListener('click', close)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', close)
      document.removeEventListener('keydown', onKey)
    }
  }, [browseOpen])

  const handleLangSelect = (target: Locale): void => {
    setLangOpen(false)
    document.cookie = `cg_locale=${target}; path=/; max-age=31536000; samesite=lax`
    window.location.href = localeSwitchHref(pathname, target)
  }

  const isActive = (to: string): boolean => pathname === localeHref(to, lang as Locale) || pathname.endsWith(to)

  return (
    <>
      {/* Utility bar */}
      <div className="hidden md:block" style={{ background: 'var(--color-navy-950)', color: '#E9EFF7' }}>
        <div className="container flex items-center justify-between" style={{ height: 36, fontSize: '.78rem', fontWeight: 500 }}>
          <div className="flex items-center gap-5">
            <a href={`tel:+${SITE.whatsappNumber}`} className="flex items-center gap-1.5 no-underline transition-colors hover:text-white" style={{ color: 'inherit' }}>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.5 2.5.8 3.8.8.6 0 1 .4 1 1v3.6c0 .6-.4 1-1 1C10.4 21.4 2.6 13.6 2.6 4.8c0-.6.4-1 1-1H7.2c.6 0 1 .4 1 1 0 1.3.3 2.6.8 3.8.2.3.1.7-.2 1L6.6 10.8z" /></svg>
              {SITE.phoneDisplay}
            </a>
            <span className="hidden lg:inline">{SITE.email}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); setLangOpen(!langOpen) }}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label="Language"
                className="flex cursor-pointer items-center gap-1 border-none bg-transparent p-0.5 font-medium transition-colors"
                style={{ fontSize: '.75rem', color: 'inherit', fontFamily: 'inherit' }}
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></svg>
                {LOCALE_NAMES[lang]}
                <svg viewBox="0 0 12 8" width="9" height="6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 1l5 5 5-5" /></svg>
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  className="absolute right-0 z-[100] m-0 list-none rounded-xl border bg-white p-1"
                  style={{ top: '100%', marginTop: 6, minWidth: 170, borderColor: 'var(--color-paper-100)', boxShadow: 'var(--shadow-lg)' }}
                >
                  {locales.map((code: Locale) => (
                    <li
                      key={code}
                      role="option"
                      aria-selected={code === lang}
                      onClick={() => handleLangSelect(code)}
                      className="cursor-pointer rounded-lg px-3 py-1.5 transition-colors hover:bg-[var(--color-paper-50)]"
                      style={{ fontSize: '.78rem', color: 'var(--color-ink-900)', background: code === lang ? 'var(--color-blue-100)' : undefined, fontWeight: code === lang ? 600 : 400 }}
                    >
                      {LOCALE_NAMES[code]}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <span aria-hidden="true" style={{ opacity: .35 }}>|</span>
            <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="no-underline transition-colors hover:text-white" style={{ color: 'inherit' }}>Telegram</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="no-underline transition-colors hover:text-white" style={{ color: 'inherit' }}>WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          background: 'rgba(255,255,255,.92)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottomColor: 'var(--color-paper-100)',
          boxShadow: condensed ? 'var(--shadow-sm)' : 'none',
          transition: 'box-shadow .2s ease',
        }}
      >
        <div className="container flex items-center justify-between gap-4" style={{ height: condensed ? 60 : 68, transition: 'height .25s ease' }}>
          <LLink href="/" className="flex shrink-0 items-center gap-2.5 no-underline" aria-label="Cargration — home">
            <Image
              src="/assets/img/cargration-logo.webp"
              alt="Cargration"
              width={38}
              height={38}
              sizes="38px"
              style={{ height: condensed ? 30 : 38, transition: 'height .25s ease', borderRadius: 7 }}
            />
            <span
              className="hidden sm:inline"
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: condensed ? '1.05rem' : '1.2rem',
                color: 'var(--color-navy-950)', letterSpacing: '-0.02em',
                transition: 'font-size .25s ease',
              }}
            >
              Cargr<strong style={{ color: 'var(--color-blue-600)' }}>ation</strong>
            </span>
          </LLink>

          {/* Mobile-only: language dropdown + search */}
          <div className="flex items-center gap-1 xl:hidden">
            <div className="relative">
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); setLangOpen(!langOpen) }}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label="Language"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[var(--color-paper-100)] bg-white"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-navy-950)" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></svg>
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  className="absolute right-0 z-[100] m-0 list-none rounded-xl border bg-white p-1"
                  style={{ top: '100%', marginTop: 6, minWidth: 170, borderColor: 'var(--color-paper-100)', boxShadow: 'var(--shadow-lg)' }}
                >
                  {locales.map((code: Locale) => (
                    <li
                      key={code}
                      role="option"
                      aria-selected={code === lang}
                      onClick={() => handleLangSelect(code)}
                      className="cursor-pointer rounded-lg px-3 py-1.5 transition-colors hover:bg-[var(--color-paper-50)]"
                      style={{ fontSize: '.78rem', color: 'var(--color-ink-900)', background: code === lang ? 'var(--color-blue-100)' : undefined, fontWeight: code === lang ? 600 : 400 }}
                    >
                      {LOCALE_NAMES[code]}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <LLink
              href="/inventory"
              aria-label="Search inventory"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-paper-100)] bg-white"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-navy-950)" strokeWidth="1.8" strokeLinecap="round"><circle cx="10.5" cy="10.5" r="7" /><path d="M18 18l-3.5-3.5" /></svg>
            </LLink>
          </div>

          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
            <div
              className="relative"
              onMouseEnter={() => setBrowseOpen(true)}
              onMouseLeave={() => setBrowseOpen(false)}
            >
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); setBrowseOpen(!browseOpen) }}
                aria-haspopup="true"
                aria-expanded={browseOpen}
                className="flex cursor-pointer items-center gap-1 rounded-lg border-none px-3 py-2 text-[.82rem] font-medium transition-colors hover:bg-[var(--color-blue-100)] hover:text-[var(--color-blue-600)]"
                style={{
                  whiteSpace: 'nowrap', fontFamily: 'inherit',
                  color: browseOpen || pathname.includes('/inventory') ? 'var(--color-blue-600)' : 'var(--color-ink-900)',
                  background: browseOpen || pathname.includes('/inventory') ? 'var(--color-blue-100)' : undefined,
                }}
              >
                {t('nav.browseCars')}
                <svg viewBox="0 0 12 8" width="9" height="6" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ transform: browseOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}><path d="M1 1l5 5 5-5" /></svg>
              </button>
              {browseOpen && (
                <div
                  className="absolute z-[90] grid grid-cols-4 gap-x-6 gap-y-3 rounded-2xl border bg-white p-5"
                  style={{ top: '100%', paddingTop: 12, marginTop: 6, insetInlineStart: 0, minWidth: 640, borderColor: 'var(--color-paper-100)', boxShadow: 'var(--shadow-lg)' }}
                >
                  {BROWSE_GROUPS.map((group) => (
                    <div key={group.titleKey}>
                      <div className="mb-1.5 font-mono text-[.65rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-blue-500)' }}>
                        {t(group.titleKey)}
                      </div>
                      <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <LLink
                              href={item.href}
                              onClick={() => setBrowseOpen(false)}
                              className="block rounded-lg px-2 py-1.5 text-[.8rem] no-underline transition-colors hover:bg-[var(--color-paper-50)] hover:text-[var(--color-blue-600)]"
                              style={{ color: 'var(--color-ink-700)' }}
                            >
                              {t(item.labelKey)}
                            </LLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-4 mt-1 border-t pt-3" style={{ borderColor: 'var(--color-paper-100)' }}>
                    <LLink
                      href="/inventory"
                      onClick={() => setBrowseOpen(false)}
                      className="inline-flex items-center gap-1 text-[.8rem] font-semibold no-underline hover:text-[var(--color-blue-600)]"
                      style={{ color: 'var(--color-navy-950)' }}
                    >
                      {t('nav.viewAllInventory')}
                      <svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor" aria-hidden="true" style={{ transform: lang === 'ar' ? 'rotate(180deg)' : undefined }}><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" /></svg>
                    </LLink>
                  </div>
                </div>
              )}
            </div>
            {NAV_LINKS.map((link: NavLink) => (
              <LLink
                key={link.to}
                href={link.to}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className="rounded-lg px-3 py-2 text-[.82rem] font-medium no-underline transition-colors hover:bg-[var(--color-blue-100)] hover:text-[var(--color-blue-600)]"
                style={{
                  whiteSpace: 'nowrap',
                  color: isActive(link.to) ? 'var(--color-blue-600)' : 'var(--color-ink-700)',
                  background: isActive(link.to) ? 'var(--color-blue-100)' : undefined,
                }}
              >
                {t(link.key)}
              </LLink>
            ))}
          </nav>

          <button
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border lg:hidden"
            style={{ borderColor: 'var(--color-paper-100)', background: '#fff' }}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="sr-only">Menu</span>
            <span style={{ width: 20, height: 2, borderRadius: 2, background: 'var(--color-navy-950)', transition: 'transform .25s', transform: mobileOpen ? 'rotate(45deg) translate(4px,5px)' : 'none' }} />
            <span style={{ width: 20, height: 2, borderRadius: 2, background: 'var(--color-navy-950)', transition: 'opacity .2s', opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ width: 20, height: 2, borderRadius: 2, background: 'var(--color-navy-950)', transition: 'transform .25s', transform: mobileOpen ? 'rotate(-45deg) translate(4px,-5px)' : 'none' }} />
          </button>

          <div className="hidden lg:flex items-center gap-2">
            <LLink
              href="/compare"
              aria-label={`${t('nav.compare')} (${savedCount})`}
              className="relative items-center gap-1.5 rounded-xl border px-3 py-2 text-[.82rem] font-medium no-underline transition-colors hover:border-[var(--color-blue-500)] inline-flex"
              style={{ color: 'var(--color-ink-700)', borderColor: 'var(--color-paper-100)' }}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 6l3-3M4 6l3 3M20 18H4m16 0l-3-3m3 3l-3 3" />
              </svg>
              <span className="hidden md:inline">{t('nav.compare')}</span>
              {savedCount > 0 && (
                <span
                  className="absolute flex items-center justify-center font-bold text-white"
                  style={{ top: -7, right: -7, minWidth: 18, height: 18, borderRadius: 9, background: 'var(--color-blue-500)', fontSize: '.65rem', padding: '0 5px' }}
                >
                  {savedCount}
                </span>
              )}
            </LLink>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm !min-h-0"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 00-8.51 14.94L2 22l5.2-1.49A9.87 9.87 0 0012.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10z" opacity=".25" /><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48a9.1 9.1 0 01-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.19.05-.37-.02-.51-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34m-5.43 7.4a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37A9.86 9.86 0 012.16 11.6c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88" /></svg>
              WhatsApp
            </a>

            <LLink href="/contact" className="btn btn-primary btn-sm !min-h-0">
              {t('nav.getQuote')}
            </LLink>
          </div>
        </div>
      </header>

      {/* Mobile drawer (sibling of header so position:fixed is viewport-relative) */}
      <div
        className="fixed inset-0 z-[60] lg:hidden"
        style={{ pointerEvents: mobileOpen ? 'auto' : 'none', visibility: mobileOpen ? 'visible' : 'hidden' }}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 transition-opacity duration-300"
          style={{ background: 'rgba(14,26,51,.5)', opacity: mobileOpen ? 1 : 0 }}
        />
        <nav
          className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300"
          style={{ transform: mobileOpen ? 'translateX(0)' : 'translateX(105%)' }}
          aria-label="Mobile"
        >
          <div className="flex items-center justify-between border-b px-5" style={{ height: 68, borderColor: 'var(--color-paper-100)' }}>
            <Image src="/assets/img/cargration-logo.webp" alt="Cargration" width={32} height={32} sizes="32px" style={{ height: 32, borderRadius: 6 }} />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border"
              style={{ borderColor: 'var(--color-paper-100)' }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-navy-950)" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-3">
            <div className="mb-1 overflow-hidden rounded-xl border" style={{ borderColor: 'var(--color-paper-100)' }}>
              <button
                onClick={() => setDrawerBrowseOpen(!drawerBrowseOpen)}
                aria-expanded={drawerBrowseOpen}
                className="flex w-full cursor-pointer items-center justify-between border-none px-3 py-3 text-[.95rem] font-medium"
                style={{ background: pathname.includes('/inventory') ? 'var(--color-blue-100)' : '#fff', color: 'var(--color-ink-900)', fontFamily: 'inherit' }}
              >
                {t('nav.browseCars')}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--color-steel-400)" strokeWidth="2" strokeLinecap="round" style={{ transform: drawerBrowseOpen ? 'rotate(90deg)' : 'none', transition: 'transform .2s' }}><path d="M9 6l6 6-6 6" /></svg>
              </button>
              {drawerBrowseOpen && (
                <div className="flex flex-col gap-3 border-t px-3 py-3" style={{ borderColor: 'var(--color-paper-100)', background: 'var(--color-paper-50)' }}>
                  {BROWSE_GROUPS.map((group) => (
                    <div key={group.titleKey}>
                      <div className="mb-1 font-mono text-[.62rem] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-blue-500)' }}>
                        {t(group.titleKey)}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {group.items.map((item) => (
                          <LLink
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-full border bg-white px-2.5 py-1 text-[.72rem] no-underline transition-colors hover:text-[var(--color-blue-600)]"
                            style={{ borderColor: 'var(--color-paper-100)', color: 'var(--color-ink-700)' }}
                          >
                            {t(item.labelKey)}
                          </LLink>
                        ))}
                      </div>
                    </div>
                  ))}
                  <LLink
                    href="/inventory"
                    onClick={() => setMobileOpen(false)}
                    className="mt-1 inline-flex items-center gap-1 text-[.8rem] font-semibold no-underline"
                    style={{ color: 'var(--color-blue-600)' }}
                  >
                    {t('nav.viewAllInventory')} →
                  </LLink>
                </div>
              )}
            </div>
            {NAV_LINKS.map((link: NavLink) => (
              <LLink
                key={link.to}
                href={link.to}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-[.95rem] font-medium no-underline transition-colors active:bg-[var(--color-paper-50)]"
                style={{ color: isActive(link.to) ? 'var(--color-blue-600)' : 'var(--color-ink-900)', background: isActive(link.to) ? 'var(--color-blue-100)' : undefined }}
              >
                {t(link.key)}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--color-steel-400)" strokeWidth="2" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
              </LLink>
            ))}
            <LLink
              href="/compare"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-between rounded-xl border px-3 py-3 text-[.95rem] font-medium no-underline"
              style={{ color: 'var(--color-ink-900)', borderColor: 'var(--color-paper-100)' }}
            >
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 6l3-3M4 6l3 3M20 18H4m16 0l-3-3m3 3l-3 3" /></svg>
                {t('nav.compare')}
              </span>
              {savedCount > 0 && <span className="badge badge-blue">{savedCount}</span>}
            </LLink>
          </div>

        </nav>
      </div>
    </>
  )
}
