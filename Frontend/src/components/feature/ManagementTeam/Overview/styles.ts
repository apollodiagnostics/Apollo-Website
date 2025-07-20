import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '3vw 6vw',
    justifyContent: 'center',
    maxWidth: '1590px',
    flexDirection: { xs: 'column', md: 'row-reverse' },
    margin: 'auto',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
