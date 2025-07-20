import { getDepartmentPagesData } from '@utils/api/dashboard'
import { QueryDepartment } from 'src/models/query.models'
import { DepartmentData } from './departments.model'

const departmentData: DepartmentData = {
  banner: {
    label: 'Biochemistry',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > DEPARTMENT > Biochemistry',
  },
  testSection: {
    heading: 'Book a Test Online',
    results: 'Showing 6 tests found',
    tests: [],
  },
  biochemistryImages: {
    images: [
      { src: '/images/biochemistry1.png', alt: 'overview' },
      { src: '/images/biochemistry2.png', alt: 'overview' },
      { src: '/images/biochemistry3.png', alt: 'overview' },
    ],
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
  overview: {
    heading: 'Overview',
    description:
      'Biochemistry is the study of chemical and biochemical components in the body for preventing, diagnosing and managing the disease. Diseases like diabetes, heart attacks, infertility, thyroid problems, cystic fibrosis and meningitis can be diagnosed by the examination of body fluids including blood, urine and CSF.    The Clinical Biochemistry division at Apollo Diagnostics is a new generation laboratory featuring state-of-the-art equipment and technology. It provides comprehensive clinical laboratory services in the extensive domain of clinical chemistry, therapeutic drug monitoring, endocrinology and clinical toxicology. The department carries out a range of esoteric testing such as identification of hemoglobin variants and HbA1c quantification.  The experienced team of professionals – medical scientists, clinicians, laboratory technicians, technical assistants and phlebotomists – are capable of providing the medical and scientific expertise needed to deliver hi-precision results.',
  },
}
export function extractComponent(data: QueryDepartment): DepartmentData {
  return {
    banner: {
      label: data.meta_keyword,
      backgroundImage: departmentData.banner.backgroundImage,
      path: `Departments > ${data.meta_keyword}`,
    },
    overview: {
      description: data.body,
      heading: departmentData.overview.heading,
      image: departmentData.overview.image,
    },
    biochemistryImages: departmentData.biochemistryImages,
    featureSection: departmentData.featureSection,
    testSection: departmentData.testSection,
  }
}
export const getDepartmentsData = async (
  pageSlug: string
): Promise<DepartmentData> => {
  const responseData = await getDepartmentPagesData(pageSlug)
  const p = extractComponent(responseData.data[0])
  return p
}
