import { getFindSingleTestData } from '@utils/api/dashboard'
import { QueryTest } from 'src/models/query.models'
import { TestDetailsPageData } from './blogs-page.model'

const blogsData: TestDetailsPageData = {
  banner: {
    label: 'Blogs',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Blogs',
  },
  testDetails: {
    description: '',
  },
}

function extractComponent(data: QueryTest): TestDetailsPageData {
  return {
    banner: {
      label: data.name,
      backgroundImage: blogsData.banner.backgroundImage,
      path: `Home > Find A Test Details`,
    },
    testDetails: {
      description: data.description,
    },
  }
}
export const getSingleTestPage = async (
  pageSlug: number
): Promise<TestDetailsPageData> => {
  const responseData = await getFindSingleTestData(pageSlug)
  const p = extractComponent(responseData.data.test.test)
  return p
}
