import React from 'react'
import { Box, Typography } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type SectionHeadingData = {
  title: string
}

type SectionHeadingProps = SectionHeadingData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function SectionHeading({ title, customStyles }: SectionHeadingProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Typography variant="h2" {...styles('label')}>
        {title}
      </Typography>
    </Box>
  )
}
