import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    // height: '30vw',
    // marginBottom: '32px',
  },
  image: {
    width: '100%',
    height: '100%',
    img: {
      objectFit: 'contain',
    },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
