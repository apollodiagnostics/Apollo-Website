import React from 'react'
import {
  FeatureCardSection,
  FeatureCardSectionData,
} from '@components/entities'

export type HighLightsSectionData = FeatureCardSectionData

export function HighLights(props: HighLightsSectionData) {
  return <FeatureCardSection {...props} />
}
