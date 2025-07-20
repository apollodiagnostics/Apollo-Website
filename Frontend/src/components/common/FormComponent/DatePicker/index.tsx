import * as React from 'react'
import { Box } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs, { Dayjs } from 'dayjs'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type CommonDatePickerProps = {
  label?: string
  initialValue?: Dayjs
  minDate?: Dayjs
  maxDate?: Dayjs
  onDateChange: (date: Dayjs) => void
}

type Props = CommonDatePickerProps & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function CommonDatePicker({
  label,
  initialValue = dayjs(),
  onDateChange,
  customStyles,
  minDate,
  maxDate,
}: Props) {
  const styles = getStyles(defaultStyles, customStyles)
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    initialValue
  )
  const handleDateChange = (value: Dayjs | null) => {
    if (value !== null) {
      onDateChange(value)
      setSelectedDate(value)
    }
  }

  return (
    <Box {...styles('wrapper')}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          value={selectedDate}
          views={['year', 'month', 'day']}
          {...styles('datePicker')}
          minDate={minDate}
          onChange={handleDateChange}
          maxDate={maxDate}
        />
      </LocalizationProvider>
    </Box>
  )
}
