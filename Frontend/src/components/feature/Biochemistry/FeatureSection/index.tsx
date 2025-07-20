import React from 'react'
import {
  FeatureCard,
  FeatureCardData,
  PopOverSection,
  PopOverSectionData,
} from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type FeatureSectionProps = PopOverSectionData & {
  featureCards: FeatureCardData[]
}

export function FeatureSection({ featureCards, heading }: FeatureSectionProps) {
  const styles = getStyles(defaultStyles)

  return (
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
          customStyles={{ wrapper: styles('card').sx }}
        />
      ))}
    </PopOverSection>
  )
}
