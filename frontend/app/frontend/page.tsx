'use client'

import { SectionDivider } from '../components/SectionDivider'
import { SubpageHeader } from '../components/SubpageHeader'
import { Container } from '../wrappers/Container'
import Link from 'next/link'

// Lokalny komponent pomocniczy dla spójności sekcji (Slot-based)
function SectionLayout({
  number,
  title,
  accentTitle,
  subtitle,
  children,
  accentColor = 'text-yellow-500',
}: {
  number: string
  title: string
  accentTitle: string
  subtitle: string
  children: React.ReactNode
  accentColor?: string
}) {
  return (
    <section className="border-foreground/10 overflow-hidden border-b py-20">
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

export default function FrontendPage() {
  return (
    <main className="min-h-screen">
      <SubpageHeader
        title="Modern Frontend"
        subtitle="Architecting scalable, accessible, and performant user interfaces with React and Tailwind CSS."
        accentColor="text-yellow-500"
      />
      <SectionDivider />

      {/* SECTION 01: THE MINDSET */}
      <SectionLayout
        number="01"
        title="The Browser"
        accentTitle="Sapper"
        subtitle="Frontend is not just about making things look pretty; it's about handling chaos across a thousand different viewports."
      >
        <div className="space-y-8">
          <p className="text-fluid-h3 font-serif leading-snug italic opacity-80">
            "Your code is an educated guess about how a browser in another part of the world will
            interpret a set of instructions."
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border-foreground/10 border-t pt-6">
              <h4 className="mb-3 font-sans text-[11px] font-bold tracking-widest text-yellow-500 uppercase">
                The Safari Tax
              </h4>
              <p className="text-sm leading-relaxed opacity-60">
                Debugging the specific CSS quirks of the modern Internet Explorer. Everything works
                until you open it on an iPhone.
              </p>
            </div>
            <div className="border-foreground/10 border-t pt-6">
              <h4 className="mb-3 font-sans text-[11px] font-bold tracking-widest text-yellow-500 uppercase">
                State of Mind
              </h4>
              <p className="text-sm leading-relaxed opacity-60">
                Managing how data flows through a complex interface. When one button click triggers
                five different UI updates, you need a solid architectural plan.
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* SECTION 02: COMPONENT ANATOMY */}
      <SectionLayout
        number="02"
        title="Component"
        accentTitle="Logic"
        subtitle="Breaking the UI into reusable, atomic pieces that manage their own behavior."
      >
        <div className="grid gap-12">
          <article className="group">
            <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
              <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                01
              </span>
              <h4 className="font-sans font-bold tracking-widest uppercase">JSX & The DOM</h4>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Writing HTML-like structures inside JavaScript. It's about bridging the gap between
              content and logic, creating a dynamic tree of elements that react to user input.
            </p>
          </article>

          <article className="group">
            <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
              <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                02
              </span>
              <h4 className="font-sans font-bold tracking-widest uppercase">Props & Hooks</h4>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              The nervous system of React. Passing data down and hooking into the component
              lifecycle to fetch data, manage effects, or store local state.
            </p>
          </article>

          <article className="group">
            <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
              <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                03
              </span>
              <h4 className="font-sans font-bold tracking-widest uppercase">
                Responsive Grid & Flex
              </h4>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Using Tailwind's utility-first approach to build fluid layouts. Implementing complex
              designs that remain balanced from 320px to 4K monitors.
            </p>
          </article>
        </div>
      </SectionLayout>

      {/* SECTION 03: THE PIPELINE */}
      <SectionLayout
        number="03"
        title="Dev"
        accentTitle="Pipeline"
        subtitle="The stack that powers the modern developer's workflow."
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-[11px] tracking-widest uppercase">
            <thead>
              <tr className="border-foreground/20 border-b text-[10px] opacity-40">
                <th className="pb-4 font-bold">Category</th>
                <th className="pb-4 font-bold">Core Tool</th>
                <th className="pb-4 font-bold">Responsibility</th>
              </tr>
            </thead>
            <tbody className="opacity-80">
              <tr className="border-foreground/10 hover:bg-foreground/[0.02] border-b">
                <td className="py-6">Framework</td>
                <td className="py-6 font-bold italic underline decoration-yellow-500/30">
                  Next.js
                </td>
                <td className="py-6">Handling routing, SSR, and server actions.</td>
              </tr>
              <tr className="border-foreground/10 hover:bg-foreground/[0.02] border-b">
                <td className="py-6">Styling</td>
                <td className="py-6 font-bold italic underline decoration-yellow-500/30">
                  Tailwind CSS
                </td>
                <td className="py-6">Atomic styling without leaving the HTML.</td>
              </tr>
              <tr className="border-foreground/10 hover:bg-foreground/[0.02] border-b">
                <td className="py-6">Version Control</td>
                <td className="py-6 font-bold italic underline decoration-yellow-500/30">
                  Git / GitHub
                </td>
                <td className="py-6">Branching, PRs, and deployment pipelines.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionLayout>

      {/* SECTION 04: THE BRIDGE */}
      <SectionLayout
        number="04"
        title="The"
        accentTitle="Bridge"
        subtitle="Frontend is the intersection of design, backend, and the end-user."
      >
        <div className="flex flex-col gap-12 text-justify lg:text-left">
          <div className="border-l-2 border-yellow-500/20 pl-8">
            <h4 className="font-sans font-bold tracking-widest text-yellow-500 uppercase">
              API Integration
            </h4>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Consuming JSON from the backend and transforming it into a human-readable interface.
              Handling loading states and errors gracefully is a core skill.
            </p>
          </div>
          <div className="border-l-2 border-yellow-500/20 pl-8 opacity-60">
            <h4 className="font-sans font-bold tracking-widest uppercase">Accessibility (a11y)</h4>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Building for everyone. Using semantic HTML and ARIA labels to ensure that the web is
              usable for people with disabilities or screen readers.
            </p>
          </div>
        </div>
      </SectionLayout>

      {/* FINAL ROADMAP LINK */}
      <section className="py-24 text-center">
        <Container>
          <div className="flex flex-col items-center px-6">
            <span className="text-fluid-small font-sans tracking-[0.4em] uppercase opacity-40">
              Ready for more?
            </span>
            <h2 className="mt-6 font-serif tracking-tighter uppercase">
              Enter the <span className="text-red-500 italic">3rd Dimension</span>
            </h2>
            <Link
              href="/3d"
              className="text-fluid-small mt-12 border border-yellow-500/30 px-10 py-5 font-sans tracking-[0.3em] uppercase transition-all duration-500 hover:bg-yellow-500 hover:text-black"
            >
              Explore 3D Dimension
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
