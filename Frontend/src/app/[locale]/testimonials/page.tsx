import { Metadata } from 'next'
import { getTestimonialsPageData } from '@query/testimonials'
import {
  Banner,
  ClientTestimonials,
  // FeatureCards,
  FeedbackSection,
  TestimonialsOverview,
} from '@components/feature/Testimonials'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getTestimonialsPageData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function Testimonials() {
  let pageData
  try {
    pageData = await getTestimonialsPageData()
  } catch {
    return <NotFoundPage />
  }
  const {
    banner,
    overview,
    clientTestimonials,
    feedbacks,
    //  featureSection
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      <TestimonialsOverview {...overview} />
      <ClientTestimonials {...clientTestimonials} />
      <FeedbackSection {...feedbacks} />
    </>
  )
}

export default Testimonials
