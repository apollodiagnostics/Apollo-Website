import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
    padding: { xs: '30px 6vw', md: '62px 6vw' },
    maxWidth: '1590px',
  },
  infoWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: `50%`,
    height: { md: '328px' },
    display: { xs: 'none', md: 'block' },
    img: {
      objectFit: 'contain',
    },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
