import { getFaqsData } from '@query/faqs'
import {
  Banner,
  FaqSection,
  // FeatureCards
} from '@components/feature/Faq'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

async function Faqs() {
  let pageData
  try {
    pageData = await getFaqsData()
  } catch {
    return <NotFoundPage />
  }
  const { banner, accordionSection } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      <FaqSection {...accordionSection} />
    </>
  )
}

export default Faqs
