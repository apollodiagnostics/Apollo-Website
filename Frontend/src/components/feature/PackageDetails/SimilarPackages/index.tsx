/* eslint-disable no-nested-ternary */

'use client'

import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import {
  CardCarousel,
  CardCarouselData,
  SectionHeader,
  SectionHeaderData,
} from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type SimilarPackagesProps = SectionHeaderData & CardCarouselData

export function SimilarPackages({ cards, ...rest }: SimilarPackagesProps) {
  const isMobile = useMediaQuery('(max-width:900px)')
  const isTablet = useMediaQuery('(max-width:1278px)')
  const isLaptop = useMediaQuery('(max-width:1800px)')
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <SectionHeader
        {...rest}
        customStyles={{ wrapper: styles('sectionHeaderWrapper').sx }}
      />
      <CardCarousel
        cards={cards}
        pagination={!!isMobile}
        slidesPerView={isMobile ? 1 : isTablet ? 2 : isLaptop ? 4 : 3}
        initialSlide={isMobile ? 0 : isTablet ? 0 : isLaptop ? 1 : 1}
        loop
      />
    </Box>
  )
}
