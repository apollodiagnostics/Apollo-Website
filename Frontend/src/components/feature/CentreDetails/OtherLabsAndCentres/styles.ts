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
  CentreDetailsCard: {},
  citiesWrapper: {
    width: { sm: '50%' },
    display: 'flex',
    flexDirection: 'column',
    padding: '23px',
    gap: '6px',
    flexWrap: 'wrap',
    height: { md: '139px' },
  },
  rowWrapper: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  cities: {
    color: 'primary.main',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
