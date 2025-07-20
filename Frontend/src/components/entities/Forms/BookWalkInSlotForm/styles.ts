import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '13px', md: '24px' },
    width: '89%',
    padding: { xs: '16px 16px', md: '24px 36px' },
    borderRadius: '24px',
    marginTop: { xs: '-30px', md: '-40px' },
    marginX: 'auto',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    maxWidth: '1590px',
    margin: 'auto',
  },
  heading: {
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '36px',
  },
  formWrapper: {
    display: 'flex',
    width: { xs: '100%' },
    gap: '8px',
  },
  input: {
    height: '44px',
    backgroundColor: 'custom.lightGrey',
    border: 'none',
    borderBottom: 'none',
    '&:before, &:after': {
      display: 'none',
    },
    '&:hover:not(.Mui-disabled):before, &:hover:not(.Mui-disabled):after': {
      display: 'none',
    },
  },
  select: {
    height: '44px',
    backgroundColor: 'custom.lightGrey',
    border: 'none',
    borderRadius: '8px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    color: 'common.white',
    width: { xs: '100%', md: '235px' },
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '30px',
    paddint: { md: '7px 86px' },
    backgroundColor: 'primary.main',
    '&: hover': {
      backgroundColor: 'primary.main',
      color: 'common.white',
    },
  },
  datePickerWrapper: {
    width: '100%',
    height: '44px',
  },
  datePicker: {
    width: '100%',
  },
  autoCompleteTextField: {
    height: '43px',
    width: '100%',
    '.MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
