import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    paddingTop: '32px',
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
  },
  pages: {
    '& .MuiPaginationItem-root': {
      backgroundColor: 'common.white',
      color: 'black',
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      backgroundColor: 'primary.light',
      color: 'black',
      borderColor: 'primary.main',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
