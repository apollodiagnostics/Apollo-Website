import { Metadata } from 'next'
import { FindNearestCentreSearchParams } from '@models'
import { getNearestCentreDetails } from '@query/nearest-centre'
import { LocateNearCenters } from '@components/entities/LocateNearCenters'
import { CentreForYou, PageBanner } from '@components/feature/FindNearestCentre'
import { getUserFromCookies } from '@utils/auth'
import { capitalizeWords } from '@utils/common'
import NotFoundPage from '../[...not-found]/page'

type Props = {
  searchParams: FindNearestCentreSearchParams
}

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const userDetails = await getUserFromCookies()

  const cityName = userDetails?.cityName || 'your city'
  const formattedCityName = capitalizeWords(cityName)

  return {
    title: `Diagnostic Centres in ${formattedCityName} | Best Pathology Labs Near Me`,
    description: `Find Pathology Labs and Diagnostic Centres near you in ${formattedCityName}. Get Home Sample Collection, Quality and accurate results at Apollo Diagnostics.`,
  }
}

async function FindNearestCentre({ searchParams }: Props) {
  let pageData
  try {
    pageData = await getNearestCentreDetails({
      ...searchParams,
      limit: '12',
    })
  } catch {
    return <NotFoundPage />
  }

  const { banner, centres, locateNearCentres } = pageData

  return (
    <>
      <PageBanner {...banner} />
      <LocateNearCenters {...locateNearCentres} />
      <CentreForYou {...centres} />
    </>
  )
}

export default FindNearestCentre
