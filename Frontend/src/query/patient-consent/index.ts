import { AccordionData } from '@components/common'
import { getAboutUsPagesData } from '@utils/api/dashboard'
import {
  QueryAboutUsCards,
  QueryAboutUsSinglePageData,
} from 'src/models/query.models'
import { PatientConsentData } from './patient-consent.model'

const patientConsentData: PatientConsentData = {
  metaTitle: 'meta title',
  metaDescription: 'description',
  banner: {
    label: 'Patient Consent',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Patient Consent',
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
  information: {
    sectionHeading: 'Information',
    heading: 'Patient Consent',
    accordion: [
      {
        label: 'My Rights',
      },
      {
        label: 'Purpose of Collection',
      },
      { label: 'Data Collection by AHLL' },
      {
        label: 'Disclosure and Transfer of Personal Information',
      },
    ],
  },
}
export function extractAccordionData(
  data: QueryAboutUsCards[]
): AccordionData[] {
  const allItems: AccordionData[] = data.map((item) => {
    return {
      label: item.nametitle,
      document: item.description,
    }
  })
  return allItems
}
function extractComponent(
  data: QueryAboutUsSinglePageData
): PatientConsentData {
  return {
    banner: {
      label: data.dataValues.title,
      backgroundImage: patientConsentData.banner.backgroundImage,
      path: patientConsentData.banner.path,
    },
    featureSection: patientConsentData.featureSection,
    information: {
      accordion: extractAccordionData(data.card_data),
      sectionHeading: 'Information',
      heading: 'Patient Consent',
    },
    metaTitle: data.dataValues.meta_title,
    metaDescription: data.dataValues.meta_description,
  }
}

export const getPatientConsentData = async (): Promise<PatientConsentData> => {
  const responseData = await getAboutUsPagesData('patient-consent')
  const p = extractComponent(responseData.data[0])
  return p
}
