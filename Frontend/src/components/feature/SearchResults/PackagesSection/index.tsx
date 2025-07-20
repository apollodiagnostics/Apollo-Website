'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import {
  PackageInfoCard,
  PackageInfoCardData,
  PaginationSection,
  SidePanelMenuData,
} from '@components/common'
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
}: PackagesSectionProps) {
  const styles = getStyles(defaultStyles)

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
              {/* <InputBar
                customStyles={{ wrapper: styles('searchBar').sx }}
                onChangeHandler={handleInputChange}
                defaultValue={searchText ?? ''}
              /> */}
            </Box>
          </Box>
          <Box {...styles('cardWrapper')} key={packages[0].id}>
            {packages.map((test) => (
              <PackageInfoCard
                key={test.heading}
                {...test}
                customStyles={{
                  wrapper: styles('card').sx,
                  image: styles('cardImage').sx,
                }}
              />
            ))}
          </Box>
        </Box>
        <PaginationSection currentPage={1} totalItems={count} />
      </Box>
    </Box>
  )
}
