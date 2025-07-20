import { SearchParamsData } from '@models'
import { getDownloadReportData } from '@query/download-report'
import {
  Banner,
  TestsSection,
  DownloadReportBy,
} from '@components/feature/DownloadReport'
import NotFoundPage from '../[...not-found]/page'

type Props = {
  searchParams: SearchParamsData
}

export const revalidate = 3600
async function DownloadReport({ searchParams }: Props) {
  const { condition, limit = '12', offset = '0' } = searchParams
  let pageData
  try {
    pageData = await getDownloadReportData({ condition, limit, offset })
  } catch {
    return <NotFoundPage />
  }
  const { banner, testSection } = pageData

  return (
    <>
      <Banner {...banner} />
      <DownloadReportBy />
      <TestsSection {...testSection} />
    </>
  )
}

export default DownloadReport
