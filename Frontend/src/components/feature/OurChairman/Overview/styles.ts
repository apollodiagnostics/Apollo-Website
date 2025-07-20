import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '3vw 6vw',
    justifyContent: 'center',
    maxWidth: '1590px',
    margin: 'auto',
    flexDirection: { xs: ' column-reverse', md: 'row-reverse' },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
