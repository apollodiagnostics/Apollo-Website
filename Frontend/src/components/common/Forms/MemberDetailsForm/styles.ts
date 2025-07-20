import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    padding: '10px 26px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
  },
  inputWrapper: {
    width: { md: '356px' },
  },
  gender: {
    display: 'flex',
    gap: { xs: '4px', md: '24px' },
    alignItems: 'center',
  },
  label: {
    fontSize: '16px',
    fontWeight: '400',
    color: 'custom.lightSilver',
  },
  genderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  dobContainer: {
    width: { xs: '100%', md: '356px' },
  },
  datePickerWrapper: {
    width: '100%',
    height: '43px',
    marginTop: '8px',
    paddingRight: { xs: '0px', md: '16px' },
  },
  datePicker: {
    backgroundColor: 'common.white',
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      '& .MuiOutlinedInput-notchedOutline': {
        overflow: 'hidden',
        border: '1px solid common.black',
      },
      width: '100%',
      height: '43px',
    },
  },
  input: {
    border: '1px solid lightgray',
    '&: hover': {
      border: '1px solid black',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
