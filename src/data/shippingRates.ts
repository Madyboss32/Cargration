export const RATES: Record<string, { sea: Record<string, number>, rail: Record<string, number> }> = {
  'Tianjin':   { sea: { Vladivostok: 850, Novorossiysk: 1400, StPetersburg: 1550, Moscow: 1150, Yekaterinburg: 1050, Novosibirsk: 1100, JebelAli: 1200, Abidjan: 1350, Santos: 1600, Algiers: 1300 }, rail: { Moscow: 950, Yekaterinburg: 850, Novosibirsk: 900 } },
  'Qingdao':   { sea: { Vladivostok: 880, Novorossiysk: 1350, StPetersburg: 1500, Moscow: 1200, Yekaterinburg: 1080, Novosibirsk: 1130, JebelAli: 1160, Abidjan: 1300, Santos: 1550, Algiers: 1260 }, rail: { Moscow: 980, Yekaterinburg: 880, Novosibirsk: 920 } },
  'Dalian':    { sea: { Vladivostok: 750, Novorossiysk: 1450, StPetersburg: 1600, Moscow: 1200, Yekaterinburg: 1050, Novosibirsk: 1100, JebelAli: 1250, Abidjan: 1400, Santos: 1650, Algiers: 1350 }, rail: { Moscow: 900, Yekaterinburg: 800, Novosibirsk: 850 } },
  'Shanghai':  { sea: { Vladivostok: 950, Novorossiysk: 1300, StPetersburg: 1450, Moscow: 1250, Yekaterinburg: 1150, Novosibirsk: 1200, JebelAli: 1100, Abidjan: 1250, Santos: 1500, Algiers: 1200 }, rail: { Moscow: 1050, Yekaterinburg: 950, Novosibirsk: 1000 } },
  'Ningbo':    { sea: { Vladivostok: 920, Novorossiysk: 1280, StPetersburg: 1420, Moscow: 1220, Yekaterinburg: 1120, Novosibirsk: 1170, JebelAli: 1080, Abidjan: 1220, Santos: 1480, Algiers: 1180 }, rail: { Moscow: 1020, Yekaterinburg: 920, Novosibirsk: 970 } },
  'Guangzhou': { sea: { Vladivostok: 1100, Novorossiysk: 1250, StPetersburg: 1400, Moscow: 1350, Yekaterinburg: 1250, Novosibirsk: 1300, JebelAli: 1000, Abidjan: 1150, Santos: 1550, Algiers: 1100 }, rail: { Moscow: 1150, Yekaterinburg: 1050, Novosibirsk: 1100 } },
  'Shenzhen':  { sea: { Vladivostok: 1050, Novorossiysk: 1200, StPetersburg: 1350, Moscow: 1300, Yekaterinburg: 1200, Novosibirsk: 1250, JebelAli: 1050, Abidjan: 1200, Santos: 1520, Algiers: 1150 }, rail: { Moscow: 1100, Yekaterinburg: 1000, Novosibirsk: 1050 } },
  'Xiamen':    { sea: { Vladivostok: 1080, Novorossiysk: 1230, StPetersburg: 1380, Moscow: 1320, Yekaterinburg: 1220, Novosibirsk: 1270, JebelAli: 1020, Abidjan: 1170, Santos: 1530, Algiers: 1120 }, rail: { Moscow: 1120, Yekaterinburg: 1020, Novosibirsk: 1070 } },
}

export const TYPE_MULTIPLIER: Record<string, number> = { sedan: 1, suv: 1.12, ev: 1.25, truck: 1.3 }
export const TYPE_LABELS_SHORT: Record<string, string> = { sedan: 'Sedan/Hatchback', suv: 'SUV/Crossover', ev: 'Electric/Hybrid', truck: 'Pickup/Truck' }
export const DEST_LABELS: Record<string, string> = {
  Vladivostok: 'Vladivostok', Novorossiysk: 'Novorossiysk', StPetersburg: 'St. Petersburg',
  Moscow: 'Moscow', Yekaterinburg: 'Yekaterinburg', Novosibirsk: 'Novosibirsk',
  JebelAli: 'Jebel Ali, UAE', Abidjan: 'Abidjan, Côte d\'Ivoire',
  Santos: 'Santos, Brazil', Algiers: 'Algiers, Algeria'
}
export const TRANSIT: Record<string, Record<string, string>> = {
  sea: {
    Vladivostok: '7–12 days', Novorossiysk: '30–38 days', StPetersburg: '32–40 days',
    Moscow: '25–32 days', Yekaterinburg: '22–28 days', Novosibirsk: '20–26 days',
    JebelAli: '18–24 days', Abidjan: '25–35 days', Santos: '30–45 days', Algiers: '22–30 days'
  },
  rail: { Moscow: '14–20 days', Yekaterinburg: '12–18 days', Novosibirsk: '12–16 days' }
}
