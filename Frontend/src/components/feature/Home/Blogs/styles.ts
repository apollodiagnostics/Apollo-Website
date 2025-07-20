import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    margin: 'auto',
  },
  wrapper: {
    padding: { xs: '3vw 1vw', md: '62px 6vw', lg: '62px 4vw' },
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1590px',
    margin: 'auto',
    gap: { xs: '14px', md: '32px' },
    '& .swiper-pagination-bullet-active': {
      backgroundColor: 'primary.main',
    },
    '.swiper-wrapper': {
      height: '440px ',
    },
  },
  heading: {
    fontSize: { xs: '24px', md: '36px' },
    fontWeight: '700',
    color: 'custom.green',
  },
  headWrapper: {
    width: '100%',
    display: 'flex',
    paddingLeft: '24px',
    paddingRight: { md: '24px' },
    justifyContent: 'space-between',
  },
  sectionHeading: {
    width: 'fit-content',
    padding: '16px',
    marginLeft: '24px',
    backgroundColor: 'secondary.light',
    color: 'secondary.main',
    height: '30px',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '33px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '100%',
    '& .swiper-button-prev , & .swiper-button-next': {
      color: 'primary.main',
      display: { xs: 'none', md: 'flex' },
      backgroundColor: 'primary.light',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      ':after': {
        fontSize: '15px',
        fontWeight: 'bolder',
      },
    },
  },
  card: {
    width: '273px',
    // height: '315px',
  },
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
