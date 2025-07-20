'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import { PaginationSection } from '@components/common'
import {
  NearestCentreCard,
  NearestCentreCardData,
} from '@components/common/Cards/NearestCentreCard'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type CentreForYouData = {
  heading: string
  results: string
  totalCenters: number
}
export type CentreForYouProps = CentreForYouData & {
  centres?: NearestCentreCardData[]
}
export function CentreForYou({
  totalCenters,
  centres,
  heading,
}: CentreForYouProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('headerWrapper')}>
        <Box {...styles('infoWrapper')}>
          <Typography variant="h2" {...styles('heading')}>
            {heading}
          </Typography>
          <Typography variant="body1" {...styles('results')}>
            {/* Showing {totalCenters} results */}
          </Typography>
        </Box>
      </Box>
      <Box {...styles('mainWrapper')}>
        {centres?.length && centres.length > 0 ? (
          centres.map((centre) => (
            <NearestCentreCard {...centre} key={centre.heading} />
          ))
        ) : (
          <Typography variant="body1" {...styles('results')}>
            No centres found
          </Typography>
        )}
      </Box>
      <PaginationSection currentPage={1} totalItems={totalCenters} />
    </Box>
  )
}
