import React from 'react'
import { getMyOrdersPageData } from '@query/my-orders'
import { OrdersOverview } from '@components/feature/MyOrders'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

async function MyOrdersPage() {
  let pageData
  try {
    pageData = await getMyOrdersPageData()
  } catch {
    return <NotFoundPage />
  }
  const { overview } = pageData

  return <OrdersOverview {...overview} />
}

export default MyOrdersPage
