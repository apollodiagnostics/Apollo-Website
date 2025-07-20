import { CurrentOpeningData } from '@components/common/Cards/CurrentOpeningCard'
import { getFindTestData } from '@utils/api/dashboard'
import { QueryTest } from 'src/models/query.models'
import { FindTestData } from './find-a-test.model'

const findTestData: FindTestData = {
  banner: {
    label: 'Apollo Diagnostics',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Apollo Diagnostics',
  },
  tests: {
    cards: [
      {
        icon: { src: '/images/feedback.png', alt: 'image' },
        label: 'Mr. Thomas, Mysuru',
        heading: 'Thanks for the seamless service!! ',
        description:
          'Based on my experience I can assure that, be it quality or punctuality, Apollo Diagnostics is one name to trust and depend on.',
      },
      {
        icon: { src: '/images/feedback.png', alt: 'image' },
        label: 'Mr. Thomas, Mysuru',
        heading: 'Thanks for the seamless service!! ',
        description:
          'Based on my experience I can assure that, be it quality or punctuality, Apollo Diagnostics is one name to trust and depend on.',
      },
      {
        icon: { src: '/images/feedback.png', alt: 'image' },
        label: 'Mr. Thomas, Mysuru',
        heading: 'Thanks for the seamless service!! ',
        description:
          'Based on my experience I can assure that, be it quality or punctuality, Apollo Diagnostics is one name to trust and depend on.',
      },
      {
        icon: { src: '/images/feedback.png', alt: 'image' },
        label: 'Mr. Thomas, Mysuru',
        heading: 'Thanks for the seamless service!! ',
        description:
          'Based on my experience I can assure that, be it quality or punctuality, Apollo Diagnostics is one name to trust and depend on.',
      },
    ],
  },
}

function extractComponent(data: QueryTest[]): FindTestData {
  const allTests: CurrentOpeningData[] = data.map((item) => {
    return {
      heading: item.name,
      description: '',
      buttonProps: {
        label: 'Read More',
        link: `/tests/${item.slug}-${item.id}`,
      },
    }
  })
  return {
    banner: {
      label: 'Find a Test',
      backgroundImage: findTestData.banner.backgroundImage,
      path: `Home > For Patients > Find a Test`,
    },
    tests: {
      cards: allTests,
    },
  }
}

export const getFindTestPageData = async (): Promise<FindTestData> => {
  const responseData = await getFindTestData()
  const p = extractComponent(responseData.data)
  return p
}
