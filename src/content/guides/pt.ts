import type { GuideBundle } from './index'

export const meta: GuideBundle['meta'] = {
  russia: { name: 'Rússia', transit: '10–18 dias por ferrovia' },
  belarus: { name: 'Bielorrússia', transit: '12–18 dias por ferrovia' },
  ukraine: { name: 'Ucrânia', transit: '12–18 dias por ferrovia' },
  kazakhstan: { name: 'Cazaquistão', transit: '10–18 dias por ferrovia' },
  uzbekistan: { name: 'Uzbequistão', transit: '15–25 dias por ferrovia' },
  tajikistan: { name: 'Tadjiquistão', transit: '20–30 dias por ferrovia' },
  azerbaijan: { name: 'Azerbaijão', transit: '15–25 dias por ferrovia' },
  poland: { name: 'Polônia', transit: '20–30 dias por ferrovia' },
  uae: { name: 'Emirados Árabes Unidos', transit: '18–25 dias por mar' },
  iraq: { name: 'Iraque', transit: '20–30 dias por mar' },
  iran: { name: 'Irã', transit: '25–35 dias por mar' },
  'saudi-arabia': { name: 'Arábia Saudita', transit: '18–25 dias por mar' },
  qatar: { name: 'Catar', transit: '18–25 dias por mar' },
  oman: { name: 'Omã', transit: '18–25 dias por mar' },
  yemen: { name: 'Iêmen', transit: '20–30 dias por mar' },
  nigeria: { name: 'Nigéria', transit: '25–35 dias por mar' },
  algeria: { name: 'Argélia', transit: '20–30 dias por mar' },
  ghana: { name: 'Gana', transit: '25–35 dias por mar' },
  'cote-d-ivoire': { name: 'Costa do Marfim', transit: '25–35 dias por mar' },
  bolivia: { name: 'Bolívia', transit: '30–45 dias por mar' },
  venezuela: { name: 'Venezuela', transit: '25–35 dias por mar' },
  colombia: { name: 'Colômbia', transit: '25–35 dias por mar' },
  afghanistan: { name: 'Afeganistão', transit: '30–40 dias (mar + terra)' },
  albania: { name: 'Albânia', transit: '28–35 dias por mar' },
  cameroon: { name: 'Camarões', transit: '33–40 dias por mar' },
  'dr-congo': { name: 'RD Congo', transit: '38–48 dias (mar + terra)' },
  ethiopia: { name: 'Etiópia', transit: '24–32 dias (mar + trem)' },
  jamaica: { name: 'Jamaica', transit: '34–42 dias por mar' },
  senegal: { name: 'Senegal', transit: '32–40 dias por mar' },
  syria: { name: 'Síria', transit: '40–50 dias por mar' },
  gabon: { name: 'Gabão', transit: '34–42 dias por mar' },
  pakistan: { name: 'Paquistão', transit: '32–40 dias por mar' },
  cambodia: { name: 'Camboja', transit: '24–30 dias por mar' }
}

export const guides: GuideBundle['guides'] = {}
