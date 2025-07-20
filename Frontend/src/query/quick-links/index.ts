import { LinkData } from '@models'
import {
  getFindTestData,
  getPersonalizedPackagesData,
} from '@utils/api/dashboard'
import { QueryCondition, QueryTest } from 'src/models/query.models'
import { QuickLinksSection } from './quick-links.model'

export type { QuickLinksSection }

const quickLinks: QuickLinksSection = {
  quickLinks: [
    {
      heading: 'Top Tests',
      links: [
        { label: 'ANA Test', link: 'ANA Test' },
        { label: 'APTT Test', link: 'APTT Test' },
        {
          label: 'Antimullerian Hormone Test',
          link: 'Antimullerian Hormone Test',
        },
        { label: 'Beta HCG Test', link: 'Beta HCG Test' },
        {
          label: 'C Reactive Protein Test',
          link: 'C Reactive Protein Test',
        },
        { label: 'CBC Test', link: 'CBC Test' },
        { label: 'Cholesterol Test', link: 'Cholesterol Test' },
        { label: 'Creatinine Test', link: 'Creatinine Test' },
        { label: 'D Dimer Test', link: 'D Dimer Test' },
        { label: 'Dengue Test', link: 'Dengue Test' },
        { label: 'Double Marker', link: 'Double Marker' },
        { label: 'ESR Test', link: 'ESR Test' },
        { label: 'FBS Test', link: 'FBS Test' },
        { label: 'Ferritin Test', link: 'Ferritin Test' },
        { label: 'HBA1C Test', link: 'HBA1C Test' },
        { label: 'HCV Test', link: 'HCV Test' },
        { label: 'HIV Test', link: 'HIV Test' },
        { label: 'IL6 Test', link: 'IL6 Test' },
        { label: 'Kidney Finction Test', link: 'Kidney Finction Test' },
        { label: 'Lipid Profile Test', link: 'Lipid Profile Test' },
        { label: 'Liver Function Test', link: 'Liver Function Test' },
        { label: 'PT INR Test', link: 'PT INR Test' },
        { label: 'Pregnancy Test', link: 'Pregnancy Test' },
        { label: 'Prolactin Test', link: 'Prolactin Test' },
        { label: 'RBS Test', link: 'RBS Test' },
        { label: 'TLC Test', link: 'TLC Test' },
        { label: 'TSH Test', link: 'TSH Test' },
        { label: 'Troponin Test', link: 'Troponin Test' },
        { label: 'Typhidot Test', link: 'Typhidot Test' },
        { label: 'Uric Acid', link: 'Uric Acid' },
        { label: 'Urine Culture Test', link: 'Urine Culture Test' },
        { label: 'Widal Test', link: 'Widal Test' },
      ],
    },
    {
      heading: 'Health Check Packages',
      links: [
        { label: 'ANA Test', link: 'ANA Test' },
        { label: 'APTT Test', link: 'APTT Test' },
        {
          label: 'Antimullerian Hormone Test',
          link: 'Antimullerian Hormone Test',
        },
        { label: 'Beta HCG Test', link: 'Beta HCG Test' },
        {
          label: 'C Reactive Protein Test',
          link: 'C Reactive Protein Test',
        },
        { label: 'CBC Test', link: 'CBC Test' },
        { label: 'Cholesterol Test', link: 'Cholesterol Test' },
        { label: 'Creatinine Test', link: 'Creatinine Test' },
        { label: 'D Dimer Test', link: 'D Dimer Test' },
        { label: 'Dengue Test', link: 'Dengue Test' },
        { label: 'Double Marker', link: 'Double Marker' },
        { label: 'ESR Test', link: 'ESR Test' },
        { label: 'FBS Test', link: 'FBS Test' },
        { label: 'Ferritin Test', link: 'Ferritin Test' },
        { label: 'HBA1C Test', link: 'HBA1C Test' },
        { label: 'HCV Test', link: 'HCV Test' },
        { label: 'HIV Test', link: 'HIV Test' },
        { label: 'IL6 Test', link: 'IL6 Test' },
        { label: 'Kidney Finction Test', link: 'Kidney Finction Test' },
        { label: 'Lipid Profile Test', link: 'Lipid Profile Test' },
        { label: 'Liver Function Test', link: 'Liver Function Test' },
        { label: 'PT INR Test', link: 'PT INR Test' },
        { label: 'Pregnancy Test', link: 'Pregnancy Test' },
        { label: 'Prolactin Test', link: 'Prolactin Test' },
        { label: 'RBS Test', link: 'RBS Test' },
        { label: 'TLC Test', link: 'TLC Test' },
        { label: 'TSH Test', link: 'TSH Test' },
        { label: 'Troponin Test', link: 'Troponin Test' },
        { label: 'Typhidot Test', link: 'Typhidot Test' },
        { label: 'Uric Acid', link: 'Uric Acid' },
        { label: 'Urine Culture Test', link: 'Urine Culture Test' },
        { label: 'Widal Test', link: 'Widal Test' },
      ],
    },
    {
      heading: 'Diagnostic Centre',
      links: [
        {
          label: 'Diagnostic Centre in Delhi',
          link: '/find-nearest-centre/delhi-3031',
        },
        {
          label: 'Diagnostic Centre in Hyderabad',
          link: '/find-nearest-centre/hyderabad-9',
        },
        {
          label: 'Diagnostic Centre in Mumbai',
          link: '/find-nearest-centre/mumbai-285',
        },
        {
          label: 'Diagnostic Centre in Chennai',
          link: '/find-nearest-centre/chennai-287',
        },
        {
          label: 'Diagnostic Centre in Bangalore',
          link: '/find-nearest-centre/bangalore-216',
        },
        {
          label: 'Diagnostic Centre in Pune',
          link: '/find-nearest-centre/pune-277',
        },
        {
          label: 'Diagnostic Centre in Kolkata',
          link: '/find-nearest-centre/kolkata-264',
        },
        {
          label: 'Diagnostic Centre in Jaipur',
          link: '/find-nearest-centre/jaipur-3146',
        },
        {
          label: 'Diagnostic Centre in Ahmedabad',
          link: '/find-nearest-centre/ahmedabad-114',
        },
        {
          label: 'Diagnostic Centre in Gurgaon',
          link: '/find-nearest-centre/gurgaon-3012',
        },
        {
          label: 'Diagnostic Centre in Noida',
          link: '/find-nearest-centre/noida-3008',
        },
        {
          label: 'Diagnostic Centre in Lucknow',
          link: '/find-nearest-centre/lucknow-3126',
        },
        {
          label: 'Diagnostic Centre in Madurai',
          link: '/find-nearest-centre/madurai-288',
        },
        {
          label: 'Diagnostic Centre in Guwahati',
          link: '/find-nearest-centre/guwahati-259',
        },
        {
          label: 'Diagnostic Centre in Amritsar',
          link: '/find-nearest-centre/amritsar-280',
        },
      ],
    },
  ],
}
function exctractTestData(data: QueryTest[]): LinkData[] {
  const allTestList: LinkData[] = data.slice(0, 25).map((item) => {
    return {
      label: item.name,
      link: `/tests/${item.slug}-${item.id}`,
    }
  })
  return allTestList
}
// function extractCenterListData(data: QueryCenterData[]): LinkData[] {
//   const allCenters: LinkData[] = data.slice(0, 25).map((item) => {
//     return {
//       label: item.centre_name,
//       link: `/find-nearest-centre?city=${item.id}`,
//     }
//   })
//   return allCenters
// }
function exctractPackagesForQuickLink(data: QueryCondition[]): LinkData[] {
  const packages: LinkData[] = data.map((item) => {
    return {
      label: item.name,
      link: `/lifestyle-packages/${item.slug}-${item.id}`,
    }
  })
  return packages
}

