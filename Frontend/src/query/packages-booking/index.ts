import { defaultCity, SearchParamsData } from '@models'
import { getAllItems, getPersonalizedPackagesData } from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { extractPackagesFromQueryItem, getFilterCategories } from '@utils/query'
import { MostBookedPackagesData } from './most-booked-packages.model'

const mostBookedPackagesData: MostBookedPackagesData = {
  banner: {
    label: 'All Packages',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > All Packages',
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
    heading: 'Packages booking',
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
  condition,
  limit,
  offset,
  search,
}: SearchParamsData): Promise<MostBookedPackagesData> => {
  const userDetails = await getUserFromCookies()
  const getPersonalizedPackagesApi = getPersonalizedPackagesData('lifeStyle')
  const getAllItemsApi = getAllItems(
    { condition, limit, offset, search },
    'Package',
    userDetails?.cityId || '9'
  )

  const [allItems, filterCategories] = await Promise.all([
    getAllItemsApi,
    getPersonalizedPackagesApi,
  ])

  const allPackages = extractPackagesFromQueryItem(
    allItems.data.rows,
    userDetails?.cityName?.toLowerCase() || defaultCity.name
  )
  const allFilters = getFilterCategories(filterCategories.data)

  mostBookedPackagesData.packagesSection.packages = allPackages
  mostBookedPackagesData.packagesSection.count = allItems.data.count
  mostBookedPackagesData.packagesSection.results = `Showing ${allItems.data.count} tests found`
  mostBookedPackagesData.packagesSection.filters = allFilters

  const p = new Promise<MostBookedPackagesData>((resolve) => {
    resolve(mostBookedPackagesData)
  })
  return p
}
