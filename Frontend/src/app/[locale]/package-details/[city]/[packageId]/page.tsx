import React from 'react'
import { Metadata } from 'next'
import { getPackageDetails } from '@query/package-details'
import {
  AdvancedDiabetesAssessmentSection,
  Banner,
  SimilarPackages,
} from '@components/feature/PackageDetails'
import NotFoundPage from '../../../[...not-found]/page'

type Props = {
  params: {
    packageId: string
    city: string
  }
}

export const revalidate = 3600

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { packageId, city } = params
  const metaTags = await getPackageDetails(packageId)
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/package-details`,
      title: 'Apollo Diagnostics',
      description:
        metaTags.metaDescription ??
        "Discover Apollo Diagnostics' packages. Get comprehensive diagnostics and personalized health insights with our top-rated packages.",
      images: [
        {
          url: '/images/logo.png',
        },
      ],
    },
    robots: 'index,follow',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/package-details/${city}/${packageId}`,
    },
  }
}

async function PackageDetailsPage({ params }: Props) {
  const { packageId } = params
  let pageData

  try {
    pageData = await getPackageDetails(packageId)
  } catch {
    return <NotFoundPage />
  }
  const { banner, advancedDiabetesAssessmentSection, similarPackages } =
    pageData

  return (
    <>
      <Banner {...banner} />
      <AdvancedDiabetesAssessmentSection
        {...advancedDiabetesAssessmentSection}
      />
      <SimilarPackages {...similarPackages} />
    </>
  )
}
export default PackageDetailsPage
