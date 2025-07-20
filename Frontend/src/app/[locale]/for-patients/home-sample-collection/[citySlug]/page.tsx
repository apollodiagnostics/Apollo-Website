import React from 'react'
import type { Metadata } from 'next'
import { SearchParamsData } from '@models'
import { getHomeSampleData } from '@query/home-sample-collection'
import {
  Banner,
  DiagnosisSection,
  // Feature,
  HomeSampleOverview,
  TestsSection,
} from '@components/feature/HomeSampleCollection'
import { capitalizeWords, extractSlugDataFromString } from '@utils/common'
import NotFoundPage from '../../../[...not-found]/page'

type Props = {
  searchParams: SearchParamsData
  params: {
    citySlug: string
  }
}

export const revalidate = 3600

export function generateMetadata({ params: { citySlug } }: Props): Metadata {
  const { name } = extractSlugDataFromString(citySlug)

  const formattedCityName = capitalizeWords(name)
  return {
    title: `Blood Test at Home - Blood Sample Collection in ${formattedCityName} | Apollo Diagnostics`,
    description: `Get your Blood Test done in the comfort of your Home in ${formattedCityName}. by Apollo Diagnostics. We offers the convenience of blood sample collection at Home. Book your home visit now in ${formattedCityName}.`,
  }
}

async function HomeSampleCollection({
  searchParams,
  params: { citySlug },
}: Props) {
  const { id: cityId } = extractSlugDataFromString(citySlug)
  const { condition, limit = '10', offset = '0', search } = searchParams
  let pageData
  try {
    pageData = await getHomeSampleData({
      condition,
      limit,
      offset,
      cityId,
      search,
    })
  } catch {
    return <NotFoundPage />
  }
  const {
    banner,
    testSection,
    diagnosisSection,
    // featureSection
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <Feature {...featureSection} /> */}
      <HomeSampleOverview />
      <DiagnosisSection {...diagnosisSection} />
      <TestsSection {...testSection} />
    </>
  )
}
export default HomeSampleCollection
