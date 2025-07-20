import { OverView, OverViewData } from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

type OverViewProps = OverViewData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function OverviewSection({
  heading,
  description,
  customStyles,
}: OverViewProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <OverView
      heading={heading}
      customStyles={{ descriptionWrapper: styles('mainWrapper').sx }}
      description={description}
    />
  )
}
