import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '8vw',
  },
  childrenWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2vw',
    flexWrap: 'wrap',
  },
  card: {
    width: { xs: '100%', md: '100%' },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
