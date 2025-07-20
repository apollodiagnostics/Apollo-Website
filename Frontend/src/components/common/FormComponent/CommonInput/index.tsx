/* eslint-disable @typescript-eslint/no-unnecessary-condition */

'use client'

import React from 'react'
import { Box, Input, InputProps, Typography } from '@mui/material'
import { useFormContext, RegisterOptions } from 'react-hook-form'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type CommonInputData = InputProps & {
  name: string
  label?: string
  rules?: RegisterOptions
  helperText?: string
}

type CommonInputProps = {
  customStyles?: CustomStyles<StylesClassNames>
} & CommonInputData

export function CommonInput({
  name,
  label,
  rules,
  helperText,
  customStyles,
  ...rest
}: CommonInputProps) {
  const {
    register,
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

      <Input
        id={name}
        {...register(name, rules)}
        {...rest}
        {...styles('input')}
        disableUnderline
      />
      {errors[name] && (
        <Typography variant="body2" className="error" {...styles('errorText')}>
          {errors[name]?.message?.toString()}
        </Typography>
      )}
      {helperText && (
        <Box component="label" htmlFor={name} {...styles('helperText')}>
          {helperText}
        </Box>
      )}
    </Box>
  )
}
