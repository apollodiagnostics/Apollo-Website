import { StylesClasses, createStyles } from '@utils/styles'

export type StylesClassNames = StylesClasses<typeof styles>

const styles = createStyles({
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    '.MuiOutlinedInput-root': {
      height: '43px',
      borderRadius: '8px',
    },
  },
  input: {
    width: '100%',
    height: '43px',
    border: '1px solid',
    borderColor: 'common.slightGrey',
    borderRadius: '8px',
    boxShadow: 'none',
    overflow: 'hidden',
  },
  label: {
    fontSize: '16px',
    fontWeight: '400',
    color: 'custom.lightSilver',
  },
  helperText: {
    fontSize: '12px',
    fontWeight: '400',
    color: 'custom.lightSilver',
    marginTop: '-4px',
  },
  errorText: {
    fontSize: '12px',
    fontWeight: '500',
    color: 'error.main',
    marginTop: '-4px',
  },
  textField: { height: '43px', borderRadius: '8px', width: '100%' },
  autoComplete: { height: '43px', borderRadius: '8px', width: '100%' },
})

export default styles
