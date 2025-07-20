import { Metadata } from 'next'
import { getSingleBlogPageData } from '@query/blogs-page'
import { Banner, BlogsSection } from '@components/feature/BlogsPage'
import NotFound from '../../[...not-found]/page'

type Props = {
  params: {
    blogs: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blogs } = params
  const metaTags = await getSingleBlogPageData(
    parseInt(blogs.split('-').pop() || '0', 10)
  )
  return {
    title: metaTags.metaTitle,
    description: metaTags.metaDescription,
  }
}
async function BlogsPage({ params: { blogs } }: Props) {
  let pageData
  try {
    pageData = await getSingleBlogPageData(
      parseInt(blogs.split('-').pop() || '0', 10)
    )
  } catch {
    return <NotFound />
  }
  const { banner, blogSection } = pageData

  return (
    <>
      <Banner {...banner} />
      <BlogsSection {...blogSection} />
    </>
  )
}

export default BlogsPage
