import { ReactNode } from 'react'
import { AcademyNavbar } from './_components/AcademyNavbar'
import { AcademySidebar } from './_components/AcademySidebar'
import { AcademyFooter } from './_components/AcademyFooter'

export default function AcademyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background flex w-full flex-1 flex-col overflow-hidden">
      <AcademyNavbar />

      <div className="relative z-60 flex flex-1">
        <AcademySidebar />

        <div className="flex flex-1 flex-col overflow-y-auto">
          <main className="flex flex-1 flex-col">{children}</main>
          <div className="mt-auto">
            <AcademyFooter />
          </div>
        </div>
      </div>
    </div>
  )
}
