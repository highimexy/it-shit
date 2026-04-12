'use client'

import { SectionDivider } from '../components/SectionDivider'
import { SubpageHeader } from '../components/SubpageHeader'
import { Container } from '../wrappers/Container'
import Link from 'next/link'

// Lokalny komponent pomocniczy dla spójności sekcji
function SectionLayout({
  number,
  title,
  accentTitle,
  subtitle,
  children,
  accentColor = 'text-purple-500',
}: {
  number: string
  title: string
  accentTitle: string
  subtitle: string
  children: React.ReactNode
  accentColor?: string
}) {
  return (
    <section className="border-foreground/10 overflow-hidden border-b py-20 text-justify lg:text-left">
      <Container>
        <div className="flex flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:w-1/3">
            <span
              className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
            >
              {number} / {title}
            </span>
            <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter break-words uppercase">
              {title} <br />
              <span className={`italic opacity-30 ${accentColor}`}>{accentTitle}</span>
            </h2>
            <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
              {subtitle}
            </p>
          </div>
          <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">{children}</div>
        </div>
      </Container>
    </section>
  )
}

export default function RealityCheckPage() {
  return (
    <main className="min-h-screen">
      <SubpageHeader
        title="Reality Check"
        subtitle="The unfiltered truth about the IT ecosystem. Decoding the daily grind in startups and the strategic layers of corporations."
        accentColor="text-purple-500"
      />
      <SectionDivider />

      {/* SECTION 01: THE HYPE CYCLE */}
      <SectionLayout
        number="01"
        title="The"
        accentTitle="Hype"
        subtitle="Marketing for bootcamps is not reality. The gold rush is over; the era of competence has begun."
      >
        <div className="space-y-8">
          <p className="text-fluid-h3 font-serif leading-snug italic opacity-80">
            "You were told it's about ping-pong tables and free coffee. It's actually about staring
            at a terminal for 6 hours only to find a missing comma."
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border-foreground/10 border-t pt-6">
              <h4 className="mb-3 font-sans text-[11px] font-bold tracking-widest text-purple-500 uppercase">
                The Dream
              </h4>
              <p className="text-sm leading-relaxed opacity-60">
                Building innovative startups in glass skyscrapers, disrupting industries, and
                retiring at 30 with a passive income stream.
              </p>
            </div>
            <div className="border-foreground/10 border-t pt-6">
              <h4 className="mb-3 font-sans text-[11px] font-bold tracking-widest text-purple-500 uppercase">
                The Reality
              </h4>
              <p className="text-sm leading-relaxed font-bold opacity-60">
                Maintaining a legacy PHP system for a local insurance company while attending four
                meetings a day that could have been an email.
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* SECTION 02: THE AI IMPACT */}
      <SectionLayout
        number="02"
        title="The AI"
        accentTitle="Barrier"
        subtitle="Machines are getting better at the 'how'. You must get better at the 'why'."
      >
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
              The junior market is saturated. AI can now write basic CRUD apps better and faster niż
              a fresh graduate. To survive, you need to understand architecture, not just syntax.
            </p>
          </article>

          <article className="group">
            <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
              <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                02
              </span>
              <h4 className="font-sans font-bold tracking-widest text-purple-500 uppercase">
                The Prompt Trap
              </h4>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Relying on AI to solve every bug will stunt your growth. If you don't know how the
              code works, you can't fix it when the AI hallucinations start.
            </p>
          </article>

          <article className="group">
            <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
              <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                03
              </span>
              <h4 className="font-sans font-bold tracking-widest uppercase">Critical Vision</h4>
            </div>
            <p className="mt-4 text-sm leading-relaxed italic opacity-60">
              "Build what machines cannot imagine." Human intuition, empathy for the user, and
              complex decision-making are your only true defenses against replacement.
            </p>
          </article>
        </div>
      </SectionLayout>

      {/* SECTION 03: ECOSYSTEM COMPARISON */}
      <SectionLayout
        number="03"
        title="Market"
        accentTitle="Dynamics"
        subtitle="Choosing your battleground defines your mental health."
      >
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
              <tr className="border-foreground/10 hover:bg-foreground/[0.02] border-b">
                <td className="py-6">Big Tech</td>
                <td className="py-6 font-bold italic">High Salary & Stability</td>
                <td className="py-6">Feeling like a cog in a massive, slow machine.</td>
              </tr>
              <tr className="border-foreground/10 hover:bg-foreground/[0.02] border-b">
                <td className="py-6">Early Startup</td>
                <td className="py-6 font-bold italic">Fast Growth & Ownership</td>
                <td className="py-6">Unpaid overtime and extreme burnout risk.</td>
              </tr>
              <tr className="border-foreground/10 hover:bg-foreground/[0.02] border-b">
                <td className="py-6">Freelance</td>
                <td className="py-6 font-bold italic">Total Freedom</td>
                <td className="py-6">Being a salesman, accountant, and dev all at once.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionLayout>

      {/* SECTION 04: THE SURVIVAL GUIDE */}
      <SectionLayout
        number="04"
        title="Human"
        accentTitle="Survival"
        subtitle="Soft skills are the hard skills of the 2020s."
      >
        <div className="flex flex-col gap-12">
          <div className="border-l-2 border-purple-500/20 pl-8">
            <h4 className="font-sans font-bold tracking-widest text-purple-500 uppercase">
              Communication over Code
            </h4>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Being able to explain why a feature will take 3 weeks instead of 3 days to a
              non-technical manager is more important than knowing how to center a div.
            </p>
          </div>
          <div className="border-l-2 border-purple-500/20 pl-8 opacity-60">
            <h4 className="font-sans font-bold tracking-widest uppercase">Lifelong Unlearning</h4>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              The framework you learn today will be obsolete in 24 months. Master the fundamentals,
              not the tools. Tools change; logic is eternal.
            </p>
          </div>
        </div>
      </SectionLayout>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-foreground/[0.02] py-32 text-center">
        <Container>
          <div className="flex flex-col items-center px-6">
            <span className="text-fluid-small font-sans tracking-[0.4em] uppercase opacity-40">
              Manifesto End
            </span>
            <h2 className="mt-6 max-w-2xl font-serif tracking-tighter uppercase">
              Now that you know the <span className="text-purple-500 italic">Truth</span>, <br />
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
