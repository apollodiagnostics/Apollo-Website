import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    '& .swiper-button-prev , & .swiper-button-next': {
      display: { xs: 'none', md: 'flex' },
      alignItems: 'center',
      color: 'primary.main',
      backgroundColor: 'primary.light',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      ':after': {
        fontSize: '15px',
        fontWeight: 'bolder',
      },
    },
    '.swiper-button-prev': {
      marginLeft: '-9px',
    },
    '.swiper-button-next': {
      marginRight: '-10px',
    },
    '.swiper-wrapper': {
      height: '440px ',
    },
    '& .swiper-pagination-bullet-active': {
      backgroundColor: 'primary.main',
    },
  },
  cardWrapper: {
    width: '100%',
    minWidth: 'fit-content',
    display: 'flex',
    margin: 'auto',
    marginLeft: { md: '10px' },
    marginRight: { md: '18px' },
    gap: '10px',
    justifyContent: { xs: 'center', md: 'unset' },
  },
  image: {
    height: '100%',
    width: '100%',
    img: {
      objectFit: 'cover',
    },
    borderRadius: '24px',
    overflow: 'hidden',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
