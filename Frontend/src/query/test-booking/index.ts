import { defaultCity, InputData, SearchParamsData } from '@models'
import {
  getAllConditionByCityData,
  getAllItemsByCondition,
} from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { extractTestsFromQueryItem } from '@utils/query'
import { QueryAllConditions, QueryAllItemsData } from 'src/models/query.models'
import { TestBookingData } from './test-booking.model'

const bookTestPageData: TestBookingData = {
  banner: {
    label: 'All Tests',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > All Tests',
  },
  featureSection: {
    heading: 'Book Your Test Slot',
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
    filters: {
      heading: 'diseases',
      options: [
        {
          label: 'alochol',
          value: 3,
        },
      ],
    },
    totalTest: 32370,
    heading: 'Book a Test Online',
    results: 'Showing 6 tests found',
    tests: [],
  },
}

function extractTests(data: QueryAllConditions[]) {
  const allTests: InputData[] = data.map((item) => {
    return {
      label: item.name,
      value: item.name,
    }
  })
  return {
    heading: 'Conditions',
    options: allTests,
  }
}

function extractComponent(
  queryTests: QueryAllItemsData,
  queryFilters: QueryAllConditions[],
  cityName: string
): TestBookingData {
  return {
    testSection: {
      heading: 'BOOK A LAB TEST',
      results: `Showing ${queryTests.data.count} tests found`,
      tests: extractTestsFromQueryItem(queryTests.data.rows, cityName),
      filters: extractTests(queryFilters),
      totalTest: queryTests.data.count,
    },
    banner: bookTestPageData.banner,
    featureSection: bookTestPageData.featureSection,
  }
}

export const getTestBookingData = async ({
  condition,
  limit,
  offset,
  search,
  cityId,
}: SearchParamsData & { cityId: string }): Promise<TestBookingData> => {
  const userDetails = await getUserFromCookies()
  const [allItems, filterCategories] = await Promise.all([
    getAllItemsByCondition(
      {
        conditionName: condition,
        limit,
        offset,
        search,
        cityId: cityId || defaultCity.id.toString(),
      },
      'Test'
    ),
    getAllConditionByCityData(cityId || defaultCity.id.toString()),
  ])
  const p = extractComponent(
    allItems,
    filterCategories.data,
    userDetails?.cityName?.toLowerCase() || defaultCity.name
  )
  return p
}
