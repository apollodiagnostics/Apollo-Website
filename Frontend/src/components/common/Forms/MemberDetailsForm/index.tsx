'use client'

import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { useFormContext } from 'react-hook-form'
import { CommonDatePicker } from '@components/common/DatePicker'
import { CommonAutocomplete } from '@components/common/FormComponent/AutoComplete'
import { CommonRadio } from '@components/common/FormComponent/Checkbox'
import { CommonInput } from '@components/common/FormComponent/CommonInput'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export function calculateAgeByDob(dob: string) {
  const birthDate = new Date(dob)
  const currentDate = new Date()
  let age = currentDate.getFullYear() - birthDate.getFullYear()
  const monthDifference = currentDate.getMonth() - birthDate.getMonth()
  const dayDifference = currentDate.getDate() - birthDate.getDate()

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age -= 1
  }

  return age
}

export function MemberDetailsForm() {
  const styles = getStyles(defaultStyles)
  const { setValue, getValues, watch } = useFormContext()
  const dob = watch('dob')

  const handleChangeDate = (date: Dayjs) => {
    const formatDate = date.format('YYYY-MM-DD')
    setValue('dob', formatDate)
  }
  const [selectedGender, setSelectedGender] = useState<string>(
    getValues('gender')
  )

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value)
    setValue('gender', event.target.value)
  }

  useEffect(() => {
    if (dob) {
      setValue('age', calculateAgeByDob(dob).toString())
    }
  }, [dob])

  return (
    <Box {...styles('wrapper')}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CommonInput
            label="First Name*"
            name="firstName"
            placeholder="Enter"
            rules={{
              required: 'This field is required',
            }}
            customStyles={{
              wrapper: styles('inputWrapper').sx,
              input: styles('input').sx,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CommonInput
            label="Last Name*"
            name="lastName"
            placeholder="Enter"
            rules={{
              required: 'This field is required',
            }}
            customStyles={{
              wrapper: styles('inputWrapper').sx,
              input: styles('input').sx,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography {...styles('label')}>Date Of Birth*</Typography>
          <CommonDatePicker
            initialValue={dayjs(dob)}
            onDateChange={handleChangeDate}
            customStyles={{
              wrapper: styles('datePickerWrapper').sx,
              datePicker: styles('datePicker').sx,
            }}
            maxDate={dayjs()}
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <CommonInput
            label="Address*"
            name="address"
            placeholder="Enter"
            rules={{
              required: 'This field is required',
              minLength: { value: 5, message: 'Min-Length should be 5' },
            }}
            customStyles={{
              wrapper: styles('inputWrapper').sx,
              input: styles('input').sx,
            }}
          />
        </Grid> */}
        <Grid item xs={12} md={6}>
          <CommonAutocomplete
            label="Relation*"
            placeholder="Select"
            options={[
              { label: 'Myself', value: 'Myself' },
              { label: 'Brother', value: 'Brother' },
              { label: 'Sister', value: 'Sister' },
              { label: 'Mother', value: 'Mother' },
              { label: 'Father', value: 'Father' },
              { label: 'Spouse', value: 'Spouse' },
              { label: 'Son', value: 'Son' },
              { label: 'Daughter', value: 'Daughter' },
            ]}
            name="relation"
            rules={{
              required: 'This field is required',
              minLength: { value: 5, message: 'Min-Length should be 5' },
            }}
            customStyles={{ wrapper: styles('inputWrapper').sx }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CommonInput
            label="Age*"
            name="age"
            placeholder="Enter"
            type="number"
            rules={{
              required: 'This field is required',
              min: { value: 10, message: `Age can't be less then 10` },
            }}
            readOnly
            customStyles={{
              wrapper: styles('inputWrapper').sx,
              input: styles('input').sx,
            }}
            disabled
            helperText="Age is auto-calculated from DOB."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CommonInput
            label="Email ID*"
            name="email"
            placeholder="Enter"
            rules={{
              required: 'This field is required',
              minLength: { value: 5, message: 'Min-Length should be 5' },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Not a valid email',
              },
            }}
            customStyles={{
              wrapper: styles('inputWrapper').sx,
              input: styles('input').sx,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box {...styles('genderWrapper')}>
            <Typography variant="body2" {...styles('label')}>
              Gender*
            </Typography>
            <Box {...styles('gender')}>
              <CommonRadio
                label="Female"
                id="Female"
                name="gender"
                value="female"
                checked={selectedGender === 'female'}
                onChange={handleGenderChange}
              />
              <CommonRadio
                label="Male"
                id="male"
                name="gender"
                value="male"
                checked={selectedGender === 'male'}
                onChange={handleGenderChange}
              />
              <CommonRadio
                label="Other"
                id="other"
                name="gender"
                value="others"
                checked={selectedGender === 'others'}
                onChange={handleGenderChange}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
