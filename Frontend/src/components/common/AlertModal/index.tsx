import { Box, Modal, Typography } from '@mui/material'
import { Button, ButtonProps } from '@components/common/Button'
import { Image, ImageProps } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type AlertModalData = {
  image: ImageProps
  heading: string
  description: string
  closeButton?: ButtonProps
  infoButton?: ButtonProps
}

type UploadPopUpProps = AlertModalData & {
  onClose: (value: boolean) => void
}

export function AlertModal({
  image,
  heading,
  description,
  closeButton,
  infoButton,
  onClose,
}: UploadPopUpProps) {
  const styles = getStyles(defaultStyles)
  const closeHandler = () => {
    onClose(false)
  }

  return (
    <Modal
      open
      sx={{ bottom: '20px', right: '20px', top: 'unset', left: 'unset' }}
    >
      <Box {...styles('wrapper')}>
        <Box {...styles('inforContainer')}>
          <Image
            {...image}
            fill
            customStyles={{ wrapper: styles('image').sx }}
          />
          <Typography {...styles('heading')}>{heading}</Typography>
          <Typography {...styles('description')}>{description}</Typography>
        </Box>
        <Box {...styles('buttonWrapper')}>
          {infoButton && (
            <Button
              {...infoButton}
              customStyles={{ button: styles('infoButton').sx }}
              // onClick={closeHandler}
            />
          )}
          {closeButton && (
            <Button
              {...closeButton}
              customStyles={{ button: styles('button').sx }}
              onClick={closeHandler}
            />
          )}
        </Box>
      </Box>
    </Modal>
  )
}
