import React from 'react'
import { Metadata } from 'next'
import { getMensHealthData } from '@query/mens-health'
import { Banner, PackagesSection } from '@components/feature/MensHealth'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getMensHealthData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/mens-health`,
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
      canonical: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/mens-health`,
    },
  }
}

async function MensHealth() {
  let pageData
  try {
    pageData = await getMensHealthData()
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
export default MensHealth
