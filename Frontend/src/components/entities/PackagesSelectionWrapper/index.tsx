'use client'

import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import {
  Button,
  ButtonProps,
  SelectionCard,
  SelectionCardData,
} from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles from './styles'
import { StylesClassNames } from '../Footer/styles'

export type PackagesSelectionWrapperData = {
  packages: SelectionCardData[]
  heading?: string
  button?: ButtonProps
}

type PackagesSelectionWrapperProps = PackagesSelectionWrapperData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function PackagesSelectionWrapper({
  packages,
  customStyles,
  button,
  heading,
}: PackagesSelectionWrapperProps) {
  const isSmallScreen = useMediaQuery('(max-width: 600px)')
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('header')}>
        {heading && (
          <Typography variant="h2" {...styles('heading')}>
            {heading}
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
      <Box {...styles('cardWrapper')}>
        {packages.map((packageData) => (
          <SelectionCard key={`${packageData.label}`} {...packageData} />
        ))}
      </Box>
    </Box>
  )
}
