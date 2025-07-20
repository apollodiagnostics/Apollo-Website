import { Box, Typography } from '@mui/material'
import { ButtonProps, Button, HtmlPurifier } from '@components/common'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StyleClassNames } from './styles'

export type DescriptionData = {
  sectionHeading?: string
  mainHeading: string
  heading?: string
  description: string
  buttonProps?: ButtonProps
}
export type DescriptionSectionProps = DescriptionData & {
  customStyles?: CustomStyles<StyleClassNames>
}
export function DescriptionSection({
  sectionHeading,
  mainHeading,
  heading,
  description,
  buttonProps,
  customStyles,
}: DescriptionSectionProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('sectionHeadingWrapper')}>
        {sectionHeading && (
          <Typography {...styles('sectionHeading')}>
            {sectionHeading}
          </Typography>
        )}
        <Box {...styles('headingWrapper')}>
          <Typography {...styles('mainHeading')}>{mainHeading}</Typography>
          {heading && <Typography {...styles('heading')}>{heading}</Typography>}
        </Box>
      </Box>
      <Box {...styles('descriptionWrapper')}>
        <HtmlPurifier
          html={description}
          customStyles={{ wrapper: styles('description').sx }}
        />

        {buttonProps && (
          <Button label={buttonProps.label} variant="contained" link="/" />
        )}
      </Box>
    </Box>
  )
}
