import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    height: '48px',
  },
  selectWrapper: {
    height: '44px',
    width: '100%',
    borderRadius: '8px',
    justifyContent: 'space-between',
    backgroundColor: 'custom.lightGrey',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0px',
      outline: 'none',
    },
  },
  inputLabel: {
    width: '100%',
    display: 'flex',
    fontSize: { xs: '12px', md: '14px' },
    justifyContent: 'start',
    color: 'custom.grey',
  },
  options: {
    fontWeight: '500',
    lineHeight: '20px',
    backgroundColor: 'custom.lightGrey',
    fontSize: '14px',
    textAlign: 'center',
  },
  cursorWrapper: {
    cursor: 'pointer',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
