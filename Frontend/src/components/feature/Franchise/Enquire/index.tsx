'use client'

import { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutationQuery } from '@hooks'
import { EnquireFormData, InputData } from '@models'
import { Button, PopOverSection } from '@components/common'
import { CommonAutocomplete } from '@components/common/FormComponent/AutoComplete'
import { CommonInput } from '@components/common/FormComponent/CommonInput'
import { ROUTES } from '@utils/api/routes'
import { CustomStyles, getStyles } from '@utils/styles'
import { useQuery } from 'src/hooks/use-query'
import { QueryAllCities } from 'src/models/query.models'
import { useSnackbar } from 'src/providers/alerts-state-management'
import defaultStyle, { StylesClassNames } from './styles'

export type EnquireFormStaticData = {
  cities?: InputData[]
  states: InputData[]
}

type Props = EnquireFormStaticData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function Enquire({ customStyles, states }: Props) {
  const styles = getStyles(defaultStyle, customStyles)
  const { showSnackbar } = useSnackbar()
  const { isLoading, mutateAsync } = useMutationQuery({
    url: ROUTES.Enquire,
    method: 'post',
    service: 'DATA_CLIENT',
  })
  // Changes for Sparsh sir Demand
  const [stateName, setStateName] = useState('')
  const form = useForm<EnquireFormData>({
    defaultValues: {
      city: '',
      state: '',
      name: '',
      mobile_number: '',
    },
    mode: 'onTouched',
  })
  const { handleSubmit, reset, watch } = form

  const onSubmit = (data: EnquireFormData) => {
    mutateAsync({ ...data, state: stateName })
      .then(() => {
        showSnackbar('Enquire submitted successfully', 'success')
        reset()
      })
      .catch(() => {
        showSnackbar('Failed to submit enquire', 'error')
        reset()
      })
  }
  const [currentCities, setCurrentCities] = useState<InputData[]>([])
  const { queryCall } = useQuery({
    method: 'get', // minLength: { value: 5, message: 'Min-Length should be 5' },
    url: ROUTES.AllCities,
    options: {
      onSuccess: (data: QueryAllCities) => {
        setCurrentCities(
          data.data.rows.map((item) => ({
            label: item.City,
            value: item.City,
          }))
        )
      },
    },
  })
  useEffect(() => {
    const selectedState = watch('state')
    if (selectedState) {
      void queryCall({
        stateId: selectedState,
      })
      setStateName(
        states.find((item) => item.value === selectedState)?.label ||
          selectedState
      )
    } else {
      setCurrentCities([])
    }
  }, [watch('state')])

  return (
    <PopOverSection
      heading="Enquire Now"
      customStyles={{
        popOverSection: styles('popOverSection').sx,
        wrapper: styles('sectionWrapper').sx,
      }}
    >
      <FormProvider {...form}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box {...styles('wrapper')}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CommonInput
                  name="name"
                  placeholder="Name"
                  rules={{
                    required: 'This field is required',
                    // minLength: { value: 5, message: 'Min-Length should be 5' },
                  }}
                  customStyles={{
                    wrapper: styles('input').sx,
                    input: styles('commonInput').sx,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CommonInput
                  type="number"
                  name="mobile_number"
                  placeholder="Mobile Number"
                  rules={{
                    required: 'This field is required',
                    minLength: {
                      value: 10,
                      message: 'Min-Length should be 10',
                    },
                    maxLength: {
                      value: 10,
                      message: 'Max-Length should be 10',
                    },
                  }}
                  customStyles={{
                    wrapper: styles('input').sx,
                    input: styles('commonInput').sx,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CommonAutocomplete
                  placeholder="Select State"
                  options={states}
                  name="state"
                  rules={{
                    required: 'This field is required',
                  }}
                  customStyles={{ wrapper: styles('select').sx }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CommonAutocomplete
                  placeholder="Select City"
                  options={currentCities}
                  name="city"
                  rules={{
                    required: 'This field is required',
                  }}
                  customStyles={{ wrapper: styles('select').sx }}
                />
              </Grid>
            </Grid>

            <Box {...styles('buttonWrapper')}>
              <Button
                type="submit"
                label="Submit"
                variant="contained"
                customStyles={{ button: styles('button').sx }}
                loading={isLoading}
              />
            </Box>
          </Box>
        </Box>
      </FormProvider>
    </PopOverSection>
  )
}
