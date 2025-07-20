'use client'

import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'
import { Button, ButtonProps } from '../Button'
import { SectionHeading } from '../SectionHeading'

export type SectionHeaderData = {
  sectionHeading?: string
  heading?: string
  button?: ButtonProps
  description?: string
}

export type SectionHeaderProps = SectionHeaderData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function SectionHeader({
  customStyles,
  button,
  heading,
  sectionHeading,
  description,
}: SectionHeaderProps) {
  const isSmallScreen = useMediaQuery('(max-width: 600px)')
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('infoContainer')}>
        {sectionHeading && (
          <SectionHeading
            title={sectionHeading}
            customStyles={{ label: styles('label').sx }}
          />
        )}
        {heading && (
          <Typography variant="h2" {...styles('heading')}>
            {heading}
          </Typography>
        )}
      </Box>
      {description && (
        <Typography variant="h2" {...styles('description')}>
          {description}
        </Typography>
      )}
      {button && (
        <Button
          {...button}
          customStyles={{ button: styles('button').sx }}
          variant={isSmallScreen ? 'text' : 'outlined'}
          // icon={<ArrowForwardRoundedIcon />}
        />
      )}
    </Box>
  )
}
