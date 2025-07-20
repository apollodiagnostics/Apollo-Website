import { createStyles, StylesClasses } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  numberWrapper: {
    position: 'absolute',
    lineHeight: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  number: {
    textAlign: 'center',
    fontSize: { xs: '24px', md: '42px' },
    fontWeight: '500',
    color: 'common.white',
    lineHeight: { xs: '36px', md: '46px' },
    display: 'inline-block',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
