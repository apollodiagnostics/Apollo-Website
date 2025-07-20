import { OverViewData } from '@components/common'
import {
  BannerProps,
  FeatureSectionProps,
  TestsSectionProps,
} from '@components/feature/LifeStylePackagesPages'

export type LifeStylePackagesPagesData = {
  banner: BannerProps
  featureSection: FeatureSectionProps
  testSection: TestsSectionProps
  overview: OverViewData
}

export type LifeStylePackageCategories =
  | 'alcohol-impact'
  | 'bone-health'
  | 'cancer'
  | 'cardiovascular-diseases'
  | 'depression'
  | 'diabetes'
  | 'gut-health'
  | 'hypertension'
  | 'nutritional-disorder'
  | 'obesity'
  | 'pcod'
  | 'respiratory-disorder'
  | 'sexual-wellness'
  | 'sleep-disorder'
