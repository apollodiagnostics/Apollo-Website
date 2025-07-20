import { Metadata } from 'next'
import { getCentreDetails } from '@query/centre-details'
import { PageBanner } from '@components/entities'
import {
  // FeatureSection,
  CentreOverview,
  OtherLabsAndCenters,
  NearbyLocalities,
  BuisnessHours,
  NearbyTags,
} from '@components/feature/CentreDetails'
import { RatingCard } from '@components/feature/CentreDetails/ratingSection'
import { capitalizeWords } from '@utils/common'
import NotFoundPage from 'src/app/[locale]/[...not-found]/page'

type Props = {
  params: {
    centreId: string
  }
}

export function generateMetadata({
  params,
}: {
  params: { centreId?: string }
}): Promise<Metadata> {
  const slug = params.centreId

  if (!slug || typeof slug !== 'string') {
    return Promise.resolve({
      title: `Best Diagnostic Centre Near You | Apollo Diagnostics`,
      description: `A leading diagnostics centre and pathology lab near you, offering affordable services. Book Today.`,
      keywords: `blood test near me, pathology lab near me`,
    })
  }

  const slugParts = slug.split('-')

  if (slugParts.length < 4) {
    return Promise.resolve({
      title: `Best Diagnostic Centre in Your City | Apollo Diagnostics`,
      description: `Book diagnostics tests at affordable prices. Trusted pathology lab near you.`,
      keywords: `blood test near me, pathology lab, diagnostics near me`,
    })
  }

  const formattedCity = capitalizeWords(slugParts[0])
  const localityParts = slugParts.slice(2, slugParts.length - 1)
  const formattedLocality = capitalizeWords(localityParts.join(' '))

  return Promise.resolve({
    title: `Best Diagnostic Centre in ${formattedLocality}, ${formattedCity} | Apollo Diagnostics`,
    description: `Diagnostics Centre in ${formattedCity} - Serving areas like ${formattedLocality}. A leading Diagnostics centre & Pathology lab offering affordable diagnostic services. Book Today.`,
    keywords: `blood test near me, blood test in ${formattedCity}, pathology lab in ${formattedCity}, blood test in ${formattedLocality}`,
  })
}

async function CentreDetails({ params: { centreId } }: Props) {
  let pageData
  try {
    pageData = await getCentreDetails(centreId)
  } catch {
    return <NotFoundPage />
  }
  const {
    banner,
    buisness,
    labs,
    nearbyLocalities,
    overView,
    // featureSection,
    tags,
    ratingSection,
  } = pageData

  return (
    <>
      <PageBanner {...banner} />
      {/* <FeatureSection {...featureSection} /> */}
      <CentreOverview {...overView} />
      <RatingCard {...ratingSection} />
      <BuisnessHours {...buisness} />
      <OtherLabsAndCenters {...labs} />
      <NearbyLocalities {...nearbyLocalities} />
      <NearbyTags {...tags} />
    </>
  )
}

export default CentreDetails
