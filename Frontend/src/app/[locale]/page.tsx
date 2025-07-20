import React from 'react'
import { Metadata } from 'next'
import { getHomePage } from '@query/home'
import {
  AdvertisementSection,
  BlogsSection,
  ExperienceSection,
  FeatureSection,
  ImageCarouselSection,
  InsightsSection,
  MostBookedTestPackagesSection,
  PackagesSection,
  TestimonialsSection,
  TestsByBodyOrgans,
  TimeLineSection,
  // WhyChooseUsSection,
  WomenPackagesSection,
} from '@components/feature/Home'
import NotFoundPage from './[...not-found]/page'

export function generateMetadata(): Metadata {
  return {
    title: 'Diagnostic Centers & Pathology Labs near me | Apollo Diagnostics',
    description:
      'Apollo Diagnostics, India’s largest Diagnostic Centre &amp; Pathology Lab offers a wide range of diagnostic tests &amp; procedures across the country.',
    openGraph: {
      type: 'website',
      url: process.env.NEXT_PUBLIC_FILES_HOST_HEADER,
      title: 'Apollo Diagnostics',
      description:
        'Apollo Diagnostics, India’s largest Diagnostic Centre &amp; Pathology Lab offers a wide range of diagnostic tests &amp; procedures across the country.',
      siteName: 'Apollo Diagnostics',
      images: [
        {
          url: '/images/logo.png',
        },
      ],
    },
    robots: 'index,follow',
    alternates: {
      canonical: process.env.NEXT_PUBLIC_FILES_HOST_HEADER,
    },
  }
}

export const revalidate = 3600

async function HomePage() {
  let pageData
  try {
    pageData = await getHomePage()
  } catch {
    return <NotFoundPage />
  }
  const {
    imageCarouselSection,
    featureSection,
    packagesSection,
    mostBookedPackagesSection,
    advertisementSection1,
    advertisementSection2,
    advertisementSection3,
    personalizedHealthCheckupSection,
    // whyChooseUsSection,
    insights,
    mostBookedTestSection,
    womenHealthPackageSection,
    taxSavingPackagesSection,
    timeLineSection,
    experienceSection,
    blogs,
    testByBodyOrgans,
    testimonials,
  } = pageData

  return (
    <>
      <ImageCarouselSection {...imageCarouselSection} />
      <FeatureSection {...featureSection} />
      <MostBookedTestPackagesSection {...mostBookedPackagesSection} />
      <PackagesSection {...packagesSection} />
      <AdvertisementSection {...advertisementSection1} />
      <PackagesSection {...personalizedHealthCheckupSection} />
      <MostBookedTestPackagesSection {...mostBookedTestSection} />
      <AdvertisementSection {...advertisementSection2} />
      <TestsByBodyOrgans {...testByBodyOrgans} />
      <WomenPackagesSection {...womenHealthPackageSection} />
      <AdvertisementSection {...advertisementSection3} />
      <MostBookedTestPackagesSection {...taxSavingPackagesSection} />
      {/* <WhyChooseUsSection {...whyChooseUsSection} /> */}
      <InsightsSection {...insights} />
      <TimeLineSection {...timeLineSection} />
      <ExperienceSection {...experienceSection} />
      <BlogsSection {...blogs} />
      <TestimonialsSection {...testimonials} />
    </>
  )
}

export default HomePage
