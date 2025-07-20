import { CentreDetailsOverview, CentreOverviewData } from '@components/entities'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type CareerOverviewData = CentreOverviewData

export function CareerOverview(props: CareerOverviewData) {
  const styles = getStyles(defaultStyle)

  return (
    <CentreDetailsOverview
      {...props}
      customStyles={{ wrapper: styles('wrapper').sx }}
    />
  )
}
