import React from 'react'
import {
  DescriptionData,
  DescriptionSection,
} from '@components/entities/DescriptionSection'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type ManagementTeamSectionData = DescriptionData

export function ManagementTeamSection(props: ManagementTeamSectionData) {
  const styles = getStyles(defaultStyle)
  return (
    <DescriptionSection
      {...props}
      customStyles={{
        sectionHeading: styles('sectionHeading').sx,
      }}
    />
  )
}
