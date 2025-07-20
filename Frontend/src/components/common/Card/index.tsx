import Link from 'next/link'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

type BasicCardProps = {
  heading: string
  title: string
  subTile: string
  description: string
  link: string
}

export function BasicCard({
  heading,
  title,
  subTile,
  description,
  link,
}: BasicCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {subTile}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Link href={link} target="_blank">
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
