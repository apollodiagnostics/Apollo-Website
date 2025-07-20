import {
  AdvancedDiabetesAssessmentSectionData,
  BannerProps,
  SimilarPackagesProps,
} from '@components/feature/PackageDetails'

export type PackageDetailsData = {
  metaTitle: string | null
  metaDescription: string | null
  banner: BannerProps
  advancedDiabetesAssessmentSection: AdvancedDiabetesAssessmentSectionData
  similarPackages: SimilarPackagesProps
}
