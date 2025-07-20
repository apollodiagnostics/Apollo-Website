import React from 'react'
import { Metadata } from 'next'
import { SearchParamsData } from '@models'
import { getHealthCheckPackagesData } from '@query/health-check-packages'
import { Banner, TestsSection } from '@components/feature/HealthCheckPackages'
import { capitalizeWords, extractSlugDataFromString } from '@utils/common'
import NotFoundPage from '../../[...not-found]/page'

type Props = {
  searchParams: SearchParamsData
  params: {
    citySlug: string
  }
}

export const revalidate = 3600

export function generateMetadata({ params: { citySlug } }: Props): Metadata {
  const { name: cityName } = extractSlugDataFromString(citySlug)
  const formattedCityName = capitalizeWords(cityName)

  return {
    title: `Health Checkup Packages in ${formattedCityName} | Apollo Diagnostics`,
    description: `Apollo Diagnostic offers a wide range of health check packages & laboratory services in ${formattedCityName}. Know about the health check packages.`,
    keywords: `health checkup packages ${formattedCityName}, health check packages ${formattedCityName}`,
  }
}

async function HealthCheckPackagesPage({
  searchParams,
  params: { citySlug },
}: Props) {
  const { condition, limit = '12', offset = '0', search } = searchParams

  let pageData
  try {
    pageData = await getHealthCheckPackagesData({
      condition,
      limit,
      offset,
      search,
      citySlug,
    })
  } catch {
    return <NotFoundPage />
  }
  const { banner, testSection } = pageData
  return (
    <>
      <Banner {...banner} />
      <TestsSection {...testSection} />
    </>
  )
}
export default HealthCheckPackagesPage
