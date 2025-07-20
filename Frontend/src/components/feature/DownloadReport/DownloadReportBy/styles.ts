import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '1590px',
  },
  popOverSection: {
    width: '89%',
    left: 0,
    right: 0,
    margin: 'auto',
    maxWidth: '1133px',
  },
  countryCode: {
    position: 'absolute',
    top: '11px',
    left: '20px',
    color: 'custom.grey',
    fontSize: '1rem',
  },
  popupWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '18px',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: { xs: 'wrap', md: 'unset' },
    gap: '13px',
    alignItems: 'center',
  },
  inputContainer: {
    height: 'unset',
  },
  input: {
    backgroundColor: 'custom.lightGrey',
    border: 'none',
  },
  phoneInput: {
    width: '100%',
  },
  button: {
    width: '100%',
    maxWidth: { md: '256px' },
    height: '44px',
  },
  heading: {
    fontWeight: '700',
    fontSize: '24px',
    color: 'custom.green',
  },
  inputBar: {
    fontSize: '14px',
  },
  generateOtpButton: {
    '&:hover': {
      color: 'common.white',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
