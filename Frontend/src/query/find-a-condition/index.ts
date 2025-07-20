import { CurrentOpeningData } from '@components/common/Cards/CurrentOpeningCard'
import { getFindAConditionData } from '@utils/api/dashboard'
import { QueryFindAConditionData } from 'src/models/query.models'
import { FindAConditionData } from './find-a-condition.model'

const findAConditionData: FindAConditionData = {
  banner: {
    label: 'Find A Condition Details',
    backgroundImage: {
      src: '/images/bannerBg.png',
      alt: '',
    },
    path: 'Home > Find A Condition Details',
  },
  conditions: {
    cards: [
      {
        icon: { src: '/images/feedback.png', alt: 'image' },
        label: 'Allergy',
        heading: 'Allergy ',
        description:
          'Allergies refer to the hypersensitive immune reactions that occur in response to certain substances',
      },
      {
        icon: { src: '/images/feedback.png', alt: 'image' },
        label: 'Bone Marrow Disorders',
        heading: 'Bone Marrow Disorders',
        description:
          'Bone marrow is a soft, spongy tissue that is present in the hollow spaces in the interior of the bones, such as the hip and thigh bones.',
      },
    ],
  },
}
function extractComponent(data: QueryFindAConditionData): FindAConditionData {
  const allConditions: CurrentOpeningData[] = data.data.map((item) => {
    return {
      heading: item.name,
      description: '',
      buttonProps: {
        label: 'Read More',
        link: `find-a-condition/${item.id}`,
      },
    }
  })
  return {
    banner: findAConditionData.banner,
    conditions: {
      cards: allConditions,
    },
  }
}

export const getFindAConditionPageData =
  async (): Promise<FindAConditionData> => {
    const responseData = await getFindAConditionData()
    const p = extractComponent(responseData)
    return p
  }
