import React from 'react'
import { getLifeStylePackagesPagesData } from '@query/lifestyle-packages-pages'
import {
  Banner,
  // FeatureSection,
  TestsSection,
  OverviewSection,
} from '@components/feature/LifeStylePackagesPages'
import NotFoundPage from '../../[...not-found]/page'

type Props = {
  params: {
    category: string
  }
}

async function LifeStylePackagesCategories({ params }: Props) {
  const { category } = params
  let pageData
  try {
    pageData = await getLifeStylePackagesPagesData(
      category.split('-').pop() || '0'
    )
  } catch {
    return <NotFoundPage />
  }
  const {
    banner,
    //  featureSection,]
    overview,
    testSection,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureSection {...featureSection} /> */}
      <OverviewSection {...overview} />
      <TestsSection {...testSection} />
    </>
  )
}
export default LifeStylePackagesCategories
