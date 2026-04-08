'use client'

import { Container } from '../wrappers/Container'

export function Header() {
  return (
    <header className="border-foreground/10 w-full border-b">
      <Container>
        <div className="flex flex-col px-6 py-24 text-center">
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] tracking-tighter">
            From zero <span className="italic opacity-80">unironically,</span> <br />
            To frontend <span className="text-blue-500 italic">hero.</span>
          </h1>

          <p className="mt-8 font-sans uppercase">
            A practical field guide to modern interface engineering
          </p>
        </div>
      </Container>
    </header>
  )
}
