import { Box } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyle, { StylesClassNames } from './styles'
import { SidePanelMenu, SidePanelMenuData } from '../SidePanelMenu'

export type SidePanelData = {
  filters: SidePanelMenuData
  multiselect?: boolean
}

type Props = SidePanelData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function SidePanel({ filters, customStyles, multiselect }: Props) {
  const styles = getStyles(defaultStyle, customStyles)
  return (
    <Box {...styles('wrapper')}>
      <SidePanelMenu
        {...filters}
        key={filters.heading}
        multiselect={multiselect}
      />
    </Box>
  )
}
