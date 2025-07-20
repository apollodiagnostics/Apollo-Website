import { defaultCity, SearchParamsData } from '@models'
import { getAllItems, getFilterCategoriesData } from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { extractSlugDataFromString } from '@utils/common'
import { extractTestsFromQueryItem, getFilterCategories } from '@utils/query'
import { QueryAllItemsData, QueryCondition } from 'src/models/query.models'
import { TestBookingData } from './health-check-packages.model'

const healthCheckPackagesData: TestBookingData = {
  banner: {
    label: 'Health Checkup Packages',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Health Checkup Packages',
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

function extractComponent({
  queryTests,
  queryFilters,
  cityName,
  citySlug,
}: {
  queryTests: QueryAllItemsData
  queryFilters: QueryCondition[]
  cityName: string
  citySlug: string
}): TestBookingData {
  return {
    testSection: {
      heading: `BOOK HEALTH PACKAGES IN ${citySlug.split('-')[0].toUpperCase()}`,
      results: `Showing ${queryTests.data.count} tests found`,
      tests: extractTestsFromQueryItem(queryTests.data.rows, cityName),
      filters: getFilterCategories(queryFilters),
      totalTest: queryTests.data.count,
    },
    banner: healthCheckPackagesData.banner,
    featureSection: healthCheckPackagesData.featureSection,
  }
}

export const getHealthCheckPackagesData = async ({
  condition,
  limit,
  offset,
  search,
  citySlug,
}: SearchParamsData): Promise<TestBookingData> => {
  const userDetails = await getUserFromCookies()
  const { id: cityId } = extractSlugDataFromString(citySlug || '')
  const { id: conditionId } = extractSlugDataFromString(condition || '')

  const [allItems, filterCategories] = await Promise.all([
    getAllItems(
      {
        condition: conditionId || undefined,
        limit,
        offset,
        search,
      },
      'Package',
      cityId || defaultCity.id.toString()
    ),
    getFilterCategoriesData(),
  ])
  const p = extractComponent({
    queryTests: allItems,
    queryFilters: filterCategories.data,
    cityName: userDetails?.cityName?.toLowerCase() || defaultCity.name,
    citySlug: citySlug || '',
  })
  return p
}
