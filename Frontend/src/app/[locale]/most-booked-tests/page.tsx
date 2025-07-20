import React from 'react'
import { Metadata } from 'next'
import { SearchParamsData } from '@models'
import { getMostBookedTestPageData } from '@query/most-booked-tests'
import {
  Banner,
  // FeatureSection,
  TestsSection,
} from '@components/feature/MostBookedTests'
import NotFoundPage from '../[...not-found]/page'

type Props = {
  searchParams: SearchParamsData
}

export const revalidate = 3600

export function generateMetadata(): Metadata {
  return {
    title: 'Most Booked Tests - Apollo Diagnostics',
    description:
      'Explore the most frequently booked diagnostic tests at Apollo Diagnostics. Ensure your health with our reliable and accurate testing services.',
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/most-booked-tests`,
      title: 'Apollo Diagnostics',
      description:
        'Explore the most frequently booked diagnostic tests at Apollo Diagnostics. Ensure your health with our reliable and accurate testing services.',
      images: [
        {
          url: '/images/logo.png',
        },
      ],
    },
    robots: 'index,follow',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/most-booked-tests`,
    },
  }
}

async function MostBookedTestPage({ searchParams }: Props) {
  const { search } = searchParams
  let pageData
  try {
    pageData = await getMostBookedTestPageData({ search })
  } catch {
    return <NotFoundPage />
  }
  const {
    banner,
    // featureSection,
    testSection,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureSection {...featureSection} /> */}
      <TestsSection {...testSection} />
    </>
  )
}
export default MostBookedTestPage
