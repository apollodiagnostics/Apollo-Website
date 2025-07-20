import { getAboutUsPagesData } from '@utils/api/dashboard'
import { QueryAboutUsSinglePageData } from 'src/models/query.models'
import { ContactUsData } from './contact-us.model'

const contactUsData: ContactUsData = {
  metaTitle: 'meta title',
  metaDescription: 'meta Description',
  banner: {
    label: 'Management Team',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Management Team  ',
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
  contactInfo: {
    address: {
      officeCategory: 'Corporate Office ',
      officeName: 'Apollo Health and Lifestyle Limited',
      location:
        '7-1-617/A, 615 & 616, Imperial Towers, 7th Floor, Ameerpet, Hyderabad, Telangana 500038',
    },
    contact: {
      heading: 'Customer Care',
      email: 'customer.care@apollodiagnostics.in',
      phone: '04049047777',
    },
    mapSrc:
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyAyOMZXsDXidzVhWywof3jRCzQ_4IlCzbY&q=17.4353826,78.4454494(Apollo Health and Lifestyle Limited)',
  },
}

function extractComponent(data: QueryAboutUsSinglePageData): ContactUsData {
  const [email, phoneNo] = data.card_data[1].description.split('|')
  return {
    banner: {
      label: data.dataValues.title,
      backgroundImage: contactUsData.banner.backgroundImage,
      path: `Home > ${data.dataValues.title}`,
    },
    contactInfo: {
      address: {
        officeCategory: 'Corporate Office ',
        officeName: data.card_data[0].nametitle,
        location: data.card_data[0].description,
      },
      contact: {
        heading: data.card_data[1].nametitle,
        email,
        phone: phoneNo,
      },
      mapSrc: contactUsData.contactInfo.mapSrc,
    },
    metaTitle: data.dataValues.meta_title,
    metaDescription: data.dataValues.meta_description,
    featureSection: contactUsData.featureSection,
  }
}

export const getContactUsData = async (): Promise<ContactUsData> => {
  const responseData = await getAboutUsPagesData('contact-us')
  const p = extractComponent(responseData.data[0])
  return p
}
