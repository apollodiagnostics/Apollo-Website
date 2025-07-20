import React from 'react'
import Link from 'next/link'
import NearMeIcon from '@mui/icons-material/NearMe'
import { Box, Typography } from '@mui/material'
import { Button, ButtonProps, LocationDialog } from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type NearestCentreCardData = {
  heading: string
  address: string
  timing: string
  phone: string
  viewDetailsButtonProps: ButtonProps
  bookAppointmentButtonProps: ButtonProps
  locateUsButtonProps: ButtonProps
}

type NearestCentreCardProps = NearestCentreCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function NearestCentreCard({
  heading,
  address,
  timing,
  phone,
  viewDetailsButtonProps,
  locateUsButtonProps,
  bookAppointmentButtonProps,
  customStyles,
}: NearestCentreCardProps) {
  const styles = getStyles(defaultStyles, customStyles)
  const [locationDialogState, setLocationDialogState] = React.useState(false)

  return (
    <>
      <Link
        href={viewDetailsButtonProps.link!}
        style={{ textDecoration: 'none' }}
      >
        <Box {...styles('wrapper')}>
          <Box {...styles('mainWrapper')}>
            <Box {...styles('headingContainer')}>
              <Typography {...styles('heading')}>{heading}</Typography>

              <Typography {...styles('viewButton')}>View</Typography>
            </Box>
            <Box>
              <Typography {...styles('contentHeading')}>Address:</Typography>
              <Typography {...styles('content')}>{address}</Typography>
            </Box>
            <Box>
              <Typography {...styles('contentHeading')}>Timing:</Typography>
              <Typography {...styles('content')}>{timing}</Typography>
            </Box>
            <Box>
              <Typography {...styles('contentHeading')}>Phone:</Typography>
              <Link href={`tel:${phone}`} style={{ textDecoration: 'none' }}>
                <Typography {...styles('content')}>{phone}</Typography>
              </Link>
            </Box>
          </Box>
          <Box {...styles('buttonWrapper')}>
            <Button
              label={locateUsButtonProps.label}
              startIcon={<NearMeIcon />}
              onClick={(e) => {
                e.preventDefault()
                setLocationDialogState(true)
              }}
              variant="outlined"
              customStyles={{ button: styles('viewDetailsButton').sx }}
            />
            <Button
              label={bookAppointmentButtonProps.label}
              // onClick={() => {
              //   setLocationDialogState(true)
              // }}
              variant="contained"
              customStyles={{ button: styles('getDirectionsButton').sx }}
              link={bookAppointmentButtonProps.link}
            />
          </Box>
        </Box>
      </Link>

      {locationDialogState && (
        <LocationDialog
          setSelfState={setLocationDialogState}
          heading="Location"
          link={locateUsButtonProps.link || ''}
        />
      )}
    </>
  )
}
