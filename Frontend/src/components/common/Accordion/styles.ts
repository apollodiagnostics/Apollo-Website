import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    height: 'auto',
    transition: '1s',
    color: 'custom.bluishBlack',
  },
  toggleWrapper: {
    width: '100%',
    height: '64px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 16px',
    boxShadow: '0px 1px 10.8px 1px #76767630',
    cursor: 'pointer',
  },
  drawer: {
    width: '100%',
    padding: '16px 16px',
    textAlign: 'justify',
    fontWeight: '500',
    fontSize: { xs: '12px', md: '18px' },
    borderRadius: '0px 0px 12px 12px',
    transition: '1s',
    backgroundColor: 'primary.light',
    color: 'custom.bluishBlack',
    boxShadow: '1px 1px 10.8px 0px #76767630',
  },
  label: {
    color: 'custom.bluishBlack',
    fontSize: { xs: '14px', md: '18px' },
    fontWeight: '500',
  },
  icons: {
    width: '24px',
    height: '24px',
    color: 'primary.main',
    backgroundColor: 'primary.light',
    borderRadius: '50%',
    padding: '4px',
    boxSizing: 'content-box',
  },
  labelImage: {
    width: '24px',
    height: '24px',
    marginRight: '16px',
  },
  infoContainer: {
    display: 'flex',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
