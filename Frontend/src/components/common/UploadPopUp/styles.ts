import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    borderRadius: '16px',
    maxWidth: '480px',
  },
  inforContainer: {
    gap: '8px',
    padding: '0px 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '64px',
    height: '64px',
  },
  heading: {
    fontWeight: '700',
    fontsize: '24px',
    lineHeight: '32px',
  },
  description: {
    fontWeight: '400',
    fontsize: '14px',
    lineHeight: '21px',
    color: 'custom.darkSilver',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    fontWeight: '700',
    fontsize: '14px',
    lineHeight: '21px',
    backgroundColor: 'primary.main',
    color: 'common.white',
    '&:hover': {
      backgroundColor: 'primary.main',
    },
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '10px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
