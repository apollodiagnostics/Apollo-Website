import { PackagesSectionProps } from '@components/feature/Home'
import {
  BannerProps,
  FeatureSectionProps,
  // PackagesSectionProps,
} from '@components/feature/LifeStylePackages'

export type LifeStylePackagesData = {
  metaTitle: string
  metaDescription: string
  banner: BannerProps
  featureSection: FeatureSectionProps
  // packagesSection: PackagesSectionProps
  packageSection: PackagesSectionProps
}
