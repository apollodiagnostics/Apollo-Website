import { PaymentSuccessPageData } from './payment-success.model'

const successPageData: PaymentSuccessPageData = {
  success: {
    image: {
      src: '/images/success.png',
      alt: 'not found',
    },
    heading: 'Payment Successful !',
    description:
      'Home Collection scheduled successfully. Click below to return to our main site and continue your health journey.',
    homePageButton: {
      label: 'Home page',
      link: '/',
    },
  },
}

export const getSuccessPageData = async (): Promise<PaymentSuccessPageData> => {
  const p = new Promise<PaymentSuccessPageData>((resolve) => {
    resolve(successPageData)
  })
  return p
}
