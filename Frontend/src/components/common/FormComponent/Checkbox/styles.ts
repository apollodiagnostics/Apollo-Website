import { StylesClasses, createStyles } from '@utils/styles'

export type StylesClassNames = StylesClasses<typeof styles>

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  input: {
    width: '100%',
    height: '43px',
    padding: '16px',
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
})

export default styles
