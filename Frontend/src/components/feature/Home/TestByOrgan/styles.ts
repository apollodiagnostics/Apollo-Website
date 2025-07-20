import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'custom.lightPink',
  },
  wrapper: {
    padding: { xs: '3vw 24px', md: '62px 6vw' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1590px',
    justifyContent: 'center',
    gap: '14px',
  },
  sectionHeaderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
  },
  heading: {
    fontWeight: '600',
    fontSize: '36px',
    lineHeight: '54px',
  },
  image: {
    height: { xs: '90px', md: '170px' },
    width: { xs: '90px', md: '170px' },
    img: {
      objectFit: 'contain',
    },
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  title: {
    textAlign: 'center',
    color: 'custom.darkSilver',
    fontSize: { xs: '16px', md: '24px' },
  },
  testContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: { xs: '20px', md: '29px' },
    justifyContent: { xs: 'space-between', md: 'center' },
    padding: { xs: '0px', md: '36px' },
  },
  test: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    fontSize: '16px',
    padding: '12 16px',
    height: { md: '48px' },
    width: { lg: '278px' },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
