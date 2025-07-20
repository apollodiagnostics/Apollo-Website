import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    maxWidth: '1590px',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
