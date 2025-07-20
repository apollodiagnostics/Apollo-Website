import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: { xs: '100%', sm: '385px' },
    height: { xs: 'fit-content', md: '366px' },
    borderRadius: '16px',
    border: '1px solid',
    borderColor: 'custom.lightPink',
    padding: '24px',
    gap: '16px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'common.white',
    justifyContent: 'space-between',
    textDecoration: 'none',
    color: 'common.black',
    ':hover': {
      borderColor: 'primary.main',
    },
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  contentHeading: {
    fontSize: '14px',
    fontWeight: '500',
    overflow: 'hidden',
    display: '-webkit-box',
    webkitBoxOrient: 'vertical',
    webkitLineClamp: '2',
    textOverflow: 'ellipsis',
  },
  content: {
    fontFamily: 'lato',
    fontSize: '14px',
    fontWeight: '500',
    color: 'custom.dullBlack',
  },
  heading: {
    fontSize: '18px',
    fontWeight: '700',
    textAlign: 'left',
  },
  buttonWrapper: {
    borderTop: '1px solid',
    borderColor: 'custom.lightWhite',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    paddingTop: '17px',
    flexDirection: { xs: 'column', md: 'row' },
  },
  viewDetailsButton: {
    width: { xs: '100%', md: 'fit-content' },
    padding: '14px',
    height: '41px',
    minWidth: '114px',
  },
  getDirectionsButton: {
    width: { xs: '100%', md: 'fit-content' },
    height: '41px',
    backgroundColor: 'custom.lightBlack',
    flexDirection: 'row-reverse',
    padding: '14px',
    color: '14px',
  },
  headingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
  },
  viewButton: {
    color: 'primary.main',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '21px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
