import { getSingleBlogCardData } from '@query/blogs'
import { BlogsCardData } from '@components/common/Cards/BlogsCard'
import { FeatureCardSectionData } from '@components/entities'
import { getAboutUsPagesData, getBlogsData } from '@utils/api/dashboard'
import {
  QueryAboutUsSinglePageData,
  QueryBlogs,
  QueryAboutUsCards,
} from 'src/models/query.models'
import { ApolloAHLLData } from './apollo-ahll.model'

const apolloAHLLData: ApolloAHLLData = {
  metaTitle: '',
  metaDescription: '',
  banner: {
    label: 'Apollo Health & Lifestyle Limited',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Apollo Health & Lifestyle Limited (AHll)',
  },
  overviewSection: {
    images: [
      {
        src: '/images/ahll/ahllImage1.png',
        alt: 'overview',
      },
      { src: '/images/ahll/ahllImage2.png', alt: 'overview' },
      { src: '/images/ahll/ahllImage3.png', alt: 'overview' },
    ],
  },
  blogs: {
    sectionHeading: 'Blogs',
    heading: 'Latest Healthcare Updates',
    buttonProps: {
      label: 'View All Blogs',
      link: '/blogs',
    },
    cards: [
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
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
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
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
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
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
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
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
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
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
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
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
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
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
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
    ],
  },
  highlights: {
    sectionHeading: 'Highlights',
    mainHeading: 'Visionary Leadership in Healthcare',
    cards: [
      {
        heading: 'Diverse Healthcare Offerings',
        description:
          'AHLL offers a comprehensive range of healthcare services including multi-specialty clinics, diabetes management clinics, women',
        image: {
          alt: 'rapid growth logo',
          src: '/images/featureCard1.png',
        },
      },
      {
        heading: 'Visionary Leadership',
        description:
          'AHLL offers a comprehensive range of healthcare services including multi-specialty clinics, diabetes management clinics, women',
        image: {
          alt: 'Collaborative Environment logo',
          src: '/images/featureCard2.png',
        },
      },
      {
        heading: 'Strategic Acquisitions',
        description:
          'AHLL offers a comprehensive range of healthcare services including multi-specialty clinics, diabetes management clinics, women',
        image: {
          alt: 'Supportive Workplace logo',
          src: '/images/featureCard1.png',
        },
      },
      {
        heading: 'Adaptive Expansion',
        description:
          'AHLL offers a comprehensive range of healthcare services including multi-specialty clinics, diabetes management clinics, women',
        image: {
          alt: 'Diverse Work Culture logo',
          src: '/images/featureCard4.png',
        },
      },
      {
        heading: ' Innovation Hub',
        description:
          'AHLL offers a comprehensive range of healthcare services including multi-specialty clinics, diabetes management clinics, women',
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
  healthAndLifestyle: {
    sectionHeading: 'Apollo Health & Lifestyle Limited',
    mainHeading: 'Redefining Healthcare Standards in India',
    description:
      'Apollo Health & Lifestyle Limited (AHLL), a wholly owned subsidiary of Apollo Hospitals Enterprise Limited (AHEL), is one of the largest players in the retail healthcare segment in India. The Company runs the largest chain of standardised primary healthcare models Apollo Clinics – multi-specialty clinics in India and Middle East, Apollo Sugar – Diabetes management clinics, Apollo Cradle – for Women & Children, Apollo Spectra – for planned surgery and Apollo Diagnostics – Diagnostic tests.In India, the healthcare industry is undergoing a revolutionary change mainly due to the rising income levels, increasing awareness about lifestyle diseases, the changing attitude from prescriptive to preventive healthcare, the growing insurance market and increasing government spending on healthcare. New and innovative healthcare delivery models are entering the market including planned surgical centres, similar to the Ambulatory surgery centres in the U.S.',
  },
}

function extractFeatureCards(
  data: QueryAboutUsCards[]
): FeatureCardSectionData {
  const allCards: FeatureCardSectionData['cards'] = data.map((item) => {
    return {
      image: {
        alt: 'Collaborative Environment logo',
        src: '/images/about-ahll.png',
      },
      heading: item.nametitle,
      description: item.description,
    }
  })
  return {
    sectionHeading: 'Highlights',
    mainHeading: 'Visionary Leadership in Healthcare',
    cards: allCards,
  }
}

function extractComponent(data: QueryAboutUsSinglePageData): ApolloAHLLData {
  return {
    banner: {
      label: data.dataValues.title,
      backgroundImage: apolloAHLLData.banner.backgroundImage,
      path: `Home > ${data.dataValues.title}`,
    },
    blogs: apolloAHLLData.blogs,
    featureSection: apolloAHLLData.featureSection,
    healthAndLifestyle: {
      description: data.dataValues.body,
      mainHeading: apolloAHLLData.healthAndLifestyle.mainHeading,
      sectionHeading: apolloAHLLData.healthAndLifestyle.sectionHeading,
    },
    highlights: extractFeatureCards(data.card_data),
    overviewSection: apolloAHLLData.overviewSection,
    metaTitle: data.dataValues.meta_title,
    metaDescription: data.dataValues.meta_description,
  }
}

function extractBlogs(data: QueryBlogs[]): BlogsCardData[] {
  const blogCards: BlogsCardData[] = data.map((item) =>
    getSingleBlogCardData(item)
  )
  return blogCards
}

export const getApolloAHLLData = async (): Promise<ApolloAHLLData> => {
  const blogsCards = extractBlogs(
    (await getBlogsData({ category: '0', limit: '9', offset: '0' })).data.rows
  )
  const responseData = await getAboutUsPagesData('about-ahll')
  const p = extractComponent(responseData.data[0])
  p.blogs.cards = blogsCards
  return p
}
