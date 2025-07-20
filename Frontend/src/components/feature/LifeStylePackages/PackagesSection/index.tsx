import React from 'react'
import { Box, Typography } from '@mui/material'
import {
  PackageInfoCard,
  PackageInfoCardData,
  SidePanel,
} from '@components/common'
import { InputBar } from '@components/common/InputBar'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type PackagesSectionProps = {
  heading: string
  results: string
  tests: PackageInfoCardData[]
}

export function PackagesSection({
  heading,
  results,
  tests,
}: PackagesSectionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box>
        <SidePanel
          filters={{
            heading: 'diseases',
            options: [{ label: 'alcohol', value: 1 }],
          }}
        />
      </Box>
      <Box>
        <Box {...styles('headerWrapper')}>
          <Box {...styles('infoWrapper')}>
            <Typography variant="h2" {...styles('heading')}>
              {heading}
            </Typography>
            <Typography variant="body1" {...styles('results')}>
              {results}
            </Typography>
          </Box>
          <Box {...styles('searchCta')}>
            <InputBar customStyles={{ wrapper: styles('searchBar').sx }} />
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
    </Box>
  )
}
