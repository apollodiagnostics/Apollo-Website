import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    maxWidth: '1204px',
    backgroundColor: 'common.white',
    borderRadius: '8px',
    padding: '16px 0px',
  },
  orderCancel: {
    padding: '16px 8px',
    borderRadius: '8px',
    backgroundColor: '#FF8383',
    fontSize: { xs: '12px', md: '14px' },
    textWrap: 'nowrap',
    fontWeight: '600',
    height: '38px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    width: '100%',
    height: '66px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 24px',
  },
  subHeading: {
    fontSize: { xs: '12px', md: '14px' },
    fontWeight: '500',
    color: 'custom.lightGreyish',
  },
  orderHeading: {
    fontSize: { xs: '14px', md: '18px' },
    fontWeight: '500',
  },
  topLeftContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  topRightContainer: {},
  orderStatus: {
    padding: '16px 8px',
    borderRadius: '8px',
    backgroundColor: 'custom.lightestYellow',
    fontSize: { xs: '12px', md: '14px' },
    textWrap: 'nowrap',
    fontWeight: '600',
    height: '38px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    height: '56px',
    alignItems: 'center',
    padding: '24px',
  },
  userName: {
    fontSize: { xs: '16px', md: '18px' },
    fontWeight: '500',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  typeHeading: {
    fontSize: { xs: '12px', md: '14px' },
    fontWeight: '500',
  },
  infoText: {
    fontSize: { xs: '12px', md: '14px' },
    fontWeight: '500',
    color: 'custom.dullBlack',
  },
  midContainer: {
    width: '100%',
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'custom.lightGrey',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '24px',
    flexWrap: 'wrap',
    gap: '24px',
  },
  buttonWrapper: {
    display: 'flex',
    gap: '16px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
