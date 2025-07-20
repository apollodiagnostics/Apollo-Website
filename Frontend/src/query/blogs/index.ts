import { LinkData, SearchParamsData } from '@models'
import { BlogsCardData } from '@components/common/Cards/BlogsCard'
import { getBlogsCategory, getBlogsData } from '@utils/api/dashboard'
import { QueryBlogs, QueryBlogsCategories } from 'src/models/query.models'
import { BlogsData } from './blogs.model'

const blogsData: BlogsData = {
  banner: {
    label: 'Blogs',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Blogs',
  },
  overview: {
    image: {
      src: '/images/blogs.png',
      alt: 'overview',
    },
    descriptonSection: {
      date: 'March, 2024',
      time: '12 min read',
      mainHeading: 'Decoding Tuberculosis: ',
      heading: 'Unravelling Causes, Symptoms & Risk Factors',
      description:
        'Tuberculosis, or TB, is a disease that affects millions of individuals around the world each year. Although the number has decreased dramatically, its presence and impact continue to be a concern. Although the number has decreased, its presence and impact continue to be a concern. To address this, we must stay aware of the causes, symptoms and risk factors linked to TB so that we can detect it early, chart the right course of action and even prepare ourselves with preventive measures.',
      buttonProps: {
        label: 'Read more',
        link: '/',
      },
    },
  },
  featureSection: {
    heading: 'Lab Tests & Health Checkups',
    featureCards: [
      {
        icon: {
          src: '/images/feature2.png',
          alt: '',
        },
        heading: 'Have a Prescription? ',
        description: 'Upload and book your tests',
        link: '',
      },
      {
        icon: {
          src: '/images/feature3.png',
          alt: '',
        },
        heading: 'Call us to book your tests',
        description: 'Our team of experts will guide you.',
        link: '',
      },
      {
        icon: {
          src: '/images/feature1.png',
          alt: '',
        },
        heading: 'WhatsApp Booking',
        description: 'Text us on WhatsApp to book a test',
        link: '',
      },
    ],
  },
  blogs: {
    totalCards: 207,
    heading: 'Blogs',
    category: [
      { label: 'Child Health', link: '/blogs' },
      { label: 'Men’s Health', link: '/blogs' },
      { label: 'Women’s Health', link: '/blogs' },
      { label: ' Nutrition/Recipes', link: '/blogs' },
      { label: 'Health Supplements', link: '/blogs' },
      { label: 'Disease Management', link: '/blogs' },
    ],
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
}

// function formatDate(dateString: string): string {
//   const date = new Date(dateString)
//   const options: Intl.DateTimeFormatOptions = {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//   }
//   return date.toLocaleDateString('en-US', options)
// }

export function getSingleBlogCardData(data: QueryBlogs): BlogsCardData {
  const card: BlogsCardData = {
    buttonProps: {
      label: 'Read more',
      link: `/blogs/${data.slug}-${data.id}`,
    },
    heading: data.name,
    date: data.created_at,
    time: '7 min read',
    image: {
      src: data.image
        ? `${process.env.NEXT_PUBLIC_BLOGS_IMAGES_HOST}${data.image}`
        : '/images/defaultBlog.jpg',
      alt: 'blogs',
    },
    description: data.meta_description,
  }
  return card
}

export function getAllCategories(data: QueryBlogsCategories[]): LinkData[] {
  const categories: LinkData[] = data.map((item) => {
    return {
      label: item.name,
      link: `/blogs/category/${item.name.replace(/\s+/g, '-')}-${item.id}`,
      id: item.id,
    }
  })
  return categories
}

function extractComponent(
  data: QueryBlogs[],
  count: number,
  categories: QueryBlogsCategories[]
): BlogsData {
  const blogCards: BlogsCardData[] = data.map((item) =>
    getSingleBlogCardData(item)
  )
  return {
    banner: blogsData.banner,
    featureSection: blogsData.featureSection,
    overview: {
      image: {
        src: data[0]?.image
          ? `${process.env.NEXT_PUBLIC_BLOGS_IMAGES_HOST}${data[0].image}`
          : '/images/defaultBlog.jpg',
        alt: 'blogs',
      },
      descriptonSection: {
        buttonProps: {
          label: 'Read more',
          link: `/blogs/${data[0]?.slug}-${data[0]?.id}`,
        },
        date: data[0]?.created_at,
        time: '7 min read',
        description: data[0]?.meta_description,
        mainHeading: data[0]?.name,
      },
    },
    blogs: {
      totalCards: count,
      heading: blogsData.blogs.heading,
      cards: blogCards,
      category: getAllCategories(categories),
    },
  }
}
export const getBlogsPageData = async ({
  category,
  limit,
  offset,
}: SearchParamsData): Promise<BlogsData> => {
  const [allBlogs, categories] = await Promise.all([
    getBlogsData({ category, limit, offset }),
    getBlogsCategory(),
  ])
  const p = extractComponent(
    allBlogs.data.rows,
    allBlogs.data.count,
    categories.data.rows
  )
  return p
}
