'use client'

import { useEffect } from 'react'

export type PaymentGatewayLoaderData = {
  formData: string
}

export function PaymentGatewayLoader({ formData }: PaymentGatewayLoaderData) {
  useEffect(() => {
    const form = document.getElementById(
      'payment_post'
    ) as HTMLFormElement | null

    form?.submit()
  }, [])

  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: formData,
      }}
    />
  )
}
