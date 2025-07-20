/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Box } from '@mui/material'
import { SectionHeader, SectionHeaderData } from '@components/common'
import {
  PackagesSelectionWrapper,
  PackagesSelectionWrapperData,
} from '@components/entities'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type WomenPackagesSectionProps = SectionHeaderData & {
  cardData: PackagesSelectionWrapperData[]
}

export function WomenPackagesSection({
  cardData,
  ...rest
}: WomenPackagesSectionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <SectionHeader {...rest} />
      {cardData.map((data) => (
        <PackagesSelectionWrapper key={data.heading} {...data} />
      ))}
    </Box>
  )
}
