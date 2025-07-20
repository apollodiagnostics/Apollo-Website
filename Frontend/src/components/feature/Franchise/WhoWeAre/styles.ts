import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    alignItems: 'start',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    padding: { xs: '10px', md: '3vw 6vw', lg: '2vw 4vw' },
    justifyContent: 'center',
    gap: '23px',
    maxWidth: '1590px',
    margin: 'auto',
  },
  descriptionWrapper: {
    width: '100%',
    minHeight: { md: '419px' },
    height: { xs: 'auto', md: 'unset' },
  },
  headingWrapper: {
    width: '100%',
  },
  heading: {
    fontSize: '36px',
    fontWeight: '700',
    padding: '23px',
    color: 'custom.green',
  },
  description: {
    color: 'custom.lightSilver ',
    padding: '23px',
    fontWeight: '500',
    fontSize: '16px',
  },
  wrapper: {
    width: '100%',
    height: '100vw',
    maxWidth: '629px',
    maxHeight: '362px',
    borderRadius: '16px',
  },
  '&::-webkit-media-controls': {
    display: 'none !important',
  },
  videoContainer: {
    width: '100%',
    maxWidth: '673px',
    height: 'auto',
    aspectRatio: '16/9',
    border: 'none',
    borderRadius: '13px',
  },
  thumbnailWrapper: {
    width: '100%',
    height: 'auto',
    aspectRatio: '16/9',
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  thumbnailImage: {
    width: '600px',
    height: '360px',
    objectFit: 'cover',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
