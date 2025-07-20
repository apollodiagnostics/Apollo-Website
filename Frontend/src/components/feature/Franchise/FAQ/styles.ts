import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: { xs: '2vw 6vw', lg: '1vw 4vw' },
    maxWidth: '1590px',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    gap: '10px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
