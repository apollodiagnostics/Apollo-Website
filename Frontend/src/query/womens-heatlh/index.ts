import { getPersonalizedPackagesData } from '@utils/api/dashboard'
import { extractWomenHealthPackageFromQueryCategory } from '@utils/query'
import { WomensHealthData } from './womens-health.model'

const womensHealthData: WomensHealthData = {
  metaTitle: 'meta title',
  metaDescription: 'description',
  banner: {
    label: 'Women Health',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Women Health Packages',
  },
  packageSection: {
    cardData: [],
  },
}

export const getWomensHealthData = async (): Promise<WomensHealthData> => {
  const responseData = await getPersonalizedPackagesData('women')
  const allCategories = extractWomenHealthPackageFromQueryCategory(
    responseData.data
  )
  const data: WomensHealthData = {
    banner: womensHealthData.banner,
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
