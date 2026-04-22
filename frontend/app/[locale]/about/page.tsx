'use client'

import { SectionDivider } from '../../components/SectionDivider'
import { SimpleHeader } from '../../components/SimpleHeader'
import { Container } from '../../wrappers/Container'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('About')

  return (
    <main className="min-h-screen">
      <SimpleHeader title={t('header.title')} accentColor="text-zinc-300" />
      <SectionDivider />

      <section className="border-foreground/10 border-b">
        <Container className="py-20 md:py-32">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="font-serif text-3xl tracking-tighter uppercase italic opacity-80">
              {t('manifesto.title')}
            </h2>

            <div className="mt-12 space-y-8 font-sans text-lg leading-relaxed opacity-60">
              <p>
                {t.rich('manifesto.p1', {
                  bold: (chunks) => (
                    <span className="text-foreground font-bold opacity-100">{chunks}</span>
                  ),
                })}
              </p>
              <p>{t('manifesto.p2')}</p>
            </div>

            <div className="border-foreground/20 mt-16 border-l-2 py-2 pl-8">
              <p className="font-serif text-2xl leading-snug italic opacity-90">
                {t('manifesto.quote')}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
