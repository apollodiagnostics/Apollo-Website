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

export type TestsSectionProps = {
  heading: string
  results: string
  totalTest: number
  tests: PackageInfoCardData[]
  filters: SidePanelMenuData
}

export function TestsSection({
  heading,
  results,
  tests,
  totalTest,
  filters,
}: TestsSectionProps) {
  const styles = getStyles(defaultStyles)
  const oldParams = useSearchParams()
  const searchText = oldParams.get('search')
  const router = useRouter()

  const handleInputChange = (value: string) => {
    const params = new URLSearchParams(oldParams)
    params.set('search', value)
    params.delete('limit')
    params.delete('offset')
    router.replace(`?${params.toString()}`)
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
          <Box {...styles('cardWrapper')} key={searchText}>
            {tests.map((test) => (
              <PackageInfoCard
                key={`${test.id}-${test.heading}`}
                {...test}
                customStyles={{ wrapper: styles('card').sx }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <PaginationSection currentPage={1} totalItems={totalTest} />
    </Box>
  )
}
