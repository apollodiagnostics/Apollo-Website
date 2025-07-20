import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  inputWrapper: {
    width: { md: '356px' },
  },
  wrapper: {
    display: 'flex',
    gap: '24px',
    flexDirection: { xs: 'column', lg: 'row' },
  },
  popOverSection: {
    width: '89%',
    maxWidth: '1206px',
    top: { md: '30%' },
    left: { md: '50%' },
    transform: { lg: 'translate(-50%, -50%)' },
    maxHeight: { lg: '164px' },
    padding: '3vw',
  },
  selectWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' },
    justifyContent: { md: 'space-between' },
    gap: { xs: '13px' },
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    fontSize: '19px',
  },
  select: {
    width: { lg: '203px' },
    backgroundColor: 'custom.lightGrey',
    borderRadius: '8px',
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width: { xs: '100%', md: '110px' },
    height: '44px',
  },
  heading: {
    fontWeight: '700',
    fontSize: '24px',
    color: 'custom.green',
  },
  inputBar: {
    width: '100%',
    maxHeight: '44px',
    maxWidth: { lg: '326px' },
    fontSize: '14px',
    backgroundColor: 'custom.lightGrey',
    borderRadius: '8px',
    border: 'none',
    '.mui-6abtrk-MuiInputBase-root-MuiInput-root ': {
      border: '0px solid ',
    },
    '.mui-6abtrk-MuiInputBase-root-MuiInput-root::before ': {
      border: '0px solid ',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
