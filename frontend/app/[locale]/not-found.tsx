'use client'

import { Container } from '../wrappers/Container'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col justify-center overflow-hidden">
      <Container className="relative py-32 text-center" withBorders={true}>
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[25vw] leading-none tracking-tighter uppercase opacity-[0.03] select-none">
          Void
        </div>

        <div className="relative z-10 flex flex-col items-center px-6">
          <span className="text-fluid-small font-sans font-bold tracking-[0.4em] text-red-500 uppercase">
            Error 404 / Missing Segment
          </span>

          <h1 className="mt-8 font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.8] tracking-tighter uppercase italic">
            Lost in <br />
            <span className="opacity-30">the Grid</span>
          </h1>

          <div className="mx-auto mt-12 max-w-lg">
            <p className="text-fluid-p font-sans leading-relaxed opacity-60">
              The route you are trying to access does not exist in this reality. Either the URL is a
              hallucination, or we haven't engineered this path yet.
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-6 sm:flex-row">
            <Link
              href="/"
              className="border-foreground text-fluid-small bg-foreground text-background px-10 py-5 font-sans font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-80"
            >
              Back to safe grounds
            </Link>
            <Link
              href="/reality-check"
              className="border-foreground/20 text-fluid-small hover:border-foreground border px-10 py-5 font-sans font-bold tracking-[0.3em] uppercase transition-all duration-500"
            >
              Face the truth →
            </Link>
          </div>

          <div className="mt-20 flex items-center gap-4 opacity-20">
            <div className="bg-foreground h-px w-12" />
            <span className="font-mono text-[10px] tracking-widest uppercase">End of Line</span>
            <div className="bg-foreground h-px w-12" />
          </div>
        </div>
      </Container>
    </main>
  )
}
