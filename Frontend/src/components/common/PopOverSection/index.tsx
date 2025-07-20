import React from 'react'
import { Box, Typography } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type PopOverSectionData = {
  heading: string
}

type PopOverSectionProps = PopOverSectionData & {
  children: React.ReactNode
  customStyles?: CustomStyles<StylesClassNames>
}

export function PopOverSection({
  customStyles,
  children,
  heading,
}: PopOverSectionProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('popOverSection')}>
        <Typography {...styles('heading')}>{heading}</Typography>
        <Box {...styles('childrenWrapper')}>{children}</Box>
      </Box>
    </Box>
  )
}
