import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    maxWidth: '1590px',
    margin: 'auto',
  },
  wrapper: {
    padding: { xs: '6vw', lg: '4vw' },
    flexDirection: 'column',
    maxWidth: '712px',
    gap: { md: '15px' },
  },
  sectionHeading: {
    width: '189px',
  },
  image: {
    minHeight: { xs: '500px', md: '663px' },
    width: { xs: '92%', md: '624px' },
    img: {
      objectFit: 'contain',
    },
  },
  imageWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    minHeight: { xs: '480px', md: '614px' },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
