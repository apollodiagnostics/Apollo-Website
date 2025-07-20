import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { CentreDetailsCard } from '@components/common/CentreDetailsCard'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StyleClassNames } from './styles'
import { NearbyLocalitiesData } from '../NearbyLocalities'

export type NearbyTagsProps = NearbyLocalitiesData & {
  customStyles?: CustomStyles<StyleClassNames>
}

export function NearbyTags({
  nearbyLocalities,
  customStyles,
}: NearbyTagsProps) {
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
