import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  hcWrapper: {
    flexDirection: {
      xs: 'column',
      md: 'column',
    },
    borderRadius: '8px',
    padding: '12px 16px',
    backgroundColor: 'common.white',
  },
  mainWrapper: {
    gap: '24px',
    backgroundColor: 'custom.white',
    flexDirection: {
      xs: 'column',
      md: 'row',
    },
  },
  countryCode: {
    position: 'absolute',
    top: '11px',
    left: '20px',
    color: 'custom.grey',
    fontSize: '1rem',
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    boxShadow: 'none',
    backgroundColor: 'custom.lightGrey',
    borderRadius: '8px',
  },
  inputBase: {
    marginLeft: '43px',
    flex: '1',
    fontSize: '16px',
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    paddingLeft: '10px',
  },
  button: {
    height: '100%',
    borderRadius: '0px 8px 8px 0px',
    backgroundColor: { xs: 'unset', md: 'primary.light' },
    color: 'primary.main',
    boxShadow: 'none',
    ':hover': {
      color: 'common.white',
    },
  },
  creditsWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: '8px',
    padding: '12px 16px',
    backgroundColor: 'common.white',
  },
  healthCreditsWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  totalCredits: {
    display: 'flex',
    flexDirection: 'column',
  },
  healthCredits: {
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '23px',
  },
  availableCredits: {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '22px',
    whiteSpace: 'nowrap',
  },
  checkCredits: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    width: '50%',
    justifyContent: 'end',
  },
  availCredits: {
    fontWeight: '700',
    fontSize: { xs: '16px', md: '18px' },
    lineHeight: '16px',
  },
  creditsCheckbox: {
    padding: '0px',
    height: '16px',
    width: '16px',
    color: 'primary.light',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
