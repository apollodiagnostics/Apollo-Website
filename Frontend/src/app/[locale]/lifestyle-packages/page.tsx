import React from 'react'
import { Metadata } from 'next'
import { getLifeStylePackagesData } from '@query/lifestyle-packages'
import { PackagesSection } from '@components/feature/Home'
import {
  Banner,
  // FeatureSection,
  // PackagesSection,
} from '@components/feature/LifeStylePackages'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getLifeStylePackagesData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function LifeStylePackages() {
  let pageData
  try {
    pageData = await getLifeStylePackagesData()
  } catch {
    return <NotFoundPage />
  }
  const {
    banner,
    //  featureSection,
    packageSection,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureSection {...featureSection} /> */}
      {/* <PackagesSection {...packagesSection} /> */}
      <PackagesSection {...packageSection} />
    </>
  )
}
export default LifeStylePackages
