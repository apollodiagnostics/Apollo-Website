import { getPersonalizedPackagesData } from '@utils/api/dashboard'
import { extractMensHealthFromQueryCategory } from '@utils/query'
import { MensHealthData } from './mens-health.model'

const mensHealthData: MensHealthData = {
  metaTitle: 'title',
  metaDescription: 'description',
  banner: {
    label: 'Mens Health',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Mens Health',
  },
  packageSection: {
    cardData: [],
  },
}

export const getMensHealthData = async (): Promise<MensHealthData> => {
  const responseData = await getPersonalizedPackagesData('men')
  const allCategories = extractMensHealthFromQueryCategory(responseData.data)
  const data: MensHealthData = {
    banner: mensHealthData.banner,
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
