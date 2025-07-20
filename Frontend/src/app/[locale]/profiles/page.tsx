import React from 'react'
import { getProfilePageData } from '@query/profile'
import { ProfileOverviewSection } from '@components/feature/Profile'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

async function ProfilePage() {
  let pageData
  try {
    pageData = await getProfilePageData()
    if (!pageData) return <NotFoundPage />
  } catch {
    return <NotFoundPage />
  }
  const { profileOverviewSection } = pageData

  return <ProfileOverviewSection {...profileOverviewSection} />
}

export default ProfilePage
