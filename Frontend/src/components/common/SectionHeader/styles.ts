import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
  },
  label: {
    fontSize: '13px',
    fontWeight: '500',
    color: 'secondary.main',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  heading: {
    fontSize: { xs: '18px', md: '36px' },
    fontWeight: '600',
  },
  button: {
    border: { md: '1px solid' },
    fontSize: { md: '16px' },
    padding: { xs: '0px', md: '12px 16px' },
    height: { md: '48px' },
    width: { lg: '193px' },
  },
  description: {
    width: { xs: '100%', md: '40%' },
    display: { xs: 'none', md: 'block' },
    fontSize: { xs: '14px', md: '18px' },
    color: 'custom.grey',
    fontWeight: '500',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
