import { createStyles, StylesClasses } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    width: { xs: '100%', md: 'fit-content' },
  },
  datePicker: {
    width: { xs: '100%', md: '261px' },
    height: '45px',
    border: 'none',
    backgroundColor: 'custom.lightGrey',
    '& .MuiOutlinedInput-root': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: '0px',
        outline: 'none',
      },
      width: '100%',
      height: '43px',
    },
    borderRadius: '8px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
