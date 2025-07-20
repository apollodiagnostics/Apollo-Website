import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  card: {
    textAlign: 'center',
    justifyContent: 'start',
    alignItems: 'center',
    maxWidth: '1590px',
  },
  container: {
    justifyContent: 'space-between',
    gap: '23px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
