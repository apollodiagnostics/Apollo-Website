import { Metadata } from 'next'
import { getDoctorsCornerData } from '@query/doctors-corner'
import {
  Banner,
  // FeatureCards,
  MonthlyEdition,
  // Overview,
} from '@components/feature/DoctorsCorner'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getDoctorsCornerData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function DoctorsCorner() {
  let pageData
  try {
    pageData = await getDoctorsCornerData()
  } catch {
    return <NotFoundPage />
  }
  const {
    banner,
    // featureSection,
    // overview,
    monthlyEdition,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      {/* <Overview {...overview} /> */}
      <MonthlyEdition {...monthlyEdition} />
    </>
  )
}

export default DoctorsCorner
