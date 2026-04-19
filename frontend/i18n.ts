import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'pl']

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locales.includes(locale as string) ? locale : 'en'

  return {
    locale: validLocale as string,
    messages: (await import(`./messages/${validLocale}.json`)).default,
  }
})
