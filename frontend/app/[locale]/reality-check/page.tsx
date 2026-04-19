'use client'

import { FiArrowRight } from 'react-icons/fi'
import { BackgroundGrid } from '../../components/BackgroundGrid'
import { SectionDivider } from '../../components/SectionDivider'
import { SubpageHeader } from '../../components/SubpageHeader'
import { Container } from '../../wrappers/Container'
import Link from 'next/link'

export default function RealityCheckPage() {
  const accentColor = 'text-purple-500'

  return (
    <main className="min-h-screen">
      <SubpageHeader
        title="Reality Check"
        subtitle="The unfiltered truth about the IT ecosystem. Decoding the daily grind in startups and the strategic layers of corporations."
        accentColor="text-purple-500"
      />
      <SectionDivider />

      {/* SECTION 01: THE HYPE CYCLE */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                01 / The
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                The <br />
                <span className={`italic opacity-30 ${accentColor}`}>Hype</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                Marketing for bootcamps is not reality. The gold rush is over; the era of competence
                has begun.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="space-y-8">
                <p className="text-fluid-h3 font-serif leading-snug italic opacity-80">
                  "You were told it's about ping-pong tables and free coffee. It's actually about
                  staring at a terminal for 6 hours only to find a missing comma."
                </p>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="border-foreground/10 border-t pt-6">
                    <h4
                      className={`mb-3 font-sans text-[11px] font-bold tracking-widest uppercase ${accentColor}`}
                    >
                      The Dream
                    </h4>
                    <p className="text-sm leading-relaxed opacity-60">
                      Building innovative startups in glass skyscrapers, disrupting industries, and
                      retiring at 30 with a passive income stream.
                    </p>
                  </div>
                  <div className="border-foreground/10 border-t pt-6">
                    <h4
                      className={`mb-3 font-sans text-[11px] font-bold tracking-widest uppercase ${accentColor}`}
                    >
                      The Reality
                    </h4>
                    <p className="text-sm leading-relaxed font-bold opacity-60">
                      Maintaining a legacy PHP system for a local insurance company while attending
                      four meetings a day that could have been an email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 02: THE AI IMPACT */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                02 / The AI
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                The AI <br />
                <span className={`italic opacity-30 ${accentColor}`}>Barrier</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                Machines are getting better at the 'how'. You must get better at the 'why'.
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
                      Entry Level Ghosting
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    The junior market is saturated. AI can now write basic CRUD apps better and
                    faster than a fresh graduate. To survive, you need to understand architecture,
                    not just syntax.
                  </p>
                </article>

                <article className="group">
                  <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
                    <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                      02
                    </span>
                    <h4 className={`font-sans font-bold tracking-widest uppercase ${accentColor}`}>
                      The Prompt Trap
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    Relying on AI to solve every bug will stunt your growth. If you don't know how
                    the code works, you can't fix it when the AI hallucinations start.
                  </p>
                </article>

                <article className="group">
                  <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
                    <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                      03
                    </span>
                    <h4 className="font-sans font-bold tracking-widest uppercase">
                      Critical Vision
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed italic opacity-60">
                    "Build what machines cannot imagine." Human intuition, empathy for the user, and
                    complex decision-making are your only true defenses against replacement.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 03: ECOSYSTEM COMPARISON */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                03 / Market
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                Market <br />
                <span className={`italic opacity-30 ${accentColor}`}>Dynamics</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                Choosing your battleground defines your mental health.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-[11px] tracking-widest uppercase">
                  <thead>
                    <tr className="border-foreground/20 border-b text-[10px] opacity-40">
                      <th className="pb-4 font-bold">Sector</th>
                      <th className="pb-4 font-bold">The Promise</th>
                      <th className="pb-4 font-bold">The Sacrifice</th>
                    </tr>
                  </thead>
                  <tbody className="opacity-80">
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">Big Tech</td>
                      <td className="py-6 font-bold italic">High Salary & Stability</td>
                      <td className="py-6">Feeling like a cog in a massive, slow machine.</td>
                    </tr>
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">Early Startup</td>
                      <td className="py-6 font-bold italic">Fast Growth & Ownership</td>
                      <td className="py-6">Unpaid overtime and extreme burnout risk.</td>
                    </tr>
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">Freelance</td>
                      <td className="py-6 font-bold italic">Total Freedom</td>
                      <td className="py-6">Being a salesman, accountant, and dev all at once.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 04: THE SURVIVAL GUIDE */}
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
                <span className={`italic opacity-30 ${accentColor}`}>Survival</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                Soft skills are the hard skills of the 2020s.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="flex flex-col gap-12">
                <div className="border-l-2 border-purple-500/20 pl-8">
                  <h4 className={`font-sans font-bold tracking-widest uppercase ${accentColor}`}>
                    Communication over Code
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    Being able to explain why a feature will take 3 weeks instead of 3 days to a
                    non-technical manager is more important than knowing how to center a div.
                  </p>
                </div>
                <div className="border-l-2 border-purple-500/20 pl-8 opacity-60">
                  <h4 className="font-sans font-bold tracking-widest uppercase">
                    Lifelong Unlearning
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    The framework you learn today will be obsolete in 24 months. Master the
                    fundamentals, not the tools. Tools change; logic is eternal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* THE ACADEMY / ROADMAP - REALITY CHECK SURVIVAL */}
      <section className="relative overflow-hidden bg-purple-500/2">
        <BackgroundGrid color="rgb(168 85 247 / 0.1)" />
        <Container className="relative z-10">
          <div className="px-3 py-24 text-left md:px-6">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <span className="text-fluid-small font-sans font-bold tracking-[0.4em] text-purple-500 uppercase">
                  The Academy
                </span>
                <h2 className="text-fluid-h2 mt-4 font-serif leading-none tracking-tighter uppercase">
                  Market <br />
                  <span className="text-fluid-h1 text-purple-500 italic opacity-30">Survival</span>
                </h2>
                <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                  Technical skills get you the interview; market intelligence gets you the job. Step
                  into the lab to decode the hidden rules of the IT ecosystem.
                </p>
              </div>
              <div className="hidden border-l border-purple-500/20 pl-6 lg:block">
                <span className="block font-mono text-[10px] uppercase opacity-40">
                  Protocol v4.1
                </span>
                <span className="mt-1 block font-mono text-[10px] font-bold text-purple-500 uppercase">
                  3 Layers Decoded
                </span>
              </div>
            </div>

            {/* ROADMAP STEPS GRID - DIAGONAL LIFT & MOBILE FIX */}
            <div className="bg-foreground/10 border-foreground/10 mt-16 grid gap-px border md:mt-20">
              {/* STEP 01 - CORPORATE LEXICON */}
              <Link
                href="/reality-check/lexicon"
                className="group bg-background border-foreground/20 relative border p-5 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:rounded-md hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)] md:p-10 md:hover:translate-x-2 md:hover:-translate-y-2 md:hover:shadow-[-20px_25px_50px_-15px_rgba(168,85,247,0.2)]"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div className="flex items-start gap-4 md:items-center md:gap-8">
                    <span className="shrink-0 font-serif text-xl opacity-10 transition-all group-hover:text-purple-500 group-hover:opacity-100 md:text-4xl">
                      01
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-sans text-[13px] leading-tight font-bold tracking-widest text-white uppercase transition-colors group-hover:text-purple-500 md:text-base">
                        Corporate Lexicon
                      </h3>
                      <p className="max-w-60 text-[11px] leading-relaxed italic opacity-50 md:max-w-sm md:text-sm">
                        Decoding OKRs and KPIs. Speak the language of business stakeholders.
                      </p>
                    </div>
                  </div>
                  <span className="border-foreground/10 flex w-fit items-center gap-2 self-start border px-3 py-2 text-[8px] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-all group-hover:border-purple-500 group-hover:bg-purple-500 group-hover:text-black md:self-auto md:text-[10px]">
                    Start Training{' '}
                    <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>

              {/* STEP 02 - NEGOTIATION DRILLS */}
              <Link
                href="/reality-check/negotiation"
                className="group bg-background border-foreground/20 relative border p-5 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:rounded-md hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)] md:p-10 md:hover:translate-x-2 md:hover:-translate-y-2 md:hover:shadow-[-20px_25px_50px_-15px_rgba(168,85,247,0.2)]"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div className="flex items-start gap-4 md:items-center md:gap-8">
                    <span className="shrink-0 font-serif text-xl opacity-10 transition-all group-hover:text-purple-500 group-hover:opacity-100 md:text-4xl">
                      02
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-sans text-[13px] leading-tight font-bold tracking-widest text-white uppercase transition-colors group-hover:text-purple-500 md:text-base">
                        The "ASAP" Drills
                      </h3>
                      <p className="max-w-60 text-[11px] leading-relaxed italic opacity-50 md:max-w-sm md:text-sm">
                        Negotiating timelines. How to say "no" while sounding like a "yes".
                      </p>
                    </div>
                  </div>
                  <span className="border-foreground/10 flex w-fit items-center gap-2 self-start border px-3 py-2 text-[8px] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-all group-hover:border-purple-500 group-hover:bg-purple-500 group-hover:text-black md:self-auto md:text-[10px]">
                    Enter Drills{' '}
                    <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>

              {/* STEP 03 - THE AI FILTER */}
              <Link
                href="/reality-check/ai-filter"
                className="group bg-background border-foreground/20 relative border p-5 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:rounded-md hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)] md:p-10 md:hover:translate-x-2 md:hover:-translate-y-2 md:hover:shadow-[-20px_25px_50px_-15px_rgba(168,85,247,0.2)]"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div className="flex items-start gap-4 md:items-center md:gap-8">
                    <span className="shrink-0 font-serif text-xl opacity-10 transition-all group-hover:text-purple-500 group-hover:opacity-100 md:text-4xl">
                      03
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-sans text-[13px] leading-tight font-bold tracking-widest text-white uppercase transition-colors group-hover:text-purple-500 md:text-base">
                        The AI Shield
                      </h3>
                      <p className="max-w-60 text-[11px] leading-relaxed italic opacity-50 md:max-w-sm md:text-sm">
                        Optimizing for ATS filters. Making it through the machine gatekeepers.
                      </p>
                    </div>
                  </div>
                  <span className="border-foreground/10 flex w-fit items-center gap-2 self-start border px-3 py-2 text-[8px] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-all group-hover:border-purple-500 group-hover:bg-purple-500 group-hover:text-black md:self-auto md:text-[10px]">
                    Start Audit
                    <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* FINAL CALL TO ACTION */}
      <section className="text-center">
        <Container>
          <div className="relative flex flex-col items-center px-6 py-24">
            <div className="pointer-events-none absolute top-10 right-10 hidden font-serif text-[clamp(4rem,15vw,12rem)] leading-none tracking-tighter uppercase opacity-[0.03] select-none lg:block">
              Stars
            </div>
            <span className="text-fluid-small font-sans tracking-[0.4em] uppercase opacity-40">
              Manifesto End
            </span>
            <h2 className="mt-6 max-w-2xl font-serif tracking-tighter wrap-break-word uppercase">
              Now that you know the <span className={`italic ${accentColor}`}>Truth</span>, <br />
              will you still{' '}
              <span className="underline decoration-purple-500/30 underline-offset-8 transition-colors hover:decoration-purple-500">
                Code?
              </span>
            </h2>
            <div className="mt-16 flex flex-col gap-6 sm:flex-row">
              <Link
                href="/"
                className="border-foreground/10 text-fluid-small hover:bg-foreground hover:text-background border px-10 py-5 font-sans tracking-[0.3em] uppercase transition-all duration-500"
              >
                Return to Entry
              </Link>
              <Link
                href="/frontend"
                className="text-fluid-small bg-purple-500 px-10 py-5 font-sans tracking-[0.3em] text-white uppercase transition-all duration-500 hover:bg-purple-600"
              >
                Back to the Grind
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
