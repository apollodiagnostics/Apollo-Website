import { getAboutUsPagesData } from '@utils/api/dashboard'
import { QueryAboutUsSinglePageData } from 'src/models/query.models'
import { TermsAndConditionsData } from './privacy-policy.model'

const privacyPolicyData: TermsAndConditionsData = {
  metaTitle: 'meta title',
  metaDescription: 'description',
  banner: {
    label: 'Privacy Policy',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Privacy Policy',
  },
  termsOfUse: {
    sectionHeading: 'Privacy Policy',
    heading: 'Privacy Policy',
    description:
      'These terms of use (this “Agreement”) set forth the standards of use of www.apollodiagnostics.in located at https://www.apollodiagnostics.in and all of its associated pages and contents therein (‘Website’ or ‘Web-portal’). The words “You” or “User” “Your” as used in this Agreement means to include and refers to all individuals accessing or using the Website for any reason.PLEASE NOTE THAT BY INDICATING YOUR ACCEPTANCE OF THESE TERMS AND SELECTING THE “I AGREE” BUTTON OR BY USING OUR SERVICES, YOU ARE REPRESENTING THAT: (1) YOU ARE OVER THE AGE OF 18 YEARS AND ARE COMPETENT TO AGREEMENT, (2) YOU HAVE THE RIGHT AND AUTHORITY TO LEGALLY BIND YOURSELF OR YOUR FAMILY MEMBERS OR YOUR COMPANY, AS APPLICABLE, (3) THE INFORMATION PROVIDED BY YOU ARE EITHER YOUR PROPERTY OR YOU ARE AUTHORISED PERSON FOR THE SAME to share with us AND (4) CONSENTING TO BE LEGALLY BOUND BY ALL OF THE TERMS OF THIS TERMS OF USE AND PRIVACY POLICY /AGREEMENT.FURTEHR, You agree that You will not: (a) use the Services for any illegal or unauthorised or unethical purposes; (b) copy, reverse engineer, modify, amend, decompile or disassemble our software or Website, in whole or in part and (c) shall use the Services or our Website platform in line with this Agreement and Privacy Policy.This Agreement will come into effect from the date You click the “I AGREE” button (“Effective Date”).',
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
    accordion: [
      {
        label: 'Eligibility',
      },
      {
        label: 'Right',
      },
      { label: 'Registration' },
      { label: 'Services' },
    ],
  },
}

function extractComponent(
  data: QueryAboutUsSinglePageData
): TermsAndConditionsData {
  return {
    banner: {
      label: data.dataValues.title,
      backgroundImage: privacyPolicyData.banner.backgroundImage,
      path: `Home > ${data.dataValues.title}`,
    },
    featureSection: privacyPolicyData.featureSection,
    accordionSection: privacyPolicyData.accordionSection,
    termsOfUse: {
      sectionHeading: data.dataValues.title,
      heading: data.dataValues.title,
      description: data.dataValues.body,
    },
    metaTitle: data.dataValues.title,
    metaDescription: data.dataValues.meta_description,
  }
}

export const getPrivacyPolicyData =
  async (): Promise<TermsAndConditionsData> => {
    const responseData = await getAboutUsPagesData('privacy-policy')
    const p = extractComponent(responseData.data[0])
    return p
  }
