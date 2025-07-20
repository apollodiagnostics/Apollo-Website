import { HtmlPurifier } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type BlogsSectionData = {
  description: string
}

export function BlogsSection({ description }: BlogsSectionData) {
  const styles = getStyles(defaultStyle)

  return (
    <HtmlPurifier
      html={description}
      customStyles={{ wrapper: styles('wrapper').sx }}
    />
  )
}
