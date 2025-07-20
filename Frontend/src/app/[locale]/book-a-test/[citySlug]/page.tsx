import React from 'react'
import { Metadata } from 'next'
import { SearchParamsData } from '@models'
import { getTestBookingData } from '@query/book-a-test'
import { Banner, TestsSection } from '@components/feature/TestBooking'
import { capitalizeWords, extractSlugDataFromString } from '@utils/common'
import NotFoundPage from '../../[...not-found]/page'

type Props = {
  searchParams: SearchParamsData
  params: {
    citySlug: string
  }
}

export const revalidate = 3600

export function generateMetadata({ params: { citySlug } }: Props): Metadata {
  const { name: cityName } = extractSlugDataFromString(citySlug)
  const formattedCityName = capitalizeWords(cityName)
  return {
    title: `Blood Test Near Me & Pathology Lab in ${formattedCityName} | Apollo Diagnostics`,
    description: `Apollo Diagnostic offers a wide range of pathology lab tests in ${formattedCityName} & blood tests. Know about the pathology lab & diagnostics centre nearby.`,
    keywords: `blood test near me, blood test in ${formattedCityName}, pathology lab in ${formattedCityName}`,
  }
}

async function BookATest({ searchParams, params: { citySlug } }: Props) {
  const { condition, limit = '12', offset = '0', search } = searchParams
  let pageData
  try {
    pageData = await getTestBookingData({
      condition,
      limit,
      offset,
      search,
      citySlug,
    })
  } catch {
    return <NotFoundPage />
  }
  const { banner, testSection } = pageData
  return (
    <>
      <Banner {...banner} />
      <TestsSection {...testSection} />
    </>
  )
}
export default BookATest
