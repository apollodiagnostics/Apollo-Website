import React from 'react'
import { getBookWalkInData } from '@query/book-walk-in'
import {
  Banner,
  BookOnlineSlots,
  HighLights,
  BookTest,
  WalkInConditions,
} from '@components/feature/BookWalKIn'
import NotFound from '../[...not-found]/page'

export const revalidate = 3600

async function BookWalkInPage() {
  let pageData
  try {
    pageData = await getBookWalkInData()
  } catch {
    return <NotFound />
  }

  const {
    banner,
    bookWalkIn,
    bookOnline,
    highlights,
    // termsAndConditions,
    walkInCondtions,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      <BookTest {...bookWalkIn} />
      <BookOnlineSlots {...bookOnline} />
      <HighLights {...highlights} />
      {/* <BookOnlineSlots {...termsAndConditions} /> */}
      <WalkInConditions {...walkInCondtions} />
    </>
  )
}
export default BookWalkInPage
