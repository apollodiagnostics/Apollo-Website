import {
  AccordionSectionProps,
  BannerProps,
  FeatureCardProps,
  TermsOfUseDataProps,
} from '@components/feature/TermsAndConditions'

export type TermsAndConditionsData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  featureSection: FeatureCardProps
  termsOfUse: TermsOfUseDataProps
  accordionSection: AccordionSectionProps
}
