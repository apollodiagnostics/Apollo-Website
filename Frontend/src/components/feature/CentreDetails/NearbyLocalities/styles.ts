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
  localitiesWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    padding: '23px',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  localities: {
    borderRadius: '24px',
    padding: '8px 12px',
    color: 'custom.green',
    border: '1px solid',
    borderColor: 'custom.darkGrey',
    ':hover': {
      backgroundColor: 'primary.light',
      transition: '0.5s',
    },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
