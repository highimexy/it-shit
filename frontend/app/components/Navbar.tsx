'use client'

import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch' // upewnij się, że ścieżka jest poprawna

export function Navbar() {
  return (
    <nav className="bg-background/95 sticky top-0 z-50 w-full border-b border-gray-200 backdrop-blur-md dark:border-gray-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Lewa strona: Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80">
            UI<span className="text-base font-light text-blue-500">.gallery</span>
          </Link>

          {/* Linki nawigacyjne (ukryte na małych ekranach) */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/components"
              className="text-foreground/70 hover:text-foreground text-sm font-medium transition-colors"
            >
              Components
            </Link>
            <Link
              href="/design-systems"
              className="text-foreground/70 hover:text-foreground text-sm font-medium transition-colors"
            >
              Design Systems
            </Link>
          </div>
        </div>

        {/* Prawa strona: Switcher i ew. przyciski */}
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <button className="bg-foreground text-background hidden rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 sm:block">
            Submit
          </button>
        </div>
      </div>
    </nav>
  )
}
