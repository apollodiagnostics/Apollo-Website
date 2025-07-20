import {
  BannerProps,
  FeatureCardProps,
  PatientConsentInformationProps,
} from '@components/feature/PatientConsent'

export type PatientConsentData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  featureSection: FeatureCardProps
  information: PatientConsentInformationProps
}
