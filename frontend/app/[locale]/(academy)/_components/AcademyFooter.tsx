import Link from 'next/link'

export function AcademyFooter() {
  return (
    <footer className="border-foreground/10 flex items-center justify-between border-t p-4 font-mono text-[10px] opacity-50">
      <div>Copyright © {new Date().getFullYear()} The Frontend Journal</div>
      <div className="flex gap-4">
        <Link href="/help" className="hover:underline">
          Help Center
        </Link>
        <Link href="/terms" className="hover:underline">
          Terms
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
