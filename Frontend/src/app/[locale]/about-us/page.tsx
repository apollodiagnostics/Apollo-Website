import { Metadata } from 'next'
import { getAboutUsData } from '@query/about-us'
import {
  Banner,
  ClientTestimonials,
  ExperienceSection,
  InsightsSection,
  Overview,
} from '@components/feature/AboutUs'
import NotFound from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getAboutUsData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function AboutUs() {
  let pageData
  try {
    pageData = await getAboutUsData()
  } catch {
    return <NotFound />
  }
  const { banner, overview, insights, clientTestimonials, experience } =
    pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      <Overview {...overview} />
      <ExperienceSection {...experience} />
      <InsightsSection {...insights} />
      <ClientTestimonials {...clientTestimonials} />
    </>
  )
}

export default AboutUs
