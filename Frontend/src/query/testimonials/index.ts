import { CurrentOpeningData } from '@components/common/Cards/CurrentOpeningCard'
import { getAboutUsPagesData, getTestimonialsData } from '@utils/api/dashboard'
import {
  QueryAboutUsSinglePageData,
  QueryTestimonialCard,
} from 'src/models/query.models'
import { TestimonialsData } from './testimonials.model'

const testimonialsData: TestimonialsData = {
  metaTitle: 'meta title',
  metaDescription: 'description',
  banner: {
    label: 'Testimonials',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Testimonials',
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
    descriptionsectionProps: {
      sectionHeading: 'Client Testimonials',
      mainHeading: 'Patient Testimonials: Witness Our Impact on Millions',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ut consectetur porttitor in euismod. Lacus habitasse praesent magna donec viverra dui morbi mattis at. Nulla pulvinar purus eget justo id viverra. Ullamcorper sit aliquam volutpat aliquam. Nunc nibh sed venenatis consectetur aliquet lacus nulla massa. Praesent velit a vel quis quisque non amet vel. Dolor ut platea et porttitor ornare tortor leo. Commodo eu mattis aenean consectetur pulvinar pulvinar lectus in. Purus sem dis justo ut tincidunt sem.',
    },
    image: {
      alt: 'testimonials',
      src: '/images/clientTestimonials.png',
    },
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

  feedbacks: {
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
function getSingleTestimonialCardData(
  data: QueryTestimonialCard[]
): CurrentOpeningData[] {
  const cards: CurrentOpeningData[] = data.map((item) => {
    return {
      description: item.description,
      heading: item.title,
      author: item.author,
      label: item.location,
      icon: { src: '/images/defaultUser.png', alt: 'image' },
    }
  })
  return cards
}
export function extractComponent(
  allItems: QueryAboutUsSinglePageData,
  data: QueryTestimonialCard[]
): TestimonialsData {
  return {
    feedbacks: {
      openings: getSingleTestimonialCardData(data),
    },
    banner: testimonialsData.banner,
    clientTestimonials: {
      descriptionsectionProps: {
        sectionHeading: 'Client Testimonials',
        description: allItems.card_data[0].description,
        mainHeading: allItems.card_data[0].nametitle,
      },
      image: {
        alt: 'testimonials',
        src: '/images/clientTestimonials.png',
      },
    },
    featureSection: testimonialsData.featureSection,
    overview: testimonialsData.overview,
    metaTitle: allItems.dataValues.meta_title,
    metaDescription: allItems.dataValues.meta_description,
  }
}
export const getTestimonialsPageData = async (): Promise<TestimonialsData> => {
  const [allItems, testimonials] = await Promise.all([
    getAboutUsPagesData('testimonials'),
    getTestimonialsData(),
  ])
  const p = extractComponent(allItems.data[0], testimonials.data.rows)
  return p
}
