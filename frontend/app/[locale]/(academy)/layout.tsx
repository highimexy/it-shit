import { ReactNode } from 'react'
import Link from 'next/link'

export default function AcademyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background flex min-h-screen">
      {/* SIDEBAR */}
      <aside className="border-foreground/10 bg-foreground/5 hidden w-64 flex-col border-r p-6 md:flex">
        <div className="mb-10 font-serif text-2xl font-bold tracking-tighter">Academy.</div>
        <nav className="flex flex-col gap-4 font-mono text-sm opacity-80">
          <Link href="/academy" className="hover:text-primary transition-colors">
            [00] Dashboard
          </Link>
          <Link href="/academy/qa-basics" className="hover:text-primary transition-colors">
            [01] QA Basics
          </Link>
          <Link href="/academy/automation" className="hover:text-primary transition-colors">
            [02] Automation
          </Link>
        </nav>
      </aside>

      {/* GŁÓWNA TREŚĆ */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
