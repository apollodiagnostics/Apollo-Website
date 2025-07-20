import { Metadata } from 'next'
import { getFranchisePageData } from '@query/franchise'
import {
  AdvertisementSection,
  Enquire,
  FAQSection,
  InsightsSection,
  WhoWeAre,
  Banner,
  FeaturesSection,
} from '@components/feature/Franchise'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getFranchisePageData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function Franchise() {
  let pageData
  try {
    pageData = await getFranchisePageData()
  } catch {
    return <NotFoundPage />
  }
  const {
    banner,
    ourReach,
    advertisementSection1,
    whoWeAre,
    enquire,
    FAQ,
    featuresSection,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      <AdvertisementSection {...advertisementSection1} />
      <Enquire {...enquire} />
      <WhoWeAre {...whoWeAre} />
      <InsightsSection {...ourReach} />
      <FeaturesSection {...featuresSection} />
      <FAQSection {...FAQ} />
      {/* <AdvertisementSection {...advertisementSection2} /> */}
      {/* <ForBuisnessPartners {...forBuisnessPartners} /> */}
    </>
  )
}

export default Franchise
