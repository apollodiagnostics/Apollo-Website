import React from 'react'
import {
  DescriptionData,
  DescriptionSection,
} from '@components/entities/DescriptionSection'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type InitiativesSectionProps = DescriptionData

export function InitiativesSection2(props: InitiativesSectionProps) {
  const styles = getStyles(defaultStyle)
  return (
    <DescriptionSection
      {...props}
      customStyles={{
        sectionHeading: styles('sectionHeading').sx,
        wrapper: styles('wrapper').sx,
      }}
    />
  )
}
