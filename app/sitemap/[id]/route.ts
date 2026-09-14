import { SITE } from '@/src/config/site'
import { ensureLoaded, getAllCars } from '@/src/data/cars.server'
import { allEntries, expandEntries, fileCount, SITEMAP_CHUNK } from '@/src/lib/sitemapPlan'

export const runtime = 'edge'
export const revalidate = 86400

const base = SITE.url.replace(/\/$/, '')

function urlsetXml(urls: { url: string; lastModified?: Date; alternates: Record<string, string> }[]): string {
  const rows = urls.map((u) => {
    const lastmod = u.lastModified ? `\n    <lastmod>${u.lastModified.toISOString()}</lastmod>` : ''
    const langs = Object.entries(u.alternates)
      .map(([hreflang, href]) => `      <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`)
      .join('\n')
    return [
      '  <url>',
      `    <loc>${u.url}</loc>${lastmod}`,
      langs,
      '  </url>',
    ].join('\n')
  }).join('\n')
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    rows,
    '</urlset>',
  ].join('\n')
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  await ensureLoaded()
  const count = fileCount(getAllCars())
  return Array.from({ length: count }, (_, i) => ({ id: String(i) }))
}

export async function GET(_req: Request, { params }: { params: { id: string } }): Promise<Response> {
  await ensureLoaded()
  const index = Number(params.id)
  if (!Number.isInteger(index) || index < 0) {
    return new Response('Not Found', { status: 404 })
  }
  const flat = expandEntries(allEntries(getAllCars()), base)
  const chunk = flat.slice(index * SITEMAP_CHUNK, (index + 1) * SITEMAP_CHUNK)
  if (chunk.length === 0) {
    return new Response('Not Found', { status: 404 })
  }
  return new Response(urlsetXml(chunk), {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=86400' },
  })
}
