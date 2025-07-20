import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '99vw',
    position: 'fixed',
    top: '-16px',
    zIndex: '12',
    overflow: 'none',
    marginTop: '85px',
    backgroundColor: 'common.white',
  },
  options: {
    width: '100%',
    height: '63px',
    padding: '0px 24px',
    borderTop: '1px solid',
    borderColor: 'primary.white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '18px',
    fontWeight: '600',
    color: 'primary.white',
  },
  wrapper: {
    width: '100%',
    height: '62px',
    borderBottom: '1px solid',
    borderColor: 'common.white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: {
      xs: 'row',
      lg: 'row',
    },
  },
  imageWrapper: {
    display: { lg: 'none' },
    width: '95px',
    height: '49px',
  },
  menuWrapper: {
    borderBottom: '1px solid',
    borderColor: 'custom.lightGrey',
  },
  label: {
    padding: '23px',
    textDecoration: 'none',
    color: 'common.black',
    fontSize: '16px',
    fontWeight: '400',
  },
  button: {
    borderRadius: '49px',
    border: '1px solid',
  },
  navListWrapper: {
    marginLeft: '13px',
    display: {
      xs: 'none',
      lg: 'flex',
    },
    height: '100%',
    alignItems: 'center',
    gap: '23px',
    width: '1382px',
  },
  iconButtonWrapper: {
    display: { lg: 'none', color: 'custom.lightBlack' },
  },
  iconswrapper: {
    display: 'flex',
    gap: '23px',
    padding: '13px',
    alignItems: 'center',
  },
  ShoppingCartOutlinedIcon: {
    fontSize: '27px',
    alignItems: 'center',
    color: 'primary.main',
  },
  PersonIcon: {
    fontSize: '34px',
    borderRadius: '50%',
    color: 'primary.main',
    backgroundColor: 'primary.light',
  },
  downloadWrapper: {
    display: 'flex',
    gap: '9px',
    alignItems: 'center',
    color: 'custom.lightBlack',
    font: 'Lato',
    fontWeight: '600',
    fontSize: '18px',
    flexDirection: 'row',
    width: '1023px',
    textDecoration: 'none',
  },
  downloadButton: {
    color: 'custom.lightBlack',
    font: 'Lato',
    fontWeight: '600',
    textDecoration: 'none',
  },
  buttonWrapper: {
    display: 'flex',
    gap: '12px',
    marginLeft: '13px',
  },
  mainLogo: {
    width: '131px',
    height: '40px',
  },
  drawerComponent: {
    width: '100%',
    textAlign: 'center',
  },
  drawerHeadComponent: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '13px',
    padding: '6px 24px',
  },
  logoImage: {
    width: '132px',
  },
  fileDownloadOutlinedIcon: {
    color: 'custom.lightBlack',
  },
  drawerWrapper: {
    width: '85vw',
    height: 'auto',
    backgroundColor: 'primary.white',
    zIndex: '5',
    overflow: 'scroll',
    marginTop: '20px',
  },
  drawerMount: {
    display: { xl: 'block' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: '85vw',
      overflowX: 'hidden',
    },
  },
  menu: {},
  image: {
    width: '95px',
    height: '49px',
  },
  logo: {
    display: { lg: 'none' },
    width: '95px',
    height: '49px',
  },
  drawerLogo: { width: '95px', height: '29px' },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
