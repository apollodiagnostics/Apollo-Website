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

export type PackagesSectionProps = SectionHeaderData & {
  cardData: PackagesSelectionWrapperData[]
}

export function PackagesSection({ cardData, ...rest }: PackagesSectionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('innerWrapper')}>
        <SectionHeader
          {...rest}
          customStyles={{
            infoContainer: styles('infoContainer').sx,
            wrapper: styles('headerWrapper').sx,
          }}
        />
        {cardData.map((data) => (
          <PackagesSelectionWrapper key={data.heading} {...data} />
        ))}
      </Box>
    </Box>
  )
}
