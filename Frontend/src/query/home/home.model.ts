import {
  AdvertisementSectionProps,
  BlogsSectionProps,
  ExperienceSectionProps,
  FeatureSectionProps,
  ImageCarouselSectionProps,
  InsightsSectionProps,
  MostBookedTestPackagesSectionProps,
  PackagesSectionProps,
  TestByBodyOrgansProps,
  TestimonialsSectionProps,
  TimeLineSectionProps,
} from '@components/feature/Home'

export type HomePageData = {
  imageCarouselSection: ImageCarouselSectionProps
  featureSection: FeatureSectionProps
  packagesSection: PackagesSectionProps
  personalizedHealthCheckupSection: PackagesSectionProps
  womenHealthPackageSection: PackagesSectionProps
  mostBookedPackagesSection: MostBookedTestPackagesSectionProps
  mostBookedTestSection: MostBookedTestPackagesSectionProps
  taxSavingPackagesSection: MostBookedTestPackagesSectionProps
  advertisementSection1: AdvertisementSectionProps
  advertisementSection2: AdvertisementSectionProps
  advertisementSection3: AdvertisementSectionProps
  whyChooseUsSection: AdvertisementSectionProps
  timeLineSection: TimeLineSectionProps
  experienceSection: ExperienceSectionProps
  blogs: BlogsSectionProps
  insights: InsightsSectionProps
  testByBodyOrgans: TestByBodyOrgansProps
  testimonials: TestimonialsSectionProps
}
