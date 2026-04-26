import { Navbar } from './_components/Navbar'
import { Footer } from './_components/Footer'

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="bg-background isolation-isolate relative z-10 flex-1">{children}</main>

      <Footer />
    </div>
  )
}
