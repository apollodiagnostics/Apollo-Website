import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    overflowY: 'scroll',
    gap: '16px',
    position: 'relative',
    padding: '100px 0 112px 0',
  },
  header: {
    zIndex: '1',
    position: 'fixed',
    borderTopLeftRadius: { md: '8px' },
    top: '0',
    height: '84px',
    width: '100%',
    display: 'flex',
    justifyContent: { xs: 'space-between', md: 'unset' },
    gap: { md: '411px' },
    alignItems: 'center',
    backgroundColor: 'common.white',
    padding: '24px',
    boxSizing: 'border-box',
    boxShadow: '0px -1px 19.6px 0px #00000017',
  },

  icon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  itemWrapper: {
    width: '100%',
    scrollbarWidth: 'none',
    backgroundColor: 'common.white',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },

  ctaWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    bottom: '0',
    width: { xs: '100vw', md: '506px' },
    gap: '35px',
    padding: '16px 20px',
    alignItems: 'center',
    backgroundColor: 'common.white',
    boxSizing: 'border-box',
    borderRadius: { md: '0px 0px 0px 8px' },
  },
  ctaButton: {
    width: '100%',
    fontSize: { md: '20px' },
    fontWeight: '600',
    height: { xs: '50px', md: '64px' },
  },

  ctaText: {
    display: 'inline',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '22px',
    color: 'custom.grey',
  },
  phoneNumberHighlight: {
    display: 'inline',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '22px',
    color: 'custom.grey',
  },
  itemHeading: {
    fontSize: '24px',
    fontWeight: '700',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
