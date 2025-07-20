import { HtmlPurifier } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type TestDetailsData = {
  description: string
}

export function TestDetails({ description }: TestDetailsData) {
  const styles = getStyles(defaultStyle)

  return (
    <HtmlPurifier
      html={description}
      customStyles={{ wrapper: styles('wrapper').sx }}
    />
  )
}
