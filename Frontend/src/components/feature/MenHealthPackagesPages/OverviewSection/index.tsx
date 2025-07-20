import { OverView, OverViewData } from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

type OverViewProps = OverViewData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function OverviewSection({
  heading,
  image,
  description,
  customStyles,
}: OverViewProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <OverView
      heading={heading}
      image={image}
      description={description}
      customStyles={{
        mainWrapper: styles('mainWrapper').sx,
        descriptionWrapper: styles('descriptionWrapper').sx,
      }}
    />
  )
}
