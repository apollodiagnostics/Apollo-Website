'use client'

import {
  Box,
  Input as MUIInput,
  Typography,
  InputProps as MuiInputProps,
} from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type InputData = MuiInputProps & {
  helperText?: string
  label?: string
}

type InputProps = InputData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function Input({
  placeholder,
  customStyles,
  helperText,
  ...rest
}: InputProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <MUIInput
        placeholder={placeholder}
        type="number"
        {...styles('input')}
        {...rest}
      />
      <Typography variant="body2" {...styles('helperText')}>
        {helperText}
      </Typography>
    </Box>
  )
}
