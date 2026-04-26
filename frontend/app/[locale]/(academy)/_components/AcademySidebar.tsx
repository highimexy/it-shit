import Link from 'next/link'
import { FiBook, FiTarget, FiCompass, FiMap, FiUser } from 'react-icons/fi'

export function AcademySidebar() {
  return (
    <aside className="border-foreground/10 bg-background hidden w-[240px] flex-col border-r lg:flex">
      {/* NAWIGACJA BOCZNA */}
      <nav className="flex flex-1 flex-col gap-1 p-4 font-mono text-sm">
        <Link
          href="/academy/library"
          className="text-foreground/70 hover:bg-foreground/5 hover:text-foreground flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors"
        >
          <FiBook className="text-lg" />
          <span>Library</span>
        </Link>

        <Link
          href="/academy/quest"
          className="bg-foreground/5 text-foreground flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FiTarget className="text-lg" />
            <span className="font-bold">Quest</span>
          </div>
          <span className="rounded bg-blue-500 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase">
            New
          </span>
        </Link>

        <Link
          href="/academy/explore"
          className="text-foreground/70 hover:bg-foreground/5 hover:text-foreground flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors"
        >
          <FiCompass className="text-lg" />
          <span>Explore</span>
        </Link>

        <Link
          href="/academy/paths"
          className="text-foreground/70 hover:bg-foreground/5 hover:text-foreground flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors"
        >
          <FiMap className="text-lg" />
          <span>Study Plan</span>
        </Link>
      </nav>

      {/* KARTA LOGOWANIA / PROFILU (jak na LeetCode) */}
      <div className="border-foreground/10 border-t p-6 text-center">
        <p className="mb-4 font-sans text-xs leading-relaxed opacity-60">
          Sign in to view lists and track study progress.
        </p>
        <button className="bg-foreground text-background hover:bg-foreground/90 flex w-full items-center justify-center gap-2 rounded-full py-2 font-mono text-xs font-bold transition-colors">
          <FiUser /> Sign in
        </button>
      </div>
    </aside>
  )
}
