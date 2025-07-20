import { getConditionDetailData } from '@utils/api/dashboard'
import { QueryConditionDetailPageData } from 'src/models/query.models'
import { SingleConditionDetail } from './singleConditionDetail.model'

const singleConditionDetail: SingleConditionDetail = {
  banner: {
    label: 'Condition Details',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Condition Details',
  },
  conditionDetail: {
    description: '',
  },
}

function extractComponent(
  data: QueryConditionDetailPageData
): SingleConditionDetail {
  return {
    banner: {
      label: data.data.dataValues.name,
      backgroundImage: singleConditionDetail.banner.backgroundImage,
      path: `Home > Find A Condition Details`,
    },
    conditionDetail: {
      description: data.data.dataValues.description,
    },
  }
}

export const getConditionDetail = async (
  slug: number
): Promise<SingleConditionDetail> => {
  const responseData = await getConditionDetailData(slug)
  const p = extractComponent(responseData)
  return p
}
