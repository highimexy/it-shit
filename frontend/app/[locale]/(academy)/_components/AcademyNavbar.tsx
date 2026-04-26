'use client'

import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import { StoreDropdown } from './StoreDropdown'

export function AcademyNavbar() {
  // 1. Definiujemy zawartość dla dropdownu
  const storeItems = [
    { label: 'Merch Shop', href: '/academy/store/merch' },
    { label: 'Premium Subscriptions', href: '/academy/store/premium' },
    { label: 'Gift Cards', href: '/academy/store/gifts' },
  ]

  return (
    <nav className="border-foreground/10 bg-background sticky top-0 z-50 w-full border-b">
      <div className="flex h-16 lg:grid lg:grid-cols-3">
        {/* 1. LOGO */}
        <div className="border-foreground/10 flex flex-1 items-center justify-center border-r px-6 lg:flex-none lg:px-10">
          <Link
            href="/academy"
            className="font-serif text-[clamp(1.1rem,2.3vw,1.8rem)] font-bold transition-opacity hover:opacity-80"
          >
            TFJ Academy
          </Link>
        </div>

        {/* 2. LINKI GŁÓWNE (Desktop) */}
        <div className="border-foreground/10 hidden items-center justify-around border-r px-4 lg:flex">
          <Link href="/academy" className="font-sans uppercase transition-opacity hover:opacity-80">
            Lessons
          </Link>
          <Link
            href="/academy/paths"
            className="font-sans uppercase transition-opacity hover:opacity-80"
          >
            Ranking
          </Link>
          <Link
            href="/academy/discuss"
            className="font-sans uppercase transition-opacity hover:opacity-80"
          >
            Discuss
          </Link>

          {/* POPRAWKA: Przekazujemy wymagane propsy! */}
          <StoreDropdown label="Store" items={storeItems} />
        </div>

        {/* 3. WYSZUKIWARKA & AUTH */}
        <div className="flex flex-1 lg:flex-none">
          <div className="border-foreground/10 flex flex-1 items-center justify-between border-r px-4 lg:px-6">
            <input
              type="text"
              placeholder="SEARCH..."
              className="text-foreground placeholder:text-foreground/30 w-full border-none bg-transparent font-sans uppercase outline-none focus:ring-0"
            />
            <FiSearch className="text-xl" />
          </div>

          <div className="hidden items-center justify-center gap-6 px-4 lg:flex lg:px-6">
            <Link href="/login" className="font-sans uppercase transition-opacity hover:opacity-80">
              Sign In
            </Link>
            <Link
              href="/premium"
              className="rounded-sm bg-yellow-500/10 px-3 py-1.5 font-sans font-bold text-yellow-500 uppercase transition-colors hover:bg-yellow-500/20"
            >
              Premium
            </Link>
          </div>
        </div>
      </div>

      {/* LINKI (Mobile - Pasek dolny) */}
      <div className="border-foreground/10 flex h-12 items-center justify-around border-t px-6 lg:hidden">
        <Link href="/academy" className="font-sans text-xs uppercase">
          Lessons
        </Link>
        <Link href="/academy/paths" className="font-sans text-xs uppercase">
          Ranking
        </Link>
        <Link href="/academy/discuss" className="font-sans text-xs uppercase">
          Discuss
        </Link>

        {/* POPRAWKA NA MOBILE: Tu również przekazujemy propsy */}
        <StoreDropdown label="Store" items={storeItems} />
      </div>
    </nav>
  )
}
