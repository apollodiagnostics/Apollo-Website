import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    maxHeight: '199px',
    height: { xs: '115px', md: '200px' },
    marginTop: { xs: '73px', lg: '124px' },
    minHeight: '91px',

    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'cover',
    marginBottom: '14px',
  },
  innerWrapper: {
    maxWidth: '1540px',
    margin: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    justifyContent: 'center',
    alignItems: 'left',
    paddingLeft: { xs: '40px', md: '6vw', xl: '4vw' },
  },
  label: {
    fontSize: { xs: '20px', md: '42px' },
    fontWeight: '700',
    color: 'primary.contrastText',
  },
  breadcrumb: {
    color: 'primary.contrastText',
    fontSize: { xs: '10px', md: '12px' },
    fontWeight: '500',
    opacity: '70%',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
