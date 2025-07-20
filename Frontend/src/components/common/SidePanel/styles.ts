import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    maxWidth: { md: '271px' },
    height: { xs: 'auto', md: 'fit-content' },
    borderRadius: '16px',
    border: '1px solid',
    margin: 'auto',
    borderColor: 'custom.darkGrey',
    padding: '8px 16px',
    backgroundColor: 'common.white',
  },
  mainWrapper: {},
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
