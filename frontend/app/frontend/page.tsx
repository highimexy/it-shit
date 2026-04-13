'use client'

import { SectionDivider } from '../components/SectionDivider'
import { SubpageHeader } from '../components/SubpageHeader'
import { Container } from '../wrappers/Container'
import Link from 'next/link'

export default function FrontendPage() {
  const accentColor = 'text-yellow-500'

  return (
    <main className="min-h-screen">
      <SubpageHeader
        title="Modern Frontend"
        subtitle="Architecting scalable, accessible, and performant user interfaces with React and Tailwind CSS."
        accentColor="text-yellow-500"
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
                01 / The Browser
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                The Browser <br />
                <span className={`italic opacity-30 ${accentColor}`}>Sapper</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                Frontend is not just about making things look pretty; it's about handling chaos
                across a thousand different viewports.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="space-y-8">
                <p className="text-fluid-h3 font-serif leading-snug italic opacity-80">
                  "Your code is an educated guess about how a browser in another part of the world
                  will interpret a set of instructions."
                </p>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="border-foreground/10 border-t pt-6">
                    <h4
                      className={`mb-3 font-sans text-[11px] font-bold tracking-widest uppercase ${accentColor}`}
                    >
                      The Safari Tax
                    </h4>
                    <p className="text-sm leading-relaxed opacity-60">
                      Debugging the specific CSS quirks of the modern Internet Explorer. Everything
                      works until you open it on an iPhone.
                    </p>
                  </div>
                  <div className="border-foreground/10 border-t pt-6">
                    <h4
                      className={`mb-3 font-sans text-[11px] font-bold tracking-widest uppercase ${accentColor}`}
                    >
                      State of Mind
                    </h4>
                    <p className="text-sm leading-relaxed opacity-60">
                      Managing how data flows through a complex interface. When one button click
                      triggers five different UI updates, you need a solid architectural plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 02: COMPONENT ANATOMY */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                02 / Component
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                Component <br />
                <span className={`italic opacity-30 ${accentColor}`}>Logic</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                Breaking the UI into reusable, atomic pieces that manage their own behavior.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="grid gap-12">
                <article className="group">
                  <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
                    <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                      01
                    </span>
                    <h4 className="font-sans font-bold tracking-widest uppercase">JSX & The DOM</h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    Writing HTML-like structures inside JavaScript. It's about bridging the gap
                    between content and logic, creating a dynamic tree of elements that react to
                    user input.
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
                    Using Tailwind's utility-first approach to build fluid layouts. Implementing
                    complex designs that remain balanced from 320px to 4K monitors.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 03: THE PIPELINE */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                03 / Dev
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                Dev <br />
                <span className={`italic opacity-30 ${accentColor}`}>Pipeline</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                The stack that powers the modern developer's workflow.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
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
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">Framework</td>
                      <td className="py-6 font-bold italic underline decoration-yellow-500/30">
                        Next.js
                      </td>
                      <td className="py-6">Handling routing, SSR, and server actions.</td>
                    </tr>
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">Styling</td>
                      <td className="py-6 font-bold italic underline decoration-yellow-500/30">
                        Tailwind CSS
                      </td>
                      <td className="py-6">Atomic styling without leaving the HTML.</td>
                    </tr>
                    <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                      <td className="py-6">Version Control</td>
                      <td className="py-6 font-bold italic underline decoration-yellow-500/30">
                        Git / GitHub
                      </td>
                      <td className="py-6">Branching, PRs, and deployment pipelines.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* SECTION 04: THE BRIDGE */}
      <section className="border-foreground/10 overflow-hidden border-b">
        <Container>
          <div className="flex flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <span
                className={`text-fluid-small font-sans font-bold tracking-[0.4em] uppercase ${accentColor}`}
              >
                04 / The
              </span>
              <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                The <br />
                <span className={`italic opacity-30 ${accentColor}`}>Bridge</span>
              </h2>
              <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                Frontend is the intersection of design, backend, and the end-user.
              </p>
            </div>
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
              <div className="flex flex-col gap-12 text-justify lg:text-left">
                <div className="border-l-2 border-yellow-500/20 pl-8">
                  <h4 className={`font-sans font-bold tracking-widest uppercase ${accentColor}`}>
                    API Integration
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    Consuming JSON from the backend and transforming it into a human-readable
                    interface. Handling loading states and errors gracefully is a core skill.
                  </p>
                </div>
                <div className="border-l-2 border-yellow-500/20 pl-8 opacity-60">
                  <h4 className="font-sans font-bold tracking-widest uppercase">
                    Accessibility (a11y)
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    Building for everyone. Using semantic HTML and ARIA labels to ensure that the
                    web is usable for people with disabilities or screen readers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionDivider />

      {/* FINAL ROADMAP LINK */}
      <section className="text-center">
        <Container>
          <div className="flex flex-col items-center px-6 py-24">
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
