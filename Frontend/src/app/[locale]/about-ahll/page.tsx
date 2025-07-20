import type { Metadata } from 'next'
import { getApolloAHLLData } from '@query/apollo-ahll'
import {
  Banner,
  HealthAndLifestyle,
  // BlogsSection,
  // FeatureCards,
  // HealthAndLifestyle,
  Highlights,
  Overview,
} from '@components/feature/ApolloAHLL'
import { BlogsSection } from '@components/feature/Home'
import NotFound from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getApolloAHLLData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function AboutAHLL() {
  let pageData
  try {
    pageData = await getApolloAHLLData()
  } catch {
    return <NotFound />
  }
  const {
    banner,
    // featureSection,
    healthAndLifestyle,
    highlights,
    overviewSection,
    blogs,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      <Overview {...overviewSection} />
      <HealthAndLifestyle {...healthAndLifestyle} />
      <Highlights {...highlights} />
      <BlogsSection {...blogs} />
    </>
  )
}

export default AboutAHLL
