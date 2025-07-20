import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '3vw 6vw',
    display: 'flex',
    flexDirection: 'column',
    gap: '33px',
    maxWidth: '1590px',
  },
  accordionWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  label: {
    fontWeight: '700',
    color: 'custom.green',
    fontSize: '16px',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
