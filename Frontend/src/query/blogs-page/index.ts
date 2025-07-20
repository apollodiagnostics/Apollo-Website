import { getBlogsSinglePagesData } from '@utils/api/dashboard'
import { QuerySingleBlogData } from 'src/models/query.models'
import { BlogPageData } from './blogs-page.model'

const blogsData: BlogPageData = {
  metaDescription: 'description',
  metaTitle: 'titile',
  banner: {
    label: 'Blogs',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Blogs',
  },
  blogSection: {
    description: '',
  },
}

function extractComponent(data: QuerySingleBlogData): BlogPageData {
  return {
    banner: {
      label: data.name,
      backgroundImage: blogsData.banner.backgroundImage,
      path: `Departments > Blogs > ${data.name}`,
    },
    blogSection: {
      description: data.description,
    },
    metaTitle: data.title,
    metaDescription: data.meta_description,
  }
}
export const getSingleBlogPageData = async (
  pageSlug: number
): Promise<BlogPageData> => {
  const responseData = await getBlogsSinglePagesData(pageSlug)
  const p = extractComponent(responseData.data.dataValues)
  return p
}
