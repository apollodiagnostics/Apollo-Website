import {
  BannerProps,
  ClientTestimonialsProps,
  ExperienceSectionProps,
  FeatureCardProps,
  InsightsSectionProps,
  OverviewData,
} from '@components/feature/AboutUs'

export type ApolloDiagnosticsData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  featureSection: FeatureCardProps
  overview: OverviewData
  experience: ExperienceSectionProps
  insights: InsightsSectionProps
  clientTestimonials: ClientTestimonialsProps
}
