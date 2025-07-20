/* eslint-disable react/no-array-index-key */

'use client'

import { Box } from '@mui/material'
import { Button, SectionHeader, SectionHeaderData } from '@components/common'
import {
  PackagesSelectionWrapper,
  PackagesSelectionWrapperData,
} from '@components/entities'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type PackagesSectionProps = SectionHeaderData & {
  cardData: PackagesSelectionWrapperData[]
}

export function PackagesSection({
  cardData,
  button,
  ...rest
}: PackagesSectionProps) {
  const styles = getStyles(defaultStyles)
  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('wrapper')}>
        <SectionHeader
          {...rest}
          customStyles={{
            infoContainer: styles('infoContainer').sx,
            wrapper: styles('headerWrapper').sx,
          }}
        />
        {cardData.map((data) => (
          <PackagesSelectionWrapper key={`sdf${data.heading}`} {...data} />
        ))}
        {button && (
          <Box {...styles('footWrapper')}>
            <Button
              {...button}
              variant="outlined"
              customStyles={{ button: styles('button').sx }}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}
