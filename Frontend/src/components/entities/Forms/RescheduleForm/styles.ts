import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    position: 'relative',
    width: { xs: '100%', md: '792px' },
    height: '593px',
    borderRadius: '16px',
    backgroundColor: 'custom.lightGrey',
  },
  dialog: {
    '& .MuiDialog-paper': {
      borderRadius: '16px',
    },
  },
  header: {
    borderTopLeftRadius: { md: '8px' },
    height: '59px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: { md: '340px' },
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
    width: { xs: '121px', md: '179px' },
    height: '42px',
  },
  buttonWrapper: {
    display: 'flex',
    gap: '16px',
  },
  children: {
    width: '100%',
    backgroundColor: 'common.white',
    height: '77%',
    overflow: 'auto',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
