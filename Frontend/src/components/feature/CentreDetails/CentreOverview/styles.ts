import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: { md: '1vw 6vw' },
    justifyContent: 'center',
    maxWidth: '1590px',
    margin: 'auto',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
