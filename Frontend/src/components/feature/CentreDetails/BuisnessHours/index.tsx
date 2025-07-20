import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { CentreDetailsCard } from '@components/common/CentreDetailsCard'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StyleClassNames } from './styles'

export type BuisnessData = {
  buisnessData: { heading: string; days: string[] }
  parkingOptions: { heading: string; subHeading?: string; options: string[] }
}
export type BuisnessHoursProps = BuisnessData & {
  customStyles?: CustomStyles<StyleClassNames>
}

export function BuisnessHours({
  buisnessData,
  parkingOptions,
  customStyles,
}: BuisnessHoursProps) {
  const styles = getStyles(defaultStyles, customStyles)
  return (
    <Box {...styles('wrapper')}>
      <CentreDetailsCard
        heading={buisnessData.heading}
        customStyles={{ wrapper: styles('CentreDetailsCard').sx }}
      >
        <Box {...styles('timingWrapper')}>
          <Box {...styles('initialDaysWrapper')}>
            {buisnessData.days.slice(0, 4).map((item) => (
              <Box {...styles('rowWrapper')} key={item}>
                <Typography {...styles('days')}>{item}:</Typography>
                <Typography {...styles('timing')}>7AM to 8PM</Typography>
              </Box>
            ))}
          </Box>
          <Divider {...styles('divider')} orientation="vertical" />
          <Box {...styles('leftDaysWrapper')}>
            {buisnessData.days.slice(4, 7).map((item) => (
              <Box {...styles('rowWrapper')} key={item}>
                <Typography {...styles('days')}>{item}:</Typography>
                <Typography {...styles('timing')}>7AM to 8PM</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CentreDetailsCard>
      <CentreDetailsCard
        heading={parkingOptions.heading}
        customStyles={{ wrapper: styles('CentreDetailsCard').sx }}
      >
        <Box {...styles('parkingOptions')}>
          {parkingOptions.options.map((item) => (
            <Typography {...styles('days')} key={item}>
              {item}
            </Typography>
          ))}
        </Box>
      </CentreDetailsCard>
    </Box>
  )
}
