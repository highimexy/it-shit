'use client'

import { BackgroundGrid } from '../../components/BackgroundGrid'
import { SectionDivider } from '../../components/SectionDivider'
import { SubpageHeader } from '../../components/SubpageHeader'
import { Container } from '../../wrappers/Container'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function QaPage() {
  const accentColor = 'text-green-500'

  return (
    <main className="min-h-screen">
      <SubpageHeader
        title="QA Fundamentals"
        subtitle="Mastering the art of breaking things to make them unbreakable. Logic, edge cases, and quality mindset."
        accentColor="text-green-500"
      />
      <SectionDivider />

      {/* SECTION 01: THE MINDSET */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                01 / The Skeptic
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                The Skeptic <br />
                <span className={`italic opacity-30 ${accentColor}`}>Mindset</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                Testing is not a phase; it's a pathological distrust of 'it works on my machine'.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="space-y-8">
                <p className="text-fluid-h3 font-serif leading-snug italic opacity-80">
                  "A QA engineer doesn't walk into a bar to order a beer. They order 1 beer, 0
                  beers, 999999999 beers, a lizard, and -1 beers."
                </p>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="border-foreground/10 border-t pt-6">
                    <h4 className="mb-3 font-sans text-[11px] font-bold tracking-widest uppercase">
                      Edge Cases
                    </h4>
                    <p className="text-sm leading-relaxed opacity-60">
                      Hunting for the 1% scenario that crashes the system. We don't care about the
                      happy path; we care about what happens when the user loses Wi-Fi while
                      submitting a credit card form.
                    </p>
                  </div>
                  <div className="border-foreground/10 border-t pt-6">
                    <h4 className="mb-3 font-sans text-[11px] font-bold tracking-widest uppercase">
                      Critical Thinking
                    </h4>
                    <p className="text-sm leading-relaxed opacity-60">
                      Analyzing requirements to find contradictions before a single line of code is
                      written. QA starts at the documentation level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 02: UI ANATOMY */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                02 / UI
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                UI <br />
                <span className={`italic opacity-30 ${accentColor}`}>Anatomy</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                Learning to see the invisible structure of the modern web.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="grid gap-12">
                <article className="group">
                  <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
                    <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                      01
                    </span>
                    <h4 className="font-sans font-bold tracking-widest uppercase">
                      The Box Model & Spacing
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    Padding vs. Margin. We check if the visual rhythm is consistent. 16px is not
                    15px. Inconsistent spacing is the first sign of a low-quality build.
                  </p>
                </article>

                <article className="group">
                  <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
                    <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                      02
                    </span>
                    <h4 className="font-sans font-bold tracking-widest uppercase">
                      Component States
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    Hover, Focus, Active, Disabled, Loading. A button is not just a rectangle; it's
                    a multi-state machine that must remain accessible to screen readers.
                  </p>
                </article>

                <article className="group">
                  <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
                    <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                      03
                    </span>
                    <h4 className="font-sans font-bold tracking-widest uppercase">
                      Typography & Hierarchy
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    Font-weights, line-heights, and contrast ratios. We verify if the text is
                    legible across all devices and follows WCAG accessibility standards.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 03: THE TOOLKIT */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                03 / Technical
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                Technical <br />
                <span className={`italic opacity-30 ${accentColor}`}>Toolkit</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                The instruments we use to dissect, document, and debug reality.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-[11px] tracking-widest uppercase">
                  <thead>
                    <tr className="border-foreground/20 border-b text-[10px] opacity-40">
                      <th className="pb-4 font-bold">Domain</th>
                      <th className="pb-4 font-bold">Standard Tool</th>
                      <th className="pb-4 font-bold">Core Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="opacity-80">
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">Documentation</td>
                      <td className="py-6 font-bold italic">Figma</td>
                      <td className="py-6">Inspecting pixel values and design specs.</td>
                    </tr>
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">Tracking</td>
                      <td className="py-6 font-bold italic">Jira</td>
                      <td className="py-6">Managing the bug lifecycle and sprint progress.</td>
                    </tr>
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">Debug</td>
                      <td className="py-6 font-bold italic">DevTools</td>
                      <td className="py-6">Monitoring console errors and network latency.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 04: ECOSYSTEM */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                04 / Human
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                Human <br />
                <span className={`italic opacity-30 ${accentColor}`}>Factor</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                Software is built by people. Quality is maintained through communication.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="flex flex-col gap-12">
                <div className="border-l-2 border-green-500/20 pl-8">
                  <h4 className="font-sans font-bold tracking-widest text-green-500 uppercase">
                    Working with Designers
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    You are the guardian of their vision. When a developer says "it's too hard to
                    implement," you find the middle ground that preserves the user experience.
                  </p>
                </div>
                <div className="border-l-2 border-green-500/20 pl-8 opacity-60">
                  <h4 className="font-sans font-bold tracking-widest uppercase">
                    Working with Developers
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    Don't just report bugs—report solutions. Provide logs, reproduction steps, and
                    screen recordings to make their fixing process as painless as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* THE ACADEMY / ROADMAP */}
      <section className="relative overflow-hidden bg-green-500/2">
        <BackgroundGrid color="rgb(34 197 94 / 0.1)" />
        <Container className="relative z-10">
          <div className="px-3 py-24 md:px-6">
            <div className="flex flex-col gap-8 text-left lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <span className="text-fluid-small font-sans font-bold tracking-[0.4em] text-green-500 uppercase">
                  The Academy
                </span>
                <h2 className="text-fluid-h2 mt-4 font-serif leading-none tracking-tighter uppercase">
                  Learning <br />
                  <span className="text-fluid-h1 text-green-500 italic opacity-30">Pathology</span>
                </h2>
                <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                  Theoretical knowledge is a liability without practice. Master the QA craft in the
                  Post-Junior era.
                </p>
              </div>
              <div className="hidden border-l border-green-500/20 pl-6 lg:block">
                <span className="block font-mono text-[10px] uppercase opacity-40">
                  Curriculum v1.0
                </span>
                <span className="mt-1 block font-mono text-[10px] font-bold text-green-500 uppercase">
                  3 Modules Available
                </span>
              </div>
            </div>

            {/* ROADMAP STEPS GRID */}
            <div className="bg-foreground/10 border-foreground/10 mt-16 grid gap-px border text-left md:mt-20">
              {/* STEP 01 - THE LEXICON */}
              <Link
                href="/qa/dictionary"
                className="group bg-background border-foreground/20 relative border p-5 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:rounded-md hover:shadow-[0_10px_30px_-10px_rgba(34,197,94,0.15)] md:p-10 md:hover:translate-x-2 md:hover:-translate-y-2 md:hover:shadow-[-20px_25px_50px_-15px_rgba(34,197,94,0.2)]"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div className="flex items-start gap-4 md:gap-8">
                    <span className="shrink-0 font-serif text-xl opacity-10 transition-all group-hover:text-green-500 group-hover:opacity-100 md:text-4xl">
                      01
                    </span>

                    <div className="flex flex-col gap-1">
                      <h3 className="font-sans text-[13px] leading-tight font-bold tracking-widest text-white uppercase transition-colors group-hover:text-green-500 md:text-base">
                        The Lexicon
                      </h3>
                      <p className="max-w-60 text-[11px] leading-relaxed italic opacity-50 md:max-w-sm md:text-sm">
                        Terminology and visual evidence of UI components.
                      </p>
                    </div>
                  </div>
                  <span className="border-foreground/10 flex w-fit items-center gap-2 self-start border px-3 py-2 text-[8px] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-all group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-black md:self-auto md:text-[10px]">
                    Start Training <FiArrowRight className="text-sm" />
                  </span>
                </div>
              </Link>

              {/* STEP 02 - EVIDENCE ROOM */}
              <Link
                href="/qa/evidence-room"
                className="group bg-background border-foreground/20 relative border p-5 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:rounded-md hover:shadow-[0_10px_30px_-10px_rgba(34,197,94,0.15)] md:p-10 md:hover:translate-x-2 md:hover:-translate-y-2 md:hover:shadow-[-20px_25px_50px_-15px_rgba(34,197,94,0.2)]"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div className="flex items-start gap-4 md:gap-8">
                    <span className="shrink-0 font-serif text-xl opacity-10 transition-all group-hover:text-green-500 group-hover:opacity-100 md:text-4xl">
                      02
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-sans text-[13px] leading-tight font-bold tracking-widest text-white uppercase transition-colors group-hover:text-green-500 md:text-base">
                        Evidence Room
                      </h3>
                      <p className="max-w-60 text-[11px] leading-relaxed italic opacity-50 md:max-w-sm md:text-sm">
                        Visual bug hunting in simulated environments.
                      </p>
                    </div>
                  </div>
                  <span className="border-foreground/10 flex w-fit items-center gap-2 self-start border px-3 py-2 text-[8px] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-all group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-black md:self-auto md:text-[10px]">
                    Start Training <FiArrowRight className="text-sm" />
                  </span>
                </div>
              </Link>

              {/* STEP 03 - BUG REPORTING */}
              <Link
                href="/qa/bug-report"
                className="group bg-background border-foreground/20 relative border p-5 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:rounded-md hover:shadow-[0_10px_30px_-10px_rgba(34,197,94,0.15)] md:p-10 md:hover:translate-x-2 md:hover:-translate-y-2 md:hover:shadow-[-20px_25px_50px_-15px_rgba(34,197,94,0.2)]"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div className="flex items-start gap-4 md:gap-8">
                    <span className="shrink-0 font-serif text-xl opacity-10 transition-all group-hover:text-green-500 group-hover:opacity-100 md:text-4xl">
                      03
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-sans text-[13px] leading-tight font-bold tracking-widest text-white uppercase transition-colors group-hover:text-green-500 md:text-base">
                        Construction
                      </h3>
                      <p className="max-w-60 text-[11px] leading-relaxed italic opacity-50 md:max-w-sm md:text-sm">
                        Master technical documentation for developers.
                      </p>
                    </div>
                  </div>
                  <span className="border-foreground/10 align-center flex items-center gap-2 self-start border px-3 py-2 text-[8px] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-all group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-black md:self-auto md:text-[10px]">
                    Draft Ticket <FiArrowRight className="text-sm" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* FINAL ROADMAP LINK */}
      <section className="text-center">
        <Container>
          <div className="relative flex flex-col items-center px-6 py-24">
            <div className="pointer-events-none absolute top-10 right-10 hidden font-serif text-[clamp(4rem,15vw,12rem)] leading-none tracking-tighter uppercase opacity-[0.03] select-none lg:block">
              Shoot
            </div>
            <span className="text-fluid-small font-sans tracking-[0.4em] uppercase opacity-40">
              Next Level
            </span>
            <h2 className="mt-6 font-serif tracking-tighter uppercase">
              Ready to <span className="text-green-500 italic">Automate</span>?
            </h2>
            <Link
              href="/frontend"
              className="text-fluid-small mt-12 border border-green-500/30 px-10 py-5 font-sans tracking-[0.3em] uppercase transition-all duration-500 hover:bg-green-500 hover:text-white"
            >
              Transition to Frontend
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
