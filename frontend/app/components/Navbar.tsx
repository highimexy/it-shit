'use client'

import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import ThemeSwitch from './ThemeSwitch'

export function Navbar() {
  return (
    <nav className="border-foreground/10 bg-background sticky top-0 z-50 w-full border-b">
      <div className="border-foreground/10 mx-auto max-w-360 border-x">
        <div className="flex h-16 lg:grid lg:grid-cols-3">
          <div className="border-foreground/10 flex flex-1 items-center border-r px-6 lg:px-10">
            <Link href="/" className="font-serif text-[clamp(1.1rem,2.2vw,1.8rem)]">
              The Frontend Journal
            </Link>
          </div>

          <div className="border-foreground/10 flex items-stretch border-r">
            <div className="flex items-center px-5">
              <ThemeSwitch />
            </div>
            <div className="flex flex-1 items-center justify-between px-6">
              <span className="hidden font-sans uppercase lg:block">Search</span>
              <FiSearch className="text-xl" />
            </div>
          </div>

          <div className="hidden items-center justify-around px-8 lg:flex">
            <Link href="/components" className="font-sans uppercase">
              Components
            </Link>
            <Link href="/systems" className="font-sans uppercase">
              Systems
            </Link>
            <Link href="/about" className="font-sans uppercase">
              About
            </Link>
          </div>
        </div>

        <div className="border-foreground/10 flex h-12 items-center justify-around border-t px-6 lg:hidden">
          <Link href="/components" className="font-sans uppercase">
            Components
          </Link>
          <Link href="/systems" className="font-sans uppercase">
            Systems
          </Link>
          <Link href="/about" className="font-sans uppercase">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
