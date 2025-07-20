import { Metadata } from 'next'
import { getTermsAndConditionsData } from '@query/terms-and-conditions'
import { Banner, TermsOfUse } from '@components/feature/TermsAndConditions'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getTermsAndConditionsData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function TermsAndConditions() {
  let pageData
  try {
    pageData = await getTermsAndConditionsData()
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

export default TermsAndConditions
