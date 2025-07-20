'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Box, Typography } from '@mui/material'
import {
  MobileFilters,
  PackageInfoCard,
  PackageInfoCardData,
  PaginationSection,
  SidePanel,
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
  count,
  filters,
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
    const newUrl = `/packages-booking?${urlSearchParams.toString()}`
    router.push(newUrl)
  }

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('wrapper')}>
        <Box {...styles('sidePanel')}>
          <SidePanel filters={filters} />
        </Box>
        <Box {...styles('testSection')}>
          <Box {...styles('headerWrapper')}>
            <Box {...styles('infoWrapper')}>
              <Typography variant="h2" {...styles('heading')}>
                {heading}
              </Typography>
              <Typography variant="body1" {...styles('results')}>
                {results}
              </Typography>
            </Box>
            <MobileFilters
              {...filters}
              customStyles={{ mainWrapper: styles('mobileSidePanel').sx }}
            />
            <Box {...styles('searchCta')}>
              <InputBar
                placeHolder="Search Test"
                customStyles={{ wrapper: styles('searchBar').sx }}
                onChangeHandler={handleInputChange}
                defaultValue={searchText ?? ''}
              />
            </Box>
          </Box>
          {/* <Box {...styles('headerWrapper')}>
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
                customStyles={{ wrapper: styles('searchBar').sx }}
                onChangeHandler={handleInputChange}
                defaultValue={searchText ?? ''}
                placeHolder="Search Package"
              />
            </Box>
          </Box> */}
          <Box {...styles('cardWrapper')} key={searchText}>
            {packages.map((test) => (
              <PackageInfoCard
                key={test.heading}
                {...test}
                customStyles={{
                  wrapper: styles('card').sx,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <PaginationSection currentPage={1} totalItems={count} />
    </Box>
  )
}
