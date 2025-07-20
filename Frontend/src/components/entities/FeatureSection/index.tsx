import React from 'react'
import { Box } from '@mui/material'
import {
  FeatureCard,
  FeatureCardData,
  PopOverSection,
  PopOverSectionData,
} from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StyleClassNames } from './styles'

export type FeatureSectionProps = PopOverSectionData & {
  featureCards: FeatureCardData[]
  customStyles?: CustomStyles<StyleClassNames>
}

export function FeatureSection({
  featureCards,
  heading,
  customStyles,
}: FeatureSectionProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('mainWrapper')}>
      <PopOverSection
        heading={heading}
        customStyles={{
          wrapper: styles('wrapper').sx,
          childrenWrapper: styles('childrenWrapper').sx,
        }}
      >
        {/* TODO: Remove this feature card and add Locate Nearest Centres form */}
        {featureCards.map((featureCardData) => (
          <FeatureCard
            key={featureCardData.heading}
            {...featureCardData}
            customStyles={{
              wrapper: styles('card').sx,
            }}
          />
        ))}
      </PopOverSection>
    </Box>
  )
}
