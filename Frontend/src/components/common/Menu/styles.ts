import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  button: {
    fontSize: '16px',
    fontWeight: '400',
    textWrap: 'nowrap',
    height: '100%',
    borderRadius: '8px 8px 0px 0px',
    color: 'custom.green',
    ':hover': {
      backgroundColor: 'custom.lightMaroon',
      color: 'primary.main',
      fontWeight: '400',
    },
  },
  personIcon: {
    fontSize: '34px',
    borderRadius: '50%',
    color: 'primary.main',
    backgroundColor: 'primary.light',
    cursor: 'pointer',
  },
  groupOptionsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '6px',
  },
  groupOptions: {
    width: '100%',
    height: '100%',
    borderRadius: '16px',
  },
  options: {
    borderTop: '6px solid',
    borderColor: 'custom.lightMaroon',
    maxHeight: '239px',
    width: 'max-content',
    minWidth: '196px',
    borderRadius: '0px 0px 12px 12px',
    position: 'absolute',
    top: '61px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flexWrap: 'wrap',
    zIndex: '5',
    scrollbarWidth: 'none',
    fontSize: '15px',
    backgroundColor: 'common.white',
    boxShadow: '0px 9px 4px 0px #0000001F',
    padding: '13px',
    boxSizing: 'border-box',
  },
  menuWrapper: {
    position: 'relative',
    height: '100%',
  },
  menuItem: {
    width: '100%',
    padding: '6px',
    height: '39px',
    display: 'flex',
    alignItems: 'center',
    color: 'custom.lightBlack',
    backgroundColor: 'primary .white',
    ':hover': {
      color: 'primary.main',
    },
  },
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: 0,
    minWidth: 180,
    color: 'common.black',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {},
  },
  icon: {
    marginLeft: '-5px',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
