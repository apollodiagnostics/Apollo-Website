import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    padding: '26px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    backgroundColor: 'common.white',
  },
  inputWrapper: {
    width: '100%',
  },
  gender: {
    display: 'flex',
    gap: { xs: '8px', md: '24px' },
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
  addAddressText: {
    width: '100%',
    fontWeight: '600',
    fontSize: '18px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
