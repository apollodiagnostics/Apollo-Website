import { CurrentOpeningData } from '@components/common/Cards/CurrentOpeningCard'
import { FeatureCardSectionData } from '@components/entities'
import { getAboutUsPagesData, getCareerCardData } from '@utils/api/dashboard'
import {
  QueryAboutUsCards,
  QueryAboutUsSinglePageData,
  QueryCareerCardData,
} from 'src/models/query.models'
import { CareerData } from './career.model'

const careerData: CareerData = {
  metaTitle: 'metaTitile',
  metaDescription: 'metaDescription',
  banner: {
    label: 'Career',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Career',
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
  whyJoinUs: {
    mainHeading: 'Why Join Us?',
    cards: [
      {
        heading: 'Rapid Growth & Learning',
        image: {
          alt: 'rapid growth logo',
          src: '/images/featureCard1.png',
        },
      },
      {
        heading: 'Collaborative Environment',
        image: {
          alt: 'Collaborative Environment logo',
          src: '/images/featureCard2.png',
        },
      },
      {
        heading: 'Supportive Workplace',
        image: {
          alt: 'Supportive Workplace logo',
          src: '/images/featureCard1.png',
        },
      },
      {
        heading: 'Diverse Work Culture',
        image: {
          alt: 'Diverse Work Culture logo',
          src: '/images/featureCard4.png',
        },
      },
      {
        heading: ' Innovation Hub',
        image: {
          alt: ' Innovation Hub logo',
          src: '/images/featureCard5.png',
        },
      },
    ],
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
  openingSection: {
    heading: 'Current Openings',
    buttonProps: {
      label: 'View All Opening',
      link: '/',
    },
    openings: [
      {
        heading: 'Medical Administrator',
        description: 'Lorem ipsum dolor sit amet consectetur nibh tristique.',
        icon: {
          src: '/images/openingCard.png',
          alt: 'logo',
        },
        label: '10 Openings',
      },
      {
        heading: 'Medical Administrator',
        description: 'Lorem ipsum dolor sit amet consectetur nibh tristique.',
        icon: {
          src: '/images/openingCard.png',
          alt: 'logo',
        },
        label: '10 Openings',
      },
      {
        heading: 'Medical Administrator',
        description: 'Lorem ipsum dolor sit amet consectetur nibh tristique.',
        icon: {
          src: '/images/openingCard.png',
          alt: 'logo',
        },
        label: '10 Openings',
      },
      {
        heading: 'Medical Administrator',
        description: 'Lorem ipsum dolor sit amet consectetur nibh tristique.',
        icon: {
          src: '/images/openingCard.png',
          alt: 'logo',
        },
        label: '10 Openings',
      },
    ],
  },
  workWithUs: {
    sectionHeading: 'Career',
    mainHeading: 'Work with Us',
    description:
      'Lorem ipsum dolor sit amet consectetur. Tortor vulputate sed augue orci nisl id non. Diam nunc consectetur fermentum urna non mauris viverra eget faucibus. Pellentesque praesent a ut varius tellus tortor proin nec hac non mauris viverra eget. Mauris non viverra vivamus sapien ornare sed. Quis scelerisque ipsum mauris scelerisque interdum ut viverra pulvinar mollis. A faucibus dignissim quam rutrum sagittis mattis consectetur cursus. Dui sed sapien.',
    buttonProps: {
      label: 'View Open Roles',
    },
  },
  ourCulture: {
    images: [
      {
        src: '/images/ourCulture/culture1.webp',
        alt: 'our culture img',
      },
      {
        src: '/images/ourCulture/culture2.webp',
        alt: 'our culture img',
      },
      {
        src: '/images/ourCulture/culture3.webp',
        alt: 'our culture img',
      },
      {
        src: '/images/ourCulture/culture6.jpg',
        alt: 'our culture img',
      },
      {
        src: '/images/ourCulture/culture7.jpg',
        alt: 'our culture img',
      },
      {
        src: '/images/ourCulture/culture4.webp',
        alt: 'our culture img',
      },
      {
        src: '/images/ourCulture/culture5.webp',
        alt: 'our culture img',
      },
    ],
  },
}

function extractJoinUsCards(data: QueryAboutUsCards[]): FeatureCardSectionData {
  const allCards: FeatureCardSectionData['cards'] = data.map((item) => {
    return {
      heading: item.nametitle,
      description: item.description,
      image: {
        alt: 'rapid growth logo',
        src: '/images/featureCard1.png',
      },
    }
  })
  return {
    mainHeading: 'Why Work With Us?',
    cards: allCards,
  }
}

function extractComponent(
  allItems: QueryAboutUsSinglePageData,
  data: QueryCareerCardData
): CareerData {
  const indicesOfJoinUs = [1, 2, 3, 4, 5]
  const allOpening: CurrentOpeningData[] = data.data.rows.map((item) => {
    return {
      heading: item.job_title,
      description: item.description,
      icon: {
        src: '/images/openingCard.png',
        alt: 'logo',
      },
      label: item.qualification ? `Required: ${item.qualification}` : '',
    }
  })
  return {
    banner: careerData.banner,
    featureSection: careerData.featureSection,
    openingSection: {
      heading: careerData.openingSection.heading,
      openings: allOpening,
    },
    overviewSection: careerData.overviewSection,
    whyJoinUs: extractJoinUsCards(
      allItems.card_data.filter((_, index) => indicesOfJoinUs.includes(index))
    ),
    workWithUs: {
      sectionHeading: 'Career',
      description: allItems.card_data[0].description,
      mainHeading: allItems.card_data[0].nametitle,
    },
    ourCulture: careerData.ourCulture,
    metaTitle: allItems.dataValues.meta_title,
    metaDescription: allItems.dataValues.meta_description,
  }
}
export const getCareerData = async (): Promise<CareerData> => {
  const [allItems, openingCard] = await Promise.all([
    getAboutUsPagesData('careers'),
    getCareerCardData(),
  ])
  const p = extractComponent(allItems.data[0], openingCard)
  return p
}
