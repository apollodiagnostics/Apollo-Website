/* eslint-disable @typescript-eslint/naming-convention */
import { AddUhidProfileFormData, SingleProfileData } from '@models'
import { NearestCentreCardData } from '@components/common/Cards/NearestCentreCard'
import { CheckoutFormData } from '@components/entities/Forms/CheckoutForm'
import {
  QueryCenterData,
  QueryCouponValidateData,
  QuerySingleHomeCollectionBookingData,
  QueryUhidProfileData,
} from 'src/models/query.models'
import { CheckoutData } from 'src/providers/checkout-state-management'

export const mapProfileToCheckout = (
  profile: SingleProfileData
): CheckoutFormData => {
  return {
    firstName: profile.firstname ?? '',
    lastName: profile.lastname ?? '',
    dob: profile.dob ?? '',
    gender: profile.gender ?? '',
    email: profile.email ?? '',
    relation: profile.relationship ?? '',
    address: profile.address ?? '',
    mobilenumber: profile.mobilenumber ?? '',
    age: profile.age ?? '',
  }
}

export function convertCentreDataToDetailsFormat(
  data: QueryCenterData
): NearestCentreCardData {
  const { centre_name, address, mobile_no } = data

  return {
    heading: centre_name,
    address,
    timing: '8:00 AM to 5:00 PM',
    phone: `+91 ${mobile_no}`,
    viewDetailsButtonProps: {
      label: 'details',
      link: `/find-nearest-centre/centre-details/${data.slug}`,
    },
    locateUsButtonProps: {
      label: 'Locate us',
      link: data.iframe_url,
    },
    bookAppointmentButtonProps: {
      label: 'Book a Walk in Appointment',
      link: '/book-walk-in-slots',
    },
  }
}

export function convertQueryUhidProfileToUhidProfileData(
  data: AddUhidProfileFormData
): QueryUhidProfileData {
  return {
    firstname: data.firstName,
    lastname: data.lastName,
    dob: data.dob,
    address: data.address || '',
    email: data.email,
    gender: data.gender,
    relationship: data.relation,
    mobilenumber: data.mobilenumber,
    age: data.age,
  }
}

export function convertUhidProfileDataToQueryUhidProfile(
  data: QueryUhidProfileData
): AddUhidProfileFormData {
  return {
    firstName: data.firstname,
    lastName: data.lastname,
    dob: data.dob,
    gender: data.gender,
    email: data.email,
    relation: data.relationship,
    address: data.address,
    mobilenumber: data.mobilenumber,
    age: data.age,
  }
}

// TODO: Remove Hard code from here
export function extractBookHomeCollectionFormData(checkoutInfo: CheckoutData) {
  const formData = new FormData()
  const data = {
    HomeCollectionData: checkoutInfo.patients?.map((patient) => ({
      Patient_ID: String(patient.profileId),
      Title: 'Mr.',
      PName: `${patient.firstname} ${patient.lastname}`,
      Gender: patient.gender ?? 'M',
      DOB: patient.dob ?? '',
      Mobile: `+91${patient.mobilenumber}`,
      Alternatemobileno: patient.mobilenumber ?? '',
      Email: patient.email ?? '',
      Pincode: Number(checkoutInfo.address?.pincode),
      House_No: checkoutInfo.address?.address ?? '',
      Landmark: checkoutInfo.address?.landmark ?? '',
      Appdatetime: `${checkoutInfo.slot?.slotDate} ${checkoutInfo.slot?.slotTime}`,
      Client: process.env.NEXT_PUBLIC_CLIENT,
      Paymentmode: 'COD',
      Latitude: '28.5355',
      Longitude: '77.3910',
      ReferedDoctor: 'Self',
      DoctorID: 0,
      TestDetail: patient.cartItems.map((item) => ({
        DiscAmt: 0,
        itemid: item.itemid,
        ItemName: item.itemname,
        Itemtype: item.itemtype,
        NetAmt: item.rate,
        PaidAmt: item.rate,
        Rate: item.rate,
        SubCategoryID: item.SubCategoryID,
        TestCode: item.itemcode,
        Coupon_DiscAmt_247: '0.00',
        GroupPlan_DiscAmt_247: '0.00',
        GroupPlan_247: '',
      })),
      IsPaid: 0,
      CouponCode_247: '',
      Iscorporate: 1,
      IsCircle: '1',
      LocalityID_Serviceable: Number(checkoutInfo.address?.address_id),
      SubOrderID: 'RD10000028644Zyr',
      PrebookingID_Digital: 'CU10000024651Pt1',
    })) as QuerySingleHomeCollectionBookingData[],
    HomeCollectionChargeData: [
      {
        Amount: 150,
        DiscAmt: 0,
        NetAmount: 150,
        ItemID: 2048,
        ItemName: 'COLLECTION_CHARGES',
        Coupon_DiscAmt_247: 0,
        GroupPlan_DiscAmt_247: 0,
        GroupPlan_247: '',
      },
    ],
  }
  formData.append('HomeCollectionData', JSON.stringify(data.HomeCollectionData))
  formData.append(
    'HomeCollectionChargeData',
    JSON.stringify(data.HomeCollectionChargeData)
  )
  return formData
}

