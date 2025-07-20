import React from 'react'
import { HtmlPurifier } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type ForBuisnessPartnersData = {
  description: string
}

export function ForBuisnessPartners({ description }: ForBuisnessPartnersData) {
  const styles = getStyles(defaultStyle)
  return (
    <HtmlPurifier
      html={description}
      customStyles={{ wrapper: styles('wrapper').sx }}
    />
  )
}
