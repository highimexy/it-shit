import { Header } from './components/Header'

export default function Home() {
  return (
    // Usuwamy max-w stąd, żeby tło i linie border-b szły przez całą szerokość
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Header />
        {/* Tutaj możesz dodać kolejne sekcje Gridowe */}
      </main>
    </div>
  )
}
