'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Box, Dialog, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutationQuery } from '@hooks'
import { LocationCoordinatesType } from '@models'
import { Button, SelectSlotForm } from '@components/common'
import { ROUTES } from '@utils/api/routes'
import { convertDateTimeFormat, convertTo12HourFormat } from '@utils/common'
import { getStyles } from '@utils/styles'
import {
  QueryRescheduleHomeCollectionData,
  QuerySlot,
  QuerySlotsResponse,
} from 'src/models/query.models'
import { useSnackbar } from 'src/providers/alerts-state-management'
import defaultStyles from './styles'

export type RescheduleFormData = {
  slotDate?: string
  slotTime?: QuerySlot
}

export type RescheduleFormProps = {
  setSelfState: React.Dispatch<React.SetStateAction<boolean>>
  preBookingId: string
  preBookingIdDigital: string
  location: LocationCoordinatesType
}

export function RescheduleForm({
  setSelfState,
  preBookingId,
  preBookingIdDigital,
  location,
}: RescheduleFormProps) {
  const router = useRouter()
  const styles = getStyles(defaultStyles)
  const [allSlots, setAllSlots] = useState<QuerySlotsResponse>()

  // TODO:Remove this before production

  const form = useForm<RescheduleFormData>({
    mode: 'onTouched',
  })
  const { showSnackbar } = useSnackbar()
  const { handleSubmit, watch } = form
  const { mutateAsync } = useMutationQuery({
    url: ROUTES.Slots,
    service: 'DATA_CLIENT',
    method: 'post',
    options: {
      onSuccess: (data: QuerySlotsResponse) => {
        setAllSlots(data)
      },
    },
  })

  const { mutateAsync: rescheduleHomeCollection, isLoading } = useMutationQuery(
    {
      url: ROUTES.RescheduleHomeCollection,
      service: 'DATA_CLIENT',
      method: 'put',
      options: {
        onSuccess: (data: QueryRescheduleHomeCollectionData) => {
          if (data.statusCode === 200) showSnackbar(data.message, 'success')
          else showSnackbar(data.message, 'error')
          router.refresh()
        },
      },
    }
  )
  const date = watch('slotDate')
  const time = watch('slotTime')

  const onSubmit = async (data: RescheduleFormData) => {
    if (date && time?.slotTime) {
      setSelfState(false)
      await rescheduleHomeCollection({
        client: process.env.NEXT_PUBLIC_CLIENT as string,
        preBookingId: Number(preBookingId),
        preBookingIdDigital,
        newAppDate: convertDateTimeFormat(
          `${data.slotDate} ${data.slotTime?.slotTime}`
        ),
        slotTime: [convertTo12HourFormat(data.slotTime?.slotTime as string)],
      })
    } else {
      showSnackbar('Date or Time Not Selected', 'warning')
    }
  }

  useEffect(() => {
    if (date) {
      void mutateAsync({
        lat: location.lat,
        lng: location.lng,
        date,
        minMaxRadius: '1',
        noOfSlots: '1',
      })
    }
  }, [date])

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
                Select Slot
              </Typography>
              <CloseRoundedIcon
                {...styles('closeIcon')}
                onClick={() => setSelfState(false)}
              />
            </Box>
            <Box {...styles('children')}>
              <SelectSlotForm
                morningSlots={allSlots?.data.morning || []}
                noonSlots={allSlots?.data.noon || []}
                eveningSlots={allSlots?.data.evening || []}
              />
            </Box>
            <Box {...styles('footer')}>
              <Box {...styles('buttonWrapper')}>
                <Button
                  label="Cancel"
                  variant="outlined"
                  customStyles={{ button: styles('button').sx }}
                />

                <Button
                  label="Save & Continue"
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
