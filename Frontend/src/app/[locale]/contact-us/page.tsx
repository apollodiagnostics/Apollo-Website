import { Metadata } from 'next'
import { getContactUsData } from '@query/contact-us'
import {
  Banner,
  // FeatureCards,
  MapContact,
} from '@components/feature/ContactUs'
import NotFound from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getContactUsData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function ContactUs() {
  let pageData
  try {
    pageData = await getContactUsData()
  } catch {
    return <NotFound />
  }
  const {
    banner,
    contactInfo,
    // featureSection
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      <MapContact {...contactInfo} />
    </>
  )
}

export default ContactUs
