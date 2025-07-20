import { BlogsCardData } from '@components/common/Cards/BlogsCard'
import { getAboutUsPagesData } from '@utils/api/dashboard'
import {
  QueryAboutUsCards,
  QueryAboutUsSinglePageData,
} from 'src/models/query.models'
import { DoctorsCornerData } from './doctors-corner.model'

const doctorsCornerData: DoctorsCornerData = {
  metaTitle: 'title',
  metaDescription: 'meta description',
  banner: {
    label: 'Doctor’s Corner',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Doctor’s Corner',
  },
  overview: {
    image: {
      src: '/images/blogs.png',
      alt: 'overview',
    },
    descriptonSection: {
      date: 'March, 2024',
      time: '12 min read',
      mainHeading: 'Decoding Tuberculosis: ',
      heading: 'Unravelling Causes, Symptoms & Risk Factors',
      description:
        'Tuberculosis, or TB, is a disease that affects millions of individuals around the world each year. Although the number has decreased dramatically, its presence and impact continue to be a concern. Although the number has decreased, its presence and impact continue to be a concern. To address this, we must stay aware of the causes, symptoms and risk factors linked to TB so that we can detect it early, chart the right course of action and even prepare ourselves with preventive measures.',
      buttonProps: {
        label: 'Read more',
        link: '/',
      },
    },
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
  monthlyEdition: {
    heading: 'Monthly Edition',
    sectionHeading: 'AD Express',
    cards: [
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description: 'Lorem ipsum dolor sit amet consectetur',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
    ],
  },
}

function extractDoctorsCornerCards(data: QueryAboutUsCards[]): BlogsCardData[] {
  const allCards: BlogsCardData[] = data.map((item) => {
    return {
      buttonProps: {
        label: 'Read more',
        link: item.imageUrl,
      },
      heading: item.nametitle,
      description: item.description,
      image: {
        src: item.cardImage[0] || '/images/doctorsCorner.png',
        alt: 'doctors-corner',
      },
    }
  })
  return allCards
}

function extractComponent(
  data: QueryAboutUsSinglePageData,
  cards: BlogsCardData[]
): DoctorsCornerData {
  return {
    banner: {
      label: data.dataValues.meta_title,
      backgroundImage: doctorsCornerData.banner.backgroundImage,
      path: `Home > ${data.dataValues.meta_title}`,
    },
    featureSection: doctorsCornerData.featureSection,
    monthlyEdition: {
      cards,
      heading: doctorsCornerData.monthlyEdition.heading,
      sectionHeading: doctorsCornerData.monthlyEdition.sectionHeading,
    },
    overview: {
      descriptonSection: {
        buttonProps: cards[0].buttonProps,
        description: cards[0]?.description ?? '',
        mainHeading: cards[0].heading,
      },
      image: cards[0].image,
    },
    metaTitle: data.dataValues.meta_title,
    metaDescription: data.dataValues.meta_description,
  }
}

export const getDoctorsCornerData = async (): Promise<DoctorsCornerData> => {
  const responseData = await getAboutUsPagesData('doctors-corner')
  const cards = extractDoctorsCornerCards(responseData.data[0].card_data)
  const p = extractComponent(responseData.data[0], cards)
  return p
}
