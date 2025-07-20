/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Divider } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { InputData } from '@models'
import { Button, CommonInput, CommonInputData } from '@components/common'
import { CommonAutocomplete } from '@components/common/FormComponent/AutoComplete'
import { PopOverSection } from '@components/common/PopOverSection'
import { ROUTES } from '@utils/api/routes'
import { extractCityInfoFromQuery } from '@utils/query'
import { CustomStyles, getStyles } from '@utils/styles'
import { useQuery } from 'src/hooks/use-query'
import { QueryAllCities } from 'src/models/query.models'
import defaultStyle, { StylesClassNames } from './styles'

export type LocateNearCentersData = {
  heading: string
  inputBarProps: CommonInputData
  states: InputData[]
  cities?: InputData[]
  localities: InputData[]
}
type Props = LocateNearCentersData & {
  customStyles?: CustomStyles<StylesClassNames>
}
export type LocateNearCentersFilter = {
  city: string
  state: string
  locality: string
  search: string
}

export function LocateNearCenters({
  customStyles,
  cities,
  heading,
  localities,
  states,
  inputBarProps,
}: Props) {
  const router = useRouter()
  const styles = getStyles(defaultStyle, customStyles)
  const form = useForm<LocateNearCentersFilter>({
    mode: 'onTouched',
  })
  const { handleSubmit, reset, watch } = form

  const onSubmit = (filters: LocateNearCentersFilter): void => {
    const filteredFilters = Object.fromEntries(
      Object.entries(filters).filter(([key, value]) => value)
    )
    const params = new URLSearchParams(filteredFilters)
    router.push(`find-nearest-centre?${params.toString()}`)
    reset()
  }
  const [currentCities, setCurrentCities] = useState<InputData[]>([])
  const { queryCall } = useQuery({
    method: 'get', // minLength: { value: 5, message: 'Min-Length should be 5' },
    url: ROUTES.AllCities,
    options: {
      onSuccess: (data: QueryAllCities) => {
        setCurrentCities(extractCityInfoFromQuery(data.data.rows))
      },
    },
  })
  useEffect(() => {
    const selectedState = watch('state')
    if (selectedState) {
      void queryCall({
        stateId: selectedState,
      })
    } else {
      setCurrentCities([])
    }
  }, [watch('state')])

  return (
    <FormProvider {...form}>
      <PopOverSection
        heading={heading}
        customStyles={{
          popOverSection: styles('popOverSection').sx,
        }}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box {...styles('wrapper')}>
            <CommonInput
              {...inputBarProps}
              customStyles={{ wrapper: styles('inputBar').sx }}
            />
            <Divider {...styles('divider')}>or</Divider>
            <Box {...styles('selectWrapper')}>
              <CommonAutocomplete
                name="state"
                options={states}
                placeholder="Select State"
                customStyles={{ wrapper: styles('select').sx }}
                // rules={{ required: 'State is required' }}
              />
              <CommonAutocomplete
                name="city"
                options={currentCities}
                placeholder="Select City"
                customStyles={{ wrapper: styles('select').sx }}
                // rules={{ required: 'City is required' }}
              />
              <CommonAutocomplete
                name="locality"
                options={localities}
                placeholder="Select Locality"
                customStyles={{ wrapper: styles('select').sx }}
                // rules={{ required: 'State is required' }}
              />
            </Box>
            <Box {...styles('buttonWrapper')}>
              <Button
                label="Search"
                variant="contained"
                customStyles={{ button: styles('button').sx }}
                type="submit"
              />
            </Box>
          </Box>
        </Box>
      </PopOverSection>
    </FormProvider>
  )
}
