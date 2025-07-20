'use client'

import React, { useEffect, useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Box, Dialog, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutationQuery } from '@hooks'
import { defaultCity } from '@models'
import { Button, SelectSlotForm } from '@components/common'
import { ROUTES } from '@utils/api/routes'
import { getStyles } from '@utils/styles'
import { QuerySlot, QuerySlotsResponse } from 'src/models/query.models'
import { useSnackbar } from 'src/providers/alerts-state-management'
import { useCheckoutInfo } from 'src/providers/checkout-state-management'
import defaultStyles from './styles'

export type SlotFormData = {
  slotDate?: string
  slotTime?: QuerySlot
}

export type SlotFormProps = {
  setSelfState: React.Dispatch<React.SetStateAction<boolean>>
  defaultValues?: SlotFormData
}

export function SlotForm({ setSelfState, defaultValues }: SlotFormProps) {
  const styles = getStyles(defaultStyles)
  const { setCheckoutInfo, checkoutInfo } = useCheckoutInfo()
  const [allSlots, setAllSlots] = useState<QuerySlotsResponse>()

  const form = useForm<SlotFormData>({
    defaultValues,
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
  const date = watch('slotDate')
  const time = watch('slotTime')

  const onSubmit = (data: SlotFormData): void => {
    if (date && time?.slotTime) {
      setSelfState(false)
      setCheckoutInfo({ ...checkoutInfo, slot: data.slotTime })
    } else {
      showSnackbar('Date or Time Not Selected', 'warning')
    }
  }

  useEffect(() => {
    if (date) {
      void mutateAsync({
        lat: checkoutInfo?.address?.lat || defaultCity.lat,
        lng: checkoutInfo?.address?.lng || defaultCity.lng,
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
              {/* {isLoading ? (
                <Loader loading={isLoading} />
              ) : ( */}
              <SelectSlotForm
                morningSlots={allSlots?.data.morning || []}
                noonSlots={allSlots?.data.noon || []}
                eveningSlots={allSlots?.data.evening || []}
              />
              {/* )} */}
            </Box>
            <Box {...styles('footer')}>
              <Box {...styles('buttonWrapper')}>
                {/* <Button
                  label="Cancel"
                  variant="outlined"
                  customStyles={{ button: styles('button').sx }}
                /> */}

                <Button
                  label="Save & Continue"
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
