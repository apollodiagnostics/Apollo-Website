import {
  CentreDetailsOverview,
  CentreOverviewData,
} from '@components/entities/CentreDetailsOverview'
import { getStyles } from '@utils/styles'
import defaultStyle from './styles'

export type CentreOverviewDataProps = CentreOverviewData
export function CentreOverview(props: CentreOverviewDataProps) {
  const styles = getStyles(defaultStyle)

  return (
    <CentreDetailsOverview
      {...props}
      customStyles={{ wrapper: styles('wrapper').sx }}
    />
  )
}
