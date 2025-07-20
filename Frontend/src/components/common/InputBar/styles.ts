import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    boxShadow: 'none',
    backgroundColor: 'custom.lightGrey',
    height: '45px',
    borderRadius: '8px',
  },
  inputBase: {
    marginLeft: { xs: '13px', md: '8px' },
    flex: '1',
    fontSize: { xs: '12px', md: '14px' },
  },
  button: {
    height: '100%',
    borderRadius: '0px 8px 8px 0px',
    backgroundColor: { xs: 'unset', md: 'primary.light' },
    color: 'primary.main',
    boxShadow: 'none',
  },
  iconButton: {
    padding: '10px',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
