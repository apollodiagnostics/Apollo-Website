import { OrderSuccessPageData } from './order-booking-success.model'

const successPageData: OrderSuccessPageData = {
  success: {
    image: {
      src: '/images/orderSuccess.png',
      alt: 'not found',
    },
    heading: 'Test Collection Scheduled Successfully !',
    description:
      'Home Collection scheduled successfully. Click below to return to our main site and continue your health journey.',
    homePageButton: {
      label: 'Home page',
      link: '/',
    },
  },
}

export const getOrderSuccessPageData =
  async (): Promise<OrderSuccessPageData> => {
    const p = new Promise<OrderSuccessPageData>((resolve) => {
      resolve(successPageData)
    })
    return p
  }
