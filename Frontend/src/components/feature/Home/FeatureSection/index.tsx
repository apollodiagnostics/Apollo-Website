import React from 'react'
import { Box } from '@mui/material'
import {
  FeatureCard,
  FeatureCardData,
  PopOverSectionData,
  SearchBar,
} from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type FeatureSectionProps = PopOverSectionData & {
  featureCards: FeatureCardData[]
}

export function FeatureSection({ featureCards, heading }: FeatureSectionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('mainWrapper')}>
      <SearchBar customStyles={{ outerWrapper: styles('searchBar').sx }} />
      <Box {...styles('wrapper')}>
        <Box {...styles('innerWrapper')}>
          <Box {...styles('heading')}>{heading}</Box>
          <Box {...styles('cardWrapper')}>
            {featureCards.map((featureCardData) => (
              <FeatureCard
                key={featureCardData.heading}
                {...featureCardData}
                customStyles={{ wrapper: styles('card').sx }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
