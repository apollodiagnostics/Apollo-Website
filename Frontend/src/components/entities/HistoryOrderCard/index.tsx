import React from 'react'
import { Box, Typography } from '@mui/material'
import { LocationCoordinatesType } from '@models'
import { Button } from '@components/common/Button'
import { RescheduleForm } from '@components/entities/Forms/RescheduleForm'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'
import { CancelBookingForm } from '../Forms/CancelBookingForm'

export type HistoryOrderCardData = {
  id: string
  date?: string
  status?: string
  bookedFor?: string
  slot?: string
  time?: string
  allTests?: string[]
  paymentMode: string
  totalRate?: string
  preBookingId: string
  preBookingIdDigital: string
  couponUsed?: string
  location: LocationCoordinatesType
}
export type HistoryOrderCardProps = HistoryOrderCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}
export function HistoryOrderCard({
  customStyles,
  preBookingId,
  allTests,
  bookedFor,
  date,
  paymentMode,
  slot,
  status,
  totalRate,
  preBookingIdDigital,
  couponUsed,
  location,
}: HistoryOrderCardProps) {
  const styles = getStyles(defaultStyles, customStyles)
  const [showForm, setShowForm] = React.useState(false)
  const [showCancelDialog, setShowCancelDialog] = React.useState(false)

  return (
    <>
      <Box {...styles('wrapper')}>
        <Box {...styles('topContainer')}>
          <Box {...styles('topLeftContainer')}>
            <Typography variant="h3" {...styles('orderHeading')}>
              Order ID: #{preBookingId}
            </Typography>
            <Typography variant="body2" {...styles('subHeading')}>
              Booked on: {date}
            </Typography>
          </Box>
          <Box
            {...styles(
              status === 'Order Confirmed' ? 'orderStatus' : 'orderCancel'
            )}
          >
            {status}
          </Box>
        </Box>
        <Box {...styles('midContainer')}>
          <Box {...styles('infoContainer')}>
            <Typography variant="body2" {...styles('subHeading')}>
              Booked for:
            </Typography>
            <Typography variant="body1" {...styles('userName')}>
              {bookedFor}
            </Typography>
            {couponUsed && (
              <Typography variant="body2" {...styles('subHeading')}>
                Coupon Used: {couponUsed}
              </Typography>
            )}
          </Box>
          <Box {...styles('infoContainer')}>
            <Typography variant="body2" {...styles('typeHeading')}>
              Test Slot:
            </Typography>
            <Typography variant="body1" {...styles('infoText')}>
              {slot?.split('T')[0]}
            </Typography>
            <Typography variant="body1" {...styles('infoText')}>
              {slot?.split('T')[1].substring(0, 5)}
            </Typography>
          </Box>
          <Box {...styles('infoContainer')}>
            <Typography variant="body2" {...styles('typeHeading')}>
              Payment:
            </Typography>
            <Typography variant="body1" {...styles('infoText')}>
              {paymentMode}
            </Typography>
            {totalRate && (
              <Typography variant="body1" {...styles('infoText')}>
                ₹{totalRate}
              </Typography>
            )}
          </Box>
          <Box {...styles('infoContainer')}>
            <Typography variant="body2" {...styles('typeHeading')}>
              Test Booked:
            </Typography>
            {allTests?.map((test) => (
              <Box component="li" {...styles('infoText')}>
                {test}
              </Box>
            ))}
          </Box>
        </Box>
        {status === 'Order Confirmed' && (
          <Box {...styles('bottomContainer')}>
            <Box {...styles('buttonWrapper')}>
              <Button label="Reschedule" onClick={() => setShowForm(true)} />
              <Button
                label="Cancel"
                disabled={paymentMode === 'ONLINE'}
                onClick={() => setShowCancelDialog(true)}
              />
            </Box>
          </Box>
        )}
      </Box>
      {showForm && (
        <RescheduleForm
          setSelfState={setShowForm}
          preBookingId={preBookingId}
          preBookingIdDigital={preBookingIdDigital}
          location={location}
        />
      )}
      {showCancelDialog && preBookingId && (
        <CancelBookingForm
          setSelfState={setShowCancelDialog}
          preBookingId={preBookingId}
          preBookingIdDigital={preBookingIdDigital}
        />
      )}
    </>
  )
}
