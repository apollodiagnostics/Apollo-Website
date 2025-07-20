import React from 'react'
import { Metadata } from 'next'
import { SearchParamsData } from '@models'
import { getMostBookedPackagesPageData } from '@query/packages-booking'
import {
  Banner,
  // FeatureSection,
  PackagesSection,
} from '@components/feature/packagesBooking'
import NotFoundPage from '../[...not-found]/page'

type Props = {
  searchParams: SearchParamsData
}

export const revalidate = 3600

export function generateMetadata(): Metadata {
  return {
    title: 'All Packages - Apollo Diagnostics',
    description:
      'Book your health check-up packages easily with Apollo Diagnostics. Enjoy convenient online booking for comprehensive diagnostic services and personalized care.',
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/packages-booking`,
      title: 'Apollo Diagnostics',
      description:
        'Book your health check-up packages easily with Apollo Diagnostics. Enjoy convenient online booking for comprehensive diagnostic services and personalized care.',
      images: [
        {
          url: '/images/logo.png',
        },
      ],
    },
    robots: 'index,follow',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/packages-booking`,
    },
  }
}

async function MostBookedPackagesPage({ searchParams }: Props) {
  const { condition, limit = '12', offset = '0', search } = searchParams
  const commaSeparatedConditionId = condition
    ?.match(/-(\d+)/g)
    ?.map((match) => match.replace('-', ''))
    .join(',')

  let pageData
  try {
    pageData = await getMostBookedPackagesPageData({
      condition: commaSeparatedConditionId,
      limit,
      offset,
      search,
    })
  } catch {
    return <NotFoundPage />
  }
  const {
    banner,
    //  featureSection,
    packagesSection,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureSection {...featureSection} /> */}
      <PackagesSection {...packagesSection} />
    </>
  )
}
export default MostBookedPackagesPage
