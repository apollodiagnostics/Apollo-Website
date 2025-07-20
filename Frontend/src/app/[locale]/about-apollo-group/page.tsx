import { Metadata } from 'next'
import { getApolloGroupData } from '@query/apllo-group'
import {
  Banner,
  AdvertisementSection,
  InsightsSection,
  VisionAndMission,
  Initiatives,
} from '@components/feature/ApolloGroup'
import NotFound from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getApolloGroupData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function ApolloGroup() {
  let pageData
  try {
    pageData = await getApolloGroupData()
  } catch {
    return <NotFound />
  }
  const { banner, advertisement, insights, vissionAndMission, initiatives } =
    pageData

  return (
    <>
      <Banner {...banner} />
      <AdvertisementSection {...advertisement} />
      <VisionAndMission {...vissionAndMission} />
      <InsightsSection {...insights} />
      <Initiatives {...initiatives} />
    </>
  )
}

export default ApolloGroup
