import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  outerWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    width: { xs: '80vw', md: '37vw' },
    maxWidth: '742px',
    boxShadow: 'none',
    backgroundColor: 'custom.lightGrey',
    borderRadius: '8px',
    border: '1px solid #dddddd',
  },
  button: {
    height: '42px',
    borderRadius: '0px 5px 5px 0px',
    boxShadow: 'none',
    backgroundColor: 'custom.lightMaroon',
    color: 'primary.main',
    '&:hover': {
      backgroundColor: 'custom.lightMaroon',
      boxShadow: 'none',
    },
  },
  viewAllButton: {
    height: '42px',
    borderRadius: '0px 5px 5px 0px',
    color: 'primary.main',
  },
  menu: {
    zIndex: '1000',
    position: 'absolute',
    overflow: 'auto',
    backgroundColor: 'common.white',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    width: { xs: '80vw', md: '37vw' },
    borderRadius: '0px 0px 12px 12px',
    maxHeight: { xs: '50vh', md: '80vh' },
    left: { xs: '10vw', md: 'unset' },
  },
  menuItemsWrapper: {
    width: '100%',
    left: '0',
    top: '100',
  },
  totalItemsWrapper: {
    display: 'flex',
    padding: '16px',
    justifyContent: 'space-between',
    borderBottom: '1px solid',
    borderColor: 'custom.lightGrey',
  },
  totalItems: {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
  itemSearch: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '16px',
    color: 'common.black',
  },
  totalSearchFound: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '18px',
    color: 'custom.grey',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '20px 14px',
  },
  card: {
    width: '100%',
    borderRadius: '0px',
  },
  inputbar: {
    borderRadius: '8px',
    flex: '1',
    marginLeft: '8px',
    '.MuiInputBase-input': {
      fontSize: '14px',
      fontWeight: '400',
      textOverflow: 'ellipsis',
    },
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
