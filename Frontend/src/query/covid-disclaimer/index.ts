import { getAboutUsPagesData } from '@utils/api/dashboard'
import { QueryAboutUsSinglePageData } from 'src/models/query.models'
import { CovidDisclaimerData } from './covid-disclaimer.model'

const covidDisclaimerData: CovidDisclaimerData = {
  metaTitle: 'title',
  metaDescription: 'meta description',
  banner: {
    label: 'Covid-19 RTPCR Disclaimer',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Covid-19 RTPCR Disclaimer',
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
  overviewSection: {
    description:
      'As per state government guidelines, it is mandatory to generate SRF - ID (Specimen Referral Form) as per ICMR Guidelines for COVID-19 RT PCR Test. In order to generate it, patients are requested to share OTP sent on mobile number with the phlebotomist who is taking the sample.In case the government portal is not working, our phlebotomist will reach out again as without SRF ID, sample will not be registered and processed. Till that time, samples will be safely stored and are maintained at an appropriate temperature.',
    heading: 'Covid-19 RTPCR Disclaimer',
    image: { src: '/images/covidDisclaimer.png', alt: 'overview' },
  },
}

function extractComponent(
  data: QueryAboutUsSinglePageData
): CovidDisclaimerData {
  return {
    banner: {
      label: data.dataValues.title,
      backgroundImage: covidDisclaimerData.banner.backgroundImage,
      path: `Home > ${data.dataValues.title}`,
    },
    featureSection: covidDisclaimerData.featureSection,
    overviewSection: {
      description: data.dataValues.body,
      heading: covidDisclaimerData.overviewSection.heading,
      image: covidDisclaimerData.overviewSection.image,
    },
    metaTitle: data.dataValues.meta_title,
    metaDescription: data.dataValues.meta_description,
  }
}

export const getCovidDisclaimerData =
  async (): Promise<CovidDisclaimerData> => {
    const responseData = await getAboutUsPagesData('covid-19-rt-pcr-disclaimer')
    const p = extractComponent(responseData.data[0])
    return p
  }
