import { Metadata } from 'next'
import { getMenHealthPackagesPagesData } from '@query/mens-health-packages-pages'
import {
  Banner,
  TestsSection,
  OverviewSection,
} from '@components/feature/MenHealthPackagesPages'
import NotFoundPage from '../../[...not-found]/page'

type Props = {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = params
  const metaTags = await getMenHealthPackagesPagesData(
    parseInt(category.split('-').pop() || '0', 10)
  )
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/mens-health/${params}`,
      title: 'Apollo Diagnostics',
      description: metaTags.metaDescription,
      siteName: 'Apollo Diagnostics',
      images: [
        {
          url: '/images/logo.png',
        },
      ],
    },
    robots: 'index,follow',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FILES_HOST_HEADER}/mens-health${params}`,
    },
  }
}

async function MensHeatlhPackagesCategories({ params }: Props) {
  const { category } = params
  let pageData
  try {
    pageData = await getMenHealthPackagesPagesData(
      parseInt(category.split('-').pop() || '0', 10)
    )
  } catch {
    return <NotFoundPage />
  }
  const { banner, overview, testSection } = pageData

  return (
    <>
      <Banner {...banner} />
      <OverviewSection {...overview} />
      <TestsSection {...testSection} />
    </>
  )
}
export default MensHeatlhPackagesCategories
