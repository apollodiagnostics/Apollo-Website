'use client'

import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Box, Dialog, Typography } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type LocationDialogData = {
  heading: string
  link: string
}

export type LocationDialogProps = LocationDialogData & {
  setSelfState: React.Dispatch<React.SetStateAction<boolean>>
  customStyles?: CustomStyles<StylesClassNames>
}

export function LocationDialog({
  heading,
  link,
  customStyles,
  setSelfState,
}: LocationDialogProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Dialog
      open
      maxWidth="lg"
      {...styles('dialog')}
      onClose={() => setSelfState(false)}
    >
      <Box {...styles('wrapper')}>
        <Box {...styles('header')}>
          <Typography variant="h3" {...styles('heading')}>
            {heading}
          </Typography>
          <CloseRoundedIcon
            {...styles('closeIcon')}
            onClick={() => setSelfState(false)}
          />
        </Box>
        {link ? (
          <Box {...styles('children')} component="iframe" src={link} />
        ) : (
          <Box {...styles(['children', 'emptyWarning'])}>
            <Typography variant="h6">No Location Found</Typography>
          </Box>
        )}
      </Box>
    </Dialog>
  )
}

export default LocationDialog
