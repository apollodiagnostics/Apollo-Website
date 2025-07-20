import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    height: '40vw',
    maxWidth: '1590px',
  },
  image: {
    img: {
      objectFit: 'cover',
    },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
