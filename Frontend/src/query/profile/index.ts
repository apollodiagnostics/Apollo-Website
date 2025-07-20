import { getUhidProfilesByPhoneNumber } from '@utils/api/dashboard'
import { getUserFromCookies } from '@utils/auth'
import { ProfilePageData } from './profile.model'

const profilePageData: ProfilePageData = {
  profileOverviewSection: {
    accountHeading: 'My Account',
    buttons: [
      {
        label: 'Profile',
      },
      {
        label: 'Add Patient Profile',
      },
      {
        label: 'Addresses',
      },
      {
        label: 'My Orders',
      },
      {
        label: 'Reports',
      },
      {
        label: 'Logout',
      },
    ],
    profiles: [
      {
        profileId: null,
        userId: null,
        title: null,
        access_token: null,
        uhid: null,
        firstname: null,
        lastname: null,
        email: null,
        dob: null,
        age: null,
        gender: null,
        mobilenumber: null,
        relationship: null,
        address: null,
        defaultUser: null,
        alternatemobile: null,
      },
    ],
    profileInfoHeading: 'Profile Overview ',
  },
}

export const getProfilePageData = async (): Promise<ProfilePageData | null> => {
  const userDetails = await getUserFromCookies()
  if (userDetails.access_token && userDetails.phoneNumber) return null

  const profiles = await getUhidProfilesByPhoneNumber(userDetails.phoneNumber)

  profilePageData.profileOverviewSection.profiles = profiles.data.rows
  const p = new Promise<ProfilePageData>((resolve) => {
    resolve(profilePageData)
  })
  return p
}
