import { getSingleTestPage } from '@query/find-a-test-page'
import { Banner, TestDetails } from '@components/feature/FindSingleTest'
import NotFoundPage from '../../[...not-found]/page'

type Props = {
  params: {
    tests: string
  }
}

export const revalidate = 3600

async function TestsPage({ params: { tests } }: Props) {
  let pageData
  try {
    pageData = await getSingleTestPage(
      parseInt(tests.split('-').pop() || '0', 10)
    )
  } catch {
    return <NotFoundPage />
  }
  const { banner, testDetails } = pageData

  return (
    <>
      <Banner {...banner} />
      <TestDetails {...testDetails} />
    </>
  )
}

export default TestsPage
