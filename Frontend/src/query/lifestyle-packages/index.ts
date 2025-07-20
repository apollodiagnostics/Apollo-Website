// import { PackageInfoCardData } from '@components/common'
import {
  getPersonalizedPackagesData,
  // getLifeStylePackagesCardsData,
} from '@utils/api/dashboard'
import {
  // extractPackagesFromQueryItem,
  extractSelectionFromQueryCategory,
} from '@utils/query'
import { LifeStylePackagesData } from './lifestyle-packages.model'

const lifeStylePackages: LifeStylePackagesData = {
  metaTitle: 'title',
  metaDescription: 'description',
  banner: {
    label: 'LifeStyle Packages',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > LifeStyle Packages',
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
  // packagesSection: {
  //   heading: 'LifeStyle Packages',
  //   results: 'Showing 6 LifeStyle Packages found',
  //   tests: [
  //     {
  //       id: 0,
  //       heading: 'Complete Family Wellness Package',
  //       tag: 'Home Collection Available',
  //       button1: {
  //         label: 'Add to Cart',
  //         link: '',
  //       },
  //       button2: {
  //         label: 'View All',
  //         link: '',
  //       },
  //       delivery: 'Same day',
  //       discount: 40,
  //       icon: {
  //         src: '/images/packageIcon.png',
  //         alt: '',
  //       },

  //       price: 800,
  //     },
  //   ],
  // },
  packageSection: {
    cardData: [],
  },
}

export const getLifeStylePackagesData =
  async (): Promise<LifeStylePackagesData> => {
    // const responseData = await getLifeStylePackagesCardsData(condition)
    // const p = extractPackagesFromQueryItem(responseData.data.rows)
    const responseData = await getPersonalizedPackagesData('lifestyle')
    const allCategories = extractSelectionFromQueryCategory(responseData.data)
    const data: LifeStylePackagesData = {
      banner: lifeStylePackages.banner,
      featureSection: lifeStylePackages.featureSection,
      // packagesSection: {
      //   heading: 'Book test online',
      //   results: 'results',
      //   tests: p,
      // },
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
