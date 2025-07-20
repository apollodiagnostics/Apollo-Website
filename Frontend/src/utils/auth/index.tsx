'use server'

import { cookies } from 'next/headers'
import { UserDetails } from '@models'

// User Work
export async function setUserInCookies(sessionData: UserDetails) {
  await cookies().set('apolloUserDetails', JSON.stringify(sessionData), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
}

export async function getUserFromCookies() {
  const encryptedSessionData = await cookies().get('apolloUserDetails')?.value
  return encryptedSessionData ? JSON.parse(encryptedSessionData) : null
}

export async function removeUserFromCookies() {
  const response = await cookies().delete('apolloUserDetails')
  return response
}

// 'Cookies Work'
export async function getDataFromCookies(name: string) {
  const encryptedSessionData = await cookies().get(`${name}`)?.value
  return encryptedSessionData ? JSON.parse(encryptedSessionData) : null
}

export async function removeDataFromCookies(name: string) {
  const response = await cookies().delete(`${name}`)
  return response
}

export async function setDataInCookies<T>(name: string, data: T) {
  await cookies().set(`${name}`, JSON.stringify(data), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  })
}
