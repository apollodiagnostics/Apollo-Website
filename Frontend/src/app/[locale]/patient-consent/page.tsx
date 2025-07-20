import { Metadata } from 'next'
import { getPatientConsentData } from '@query/patient-consent'
import {
  Banner,
  // FeatureCards,
  PatientConsentInformation,
} from '@components/feature/PatientConsent'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getPatientConsentData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function PatientConsent() {
  let pageData
  try {
    pageData = await getPatientConsentData()
  } catch {
    return <NotFoundPage />
  }
  const { banner, information } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      <PatientConsentInformation {...information} />
    </>
  )
}

export default PatientConsent
