import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '80%',
  },
  heading: {
    fontSize: { xs: '20px', md: '36px' },
    lineHeight: '54px',
    fontWeight: '700',
    marginBottom: { xs: '16px', md: '54px' },
  },
  image: {
    img: {
      width: '45px',
      height: '45px',
    },
    marginBottom: '34px',
    display: { xs: 'none', md: 'block' },
  },
  description: {
    fontSize: { xs: '14px', md: '32px' },
    lineHeight: { xs: '21px', md: '42px' },
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: { xs: '12px', md: '34px' },
    fontStyle: 'italic',
  },
  name: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '600',
  },
  address: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: '400',
    color: '#52525B',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
