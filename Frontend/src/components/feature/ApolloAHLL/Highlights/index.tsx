import React from 'react'
import {
  FeatureCardSection,
  FeatureCardSectionData,
} from '@components/entities'

export type HightlightsData = FeatureCardSectionData

export function Highlights(props: HightlightsData) {
  return <FeatureCardSection {...props} />
}
