import { Metadata } from 'next'
import { getOutChairmansData } from '@query/our-chairmans-profile'
import {
  AwardsSection,
  Banner,
  ChairmanQuoteSection,
  DoublePanelDescription,
  // FeatureCards,
  Overview,
} from '@components/feature/OurChairman'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getOutChairmansData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function OurChairmanSProfile() {
  let pageData
  try {
    pageData = await getOutChairmansData()
  } catch {
    return <NotFoundPage />
  }
  const {
    banner,
    // featureSection,
    quote,
    description1,
    description2,
    overview,
    awards,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      <ChairmanQuoteSection {...quote} />
      <DoublePanelDescription {...description1} />
      <AwardsSection {...awards} />
      <Overview {...overview} />
      <DoublePanelDescription {...description2} />
    </>
  )
}

export default OurChairmanSProfile
