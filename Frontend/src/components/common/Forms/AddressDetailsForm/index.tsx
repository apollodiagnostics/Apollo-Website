'use client'

import React, { useState } from 'react'
import { Box } from '@mui/material'
import { CommonRadio } from '@components/common/FormComponent/Checkbox'
import { CommonInput } from '@components/common/FormComponent/CommonInput'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export function AddressDetailsForm() {
  const styles = getStyles(defaultStyles)
  const [selectedRadio, setSelectedRadio] = useState<string>('')
  const handleRadioSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value)
  }
  return (
    <Box {...styles('wrapper')}>
      {/* <Typography {...styles('addAddressText')}>Add new address</Typography> */}
      <CommonInput
        label="Flat Number, Building Name, Street*"
        name="address"
        placeholder="Enter"
        rules={{
          required: 'This field is required',
        }}
        customStyles={{ wrapper: styles('inputWrapper').sx }}
      />
      <CommonInput
        label="Locality*"
        name="locality"
        placeholder="Enter"
        rules={{
          required: 'This field is required',
        }}
        customStyles={{ wrapper: styles('inputWrapper').sx }}
      />
      <CommonInput
        label="Landmark*"
        name="landmark"
        placeholder="Enter"
        rules={{
          required: 'This field is required',
        }}
        customStyles={{ wrapper: styles('inputWrapper').sx }}
      />

      <CommonInput
        label="City*"
        name="city"
        placeholder="Enter"
        rules={{
          required: 'This field is required',
        }}
        customStyles={{ wrapper: styles('inputWrapper').sx }}
      />
      <CommonInput
        label="State*"
        name="state"
        placeholder="Enter"
        rules={{
          required: 'This field is required',
        }}
        customStyles={{ wrapper: styles('inputWrapper').sx }}
      />
      <CommonInput
        label="Pincode*"
        name="pinCode"
        type="number"
        placeholder="Enter"
        rules={{
          required: 'This field is required',
          minLength: { value: 5, message: 'Min-Length should be 5' },
        }}
        customStyles={{ wrapper: styles('inputWrapper').sx }}
      />
      <Box {...styles('genderWrapper')}>
        <Box {...styles('gender')}>
          <CommonRadio
            label="Home"
            id="home"
            name="addressType"
            value="home"
            checked={selectedRadio === 'home'}
            onChange={handleRadioSelect}
          />
          <CommonRadio
            label="Office"
            id="other"
            name="addressType"
            value="office"
            checked={selectedRadio === 'office'}
            onChange={handleRadioSelect}
          />
          <CommonRadio
            label="Other"
            id="other"
            name="addressType"
            value="other"
            checked={selectedRadio === 'other'}
            onChange={handleRadioSelect}
          />
        </Box>
      </Box>
    </Box>
  )
}
