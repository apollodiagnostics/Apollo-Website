import { Metadata } from 'next'
import { SearchParamsData } from '@models'
import { getBlogsPageData } from '@query/blogs'
import {
  Banner,
  BlogsOverview,
  BlogsSection,
  // FeatureCards,
} from '@components/feature/Blogs'
import { extractSlugDataFromString } from '@utils/common'
import NotFoundPage from '../../../[...not-found]/page'

type Props = {
  searchParams: SearchParamsData
  params: {
    categorySlug: string
  }
}

export function generateMetadata(): Metadata {
  return {
    title: 'Blogs - Apollo Diagnostics',
    description:
      'Explore the latest insights, health tips, and medical news on Apollo Diagnostics blog. Stay informed with expert articles on diagnostics, preventive care, and wellness.',
  }
}

async function Blogs({ searchParams, params: { categorySlug } }: Props) {
  const { limit = '12', offset = '0' } = searchParams
  let pageData
  try {
    pageData = await getBlogsPageData({
      category: extractSlugDataFromString(categorySlug).id.toString() || '0',
      limit,
      offset,
    })
  } catch {
    return <NotFoundPage />
  }
  const { banner, blogs, overview } = pageData
  return (
    <>
      <Banner {...banner} />
      {/* <FeatureCards {...featureSection} /> */}
      <BlogsOverview {...overview} />
      <BlogsSection {...blogs} />
    </>
  )
}

export default Blogs
