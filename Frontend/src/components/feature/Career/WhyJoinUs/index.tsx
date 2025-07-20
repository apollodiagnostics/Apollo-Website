import React from 'react'
import {
  FeatureCardSection,
  FeatureCardSectionData,
} from '@components/entities'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type WhyJoinUsData = FeatureCardSectionData

export function WhyJoinUs(props: WhyJoinUsData) {
  const styles = getStyles(defaultStyles)

  return (
    <FeatureCardSection
      {...props}
      customStyles={{
        card: styles('card').sx,
        highlightsWrapper: styles('container').sx,
      }}
    />
  )
}
