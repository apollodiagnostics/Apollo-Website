import React from 'react'
import {
  DescriptionData,
  DescriptionSection,
} from '@components/entities/DescriptionSection'

export type HealthAndLifestyleProps = DescriptionData

export function HealthAndLifestyle(props: HealthAndLifestyleProps) {
  return <DescriptionSection {...props} />
}
