'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { useFormContext } from 'react-hook-form'
import { SlotSelector } from '@components/common/FormComponent/SlotBooking'
import { SlotDatePicker } from '@components/common/FormComponent/SlotDatePicker'
import { getStyles } from '@utils/styles'
import { QuerySlot } from 'src/models/query.models'
import { useCheckoutInfo } from 'src/providers/checkout-state-management'
import defaultStyles from './styles'

export type SelectSlotProps = {
  morningSlots: QuerySlot[]
  noonSlots: QuerySlot[]
  eveningSlots: QuerySlot[]
}
export function SelectSlotForm({
  morningSlots,
  noonSlots,
  eveningSlots,
}: SelectSlotProps) {
  const { setValue } = useFormContext()
  const { checkoutInfo, setCheckoutInfo } = useCheckoutInfo()
  const styles = getStyles(defaultStyles)

  const [selectedDate, setSelectedDate] = useState(
    checkoutInfo?.slot?.slotDate ? dayjs(checkoutInfo.slot.slotDate) : dayjs()
  )
  const [selectedSlot, setSelectedSlot] = useState<QuerySlot>(
    checkoutInfo?.slot ?? morningSlots[0]
  )

  useEffect(() => {
    setValue('slotDate', selectedDate.format('YYYY-MM-DD'))
    setValue('slotTime', selectedSlot)
    setCheckoutInfo({ ...checkoutInfo, slot: selectedSlot })
  }, [selectedDate, selectedSlot, setValue])

  return (
    <Box {...styles('container')}>
      <SlotDatePicker
        initialDate={selectedDate}
        onDateChange={(e: Dayjs) => {
          setSelectedDate(e)
          setSelectedSlot({
            slotTime: '',
            slotDate: '',
            slotId: 0,
            bookingStatus: 0,
            phleboId: 0,
          })
        }}
      />
      <Typography {...styles('heading')}>Select Slot Time</Typography>
      <SlotSelector
        morningSlots={morningSlots}
        noonSlots={noonSlots}
        eveningSlots={eveningSlots}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
      />
    </Box>
  )
}

export default SelectSlotForm
