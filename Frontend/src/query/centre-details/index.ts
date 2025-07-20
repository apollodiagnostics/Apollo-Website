import { LinkData } from '@models'
import {
  getNearCitiesDetails,
  getSingleCenterDetails,
} from '@utils/api/dashboard'
import { QueryCenterData, QuerySingleCenterData } from 'src/models/query.models'
import { CentreDetails } from './centre-details.model'

export type { CentreDetails }

const centreData: CentreDetails = {
  banner: {
    label: 'Centre details',
    backgroundImage: {
      alt: 'banner',
      src: '/images/bannerBg.png',
    },
    path: 'Home > For Patients > Centre details',
  },
  buisness: {
    buisnessData: {
      heading: 'Business Hours',
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },
    parkingOptions: {
      heading: 'Parking Options',
      subHeading: 'Free Parking on Site',
      options: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },
  },
  featureSection: {
    heading: 'Feature Section',
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
  overView: {
    images: [
      {
        src: '/images/centreDetailsImage.png',
        alt: 'overview',
      },
      {
        src: '/images/centreDetails.png',
        alt: 'overview',
      },
      {
        src: '/images/centreDetailsCard.png',
        alt: 'overview',
      },
    ],
  },
  labs: {
    otherLabs: {
      heading: 'Other Labs and Centres of Apollo Diagnostics',
      cities: [
        { label: 'Hyderabad', link: '/find-nearest-centre?city=9' },
        { label: 'Delhi', link: '/find-nearest-centre?city=3031' },
        { label: 'Mumbai', link: '/find-nearest-centre?city=285' },
        { label: 'Chennai', link: '/find-nearest-centre?city=287' },
        { label: 'Pune', link: '/find-nearest-centre?city=277' },
        { label: 'Kolkata', link: '/find-nearest-centre?city=264' },
      ],
    },
  },
  nearbyLocalities: {
    nearbyLocalities: {
      heading: 'Nearby Localities',
      localities: [
        { label: 'SL INDORE', link: '/' },
        { label: 'PCC APOLLO HOSPITAL INDORE', link: '/' },
        { label: 'RLM DR ABC CLINIC AND PATHOLOGY', link: '/' },
        { label: 'PCC APOLLO HOSPITAL INDORE', link: '/' },
        { label: 'SL INDORE', link: '/' },
        { label: 'PCC APOLLO HOSPITAL INDORE', link: '/' },
        { label: 'SL INDORE', link: '/' },
        { label: 'PCC APOLLO HOSPITAL INDORE', link: '/' },
        { label: 'RLM DR ABC CLINIC AND PATHOLOGY', link: '/' },
        { label: 'PCC APOLLO HOSPITAL INDORE', link: '/' },
        { label: 'SL INDORE', link: '/' },
        { label: 'PCC APOLLO HOSPITAL INDORE', link: '/' },
      ],
    },
  },
  tags: {
    nearbyLocalities: {
      heading: 'Tags Near You',
      localities: [
        { label: 'Lifestyle packages', link: '/lifestyle-packages' },
        { label: "Men's health", link: '/mens-health' },
        { label: "Women's health", link: '/womens-health' },
        { label: 'Most booked packages', link: '/most-booked-packages' },
        { label: 'Tax saver packages', link: '/packages-booking' },
        { label: "Women's health packages", link: '/womens-health-packages' },
        {
          label: 'Home sample collection',
          link: '/for-patients/home-sample-collection/hyderabad',
        },
        { label: 'Test by organs', link: '/test-booking' },
        { label: 'Most booked tests', link: '/most-booked-tests' },
        {
          label: "Doctor's corner",
          link: '/doctors-corner',
        },
        {
          label: 'Book a Slot',
          link: '/book-walk-in-slots',
        },
      ],
    },
  },
  ratingSection: {
    rating: '3.5',
  },
}

function extractData(data: QuerySingleCenterData): CentreDetails {
  return {
    banner: {
      label: data.centre_name,
      backgroundImage: centreData.banner.backgroundImage,
      path: centreData.banner.path,
    },
    buisness: centreData.buisness,
    featureSection: centreData.featureSection,
    overView: centreData.overView,
    labs: centreData.labs,
    tags: {
      nearbyLocalities: {
        heading: `Tags Near to ${data.city}`,
        localities: centreData.tags.nearbyLocalities.localities,
      },
    },
    nearbyLocalities: centreData.nearbyLocalities,
    ratingSection: {
      rating: data.rating,
    },
  }
}

function extractLocalities(data: QueryCenterData[]): LinkData[] {
  const allTags: LinkData[] = data.map((item) => {
    return {
      label: item.centre_name,
      link: `/find-nearest-centre/centre-details/${item.locality}`,
    }
  })
  return allTags
}

export const getCentreDetails = async (id: string): Promise<CentreDetails> => {
  const responseData = await getSingleCenterDetails(id)

  const p = extractData(responseData.data.rows[0])
  const allNearCenters = await getNearCitiesDetails(
    responseData.data.rows[0].city_id.toString()
  )
  p.nearbyLocalities.nearbyLocalities.localities = extractLocalities(
    allNearCenters.data.rows
  )
  console.log(p)
  return p
}
