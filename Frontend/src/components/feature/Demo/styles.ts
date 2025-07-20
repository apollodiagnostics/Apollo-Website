import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    p: 10,
    fontSize: '14px',
  },

  container: {
    bgcolor: 'custom.main',
    p: 10,
    fontSize: '32px',
    height: '300px',
    overflow: 'auto',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
