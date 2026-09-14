import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, locales } from './src/i18n/config'

/**
 * All page routes live under `[lang]/...`. Links for the default locale are emitted as
 * bare paths (e.g. `/inventory`), but Next.js would otherwise match those as `[lang]`
 * with lang = the path segment, falling back to the default locale and wrongly rendering
 * the homepage. Redirect any non-locale-prefixed path to `/<defaultLocale>/...`.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1]

  const isLocalePath = first !== undefined && (locales as readonly string[]).includes(first)
  const isRootIndex = pathname === '/' || pathname === ''

  if (isLocalePath || isRootIndex) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  // Preserve search params (filters etc.)
  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next (Next internals), api (route handlers)
     * - sitemap.xml + sitemap files (root-level route handlers)
     * - static/public assets served from /public
     */
    '/((?!_next|api|sitemap|sitemap.xml|robots.txt|site.webmanifest|favicon\\.ico|apple-touch-icon|index\\.html|assets|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|xml|txt|json|webmanifest|css|js)).*)',
  ],
}
