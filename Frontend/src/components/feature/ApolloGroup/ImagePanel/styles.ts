import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    padding: '3vw 6vw',
    flexDirection: { xs: ' column', md: 'row' },
    gap: '43px',
    justifyContent: 'center',
  },
  imagesWrapper: {
    height: '413px',
    width: { xs: '100%', md: '383px' },
    display: 'flex',
    flexDirection: 'column',
    gap: '33px',
  },
  overviewImageWrapper: {
    height: '413px',
    width: { xs: '100%', md: '781px' },
  },
  image: {
    borderRadius: '16px',
    overflow: 'hidden',
    img: {
      objectFit: 'cover',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
