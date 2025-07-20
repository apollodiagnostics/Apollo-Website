import { Box } from '@mui/material'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type DoublePanelDescriptionProps = {
  description: string
}

export function DoublePanelDescription({
  description,
}: DoublePanelDescriptionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('description')}>{description}</Box>
    </Box>
  )
}
