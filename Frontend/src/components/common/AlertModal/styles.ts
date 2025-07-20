import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    padding: '24px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    borderRadius: '16px',
    maxWidth: '371px',
    backgroundColor: 'common.white',
    alignItems: 'center',
  },
  buttonWrapper: {
    display: 'flex',
    gap: '8px',
  },
  inforContainer: {
    gap: '8px',
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
    fontsize: '5000px',
    lineHeight: '21px',
    color: 'custom.greyish.400',
    textAlign: 'center',
  },
  button: {
    // width: '100%',
    fontWeight: '700',
    fontsize: '14px',
    lineHeight: '21px',
    backgroundColor: 'primary.main',
    color: 'common.white',
    '&:hover': {
      backgroundColor: 'primary.main',
    },
  },
  infoButton: {
    fontWeight: '700',
    fontsize: '14px',
    lineHeight: '21px',
    backgroundColor: 'primary.light',
    color: 'primary.main',
    border: 'none',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
