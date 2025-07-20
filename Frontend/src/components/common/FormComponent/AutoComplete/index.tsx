/* eslint-disable @typescript-eslint/no-unnecessary-condition */

'use client'

import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  Box,
  Autocomplete,
  TextField,
  Typography,
  AutocompleteProps,
} from '@mui/material'
import { useFormContext, Controller, RegisterOptions } from 'react-hook-form'
import { InputData } from '@models'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export interface CommonAutocompleteProps
  extends Omit<
    AutocompleteProps<InputData, false, false, false>,
    'renderInput'
  > {
  name: string
  label?: string
  options: InputData[]
  rules?: RegisterOptions
  helperText?: string
  customStyles?: CustomStyles<StylesClassNames>
  placeholder?: string
}

export function CommonAutocomplete({
  name,
  label,
  options,
  rules,
  helperText,
  customStyles,
  placeholder,
  ...rest
}: CommonAutocompleteProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      {label && (
        <Box component="label" htmlFor={name} {...styles('label')}>
          {label}
        </Box>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value, ref } }) => (
          <Autocomplete<InputData>
            options={options}
            getOptionLabel={(option: InputData) => option.label}
            popupIcon={<KeyboardArrowDownIcon />}
            onChange={(_, selectedOption) =>
              onChange(selectedOption ? selectedOption.value : '')
            }
            value={options.find((option) => option.value === value) || null}
            renderInput={(params) => (
              <TextField
                {...params}
                inputRef={ref}
                error={!!errors[name]}
                placeholder={placeholder}
                {...styles('textField')}
              />
            )}
            {...rest}
            {...styles('autoComplete')}
          />
        )}
      />
      {errors[name] && (
        <Typography variant="body2" className="error" {...styles('errorText')}>
          {errors[name]?.message?.toString()}
        </Typography>
      )}
      {helperText && (
        <Typography variant="body2" {...styles('helperText')}>
          {helperText}
        </Typography>
      )}
    </Box>
  )
}
