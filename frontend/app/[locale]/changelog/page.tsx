'use client'

import { SectionDivider } from '../../components/SectionDivider'
import { SimpleHeader } from '../../components/SimpleHeader'
import { Container } from '../../wrappers/Container'
import { useTranslations } from 'next-intl'

export default function ChangelogPage() {
  const t = useTranslations('Changelog')

  // Klucze wersji z Twojego pliku messages/pl.json i en.json
  const versions = ['v120', 'v110', 'v100']

  return (
    <main className="min-h-screen">
      <SimpleHeader title={t('header.title')} accentColor="text-zinc-400" />
      <SectionDivider />

      <section className="border-foreground/10 border-b">
        <Container className="py-20 lg:py-32">
          <div className="flex flex-col items-start lg:flex-row">
            {/* STICKY SIDEBAR */}
            {/* Zmiana: lg:border-r-0 - lewa kolumna oddaje odpowiedzialność za prawą krawędź */}
            <aside className="border-foreground/10 bg-foreground/2 border-l0 sticky top-14 hidden w-64 shrink-0 flex-col border border-l-0 lg:flex lg:border-r-0">
              {/* Nagłówek panelu */}
              <div className="border-foreground/10 bg-foreground/5 border-b px-6 py-5">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase opacity-50">
                  Indeks Wersji
                </span>
              </div>

              {/* Lista wersji */}
              <nav className="flex flex-col">
                {versions.map((v, index) => (
                  <a
                    key={`nav-${v}`}
                    href={`#${v}`}
                    className={`group hover:bg-foreground/5 flex items-center justify-between px-6 py-4 opacity-60 transition-all hover:opacity-100 ${
                      index !== versions.length - 1 ? 'border-foreground/10 border-b' : ''
                    }`}
                  >
                    <span className="text-foreground font-mono text-xs font-bold transition-colors group-hover:text-zinc-400">
                      {t(`${v}.version`)}
                    </span>
                    <span className="font-mono text-[9px] opacity-40 transition-opacity group-hover:opacity-60">
                      {t(`${v}.date`)}
                    </span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* MAIN CONTENT */}
            {/* Zmiana: usunięto lg:border-l-0 - teraz prawa kolumna zarządza łączącym obramowaniem */}
            <div className="bg-foreground/10 border-foreground/10 flex w-full flex-1 flex-col gap-px border lg:border-r-0">
              {versions.map((v) => (
                <div
                  key={v}
                  id={v}
                  className="bg-background group scroll-mt-32 p-6 transition-colors hover:bg-zinc-900/10 md:p-10"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm font-bold text-zinc-500">
                        {t(`${v}.version`)}
                      </span>
                      <span className="bg-foreground/5 px-2 py-1 font-mono text-[10px] tracking-widest uppercase opacity-40">
                        {t(`${v}.tag`)}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] opacity-30">{t(`${v}.date`)}</span>
                  </div>
                  <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed opacity-60">
                    {t(`${v}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
