/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { InsightsSectionProps } from '@components/feature/Franchise'
import {
  getAboutUsPagesData,
  getAllCities,
  getAllStates,
} from '@utils/api/dashboard'
import {
  QueryAboutUsCards,
  QueryAboutUsSinglePageData,
} from 'src/models/query.models'
import { FranchiseData } from './franchise.model'

const franchisePageData: FranchiseData = {
  featuresSection: {
    cards: [],
  },
  metaTitle: 'meta-title',
  metaDescription: 'meta-description',
  banner: {
    label: 'Franchise',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Franchise',
  },
  enquire: {
    cities: [],
    states: [],
  },
  advertisementSection1: {
    image: {
      alt: 'image',
      src: '/images/franchise.jpg',
    },
    link: '/',
  },
  advertisementSection2: {
    image: {
      src: '/images/franchiseAdvertisement.png',
      alt: 'Advertisement1',
    },
    link: '/',
  },
  whoWeAre: {
    heading: 'Why Apollo Diagnostics?',
    video: {
      src: 'https://youtu.be/kf6VxPc5m60?si=fWQspo6_b_nFOiUB',
      thumbnail: '/images/testimonials.png',
    },
    description:
      'pollo, India’s first name in corporate healthcare, has ‘Good health for all’ as it abiding focus. Recognising the need for high-quality diagnostics to nip developing health problems in the bud, Apollo offers a wide spectrum of tests through its hospitals and clinic facilities across the Country.To expand the offering and increase its accessibility to a wider network of patients and doctors, Apollo Hospitals launched Apollo Diagnostics, a service fully dedicated to providing diagnostics for all age groups.',
  },
  ourReach: {
    sectionHeading: 'Our Reach',
    data: [
      {
        description: 'high-quality diagnostic tests every year',
        dataHeading: '10Mn',
      },
      { description: 'Total No. of Customers', dataHeading: '40Mn' },
      { description: 'Customer Satisfaction Rate', dataHeading: '99%' },
      { description: 'Total No. of Labs', dataHeading: '140+' },
      { description: 'Pickup Points', dataHeading: '12,000+' },
    ],
  },
  forBuisnessPartners: {
    description: '',
  },
  FAQ: {
    data: [
      {
        label: 'What is the bussiness type of Apollo Diagnostics Center?',
        document:
          'Apollo Diagnostics Centre is a division of Apollo Hospitals group, undertaking pathology services by setting up Patient Care Centres across India.',
      },
      {
        label: 'What is Patient Care Center',
        document:
          'A Patient Care Centre (PCC) caters to the needs of walk-in patients whether they are referred by doctors or visit in response to the marketing activities.',
      },
      {
        label: 'Where can I set up PCC',
        document:
          'The ideal locations for PCCs are residential neighborhoods in middle / upper middle-class clusters. Situation of doctor’s clinic in the vicinity will be an added advantage.',
      },
      {
        label: 'Is it permitted to process samples in PCC',
        document: 'No. PCCs cannot process samples.',
      },
      {
        label:
          'What support does Apollo Diagnostics Center extend to develop business in PCC',
        document:
          'Apollo Diagnostics Center sales team meets doctors in close proximity of the PCCs and gives regular marketing support through flyers carrying the address of the concerned PCC. RWA (apartment complex) camps and other marketing focused activities are also undertaken on a regular basis.',
      },
      {
        label: 'Will Apollo Diagnostics help in recruiting phlebotomists',
        document:
          'Apollo Diagnostics Centre can help PCCs source technicians through its HR dept. However, it is advisable to recruit a technician residing in close proximity of the PCC.',
      },
      {
        label: 'Is DMLT must for a technician',
        document: 'Yes, it is.',
      },
      {
        label:
          'Will Apollo Diagnostics Center take over the PCC once business is good',
        document:
          'Apollo Diagnostics Centre will not take over PCCs until the PCC expresses its inability to continue / control the business.',
      },
      {
        label: 'Can I set up PCC on the first floor',
        document:
          'As accessibility for senior citizens and patients with disabilities should not be hindered, Apollo Diagnostics does not allow setting up of PCCs anywhere except the ground floor. The visibility factor is also low for upper floors.',
      },
      {
        label:
          'Can the Standard design suggested by Apollo Diagnostics be changed center',
        document:
          'Apollo Diagnostics Centre does not permit any changes in its design and colour codes to maintain uniformity across PCCs.',
      },
    ],
  },
}

export function extractInsightsCards(
  data: QueryAboutUsCards[]
): InsightsSectionProps {
  const allCards: InsightsSectionProps['data'] = data.map((item) => {
    return {
      dataHeading: item.nametitle,
      description: item.description,
    }
  })
  return {
    data: allCards,
    sectionHeading: 'Our Reach',
  }
}

export enum CARD_TYPE {
  WHY_APOLLO = 'why-apollo',
  INSIGHT_CARD = 'insight-card',
  OFFERINGS = 'offerings',
}

async function extractComponent(
  data: QueryAboutUsSinglePageData
): Promise<FranchiseData> {
  const insightsCards = data.card_data.filter(
    (item) => item.cardtype === CARD_TYPE.INSIGHT_CARD
  )

  const whyApolloCard = data.card_data.filter(
    (item) => item.cardtype === CARD_TYPE.WHY_APOLLO
  )[0]

  const offeringsCard = data.card_data.filter(
    (item) => item.cardtype === CARD_TYPE.OFFERINGS
  )
  return {
    banner: {
      label: data.dataValues.title,
      backgroundImage: franchisePageData.banner.backgroundImage,
      path: `Home > ${data.dataValues.title}`,
    },
    enquire: {
      cities: (await getAllCities()).data.rows.map((item) => ({
        label: item.City,
        value: item.City,
      })),
      states: (await getAllStates()).data.rows.map((item) => ({
        label: item.state,
        value: item.id.toString(),
      })),
    },
    advertisementSection1: franchisePageData.advertisementSection1,
    advertisementSection2: franchisePageData.advertisementSection2,
    ourReach: {
      sectionHeading: 'Our Reach',
      data: extractInsightsCards(insightsCards).data,
    },
    whoWeAre: {
      description: whyApolloCard?.description,
      heading: whyApolloCard?.nametitle,
      video: {
        src: whyApolloCard?.imageUrl,
      },
    },
    featuresSection: {
      cards: offeringsCard.map((card) => ({
        heading: card?.nametitle,
        description: card?.description,
        image: {
          src: card.cardImage?.[0],
          alt: 'card-images',
        },
      })),
    },
    FAQ: franchisePageData.FAQ,
    forBuisnessPartners: { description: data.dataValues.body },
    metaTitle: data.dataValues.meta_title,
    metaDescription: data.dataValues.meta_description,
  }
}

export const getFranchisePageData = async (): Promise<FranchiseData> => {
  const responseData = await getAboutUsPagesData('for-business-partners')
  console.log(responseData.data[0].card_data)
  const p = extractComponent(responseData.data[0])
  return p
}
