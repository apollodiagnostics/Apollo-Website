import { getSuccessPageData } from '@query/payment-success'
import { Success } from '@components/feature/Payment'

async function PaymentSuccessPage() {
  const { success } = await getSuccessPageData()
  return <Success {...success} />
}

export default PaymentSuccessPage
