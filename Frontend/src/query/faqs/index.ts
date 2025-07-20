import { AccordionData } from '@components/common'
import { getFaqData } from '@utils/api/dashboard'
import { QueryFaqData } from 'src/models/query.models'
import { FaqsData } from './faqs.model'

const faqData: FaqsData = {
  banner: {
    label: 'FAQs',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > FAQs',
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

  accordionSection: {
    sectionHeading: 'FAQs',
    heading: 'Need Help?',
    items: [
      {
        label: 'What is Apollo Diagnostics Center ?',
        document:
          'There is no eligibility criteria for the course. Anyone interested in the sector can attend it.',
      },
      {
        label: 'What are the services on offer at Apollo Diagnostics Center ?',
      },
      { label: 'What type of tests Apollo Diagnostics Center perform ?' },
      { label: 'How long does it take to receive test results ?' },
      {
        label:
          'Do I need to make an appointment in order to be tested at an Apollo Diagnostic Center ?',
      },
    ],
  },
}

export function extractComponent(data: QueryFaqData[]): FaqsData {
  const faq: AccordionData[] = data.map((item) => {
    return {
      label: item.title,
      document: item.text,
    }
  })
  return {
    banner: faqData.banner,
    accordionSection: {
      heading: faqData.accordionSection.heading,
      items: faq,
    },
    featureSection: faqData.featureSection,
  }
}

export const getFaqsData = async (): Promise<FaqsData> => {
  const responseData = await getFaqData()
  const p = extractComponent(responseData.data.rows)
  return p
}
