import { getUploadPrescriptionPageData } from '@query/uploadPrescription'
import { UploadPrescription } from '@components/feature/UploadPrescription'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

async function UploadPrescriptionPage() {
  let pageData
  try {
    pageData = await getUploadPrescriptionPageData()
  } catch {
    return <NotFoundPage />
  }
  const { uploadPrescriptionSection } = pageData
  return <UploadPrescription {...uploadPrescriptionSection} />
}

export default UploadPrescriptionPage
