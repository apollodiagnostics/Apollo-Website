import { createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    width: '100vw',
    // padding: { md: '0px 5vw' },
    alignItems: 'center',
    justifyContent: { lg: 'center' },
    gap: { xs: '10px', md: '25px' },
    position: 'fixed',
    height: '69px',
    top: '0',
    zIndex: '15',
    typography: 'gradient.primary',
    borderBottom: '1px solid',
    borderColor: 'custom.lightGrey',
    backgroundColor: 'common.white',
    '& .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.mui-btqa4g-MuiAutocomplete-root .MuiOutlinedInput-root':
      {
        paddingRight: '0px',
      },
  },
  contentWrapper: {
    padding: '0px 3vw',
    display: 'flex',
    width: '100%',
    margin: 'auto',
    maxWidth: '1600px',
    alignItems: 'center',
    justifyContent: { lg: 'space-between' },
    gap: { xs: '10px', md: '25px' },
    position: 'fixed',
    height: '69px',
    top: '0',
    zIndex: '15',
    typography: 'gradient.primary',
    borderBottom: '1px solid',
    borderColor: 'custom.lightGrey',
    backgroundColor: 'common.white',
    '& .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.mui-btqa4g-MuiAutocomplete-root .MuiOutlinedInput-root':
      {
        paddingRight: '0px',
      },
  },
  cityOptions: {
    backgroundColor: 'common.white',
  },
  logo: { mr: 2, display: { md: 'none' } },
  contactUsWrapper: {
    display: { xs: 'none', lg: 'flex' },
    gap: '16px',
    alignItems: 'center',
  },
  collectionWrapper: {
    display: { xs: 'none', lg: 'flex' },
    flexDirection: 'column',
  },
  CallRoundedIcon: {
    fontSize: '24px',
    padding: '3px',
    borderRadius: '50%',
    color: 'common.white',
    backgroundColor: 'custom.skyBlue',
  },
  WhatsAppIcon: {
    fontSize: '26px',
    padding: '3px',
    borderRadius: '50%',
    color: 'white',
    backgroundColor: 'custom.lightGreen',
  },
  homeCollection: {
    color: 'custom.darkSilver',
    fontWeight: '400',
    fontSize: '12px',
    textWrap: 'nowrap',
  },
  phoneNo: {
    color: 'primary.main',
    fontWeight: '400',
    fontSize: { md: '12px', lg: '16px' },
    textDecoration: 'none',
    cursor: 'pointer',
    textWrap: 'nowrap',
  },
  divider: {
    display: { xs: 'none', lg: 'block' },
    height: '29px',
    m: 0.5,
    backgroundColor: 'custom.silver',
  },
  contactDivider: {
    height: '16px',
    m: 0.5,
    backgroundColor: 'custom.silver',
  },
  listWrapper: {
    display: {
      xs: 'none',
      md: 'block',
    },
    boxSizing: 'content-box',
  },
  searchBar: {
    display: { xs: 'none', lg: 'block' },
  },
  navItem: {
    marginLeft: '31px',
    color: 'custom.silver',
    transition: '0.2s',
    fontSize: '13px',
    fontWeight: '500',
    borderRadius: '0px',
  },
  active: {
    color: 'custom.silver',
    fontWeight: '600',
    borderBottom: '1.8px solid white',
  },
  image: {
    height: '66px',
    width: '124px',
    display: { xs: 'none', lg: 'block' },
  },
  callWrapper: {
    height: '24px',
    alignItems: 'center',
  },
  whatsappWrapper: {
    height: '26px',
    alignItems: 'center',
  },
  contactUs: {
    fontSize: '14px',
    fontWeight: '400',
    textWrap: 'nowrap',
  },
  selectWrapper: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    gap: '1px',
  },
  select: {
    backgroundColor: 'transparent',
    marginTop: '6px',
    padding: '0px',
  },
  selectLabel: {
    color: 'custom.green',
    fontSize: '16px',
    fontWeight: '400px',
    display: 'flex',
  },
  homeCollectionContainer: {
    alignItems: 'center',
    gap: '13px',
    display: { xs: 'none', lg: 'flex' },
  },
  location: {
    height: '42px',
    width: '42px',
  },
  searchbar: {
    borderRadius: '8px',
  },
})
export default styles
