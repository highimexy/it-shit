import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'

export function AcademyNavbar() {
  return (
    <nav className="border-foreground/10 bg-background flex h-14 w-full items-center justify-between border-b px-4 lg:px-6">
      {/* LEWA STRONA: Logo i Linki Główne */}
      <div className="flex h-full items-center gap-8">
        <Link href="/academy" className="flex items-center gap-2">
          {/* Możesz tu wrzucić ikonę lub logo */}
          <span className="font-serif text-xl font-bold tracking-tighter">Academy.</span>
        </Link>

        <div className="hidden h-full items-center gap-6 lg:flex">
          <Link
            href="/academy"
            className="border-foreground/80 text-foreground flex h-full items-center border-b-2 px-1 font-mono text-sm transition-colors"
          >
            Problems
          </Link>
          <Link
            href="/academy/paths"
            className="text-foreground/60 hover:text-foreground flex h-full items-center border-b-2 border-transparent px-1 font-mono text-sm transition-colors"
          >
            Study Plan
          </Link>
          <Link
            href="/academy/discuss"
            className="text-foreground/60 hover:text-foreground flex h-full items-center border-b-2 border-transparent px-1 font-mono text-sm transition-colors"
          >
            Discuss
          </Link>
        </div>
      </div>

      {/* PRAWA STRONA: Szukajka i Auth */}
      <div className="flex items-center gap-4">
        <div className="bg-foreground/5 hidden items-center gap-2 rounded-md px-3 py-1.5 lg:flex">
          <FiSearch className="text-foreground/50 text-sm" />
          <input
            type="text"
            placeholder="Search questions..."
            className="text-foreground placeholder:text-foreground/30 border-none bg-transparent font-mono text-xs outline-none focus:ring-0"
          />
        </div>

        <div className="flex items-center gap-4 font-mono text-xs">
          <Link
            href="/login"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/premium"
            className="rounded-md bg-yellow-500/10 px-3 py-1.5 text-yellow-500 transition-colors hover:bg-yellow-500/20"
          >
            Premium
          </Link>
        </div>
      </div>
    </nav>
  )
}
