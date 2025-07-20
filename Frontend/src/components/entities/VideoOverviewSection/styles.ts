import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: { xs: ' column', md: 'row' },
    gap: { xs: '18px', md: '43px' },
    padding: '2vw 6vw',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 'fit-content',
  },
  videosWrapper: {
    height: { lg: '440px' },
    width: { xs: '100%', md: '766px', lg: '408px' },
    gap: '18px',
    display: 'flex',
    flexDirection: 'column',
  },
  overviewVideoWrapper: {
    borderRadius: '16px',
    height: { md: '440px' },
    width: '100%',
    maxWidth: { md: '766px', xs: '100%' },
  },
  videoWrapper: {
    height: { md: '211px' },
    width: { lg: '400px' },
    borderRadius: '16px',
    objectFit: 'cover',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
