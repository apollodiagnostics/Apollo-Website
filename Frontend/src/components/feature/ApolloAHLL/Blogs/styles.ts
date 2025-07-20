import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '1vw 6vw',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '1590px',
  },
  heading: {
    marginBottom: '34px',
    fontSize: { xs: '24px', md: '36px' },
    fontWeight: '700',
    color: 'custom.green',
  },
  headWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  sectionHeading: {
    width: '91px',
    backgroundColor: 'secondary.light',
    color: 'secondary.main',
    height: '30px',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '33px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    overflow: 'scroll',
    scrollbarWidth: 'none',
    gap: '30px',
    padding: '20px 0px',
  },
  card: {
    width: { xs: '100%', md: '297px' },
    minWidth: '297px',
    backgroundColor: 'primary.contrastText',
    padding: '13px',
    boxShadow: '0.77px 0.77px 11.65px 0px #0000001C',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
