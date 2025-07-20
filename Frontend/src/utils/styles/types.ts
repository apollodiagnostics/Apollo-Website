import { PaletteOptions } from '@mui/material'
import { ForceAny } from '@utils/typescript'

export type CustomPaletteOptions = {
  custom: {
    main: string
    thumb: string
    track: string
    grey: string
    bluishBlack: string
    lightPink: string
    lightBlack: string
    dullBlack: string
    lightGrey: string
    silver: string
    green: string
    darkWhite: string
    darkSilver: string
    darkGrey: string
    skyBlue: string
    lightSilver: string
    lightGreen: string
    lightWhite: string
    greyish: {
      [key: string]: string
    }
    darkPink: string
    dullPink: string
    lightYellow: string
    slightGrey: string
    lightMaroon: string
    lightGreyish: string
    lightestYellow: string
  }
}

export type StyleOverrideProps<TOwnerState extends ForceAny = ForceAny> = {
  theme: {
    palette: PaletteOptions
    // Add any other theme properties as per requirement
  }
  ownerState?: TOwnerState
}
