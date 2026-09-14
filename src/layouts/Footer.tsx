'use client'
import Image from 'next/image'
import { WHATSAPP_URL, SITE } from '../config/site'
import { useI18n } from '../i18n/I18nProvider'
import LLink from '../i18n/LLink'

interface FooterLink {
  key: string
  to?: string
  href?: string
}

interface FooterColumn {
  titleKey: string
  links: FooterLink[]
}

const FOOTER_COLS: FooterColumn[] = [
  {
    titleKey: 'footer.company',
    links: [
      { key: 'footer.about', to: '/about' },
      { key: 'footer.careers', to: '/careers' },
      { key: 'footer.contact', to: '/contact' },
    ],
  },
  {
    titleKey: 'footer.buy',
    links: [
      { key: 'nav.newCars', to: '/new-cars' },
      { key: 'nav.usedCars', to: '/used-cars' },
      { key: 'nav.evs', to: '/evs' },
      { key: 'footer.singleCar', to: '/b2c-car-export' },
      { key: 'footer.requestCar', to: '/request-car' },
    ],
  },
  {
    titleKey: 'footer.resources',
    links: [
      { key: 'footer.howToBuy', to: '/how-it-works' },
      { key: 'nav.inspection', to: '/inspection' },
      { key: 'footer.shippingGuide', to: '/logistics' },
      { key: 'footer.payment', to: '/payment' },
      { key: 'footer.warranty', to: '/warranty' },
      { key: 'footer.faq', to: '/faq' },
      { key: 'footer.blogNews', to: '/blog' },
      { key: 'footer.testimonials', to: '/testimonials' },
      { key: 'nav.brands', to: '/brands' },
    ],
  },
]

const linkCls =
  'block text-[.85rem] no-underline transition-colors hover:text-white'
const linkStyle = { color: 'var(--color-steel-200)' }

