import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    display: 'flex',
    gap: '24px 36px',
    flexWrap: 'wrap',
    maxWidth: '1590px',
    margin: 'auto',
    justifyContent: { xs: 'center', md: 'space-between' },
  },
  heading: {
    fontSize: { xs: '12px', md: '24px' },
    fontWeight: '500',
    color: '#033B49B2',
  },
  button: {
    border: { md: '1px solid' },
    fontSize: '16px',
    padding: '12px 16px',
    height: { md: '40px' },
    width: { lg: '193px' },
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: { xs: '20px', md: '40px', xl: '60px' },
    flexWrap: 'wrap',
    margin: 'auto',
    justifyContent: { xs: 'center', lg: 'space-evenly' },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
