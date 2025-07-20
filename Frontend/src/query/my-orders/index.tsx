/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { defaultCity } from '@models'
import { HistoryOrderCardData } from '@components/entities'
import { getMyOrdersHistory } from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { QuerySingleHistoryOrderData } from 'src/models/query.models'
import { MyOrdersPageData } from './my-orders.models'

const staticData: MyOrdersPageData = {
  overview: {
    heading: 'My Orders',
  },
}

function extractOrderHistoryData(
  data: QuerySingleHistoryOrderData[]
): HistoryOrderCardData[] {
  return data
    .map((order) => {
      return order.orderPatients.map((patient) => ({
        id: patient.id.toString(),
        couponUsed: order.coupon_code,
        location: {
          lat: order?.address?.lat?.toString() || defaultCity.lat,
          lng: order?.address?.lng?.toString() || defaultCity.lng,
        },
        date: order.created_at ? order.created_at.split('T')[0] : 'NA',
        paymentMode: order.payment_type,
        preBookingId: patient.prebooking_id
          ? patient.prebooking_id.toString()
          : '-1',
        allTests: patient.testDetailEntity.map(
          (test) => test.itemDetails.itemname
        ),
        preBookingIdDigital: order.prebooking_id_digital,
        bookedFor:
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          patient?.uhidProfile?.firstname || patient?.uhidProfile?.lastname
            ? `${patient.uhidProfile.firstname} ${patient.uhidProfile.lastname}`.trim()
            : 'Guest User',
        status:
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          patient.is_canceled
            ? 'Order Cancelled'
            : patient.uhidProfile
              ? 'Order Confirmed'
              : 'User Deleted',
        totalRate: order.total_amount,
        slot: patient.appointment_time,
      }))
    })
    .flat()
    .filter((order) => order.preBookingId !== '-1')
}

export async function getMyOrdersPageData(): Promise<MyOrdersPageData> {
  const userDetails = await getUserFromCookies()
  const data = await getMyOrdersHistory(userDetails?.phoneNumber)
  const orderHistoryItems = extractOrderHistoryData(data.data.rows)
  staticData.overview.orders = orderHistoryItems
  return staticData
}
