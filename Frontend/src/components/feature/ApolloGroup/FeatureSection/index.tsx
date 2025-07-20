import React from 'react'
import { FeatureSection, FeatureSectionProps } from '@components/entities'

export type FeatureCardProps = FeatureSectionProps

export function FeatureCards(props: FeatureCardProps) {
  return <FeatureSection {...props} />
}
