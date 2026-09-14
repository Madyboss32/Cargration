'use client'
import { useServerInsertedHTML } from 'next/navigation'

interface JsonLdHeadProps {
  html: string
}

export default function JsonLdHead({ html }: JsonLdHeadProps) {
  useServerInsertedHTML(() => (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ))
  return null
}