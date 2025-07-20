import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { LinkData } from '@models'
import { CentreDetailsCard } from '@components/common/CentreDetailsCard'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StyleClassNames } from './styles'

export type OtherLabsData = {
  otherLabs: { heading: string; cities: LinkData[] }
}

export type OtherLabsAndCentersProps = OtherLabsData & {
  customStyles?: CustomStyles<StyleClassNames>
}

export function OtherLabsAndCenters({
  otherLabs,
  customStyles,
}: OtherLabsAndCentersProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <CentreDetailsCard
        heading={otherLabs.heading}
        customStyles={{ wrapper: styles('CentreDetailsCard').sx }}
      >
        <Box {...styles('citiesWrapper')}>
          {otherLabs.cities.map((item) => (
            <Box {...styles('rowWrapper')} key={item.label}>
              <Typography>Apollo Diagnostics Center in</Typography>
              <Link href={item.link} style={{ textDecoration: 'none' }}>
                <Typography {...styles('cities')}>{item.label}</Typography>
              </Link>
            </Box>
          ))}
        </Box>
      </CentreDetailsCard>
    </Box>
  )
}
