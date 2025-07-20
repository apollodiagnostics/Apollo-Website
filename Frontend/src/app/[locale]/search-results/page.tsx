import React from 'react'
import { SearchParamsData } from '@models'
import { getSearchResultsPageData } from '@query/search-results-page'
import { Banner, PackagesSection } from '@components/feature/SearchResults'
import NotFoundPage from '../[...not-found]/page'

type Props = {
  searchParams: SearchParamsData
}

export const revalidate = 3600
async function SearchResults({ searchParams }: Props) {
  const { search, limit = '12', offset = '0' } = searchParams
  let pageData
  try {
    pageData = await getSearchResultsPageData({ limit, offset, search })
  } catch {
    return <NotFoundPage />
  }
  const { banner, packagesSection } = pageData

  return (
    <>
      <Banner {...banner} />
      <PackagesSection {...packagesSection} />
    </>
  )
}
export default SearchResults
