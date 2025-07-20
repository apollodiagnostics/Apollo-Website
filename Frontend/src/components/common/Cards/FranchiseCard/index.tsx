import { Box, List, ListItem, Typography } from '@mui/material'
import { Image, ImageProps } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type FranchiseCardData = {
  heading: string
  description: string[]
  image: ImageProps
}

type FranchiseCardDataProps = FranchiseCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function FranchiseCard({
  heading,
  description,
  image,
  customStyles,
}: FranchiseCardDataProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('mainWrapper')}>
      <Box {...styles('imageWrapper')}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          customStyles={{ wrapper: styles('image').sx }}
        />
      </Box>
      <Box {...styles('descriptionWrapper')}>
        <Box {...styles('headingWrapper')}>
          <Typography {...styles('heading')}>{heading}</Typography>
        </Box>
        <Box {...styles('list')}>
          <List {...styles('listContainer')}>
            {description.map((item) => (
              <ListItem {...styles('description')} key={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}
