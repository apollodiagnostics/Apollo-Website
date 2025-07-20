'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Dialog, Divider, Grid, Typography } from '@mui/material'
import { SingleProfileData } from '@models'
import { UploadPopUp } from '@components/common'
import { Button } from '@components/common/Button'
import { Image } from '@components/common/Image'
import { ROUTES } from '@utils/api/routes'
import { mapProfileToCheckout } from '@utils/common'
import { CustomStyles, getStyles } from '@utils/styles'
import { useQuery } from 'src/hooks/use-query'
import { useSnackbar } from 'src/providers/alerts-state-management'
import defaultStyles, { StylesClassNames } from './styles'
import { AddUhidProfileForm } from '../Forms/AddUhidProfileForm'

export type PatientDetailData = SingleProfileData

type PatientDetailProps = PatientDetailData & {
  customStyles?: CustomStyles<StylesClassNames>
  isDeleteAble?: boolean
}

export function PatientDetail(profile: PatientDetailProps) {
  const [editPatientDetails, setEditPatientDetails] = React.useState(false)
  const [confirmPopupState, setConfirmPopupState] = React.useState(false)
  const { showSnackbar } = useSnackbar()
  const { refresh } = useRouter()
  const styles = getStyles(defaultStyles)
  const {
    address,
    firstname,
    lastname,
    relationship,
    dob,
    email,
    age,
    gender,
    profileId,
    isDeleteAble = true,
  } = profile

  const { isLoading, queryCall } = useQuery({
    url: `${ROUTES.Profile}/${profileId}`,
    method: 'delete',
    options: {
      onSuccess: () => {
        setConfirmPopupState(false)
        showSnackbar('User Profile Deleted Successfully', 'success')
        refresh()
      },
      onError: () => {
        setConfirmPopupState(false)
        showSnackbar('Unable to Delete User Profile, Try Again Later', 'error')
      },
    },
  })

  const handleDeleteUhidProfile = async () => {
    console.log(profileId, 'Need to Delete')
    await queryCall()
  }
  return (
    <Box {...styles('wrapper')}>
      <Image
        src="/images/profile-circle.png"
        alt="profile img"
        fill
        customStyles={{ wrapper: styles('image').sx }}
      />

      <Box sx={{ width: '100%' }}>
        <Box {...styles('nameInfo')}>
          <Box {...styles('mobileImageWrapper')}>
            <Image
              src="/images/profile-circle.png"
              alt="profile img"
              height={50}
              width={50}
              customStyles={{ wrapper: styles('mobileImage').sx }}
            />
            <Box {...styles('nameWrapper')}>
              <Typography {...styles('name')}>
                {`${firstname} ${lastname}`}
              </Typography>
              <Box {...styles('ageContainer')}>
                <Typography {...styles('age')}>{relationship}</Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={{ height: '15px' }}
                />
                <Typography {...styles('age')}>
                  {gender &&
                    gender.charAt(0).toUpperCase() +
                      gender.slice(1).toLowerCase()}
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={{ height: '15px' }}
                />
                <Typography {...styles('age')}>{age}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider orientation="horizontal" {...styles('divider')} />
        <Box {...styles('infoContainer')}>
          <Grid container spacing={0} sx={{ width: { xs: '100%', md: '60%' } }}>
            <Grid item xs={6} md={6}>
              <Typography {...styles('dataLeft')}>Email Address:</Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography {...styles('dataRight')}>{email}</Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography {...styles('dataLeft')}>Date of Birth</Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography {...styles('dataRight')}>{dob}</Typography>
            </Grid>
            {address && (
              <>
                <Grid item xs={6} md={6}>
                  <Typography {...styles('dataLeft')}>
                    Complete Address:
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Typography {...styles('dataRight')}>{address}</Typography>
                </Grid>
              </>
            )}
          </Grid>

          <Box {...styles('buttonWrapper')}>
            {isDeleteAble && (
              <DeleteIcon
                {...styles('deleteIcon')}
                onClick={() => setConfirmPopupState(true)}
              />
            )}
            <Button
              onClick={() => setEditPatientDetails(true)}
              label="Edit Profile"
              icon={
                <Image
                  src="/images/editIcon.png"
                  alt="edit icon"
                  width={15}
                  height={15}
                  customStyles={{ wrapper: styles('button').sx }}
                />
              }
            />
          </Box>
        </Box>
      </Box>
      {editPatientDetails && (
        <AddUhidProfileForm
          setSelfState={setEditPatientDetails}
          variant="edit"
          userProfileId={profileId?.toString()}
          defaultValues={mapProfileToCheckout(profile)}
        />
      )}
      <Dialog
        open={confirmPopupState}
        onClose={() => setConfirmPopupState(false)}
      >
        <UploadPopUp
          button1={{ label: 'No, Go back' }}
          heading="Are you sure you want to delete this profile?"
          description="You're about to delete this profile. This action cannot be undone. Do you wish to proceed?"
          button2={{ label: 'Yes, Delete', loading: isLoading }}
          image={{ src: '/images/logoutIcon.png', alt: 'logout icon' }}
          onCancel={() => setConfirmPopupState(false)}
          onConfirm={handleDeleteUhidProfile}
        />
      </Dialog>
    </Box>
  )
}
