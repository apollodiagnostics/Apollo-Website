import { BANNERS_SLUGS, defaultCity, ImageType, LinkData } from '@models'
import { getSingleBlogCardData } from '@query/blogs'
import { BlogsCardData } from '@components/common/Cards/BlogsCard'
import { TestimonialCardData } from '@components/common/Cards/TestimonialsCard'
import {
  AdvertisementSectionProps,
  ImageCarouselSectionProps,
  TestByBodyOrgansProps,
  TestimonialsSectionProps,
} from '@components/feature/Home'
import {
  getAllBanners,
  getAllConditionByCityData,
  getBlogsData,
  getMostBookedItems,
  getPersonalizedPackagesData,
  getTestimonialsData,
} from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import {
  extractMensHealthFromQueryCategory,
  extractPackagesFromMostBookedItems,
  extractSelectionFromQueryCategory,
  extractWomenHealthPackageFromQueryCategory,
  extractWomenPackageFromQueryCategory,
} from '@utils/query'
import {
  QueryAllConditions,
  QueryBanner,
  QueryBlogs,
  QueryTestimonialCard,
} from 'src/models/query.models'
import { HomePageData } from './home.model'

const homePageData: HomePageData = {
  imageCarouselSection: {
    images: [
      {
        src: '/images/imageCarouselImage1.png',
        alt: 'imageCarouselImage1',
      },
      {
        src: '/images/imageCarouselImage3.png',
        alt: 'imageCarouselImage3',
      },
    ],
  },
  featureSection: {
    heading: 'Need help?',
    featureCards: [
      {
        icon: {
          src: '/images/prescription.png',
          alt: '',
        },
        heading: 'Have a Prescription?',
        description: 'Upload and book your tests',
        link: '/upload-prescription',
      },
      {
        icon: {
          src: '/images/feature3.png',
          alt: '',
        },
        heading: 'Call us to book your tests',
        description: 'Our team of experts will guide you',
        link: 'tel:040-4444-2424',
        useAnchor: true,
      },
      {
        icon: {
          src: '/images/whatsapp.png',
          alt: '',
        },
        heading: 'WhatsApp Booking',
        description: 'Text us on WhatsApp to book a test',
        link: 'https://api.whatsapp.com/send/?phone=918978689444&text=Hi&type=phone_number&app_absent=0',
        useAnchor: true,
      },
    ],
  },
  testByBodyOrgans: {
    sectionHeader: {
      sectionHeading: 'TEST',
      heading: 'Tests by Body Organs',
    },
    tests: [
      {
        image: {
          src: '/images/heartImage.png',
          alt: 'image',
        },
        label: 'kidney',
        link: '/about-us',
      },
      {
        image: {
          src: '/images/heartImage.png',
          alt: 'image',
        },
        label: 'kidney',
        link: '/about-us',
      },
      {
        image: {
          src: '/images/heartImage.png',
          alt: 'image',
        },
        label: 'kidney',
        link: '/about-us',
      },
      {
        image: {
          src: '/images/heartImage.png',
          alt: 'image',
        },
        label: 'kidney',
        link: '/about-us',
      },
      {
        image: {
          src: '/images/heartImage.png',
          alt: 'image',
        },
        label: 'kidney',
        link: '/about-us',
      },
      {
        image: {
          src: '/images/heartImage.png',
          alt: 'image',
        },
        label: 'kidney',
        link: '/about-us',
      },
      {
        image: {
          src: '/images/heartImage.png',
          alt: 'image',
        },
        label: 'kidney',
        link: '/about-us',
      },
      {
        image: {
          src: '/images/heartImage.png',
          alt: 'image',
        },
        label: 'kidney',
        link: '/about-us',
      },
      {
        image: {
          src: '/images/heartImage.png',
          alt: 'image',
        },
        label: 'kidney',
        link: '/about-us',
      },
      {
        image: {
          src: '/images/heartImage.png',
          alt: 'image',
        },
        label: 'kidney',
        link: '/about-us',
      },
      {
        image: {
          src: '/images/heartImage.png',
          alt: 'image',
        },
        label: 'kidney',
        link: '/about-us',
      },
    ],
    viewAllButton: {
      label: 'View all',
      link: '/about-us',
    },
  },
  packagesSection: {
    sectionHeading: 'PACKAGES',
    heading: 'Lifestyle Packages',
    button: {
      label: 'View All',
      link: '/lifestyle-packages',
    },
    cardData: [
      {
        packages: [
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
        ],
      },
    ],
  },
  mostBookedPackagesSection: {
    button: {
      label: 'View All',
      link: '/most-booked-packages',
    },
    cards: [],
    heading: 'Recommended Packages',
  },
  advertisementSection1: {
    image: {
      src: '/images/advertisement3.png',
      alt: 'Advertisement1',
    },
    link: '/book-a-test',
  },
  advertisementSection2: {
    image: {
      src: '/images/advertisement2.png',
      alt: 'Advertisement2',
    },
    link: '/',
  },
  advertisementSection3: {
    image: {
      src: '/images/advertisement1.png',
      alt: 'Advertisement3',
    },
    link: '/',
  },
  personalizedHealthCheckupSection: {
    sectionHeading: 'PACKAGES',
    heading: 'Personalized Health Checkup',
    cardData: [
      {
        heading: "MEN'S HEALTH",
        button: {
          label: 'View All',
          link: '/mens-health',
        },
        packages: [
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
        ],
      },
      {
        heading: "WOMEN'S HEALTH",
        button: {
          label: 'View All',
          link: '/womens-health',
        },
        packages: [
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
        ],
      },
    ],
  },
  whyChooseUsSection: {
    image: {
      src: '/images/whyChooseUs.png',
      alt: 'Why Choose Us',
    },
  },
  mostBookedTestSection: {
    button: {
      label: 'View All',
      link: '/most-booked-tests',
    },
    cards: [],
    heading: 'Most Booked Tests',
  },
  womenHealthPackageSection: {
    sectionHeading: 'PACKAGES',
    heading: 'Women Health Packages',
    button: {
      label: 'View All',
      link: '/womens-health-packages',
    },
    cardData: [
      {
        packages: [
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
          {
            label: 'Selection Card',
            link: '/',
            image: {
              src: '/images/SelectionCard.png',
              alt: 'Placeholder image',
            },
          },
        ],
      },
    ],
  },
  taxSavingPackagesSection: {
    button: {
      label: 'View All',
      link: '/packages-booking',
    },
    cards: [],
    sectionHeading: 'TAX PACKAGES',
    heading: 'Tax Saver Packages',
  },
  timeLineSection: {
    heading: 'Easy ordering in 3 Steps',
    sectionHeading: 'OUR PROCESS',
    image: {
      src: '/images/timelineSection.png',
      alt: 'TimeLine',
    },
    timeLineData: {
      steps: [
        {
          label: 'Select Test/Package',
          image: {
            src: '/images/timeline/test.png',
            alt: 'timeline images',
          },
        },
        {
          label: 'Choose Date & Time for Home Sample Collection',
          image: {
            src: '/images/timeline/cal.png',
            alt: 'timeline images',
          },
        },
        {
          label: 'Phlebotomist will visit as per the chosen Date/Time',
          image: {
            src: '/images/timeline/agent.png',
            alt: 'timeline images',
          },
        },

        // {
        //   label: 'Our Collection Agent Visits to You',
        //   image: {
        //     src: '/images/timeline/agent.png',
        //     alt: 'timeline images',
        //   },
        // },
        // {
        //   label: 'Testing Done at Lab',
        //   image: {
        //     src: '/images/timeline/lab.png',
        //     alt: 'timeline images',
        //   },
        // },
        // {
        //   label: 'View/ Download Your Report Online',
        //   image: {
        //     src: '/images/timeline/report.png',
        //     alt: 'timeline images',
        //   },
        // },
      ],
    },
  },
  experienceSection: {
    sectionHeading: {
      heading: '“Experience safe, reliable diagnostics, powered by expertise”',
      sectionHeading: 'Experience at Apollo',
      description:
        'A diagnostic service which consistently delivers accurate and precise results, minimizing errors. This is achieved through the use of advanced diagnostic technologies, coupled with stringent quality control processes. At Apollo Diagnostics, we follow standardized protocols and guidelines that align with international quality standards including ISO certifications, CAP accreditation & NABL in healthcare to ensure precision, quality and efficiency of results.',
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
  },
  blogs: {
    sectionHeading: 'Blogs',
    heading: 'Blogs Corner',
    buttonProps: {
      label: 'View All',
      link: '/blogs',
    },
    cards: [
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
      {
        image: { src: '/images/blogCard.png', alt: 'blogs' },
        date: 'Jan 20, 2024',
        time: '7 min read',
        heading: 'Kidney Concerns: Diabetic Nephropathy and Symptoms',
        description:
          'Lorem ipsum dolor sit amet consectetur. Eget gravida condimentum in auctor turpis non.',
        buttonProps: {
          label: 'Read more',
          link: '/',
        },
      },
    ],
  },
  testimonials: {
    cards: [
      {
        heading: 'What People Say!',
        image: {
          src: '/images/invertedComma.png',
          alt: '',
        },
        description:
          'Appollo Diagnostivs kept me at ease during the sample collection process, the way they supported me to be at my convenience and confidence',
        name: 'Mr. Lakshmi Kantham',
        address: 'Pune,Maharashtra',
      },
      {
        heading: 'What People Say!',
        image: {
          src: '/images/invertedComma.png',
          alt: '',
        },
        description:
          'Appollo Diagnostivs kept me at ease during the sample collection process, the way they supported me to be at my convenience and confidence',
        name: 'Mr. Lakshmi Kantham',
        address: 'Pune,Maharashtra',
      },
      {
        heading: 'What People Say!',
        image: {
          src: '/images/invertedComma.png',
          alt: '',
        },
        description:
          'Appollo Diagnostivs kept me at ease during the sample collection process, the way they supported me to be at my convenience and confidence',
        name: 'Mr. Lakshmi Kantham',
        address: 'Pune,Maharashtra',
      },
      {
        heading: 'What People Say!',
        image: {
          src: '/images/invertedComma.png',
          alt: '',
        },
        description:
          'Appollo Diagnostivs kept me at ease during the sample collection process, the way they supported me to be at my convenience and confidence',
        name: 'Mr. Lakshmi Kantham',
        address: 'Pune,Maharashtra',
      },
    ],
  },
  insights: {
    sectionHeading: 'Why Choose Apollo Diagnostics?',
    data: [
      {
        description: 'High-quality diagnostic tests every year',
        dataHeading: '10Mn',
      },
      { description: 'Total No. of Customers', dataHeading: '40Mn' },
      { description: 'Customer Satisfaction Rate', dataHeading: '99%' },
      { description: 'Total No. of Labs', dataHeading: '140+' },
      { description: 'Pickup Points', dataHeading: '12,000+' },
    ],
  },
}

function extractBlogs(data: QueryBlogs[]): BlogsCardData[] {
  const blogCards: BlogsCardData[] = data.map((item) =>
    getSingleBlogCardData(item)
  )
  return blogCards
}

export const extractBannersFromQueryBanner = (
  banners: QueryBanner[]
): ImageCarouselSectionProps => {
  const bannerImages: ImageType[] = banners.map((banner) => {
    return {
      src: `${process.env.NEXT_PUBLIC_BANNER_IMAGES_HOST}${banner.baner_image}`,
      alt: banner.baner_name,
      redirectionUrl: banner.website_url,
    }
  })
  return {
    images: bannerImages,
  }
}

export const extractAdvertisementBannerFromQueryBanner = (
  data: QueryBanner
): AdvertisementSectionProps => {
  return {
    image: {
      src: `${process.env.NEXT_PUBLIC_BANNER_IMAGES_HOST}${data.baner_image}`,
      alt: data.baner_name,
    },
    link: data.website_url,
  }
}

function extractTestByOrgans(
  data: QueryAllConditions[]
): TestByBodyOrgansProps {
  const allTests: LinkData[] = data.map((item) => {
    return {
      label: item.name,
      image: {
        src: `${process.env.NEXT_PUBLIC_CONDITIONS_IMAGES_HOST}${item.image}`,
        alt: 'testImage',
      },
      link: `/test-booking?condition=${item.name}`,
    }
  })
  return {
    sectionHeader: {
      sectionHeading: 'TEST',
      heading: 'Tests by Body Organs',
    },
    tests: allTests,
    viewAllButton: {
      label: 'View all',
      link: '/test-booking',
    },
  }
}

function extractTestimonials(
  data: QueryTestimonialCard[]
): TestimonialsSectionProps {
  const allTestimonials: TestimonialCardData[] = data.map((item) => {
    return {
      heading: homePageData.testimonials.cards[0].heading,
      image: homePageData.testimonials.cards[0].image,
      description: item.description,
      name: item.author,
      address: item.location,
    }
  })
  return {
    cards: allTestimonials,
  }
}
export const getHomePage = async (): Promise<HomePageData> => {
  const userDetails = await getUserFromCookies()
  const mostBookedPackagesData = extractPackagesFromMostBookedItems(
    (
      await getMostBookedItems(
        { limit: '9', cityId: userDetails?.cityId || '9' },
        'Package'
      )
    ).data,
    userDetails?.cityName?.toLowerCase().toLowerCase() || defaultCity.name
  )
  const mostBookedTestsData = extractPackagesFromMostBookedItems(
    (
      await getMostBookedItems(
        { limit: '9', cityId: userDetails?.cityId || '9' },
        'Test'
      )
    ).data,
    userDetails?.cityName?.toLowerCase() || defaultCity.name
  )
  const allCategories = extractSelectionFromQueryCategory(
    (await getPersonalizedPackagesData('lifeStyle')).data
  ).slice(0, 8)
  const blogsCards = extractBlogs(
    (await getBlogsData({ category: '0', limit: '9', offset: '0' })).data.rows
  )
  const testByOrgans = extractTestByOrgans(
    (await getAllConditionByCityData(userDetails?.cityId || '9')).data
  )
  // const taxSavingPackages = extractTestsFromQueryItem(
  //   (
  //     await getAllItems(
  //       { limit: '9', offset: '0', cityId: userDetails?.cityId || '9' },
  //       'Package',
  //       userDetails?.cityId || '9'
  //     )
  //   ).data.rows
  // )
  const allTestimonials = extractTestimonials(
    (await getTestimonialsData()).data.rows
  )
  const mensHealthData = extractMensHealthFromQueryCategory(
    (await getPersonalizedPackagesData('men')).data.slice(0, 4)
  )
  const womensHealthData = extractWomenHealthPackageFromQueryCategory(
    (await getPersonalizedPackagesData('women')).data.slice(0, 4)
  )
  const womensHealthPackagesData = extractWomenPackageFromQueryCategory(
    (await getPersonalizedPackagesData('women-health-packages')).data.slice(
      0,
      4
    )
  )
  const carouselBanners = extractBannersFromQueryBanner(
    (await getAllBanners()).data.rows.filter(
      (banner) => banner.baner_name === BANNERS_SLUGS.HOME_PAGE_CAROUSEL_BANNER
    )
  )
  const advertisements = (await getAllBanners()).data.rows.filter(
    (banner) => banner.baner_name === BANNERS_SLUGS.HOME_PAGE_AD_BANNER
  )
  homePageData.imageCarouselSection = carouselBanners
  homePageData.advertisementSection1 =
    extractAdvertisementBannerFromQueryBanner(advertisements[0])
  homePageData.advertisementSection2 =
    extractAdvertisementBannerFromQueryBanner(advertisements[1])
  homePageData.advertisementSection3 =
    extractAdvertisementBannerFromQueryBanner(advertisements[2])
  homePageData.mostBookedPackagesSection.cards = mostBookedPackagesData
  homePageData.mostBookedTestSection.cards = mostBookedTestsData
  homePageData.packagesSection.cardData[0].packages = allCategories
  homePageData.blogs.cards = blogsCards
  homePageData.testByBodyOrgans = testByOrgans
  homePageData.personalizedHealthCheckupSection.cardData[0].packages =
    mensHealthData
  homePageData.personalizedHealthCheckupSection.cardData[1].packages =
    womensHealthData
  homePageData.womenHealthPackageSection.cardData[0].packages =
    womensHealthPackagesData
  // homePageData.taxSavingPackagesSection.cards = taxSavingPackages
  homePageData.taxSavingPackagesSection.cards = mostBookedPackagesData

  homePageData.testimonials = allTestimonials
  const p = new Promise<HomePageData>((resolve) => {
    resolve(homePageData)
  })
  return p
}
