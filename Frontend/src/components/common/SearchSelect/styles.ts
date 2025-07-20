import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  autoCompleteTextField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
      '& .MuiOutlinedInput-root': {
        paddingRight: 'unset !important',
      },
    },
  },
  searchCity: {
    width: '200px',
    '& .MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot': {
      paddingRight: '22px !important',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
