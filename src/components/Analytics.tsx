'use client'
import { useState, useEffect } from 'react'
import Script from 'next/script'
import { getConsentState } from './CookieConsent'

export default function Analytics() {
  const [marketing, setMarketing] = useState<boolean>(() => getConsentState().marketing)

  useEffect(() => {
    const update = () => setMarketing(getConsentState().marketing)
    update()
    window.addEventListener('cookie-consent-changed', update)
    return () => window.removeEventListener('cookie-consent-changed', update)
  }, [])

  const metaPixel = process.env.NEXT_PUBLIC_META_PIXEL
  const yandexId = process.env.NEXT_PUBLIC_YANDEX_ID

  return (
    <>
      {metaPixel && marketing && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments);n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixel}');fbq('track','PageView');`}
        </Script>
      )}
      {yandexId && marketing && (
        <Script id="yandex-metrica" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');ym(${yandexId},'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true});`}
        </Script>
      )}
    </>
  )
}