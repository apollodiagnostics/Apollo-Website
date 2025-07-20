import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: { xs: '3vw  6vw', md: '1vw 6vw', lg: '1vw 4vw' },
    justifyContent: 'center',
    maxWidth: '1590px',
    margin: 'auto',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
