import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'pl']

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as string)) {
    notFound()
  }

  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
