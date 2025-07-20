import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: { xs: ' column', md: 'row' },
    gap: '43px',
    padding: '3vw 6vw',
    flexWrap: 'wrap',
    maxWidth: '1590px',
    justifyContent: 'center',
    height: 'fit-content',
  },
  videosWrapper: {
    height: '433px',
    width: { xs: '100%', md: '383px' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '18px',
  },
  overviewVideoWrapper: {
    borderRadius: '16px',
    height: '433px',
    maxWidth: { xs: '100%', md: '768px' },
  },
  videoWrapper: {
    borderRadius: '16px',
    video: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
