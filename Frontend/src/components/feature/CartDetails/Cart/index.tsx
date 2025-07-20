/* eslint-disable complexity */
/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import {
  Box,
  Typography,
  Divider,
  TextField,
  CircularProgress,
} from '@mui/material'
import { AxiosError } from 'axios'
import { useMutationQuery } from '@hooks'
import {
  AlertModal,
  Button,
  Image,
  CheckBox,
  DisableWrapper,
} from '@components/common'
import {
  HealthCredit,
  PaymentGatewayLoader,
  SlotForm,
  UhidAddressForm,
} from '@components/entities'
import { getHcCreditPoints } from '@utils/api/dashboard'
import { ROUTES } from '@utils/api/routes'
import {
  extractCouponValidateData,
  extractPaymentBookHomeCollectionData,
} from '@utils/common'
import { getStyles } from '@utils/styles'
import { ForceAny, NullableProperties } from '@utils/typescript'
import { useQuery } from 'src/hooks/use-query'
import {
  CustomerData,
  QueryAllAddress,
  QueryBookHomeCollectionData,
  QueryCheckServiceability,
  QueryCouponDiscountItemWithMappingData,
  QueryCouponValidateData,
  QueryCouponValidateResponseData,
  QuerySingleAddress,
} from 'src/models/query.models'
import { useSnackbar } from 'src/providers/alerts-state-management'
import { useCheckoutInfo } from 'src/providers/checkout-state-management'
import { useDrawerState } from 'src/providers/drawer-state-management'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles from './styles'

export type CartProps = {
  heading: string
}

