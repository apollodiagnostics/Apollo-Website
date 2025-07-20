import { Metadata } from 'next'
import { getPrivacyPolicyData } from '@query/privacy-policy'
import { Banner, TermsOfUse } from '@components/feature/TermsAndConditions'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getPrivacyPolicyData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function PrivacyPolicy() {
  let pageData
  try {
    pageData = await getPrivacyPolicyData()
  } catch {
    return <NotFoundPage />
  }
  const { banner, termsOfUse } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      <TermsOfUse {...termsOfUse} />
      {/* <AccordionSection {...accordionSection} /> */}
    </>
  )
}

export default PrivacyPolicy
