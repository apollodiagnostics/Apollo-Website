'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Dialog, IconButton, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutationQuery } from '@hooks'
import { AddUhidProfileFormData } from '@models'
import { Button, MemberDetailsForm } from '@components/common'
import { addUhidProfile } from '@utils/api/dashboard'
import { ROUTES } from '@utils/api/routes'
import { convertQueryUhidProfileToUhidProfileData } from '@utils/common'
import { getStyles } from '@utils/styles'
import { useSnackbar } from 'src/providers/alerts-state-management'
import defaultStyles from './styles'

export type AddUhidProfileFormProps = {
  setSelfState: React.Dispatch<React.SetStateAction<boolean>>
  defaultValues?: AddUhidProfileFormData
  variant?: 'add' | 'edit'
  userProfileId?: string
  heading?: string
  allowClosing?: boolean
}

export function AddUhidProfileForm({
  setSelfState,
  defaultValues,
  variant = 'add',
  userProfileId,
  heading,
  allowClosing = true,
}: AddUhidProfileFormProps) {
  const { refresh } = useRouter()
  const { showSnackbar } = useSnackbar()
  const styles = getStyles(defaultStyles)
  const { isLoading, mutateAsync } = useMutationQuery({
    url: `${ROUTES.Profile}/${userProfileId}`,
    method: 'put',
    service: 'DATA_CLIENT',
  })
  const form = useForm<AddUhidProfileFormData>({
    defaultValues,
    mode: 'onChange',
  })

  const { handleSubmit, reset, getValues, watch } = form
  const onSubmit = (data: AddUhidProfileFormData): void => {
    const formData = convertQueryUhidProfileToUhidProfileData(data)
    if (variant === 'add')
      addUhidProfile(formData)
        .then(() => {
          refresh()
          reset()
          setSelfState(false)
          showSnackbar('Patient Profile Added Successfully', 'success')
        })
        .catch((error) => {
          showSnackbar(error.message, 'error')
          setSelfState(false)
          reset()
        })
    else if (userProfileId)
      mutateAsync(formData)
        .then(() => {
          refresh()
          reset()
          setSelfState(false)
          showSnackbar('Profile Updated Successfully', 'success')
        })
        .catch((error) => {
          reset()
          setSelfState(false)
          showSnackbar(error.message, 'error')
        })
  }

  return (
    <FormProvider {...form}>
      <Dialog
        open
        maxWidth="lg"
        {...styles('dialog')}
        onClose={() => allowClosing && setSelfState(false)}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box {...styles('wrapper')}>
            <Box {...styles('header')}>
              <Typography variant="h3" {...styles('heading')}>
                {heading ||
                  (variant === 'add'
                    ? 'Add Patient Profile'
                    : 'Edit Patient Profile')}
              </Typography>
              {allowClosing && (
                <IconButton
                  {...styles('closeIcon')}
                  onClick={() => setSelfState(false)}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Box>
            <Box {...styles('infoWrapper')}>
              <Typography variant="body2" {...styles('description')}>
                1.&nbsp;&nbsp;Please Select all the patients for whom you want
                to book the tests.
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
                  key={getValues('gender')}
                  label={variant === 'add' ? 'Submit' : 'Update'}
                  variant="contained"
                  loading={isLoading}
                  customStyles={{ button: styles('button').sx }}
                  type="submit"
                  disabled={!watch('gender') || !watch('dob')}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </FormProvider>
  )
}

export default AddUhidProfileForm
