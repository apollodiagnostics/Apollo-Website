import { defaultCity, SearchParamsData } from '@models'
import { getAllItemsData } from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { extractPackagesFromQueryItem } from '@utils/query'
import { SearchResultsData } from './search-results.model'

const searchResultsData: SearchResultsData = {
  banner: {
    label: 'Search Result',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Search Result',
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
    heading: 'Tests / Packages',
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

export const getSearchResultsPageData = async ({
  search,
  limit,
  offset,
}: SearchParamsData): Promise<SearchResultsData> => {
  const userDetails = await getUserFromCookies()
  const allItems = await getAllItemsData({
    limit,
    offset,
    search,
    cityId: userDetails?.cityId || '9',
  })
  searchResultsData.banner.label = `Search Results for '${search || ''}'`
  searchResultsData.packagesSection.packages = extractPackagesFromQueryItem(
    allItems.data.rows,
    userDetails?.cityName?.toLowerCase() || defaultCity.name
  )
  searchResultsData.packagesSection.results = `Showing ${allItems.data.count} tests found`
  searchResultsData.packagesSection.count = allItems.data.count
  const p = new Promise<SearchResultsData>((resolve) => {
    resolve(searchResultsData)
  })
  return p
}
