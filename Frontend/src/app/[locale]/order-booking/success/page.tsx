import { getOrderSuccessPageData } from '@query/order-booking-success'
import { Success } from '@components/feature/Payment'

async function OrderSuccessPage() {
  const { success } = await getOrderSuccessPageData()
  return <Success {...success} />
}

export default OrderSuccessPage
