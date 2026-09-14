import type { Testimonial } from '../types'
import { testimonialsI18n } from '../content/testimonials'

const BASE: Testimonial[] = [
  { stars: 5, text: 'The inspection report matched the car exactly when it arrived in Vladivostok. No surprises, no renegotiation.', author: 'Dmitri K. — Vladivostok, Russia' },
  { stars: 5, text: 'Documentation was ready before the ship even left port. Cleared customs in Abidjan in two days.', author: 'Aya T. — Abidjan, Côte d\'Ivoire' },
  { stars: 5, text: 'Bought 14 units for my lot this year. Every single FOB quote held through final invoice.', author: 'Marcos V. — Santos, Brazil' },
  { stars: 5, text: 'Our first order of 8 Chery SUVs arrived in Tashkent in 18 days by rail. The tracking portal made it easy to plan our launch.', author: 'Rustam B. — Tashkent, Uzbekistan' },
  { stars: 4, text: 'The team helped me find a BYD Dolphin that wasn\'t even listed yet. They sent video from the Shanghai lot before it was prepped.', author: 'Grace O. — Lagos, Nigeria' },
  { stars: 5, text: 'Customs clearance in Karachi was smooth thanks to the COO and bill of lading arriving by DHL ahead of the vessel.', author: 'Ahmed R. — Karachi, Pakistan' },
  { stars: 5, text: 'We\'ve imported over 30 units through Cargration. The consistency in vehicle quality and document accuracy keeps us coming back.', author: 'Carlos M. — Santiago, Chile' },
  { stars: 4, text: 'The inspection report caught a scratch the photos didn\'t show. They discounted it without argument. Honest operation.', author: 'Youssef E. — Casablanca, Morocco' },
  { stars: 5, text: 'From first message to vessel departure was 9 days. For a first-time importer from Georgia, that blew my mind.', author: 'Giorgi K. — Tbilisi, Georgia' },
  { stars: 5, text: 'The WhatsApp support answered at 2 AM Beijing time. That alone sealed the deal compared to other exporters.', author: 'Samuel A. — Accra, Ghana' },
  { stars: 5, text: 'We ordered 5 Zeekr units for our showroom in Amman. The door-to-door tracking meant our customers could follow the shipment.', author: 'Hani J. — Amman, Jordan' },
  { stars: 4, text: 'Mixed fleet of EVs and petrol SUVs all consolidated into one container. Cargration handled the loading split perfectly.', author: 'Victor S. — Lima, Peru' },
  { stars: 5, text: 'My first Chinese car import and they held my hand through the whole process. The car arrived cleaner than I expected.', author: 'Oleksandr D. — Kyiv, Ukraine' },
  { stars: 5, text: 'Price was $400 higher than a competitor until I factored in the competitor\'s inspection fee and document charge. Cargration\'s FOB was actually cheaper.', author: 'Mohan P. — Almaty, Kazakhstan' }
]

export function getTestimonials(lang = 'en'): Testimonial[] {
  const ov = testimonialsI18n[lang]
  if (!ov) return BASE
  return BASE.map((t, i) => (ov[i] ? { ...t, text: ov[i] } : t))
}

export const testimonials: Testimonial[] = getTestimonials('en')
