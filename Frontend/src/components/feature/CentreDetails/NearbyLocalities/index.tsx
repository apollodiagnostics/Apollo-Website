import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { LinkData } from '@models'
import { CentreDetailsCard } from '@components/common/CentreDetailsCard'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StyleClassNames } from './styles'

export type NearbyLocalitiesData = {
  nearbyLocalities: { heading: string; localities: LinkData[] }
}
export type NearbyLocalitiesProps = NearbyLocalitiesData & {
  customStyles?: CustomStyles<StyleClassNames>
}

export function NearbyLocalities({
  nearbyLocalities,
  customStyles,
}: NearbyLocalitiesProps) {
  const styles = getStyles(defaultStyles, customStyles)
  return (
    <Box {...styles('wrapper')}>
      <CentreDetailsCard
        heading={nearbyLocalities.heading}
        customStyles={{ wrapper: styles('CentreDetailsCard').sx }}
      >
        <Box {...styles('localitiesWrapper')}>
          {nearbyLocalities.localities.slice(0, 16).map((item) => (
            <Link
              href={item.link}
              style={{ textDecoration: 'none' }}
              key={item.label}
            >
              <Typography {...styles('localities')}>{item.label}</Typography>
            </Link>
          ))}
        </Box>
      </CentreDetailsCard>
    </Box>
  )
}
