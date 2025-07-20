import { AwardsSectionData } from '@components/feature/OurChairman'
import { getAboutUsPagesData } from '@utils/api/dashboard'
import {
  QueryAboutUsCards,
  QueryAboutUsSinglePageData,
} from 'src/models/query.models'
import { OurChairmansData } from './our-chairmans-profile.model'

const ourChairmansData: OurChairmansData = {
  metaTitle: 'meta title',
  metaDescription: 'description',
  banner: {
    label: 'Our chairman’s profile',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Our chairman’s profile',
  },
  overview: {
    images: [
      {
        alt: 'chairman',
        src: '/images/chairman3.png',
      },
      {
        alt: 'chairman',
        src: '/images/chairman.png',
      },
      {
        alt: 'chairman',
        src: '/images/recognition.png',
      },
    ],
  },
  awards: {
    logo: { src: '/images/awardslogo.png', alt: 'logo' },
    mainHeading: 'Honors & Awards',
    heading:
      'Over the years  Dr. Prathap C Reddy has received many accolades for contributions to the medical world, some of which are-  ',
    cards: [
      {
        image: {
          src: '/images/award4.png',
          alt: 'awards',
        },
        award: 'Padma Vibhushan',
        designation: 'Second Highest Civilian Award',
      },
      {
        image: {
          src: '/images/award1.png',
          alt: 'awards',
        },
        award: 'Padma Vibhushan',
        designation: 'Second Highest Civilian Award',
      },
      {
        image: {
          src: '/images/award2.png',
          alt: 'awards',
        },
        award: 'Padma Vibhushan',
        designation: 'Second Highest Civilian Award',
      },
      {
        image: {
          src: '/images/award3.png',
          alt: 'awards',
        },
        award: 'Padma Vibhushan',
        designation: 'Second Highest Civilian Award',
      },
    ],
  },
  quote: {
    image: {
      alt: 'chairman profile',
      src: '/images/chairmanProfile.png',
    },
    heading:
      ' “Purity, patience and persistence. If you have all these 3, you will not fail, provided your first P is right.”',
    name: 'Dr. Prathap C Reddy',
    designation: 'Chairman, Apollo Hospitals Group',
  },
  description2: {
    description:
      'Since its inception as a 150-bed hospital in 1983, the Group has maintained leadership in medical innovation, clinical services, and research. With over 10,000 beds across 64 culturally diverse locations worldwide, employing over 65,000 professionals including 4,000 clinicians, Apollo Hospitals is among the worlds largest hospital groups. Serving over 42 million patients from 120 countries, seven hospitals boast prestigious JCI accreditation. Dr. Reddy’s pioneering success includes the initiation of a change towards preventive care by pushing for a new standard in assessing and diagnosing India’s health to fight the triple terrors of diabetes, heart diseases and cancer through preventive health checks. Telemedicine, as in the world’s first V-SAT enabled village, and health insurance like the Aragonda Re. 1/day scheme were other successful pilots.His mantra has been to identify the needs of India, and fill the lacunae using a stretch of innovation, technology and commitment.Since its inception as a 150-bed hospital in 1983, the Group has maintained leadership in medical innovation, clinical services, and research. With over 10,000 beds across 64 culturally diverse locations worldwide, employing over 65,000 professionals including 4,000 clinicians, Apollo Hospitals is among the world largest hospital groups. Serving over 42 million patients from 120 countries, seven hospitals boast prestigious JCI accreditation.Dr. Reddy’s pioneering success includes the initiation of a change towards preventive care by pushing for a new standard in assessing and diagnosing India’s health to fight the triple terrors of diabetes, heart diseases and cancer through preventive health checks. Telemedicine, as in the world’s first V-SAT enabled village, and health insurance like the Aragonda Re. 1/day scheme were other successful pilots.His mantra has been to identify the needs of India, and fill the lacunae using a stretch of innovation, technology and commitment.',
  },
  description1: {
    description:
      'Since its inception as a 150-bed hospital in 1983, the Group has maintained leadership in medical innovation, clinical services, and research. With over 10,000 beds across 64 culturally diverse locations worldwide, employing over 65,000 professionals including 4,000 clinicians, Apollo Hospitals is among the worlds largest hospital groups. Serving over 42 million patients from 120 countries, seven hospitals boast prestigious JCI accreditation. Dr. Reddy’s pioneering success includes the initiation of a change towards preventive care by pushing for a new standard in assessing and diagnosing India’s health to fight the triple terrors of diabetes, heart diseases and cancer through preventive health checks. Telemedicine, as in the world’s first V-SAT enabled village, and health insurance like the Aragonda Re. 1/day scheme were other successful pilots.His mantra has been to identify the needs of India, and fill the lacunae using a stretch of innovation, technology and commitment.Since its inception as a 150-bed hospital in 1983, the Group has maintained leadership in medical innovation, clinical services, and research. With over 10,000 beds across 64 culturally diverse locations worldwide, employing over 65,000 professionals including 4,000 clinicians, Apollo Hospitals is among the world largest hospital groups. Serving over 42 million patients from 120 countries, seven hospitals boast prestigious JCI accreditation.Dr. Reddy’s pioneering success includes the initiation of a change towards preventive care by pushing for a new standard in assessing and diagnosing India’s health to fight the triple terrors of diabetes, heart diseases and cancer through preventive health checks. Telemedicine, as in the world’s first V-SAT enabled village, and health insurance like the Aragonda Re. 1/day scheme were other successful pilots.His mantra has been to identify the needs of India, and fill the lacunae using a stretch of innovation, technology and commitment.',
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
}

function extractAwardsData(
  data: QueryAboutUsCards[]
): AwardsSectionData['cards'] {
  const allCards: AwardsSectionData['cards'] = data.map((item) => {
    return {
      image: {
        src: item.cardImage[0] || '/images/award4.png',
        alt: 'awards',
      },
      award: item.nametitle,
      designation: item.description,
    }
  })
  return allCards
}

function extractComponent(data: QueryAboutUsSinglePageData): OurChairmansData {
  const chairmanProfile = data.dataValues.meta_title.split('|')
  const indicesOfAwards = [2, 3, 4, 5]
  return {
    banner: {
      label: data.dataValues.title,
      backgroundImage: ourChairmansData.banner.backgroundImage,
      path: `Home > ${data.dataValues.title}`,
    },
    description1: {
      description: data.card_data[0].description,
    },
    description2: {
      description: data.card_data[6].description,
    },
    featureSection: ourChairmansData.featureSection,
    quote: {
      heading: ourChairmansData.quote.heading,
      image: {
        src: '/images/chairmanProfile.png',
        alt: 'chairman profile',
      },
      name: chairmanProfile[0],
      designation: chairmanProfile[1],
    },
    awards: {
      heading: data.card_data[1].description,
      logo: { src: '/images/awardsLogo.png', alt: 'logo' },
      mainHeading: data.card_data[1].nametitle,
      cards: extractAwardsData(
        data.card_data.filter((_, index) => indicesOfAwards.includes(index))
      ),
    },
    overview: ourChairmansData.overview,
    metaTitle: data.dataValues.meta_title,
    metaDescription: data.dataValues.meta_description,
  }
}

export const getOutChairmansData = async (): Promise<OurChairmansData> => {
  const responseData = await getAboutUsPagesData('our-chairmans-profile')
  const p = extractComponent(responseData.data[0])
  return p
}
