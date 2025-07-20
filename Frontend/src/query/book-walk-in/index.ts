import { getAllCities } from '@utils/api/dashboard'
import { extractCityInfoFromQuery } from '@utils/query'
import { BookWalkInData } from './book-walk-in.model'

const bookWalkInData: BookWalkInData = {
  banner: {
    label: 'Book Walk-In Slots',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Book Walk-In Slots',
  },
  bookWalkIn: {
    heading: 'Book Your Test Slot',
    cities: [
      {
        label: 'noida',
        value: 'noida',
      },
      {
        label: 'delhi',
        value: 'delhi',
      },
    ],
    slots: [
      {
        label: '9:00 - 10:00',
        value: '9:00 - 10:00',
      },
      {
        label: '10:00 - 11:00',
        value: '11:00 - 12:00',
      },
      {
        label: '1:00 - 2:00',
        value: '2:00 - 3:00',
      },
      {
        label: '3:00 - 4:00',
        value: '5:00 - 6:00',
      },
    ],
    button: {
      label: 'submit',
    },
  },
  bookOnline: {
    sectionHeading: 'Walk-in tests',
    mainHeading: 'Book your online slots',
    heading: 'Minimal waiting time & online reports',
    description:
      'In the current scenario, where people are overly anxious about stepping out into public places, it becomes a cause for concern when one has no options but to do so. This is especially the case with people who need to get their tests done, or periodic health checks for pregnant women and people with heart issues. To address this concern and offer an optimum solution, Apollo Diagnostics allows citizens to book their tests online, book a convenient slot and simply walk in at the stipulated time for the scheduled tests. With quick sample collections and less waiting time, we are trying our best to offer maximum convenience to every person we serve. All our labs strictly follow ICMR guidelines, and maintain strict hygiene protocols. All high-touch areas and objects are sanitized after each patient. Our technicians follow SMS (Social Distancing + Mask + Sanitization), and use PPE suits. In the current scenario, where people are overly anxious about stepping out into public places, it becomes a cause forconcern when one has no options but to do so. This is especially thecase with people who need to get their tests done, or periodic healthchecks for pregnant women and people with heart issues. To addressthis concern and offer an optimum solution, Apollo Diagnostics allowscitizens to book their tests online, book a convenient slot and simplywalk in at the stipulated time for the scheduled tests. With quicksample collections and less waiting time, we are trying our best tooffer maximum convenience to every person we serve. All our labsstrictly follow ICMR guidelines, and maintain strict hygieneprotocols. All high-touch areas and objects are sanitized after eachpatient. Our technicians follow SMS (Social Distancing + Mask ',
  },
  highlights: {
    sectionHeading: 'Highlights',
    mainHeading: 'Your safety is our first priority.',
    cards: [
      {
        image: {
          src: '/images/h1.png',
          alt: 'logo',
        },
        heading: 'Provide Details',
        description:
          'Enter your information and specify the tests required or upload a prescription.',
      },
      {
        image: {
          src: '/images/h2.png',
          alt: 'logo',
        },
        heading: 'Select Time Slot',
        description:
          'Click on a convenient time slot and confirm your booking.',
      },
      {
        image: {
          src: '/images/h3.png',
          alt: 'logo',
        },
        heading: 'E-Confirmation',
        description: 'Receive a confirmation SMS instantly after booking.',
      },
      {
        image: {
          src: '/images/h4.png',
          alt: 'logo',
        },
        heading: 'Arrival Instructions',
        description: 'Arrive 5 minutes before your scheduled time.',
      },
    ],
  },
  termsAndConditions: {
    sectionHeading: 'Walk-in tests',
    mainHeading: 'Terms & Conditions',
    description:
      'Maintaining at least a 1-metre distance between yourself and others is mandatory Only one attendant to accompany a patient Wearing a mask is compulsory, ensuring it covers both your nose, mouth and chin Hand sanitization is a must before entering the centre',
  },
  walkInCondtions: {
    sectionHeading: 'Walk-in tests',
    mainHeading: 'Terms & Conditions',
    description: [
      'Maintaining at least a 1-metre distance between yourself and others is mandatory.',
      'Only one attendant to accompany a patient. ',
      'Wearing a mask is compulsory, ensuring it covers both your nose, mouth and chin Hand ',
      'Hand sanitization is a must before entering the centre',
    ],
  },
}

export const getBookWalkInData = async (): Promise<BookWalkInData> => {
  bookWalkInData.bookWalkIn.cities = extractCityInfoFromQuery(
    (await getAllCities()).data.rows
  )
  const p = new Promise<BookWalkInData>((resolve) => {
    resolve(bookWalkInData)
  })
  return p
}
