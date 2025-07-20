import { NotFoundData } from './not-found.model'

const notFoundData: NotFoundData = {
  notFound: {
    image: {
      src: '/images/notFound.png',
      alt: 'not found',
    },
    sectionHeading: 'Lost?',
    heading: "Let's Find the Right Path to Your Health Needs.",
    description:
      "We couldn't locate that page, but we're here to guide you. Click below to return to our main site and continue your health journey.",
    homePageButton: {
      label: 'Home page',
      link: '/',
    },
  },
}

export const getNotFoundData = async (): Promise<NotFoundData> => {
  const p = new Promise<NotFoundData>((resolve) => {
    resolve(notFoundData)
  })
  return p
}
