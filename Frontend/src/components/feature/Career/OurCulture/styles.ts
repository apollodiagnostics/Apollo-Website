import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    maxWidth: '1590px',
    margin: 'auto',
    flexDirection: 'column',
    padding: { xs: '2vw 6vw', lg: '2vw 4vw' },
    display: 'flex',
    gap: '32px',
  },
  heading: {
    fontSize: { xs: '24px', md: '36px' },
    fontWeight: '700',
    color: 'custom.green',
  },
  imagesWrapper: {
    width: '100%',
  },
  image: {
    height: '413px',
    width: { xs: '100%', md: '400px' },
    borderRadius: '16px',
    overflow: 'hidden',
    img: {
      objectFit: 'cover',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
