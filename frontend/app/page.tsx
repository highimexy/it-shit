'use client'

import { FiArrowRight } from 'react-icons/fi'
import { HomeHeader } from './components/HomeHeader'
import { SectionDivider } from './components/SectionDivider'
import { Container } from './wrappers/Container'
import Link from 'next/link'
import { SupportersTicker } from './components/SupportersTicker'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-1">
        <HomeHeader />
        <SectionDivider />
        <SupportersTicker />
        <SectionDivider />
        {/* 01. QA SECTION */}
        <section className="border-foreground/10 w-full overflow-hidden border-b">
          <Container className="py-16 md:py-24">
            {/* Flex container zamiast Grid */}
            <div className="flex flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
              {/* DIV 1: Nagłówek - zajmuje tyle miejsca, ile potrzebuje */}
              <div className="min-w-fit flex-1">
                <span className="text-fluid-small font-sans font-bold tracking-[0.3em] text-green-500 uppercase">
                  01. Quality Assurance
                </span>
                <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                  The Skeptic's <br /> <span className="italic opacity-30">Burden</span>
                </h2>
              </div>

              {/* DIV 2: Treść - stała szerokość na desktopie, płynna na mobile */}
              <div className="w-full lg:max-w-md xl:max-w-lg">
                <p className="text-fluid-h3 font-serif leading-snug italic opacity-80">
                  "It's not about finding bugs. It's about being the only person in the room brave
                  enough to ruin everyone's mood."
                </p>
                <p className="mt-6 font-sans text-sm leading-relaxed opacity-60">
                  The reality of QA is 80% detective work on a bug that no one else can reproduce,
                  and 20% fighting for quality.
                </p>
                <Link
                  href="/qa"
                  className="group text-fluid-small mt-8 inline-flex items-center gap-3 border-b border-green-500 pb-1 font-bold tracking-widest uppercase transition-all"
                >
                  <span>Explore QA Roadmap</span>
                  <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
        <SectionDivider />

        {/* 02. FRONTEND SECTION - MIRRORED */}
        <section className="border-foreground/10 w-full overflow-hidden border-b bg-yellow-500/2">
          <Container className="py-16 md:py-24">
            <div className="flex flex-col gap-12 px-6 text-left lg:flex-row-reverse lg:items-start lg:justify-between lg:text-right">
              <div className="min-w-fit flex-1">
                <span className="text-fluid-small font-sans font-bold tracking-[0.3em] text-yellow-500 uppercase">
                  02. Frontend Development
                </span>
                <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word hyphens-auto uppercase">
                  Pixel <br /> <span className="italic opacity-30">Perfectionist</span>
                </h2>
              </div>

              <div className="flex w-full flex-col items-start lg:max-w-md lg:items-end xl:max-w-lg">
                <p className="text-fluid-h3 font-serif leading-snug italic opacity-80">
                  "You are a sapper in the minefield of browsers. A single margin in Safari can blow
                  up your entire Grid."
                </p>
                <p className="mt-6 text-justify font-sans text-sm leading-relaxed opacity-60 lg:text-right">
                  Frontend is an eternal struggle between the designer's vision, API limitations,
                  and the reality of cross-browser compatibility.
                </p>
                <Link
                  href="/frontend"
                  className="group text-fluid-small mt-8 inline-flex items-center gap-3 border-b border-yellow-500 pb-1 font-bold tracking-widest uppercase transition-all"
                >
                  <span>Explore Frontend Path</span>
                  <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* 03. 3D SECTION */}
        <section className="border-foreground/10 w-full overflow-hidden border-b">
          <Container className="py-16 md:py-24">
            <div className="flex flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-fit flex-1">
                <span className="text-fluid-small font-sans font-bold tracking-[0.3em] text-red-500 uppercase">
                  03. 3D & WebGL
                </span>
                <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                  Mathematical <br /> <span className="italic opacity-30">Madness</span>
                </h2>
              </div>

              <div className="w-full lg:max-w-md xl:max-w-lg">
                <p className="text-fluid-h3 font-serif leading-snug italic opacity-80">
                  "In 3D, debugging is pure geometry. If you mess up a vector, your object simply
                  ceases to exist in our reality."
                </p>
                <p className="mt-6 font-sans text-sm leading-relaxed opacity-60">
                  Matrices, quaternions, and shaders are the only things standing between a blank
                  screen and a photorealistic world.
                </p>
                <Link
                  href="/3d"
                  className="group text-fluid-small mt-8 inline-flex items-center gap-3 border-b border-red-500 pb-1 font-bold tracking-[0.2em] uppercase transition-all"
                >
                  <span>Explore 3D Dimension</span>
                  <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <SectionDivider />

        {/* 04. REALITY CHECK */}
        <section className="border-foreground/10 relative w-full overflow-hidden border-b bg-purple-500/3">
          <Container className="relative py-16 md:py-24">
            <div className="pointer-events-none absolute top-10 right-10 hidden font-serif text-[clamp(4rem,15vw,12rem)] leading-none tracking-tighter uppercase opacity-[0.03] select-none lg:block">
              Market
            </div>

            <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
              <span className="text-fluid-small font-sans font-bold tracking-[0.4em] text-purple-500 uppercase">
                Final Chapter: Reality Check
              </span>

              <h2 className="mt-6 font-serif leading-[0.85] tracking-tighter uppercase">
                The <span className="italic opacity-30">Truth</span> <br />
                Behind the <span className="text-purple-500 italic">Hype</span>
              </h2>

              <div className="border-foreground/10 mt-16 grid gap-10 border-t pt-12 text-left md:grid-cols-2 lg:gap-16">
                <div className="space-y-4">
                  <h4 className="text-fluid-small font-sans font-bold tracking-widest text-purple-500 uppercase opacity-60">
                    The Dream
                  </h4>
                  <p className="text-fluid-h3 font-serif italic opacity-70">
                    "You will build innovative products and change the world in a modern office."
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-fluid-small font-sans font-bold tracking-widest text-purple-500 uppercase opacity-60">
                    The Reality
                  </h4>
                  <p className="text-fluid-h3 font-serif italic opacity-90">
                    "You will debug code written 5 years ago and explain why the estimate was
                    wrong."
                  </p>
                </div>
              </div>

              <div className="mt-16">
                <Link
                  href="/reality-check"
                  className="text-fluid-small inline-block border border-purple-500/30 px-10 py-5 tracking-[0.3em] uppercase transition-all duration-500 hover:bg-purple-500 hover:text-white"
                >
                  Read the full manifesto
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
