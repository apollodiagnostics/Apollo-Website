import { defaultCity } from '@models'
import {
  getLifeStylePackagesCardsData,
  getLifeStylePackagesPageData,
} from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { extractPackagesFromQueryItem } from '@utils/query'
import { QueryItem, QuerySingleConditionDetail } from 'src/models/query.models'
import { WomenHealthPackagesPagesData } from './womens-health-packages-pages.model'

export function extractComponent(
  tests: QueryItem[],
  data: QuerySingleConditionDetail,
  cityName: string
): WomenHealthPackagesPagesData {
  return {
    banner: {
      label: data.name,
      backgroundImage: {
        src: '/images/bannerBg.png',
        alt: '',
      },
      path: `Home > Womens Health > ${data.name}`,
    },
    testSection: {
      heading: 'Book a Package',
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
    metaTitle: data.title,
    metaDescription: data.meta_description,
  }
}

export const getwomensHealthPackagesPagesData = async (
  category: number
): Promise<WomenHealthPackagesPagesData> => {
  const userDetails = await getUserFromCookies()
  const [cards, pageData] = await Promise.all([
    getLifeStylePackagesCardsData(category.toString(), 'Package'),
    getLifeStylePackagesPageData(category.toString()),
  ])
  const p = extractComponent(
    cards.data.rows,
    pageData.data.dataValues,
    userDetails?.cityName?.toLowerCase() || defaultCity.name
  )
  return p
}
