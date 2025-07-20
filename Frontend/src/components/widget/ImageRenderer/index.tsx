import { Box } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type ImageRendererProps = {
  customStyles?: CustomStyles<StylesClassNames>
}

export function ImageRenderer({ customStyles }: ImageRendererProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return <Box {...styles('wrapper')}>Image Renderer todo</Box>
}
