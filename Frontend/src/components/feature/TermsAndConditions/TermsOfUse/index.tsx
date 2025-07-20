import React from 'react'
import { Box } from '@mui/material'
import { HtmlPurifier } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type TermsOfUseDataProps = {
  sectionHeading: string
  heading: string
  description: string
}

export function TermsOfUse({
  // sectionHeading,
  // heading,
  description,
}: TermsOfUseDataProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      {/* <Box {...styles('headingWrapper')}>
        <Typography {...styles('sectionHeading')}>{sectionHeading}</Typography>
        <Typography {...styles('heading')}>{heading}</Typography>
      </Box> */}
      <HtmlPurifier
        html={description}
        customStyles={{ wrapper: styles('description').sx }}
      />
    </Box>
  )
}
