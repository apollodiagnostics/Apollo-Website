import { getPaymentFailPageData } from '@query/payment-fail'
import { Fail } from '@components/feature/Payment'

async function PaymentFailPage() {
  const { fail } = await getPaymentFailPageData()
  return <Fail {...fail} />
}

export default PaymentFailPage
