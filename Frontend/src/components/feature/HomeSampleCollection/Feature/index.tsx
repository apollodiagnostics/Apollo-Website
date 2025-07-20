import React from 'react'
import { FeatureCardData, PopOverSectionData } from '@components/common'
import { FeatureSection } from '@components/feature/Biochemistry'

export type FeatureProps = PopOverSectionData & {
  featureCards: FeatureCardData[]
}

export function Feature(props: FeatureProps) {
  return <FeatureSection {...props} />
}