function exctractPackagesForQuickLinkForMen(
  data: QueryCondition[]
): LinkData[] {
  const packages: LinkData[] = data.map((item) => {
    return {
      label: `For men: ${item.name}`,
      link: `/mens-health/${item.slug}-${item.id}`,
    }
  })
  return packages
}

function exctractPackagesForQuickLinkForWomen(
  data: QueryCondition[]
): LinkData[] {
  const packages: LinkData[] = data.map((item) => {
    return {
      label: `For women: ${item.name}`,
      link: `/womens-health/${item.slug}-${item.id}`,
    }
  })
  return packages
}
export const getQuickLinks = async (): Promise<QuickLinksSection> => {
  const responseData = await getFindTestData()
  quickLinks.quickLinks[0].links = exctractTestData(responseData.data)
  // const allCentres = await getFindAllCentres()
  // quickLinks.quickLinks[2].links = extractCenterListData(allCentres.data.rows)
  const lifestylePackages = await getPersonalizedPackagesData('lifestyle')
  const mensPackages = await getPersonalizedPackagesData('men')
  const womenPackages = await getPersonalizedPackagesData('women')

  quickLinks.quickLinks[1].links = [
    ...exctractPackagesForQuickLink(lifestylePackages.data),
    ...exctractPackagesForQuickLinkForMen(mensPackages.data),
    ...exctractPackagesForQuickLinkForWomen(womenPackages.data),
  ]

  const p = new Promise<QuickLinksSection>((resolve) => {
    resolve(quickLinks)
  })
  return p
}
