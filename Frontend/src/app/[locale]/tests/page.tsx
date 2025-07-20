import { getFindTestPageData } from '@query/find-a-test'
import { Banner } from '@components/feature/Career'
import { Tests } from '@components/feature/FindTest'
import NotFoundPage from '../[...not-found]/page'

export const revalidate = 3600
async function FindTest() {
  let pageData
  try {
    pageData = await getFindTestPageData()
  } catch {
    return <NotFoundPage />
  }
  const { banner, tests } = pageData

  return (
    <>
      <Banner {...banner} />
      <Tests {...tests} />
    </>
  )
}

export default FindTest
