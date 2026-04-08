import { Container } from '../wrappers/Container'

export function Header() {
  return (
    <header className="border-foreground/10 w-full border-b">
      <Container>
        <div className="flex flex-col px-6 py-20 text-center">
          <h1 className="font-serif text-[clamp(2rem,5vw,4.5rem)] leading-none">
            The Frontend Journal
          </h1>
        </div>
      </Container>
    </header>
  )
}
