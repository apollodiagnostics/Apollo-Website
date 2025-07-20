import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    '& .mui-1160xiw-MuiPaper-root-MuiDrawer-paper': {
      borderRadius: '8px 0px 0px 8px',
      backgroundColor: 'white',
    },
  },
  infoWrapper: {
    width: { xs: '100vw', md: '506px' },
    height: '100%',
    borderRadius: '20px',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
