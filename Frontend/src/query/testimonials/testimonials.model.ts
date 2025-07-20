import {
  BannerProps,
  ClientTestimonialsData,
  FeatureCardProps,
  FeedbackSectionProps,
  TestimonialsOverviewData,
} from '@components/feature/Testimonials'

export type TestimonialsData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  featureSection: FeatureCardProps
  overview: TestimonialsOverviewData
  clientTestimonials: ClientTestimonialsData
  feedbacks: FeedbackSectionProps
}
