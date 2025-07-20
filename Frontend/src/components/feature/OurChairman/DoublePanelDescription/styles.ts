import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: { xs: '1vw 6vw', lg: '1vw 4vw' },
    maxWidth: '1590px',
    margin: 'auto',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { md: '40px' },
  },
  description: {
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'justify',
    color: 'custom.lightSilver',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
