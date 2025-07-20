import { Metadata } from 'next'
import { getCareerData } from '@query/career'
import {
  Banner,
  CareerOverview,
  OurCulture,
  // FeatureCards,
  WhyJoinUs,
  WorkWithUsSection,
} from '@components/feature/Career'
import NotFound from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getCareerData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function Career() {
  let pageData
  try {
    pageData = await getCareerData()
  } catch {
    return <NotFound />
  }
  const {
    banner,
    // featureSection,
    overviewSection,
    whyJoinUs,
    workWithUs,
    ourCulture,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      <CareerOverview {...overviewSection} />
      <WorkWithUsSection {...workWithUs} />
      <WhyJoinUs {...whyJoinUs} />
      <OurCulture {...ourCulture} />
      {/* <OpeningsSection {...openingSection} /> */}
    </>
  )
}

export default Career
