import { Box, Typography } from '@mui/material'
import { Button, ButtonProps } from '@components/common/Button'
import { Image, ImageProps } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type UploadPopUpData = {
  image: ImageProps
  heading: string
  description?: string
  button1?: ButtonProps
  button2: ButtonProps
  loading?: boolean
}
type UploadPopUpProps = UploadPopUpData & {
  onCancel?: (value: boolean) => void
  onConfirm: (value: boolean) => void
}
export function UploadPopUp({
  image,
  heading,
  description,
  button1,
  button2,
  onCancel,
  onConfirm,
  loading,
}: UploadPopUpProps) {
  const styles = getStyles(defaultStyles)

  const cancelHandler = () => {
    if (onCancel) {
      onCancel(false)
    }
  }
  const confirmHandler = () => {
    onConfirm(false)
  }
  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('inforContainer')}>
        <Image {...image} fill customStyles={{ wrapper: styles('image').sx }} />
        <Typography {...styles('heading')}>{heading}</Typography>
        <Typography {...styles('description')}>{description}</Typography>
      </Box>
      <Box {...styles('buttonWrapper')}>
        {button1 && (
          <Button
            {...button1}
            customStyles={{
              button: {
                ...styles('button').sx,
                backgroundColor: 'custom.lightMaroon',
                color: 'cutom.primary',
                border: '1px solid transparent',
                '&:hover': {
                  backgroundColor: 'custom.lightMaroon',
                  border: '1px solid transparent',
                },
              },
            }}
            onClick={cancelHandler}
          />
        )}
        <Button
          {...button2}
          customStyles={{ button: styles('button').sx }}
          onClick={confirmHandler}
          loading={loading}
          variant="contained"
        />
      </Box>
    </Box>
  )
}
