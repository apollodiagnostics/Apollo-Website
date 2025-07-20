// import axios from 'axios'
// import { ROUTES } from '../routes'

// export async function sendOtpToNumber(userMobile: string) {
//   const url = ROUTES.SendOtp
//   const formData = new URLSearchParams()
//   formData.append('user_mobile', userMobile)

//   try {
//     const response = await axios.post(url, formData)

//     if (response.status === 200) {
//       console.log('OTP sent successfully')
//     } else {
//       console.log('Failed to send OTP', response.status)
//     }
//   } catch (error) {
//     console.error('Error:', error)
//   }
// }
// export async function verifyOtp(otp: string, phoneNumber: string) {
//   const url = ROUTES.VerifyOtp
//   const formData = new URLSearchParams()
//   formData.append('mobi_number', phoneNumber)
//   formData.append('otp_valid', otp)
//   formData.append('patient_consent', 'on')

//   try {
//     const response = await axios.post(url, formData)

//     if (response.status === 200) {
//       console.log('OTP verified successfully')
//       return response.data
//     }
//     console.log('Failed to verify OTP', response.status)
//     throw new Error('Failed to verify OTP')
//   } catch (error) {
//     console.error('Error:', error)
//     throw new Error('Failed to verify OTP')
//   }
// }
