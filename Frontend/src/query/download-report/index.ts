import { SearchParamsData } from '@models'
import { getAllItems } from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { extractTestsFromQueryItem } from '@utils/query'
import { QueryAllItemsData } from 'src/models/query.models'
import { DownloadReportData } from './download-report.model'

function extractComponent(
  queryTests: QueryAllItemsData,
  cityName: string
): DownloadReportData {
  return {
    testSection: {
      heading: 'All Tests',
      results: `Showing ${queryTests.data.count} tests found`,
      tests: extractTestsFromQueryItem(queryTests.data.rows, cityName),
      totalTests: queryTests.data.count,
    },
    banner: {
      label: 'Download Report',
      backgroundImage: {
        src: '/images/bannerBg.png',
        alt: '',
      },
      path: 'Home > Download Report',
    },
  }
}

export const getDownloadReportData = async ({
  condition,
  limit,
  offset,
}: SearchParamsData): Promise<DownloadReportData> => {
  const userDetails = await getUserFromCookies()
  const tests = await getAllItems(
    { condition, limit, offset },
    'Test',
    userDetails?.cityId || '9'
  )
  const p = extractComponent(tests, userDetails.cityName)
  return p
}
