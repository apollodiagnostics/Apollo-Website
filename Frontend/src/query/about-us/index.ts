import { CurrentOpeningData } from '@components/common/Cards/CurrentOpeningCard'
import { InsightsData } from '@components/entities'
import { getAboutUsPagesData, getTestimonialsData } from '@utils/api/dashboard'
import {
  QueryAboutUsCards,
  QueryAboutUsSinglePageData,
  QueryTestimonialCard,
} from 'src/models/query.models'
import { ApolloDiagnosticsData } from './about-us.model'

const apolloDiagnosticsData: ApolloDiagnosticsData = {
  metaDescription: '',
  metaTitle: '',
  banner: {
    label: 'Apollo Diagnostics',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Apollo Diagnostics',
  },
  experience: {
    sectionHeading: 'Experience at Apollo',
    mainHeading:
      '“Experience safe, reliable diagnostics, powered by expertise”',
    description:
      'Apollo Diagnostics is the result of the ‘good health for all’ mission that is spurring the Apollo Hospitals Group to touch a billion lives. Following the corporate credo of bringing quality, affordable healthcare closer to the consumer, 2015 saw 100+ Apollo Diagnostics centres, which has now grown to 1500 Patient Care Centres and 120 Labs in 2022 , springing up in neighbourhoods across India, delivering expertise that is empowering to doctors and patients alike. Apollo Diagnostics expert technicians and state-of-the-art diagnostic equipment are constantly guided by Apollo’s 39-years legacy of excellence to ensure the accuracy and timeliness of test results. Apollo Diagnostics has already earned for itself the reputation of being the most preferred, one-stop destination for all common to complex pathology tests. Initiatives such as ongoing skill development & enhancement programs for the teams, regular auditing of processes and implementing patient feedback, enable a seamless experience for all stakeholders of Apollo Diagnostics.',
  },
  insights: {
    sectionHeading: 'Apollo Hospitals Group',
    heading: 'India’s leading healthcare system',
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
  overview: {
    videos: [
      {
        src: 'https://www.youtube.com/embed/cBP25yxo2Ys',
      },
      { src: 'https://www.youtube.com/embed/HsZaPlzN0vQ' },
      { src: 'https://www.youtube.com/embed/L_K8sC9a4p8' },
    ],
  },
  clientTestimonials: {
    sectionHeading: 'Client Testimonials',
    heading: 'Hear from Our Happy Customers',
    buttonProps: {
      label: 'View More',
      link: '/',
    },
    openings: [
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
        link: '/',
      },
      {
        icon: {
          src: '/images/feature3.png',
          alt: '',
        },
        heading: 'Call us to book your tests',
        description: 'Our team of experts will guide you.',
        link: '/',
      },
      {
        icon: {
          src: '/images/feature1.png',
          alt: '',
        },
        heading: 'WhatsApp Booking',
        description: 'Text us on WhatsApp to book a test',
        link: '/',
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
    sectionHeading: 'Apollo Hospitals Group',
    heading: 'India’s leading healthcare system',
    data: allCards,
  }
}

function extractComponent(
  data: QueryAboutUsSinglePageData,
  testimonials: QueryTestimonialCard[]
): ApolloDiagnosticsData {
  const cards: CurrentOpeningData[] = testimonials.slice(0, 3).map((item) => {
    return {
      description: item.description,
      heading: item.title,
      author: item.author,
      label: item.location,
      icon: { src: '/images/defaultUser.png', alt: 'image' },
    }
  })
  return {
    banner: {
      label: data.dataValues.title,
      backgroundImage: apolloDiagnosticsData.banner.backgroundImage,
      path: `Home > ${data.dataValues.title}`,
    },
    clientTestimonials: {
      heading: apolloDiagnosticsData.clientTestimonials.heading,
      sectionHeading: apolloDiagnosticsData.clientTestimonials.sectionHeading,
      openings: cards,
      buttonProps: {
        label: 'View More',
        link: '/testimonials',
      },
    },
    experience: {
      description: data.dataValues.body,
      mainHeading: apolloDiagnosticsData.experience.mainHeading,
      sectionHeading: apolloDiagnosticsData.experience.sectionHeading,
    },
    featureSection: apolloDiagnosticsData.featureSection,
    insights: extractInsightsCards(data.card_data),
    overview: apolloDiagnosticsData.overview,
    metaTitle: data.dataValues.meta_title,
    metaDescription: data.dataValues.meta_description,
  }
}

export const getAboutUsData = async (): Promise<ApolloDiagnosticsData> => {
  const [aboutUsData, clientTestimonialsData] = await Promise.all([
    getAboutUsPagesData('about-us'),
    getTestimonialsData(),
  ])
  const p = extractComponent(
    aboutUsData.data[0],
    clientTestimonialsData.data.rows
  )
  return p
}