export function Cart() {
  const router = useRouter()
  const styles = getStyles(defaultStyles)
  const [selectedAddress, setSelectedAddress] = useState<QuerySingleAddress>()
  const [addresses, setAddresses] = useState<QuerySingleAddress[]>()
  const [loadPaymentGateway, setLoadPaymentGateway] = useState('')
  const [isNonServiceable, setIsNonServiceable] = useState(false)
  const [slotFormState, setSlotFormState] = useState(false)
  const [couponValue, setCouponValue] = useState('')
  const [formState, setFormState] = useState(false)
  const [creditsData, setCreditsData] =
    useState<NullableProperties<CustomerData>>()
  const [couponDetails, setCouponDetails] = useState<{
    totalDiscount: number
    itemMapped: QueryCouponDiscountItemWithMappingData
    couponUniqueID?: string
  }>({
    totalDiscount: 0,
    itemMapped: [],
  })
  const [codStatus, setCodStatus] = useState(true)

  const {
    setCheckoutInfo,
    checkoutInfo,
    healthCreditsRedeemed,
    totalAmount,
    deliveryCharge,
    setHealthCreditsRedeemed,
  } = useCheckoutInfo()
  const { showSnackbar } = useSnackbar()
  const { userDetails } = useUserState()
  const { setDrawer } = useDrawerState()

  // API to get All Addresses
  const { queryCall, isLoading: isAddressLoading } = useQuery({
    method: 'get',
    url: ROUTES.Address,
    options: {
      onSuccess: (data: QueryAllAddress) => {
        setAddresses(data.rows)
      },
    },
  })

  // API to check that the Address is serviceable or not
  const { mutateAsync } = useMutationQuery({
    url: ROUTES.CheckServiceability,
    service: 'DATA_CLIENT',
    method: 'post',
    options: {
      onSuccess: (data: QueryCheckServiceability) => {
        if (data.data.status === 'fail') {
          setIsNonServiceable(true)
          setSelectedAddress(undefined)
          return
        }
        showSnackbar('Great news! This area is serviceable!', 'success')
        setIsNonServiceable(false)
        router.refresh()
      },
    },
  })

  // API Book Home Collection for both COD and Online
  const { mutateAsync: bookHomeCollection, isLoading } = useMutationQuery({
    url: ROUTES.PaymentHomeCollection,
    service: 'DATA_CLIENT',
    method: 'post',
    options: {
      onSuccess: ({ data }: QueryBookHomeCollectionData) => {
        if (data.payment_type === 'COD') router.push('/order-booking/success')
        else if (data.payment_status === 'success') {
          router.push('/payment/success')
          setHealthCreditsRedeemed(0)
        } else {
          setLoadPaymentGateway(data.form)
        }
      },
      onError: (error: AxiosError<ForceAny>) => {
        showSnackbar(error.response?.data.message, 'warning')
      },
    },
  })

  // API to Validate the Coupon code
  const {
    mutateAsync: validateCouponCode,
    isLoading: loadingCouponValidation,
  } = useMutationQuery<
    QueryCouponValidateData,
    QueryCouponValidateResponseData,
    AxiosError<ForceAny>
  >({
    url: ROUTES.ValidateCoupon,
    service: 'DATA_CLIENT',
    method: 'post',
    options: {
      onSuccess: (data) => {
        if (!data.status) {
          showSnackbar('Coupon not found', 'warning')
        }

        const totalDiscount = data.data.tests.reduce(
          (acc, item) => acc + item.discamount,
          0
        )

        if (totalDiscount === 0) {
          showSnackbar(
            'This coupon does not apply to the selected tests.',
            'warning'
          )
        } else {
          setCouponDetails({
            itemMapped: data.data.tests,
            totalDiscount,
            couponUniqueID: data.uniqueid,
          })
        }
      },
      onError: (error) => {
        showSnackbar(error.response?.data.message, 'warning')
      },
    },
  })

  // Method to Handle the Address Selection
  function handleAddressSelection(data: QuerySingleAddress) {
    setSelectedAddress((prevSelectedPatients) => {
      if (prevSelectedPatients?.address_id === data.address_id) return undefined
      return data
    })
    void mutateAsync({
      lat: data.lat,
      lng: data.lng,
    })
  }

  // Method to Handle the Home Collection Booking
  const handleSchedule = async () => {
    if (
      !(
        checkoutInfo?.patients?.length &&
        checkoutInfo.patients[0].cartItems.length
      )
    ) {
      showSnackbar('Cart Is Empty', 'warning')
    }
    if (!(checkoutInfo?.patients && checkoutInfo.patients.length)) {
      setDrawer(4)
      return
    }
    if (!checkoutInfo.address) {
      showSnackbar('Please Select Home Visit Address', 'warning')
      return
    }
    if (!checkoutInfo.slot) {
      setSlotFormState(true)
      return
    }

    const initiatePaymentData = {
      couponData: {
        couponUniqueId: couponDetails.couponUniqueID,
        couponCode: couponValue,
      },
      checkoutInfo,
      hcRedeem: healthCreditsRedeemed,
      homeCollectionCharges: deliveryCharge,
      isCod: codStatus,
    }

    const formData = extractPaymentBookHomeCollectionData(initiatePaymentData)
    await bookHomeCollection(formData)
  }

  // Method to Handle delete Event from the Cart Temporary
  const deleteCartItem = (cartItemId: number, patientId: number) => {
    setCouponDetails({
      totalDiscount: 0,
      itemMapped: [],
    })
    if (!checkoutInfo || !Array.isArray(checkoutInfo.patients)) {
      return
    }
    const updatedPatients = checkoutInfo.patients.map((patient) => {
      if (patient.profileId === patientId) {
        return {
          ...patient,
          cartItems: patient.cartItems.filter((item) => item.id !== cartItemId),
        }
      }
      return patient
    })

    const patientsWithItems = updatedPatients.filter((patient) => {
      return patient.cartItems.length !== 0
    })
    setCheckoutInfo({
      ...checkoutInfo,
      patients: patientsWithItems,
    })
  }

  // Method to Handle fetching of Address
  const getAddress = () => {
    void queryCall({ mobileNumber: userDetails?.phoneNumber })
  }

  // Method to Handle Coupon Code Apply Click
  const handleCouponApply = async () => {
    await validateCouponCode(
      extractCouponValidateData({
        checkoutInfo: checkoutInfo!,
        coupon: couponValue,
        mobileNumber: userDetails?.phoneNumber || '',
      })
    )
  }

  const handleRemoveCoupon = () => {
    setCouponDetails({
      totalDiscount: 0,
      itemMapped: [],
    })
    setCouponValue('')
  }

  // Handling the Change in the User to mount the Addresses & HCs
  useEffect(() => {
    if (userDetails?.phoneNumber) {
      getAddress()
      getHcCreditPoints(userDetails.phoneNumber)
        .then((data) => {
          setCreditsData(data.data.CustomerData)
        })
        .catch(() => {
          showSnackbar('Unable to Get HC Points', 'warning')
        })
    }
  }, [userDetails])

  // Handling the Change in the selectedAddress to add it in the Checkout info
  useEffect(() => {
    setCheckoutInfo({ ...checkoutInfo, address: selectedAddress })
  }, [selectedAddress])

  // Handling Patient Selection when no Patient found
  if (!checkoutInfo?.patients) {
    setDrawer(4)
  }

  return (
    <Box {...styles('mainWrapper')} key={totalAmount}>
      {formState && (
        <UhidAddressForm
          setSelfState={setFormState}
          refetch={() => {
            getAddress()
          }}
        />
      )}
      {slotFormState && <SlotForm setSelfState={setSlotFormState} />}
      <Box {...styles('wrapper')}>
        <Box {...styles('ItemContainer')}>
          <Box {...styles('navigationWrapper')}>
            <Box {...styles('navigation')} onClick={() => router.back()}>
              <ArrowBackRoundedIcon {...styles('backIcon')} />
              Back
            </Box>

            <Box {...styles('navigationWrapper')}>
              <Link href="/test-booking" style={{ textDecoration: 'none' }}>
                <Box {...styles('addTestsWrapper')}>
                  <AddCircleOutlineRoundedIcon {...styles('icon')} />
                  <Typography {...styles(['itemHeading', 'addMoreLink'])}>
                    Add Tests
                  </Typography>
                </Box>
              </Link>
              <Box {...styles('addTestsWrapper')} onClick={() => setDrawer(4)}>
                <AddCircleOutlineRoundedIcon {...styles('icon')} />
                <Typography {...styles(['itemHeading', 'addMoreLink'])}>
                  Add Patient
                </Typography>
              </Box>
            </Box>
          </Box>
          {checkoutInfo?.patients?.length === 0 && (
            <Typography
              variant="body1"
              {...styles('itemDescription', { padding: '24px 0px' })}
            >
              No Patient Selected
            </Typography>
          )}
          {checkoutInfo?.patients?.map((patient) => {
            if (patient.cartItems.length === 0) return null
            return (
              <Box key={patient.email}>
                <Box {...styles('linksWrapper')}>
                  <Typography {...styles('itemHeading')}>
                    {`${patient.firstname} ${patient.lastname}${patient.relationship ? `, ${patient.relationship}` : ''}`}
                  </Typography>
                </Box>
                <Box {...styles('itemWrapper')}>
                  {patient.cartItems.map((item, index) => {
                    return (
                      <Box
                        {...styles('itemCard', {
                          borderTop: index === 0 ? 0 : '1px solid',
                        })}
                        key={item.id}
                      >
                        <Box {...styles('itemInfoWrapper')}>
                          <Typography variant="h6" {...styles('itemHeading')}>
                            {item.heading || item.itemname}
                          </Typography>
                          <Box {...styles('itemDescWrapper')}>
                            {item.report_delivery && (
                              <Image
                                src="/icons/reportIcon.svg"
                                alt="HbA1c"
                                customStyles={{
                                  wrapper: styles('reportIcon').sx,
                                }}
                                fill
                              />
                            )}
                            <Typography
                              variant="body1"
                              {...styles('itemDescription')}
                            >
                              {item.delivery || item.report_delivery}
                            </Typography>
                          </Box>
                        </Box>
                        <Box {...styles('sideWrapper')}>
                          <Box {...styles('pricesWrapper')}>
                            {/* {!!item.discounted && (
                              <Typography
                                {...styles(['itemDescription', 'fullPrice'])}
                              >
                                ₹{item.price || item.rate}
                              </Typography>
                            )} */}
                            <Typography {...styles('itemHeading')}>
                              ₹{item.price || item.rate}
                            </Typography>
                          </Box>
                          <Button
                            variant="outlined"
                            label="Remove"
                            customStyles={{ button: styles('removeButton').sx }}
                            onClick={() =>
                              deleteCartItem(item.id, Number(patient.profileId))
                            }
                          />
                        </Box>
                      </Box>
                    )
                  })}
                </Box>
              </Box>
            )
          })}
          <Image
            src="/images/cartAdvertisement.png"
            alt="image"
            fill
            customStyles={{ wrapper: styles('image').sx }}
          />
        </Box>
        <Box {...styles('totalChargesWrapper')}>
          <DisableWrapper isDisable={!checkoutInfo?.patients?.length}>
            <Box {...styles('addressWrapper')}>
              <Box {...styles('linksWrapper')}>
                <Typography {...styles(['itemHeading', 'addMoreLink'])}>
                  Home Visit Address
                </Typography>
                <Typography
                  {...styles(['itemHeading', 'addMoreLink'])}
                  onClick={() => setFormState(true)}
                >
                  <AddCircleOutlineRoundedIcon {...styles('icon')} />
                  Add New Address
                </Typography>
              </Box>
              <Box {...styles('addressSection')}>
                {isAddressLoading ? (
                  <CircularProgress sx={{ margin: '20px auto' }} size={30} />
                ) : (
                  addresses?.map((address) => {
                    return (
                      <Box
                        {...styles('checkboxContainer')}
                        key={address.address_id}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CheckBox
                            label=""
                            customStyles={{
                              label: styles('checkboxLabel').sx,
                            }}
                            checked={
                              selectedAddress?.address_id === address.address_id
                            }
                            onClick={() => handleAddressSelection(address)}
                          />
                          <Typography {...styles('checkboxLabel')}>
                            {`${address.address},  ${address.cityName}, ${address.pincode}   `}
                          </Typography>
                        </Box>
                      </Box>
                    )
                  })
                )}
              </Box>
            </Box>
          </DisableWrapper>
          <DisableWrapper isDisable={!selectedAddress}>
            <Box {...styles('addressWrapper')}>
              <Box {...styles('linksWrapper')}>
                <Typography
                  {...styles(['itemHeading', 'addMoreLink'])}
                  onClick={() => setSlotFormState(true)}
                >
                  <AddCircleOutlineRoundedIcon {...styles('icon')} />
                  Add Appointment Slot
                </Typography>
              </Box>
              <Box {...styles('addressSection')}>
                <Typography
                  variant="body1"
                  {...styles('itemDescription', { padding: '24px 0px' })}
                >
                  {checkoutInfo?.slot ? (
                    <Box {...styles('selectSlotWrapper')}>
                      <CheckBox
                        label=""
                        customStyles={{
                          label: styles('checkboxLabel').sx,
                        }}
                        checked
                      />
                      <Typography {...styles('checkboxLabel')}>
                        {checkoutInfo.slot.slotDate},{' '}
                        {checkoutInfo.slot.slotTime}
                      </Typography>
                    </Box>
                  ) : (
                    'No Appointment Slot Selected'
                  )}
                </Typography>
              </Box>
            </Box>
          </DisableWrapper>
          {creditsData && (
            <HealthCredit creditsData={creditsData} key={totalAmount} />
          )}
          <Box {...styles('couponWrapper')}>
            <TextField
              placeholder="Enter Coupon"
              {...styles('couponInput')}
              value={couponValue}
              disabled={!!couponDetails.totalDiscount}
              onChange={(e) => setCouponValue(e.target.value)}
            />
            {!couponDetails.totalDiscount ? (
              <Box onClick={handleCouponApply} {...styles('couponApplyButton')}>
                {loadingCouponValidation ? (
                  <CircularProgress size="20px" />
                ) : (
                  'Apply'
                )}
              </Box>
            ) : (
              <Box {...styles('afterCouponSuccessWrapper')}>
                <TaskAltIcon {...styles('couponCheckIcon')} />
                <DeleteOutlineOutlinedIcon
                  {...styles('couponDeleteIcon')}
                  onClick={handleRemoveCoupon}
                />
              </Box>
            )}
          </Box>
          <Box {...styles('summaryWrapper')}>
            <Box {...styles('totalCharges')}>Total Charges</Box>
            <Divider />
            <Box {...styles('categoryPrice')}>
              <Typography {...styles('itemDescription')}>
                M.R.P Total
              </Typography>
              <Typography {...styles(['itemDescription', 'price'])}>
                ₹{totalAmount}.00
              </Typography>
            </Box>
            {/* <Box {...styles('categoryPrice')}>
              <Typography {...styles('itemDescription')}>
              Price Discount
              </Typography>
              <Typography
              {...styles(['itemDescription', 'discountPrice', 'price'])}
              >
              - ₹00.00
              </Typography>
              </Box> */}
            <Box {...styles('categoryPrice')}>
              <Typography {...styles('itemDescription')}>
                Home Collection Charges
              </Typography>
              <Typography {...styles(['itemDescription', 'price'])}>
                ₹{deliveryCharge}.00
              </Typography>
            </Box>
            {!!couponDetails.totalDiscount && (
              <Box {...styles('categoryPrice')}>
                <Typography {...styles('itemDescription')}>
                  Coupon Discount
                </Typography>
                <Typography
                  {...styles(['itemDescription', 'discountPrice', 'price'])}
                >
                  - ₹{couponDetails.totalDiscount}
                </Typography>
              </Box>
            )}
            {!!healthCreditsRedeemed && (
              <Box {...styles('categoryPrice')} key={healthCreditsRedeemed}>
                <Typography {...styles('itemDescription')}>
                  Health Credit Redeemed
                </Typography>
                <Typography {...styles(['itemDescription', 'discountPrice'])}>
                  -₹{healthCreditsRedeemed}.00
                </Typography>
              </Box>
            )}
            <Box {...styles('totalWrapper')} key={totalAmount}>
              <Typography {...styles('itemHeading')}>To Pay</Typography>
              <Typography {...styles(['itemHeading', 'price'])}>
                ₹
                {Number(totalAmount) +
                  Number(deliveryCharge) -
                  Number(healthCreditsRedeemed) -
                  couponDetails.totalDiscount}
                .00
              </Typography>
            </Box>
          </Box>
          <Box {...styles('valuesWrapper')}>
            <Box {...styles('checkbox')}>
              <CheckBox
                label="Pay On Delivery"
                checked={codStatus}
                customStyles={{
                  wrapper: styles('checkBoxWrapper').sx,
                  label: styles('label').sx,
                }}
                onChange={() => setCodStatus((prev) => !prev)}
              />
              <Typography {...styles('values')}>
                For flexible, secure transactions.
              </Typography>
            </Box>
            <Box {...styles('checkbox')}>
              <CheckBox
                label="Pay Online"
                checked={!codStatus}
                customStyles={{
                  wrapper: styles('checkBoxWrapper').sx,
                  label: styles('label').sx,
                }}
                onChange={() => setCodStatus((prev) => !prev)}
              />
              <Typography {...styles('values')}>
                For seamless digital transactions.
              </Typography>
            </Box>
          </Box>

          <Button
            label="Schedule"
            variant="contained"
            customStyles={{ button: styles('button').sx }}
            onClick={handleSchedule}
            loading={isLoading}
          />
        </Box>
      </Box>
      {isNonServiceable && (
        <AlertModal
          heading="Uh oh.. :( "
          description="Sorry, we are not serviceable at your pincode. Please connect with our customer care team to assist you better."
          closeButton={{ label: 'Okay, Got it' }}
          infoButton={{
            label: 'Call us',
            link: 'tel:040-4444-2424',
            startIcon: <LocalPhoneRoundedIcon />,
          }}
          image={{
            src: '/images/locationNotFound.png',
            alt: 'Under Construction',
          }}
          onClose={setIsNonServiceable}
        />
      )}
      {loadPaymentGateway && (
        <PaymentGatewayLoader formData={loadPaymentGateway} />
      )}
    </Box>
  )
}
