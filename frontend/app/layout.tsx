import type { Metadata } from 'next'
import { Young_Serif, Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const serif = Young_Serif({
  weight: '400',
  variable: '--font-serif',
  subsets: ['latin-ext'],
})

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'The Frontend Journal',
  description: 'Twoje źródło inspiracji UI ze opruszone szczyptą 3D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <Providers>
          <Navbar />
          <main className="bg-background relative z-10 flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
