'use client'

import { useEffect, useState } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutationQuery } from '@hooks'
import { defaultCity, InputData } from '@models'
import {
  Button,
  ButtonProps,
  CommonInput,
  CommonAutocomplete,
} from '@components/common'
import { CommonDatePicker } from '@components/common/DatePicker'
import { getNearCitiesDetails, getAllSlotsWrtDate } from '@utils/api/dashboard'
import { ROUTES } from '@utils/api/routes'
import { CustomStyles, getStyles } from '@utils/styles'
import { QueryCenterData } from 'src/models/query.models'
import { useSnackbar } from 'src/providers/alerts-state-management'
import defaultStyle, { StylesClassNames } from './styles'

export type BookAppointmentFilter = {
  name: string
  email: string
  mobileNumber: string
  cities: string
  date: string
  labCenter: string
  slotTiming: string
  testName: string
}
export type BookWalkInSlotFormData = {
  heading: string
  cities: InputData[]
  slots?: InputData[]
  button: ButtonProps
}
export type BookWalkInSlotFormProps = BookWalkInSlotFormData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function BookWalkInSlotForm({
  customStyles,
  heading,
  cities,
  button,
}: BookWalkInSlotFormProps) {
  const styles = getStyles(defaultStyle, customStyles)
  const [labCenter, setLabCenter] = useState<InputData[]>([])
  const [slots, setSlot] = useState<InputData[]>([])
  const [date, setDate] = useState<Dayjs>(dayjs())
  const { showSnackbar } = useSnackbar()

  const handleChangeDate = (date: Dayjs) => {
    setDate(date)
  }
  const form = useForm<BookAppointmentFilter>({
    mode: 'onTouched',
  })
  const { handleSubmit, watch, reset } = form
  const { mutateAsync, isLoading } = useMutationQuery({
    method: 'post',
    url: ROUTES.BookAppointment,
    service: 'DATA_CLIENT',
    options: {
      onSuccess: () => {
        showSnackbar('Walk in Slot Booked Successfully', 'success')
        reset()
      },
      onError: () => showSnackbar('Failed to book walk in slot', 'error'),
    },
  })

  const onSubmit = (data: BookAppointmentFilter) => {
    void mutateAsync({
      name: data.name,
      city: data.cities,
      booked_date: date.format('YYYY-MM-DD'),
      email: data.email,
      mobile_number: data.mobileNumber,
      lab_center: data.labCenter,
      slot_time: data.slotTiming,
      test_name: data.testName,
    })
  }

  function extractLocalities(data: QueryCenterData[]): InputData[] {
    const labCenter: InputData[] = data.map((item) => {
      return {
        label: item.centre_name,
        value: item.centre_name,
      }
    })
    return labCenter
  }

  const getLocalitiesForAppointment = async (
    id: string
  ): Promise<InputData[]> => {
    const response = await getNearCitiesDetails(id)
    const data = extractLocalities(response.data.rows)
    return data
  }

  useEffect(() => {
    const selectedCity = watch('cities')
    if (selectedCity) {
      getLocalitiesForAppointment(selectedCity)
        .then((data) => {
          setLabCenter(data)
        })
        .catch(() => {})
    }
  }, [watch('cities')])

  const getSlots = async () => {
    const response = await getAllSlotsWrtDate({
      lat: defaultCity.lat,
      lng: defaultCity.lng,
      date: date.format('YYYY-MM-DD'),
      minMaxRadius: '1',
      noOfSlots: '1',
    })

    const slotArray = [
      ...response.data.morning,
      ...response.data.noon,
      ...response.data.evening,
    ]
    const arr: InputData[] = slotArray.map((item) => {
      return {
        value: item.slotTime,
        label: item.slotTime,
      }
    })

    setSlot(arr)
  }
  useEffect(() => {
    void getSlots()
  }, [date])

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        {...styles('wrapper')}
      >
        <Typography {...styles('heading')}>{heading}</Typography>
        <Box {...styles('formWrapper')}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <CommonInput
                name="name"
                placeholder="Name"
                rules={{
                  required: 'This Field is Required',
                }}
                customStyles={{ input: styles('input').sx }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CommonInput
                name="email"
                type="email"
                placeholder="Email Address"
                customStyles={{ input: styles('input').sx }}
                rules={{
                  required: 'This Field is Required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Not a valid email',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CommonInput
                name="mobileNumber"
                type="number"
                placeholder="Mobile Number"
                rules={{
                  required: 'This Field is Required',
                  minLength: { value: 10, message: 'Min-Length should be 10' },
                  maxLength: { value: 10, message: 'Max-Length should be 10' },
                }}
                customStyles={{ input: styles('input').sx }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CommonAutocomplete
                name="cities"
                options={cities}
                placeholder="Select City"
                customStyles={{
                  wrapper: styles('select').sx,
                  textField: styles('autoCompleteTextField').sx,
                }}
                rules={{ required: 'This Field is Required' }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CommonAutocomplete
                name="labCenter"
                options={labCenter}
                placeholder="Select Lab Center"
                customStyles={{
                  wrapper: styles('select').sx,
                  textField: styles('autoCompleteTextField').sx,
                }}
                rules={{ required: 'This Field is Required' }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CommonDatePicker
                onDateChange={handleChangeDate}
                minDate={dayjs()}
                maxDate={dayjs().add(7, 'day')}
                customStyles={{
                  wrapper: styles('datePickerWrapper').sx,
                  datePicker: styles('datePicker').sx,
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CommonAutocomplete
                name="slotTiming"
                options={slots}
                placeholder="Select Slot Time"
                customStyles={{
                  wrapper: styles('select').sx,
                  textField: styles('autoCompleteTextField').sx,
                }}
                rules={{ required: 'This Field is Required' }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CommonInput
                name="testName"
                type="string"
                placeholder="Enter Test Name"
                rules={{
                  required: 'This Field is Required',
                }}
                customStyles={{ input: styles('input').sx }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box {...styles('buttonWrapper')}>
          <Button
            label={button.label}
            customStyles={{ button: styles('button').sx }}
            type="submit"
            loading={isLoading}
          />
        </Box>
      </Box>
    </FormProvider>
  )
}
