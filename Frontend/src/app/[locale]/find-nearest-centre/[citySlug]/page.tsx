import { Metadata } from 'next'
import { FindNearestCentreSearchParams } from '@models'
import { getNearestCentreDetailsByCity } from '@query/nearest-centre'
import { CentreForYou, PageBanner } from '@components/feature/FindNearestCentre'
import { capitalizeWords } from '@utils/common'
import NotFoundPage from '../../[...not-found]/page'

type Props = {
  searchParams: FindNearestCentreSearchParams
  params: {
    citySlug: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  const rawCityName = params.citySlug.split('-')[0]
  const formattedCityName = capitalizeWords(rawCityName)
  return {
    title: `Diagnostic Centres in ${formattedCityName} | Best Pathology Labs Near Me`,
    description: `Find Pathology Labs and Diagnostic Centres near you in ${formattedCityName}. Get Home Sample Collection, Quality and accurate results at Apollo Diagnostics.`,
  }
}

async function FindNearestCentre({
  searchParams,
  params: { citySlug },
}: Props) {
  let pageData
  try {
    pageData = await getNearestCentreDetailsByCity(
      {
        ...searchParams,
        limit: '12',
      },
      citySlug
    )
  } catch {
    return <NotFoundPage />
  }

  const { banner, centres } = pageData

  return (
    <>
      <PageBanner {...banner} />
      <CentreForYou {...centres} />
    </>
  )
}

export default FindNearestCentre
