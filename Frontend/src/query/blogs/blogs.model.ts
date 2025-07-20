import {
  BannerProps,
  BlogsOverviewData,
  BlogsSectionData,
  FeatureCardProps,
} from '@components/feature/Blogs'

export type BlogsData = {
  banner: BannerProps
  featureSection: FeatureCardProps
  overview: BlogsOverviewData
  blogs: BlogsSectionData
}
