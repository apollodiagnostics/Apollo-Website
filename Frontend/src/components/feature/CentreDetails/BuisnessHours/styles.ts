import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: { md: '1vw 6vw' },
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    gap: '13px',
    maxWidth: '1590px',
    margin: 'auto',
  },
  CentreDetailsCard: {
    minHeight: '273px',
    maxWidth: { md: '590px' },
  },
  timingWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    padding: '23px',
    gap: { xs: '23px' },
  },
  initialDaysWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '23px',
    paddingRight: { md: '33px' },
  },
  leftDaysWrapper: {
    width: '100%',
    paddingLeft: { md: '23px' },
    display: 'flex',
    flexDirection: 'column',
    gap: '23px',
    height: '180%',
  },
  rowWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timing: {
    color: 'custom.green',
    fontSize: '16px',
    fontWeight: '700',
    textWrap: 'nowrap',
  },
  divider: {
    height: '168px',
    display: { xs: 'none', sm: 'block' },
  },
  days: {
    fontWeight: '500',
    fontSize: '16px',
    color: '#666668',
  },
  parkingOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    gap: '9px',
    width: '50%',
    height: '213px',
    padding: '24px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
