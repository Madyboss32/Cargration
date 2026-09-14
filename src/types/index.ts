export type CarType = 'suv' | 'sedan' | 'ev' | 'fuel' | 'mpv' | 'pickup' | 'van' | 'truck' | 'hatchback'

export type CarFuel = 'Electric' | 'Hybrid' | 'Plug-in Hybrid' | 'REEV' | 'Petrol' | 'Diesel'

export interface CatalogItem {
  id?: string
  units?: number
  name: string
  brand: string
  trim: string
  type: CarType
  fuel?: CarFuel | ''
  price: number
  loc: string
  specs: string[]
  color: string
  colorName: string
  trending?: boolean
  condition: 'new' | 'used'
  img: string[]
  year?: string
  km?: number
  transmission?: string
  seats?: number
  doors?: number
  rangeKm?: number
  batteryKwh?: number
  powerKw?: number
  drive?: string
  dims?: string
  wheelSize?: string
  displacement?: string
  listedAt?: number
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  cat: string
  img: string[]
  slug: string
  author: string
  content: string
}

export interface CountryGuideStat {
  icon: string
  target: number
  label: string
  suffix?: string
}

export interface FAQItem {
  q: string
  a: string
}

export interface ImportTab {
  label: string
  infoBox: string
  bullets: string[]
  extraText?: string
}

export interface ShippingRoute {
  icon?: string
  title: string
  summary: string
  details: string[]
}

export interface PopularModel {
  rank: number | string
  name: string
  price: string
  desc: string
}

export interface DocSection {
  title: string
  items: string[]
}

export interface WhyCard {
  title: string
  desc: string
}

export interface CountryGuide {
  slug: string
  name: string
  region: string
  flag: string
  transitShort: string
  heroTitle: string
  heroDesc: string
  stats: CountryGuideStat[]
  dutyCalcDescription?: string
  importTabs?: ImportTab[]
  shippingRoutes?: ShippingRoute[]
  popularModels?: PopularModel[]
  docSections?: DocSection[]
  whyCards?: WhyCard[]
  faqItems?: FAQItem[]
}

export interface Testimonial {
  stars: number
  text: string
  author: string
}

export interface ManifestEntry {
  vessel: string
  route: string
  units: number
  status: 'DEPARTED' | 'IN TRANSIT' | 'LOADING' | 'CLEARED'
}

export interface FAQCategory {
  q: string
  a: string
}

export interface PriceRange {
  label: string
  min: number
  max: number
}

export interface SearchFilterValues {
  brand: string
  type: string
  price: string
  port: string
}
