import { InputData } from '@models'

export type HeaderSection = {
  [key: string]: LinkData[]
}

export type MainHeaderData = {
  headerWithMenu: HeaderSection
  headerWithoutMenu: LinkData[]
  downloadReport: LinkData
  blogs: LinkData
  profiles?: LinkData[]
}

export type ContactUs = {
  call: string
  whatsapp: string
}
export type TopHeaderData = {
  logo: string
  locations: InputData[]
  contact: ContactUs
  phoneNo: string
}

export type LinkData = {
  label: string
  link: string
}
export type HeaderData = {
  mainHeaderData: MainHeaderData
  topHeaderData: TopHeaderData
}
