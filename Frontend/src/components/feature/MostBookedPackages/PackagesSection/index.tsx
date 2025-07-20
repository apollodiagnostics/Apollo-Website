'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation' // Import useRouter from next/navigation
import { Box, Typography } from '@mui/material'
import {
  PackageInfoCard,
  PackageInfoCardData,
  SidePanelMenuData,
} from '@components/common'
import { InputBar } from '@components/common/InputBar'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type PackagesSectionProps = {
  heading: string
  results: string
  count: number
  packages: PackageInfoCardData[]
  filters: SidePanelMenuData
}

export function PackagesSection({
  heading,
  results,
  packages,
}: PackagesSectionProps) {
  const styles = getStyles(defaultStyles)
  const oldParams = useSearchParams()
  const searchText = oldParams.get('search')
  const router = useRouter()

  const handleInputChange = (value: string) => {
    const urlSearchParams = new URLSearchParams(oldParams)
    urlSearchParams.set('search', value)
    urlSearchParams.delete('limit')
    urlSearchParams.delete('offset')
    const newUrl = `/most-booked-packages?${urlSearchParams.toString()}`
    router.push(newUrl)
  }

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('wrapper')}>
        {/* <Box><SidePanel filters={filters} /></Box> */}
        <Box {...styles('testsContainer')}>
          <Box {...styles('headerWrapper')}>
            <Box {...styles('infoWrapper')}>
              <Typography variant="h2" {...styles('heading')}>
                {heading}
              </Typography>
              <Typography variant="body1" {...styles('results')}>
                {results}
              </Typography>
            </Box>
            <Box {...styles('searchCta')}>
              <InputBar
                placeHolder="Search Package"
                customStyles={{ wrapper: styles('searchBar').sx }}
                onChangeHandler={handleInputChange}
                defaultValue={searchText ?? ''}
              />
            </Box>
          </Box>
          <Box {...styles('cardWrapper')} key={searchText}>
            {packages.map((test) => (
              <PackageInfoCard
                key={test.heading}
                {...test}
                customStyles={{
                  wrapper: styles('card').sx,
                  image: styles('cardImage').sx,
                  button: styles('button').sx,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      {/* <PaginationSection currentPage={1} totalItems={count} /> */}
    </Box>
  )
}
