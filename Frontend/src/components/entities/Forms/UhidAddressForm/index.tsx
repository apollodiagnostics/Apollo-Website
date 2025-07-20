/* eslint-disable no-nested-ternary */

'use client'

import React, { useEffect, useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import DeleteIcon from '@mui/icons-material/Delete'
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp'
import { Box, Dialog, IconButton, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutationQuery } from '@hooks'
import {
  AddressDetailsForm,
  Button,
  Loader,
  UploadPopUp,
} from '@components/common'
import { AddressSelectionMap } from '@components/entities/AddressSelectionMap'
import { deleteAddressById } from '@utils/api/dashboard'
import { ROUTES } from '@utils/api/routes'
import { getStyles } from '@utils/styles'
import { useQuery } from 'src/hooks/use-query'
import { QueryAllAddress, QuerySingleAddress } from 'src/models/query.models'
import { useSnackbar } from 'src/providers/alerts-state-management'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles from './styles'

export type UhidAddressFormData = {
  address: string
  city: string
  state: string
  locality: string
  pinCode: string
  landmark: string
  slotDate: string
  slotTime: string
  addressType: string
  lat: string
  lng: string
}

export type UhidAddressFormProps = {
  setSelfState: React.Dispatch<React.SetStateAction<boolean>>
  defaultValues?: UhidAddressFormData
  refetch?: () => void
}

enum ADDRESS_FORM_VIEW {
  ADDRESS_VIEW = 0,
  ADDRESS_SELECTION = 1,
  ADDRESS_DETAILS_FORM = 2,
}

export function UhidAddressForm({
  setSelfState,
  defaultValues,
  refetch,
}: UhidAddressFormProps) {
  const { showSnackbar } = useSnackbar()
  const { userDetails } = useUserState()
  const styles = getStyles(defaultStyles)
  const [nextButtonState, setNextButtonState] = useState(false)
  const [addresses, setAddresses] = useState<QuerySingleAddress[]>()
  const [deleteAddressPopup, setDeleteAddressPopup] = useState<boolean>(false)
  const [addressId, setAddressId] = useState<string>('')
  const [addressFormState, setAddressFormState] = useState(
    ADDRESS_FORM_VIEW.ADDRESS_VIEW
  )
  const form = useForm<UhidAddressFormData>({
    defaultValues,
    mode: 'onTouched',
  })
  const { handleSubmit } = form
  const { mutateAsync, isLoading: createLoading } = useMutationQuery({
    method: 'post',
    service: 'DATA_CLIENT',
    url: ROUTES.Address,
  })

  const { queryCall, isLoading } = useQuery({
    method: 'get',
    url: ROUTES.Address,
    options: {
      onSuccess: (data: QueryAllAddress) => {
        setAddresses(data.rows)
      },
    },
  })

  const phoneNumber = userDetails?.phoneNumber
  const profileId = userDetails?.profileId

  const handleDelete = (addressId: string) => {
    setAddressId(addressId)
    setDeleteAddressPopup(true)
  }

  const getAddress = () => {
    queryCall({ mobileNumber: phoneNumber })
      .then(() => {})
      .catch(() => showSnackbar('Error occurred', 'error'))
  }

  const onSubmit = (data: UhidAddressFormData): void => {
    if ([ADDRESS_FORM_VIEW.ADDRESS_VIEW, 1].includes(addressFormState)) {
      setAddressFormState((oldState) => oldState + 1)
      return
    }
    const addressData = {
      profileId: Number(profileId),
      mobile: phoneNumber,
      pincode: data.pinCode,
      address: data.address,
      type: data.addressType,
      stateName: data.state,
      cityName: data.city,
      areaName: data.address,
      landmark: data.locality,
      lat: data.lat.toString(),
      lng: data.lng.toString(),
    }

    mutateAsync(addressData)
      .then(() => {
        getAddress()
        setAddressFormState(ADDRESS_FORM_VIEW.ADDRESS_VIEW)
      })
      .catch(() => showSnackbar('Error occurred', 'error'))
  }

  const handleDeleteAddressPopUp = () => {
    setDeleteAddressPopup(false)
  }
  const cancelAddressDeletion = () => {
    setDeleteAddressPopup(false)
  }
  const deleteAddressConfirmButton = () => {
    deleteAddressById(addressId)
      .then(() => {
        getAddress()
        showSnackbar('Address Deleted Successfully', 'success')
      })
      .catch((error) => {
        showSnackbar(error.message, 'error')
      })
    setDeleteAddressPopup(false)
  }

  useEffect(() => {
    getAddress()
  }, [])

  const handleClose = () => {
    setSelfState(false)
    if (refetch) {
      refetch()
    }
  }

  return (
    <FormProvider {...form}>
      <Dialog open maxWidth="lg" {...styles('dialog')} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box {...styles('wrapper')}>
            <Box {...styles('header')}>
              <Typography variant="h3" {...styles('heading')}>
                Addresses
              </Typography>
              {/* <CloseRoundedIcon
                {...styles('closeIcon')}
                onClick={handleClose}
              /> */}
              <IconButton {...styles('closeIcon')} onClick={handleClose}>
                <CloseRoundedIcon />
              </IconButton>
            </Box>

            <Box {...styles('children')}>
              {isLoading ? (
                <Loader
                  loading={isLoading}
                  customStyles={{
                    wrapper: { marginTop: '40%', marginRight: '30px' },
                  }}
                />
              ) : (
                <>
                  {addressFormState === ADDRESS_FORM_VIEW.ADDRESS_SELECTION && (
                    <AddressSelectionMap
                      key={addressFormState}
                      setNextButtonState={setNextButtonState}
                    />
                  )}
                  {addressFormState ===
                    ADDRESS_FORM_VIEW.ADDRESS_DETAILS_FORM && (
                    <AddressDetailsForm />
                  )}
                  {addressFormState === ADDRESS_FORM_VIEW.ADDRESS_VIEW &&
                    (addresses?.length ? (
                      <Box {...styles('fetchedAddressContainer')}>
                        {addresses.map((item) => (
                          <Box
                            key={item.address_id}
                            {...styles('checkboxContainer')}
                          >
                            <Box {...styles('address')}>
                              <LocationOnSharpIcon
                                {...styles('locationIcon')}
                              />
                              <Typography {...styles('addressText')}>
                                {`${item.address}, ${item.cityName}, ${item.pincode}`}
                              </Typography>
                            </Box>
                            <DeleteIcon
                              {...styles('deleteIcon')}
                              onClick={() =>
                                handleDelete(item.address_id.toString())
                              }
                            />
                          </Box>
                        ))}
                      </Box>
                    ) : (
                      <Typography {...styles(['addressText', 'notFoundText'])}>
                        No Address Found
                      </Typography>
                    ))}
                </>
              )}
            </Box>

            <Box {...styles('footer')}>
              <Box {...styles('buttonWrapper')}>
                {addressFormState > ADDRESS_FORM_VIEW.ADDRESS_VIEW && (
                  <Button
                    label="Back"
                    variant="outlined"
                    customStyles={{ button: styles('button').sx }}
                    onClick={() => {
                      setAddressFormState((oldState) => oldState - 1)
                    }}
                  />
                )}

                {(nextButtonState ||
                  addressFormState === ADDRESS_FORM_VIEW.ADDRESS_VIEW) && (
                  <Button
                    label={
                      addressFormState === ADDRESS_FORM_VIEW.ADDRESS_VIEW
                        ? 'Add New Address'
                        : addressFormState ===
                            ADDRESS_FORM_VIEW.ADDRESS_SELECTION
                          ? 'Next'
                          : 'Save'
                    }
                    variant="contained"
                    customStyles={{ button: styles('button').sx }}
                    type="submit"
                    loading={createLoading}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        <Dialog open={deleteAddressPopup} onClose={handleDeleteAddressPopUp}>
          <UploadPopUp
            image={{ src: '/images/logoutIcon.png', alt: 'logout icon' }}
            button1={{ label: 'No, Go back' }}
            heading="Are you sure you want delete this address?"
            button2={{ label: 'Yes, Delete' }}
            onCancel={cancelAddressDeletion}
            onConfirm={deleteAddressConfirmButton}
          />
        </Dialog>
      </Dialog>
    </FormProvider>
  )
}

export default UhidAddressForm
