'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Box, Dialog, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutationQuery } from '@hooks'
import { Button, CommonAutocomplete } from '@components/common'
import { ROUTES } from '@utils/api/routes'
import { getStyles } from '@utils/styles'
import { PrebookingCancellationResponse } from 'src/models/query.models'
import { useSnackbar } from 'src/providers/alerts-state-management'
import defaultStyles from './styles'

export type CancelBookingFormData = {
  remark: string
}

export type CancelBookingFormProps = {
  setSelfState: React.Dispatch<React.SetStateAction<boolean>>
  preBookingId: string
  preBookingIdDigital: string
}

export function CancelBookingForm({
  setSelfState,
  preBookingId,
  preBookingIdDigital,
}: CancelBookingFormProps) {
  const styles = getStyles(defaultStyles)
  const { showSnackbar } = useSnackbar()
  const form = useForm<CancelBookingFormData>({
    mode: 'onTouched',
  })
  const router = useRouter()
  const { handleSubmit } = form

  const { isLoading, mutateAsync: cancelHomeCollection } = useMutationQuery({
    url: ROUTES.CancelBooking,
    method: 'post',
    service: 'DATA_CLIENT',
    options: {
      onSuccess: (data: PrebookingCancellationResponse) => {
        if (data.statusCode === 200) {
          router.refresh()
          showSnackbar(data.message, 'success')
        } else {
          showSnackbar(data.message, 'error')
        }
        setSelfState(false)
      },
      onError: () => {
        setSelfState(false)
      },
    },
  })
  const onSubmit = async (data: CancelBookingFormData) => {
    await cancelHomeCollection({
      client: process.env.NEXT_PUBLIC_CLIENT,
      preBookingId: Number(preBookingId),
      cancelRemarks: data.remark,
      cancelAllUhids: 0,
      preBookingIdDigital,
    })
  }

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
                Order Cancel
              </Typography>
              <CloseRoundedIcon
                {...styles('closeIcon')}
                onClick={() => setSelfState(false)}
              />
            </Box>
            <Box {...styles('children')}>
              <CommonAutocomplete
                name="remark"
                placeholder="Select reason"
                label="Why are you cancelling this order?"
                options={[
                  {
                    label: 'Incorrect Item Ordered',
                    value: 'Incorrect Item Ordered',
                  },
                  {
                    label: 'Order Processing Delay',
                    value: 'Order Processing Delay',
                  },
                  {
                    label: 'Changed Delivery Address',
                    value: 'Changed Delivery Address',
                  },
                  {
                    label: 'Other',
                    value: 'Other',
                  },
                ]}
              />
            </Box>
            <Box {...styles('footer')}>
              <Box {...styles('buttonWrapper')}>
                <Button
                  label="Submit"
                  variant="contained"
                  customStyles={{ button: styles('button').sx }}
                  type="submit"
                  loading={isLoading}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </FormProvider>
  )
}
