import createMiddleware from 'next-intl/middleware'
import { AppConfig } from '@config'

export default createMiddleware({
  /**
   * The list of all supported locales
   */
  locales: AppConfig.locales,
  /**
   * The default locale to use when the locale is not set
   */
  defaultLocale: AppConfig.defaultLocale,
  localePrefix: AppConfig.localePrefix,
})

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", `/${AppConfig.locales.join("|")}/:path*`], // Causing syntax error console - fix?
  // matcher: ["/", "/(de|en)/:path*"], // Causing nested route not to be working - fix?
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
