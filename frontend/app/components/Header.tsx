'use client'

import { Container } from '../wrappers/Container'

export function Header() {
  return (
    <header className="border-foreground/10 w-full border-b">
      <Container>
        <div className="flex flex-col px-6 py-28 text-center">
          <h1 className="font-serif">
            Master the <span className="text-green-500 italic opacity-90">Basics</span> <br />
            Architect the <span className="text-yellow-400 italic opacity-90">Frontend</span> <br />
            Render the <span className="text-red-500 italic opacity-90">Future</span>
          </h1>

          <div className="mx-auto mt-12 max-w-2xl">
            <p className="px-4 font-sans text-[11px] leading-relaxed tracking-[0.4em] uppercase opacity-70">
              Simplifying the path from <span className="font-bold">QA Fundamentals</span> through
              <span className="font-bold"> Modern Web Development</span> to advanced
              <span className="font-bold"> Three.js Experiences</span>.
            </p>

            <div className="mt-8 flex items-center justify-center gap-6 opacity-20">
              <span className="font-sans uppercase">Logic</span>
              <div className="bg-foreground h-px w-8" />
              <span className="font-sans uppercase">Structure</span>
              <div className="bg-foreground h-px w-8" />
              <span className="font-sans uppercase">Dimension</span>
            </div>
          </div>

          <p className="mt-12 font-serif text-lg italic opacity-40">A log for the curious.</p>
        </div>
      </Container>
    </header>
  )
}
