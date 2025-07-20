import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { Box } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type ImageProps = NextImageProps & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function Image({
  width = 0,
  height = 0,
  customStyles,
  ...rest
}: ImageProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <NextImage
        width={width}
        height={height}
        {...rest}
        sizes="100%, 100%"
        unoptimized
      />
    </Box>
  )
}
