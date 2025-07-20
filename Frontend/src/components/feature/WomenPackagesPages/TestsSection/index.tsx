import React from 'react'
import { Box, Typography } from '@mui/material'
import { PackageInfoCard, PackageInfoCardData } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type TestsSectionProps = {
  heading: string
  results: string
  tests: PackageInfoCardData[]
}

export function TestsSection({ heading, results, tests }: TestsSectionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('headerWrapper')}>
        <Box {...styles('infoWrapper')}>
          <Typography variant="h2" {...styles('heading')}>
            {heading}
          </Typography>
          <Typography variant="body1" {...styles('results')}>
            {results}
          </Typography>
        </Box>
      </Box>
      <Box {...styles('cardWrapper')}>
        {tests.map((test) => (
          <PackageInfoCard
            {...test}
            key={test.heading}
            customStyles={{ wrapper: styles('card').sx }}
          />
        ))}
      </Box>
    </Box>
  )
}
