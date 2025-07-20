import React from 'react'
import { Metadata } from 'next'
import { getPackageDetails } from '@query/package-details'
import {
  AdvancedDiabetesAssessmentSection,
  Banner,
  SimilarPackages,
} from '@components/feature/PackageDetails'
import { capitalizeWords } from '@utils/common'
import NotFoundPage from '../../../[...not-found]/page'

type Props = {
  params: {
    testid: string
    city: string
  }
}

export const revalidate = 3600

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { testid, city } = params
  const metaTags = await getPackageDetails(testid)

  const formattedCityName = capitalizeWords(city)
  return {
    title: `${metaTags.advancedDiabetesAssessmentSection.testDetailsData?.title} Test in ${formattedCityName} | Apollo Diagnostics`,
    description: metaTags.metaDescription,
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/test-details`,
      title: 'Apollo Diagnostics',
      description:
        metaTags.metaDescription ??
        "Discover Apollo Diagnostics' tests. Get comprehensive diagnostics and personalized health insights with our top-rated tests.",
      images: [
        {
          url: '/images/logo.png',
        },
      ],
    },
    robots: 'index,follow',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/test-details/${city}/${testid}`,
    },
  }
}

async function PackageDetailsPage({ params }: Props) {
  const { testid } = params
  console.log(testid, 'this is page ID')

  let pageData
  try {
    pageData = await getPackageDetails(testid)
  } catch {
    return <NotFoundPage />
  }
  const { banner, advancedDiabetesAssessmentSection, similarPackages } =
    pageData
  const bannerData = {
    ...banner,
    path: 'Home > Test Details',
  }
  return (
    <>
      <Banner {...bannerData} />
      <AdvancedDiabetesAssessmentSection
        {...advancedDiabetesAssessmentSection}
      />
      <SimilarPackages {...similarPackages} />
    </>
  )
}
export default PackageDetailsPage
