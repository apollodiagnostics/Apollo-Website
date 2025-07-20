import { Metadata } from 'next'
import { getManagementTeamData } from '@query/management-team'
import {
  Banner,
  // FeatureCards,
  ManagementTeamSection,
  // Overview,
  TeamListSection,
} from '@components/feature/ManagementTeam'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const metaTags = await getManagementTeamData()
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}

async function ManagementTeam() {
  let pageData
  try {
    pageData = await getManagementTeamData()
  } catch {
    return <NotFoundPage />
  }
  const {
    banner,
    // featureSection,
    mangementTeam,
    // overviewSection,
    teamSection,
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      {/* <Overview {...overviewSection} /> */}
      <ManagementTeamSection {...mangementTeam} />
      <TeamListSection {...teamSection} />
    </>
  )
}

export default ManagementTeam
