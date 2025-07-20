import React from 'react'
import { Metadata } from 'next'
import { getWomensHealthData } from '@query/womens-heatlh'
import { Banner, PackagesSection } from '@components/feature/WomensHealth'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getWomensHealthData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/womens-health`,
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
      canonical: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/womens-health`,
    },
  }
}

async function WomensHealth() {
  let pageData
  try {
    pageData = await getWomensHealthData()
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
export default WomensHealth
