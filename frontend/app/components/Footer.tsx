'use client'

import { Container } from '../wrappers/Container'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-foreground/10 w-full border-t">
      <Container className="pt-24">
        <div className="flex flex-col gap-12 px-6 lg:flex-row lg:justify-between">
          <div className="flex-1">
            <Link
              href="/"
              className="text-fluid-h1 font-serif leading-[0.8] tracking-tighter uppercase transition-opacity hover:opacity-80"
            >
              The Frontend <br /> Journal
            </Link>
          </div>

          <div className="max-w-xs space-y-6 lg:mb-4 lg:text-right">
            <p className="font-sans leading-relaxed tracking-widest uppercase opacity-50">
              A project by{' '}
              <span className="text-foreground font-bold opacity-100">Wiktor EXY. Kowalczyk</span>.
              Built with <span className="italic">Next.js</span> and{' '}
              <span className="italic">Tailwind CSS</span>. Typography set in{' '}
              <span className="italic">Instrument Serif</span> and{' '}
              <span className="italic">Geist Mono</span>.
            </p>

            <div className="flex flex-col gap-4 lg:flex-row lg:justify-end lg:gap-x-6">
              <Link
                href="/about"
                className="border-foreground/20 hover:border-foreground border-b font-sans font-bold tracking-[0.2em] uppercase transition-colors"
              >
                About
              </Link>
              <Link
                href="/contribute"
                className="border-foreground/20 hover:border-foreground border-b font-sans font-bold tracking-[0.2em] uppercase transition-colors"
              >
                Contribute
              </Link>
              <Link
                href="/changelog"
                className="border-foreground/20 hover:border-foreground border-b font-sans font-bold tracking-[0.2em] uppercase transition-colors"
              >
                Changelog
              </Link>
            </div>
          </div>
        </div>

        <div className="border-foreground/10 mt-20 flex flex-col items-center justify-between border-t px-6 pt-8 pb-8 opacity-30 md:flex-row">
          <p className="font-sans tracking-[0.3em] uppercase">
            © {currentYear} The Frontend Journal
          </p>
          <span className="mt-4 font-sans tracking-[0.3em] uppercase italic md:mt-0">
            Made in Poland
          </span>
        </div>
      </Container>
    </footer>
  )
}
