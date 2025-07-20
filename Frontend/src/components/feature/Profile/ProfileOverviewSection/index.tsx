'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded'
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded'
import { Box, Dialog, Typography } from '@mui/material'
import { SingleProfileData } from '@models'
import { Button, ButtonProps, UploadPopUp } from '@components/common'
import {
  AddUhidProfileForm,
  PatientDetail,
  UhidAddressForm,
} from '@components/entities'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type ProfileOverviewSectionProps = {
  accountHeading: string
  buttons: ButtonProps[]
  profileInfoHeading: string
  profiles: SingleProfileData[]
}

export function ProfileOverviewSection({
  buttons,
  accountHeading,
  profiles,
  profileInfoHeading,
}: ProfileOverviewSectionProps) {
  const [addPatientProfileState, setAddPatientProfileState] =
    React.useState(false)
  const [addPatientAddressState, setAddPatientAddressState] =
    React.useState(false)
  const styles = getStyles(defaultStyles)
  const router = useRouter()

  const [logoutDialogState, setLogoutDialogState] = useState<boolean>(false)
  const handlePopUpClose = () => {
    setLogoutDialogState(false)
  }

  const popUpCancelButton = (value: boolean) => {
    setLogoutDialogState(value)
  }

  const handleLogout = () => {
    setLogoutDialogState(true)
  }

  return (
    <Box>
      <Box {...styles('wrapper')}>
        <Box {...styles('linkWrapper')}>
          <Box {...styles('headingWrapper')}>
            <Typography {...styles('heading')}>{accountHeading}</Typography>
          </Box>
          <Box {...styles('buttonWrapper')}>
            <Button
              customStyles={{
                button: styles(['button']).sx,
                icon: styles('buttonIcon').sx,
              }}
              icon={<Person2RoundedIcon />}
              {...buttons[0]}
              variant="contained"
            />
            {/* <Button
              customStyles={{
                button: styles('button').sx,
                icon: styles('buttonIcon').sx,
              }}
              icon={<PersonAddRoundedIcon />}
              {...buttons[1]}
              onClick={() => setAddPatientProfileState(true)}
            /> */}
            <Button
              customStyles={{
                button: styles('button').sx,
                icon: styles('buttonIcon').sx,
              }}
              icon={<AddLocationAltIcon />}
              {...buttons[2]}
              onClick={() => setAddPatientAddressState(true)}
            />
            <Button
              customStyles={{
                button: styles('button').sx,
                icon: styles('buttonIcon').sx,
              }}
              icon={<HistoryRoundedIcon />}
              {...buttons[3]}
              onClick={() => router.push('/my-orders')}
            />
            <Button
              customStyles={{
                button: styles('button').sx,
                icon: styles('buttonIcon').sx,
              }}
              icon={<LogoutRoundedIcon />}
              {...buttons[5]}
              onClick={() => handleLogout()}
            />
          </Box>
        </Box>
        <Box {...styles('descriptionWrapper')}>
          <Box {...styles('headingWrapper')}>
            <Typography {...styles('heading')}>{profileInfoHeading}</Typography>
          </Box>
          <Box {...styles('cardsWrapper')}>
            {profiles.map((profile, index) => (
              <PatientDetail
                {...profile}
                key={profile.profileId}
                isDeleteAble={index !== 0}
              />
            ))}
            <Button
              label="Add New Patient"
              variant="contained"
              onClick={() => setAddPatientProfileState(true)}
              icon={<PersonAddRoundedIcon />}
            />
          </Box>
        </Box>
      </Box>
      <Dialog open={logoutDialogState} onClose={handlePopUpClose}>
        <UploadPopUp
          image={{ src: '/images/logoutIcon.png', alt: 'logout icon' }}
          button1={{ label: 'No, Go back' }}
          heading="Are you sure you want to log out?"
          description="You're about to log out. Do you want to continue"
          button2={{ label: 'Yes, log out' }}
          onCancel={popUpCancelButton}
          onConfirm={() => router.push('/logout')}
        />
      </Dialog>
      {addPatientProfileState && (
        <AddUhidProfileForm
          setSelfState={setAddPatientProfileState}
          variant="add"
        />
      )}
      {addPatientAddressState && (
        <UhidAddressForm setSelfState={setAddPatientAddressState} />
      )}
    </Box>
  )
}
