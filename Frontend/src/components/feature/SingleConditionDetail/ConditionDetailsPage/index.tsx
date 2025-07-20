import { HtmlPurifier } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type ConditionDetailProp = {
  description: string
}

export function ConditionDetail({ description }: ConditionDetailProp) {
  const styles = getStyles(defaultStyle)

  return (
    <HtmlPurifier
      html={description}
      customStyles={{ wrapper: styles('wrapper').sx }}
    />
  )
}
