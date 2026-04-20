import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'pl']

export default getRequestConfig(async ({ requestLocale }) => {
  const resolvedLocale = await requestLocale

  const validLocale = locales.includes(resolvedLocale as string) ? resolvedLocale : 'en'

  return {
    locale: validLocale as string,
    messages: (await import(`./messages/${validLocale}.json`)).default,
  }
})
