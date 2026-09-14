export function gtagInline(gaId: string): string {
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:(function(){try{var c=JSON.parse(localStorage.getItem('cg_cookie_consent')||'null');return c&&c.marketing?'granted':'denied'}catch(e){return 'denied'}})(),ad_user_data:(function(){try{var c=JSON.parse(localStorage.getItem('cg_cookie_consent')||'null');return c&&c.marketing?'granted':'denied'}catch(e){return 'denied'}})(),ad_personalization:(function(){try{var c=JSON.parse(localStorage.getItem('cg_cookie_consent')||'null');return c&&c.marketing?'granted':'denied'}catch(e){return 'denied'}})(),analytics_storage:(function(){try{var c=JSON.parse(localStorage.getItem('cg_cookie_consent')||'null');return c&&c.analytics?'granted':'denied'}catch(e){return 'denied'}})(),functionality_storage:'granted'});gtag('js',new Date());gtag('config','${gaId}',{send_page_view:true});window.addEventListener('cookie-consent-changed',function(){try{var c=JSON.parse(localStorage.getItem('cg_cookie_consent')||'null');var a=c&&c.analytics?'granted':'denied';var m=c&&c.marketing?'granted':'denied';gtag('consent','update',{analytics_storage:a,ad_storage:m,ad_user_data:m,ad_personalization:m})}catch(e){}});`
}

export function track(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return
  const w = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag === 'function') w.gtag('event', name, params)
}