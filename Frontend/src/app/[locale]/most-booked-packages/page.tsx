import React from 'react'
import { Metadata } from 'next'
import { SearchParamsData } from '@models'
import { getMostBookedPackagesPageData } from '@query/most-booked-packages'
import {
  Banner,
  // FeatureSection,
  PackagesSection,
} from '@components/feature/MostBookedPackages'
import NotFoundPage from '../[...not-found]/page'

type Props = {
  searchParams: SearchParamsData
}

export const revalidate = 3600

export function generateMetadata(): Metadata {
  return {
    title: 'Most Booked Packages - Apollo Diagnostics',
    description:
      "Discover Apollo Diagnostics' most popular health check-up packages. Get comprehensive diagnostics and personalized health insights with our top-rated packages.",
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/most-booked-packages`,
      title: 'Apollo Diagnostics',
      description:
        "Discover Apollo Diagnostics' most popular health check-up packages. Get comprehensive diagnostics and personalized health insights with our top-rated packages.",
      images: [
        {
          url: '/images/logo.png',
        },
      ],
    },
    robots: 'index,follow',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/most-booked-packages`,
    },
  }
}

async function MostBookedPackagesPage({ searchParams }: Props) {
  const { search } = searchParams
  let pageData
  try {
    pageData = await getMostBookedPackagesPageData({ search })
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
