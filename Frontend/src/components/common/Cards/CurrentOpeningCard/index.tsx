import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box, Typography } from '@mui/material'
import { Button, ButtonProps } from '@components/common/Button'
import { Image, ImageProps } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type CurrentOpeningData = {
  heading: string
  label?: string
  author?: string
  icon?: ImageProps
  description: string
  buttonProps?: ButtonProps
}

type Props = CurrentOpeningData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function CurrentOpeningCard({
  description,
  heading,
  icon,
  author,
  customStyles,
  buttonProps,
  label,
}: Props) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('card', { alignItems: description ? 'start' : 'center' })}>
      <Box {...styles('iconWrapper')}>
        {icon && (
          <Image
            src={icon.src}
            alt={icon.alt}
            fill
            customStyles={{ wrapper: styles('icons').sx }}
          />
        )}
        <Box {...styles('labelWrapper')}>
          {author && (
            <Typography variant="body1" {...styles('author')}>
              {author}
            </Typography>
          )}
          {label && (
            <Typography variant="body1" {...styles('iconLabel')}>
              {label}
            </Typography>
          )}
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" {...styles('heading')}>
          {heading}
        </Typography>
        <Box {...styles('description')}>
          <Typography>{description}</Typography>
        </Box>
      </Box>
      {buttonProps && (
        <Button
          {...buttonProps}
          icon={<ArrowRightAltIcon />}
          variant="text"
          customStyles={{ button: styles('button').sx }}
        />
      )}
    </Box>
  )
}
