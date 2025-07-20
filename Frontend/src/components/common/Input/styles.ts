import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    borderRadius: '8px',
    padding: '8px 16px 8px 60px',
    width: '100%',
    height: { md: '44px' },
    backgroundColor: 'custom.lightGrey',
    color: 'custom.grey',
    '&.MuiInputBase-root.MuiInput-root::before': {
      borderBottom: 'none !important',
    },
    '&.MuiInputBase-input-MuiInput-input ': {
      color: 'custom.grey',
    },
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
  helperText: {
    fontSize: '12px',
    fontWeight: '400',
    color: 'custom.grey',
    marginTop: '12px',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
