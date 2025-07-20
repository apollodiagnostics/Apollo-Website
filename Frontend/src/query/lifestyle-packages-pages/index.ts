import { defaultCity } from '@models'
import {
  getLifeStylePackagesCardsData,
  getLifeStylePackagesPageData,
} from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { extractPackagesFromQueryItem } from '@utils/query'
import { QueryItem, QuerySingleConditionDetail } from 'src/models/query.models'
import { LifeStylePackagesPagesData } from './lifestyle-packages-pages.model'

const lifeStylePackagesData: LifeStylePackagesPagesData = {
  banner: {
    label: 'Diabetes',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Lifestyle Packages > Diabetes',
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
    heading: 'Book a Test',
    results: 'Showing 11 Results',
    tests: [],
  },
  overview: {
    heading: 'overview',
    description: '',
  },
}

export function extractComponent(
  tests: QueryItem[],
  data: QuerySingleConditionDetail,
  cityName: string
): LifeStylePackagesPagesData {
  return {
    banner: {
      label: `${data.name} Health Packages`,
      backgroundImage: {
        src: '/images/bannerBg.png',
        alt: '',
      },
      path: `Home > Lifestyle Packages > ${data.name} Health Packages`,
    },
    featureSection: lifeStylePackagesData.featureSection,
    testSection: {
      heading: 'Book a Package/Test',
      results: `Showing ${tests.length} results`,
      tests: extractPackagesFromQueryItem(tests, cityName),
    },
    overview: {
      description: data.description,
      heading: 'Overview',
      image: {
        src: `${process.env.NEXT_PUBLIC_CATEGORIES_IMAGES_HOST}${data.image}`,
        alt: 'Placeholder image',
      },
    },
  }
}

export const getLifeStylePackagesPagesData = async (
  category: string
): Promise<LifeStylePackagesPagesData> => {
  const userDetails = await getUserFromCookies()
  const [cards, pageData] = await Promise.all([
    getLifeStylePackagesCardsData(category),
    getLifeStylePackagesPageData(category),
  ])
  const p = extractComponent(
    cards.data.rows,
    pageData.data.dataValues,
    userDetails?.cityName?.toLowerCase() || defaultCity.name
  )
  return p
}
