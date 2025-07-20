import { PaymentFailPageData } from './payment-fail.model'

const paymentFailPageData: PaymentFailPageData = {
  fail: {
    image: {
      src: '/images/fail.png',
      alt: 'not found',
    },
    heading: 'Whoops !',
    description:
      'An error occurred while processing your payment. Please retry after sometime or use a different payment method.',
    homePageButton: {
      label: 'Home page',
      link: '/',
    },
  },
}

export const getPaymentFailPageData =
  async (): Promise<PaymentFailPageData> => {
    const p = new Promise<PaymentFailPageData>((resolve) => {
      resolve(paymentFailPageData)
    })
    return p
  }