export default function Footer() {
  const { t, lang } = useI18n()
  return (
    <footer style={{ background: 'var(--color-navy-950)' }}>
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <LLink href="/" className="mb-4 flex items-center gap-2.5 no-underline" aria-label="Cargration — home">
              <Image src="/assets/img/cargration-logo.webp" alt="Cargration" width={38} height={38} sizes="38px" style={{ borderRadius: 8 }} />
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Cargr<strong style={{ color: 'var(--color-steel-400)' }}>ation</strong>
              </span>
            </LLink>
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: 'var(--color-steel-400)' }}>
              {t('footer.tagline')}
            </p>
            <div className="mt-5 space-y-1.5 text-sm" style={{ color: 'var(--color-steel-200)' }}>
              <a href={`tel:+${SITE.whatsappNumber}`} className="block no-underline transition-colors hover:text-white" style={{ color: 'inherit' }}>{SITE.phoneDisplay}</a>
              <a href={`mailto:${SITE.email}`} className="block no-underline transition-colors hover:text-white" style={{ color: 'inherit' }}>{SITE.email}</a>
            </div>
            <div className="mt-4 flex gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-lg transition-transform hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,.08)', color: '#fff' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12.04 2a9.9 9.9 0 00-8.51 14.94L2 22l5.2-1.49A9.87 9.87 0 0012.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.43 12.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48a9.1 9.1 0 01-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.19.05-.37-.02-.51-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34m-5.43 7.4a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37A9.86 9.86 0 012.16 11.6c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88" /></svg>
              </a>
              <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="flex h-9 w-9 items-center justify-center rounded-lg transition-transform hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,.08)', color: '#fff' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M21.94 4.04a1.5 1.5 0 00-2.03-1.06L2.7 9.87c-1.06.42-1 1.98.09 2.31l4.63 1.4 1.75 5.36c.32.99 1.59 1.2 2.22.37l2.44-3.22 4.55 3.34c.86.63 2.09.17 2.32-.87l3.24-14.52zM8.4 13.02l8.9-5.57c.28-.18.57.21.32.43l-7.3 6.78c-.26.24-.42.56-.47.91l-.25 1.79c-.03.24-.37.27-.45.04l-1.02-3.29a.83.83 0 01.27-.89z" /></svg>
              </a>
            </div>
          </div>

          {FOOTER_COLS.slice(0, 2).map((col) => (
            <nav key={col.titleKey} aria-label={t(col.titleKey)}>
              <h4 className="mb-3 font-display text-[.82rem] font-semibold uppercase tracking-wider" style={{ color: '#fff' }}>
                {t(col.titleKey)}
              </h4>
              <div className="space-y-2">
                {col.links.map((link: FooterLink) =>
                  link.to ? (
                    <LLink key={link.key} href={link.to} className={linkCls} style={linkStyle}>
                      {t(link.key)}
                    </LLink>
                  ) : (
                    <a key={link.key} href={link.href} target="_blank" rel="noopener noreferrer" className={linkCls} style={linkStyle}>
                      {t(link.key)}
                    </a>
                  )
                )}
              </div>
            </nav>
          ))}

          <nav aria-label={t(FOOTER_COLS[2].titleKey)}>
            <h4 className="mb-3 font-display text-[.82rem] font-semibold uppercase tracking-wider" style={{ color: '#fff' }}>
              {t(FOOTER_COLS[2].titleKey)}
            </h4>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-1 xl:grid-cols-2">
              {FOOTER_COLS[2].links.map((link: FooterLink) => (
                <LLink key={link.key} href={link.to || '#'} className={linkCls} style={linkStyle}>
                  {t(link.key)}
                </LLink>
              ))}
            </div>
          </nav>

          <nav aria-label={t('footer.connect')}>
            <h4 className="mb-3 font-display text-[.82rem] font-semibold uppercase tracking-wider" style={{ color: '#fff' }}>
              {t('footer.connect')}
            </h4>
            <div className="space-y-2">
              <LLink href="/compare" className={linkCls} style={linkStyle}>{t('nav.compare')}</LLink>
              <LLink href="/contact" className={linkCls} style={linkStyle}>{t('footer.contact')}</LLink>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkCls} style={linkStyle}>{t('common.chatOnWhatsapp')}</a>
              <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className={linkCls} style={linkStyle}>{t('common.chatOnTelegram')}</a>
              <a href="https://www.facebook.com/cargration" target="_blank" rel="noopener noreferrer" className={linkCls} style={linkStyle}>Facebook</a>
              <a href="https://x.com/cargration" target="_blank" rel="noopener noreferrer" className={linkCls} style={linkStyle}>X / Twitter</a>
              <a href="https://www.linkedin.com/company/cargration" target="_blank" rel="noopener noreferrer" className={linkCls} style={linkStyle}>LinkedIn</a>
              <a href="https://www.instagram.com/cargration" target="_blank" rel="noopener noreferrer" className={linkCls} style={linkStyle}>Instagram</a>
            </div>
          </nav>
        </div>

        {/* Trust Signals */}
        <div
          className="pb-6 pt-10"
          style={{ color: 'var(--color-steel-300)' }}
        >
          <p
            className="mb-4 font-display text-[.78rem] font-semibold uppercase tracking-widest"
            style={{ color: 'var(--color-steel-400)' }}
          >
            {t('footer.trustEyebrow')}
          </p>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <li key={i} className="flex flex-col gap-1">
                <span className="font-display text-[.92rem] font-semibold" style={{ color: '#fff' }}>
                  {t(`footer.trust${i}t`)}
                </span>
                <span className="text-[.85rem] leading-relaxed">
                  {t(`footer.trust${i}d`)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-3 border-t py-5"
          style={{ borderColor: 'rgba(255,255,255,.1)', fontSize: '.78rem', color: 'var(--color-steel-400)' }}
        >
          <span>© 2026 Cargration</span>
          <div className="flex items-center gap-5">
            <LLink href="/privacy-policy" className="no-underline transition-colors hover:text-white" style={{ color: 'inherit' }}>{t('footer.privacy')}</LLink>
            <LLink href="/terms" className="no-underline transition-colors hover:text-white" style={{ color: 'inherit' }}>{t('footer.terms')}</LLink>
            <span className="font-mono">{lang.toUpperCase()} / USD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
