import React from 'react'
import {
  Box,
  Checkbox,
  FormControlLabel,
  CheckboxProps as MUICheckBoxProps,
  Typography,
} from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type CheckBoxProps = MUICheckBoxProps & {
  label: string
  customStyles?: CustomStyles<StylesClassNames>
}
export function CheckBox({
  label,
  onChange,
  customStyles,
  ...rest
}: CheckBoxProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <FormControlLabel
        control={
          <Checkbox onChange={onChange} {...styles('checkBox')} {...rest} />
        }
        label={
          <Typography {...styles('label')} variant="body1">
            {label}
          </Typography>
        }
      />
    </Box>
  )
}
