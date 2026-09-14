'use client'
import { useEffect } from 'react'
import type { CatalogItem } from '../types'
import { track } from '../lib/track'

export default function TrackViewItem({ car }: { car: CatalogItem }) {
  useEffect(() => {
    track('view_item', {
      currency: 'USD',
      value: car.price,
      items: [
        {
          item_id: car.id,
          item_name: `${car.name} ${car.trim}`.trim(),
          item_brand: car.brand,
          item_category: car.type,
          price: car.price,
        },
      ],
    })
  }, [car])

  return null
}