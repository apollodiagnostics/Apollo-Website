import React from 'react'
import {
  DescriptionData,
  DescriptionSection,
} from '@components/entities/DescriptionSection'

export type ExperienceSectionProps = DescriptionData

export function ExperienceSection(props: ExperienceSectionProps) {
  return <DescriptionSection {...props} />
}
