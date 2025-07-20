import React from 'react'
import { Metadata } from 'next'
import { getWomensHealthPackagesData } from '@query/womens-health-packages'
import {
  Banner,
  PackagesSection,
} from '@components/feature/WomensHealthPackages'
import NotFoundPage from '../[...not-found]/page'

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getWomensHealthPackagesData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/womens-health-packages`,
      title: 'Apollo Diagnostics',
      description: metaTags.metaDescription,
      siteName: 'Apollo Diagnostics',
      images: [
        {
          url: '/images/logo.png',
        },
      ],
    },
    robots: 'index,follow',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/womens-health-packages`,
    },
  }
}

async function WomensHealthPackagesData() {
  let pageData
  try {
    pageData = await getWomensHealthPackagesData()
  } catch {
    return <NotFoundPage />
  }
  const { banner, packageSection } = pageData

  return (
    <>
      <Banner {...banner} />
      <PackagesSection {...packageSection} />
    </>
  )
}
export default WomensHealthPackagesData
