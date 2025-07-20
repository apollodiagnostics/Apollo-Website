'use client'

import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Box, Dialog, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import {
  AddressDetailsForm,
  Button,
  MemberDetailsForm,
  Stepper,
} from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type CheckoutFormData = {
  firstName: string
  lastName: string
  dob: string
  gender: string
  email: string
  relation: string
  address: string
  mobilenumber: string
  age: string
}

export type CheckoutFormProps = {
  setSelfState: React.Dispatch<React.SetStateAction<boolean>>
  defaultValues?: CheckoutFormData
}

export function CheckoutForm({
  setSelfState,
  defaultValues,
}: CheckoutFormProps) {
  const [step, setStep] = useState(0)
  const form = useForm<CheckoutFormData>({
    defaultValues,
    mode: 'onTouched',
  })

  const { handleSubmit } = form

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const onSubmit = (data: CheckoutFormData): void => {
    if (step < 2) {
      handleNextStep()
    }
    console.log(data, 'submit')
  }
  const steps = ['Member Details', 'Address Details', 'Select Slot']
  const styles = getStyles(defaultStyles)
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
                Patient Details
              </Typography>
              <CloseRoundedIcon
                {...styles('closeIcon')}
                onClick={() => setSelfState(false)}
              />
            </Box>
            <Stepper steps={steps} activeStep={step} />
            <Box {...styles('infoWrapper')}>
              <Typography variant="body2" {...styles('description')}>
                1. Please Select all the patients for whom you want to book the
                tests.
              </Typography>
              <Typography variant="body2" {...styles('description')}>
                2. All selected patients should have the same address.
              </Typography>
            </Box>
            <Box {...styles('children')}>
              {step === 0 && <MemberDetailsForm />}
              {step === 1 && <AddressDetailsForm />}
              {/* {step === 2 && <SelectSlotForm />} */}
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
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </FormProvider>
  )
}

export default CheckoutForm
