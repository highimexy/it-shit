'use client'

import { FiArrowRight } from 'react-icons/fi'
import { BackgroundGrid } from '../../components/BackgroundGrid'
import { SectionDivider } from '../../components/SectionDivider'
import { SubpageHeader } from '../../components/SubpageHeader'
import { Container } from '../../wrappers/Container'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function FrontendPage() {
  const t = useTranslations('Frontend')
  const accentColor = 'text-yellow-500'

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-1">
        <SubpageHeader
          title={t('header.title')}
          subtitle={t('header.subtitle')}
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
                  {t('mindset.label')}
                </span>
                <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                  {t('mindset.title1')} <br />
                  <span className={`italic opacity-30 ${accentColor}`}>{t('mindset.title2')}</span>
                </h2>
                <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                  {t('mindset.tagline')}
                </p>
              </div>
              <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
                <div className="space-y-8">
                  <p className="text-fluid-h3 font-serif leading-snug italic opacity-80">
                    {t('mindset.quote')}
                  </p>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div className="border-foreground/10 border-t pt-6">
                      <h4
                        className={`mb-3 font-sans text-[11px] font-bold tracking-widest uppercase ${accentColor}`}
                      >
                        {t('mindset.safari.title')}
                      </h4>
                      <p className="text-sm leading-relaxed opacity-60">
                        {t('mindset.safari.desc')}
                      </p>
                    </div>
                    <div className="border-foreground/10 border-t pt-6">
                      <h4
                        className={`mb-3 font-sans text-[11px] font-bold tracking-widest uppercase ${accentColor}`}
                      >
                        {t('mindset.state.title')}
                      </h4>
                      <p className="text-sm leading-relaxed opacity-60">
                        {t('mindset.state.desc')}
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
                  {t('anatomy.label')}
                </span>
                <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                  {t('anatomy.title1')} <br />
                  <span className={`italic opacity-30 ${accentColor}`}>{t('anatomy.title2')}</span>
                </h2>
                <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                  {t('anatomy.tagline')}
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
                        {t('anatomy.item1.title')}
                      </h4>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed opacity-60">
                      {t('anatomy.item1.desc')}
                    </p>
                  </article>

                  <article className="group">
                    <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
                      <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                        02
                      </span>
                      <h4 className="font-sans font-bold tracking-widest uppercase">
                        {t('anatomy.item2.title')}
                      </h4>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed opacity-60">
                      {t('anatomy.item2.desc')}
                    </p>
                  </article>

                  <article className="group">
                    <div className="border-foreground/10 flex items-baseline gap-4 border-b pb-4">
                      <span className="font-serif text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                        03
                      </span>
                      <h4 className="font-sans font-bold tracking-widest uppercase">
                        {t('anatomy.item3.title')}
                      </h4>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed opacity-60">
                      {t('anatomy.item3.desc')}
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
                  {t('pipeline.label')}
                </span>
                <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                  {t('pipeline.title1')} <br />
                  <span className={`italic opacity-30 ${accentColor}`}>{t('pipeline.title2')}</span>
                </h2>
                <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                  {t('pipeline.tagline')}
                </p>
              </div>
              <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans text-[11px] tracking-widest uppercase">
                    <thead>
                      <tr className="border-foreground/20 border-b text-[10px] opacity-40">
                        <th className="pb-4 font-bold">{t('pipeline.table.head1')}</th>
                        <th className="pb-4 font-bold">{t('pipeline.table.head2')}</th>
                        <th className="pb-4 font-bold">{t('pipeline.table.head3')}</th>
                      </tr>
                    </thead>
                    <tbody className="opacity-80">
                      <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                        <td className="py-6">{t('pipeline.table.cat1')}</td>
                        <td className="py-6 font-bold italic underline decoration-yellow-500/30">
                          Next.js
                        </td>
                        <td className="py-6">{t('pipeline.table.row1')}</td>
                      </tr>
                      <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                        <td className="py-6">{t('pipeline.table.cat2')}</td>
                        <td className="py-6 font-bold italic underline decoration-yellow-500/30">
                          Tailwind CSS
                        </td>
                        <td className="py-6">{t('pipeline.table.row2')}</td>
                      </tr>
                      <tr className="border-foreground/10 hover:bg-foreground/2 border-b">
                        <td className="py-6">{t('pipeline.table.cat3')}</td>
                        <td className="py-6 font-bold italic underline decoration-yellow-500/30">
                          Git / GitHub
                        </td>
                        <td className="py-6">{t('pipeline.table.row3')}</td>
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
                  {t('bridge.label')}
                </span>
                <h2 className="mt-4 font-serif leading-[0.85] tracking-tighter wrap-break-word uppercase">
                  {t('bridge.title1')} <br />
                  <span className={`italic opacity-30 ${accentColor}`}>{t('bridge.title2')}</span>
                </h2>
                <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                  {t('bridge.tagline')}
                </p>
              </div>
              <div className="w-full flex-1 lg:max-w-2xl xl:max-w-3xl">
                <div className="flex flex-col gap-12 text-justify lg:text-left">
                  <div className="border-l-2 border-yellow-500/20 pl-8">
                    <h4 className="font-sans font-bold tracking-widest uppercase opacity-60">
                      {t('bridge.api.title')}
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed opacity-60">
                      {t('bridge.api.desc')}
                    </p>
                  </div>
                  <div className="border-l-2 border-yellow-500/20 pl-8 opacity-60">
                    <h4 className="font-sans font-bold tracking-widest uppercase">
                      {t('bridge.a11y.title')}
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed opacity-60">
                      {t('bridge.a11y.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <SectionDivider />

        {/* THE ACADEMY / ROADMAP */}
        <section className="relative overflow-hidden bg-yellow-500/2">
          <BackgroundGrid color="rgb(234 179 8 / 0.1)" />
          <Container className="relative z-10">
            <div className="px-3 py-24 md:px-6">
              <div className="flex flex-col gap-8 text-left lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-xl">
                  <span className="text-fluid-small font-sans font-bold tracking-[0.4em] text-yellow-500 uppercase">
                    {t('academy.label')}
                  </span>
                  <h2 className="text-fluid-h2 mt-4 font-serif leading-none tracking-tighter uppercase">
                    {t('academy.title1')} <br />
                    <span className="text-fluid-h1 text-yellow-500 italic opacity-30">
                      {t('academy.title2')}
                    </span>
                  </h2>
                  <p className="text-fluid-p mt-8 font-sans leading-relaxed italic opacity-60">
                    {t('academy.tagline')}
                  </p>
                </div>
                <div className="hidden border-l border-yellow-500/20 pl-6 text-left lg:block">
                  <span className="block font-mono text-[10px] uppercase opacity-40">
                    {t('academy.curriculum')}
                  </span>
                  <span className="mt-1 block font-mono text-[10px] font-bold text-yellow-500 uppercase">
                    {t('academy.modules')}
                  </span>
                </div>
              </div>

              <div className="bg-foreground/10 border-foreground/10 mt-16 grid gap-px border text-left md:mt-20">
                {/* STEP 01 */}
                <Link
                  href="/frontend/dictionary"
                  className="group bg-background border-foreground/20 relative border p-5 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:rounded-md hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.15)] md:p-10 md:hover:translate-x-2 md:hover:-translate-y-2 md:hover:shadow-[-20px_25px_50px_-15px_rgba(234,179,8,0.2)]"
                >
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div className="flex items-start gap-4 md:gap-8">
                      <span className="shrink-0 font-serif text-xl opacity-10 transition-all group-hover:text-yellow-500 group-hover:opacity-100 md:text-4xl">
                        01
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-sans text-[13px] leading-tight font-bold tracking-widest text-white uppercase transition-colors group-hover:text-yellow-500 md:text-base">
                          {t('academy.step1.title')}
                        </h3>
                        <p className="max-w-60 text-[11px] leading-relaxed italic opacity-50 md:max-w-sm md:text-sm">
                          {t('academy.step1.desc')}
                        </p>
                      </div>
                    </div>
                    <span className="border-foreground/10 flex w-fit items-center gap-2 self-start border px-3 py-2 text-[8px] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-all group-hover:border-yellow-500 group-hover:bg-yellow-500 group-hover:text-black md:self-auto md:text-[10px]">
                      {t('academy.step1.btn')}{' '}
                      <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>

                {/* STEP 02 */}
                <Link
                  href="/frontend/state-drills"
                  className="group bg-background border-foreground/20 relative border p-5 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:rounded-md hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.15)] md:p-10 md:hover:translate-x-2 md:hover:-translate-y-2 md:hover:shadow-[-20px_25px_50px_-15px_rgba(234,179,8,0.2)]"
                >
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div className="flex items-start gap-4 md:gap-8">
                      <span className="shrink-0 font-serif text-xl opacity-10 transition-all group-hover:text-yellow-500 group-hover:opacity-100 md:text-4xl">
                        02
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-sans text-[13px] leading-tight font-bold tracking-widest text-white uppercase transition-colors group-hover:text-yellow-500 md:text-base">
                          {t('academy.step2.title')}
                        </h3>
                        <p className="max-w-60 text-[11px] leading-relaxed italic opacity-50 md:max-w-sm md:text-sm">
                          {t('academy.step2.desc')}
                        </p>
                      </div>
                    </div>
                    <span className="border-foreground/10 flex w-fit items-center gap-2 self-start border px-3 py-2 text-[8px] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-all group-hover:border-yellow-500 group-hover:bg-yellow-500 group-hover:text-black md:self-auto md:text-[10px]">
                      {t('academy.step2.btn')}{' '}
                      <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>

                {/* STEP 03 */}
                <Link
                  href="/frontend/performance"
                  className="group bg-background border-foreground/20 relative border p-5 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-1 hover:rounded-md hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.15)] md:p-10 md:hover:translate-x-2 md:hover:-translate-y-2 md:hover:shadow-[-20px_25px_50px_-15px_rgba(234,179,8,0.2)]"
                >
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div className="flex items-start gap-4 md:gap-8">
                      <span className="shrink-0 font-serif text-xl opacity-10 transition-all group-hover:text-yellow-500 group-hover:opacity-100 md:text-4xl">
                        03
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-sans text-[13px] leading-tight font-bold tracking-widest text-white uppercase transition-colors group-hover:text-yellow-500 md:text-base">
                          {t('academy.step3.title')}
                        </h3>
                        <p className="max-w-60 text-[11px] leading-relaxed italic opacity-50 md:max-w-sm md:text-sm">
                          {t('academy.step3.desc')}
                        </p>
                      </div>
                    </div>
                    <span className="border-foreground/10 flex w-fit items-center gap-2 self-start border px-3 py-2 text-[8px] font-bold tracking-[0.2em] whitespace-nowrap uppercase transition-all group-hover:border-yellow-500 group-hover:bg-yellow-500 group-hover:text-black md:self-auto md:text-[10px]">
                      {t('academy.step3.btn')}{' '}
                      <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <SectionDivider />

        {/* FINAL ROADMAP LINK */}
        <section className="border-foreground/10 relative border-b text-center">
          <Container>
            <div className="relative flex flex-col items-center px-6 py-24">
              <div className="pointer-events-none absolute top-10 right-10 hidden font-serif text-[clamp(4rem,15vw,12rem)] leading-none tracking-tighter uppercase opacity-[0.03] select-none lg:block">
                {t('footer.watermark')}
              </div>
              <span className="text-fluid-small font-sans tracking-[0.4em] uppercase opacity-40">
                {t('footer.label')}
              </span>
              <h2 className="mt-6 font-serif tracking-tighter uppercase">
                {t.rich('footer.title', {
                  yellow: (chunks) => <span className="text-yellow-500 italic">{chunks}</span>,
                })}
              </h2>
              <Link
                href="/3d"
                className="text-fluid-small mt-12 border border-yellow-500/30 px-10 py-5 font-sans tracking-[0.3em] uppercase transition-all duration-500 hover:bg-yellow-500 hover:text-black"
              >
                {t('footer.btn')}
              </Link>
            </div>
          </Container>
        </section>
        <SectionDivider />
      </main>
    </div>
  )
}
