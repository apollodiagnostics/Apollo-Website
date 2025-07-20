import { getConditionDetail } from '@query/singleConditionDetail'
import { Banner, TestDetails } from '@components/feature/FindSingleTest'
import NotFoundPage from '../../[...not-found]/page'

type Props = {
  params: {
    condition: number
  }
}

async function ConditionDetail({ params: { condition } }: Props) {
  let pageData
  try {
    pageData = await getConditionDetail(condition)
  } catch {
    return <NotFoundPage />
  }
  const { banner, conditionDetail } = pageData

  return (
    <>
      <Banner {...banner} />
      <TestDetails {...conditionDetail} />
    </>
  )
}

export default ConditionDetail
