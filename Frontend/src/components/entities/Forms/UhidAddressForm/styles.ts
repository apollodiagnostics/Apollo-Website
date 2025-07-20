import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    position: 'relative',
    maxWidth: { md: '560px', xs: '415px' },
    width: { xs: 'unset', md: '100vw' },
    minWidth: '350px',
    height: '593px',
    borderRadius: '16px',
    backgroundColor: 'custom.lightGrey',
    gap: '10px',
  },
  dialog: {
    '& .MuiDialog-paper': {
      borderRadius: '16px',
    },
    zIndex: '16',
  },
  addressText: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'custom.greyish.400',
  },
  header: {
    borderTopLeftRadius: { md: '8px' },
    height: '59px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'common.white',
    padding: '24px',
    boxSizing: 'border-box',
    boxShadow: '0px -1px 19.6px 0px #00000017',
  },
  closeIcon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  heading: {
    color: 'custom.black',
    fontSize: '18px',
    fontWeight: '700',
  },
  infoWrapper: {
    width: '100%',
    height: '62px',
    backgroundColor: 'custom.lightYellow',
    paddingLeft: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '4px',
  },
  description: {
    fontSize: '12px',
    color: 'custom.lightSilver',
    fontWeight: '400',
  },
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '68px',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '13px 24px',
    backgroundColor: 'common.white',
  },
  button: {
    width: '83%',
    height: '42px',
    maxWidth: '172px',
  },
  buttonWrapper: {
    display: 'flex',
    gap: '16px',
    width: '100%',
    justifyContent: { xs: 'center', md: 'end' },
  },
  children: {
    width: '100%',
    backgroundColor: 'common.lightGrey',
    height: 'calc(100% - 131px)',
    overflow: 'auto',
  },
  addButtonContainer: {
    display: 'flex',
    justifyContent: 'end',
    backgroundColor: 'common.lightGrey',
    padding: '10px 26px',
  },
  checkboxContainer: {
    margin: '5px 0px',
    padding: '10px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
    backgroundColor: 'common.white',
  },
  address: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    display: 'flex',
    flex: '1',
    backgroundColor: 'common.white',
  },
  checkboxLabel: {
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',
  },
  fetchedAddressContainer: {
    backgroundColor: 'custom.lightGrey',
  },
  locationIcon: {
    color: 'custom.grey',
    marginRight: '20px',
  },
  deleteIcon: {
    cursor: 'pointer',
    color: 'custom.grey',
    marginRight: '20px',
    fontSize: '20px',
  },
  notFoundText: {
    padding: '20px',
    textAlign: 'center',
    width: '100%',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
