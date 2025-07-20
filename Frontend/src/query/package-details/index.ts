/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { BANNERS_SLUGS, defaultCity } from '@models'
import { PackageInfoCardData } from '@components/common'
import {
  getAllBanners,
  getItemBySlug,
  getItemInclusions,
  getMostBookedItems,
} from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { extractPackagesFromMostBookedItems } from '@utils/query'
import {
  QueryBanner,
  QueryItem,
  QueryItemInclusionData,
} from 'src/models/query.models'
import { PackageDetailsData } from './package-details.model'

const packageDetailsData: PackageDetailsData = {
  metaTitle: 'title',
  metaDescription: 'description',
  banner: {
    label: 'Diabetes',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home >  > Diabetes',
  },
  advancedDiabetesAssessmentSection: {
    testInclusionData: {
      title: '',
      testIncludes: [
        {
          label: 'test includes',
          tests: ['test 1', 'test 2', 'test 3'],
        },
      ],
    },
    testDetailsData: {
      title: '',
      itemDescription: '',
    },
    faqSectionData: {
      title: '',
      faqsData: [
        {
          label: 'Test Preparation',
          document: 'This is document of accordian ',
        },
        { label: 'Test Preparation' },
        { label: 'Test Preparation' },
        { label: 'Test Preparation' },
      ],
    },
    finalPriceCardData: {
      price: 1200,
      description: 'Advanced Diabetes Assessment',
      delivery: 'Same day',
      sampleType: 'blood',
      discount: 50,
      cityId: 9,
      id: 0,
      itemId: 0,
      heading: '',
      labId: 0,
    },

    advertisementBanner: {
      image: {
        src: '/images/packageDetailsAdvertisementBanner.jpg',
        alt: '',
      },
      link: '/',
    },
    accreditationCertificateImage: {
      src: '/images/accreditationCertify.png',
      alt: '',
    },
    guaranteeCards: [
      { src: '/images/pointer2.png', alt: '' },
      { src: '/images/pointer1.png', alt: '' },
      { src: '/images/pointer3.png', alt: '' },
      // { src: '/images/pointer4.png', alt: '' },
    ],
  },
  similarPackages: {
    button: {
      label: 'View All',
      link: '/packages-booking',
    },
    cards: [
      {
        id: 0,
        cityId: 9,
        heading: 'Complete Family Wellness Package',
        tag: 'Home Collection Available',
        button1: {
          label: 'Add to Cart',
          link: '',
        },
        button2: {
          label: 'View All',
          link: '',
        },
        delivery: 'Same day',
        discount: 40,
        icon: {
          src: '/images/packageIcon.png',
          alt: '',
        },
        labId: 0,
        price: 800,
      },
    ],
    sectionHeading: 'PACKAGES',
    heading: 'View Similar Packages',
  },
}
function extractComponent({
  bannerData,
  similarItemsData,
  itemData,
  itemInclusionData,
}: {
  itemData: QueryItem
  similarItemsData: PackageInfoCardData[]
  itemInclusionData: QueryItemInclusionData
  bannerData: QueryBanner
}): PackageDetailsData {
  const testInclusionCount = itemInclusionData.data.reduce(
    (acc, item) => acc + item.TestParameters.length,
    0
  )

  return {
    advancedDiabetesAssessmentSection: {
      itemType: itemData.item_type,
      testOverviewData: {
        title:
          itemData.item_type === 'Test' ? 'Test Overview' : 'Package Overview',
        testDescription: itemData.test_description || undefined,
      },
      testInclusionData: {
        title: `Test(s) Included (${testInclusionCount})`,
        testIncludes: itemInclusionData.data.map((item) => ({
          label: item.TestName,
          tests: item.TestParameters,
        })),
      },
      testDetailsData: {
        title: itemData.itemname,
        itemDescription: itemData.item_description || undefined,
      },
      faqSectionData: {
        title: `FAQ's`,
        faqsData: itemData.card_data?.map((card) => ({
          label: card.question,
          document: card.answer,
        })),
      },
      finalPriceCardData: {
        labId: itemData.lab_id,
        id: itemData.id,
        heading: itemData.itemname,
        itemId: itemData.itemid,
        cityId: itemData.city_id,
        price: itemData.rate || itemData.schedule_rate,
        description: itemData.pre_test_information || '',
        discount: itemData.discount,
        delivery: itemData.report_delivery,
        sampleType: itemData.test_type,
      },
      infoSectionData: {
        description: `Apollo Diagnostics holds the distinction of being India's first laboratory to achieve ISO certification for logistics. This underscores the company's unwavering commitment to quality assurance with GRL lab (NABL & CAP accredited), backed by a team of highly trained professionals. With a vast network of over 1500+ diagnostic centres, strategically located across the country, Apollo Diagnostics processes over 10 million diverse tests every year, demonstrating its extensive reach and calibre. The company provides a comprehensive range of diagnostic services, encompassing a wide spectrum of tests, including those related to diabetes, heart health, kidney function, thyroid disorders, liver health, infertility and many more. The company's service portfolio encompasses a wide array of disciplines, including biochemistry, microbiology, serology, haematology, immunology, molecular, genomics and clinical pathology, among others.`,
        title: 'Why Apollo Diagnostics',
      },
      advertisementBanner: {
        image: {
          src: `${process.env.NEXT_PUBLIC_BANNER_IMAGES_HOST}${bannerData?.baner_image}`,
          alt: bannerData?.baner_name,
        },
        link: bannerData?.website_url,
      },
      accreditationCertificateImage: {
        src: '/images/accreditationCertify.png',
        alt: '',
      },
      guaranteeCards: [
        { src: '/images/pointer2.png', alt: '' },
        { src: '/images/pointer1.png', alt: '' },
        { src: '/images/pointer3.png', alt: '' },
        // { src: '/images/pointer4.png', alt: '' },
      ],
    },
    banner: {
      label:
        itemData.item_type === 'Test'
          ? `Home > Test Details `
          : `Home > Package Details `,
      backgroundImage: packageDetailsData.banner.backgroundImage,
      path: ``,
    },
    similarPackages: {
      button: {
        label: 'View All',
        link: '/packages-booking',
      },
      sectionHeading: 'PACKAGES',
      heading: 'Top Booked Packages',
      cards: similarItemsData,
    },
    metaTitle: itemData.title || '',
    metaDescription: itemData.meta_description || '',
  }
}

export const getPackageDetails = async (
  packageId: string
): Promise<PackageDetailsData> => {
  const userDetails = await getUserFromCookies()
  const bannerResponse = await getAllBanners()
  const responseData = await getItemBySlug(
    packageId,
    userDetails?.cityId || '9'
  )
  const itemInclusionData = await getItemInclusions(
    responseData.data.rows[0].itemid
  )
  const mostBookedPackages = await getMostBookedItems(
    { cityId: userDetails?.cityId || '9', limit: '9' },
    'Package'
  )

  const similarPackages = extractPackagesFromMostBookedItems(
    mostBookedPackages.data,
    userDetails?.cityName?.toLowerCase() || defaultCity.name
  )

  const advertisementBanner = bannerResponse.data.rows.filter(
    (banner) =>
      banner.baner_name === BANNERS_SLUGS.PACKAGE_DETAILS_PAGE_AD_BANNER
  )[0]

  const p = extractComponent({
    itemData: responseData.data.rows[0],
    similarItemsData: similarPackages,
    itemInclusionData,
    bannerData: advertisementBanner,
  })

  return p
}
