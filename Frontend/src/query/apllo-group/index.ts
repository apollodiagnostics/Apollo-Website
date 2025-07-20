import { InsightsData } from '@components/entities'
import { InitiativesData } from '@components/feature/ApolloGroup'
import { getAboutUsPagesData } from '@utils/api/dashboard'
import {
  QueryAboutUsCards,
  QueryAboutUsSinglePageData,
} from 'src/models/query.models'
import { ApolloGroupData } from './apollo-group.model'

const apolloGroupData: ApolloGroupData = {
  metaTitle: '',
  metaDescription: '',
  banner: {
    label: 'Apollo Group',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Apollo Group',
  },
  vissionAndMission: {
    sectionHeading: 'Apollo Group',
    mainHeading: 'Founding Vision & Mission',
    description:
      'At the behest of his father, in 1971, Dr. Reddy left behind a flourishing practice in Boston and returned to India. On his return, he found the medical landscape in the Country plagued by gaps in infrastructure, delivery, and affordability.  Things took a turn for the worse when he lost a young patient who just did not have the means to go abroad for treatment. The incident marked a crossroad in Dr. Reddy’s life and steeled his determination to get quality healthcare to India. He set the blueprint to build India’s first multi-specialty private sector hospital. Undaunted and unfazed by the obstacles faced, Apollo Hospitals opened its doors in 1983 and ever since nurtured a goal which read as “Our mission is to bring healthcare of international standards within the reach of every individual. We are committed to the achievement and maintenance of excellence in education, research, and healthcare for the benefit of humanity”.',
  },
  advertisement: {
    image: {
      src: '/images/apolloGroup.png',
      alt: '/overview',
    },
    link: '/',
  },
  initaives1: {
    mainHeading: 'Unyielding Vision for Growth',
    description:
      'Over the past three decades Apollo Hospitals’ transformative journey has forged a legacy of excellence in Indian healthcare. The Group has continuously set the agenda and led by example in the blossoming private healthcare space. One of Apollo’s significant contributions has been the adoption of clinical excellence as an industry standard. The group was the first to invest in the prerequisites that led to international quality accreditation like the JCI and also developed centers of excellence in Cardiac Sciences, Orthopedics, Neurosciences, Emergency Care, Cancer and Organ Transplantation. Along with excellence, the Apollo philosophy rests on the pillars of technological superiority, a warm patient-centric approach, a clear and distinct cost advantage and an edge in forward-looking research.',
  },
  initaives2: {
    mainHeading: 'Affordable Healthcare & Social Initiatives',
    description:
      'Over the past three decades Apollo Hospitals’ transformative journey has forged a legacy of excellence in Indian healthcare. The Group has continuously set the agenda and led by example in the blossoming private healthcare space. One of Apollo’s significant contributions has been the adoption of clinical excellence as an industry standard. The group was the first to invest in the prerequisites that led to international quality accreditation like the JCI and also developed centers of excellence in Cardiac Sciences, Orthopedics, Neurosciences, Emergency Care, Cancer and Organ Transplantation. Along with excellence, the Apollo philosophy rests on the pillars of technological superiority, a warm patient-centric approach, a clear and distinct cost advantage and an edge in forward-looking research.',
  },
  initaives3: {
    mainHeading: 'Innovation & Social Initiatives',
    description:
      'Over the past three decades Apollo Hospitals’ transformative journey has forged a legacy of excellence in Indian healthcare. The Group has continuously set the agenda and led by example in the blossoming private healthcare space. One of Apollo’s significant contributions has been the adoption of clinical excellence as an industry standard. The group was the first to invest in the prerequisites that led to international quality accreditation like the JCI and also developed centers of excellence in Cardiac Sciences, Orthopedics, Neurosciences, Emergency Care, Cancer and Organ Transplantation. Along with excellence, the Apollo philosophy rests on the pillars of technological superiority, a warm patient-centric approach, a clear and distinct cost advantage and an edge in forward-looking research.',
  },
  imagePanel: {
    images: [
      {
        src: '/images/imagePanel1.png',
        alt: 'images',
      },
      {
        src: '/images/imagePanel2.png',
        alt: 'images',
      },
    ],
  },
  insights: {
    sectionHeading: 'Healthcare Facilities & Reach',
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
  overviewSection: {
    images: [
      {
        src: '/images/career1.png',
        alt: 'overview',
      },
      { src: '/images/career2.png', alt: 'overview' },
      { src: '/images/career3.png', alt: 'overview' },
    ],
  },
  recognitionAndAwards: {
    heading: 'Recognition and Awards',
    image: {
      alt: 'recognition',
      src: '/images/recognition.png',
    },
    description:
      'Apollo Hospitals celebrated its 30th year recently. The Group, led by Dr. Prathap Reddy, reaffirmed its goals and redefined its focus. With ambitious projects like Apollo Reach Hospitals, a strong focus on preventive healthcare and an unabated commitment to nurture excellence and expertise in healthcare, Apollo Hospitals envisions a new horizon – a future where the nation is healthy, where its people are fighting fit, and India emerges as the preferred global healthcare destination.Apollo Hospitals celebrated its 30th year recently. The Group, led by Dr. Prathap Reddy, reaffirmed its goals and redefined its focus. With ambitious projects like Apollo Reach Hospitals, a strong focus on preventive healthcare and an unabated commitment to nurture excellence and expertise in healthcare, Apollo Hospitals envisions a new horizon – a future where the nation is healthy, where its people are fighting fit, and India emerges as the preferred global healthcare destination.',
  },
  featureSection: {
    heading: 'Lab Tests & Health Checkups',
    featureCards: [
      {
        icon: {
          src: '/images/feature2.png',
          alt: '',
        },
        heading: 'Have a Prescription? ',
        description: 'Upload and book your tests',
        link: '',
      },
      {
        icon: {
          src: '/images/feature3.png',
          alt: '',
        },
        heading: 'Call us to book your tests',
        description: 'Our team of experts will guide you.',
        link: '',
      },
      {
        icon: {
          src: '/images/feature1.png',
          alt: '',
        },
        heading: 'WhatsApp Booking',
        description: 'Text us on WhatsApp to book a test',
        link: '',
      },
    ],
  },
  initiatives: {
    cardData: [
      {
        description: '',
        imageUrl: '',
        nametitle: '',
      },
    ],
  },
}

function extractInsightsCards(data: QueryAboutUsCards[]): InsightsData {
  const allCards: InsightsData['data'] = data.map((item) => {
    return {
      dataHeading: item.nametitle,
      description: item.description,
    }
  })
  return {
    sectionHeading: 'Healthcare Facilities & Reach',
    data: allCards,
  }
}

function exctractCardData(data: QueryAboutUsCards[]): InitiativesData {
  return {
    cardData: data.map((item) => {
      return {
        imageUrl: item.cardImage[0],
        nametitle: item.nametitle,
        description: item.description,
      }
    }),
  }
}

function extractComponent(data: QueryAboutUsSinglePageData): ApolloGroupData {
  const indicesOfInsights = [1, 2, 3, 4, 5, 6]
  return {
    banner: {
      label: data.dataValues.title,
      backgroundImage: apolloGroupData.banner.backgroundImage,
      path: `Home > ${data.dataValues.title}`,
    },
    advertisement: apolloGroupData.advertisement,
    imagePanel: apolloGroupData.imagePanel,
    initaives1: {
      description: data.card_data[7].description,
      mainHeading: data.card_data[7].nametitle,
    },
    initaives2: {
      description: data.card_data[8].description,
      mainHeading: data.card_data[8].nametitle,
    },
    initaives3: {
      description: data.card_data[9].description,
      mainHeading: data.card_data[9].nametitle,
    },
    featureSection: apolloGroupData.featureSection,
    insights: extractInsightsCards(
      data.card_data.filter((_, index) => indicesOfInsights.includes(index))
    ),
    overviewSection: apolloGroupData.overviewSection,
    vissionAndMission: {
      description: data.card_data[0].description,
      mainHeading: data.card_data[0].nametitle,
      sectionHeading: 'Apollo Group',
    },
    recognitionAndAwards: {
      description: data.card_data[10].description,
      heading: data.card_data[10].nametitle,
      image: {
        alt: 'recognition',
        src: '/images/recognition.png',
      },
    },
    metaTitle: data.dataValues.meta_title,
    metaDescription: data.dataValues.meta_description,
    initiatives: exctractCardData(
      data.card_data.slice(7, data.card_data.length)
    ),
  }
}

export const getApolloGroupData = async (): Promise<ApolloGroupData> => {
  const responseData = await getAboutUsPagesData('about-apollo-group')
  const p = extractComponent(responseData.data[0])
  return p
}
