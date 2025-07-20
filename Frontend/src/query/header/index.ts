import { citySlugPlaceholder } from '@models'
import {
  getAllCities,
  getAllConditionByCityData,
  getPersonalizedPackagesData,
} from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { extractCityInfoFromQuery } from '@utils/query'
import { QueryAllConditions, QueryCondition } from 'src/models/query.models'
import { HeaderData, LinkData } from './header.model'

export type { HeaderData }
const headerData: HeaderData = {
  mainHeaderData: {
    headerWithMenu: {
      'Health Risks': [],
      'Health Conditions': [],
      'Health Check Packages': [
        {
          label: 'All Packages',
          link: `/health-check-packages/${citySlugPlaceholder}`,
        },
        {
          label: 'LifeStyle Packages',
          link: '/lifestyle-packages',
        },
        {
          label: 'Men Health',
          link: '/mens-health',
        },
        {
          label: 'Women Health',
          link: '/womens-health',
        },
        // {
        //   label: 'Womens Health Packages',
        //   link: '/womens-health-packages',
        // },
      ],
    },

    headerWithoutMenu: [
      {
        label: 'Book A Test',
        link: `/book-a-test/${citySlugPlaceholder}`,
      },
      {
        label: 'Find Nearest Centre',
        link: `/find-nearest-centre`,
      },
      // { label: 'Doctor's Corner', link: '/doctors-corner' },
      {
        label: 'Franchise',
        link: '/franchise',
      },
    ],
    downloadReport: {
      label: 'Download Report',
      link: '/download-report',
    },
    blogs: {
      label: 'Blogs',
      link: '/blogs',
    },
    profiles: [
      {
        label: 'Profiles',
        link: '/profiles',
      },
      {
        label: 'My Orders',
        link: '/my-orders',
      },
      {
        label: 'Logout',
        link: '/logout',
      },
    ],
  },
  topHeaderData: {
    logo: '/images/logo.png',
    locations: [
      { label: 'noida', value: 'ss' },
      { label: 'delhi', value: 'ss' },
    ],
    phoneNo: '040-4444-2424',
    contact: {
      call: '040-4444-2424',
      whatsapp: '918978689444',
    },
  },
}

export function getLifeStyleCategoriesData(data: QueryCondition[]): LinkData[] {
  const lifeStyleCategories: LinkData[] = data.map((item) => {
    return {
      label: item.name,
      link: `/lifestyle-packages/${item.slug}-${item.id}`,
    }
  })
  return lifeStyleCategories
}

export function getHealthRisks(data: QueryAllConditions[]): LinkData[] {
  const lifeStyleCategories: LinkData[] = data.map((item) => {
    return {
      label: item.name,
      link: `/test-booking/${citySlugPlaceholder}?condition=${item.name}`,
    }
  })
  // lifeStyleCategories.unshift({
  //   label: 'All Tests',
  //   link: `/test-booking/${citySlugPlaceholder}`,
  // })
  return lifeStyleCategories
}

export const getHeader = async (): Promise<HeaderData> => {
  const userDetails = await getUserFromCookies()
  headerData.topHeaderData.locations = extractCityInfoFromQuery(
    (await getAllCities()).data.rows
  )

  const lifeStylePackagesCategories =
    await getPersonalizedPackagesData('lifestyle')
  const data = headerData.mainHeaderData.headerWithMenu
  data['Health Conditions'] = getLifeStyleCategoriesData(
    lifeStylePackagesCategories.data
  )
  const healthRisks = await getAllConditionByCityData(
    userDetails?.cityId || '9'
  )
  const healthRisksData = headerData.mainHeaderData.headerWithMenu
  healthRisksData['Health Risks'] = getHealthRisks(healthRisks.data)

  const p = new Promise<HeaderData>((resolve) => {
    resolve(headerData)
  })

  return p
}
