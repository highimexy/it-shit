'use client'

import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import ThemeSwitch from './ThemeSwitch'
import { Container } from '../wrappers/Container'

export function Navbar() {
  return (
    <nav className="border-foreground/10 bg-background sticky top-0 z-50 w-full border-b">
      <Container>
        <div className="flex h-16 lg:grid lg:grid-cols-3">
          <div className="border-foreground/10 flex flex-1 items-center justify-center border-r px-6 lg:px-10">
            <Link href="/" className="font-serif text-[clamp(1.1rem,2.3vw,1.8rem)] font-bold">
              The Frontend Journal
            </Link>
          </div>

          <div className="border-foreground/10 flex lg:border-r">
            <div className="border-foreground/10 flex items-center border-r px-5">
              <ThemeSwitch />
            </div>
            <div className="flex flex-1 items-center justify-between px-6">
              <span className="hidden font-sans uppercase lg:block">Search</span>
              <FiSearch className="text-xl" />
            </div>
          </div>

          <div className="hidden items-center justify-around px-4 lg:flex">
            <Link href="/qa" className="font-sans uppercase">
              QA
            </Link>
            <Link href="/frontend" className="font-sans uppercase">
              FRONTEND
            </Link>
            <Link href="/3d" className="font-sans uppercase">
              3D
            </Link>
            <Link href="/reality-check" className="font-sans uppercase">
              Reality Check
            </Link>
          </div>
        </div>

        <div className="border-foreground/10 flex h-12 items-center justify-around border-t px-6 lg:hidden">
          <Link href="/qa" className="font-sans uppercase">
            QA
          </Link>
          <Link href="/frontend" className="font-sans uppercase">
            FRONTEND
          </Link>
          <Link href="/3d" className="font-sans uppercase">
            3D
          </Link>
          <Link href="/reality-check" className="font-sans uppercase">
            Reality
          </Link>
        </div>
      </Container>
    </nav>
  )
}
