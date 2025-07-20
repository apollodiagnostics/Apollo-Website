import {
  BannerProps,
  BlogsSectionProps,
  FeatureCardProps,
  HealthAndLifestyleProps,
  HightlightsData,
  OverviewSectionData,
} from '@components/feature/ApolloAHLL'

export type ApolloAHLLData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  featureSection: FeatureCardProps
  overviewSection: OverviewSectionData
  healthAndLifestyle: HealthAndLifestyleProps
  highlights: HightlightsData
  blogs: BlogsSectionProps
}
