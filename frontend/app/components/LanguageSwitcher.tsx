'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function LanguageSwitcher() {
  const pathname = usePathname()

  const getLocalizedHref = (newLocale: string) => {
    if (!pathname) return `/${newLocale}`

    const segments = pathname.split('/')
    segments[1] = newLocale

    return segments.join('/')
  }

  return (
    <div className="text-foreground/60 flex items-center gap-2 font-sans font-bold tracking-[0.2em] transition-opacity hover:opacity-100">
      <span className="opacity-50">[</span>
      <Link href={getLocalizedHref('en')} className="hover:text-foreground transition-colors">
        EN
      </Link>
      <span className="opacity-30">/</span>
      <Link href={getLocalizedHref('pl')} className="hover:text-foreground transition-colors">
        PL
      </Link>
      <span className="opacity-50">]</span>
    </div>
  )
}
