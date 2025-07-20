import { defaultCity, InputData, SearchParamsData } from '@models'
import {
  getAboutUsPagesData,
  getAllConditionByCityData,
  getAllItemsByCondition,
} from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { extractTestsFromQueryItem } from '@utils/query'
import {
  QueryAboutUsSinglePageData,
  QueryAllConditions,
  QueryAllItemsData,
} from 'src/models/query.models'
import { HomeSampleData } from './home-sample-collection.model'

const homeSampleData: HomeSampleData = {
  banner: {
    label: 'Home Sample Collection',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > For Patients > Home Sample Collection',
  },
  testSection: {
    totalTest: 3270,
    heading: 'heading',
    filters: {
      heading: 'diseases',
      options: [
        {
          label: 'alcohol',
          value: 1,
        },
      ],
    },
    results: 'Showing 6 tests found',
    tests: [],
  },
  diagnosisSection: {
    heading: 'Home Sample Collection',
    description:
      'The prospect of spending hours in a queue at the diagnostic lab or the hospital deters many or at least prompts them to defer stepping out for diagnostic tests.Appreciating the importance of health tests and understanding the need for making diagnostic services user-friendly, Apollo Diagnostics offers the sheer convenience of Home Sample Collection.*  On receiving a call, Apollo’s trained technicians arrive at the doorstep of the patient to collect samples. Reports can be collected at our centre or can be delivered at home (On Chargeable Basis) the very next day.Apollo Diagnostics has already put in place a network of technicians and an easy call facility to ensure patients get the best of services within the comfort of their own homes.',
    timeLineData: {
      steps: [
        {
          label: 'Call 4444-2424 to book an appointment.',
          image: {
            src: '/images/timeline/phone.png',
            alt: 'timeline images',
          },
        },
        {
          label: 'Phlebotomist will come home to collect the sample.',
          image: {
            src: '/images/timeline/test.png',
            alt: 'timeline images',
          },
        },
        {
          label:
            'MS would be sent with login credentials to download your reports online or visit the nearest Apollo Diagnostics Centre and collect in person',
          image: {
            src: '/images/timeline/sms.png',
            alt: 'timeline images',
          },
        },
      ],
    },
    diagnosisStepHeading: 'Diagnosis in 3 Simple Steps',
  },
  featureSection: {
    heading: 'Lab Tests & Health Checkups',
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
}

function extractTests(data: QueryAllConditions[]) {
  const allTests: InputData[] = data.map((item) => {
    return {
      label: item.name,
      value: item.name,
    }
  })
  return {
    heading: 'Conditions',
    options: allTests,
  }
}

// eslint-disable-next-line max-params
function extractComponent(
  data: QueryAboutUsSinglePageData,
  queryTests: QueryAllItemsData,
  queryFilters: QueryAllConditions[],
  // queryFilters: QueryCondition[],
  cityName: string
): HomeSampleData {
  return {
    testSection: {
      heading: 'BOOK A LAB TEST',
      results: `Showing ${queryTests.data.count} tests found`,
      tests: extractTestsFromQueryItem(queryTests.data.rows, cityName),
      filters: extractTests(queryFilters),
      totalTest: queryTests.data.count,
    },
    banner: {
      label: data.dataValues.title,
      backgroundImage: homeSampleData.banner.backgroundImage,
      path: `Home > ${data.dataValues.title}`,
    },
    featureSection: homeSampleData.featureSection,
    diagnosisSection: {
      description: data.dataValues.body,
      diagnosisStepHeading:
        homeSampleData.diagnosisSection.diagnosisStepHeading,
      heading: homeSampleData.diagnosisSection.heading,
      timeLineData: homeSampleData.diagnosisSection.timeLineData,
    },
  }
}

export const getHomeSampleData = async ({
  condition,
  limit,
  offset,
  search,
  cityId,
}: SearchParamsData & { cityId: string }): Promise<HomeSampleData> => {
  const userDetails = await getUserFromCookies()
  const [descriptionData, allItems, filterCategories] = await Promise.all([
    getAboutUsPagesData('home-sample-collection'),
    getAllItemsByCondition(
      {
        conditionName: condition,
        limit,
        offset,
        search,
        cityId: cityId || defaultCity.id.toString(),
      },
      'Test'
    ), // getFilterCategoriesData(),
    getAllConditionByCityData(cityId || defaultCity.id.toString()),
  ])
  const p = extractComponent(
    descriptionData.data[0],
    allItems,
    filterCategories.data,
    userDetails?.cityName?.toLowerCase() || defaultCity.name
  )
  return p
}
