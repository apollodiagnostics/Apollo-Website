import React from 'react'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'
import { Badge, Box } from '@mui/material'
import dayjs from 'dayjs'
import { Button } from '@components/common/Button'
import { getStyles } from '@utils/styles'
import { QuerySlot } from 'src/models/query.models'
import defaultStyles from './styles'

export type SlotSelectorProps = {
  morningSlots: QuerySlot[]
  noonSlots: QuerySlot[]
  eveningSlots: QuerySlot[]
  selectedSlot: QuerySlot | null
  setSelectedSlot: (slot: QuerySlot) => void
}

export function SlotSelector({
  morningSlots,
  noonSlots,
  eveningSlots,
  selectedSlot,
  setSelectedSlot,
}: SlotSelectorProps) {
  const styles = getStyles(defaultStyles)

  function isSlotExpired(slotTime: string, slotDate: string): boolean {
    const currentTime = dayjs()
    const formattedDate = dayjs(slotDate, 'YYYY-MM-DD')
    const formattedSlotTime = dayjs(slotTime, 'hh:mm A')

    const combinedSlotDateTime = formattedDate
      .hour(formattedSlotTime.hour())
      .minute(formattedSlotTime.minute())

    if (combinedSlotDateTime.isBefore(currentTime)) {
      return true
    }
    return false
  }

  return (
    <Box {...styles('slotsContainer')}>
      {[...morningSlots, ...noonSlots, ...eveningSlots].map((slot) => (
        <Badge
          key={slot.phleboId}
          badgeContent={
            isSlotExpired(slot.slotTime, slot.slotDate) ? (
              <WatchLaterOutlinedIcon {...styles('badge')} />
            ) : null
          }
        >
          <Button
            key={slot.slotId}
            label={slot.slotTime}
            disabled={isSlotExpired(slot.slotTime, slot.slotDate)}
            {...styles(
              selectedSlot && selectedSlot.slotTime === slot.slotTime
                ? ['containedSlotButton', 'slotButton']
                : ['outlinedSlotButton', 'slotButton']
            )}
            onClick={() => {
              setSelectedSlot(slot)
            }}
          />
        </Badge>
      ))}
    </Box>
  )
}

export default SlotSelector
