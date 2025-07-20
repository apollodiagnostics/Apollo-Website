import React from 'react'
import {
  DescriptionData,
  DescriptionSection,
} from '@components/entities/DescriptionSection'

export type VisionAndMissionProps = DescriptionData

export function VisionAndMission(props: VisionAndMissionProps) {
  return <DescriptionSection {...props} />
}
