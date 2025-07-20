import { Metadata } from 'next'
import { getCovidDisclaimerData } from '@query/covid-disclaimer'
import {
  Banner,
  // FeatureCards,
  OverviewSection,
} from '@components/feature/CovidDisclaimer'
import NotFound from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getCovidDisclaimerData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function CovidDisclaimer() {
  let pageData
  try {
    pageData = await getCovidDisclaimerData()
  } catch {
    return <NotFound />
  }
  const {
    banner,
    // featureSection,
    overviewSection,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      <OverviewSection {...overviewSection} />
    </>
  )
}

export default CovidDisclaimer
