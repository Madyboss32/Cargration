import { SITE } from '@/src/config/site'
import { ensureLoaded, getAllCars } from '@/src/data/cars.server'
import { fileCount } from '@/src/lib/sitemapPlan'

export const revalidate = 86400

export async function GET(): Promise<Response> {
  await ensureLoaded()
  const base = SITE.url.replace(/\/$/, '')
  const urls = Array.from({ length: fileCount(getAllCars()) }, (_, i) => `${base}/sitemap/${i}`)
    .map((u) => `  <sitemap><loc>${u}</loc></sitemap>`)
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</sitemapindex>`
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=86400' },
  })
}
