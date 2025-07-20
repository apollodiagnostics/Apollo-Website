import { Box, CircularProgress, CircularProgressProps } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type LoaderProps = {
  loading: boolean
  children?: React.ReactNode
  customStyles?: CustomStyles<StylesClassNames>
} & Omit<CircularProgressProps, 'sx'>

export function Loader({
  loading,
  children,
  customStyles,
  ...circularProgressProps
}: LoaderProps) {
  const styles = getStyles(defaultStyles, customStyles)

  if (loading) {
    return (
      <Box {...styles('loaderWrapper')}>
        <Box {...styles('loaderBg')} />
        <CircularProgress {...styles('loader')} {...circularProgressProps} />
        <Box {...styles('wrapper')}>{children}</Box>
      </Box>
    )
  }

  return <Box {...styles('wrapper')}>{children}</Box>
}
