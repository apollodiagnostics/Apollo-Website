import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    margin: 'auto',
    padding: '16px 24px',
    backgroundColor: 'custom.lightGrey',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
