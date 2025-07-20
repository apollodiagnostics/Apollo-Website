import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'custom.lightPink',
  },
  wrapper: {
    padding: { xs: '3vw 6vw', md: '62px 6vw', lg: '62px 4vw' },
    backgroundColor: 'custom.lightPink',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1590px',
    justifyContent: 'center',
    gap: '82px',
  },
  card: {
    width: { xs: '100%', md: '100%' },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'start',
  },
  heading: {
    width: '70%',
  },
  description: {
    width: '67%',
    textAlign: 'justify',
  },
  videosWrapper: {
    width: { xs: '100%', md: '750px', lg: '430px' },
    height: { md: '440px' },
  },
  overviewVideoWrapper: {
    width: { xs: 'unset', md: '49vw' },
    height: { md: '440px' },
    maxWidth: { xs: '100%', md: '750px', lg: '759px' },
    borderRadius: '16px',
  },
  videoWrapper: {
    height: { md: '210px' },
    width: { xs: '100%', md: '750px', lg: '441px' },
    objectFit: 'cover',
  },
  overviewWrapper: {
    padding: '0px',
    justifyContent: { lg: 'space-between' },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
