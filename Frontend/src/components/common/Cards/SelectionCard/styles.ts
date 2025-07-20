import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: { xs: '111px', sm: '256px' },
    height: { xs: '137px', sm: '256px' },
    borderRadius: '16px',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    width: '100%',
    height: { xs: '111px', sm: '100%' },
  },
  tag: {
    textDecorationLine: 'none',
    margin: '9px auto',
    width: { xs: '111px', sm: '218px' },
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    height: { sm: '34px' },
    position: { sm: 'absolute' },
    bottom: '16px',
    left: '31px',
    textWrap: { xs: 'wrap' },
    textAlign: 'center',
    backgroundColor: { sm: 'primary.contrastText' },
    color: 'common.black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: { sm: '33px' },
    fontSize: { xs: '12px', sm: '16px' },
    fontWeight: { xs: '500', sm: '500', md: '500' },
    textDecoration: 'none',
  },
  link: {},
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
