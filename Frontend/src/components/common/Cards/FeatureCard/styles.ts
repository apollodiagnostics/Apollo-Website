import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    maxWidth: { md: '375px' },
    height: '68px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    position: 'relative',
    padding: '10px 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
    border: '1px solid',
    borderColor: 'primary.light',
    textDecoration: 'none',
  },
  heading: {
    fontWeight: '500',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '1',
    textOverflow: 'ellipsis',
    fontSize: { xs: '14px', sm: '16px' },
  },
  nextIcon: {
    color: 'primary.main',
    backgroundColor: 'primary.light',
    borderRadius: '50%',
  },
  description: {
    color: 'custom.grey',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '1',
    textOverflow: 'ellipsis',
    fontSize: { xs: '12px', sm: '14px' },
  },
  container: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },

  iconTag: {
    backgroundColor: 'custom.whisper',
    color: 'black',
  },

  infoContainer: {
    width: 'calc(100% - 48px)',
    color: 'common.black',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
