import { NextIntlClientProvider, useMessages } from 'next-intl'

type Props = { locale: string } & React.PropsWithChildren

export function I18nProvider({ children, locale }: Props) {
  const messages = useMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
