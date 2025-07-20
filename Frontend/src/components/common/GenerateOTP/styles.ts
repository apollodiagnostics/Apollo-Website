import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    gap: '24px',
    backgroundColor: 'custom.white',
    flexDirection: {
      xs: 'column',
      md: 'row',
    },
  },
  countryCode: {
    position: 'absolute',
    top: '11px',
    left: '20px',
    color: 'custom.grey',
    fontSize: '1rem',
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    boxShadow: 'none',
    backgroundColor: 'custom.lightGrey',
    borderRadius: '8px',
  },
  inputBase: {
    marginLeft: '43px',
    flex: '1',
    fontSize: '16px',
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    paddingLeft: '10px',
  },
  button: {
    height: '100%',
    borderRadius: '0px 8px 8px 0px',
    backgroundColor: { xs: 'unset', md: 'primary.light' },
    color: 'primary.main',
    boxShadow: 'none',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
