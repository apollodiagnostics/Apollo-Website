/* eslint-disable @typescript-eslint/no-unnecessary-condition */

'use client'

import React from 'react'
import { Box, Typography, Radio, RadioProps } from '@mui/material'
import { useFormContext, RegisterOptions } from 'react-hook-form'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type CommonRadioProps = RadioProps & {
  name: string
  label: string
  rules?: RegisterOptions
}

export function CommonRadio({ name, label, rules, ...rest }: CommonRadioProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const styles = getStyles(defaultStyles)

  return (
    <Box>
      <Box display="flex" alignItems="center">
        <Radio {...register(name, rules)} {...rest} />
        <Typography {...styles('label')}>{label}</Typography>
      </Box>
      {errors[name] && (
        <Typography variant="body2" className="error" {...styles('errorText')}>
          {errors[name]?.message?.toString()}
        </Typography>
      )}
    </Box>
  )
}
