import { getPersonalizedPackagesData } from '@utils/api/dashboard'
import { extractWomenPackageFromQueryCategory } from '@utils/query'
import { WomensHealthPackagesData } from './womens-health-packages.model'

const womensHealthPackagesData: WomensHealthPackagesData = {
  metaTitle: 'title',
  metaDescription: 'Description',
  banner: {
    label: 'Womens Health Packages',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Womens Health Packages',
  },
  packageSection: {
    cardData: [],
  },
}

export const getWomensHealthPackagesData =
  async (): Promise<WomensHealthPackagesData> => {
    const responseData = await getPersonalizedPackagesData(
      'women-health-packages'
    )
    const allCategories = extractWomenPackageFromQueryCategory(
      responseData.data
    )
    const data: WomensHealthPackagesData = {
      banner: womensHealthPackagesData.banner,
      packageSection: {
        cardData: [
          {
            packages: allCategories,
          },
        ],
      },
      metaTitle: responseData.data[0].title,
      metaDescription: responseData.data[0].meta_description,
    }
    return data
  }
