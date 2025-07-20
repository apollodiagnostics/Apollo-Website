import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { AppConfig } from '@config'
import { I18nProvider, ApolloWrapper, ThemeProvider } from '@providers'
import { DefaultLayout } from '@layouts'
import './globals.css'

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  // calling
  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="GTM-MXFNQXX" />
      <I18nProvider locale={locale}>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <ThemeProvider>
          <ApolloWrapper>
            <body>
              <noscript>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-MXFNQXX"
                  height="0"
                  width="0"
                  style={{ display: 'none', visibility: 'hidden' }}
                />
              </noscript>
              <DefaultLayout>{children}</DefaultLayout>
            </body>
          </ApolloWrapper>
        </ThemeProvider>
      </I18nProvider>
    </html>
  )
}
