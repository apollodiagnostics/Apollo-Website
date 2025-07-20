import * as React from 'react'
import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CustomStyles, getStyles } from '@utils/styles'
import { Noop } from '@utils/typescript'
import defaultStyles, { StylesClassNames } from './styles'

export type ActionCardProps = {
  image: string
  title: string
  description: string
  onClick?: Noop
  customStyles?: CustomStyles<StylesClassNames>
}

export function ActionCard({
  image,
  description,
  title,
  onClick,
  customStyles,
}: ActionCardProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Card {...styles('wrapper')}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
