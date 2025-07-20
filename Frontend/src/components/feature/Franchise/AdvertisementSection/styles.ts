import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: { xs: '100%', md: '100vw' },
    height: { xs: '100%', md: '30vw' },
    padding: { xs: '0px 16px' },
    margin: '2vw 0',
  },
  image: {
    height: { xs: '140px', md: '100%' },
    width: '100%',
    img: {
      objectFit: { xs: 'fill', md: 'contain' },
      borderRadius: { xs: '8px', md: '8px' },
    },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
