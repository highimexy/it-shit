import Link from 'next/link'
import { FiBook, FiTarget, FiCompass, FiMap, FiUser } from 'react-icons/fi'

const navItems = [
  { href: '/academy/library', label: 'Library', icon: FiBook },
  { href: '/academy/quest', label: 'Quest', icon: FiTarget, badge: 'New' },
  { href: '/academy/explore', label: 'Explore', icon: FiCompass },
  { href: '/academy/paths', label: 'Study Plan', icon: FiMap },
]

export function AcademySidebar() {
  return (
    <aside className="border-foreground/10 bg-background relative z-50 hidden w-48 shrink-0 flex-col border-r lg:flex">
      {/* NAWIGACJA BOCZNA */}
      <nav className="flex flex-1 flex-col">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group border-b-foreground/10 hover:bg-background relative flex items-center justify-between border border-transparent px-6 py-5 opacity-60 transition-all duration-300 ease-out hover:z-20 hover:translate-x-1 hover:-translate-y-1 hover:rounded-md hover:border-zinc-500/30 hover:opacity-100 hover:shadow-[0_10px_20px_-10px_rgba(161,161,170,0.15)]"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-base transition-colors group-hover:text-zinc-400" />
                <span className="font-sans text-[10px] font-bold tracking-widest uppercase transition-colors group-hover:text-zinc-400">
                  {item.label}
                </span>
              </div>

              {item.badge && (
                <span className="rounded bg-blue-500 px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-white uppercase shadow-sm">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* KARTA LOGOWANIA / PROFILU */}
      <div className="border-foreground/10 w-full border-t p-6 text-center">
        <p className="mb-4 font-sans text-xs leading-relaxed opacity-60">
          Sign in to view lists and track study progress.
        </p>
        <button className="bg-foreground text-background flex h-10 w-full items-center justify-center gap-2 rounded-full py-2.5 text-xs font-bold transition-transform hover:scale-105">
          <FiUser /> Sign in
        </button>
      </div>
    </aside>
  )
}