export function extractPaymentBookHomeCollectionData({
  checkoutInfo,
  hcRedeem,
  homeCollectionCharges,
  isCod,
  couponData,
}: {
  checkoutInfo: CheckoutData
  hcRedeem?: number
  homeCollectionCharges?: number
  isCod?: boolean
  couponData: {
    couponCode?: string
    couponUniqueId?: string
  }
}) {
  return {
    hcRedeem,
    payment_type: isCod ? 'COD' : 'ONLINE',
    // payment_type: 'COD',
    homeCollectionCharges,
    addressId: checkoutInfo.address?.address_id,
    appointmentTime: `${checkoutInfo.slot?.slotDate} ${checkoutInfo.slot?.slotTime}`,
    uniqueId: couponData.couponUniqueId,
    couponCode: couponData.couponCode,
    patientInfo: checkoutInfo.patients?.map((patient) => {
      return {
        patientId: patient.profileId,
        testDetails: patient.cartItems.map((item) => ({
          itemId: item.itemid,
          cityId: item.city_id,
        })),
      }
    }),
  }
}
export function extractCouponValidateData({
  checkoutInfo,
  coupon,
  mobileNumber,
}: {
  checkoutInfo: CheckoutData
  coupon: string
  mobileNumber: string
}): QueryCouponValidateData {
  return {
    Coupons: [
      {
        CouponCode: coupon,
      },
    ],
    MobileNo: mobileNumber,
    patientInfo:
      checkoutInfo.patients?.map((patient) => {
        return {
          patientId: patient.profileId || 0,
          testDetails: patient.cartItems.map((item) => ({
            itemId: item.itemid,
            cityId: item.city_id,
          })),
        }
      }) || [],
  }
}

export function convertDateTimeFormat(input: string) {
  const [datePart, timePart, period] = input.split(' ')
  const [year, month, day] = datePart.split('-')
  const [hour, minute] = timePart.split(':')

  let newHour = parseInt(hour, 10)
  if (period === 'PM' && newHour !== 12) {
    newHour += 12
  } else if (period === 'AM' && newHour === 12) {
    newHour = 0
  }

  // Convert month from numeric to short name
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const newMonth = monthNames[parseInt(month, 10) - 1]

  const formattedDate = `${day}-${newMonth}-${year}`

  const formattedTime = `${newHour.toString().padStart(2, '0')}:${minute}`

  return `${formattedDate} ${formattedTime}`
}

export function convertTo12HourFormat(timeSta: string): string {
  const [hour, minute] = timeSta.split(':')

  let hourNum = parseInt(hour, 10)
  hourNum = hourNum % 12 || 12

  const time12 = `${hourNum.toString().padStart(2, '0')}:${minute}`
  return time12
}

export function extractSlugDataFromString(citySlug: string) {
  const parts = citySlug.split('-')
  const id = parts[parts.length - 1]
  const name = parts.slice(0, -1).join(' ').replace(/-/g, ' ')
  return { id, name }
}

export function createSlugStringFromSlugData(
  name: string,
  id: string | number
): string {
  // Convert city name to lowercase and replace spaces with hyphens
  const formattedName = name.toLowerCase().trim().replace(/\s+/g, '-')
  return `${formattedName}-${id}`
}

export function capitalizeWords(input: string) {
  return input
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
