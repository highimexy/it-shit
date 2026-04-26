import { ReactNode } from 'react'
import { AcademyNavbar } from './_components/AcademyNavbar'
import { AcademySidebar } from './_components/AcademySidebar'
import { AcademyFooter } from './_components/AcademyFooter'

export default function AcademyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background flex h-screen flex-col overflow-hidden">
      <AcademyNavbar />
      <div className="flex flex-1 overflow-hidden">
        <AcademySidebar />
        <div className="flex flex-1 flex-col overflow-y-auto">
          <main className="flex-1">{children}</main>
          <AcademyFooter />
        </div>
      </div>
    </div>
  )
}
