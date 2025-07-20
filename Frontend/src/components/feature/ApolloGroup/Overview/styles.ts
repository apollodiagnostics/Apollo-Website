import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: { xs: '3vw 6vw', md: '1vw 6vw' },
    justifyContent: 'center',
    maxWidth: '1590px',
    margin: 'auto',
    flexDirection: { xs: 'column', md: 'row-reverse' },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
