import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  button: {
    height: '37px',
    padding: '10px',
    textWrap: 'nowrap',
    fontWeight: '600',
    borderRadius: '8px',
    width: 'fit-content',
  },
  icon: { fontSize: '18px', marginLeft: '9px' },
  loader: {
    color: 'common.white',
  },
  invertLoader: {
    color: 'primary.main',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
