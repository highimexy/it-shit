import type { Metadata } from 'next'
import { Young_Serif, Inter } from 'next/font/google'
import '../globals.css'
import { Providers } from './providers'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className="bg-background flex min-h-screen flex-col" suppressHydrationWarning>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="bg-background isolation-isolate relative z-10 flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
