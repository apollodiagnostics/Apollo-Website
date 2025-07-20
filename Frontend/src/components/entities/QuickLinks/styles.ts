import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  container: {
    backgroundColor: '#F1EEEE',
    width: '100vw',
  },
  wrapper: {
    padding: { xs: '1vw 6vw', lg: '0.5vw 4vw' },
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    border: 'none',
    maxWidth: '1590px',
    margin: 'auto',
    boderBottom: '1px solid ',
  },
  headingWrapper: {
    padding: { md: 'none' },
  },
  mainWrapper: {
    maxWidth: '1590px',
    margin: 'auto',
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
    paddingTop: '12px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '400',
    ':hover': {
      color: 'common.black',
      transition: '0.5s',
    },
  },
  links: {
    textDecoration: 'none',
    fontSize: '14px',
    color: 'custom.green',
    fontWeight: '400',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
