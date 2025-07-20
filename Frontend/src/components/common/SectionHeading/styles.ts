import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: 'max-content',
    padding: '6px 24px',
    borderRadius: '33px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'secondary.light',
  },
  label: {
    fontSize: '13px',
    fontWeight: '700',
    color: 'secondary.main',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
