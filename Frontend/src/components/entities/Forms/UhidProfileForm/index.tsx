'use client'

import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Box, Dialog, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, MemberDetailsForm } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type UhidProfileFormData = {
  firstName: string
  lastName: string
  dob: string
  gender: string
  email: string
  relation: string
}

export type UhidProfileFormProps = {
  setSelfState: React.Dispatch<React.SetStateAction<boolean>>
  defaultValues?: UhidProfileFormData
}

export function UhidProfileForm({
  setSelfState,
  defaultValues,
}: UhidProfileFormProps) {
  const form = useForm<UhidProfileFormData>({
    defaultValues,
    mode: 'onTouched',
  })

  const { handleSubmit } = form

  const onSubmit = (data: UhidProfileFormData): void => {
    console.log(data, 'submit')
  }
  const styles = getStyles(defaultStyles)

  return (
    <FormProvider {...form}>
      <Dialog
        open
        maxWidth="lg"
        {...styles('dialog')}
        onClose={() => setSelfState(false)}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box {...styles('wrapper')}>
            <Box {...styles('header')}>
              <Typography variant="h3" {...styles('heading')}>
                Add UHID Profile
              </Typography>
              <CloseRoundedIcon
                {...styles('closeIcon')}
                onClick={() => setSelfState(false)}
              />
            </Box>
            <Box {...styles('infoWrapper')}>
              <Typography variant="body2" {...styles('description')}>
                1. Please Select all the patients for whom you want to book the
                tests.
              </Typography>
              <Typography variant="body2" {...styles('description')}>
                2. All selected patients should have the same address.
              </Typography>
            </Box>
            <Box {...styles('children')}>
              <MemberDetailsForm />
            </Box>
            <Box {...styles('footer')}>
              <Box {...styles('buttonWrapper')}>
                <Button
                  label="Cancel"
                  variant="outlined"
                  customStyles={{ button: styles('button').sx }}
                />

                <Button
                  label="Add"
                  variant="contained"
                  customStyles={{ button: styles('button').sx }}
                  type="submit"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </FormProvider>
  )
}

export default UhidProfileForm
