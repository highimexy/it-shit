'use client'

import { SectionDivider } from '../components/SectionDivider'
import { SubpageHeader } from '../components/SubpageHeader'
import { Container } from '../wrappers/Container'

export default function RealityCheckPage() {
  return (
    <main>
      <SubpageHeader
        title="Reality Check"
        subtitle="The unfiltered truth about the IT ecosystem. Decoding the daily grind in startups and the strategic layers of corporations."
        accentColor="text-purple-500"
      />

      <SectionDivider />

      <Container className="border-foreground/10 border-x py-20">
        <div className="grid gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl leading-tight tracking-tighter uppercase">
              The Great <br />{' '}
              <span className="text-purple-500 italic opacity-40">Battleground</span>
            </h2>
            <p className="mt-8 border-l-2 border-purple-500/30 pl-6 font-serif text-lg leading-relaxed italic opacity-60">
              "Wybór między startupem a korporacją to nie tylko kwestia zarobków. To decyzja o tym,
              czy chcesz budować silnik podczas lotu, czy dbać o perfekcyjne tryby w wielkiej
              maszynie."
            </p>
          </div>

          <div className="space-y-12 lg:col-span-7">
            <section>
              <h3 className="mb-4 font-sans text-[10px] font-bold tracking-[0.3em] text-purple-500 uppercase">
                01 / Startup: The Wild West
              </h3>
              <p className="text-justify font-sans text-sm leading-relaxed opacity-90">
                W startupach "QA" to stan umysłu całego zespołu. Jako programista często jesteś
                testerem, a jako tester - architektem procesów. Realia to szybkie wdrożenia, brak
                sztywnych procedur i ogromna sprawczość. To idealne miejsce na start, jeśli chcesz
                błyskawicznie zobaczyć wpływ swojej pracy na żywy organizm produktu.
              </p>
            </section>

            <section>
              <h3 className="mb-4 font-sans text-[10px] font-bold tracking-[0.3em] text-purple-500 uppercase">
                02 / Corp: The Great Machine
              </h3>
              <p className="text-justify font-sans text-sm leading-relaxed opacity-90">
                Korporacja uczy standardów, których nie znajdziesz nigdzie indziej. Dowiesz się,
                dlaczego Code Review trwa dni, a nie minuty, i jak zarządzać długiem technologicznym
                w skali globalnej. To stabilność, jasne ścieżki awansu i praca z ekspertami wąskich
                dziedzin, kosztem biurokracji i wolniejszego tempa zmian.
              </p>
            </section>
          </div>
        </div>
      </Container>

      <SectionDivider />
    </main>
  )
}
