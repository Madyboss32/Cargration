export const SITE = {
  name: 'Cargration',
  url: 'https://www.cargration.com',
  carImgBase: 'https://pub-7958f84102454e45b228aaa2962ddfe6.r2.dev',
  catalogJsonUrl: 'https://pub-7958f84102454e45b228aaa2962ddfe6.r2.dev/cargration/cars.json',
  liteCatalogJsonUrl: 'https://pub-7958f84102454e45b228aaa2962ddfe6.r2.dev/cargration/cars.lite.json',
  fullCatalogChunkPrefix: 'https://pub-7958f84102454e45b228aaa2962ddfe6.r2.dev/cargration/full/',
  fullCatalogChunkSize: 500,
  whatsappNumber: '8617813301870',
  phoneDisplay: '+86 178 1330 1870',
  email: 'support@cargration.com',
  telegram: 'https://t.me/cargration',
} satisfies {
  name: string
  url: string
  carImgBase: string
  catalogJsonUrl: string
  liteCatalogJsonUrl: string
  fullCatalogChunkPrefix: string
  fullCatalogChunkSize: number
  whatsappNumber: string
  phoneDisplay: string
  email: string
  telegram: string
}

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}`

export function whatsappWithMessage(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}
