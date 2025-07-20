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

export type MostBookedTestPackagesSectionProps = SectionHeaderData &
  CardCarouselData

export function MostBookedTestPackagesSection({
  cards,
  ...rest
}: MostBookedTestPackagesSectionProps) {
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
        slidesPerView={isMobile ? 1 : isTablet ? 3 : isLaptop ? 4 : 4}
        initialSlide={isMobile ? 0 : isTablet ? 0 : isLaptop ? 1 : 1}
        pagination={!!isMobile}
        loop
      />
    </Box>
  )
}
