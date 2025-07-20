import { ImageProps } from 'next/image'
import { ForceAny, NullableProperties } from '@utils/typescript'

export type Pages = 'home' | 'aboutUs'

export type ImageType = {
  src: string
  alt: string
  redirectionUrl?: string
}
export type DocumentData = ForceAny

export type LinkData = {
  image?: ImageProps
  label: string
  link: string
  id?: number
}
export const defaultCity = {
  name: 'hyderabad',
  id: 9,
  lat: '17.4356845',
  lng: '78.4445976',
}

export const citySlugPlaceholder = '{{citySlug}}'
export type LocationCoordinatesType = { lat: string; lng: string }

export enum BANNERS_SLUGS {
  PACKAGE_DETAILS_PAGE_AD_BANNER = 'package-details-page',
  HOME_PAGE_CAROUSEL_BANNER = 'Home page carousel banner',
  HOME_PAGE_AD_BANNER = 'Home page Advertisement Banner',
}

export type InputData = {
  label: string
  value: string | number
}

export type HeaderSection = {
  [key: string]: LinkData[]
}

export type MainHeaderData = {
  items: HeaderSection
  downloadReport: LinkData
}

export type ContactUs = {
  call: string
  whatsapp: string
}
export type TopHeaderData = {
  logo: string
  locations: string[]
  contact: ContactUs
  phoneNo: string
}

export type SearchParamsData = Partial<{
  condition: string
  search: string
  category: string
  limit: string
  offset: string
  cityId: string
  conditionName: string
  citySlug: string
}>

export type EnquireFormData = {
  name: string
  mobile_number: string
  state: string
  city: string
}

export type SingleProfileData = NullableProperties<{
  profileId: number
  userId: number
  title: string
  access_token: string
  uhid: string
  firstname: string
  lastname: string
  email: string
  dob: string
  age: string
  gender: string
  mobilenumber: string
  relationship: string
  address: string
  defaultUser: string
  alternatemobile: string
}>

export type FindNearestCentreSearchParams = SearchParamsData & {
  locality?: string
  city?: string
  state?: string
  search?: string
}

export type AddUhidProfileFormData = {
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

export type UserDetails = {
  phoneNumber?: string
  cityId?: string
  profileId?: string
  accessToken?: string
  dynamicRosterToken?: string
  location?: { latitude: number; longitude: number }
  newUser?: boolean
  cityName?: string
}

export type PostPrescriptionData = {
  file: File
  profileId?: string
}

export type CartItemsData = Record<string, ForceAny>
declare global {
  interface Window {
    autocomplete: google.maps.places.Autocomplete
  }
}
