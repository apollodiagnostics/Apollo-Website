import { notFound } from 'next/navigation'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { getRequestConfig } from 'next-intl/server'
import { AppConfig } from '@config'

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
})

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(locale)) notFound()

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  }
})
