import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    maxHeight: '199px',
    height: '20vw',
    marginTop: { xs: '73px', lg: '124px' },
    minHeight: '91px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    justifyContent: 'center',
    alignItems: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'cover',
  },
  label: {
    fontSize: { xs: '20px', md: '45px', lg: '48px' },
    fontWeight: '700',
    color: 'primary.contrastText',
    marginLeft: '6vw',
  },
  breadcrumb: {
    color: 'primary.contrastText',
    fontSize: { xs: '10px', md: '12px' },
    fontWeight: '500',
    marginLeft: '6vw',
    opacity: '70%',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
