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
import { MostBookedPackagesData } from './most-booked-packages.model'

const mostBookedPackagesData: MostBookedPackagesData = {
  banner: {
    label: 'Most Booked Packages',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Most Booked Packages',
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
  packagesSection: {
    count: 32370,
    heading: 'Most Booked Packages',
    results: 'Showing 6 tests found',
    packages: [],
    filters: {
      heading: 'Disease Type',
      options: [
        {
          label: 'Diabetes',
          value: 12,
        },
        {
          label: 'Alcohol Impact',
          value: 13,
        },
        {
          label: 'Bone Health',
          value: 14,
        },
        {
          label: 'Depression',
          value: 15,
        },
      ],
    },
  },
}

export const getMostBookedPackagesPageData = async ({
  search,
}: SearchParamsData): Promise<MostBookedPackagesData> => {
  const userDetails = await getUserFromCookies()

  const getAllFiltersApi = getFilterCategoriesData()
  const getAppItemsApi = getMostBookedItems(
    { cityId: userDetails?.cityId || '9', search },
    'Package'
  )

  const [allItems, filterCategories] = await Promise.all([
    getAppItemsApi,
    getAllFiltersApi,
  ])

  const allFilters = getFilterCategories(filterCategories.data)
  const allPackages = extractPackagesFromMostBookedItems(
    allItems.data,
    userDetails?.cityName?.toLowerCase() || defaultCity.name
  )

  mostBookedPackagesData.packagesSection.packages = allPackages
  mostBookedPackagesData.packagesSection.count = allItems.data.length
  mostBookedPackagesData.packagesSection.results = `Showing ${allItems.data.length} tests found`
  mostBookedPackagesData.packagesSection.filters = allFilters

  const p = new Promise<MostBookedPackagesData>((resolve) => {
    resolve(mostBookedPackagesData)
  })
  return p
}
