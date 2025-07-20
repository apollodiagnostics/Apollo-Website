'use client'

import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Box, Typography } from '@mui/material'
import {
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
    const urlSearchParams = new URLSearchParams(oldParams)
    urlSearchParams.set('search', value)
    urlSearchParams.delete('limit')
    urlSearchParams.delete('offset')
    const newUrl = `/book-a-test?${urlSearchParams.toString()}`
    router.push(newUrl)
  }

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('wrapper')}>
        <Box>
          <SidePanel filters={filters} />
        </Box>
        <Box sx={{ width: '100%' }}>
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
                customStyles={{ wrapper: styles('searchBar').sx }}
                placeHolder="Search Test"
                onChangeHandler={handleInputChange}
                defaultValue={searchText ?? ''}
              />
            </Box>
          </Box>
          <Box {...styles('cardWrapper')}>
            {tests.map((test) => (
              <PackageInfoCard
                key={test.heading}
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
