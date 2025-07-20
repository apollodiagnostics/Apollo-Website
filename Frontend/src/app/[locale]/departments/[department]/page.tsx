import { getDepartmentsData } from '@query/departments'
import {
  Banner,
  BioChemistryOverview,
  // FeatureSection,
  OverviewSection,
  TestsSection,
} from '@components/feature/Biochemistry'
import NotFound from '../../[...not-found]/page'

type Props = {
  params: {
    department: string
  }
}

export const revalidate = 3600
async function Departments({ params: { department } }: Props) {
  let pageData
  try {
    pageData = await getDepartmentsData(department)
  } catch {
    return <NotFound />
  }
  const {
    banner,
    testSection,
    overview,
    biochemistryImages,
    // , featureSection
  } = pageData

  return (
    <>
      <Banner {...banner} />
      {/* <FeatureSection {...featureSection} /> */}
      <BioChemistryOverview {...biochemistryImages} />
      <OverviewSection {...overview} />
      <TestsSection {...testSection} />
    </>
  )
}

export default Departments
