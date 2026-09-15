import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import '../../globals.css'
import Header from '@/src/layouts/Header'
import Footer from '@/src/layouts/Footer'
import FloatingContact from '@/src/layouts/FloatingContact'
import ChatWidget from '@/src/layouts/ChatWidget'
import { SITE } from '@/src/config/site'
import { organizationJsonLd, websiteJsonLd, jsonLdScript } from '@/src/lib/jsonld'
import { ogImageFallback } from '@/src/lib/seo'
import { gtagInline } from '@/src/lib/track'
import { isValidLocale, isRTL, locales, type Locale } from '@/src/i18n/config'
import { getDictionary } from '@/src/i18n'
import { I18nProvider } from '@/src/i18n/I18nProvider'
import CookieConsent from '@/src/components/CookieConsent'
import Analytics from '@/src/components/Analytics'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display', display: 'swap' })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono', display: 'swap' })

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

// Table-driven static generation: unknown langs/params are 404s, so Vercel emits
// no fallback functions and next-on-pages treats every [lang] route as static.
export const dynamicParams = false

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: '%s | Cargration',
    default: 'Cargration — Chinese Cars Export | FOB Pricing',
  },
  description: 'Source, inspect, and ship Chinese cars to 42+ countries. FOB pricing from Beijing & Guizhou with full documentation and logistics support.',
  ...(process.env.NEXT_PUBLIC_GSC_TOKEN
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_TOKEN } }
    : {}),
  openGraph: {
    title: {
      template: '%s | Cargration',
      default: 'Cargration — Chinese Cars Export | FOB Pricing',
    },
    description: 'Source, inspect, and ship Chinese cars to 42+ countries. FOB pricing from Beijing & Guizhou with full documentation and logistics support.',
    siteName: SITE.name,
    type: 'website',
    locale: 'en_US',
    images: [ogImageFallback()],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cargration',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const lang = (isValidLocale(params.lang) ? params.lang : 'en') as Locale
  const dict = getDictionary(lang)
  const dir = isRTL(lang) ? 'rtl' : 'ltr'
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang={lang} dir={dir}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A3161" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd())}
        />
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script dangerouslySetInnerHTML={{ __html: gtagInline(gaId) }} />
          </>
        )}
        <I18nProvider lang={lang} dict={dict}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-navy-950)] focus:shadow-lg"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
          <FloatingContact />
          <ChatWidget />
          <CookieConsent />
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  )
}
