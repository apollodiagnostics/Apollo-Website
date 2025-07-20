import { defaultCity, SearchParamsData } from '@models'
import {
  getFilterCategoriesData,
  getMostBookedItems,
} from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import {
  extractPackagesFromMostBookedItems,
  getFilterCategories,
} from '@utils/query'
import { MostBookedTestsData } from './most-booked-tests.model'

const mostBookedTestsData: MostBookedTestsData = {
  banner: {
    label: 'Most Booked Tests',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Most Booked Tests',
  },
  featureSection: {
    heading: 'Feature Section',
    featureCards: [
      {
        icon: {
          src: '/images/prescription.png',
          alt: '',
        },
        heading: 'Have a Prescription?',
        description: 'Upload and book your tests',
        link: '/book-a-test',
      },
      {
        icon: {
          src: '/images/feature3.png',
          alt: '',
        },
        heading: 'Call us to book your tests',
        description: 'Our team of experts will guide you',
        link: 'tel:1919191919',
      },
      {
        icon: {
          src: '/images/whatsapp.png',
          alt: '',
        },
        heading: 'WhatsApp Booking',
        description: 'Text us on WhatsApp to book a test',
        link: 'https://api.whatsapp.com/send?phone=1010101010',
      },
    ],
  },
  testSection: {
    filters: { heading: 'diseases', options: [{ label: 'alcohol', value: 3 }] },
    totalTest: 32370,
    heading: 'Most Booked Tests',
    results: 'Showing 6 tests found',
    tests: [],
  },
}

export const getMostBookedTestPageData = async ({
  search,
}: SearchParamsData): Promise<MostBookedTestsData> => {
  const userDetails = await getUserFromCookies()

  const [allItems, filterCategories] = await Promise.all([
    getMostBookedItems({ cityId: userDetails?.cityId || '9', search }, 'Test'),
    getFilterCategoriesData(),
  ])
  mostBookedTestsData.testSection.tests = extractPackagesFromMostBookedItems(
    allItems.data,
    userDetails?.cityName?.toLowerCase() || defaultCity.name
  )
  mostBookedTestsData.testSection.results = `Showing ${allItems.data.length} tests found`
  mostBookedTestsData.testSection.totalTest = allItems.data.length
  mostBookedTestsData.testSection.filters = getFilterCategories(
    filterCategories.data
  )
  const p = new Promise<MostBookedTestsData>((resolve) => {
    resolve(mostBookedTestsData)
  })
  return p
}
