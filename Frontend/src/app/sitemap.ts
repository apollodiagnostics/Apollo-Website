import { MetadataRoute } from 'next'
import {
  getAllItems,
  getBlogsData,
  getFindAConditionData,
  getFindTestData,
  getNearestCenters,
  getPersonalizedPackagesData,
} from '@utils/api/dashboard'

const websiteHostUrl = process.env.NEXT_PUBLIC_FILES_HOST_HEADER

type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

// Escape function to sanitize URLs for XML
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Individual dynamic route builders
async function fetchBlogsRoutes(): Promise<MetadataRoute.Sitemap> {
  const blogsData = await getBlogsData({})
  return blogsData.data.rows.map((item) => ({
    url: escapeXml(`${websiteHostUrl}/blogs/${item.slug}`),
    changeFrequency: 'daily' as ChangeFrequency,
    priority: 0.6,
  }))
}

async function fetchFindConditionRoutes(): Promise<MetadataRoute.Sitemap> {
  const data = await getFindAConditionData()
  return data.data.map((item) => ({
    url: escapeXml(`${websiteHostUrl}/find-a-condition/${item.slug}`),
    changeFrequency: 'daily',
    priority: 0.6,
  }))
}

async function fetchTestsRoutes(): Promise<MetadataRoute.Sitemap> {
  const data = await getFindTestData()
  return data.data.map((item) => ({
    url: escapeXml(`${websiteHostUrl}/tests/${item.slug}-${item.id}`),
    changeFrequency: 'daily',
    priority: 0.6,
  }))
}

async function fetchLifestylePackagesRoutes(): Promise<MetadataRoute.Sitemap> {
  const data = await getPersonalizedPackagesData('lifestyle')
  return data.data.map((item) => ({
    url: escapeXml(
      `${websiteHostUrl}/lifestyle-packages/${item.slug}-${item.id}`
    ),
    changeFrequency: 'daily',
    priority: 0.6,
  }))
}

async function fetchMensHealthRoutes(): Promise<MetadataRoute.Sitemap> {
  const data = await getPersonalizedPackagesData('men')
  return data.data.map((item) => ({
    url: escapeXml(`${websiteHostUrl}/mens-health/${item.slug}-${item.id}`),
    changeFrequency: 'daily',
    priority: 0.6,
  }))
}

async function fetchWomensHealthRoutes(): Promise<MetadataRoute.Sitemap> {
  const data = await getPersonalizedPackagesData('women')
  return data.data.map((item) => ({
    url: escapeXml(`${websiteHostUrl}/womens-health/${item.id}`),
    changeFrequency: 'daily',
    priority: 0.6,
  }))
}

async function fetchWomensHealthPackagesRoutes(): Promise<MetadataRoute.Sitemap> {
  const data = await getPersonalizedPackagesData('women-health-packages')
  return data.data.map((item) => ({
    url: escapeXml(`${websiteHostUrl}/womens-health-packages/${item.id}`),
    changeFrequency: 'daily',
    priority: 0.6,
  }))
}

async function fetchCentreDetailsRoutes(): Promise<MetadataRoute.Sitemap> {
  const data = await getNearestCenters({})
  return data.data.rows.map((item) => ({
    url: escapeXml(
      `${websiteHostUrl}/find-nearest-centre/centre-details/${item.id}`
    ),
    changeFrequency: 'daily',
    priority: 0.6,
  }))
}

function fetchDepartmentsRoutes(): MetadataRoute.Sitemap {
  const departments = [
    'biochemistry',
    'clinical-pathology',
    'Histocytopathology',
    'hematology',
    'immunology',
    'microbiology',
    'molecular-biology',
    'Cyto-genetics',
    'serology',
  ]
  return departments.map((item) => ({
    url: escapeXml(`${websiteHostUrl}/departments/${item}`),
    changeFrequency: 'daily',
    priority: 0.6,
  }))
}

async function fetchPackageDetailsRoutes(): Promise<MetadataRoute.Sitemap> {
  const data = await getAllItems({}, 'Package')
  return data.data.rows.map((item) => ({
    url: escapeXml(`${websiteHostUrl}/package-details/${item.slug}`),
    changeFrequency: 'daily',
    priority: 0.6,
  }))
}

// Main sitemap export
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const changeFrequency = 'daily' as ChangeFrequency

  const staticRoutes: MetadataRoute.Sitemap = [
    'about-ahll',
    'about-apollo-group',
    'about-us',
    'blogs',
    'book-a-test',
    'book-walk-in-slots',
    'careers',
    'contact-us',
    'covid-19-rt-pcr-disclaimer',
    'departments',
    'doctors-corner',
    'download-report',
    'faqs',
    'find-a-condition',
    'find-nearest-centre',
    'for-patients/home-sample-collection',
    'franchise',
    'lifestyle-packages',
    'management-team',
    'mens-health',
    'most-booked-packages',
    'most-booked-tests',
    'our-chairmans-profile',
    'packages-booking',
    'patient-consent',
    'search-results',
    'terms-and-conditions',
    'test-booking',
    'testimonials',
    'tests',
    'upload-prescription',
    'womens-health',
    'womens-health-packages',
    '',
  ].map((path) => ({
    url: escapeXml(`${websiteHostUrl}/${path}`),
    changeFrequency,
    priority: 0.5,
  }))

  const blogRoutes = await fetchBlogsRoutes()
  const conditionRoutes = await fetchFindConditionRoutes()
  const centreDetails = await fetchCentreDetailsRoutes()
  const lifeStylePackages = await fetchLifestylePackagesRoutes()
  const mensHealth = await fetchMensHealthRoutes()
  const packageDetails = await fetchPackageDetailsRoutes()
  const tests = await fetchTestsRoutes()
  const womensHealth = await fetchWomensHealthRoutes()
  const womensHealthPackages = await fetchWomensHealthPackagesRoutes()
  const departments = fetchDepartmentsRoutes()

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...conditionRoutes,
    ...centreDetails,
    ...lifeStylePackages,
    ...mensHealth,
    ...packageDetails,
    ...tests,
    ...womensHealth,
    ...womensHealthPackages,
    ...departments,
  ]
}
