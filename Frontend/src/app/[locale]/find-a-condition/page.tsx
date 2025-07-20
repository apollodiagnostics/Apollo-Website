import { getFindAConditionPageData } from '@query/find-a-condition'
import { Banner, Conditions } from '@components/feature/FindACondition'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600

async function FindACondition() {
  let pageData
  try {
    pageData = await getFindAConditionPageData()
  } catch {
    return <NotFoundPage />
  }
  const { banner, conditions } = pageData
  return (
    <>
      <Banner {...banner} />
      <Conditions {...conditions} />
    </>
  )
}

export default FindACondition
