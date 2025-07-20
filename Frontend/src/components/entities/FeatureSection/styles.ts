import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    padding: { md: '24px 36px' },
  },
  wrapper: {
    padding: '6vw',
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
