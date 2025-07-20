'use client'

import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type SlotDatePickerProps = {
  initialDate?: Dayjs
  onDateChange: (date: Dayjs) => void
}

const generateDatesFromTodayToEndOfMonth = (startDate: Dayjs) => {
  const dates = []
  const today = dayjs().startOf('day')
  let currentDate = today.isAfter(startDate.startOf('month'))
    ? today
    : startDate.startOf('month')
  const endOfMonth = startDate.endOf('month')

  while (
    currentDate.isBefore(endOfMonth, 'day') ||
    currentDate.isSame(endOfMonth, 'day')
  ) {
    dates.push({
      date: currentDate.format('DD'),
      day: currentDate.format('ddd').toUpperCase(),
    })
    currentDate = currentDate.add(1, 'day')
  }

  return dates
}

export function SlotDatePicker({
  initialDate = dayjs(),
  onDateChange,
}: SlotDatePickerProps) {
  const today = dayjs().startOf('day')
  const [selectedMonth, setSelectedMonth] = useState(today)
  const [dates, setDates] = useState(
    generateDatesFromTodayToEndOfMonth(selectedMonth)
  )
  const styles = getStyles(defaultStyles)

  const initialDateWithinMonth =
    initialDate.isSame(selectedMonth, 'month') && initialDate.isAfter(today)
      ? initialDate
      : today

  const setSelectedDate = (date: Dayjs) => {
    onDateChange(date)
  }

  const handleMonthChange = (date: Dayjs | null) => {
    if (date) {
      const newMonth = date.startOf('month')
      setSelectedMonth(newMonth)
      setDates(generateDatesFromTodayToEndOfMonth(newMonth))
    }
  }

  const shouldDisableDate = (date: Dayjs) => {
    const startOfMonth = selectedMonth.startOf('month')
    return date.isBefore(today, 'day') || date.isBefore(startOfMonth, 'day')
  }

  return (
    <Box {...styles('container')}>
      <Typography {...styles('heading')}>Select Slot Date</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['year', 'month']}
          value={selectedMonth}
          onChange={handleMonthChange}
          openTo="month"
          shouldDisableDate={shouldDisableDate}
          {...styles('datePicker')}
        />
      </LocalizationProvider>
      <Box {...styles('slotsContainer')}>
        {dates.slice(0, 6).map((item) => (
          <Box
            key={item.date}
            {...styles(
              initialDateWithinMonth.format('DD') === item.date
                ? ['containedSlotButton', 'dateButton']
                : ['outlinedSlotButton', 'dateButton']
            )}
            onClick={() =>
              setSelectedDate(selectedMonth.date(parseInt(item.date, 10)))
            }
          >
            <Typography {...styles('dateLabel')}>{item.date}</Typography>
            <Typography {...styles('dayLabel')}>{item.day}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
