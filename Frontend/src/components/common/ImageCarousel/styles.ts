import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    '& .swiper-button-prev , & .swiper-button-next': {
      color: 'primary.main',
      backgroundColor: 'primary.light',
      width: { xs: '25px', md: '40px' },
      height: { xs: '25px', md: '40px' },
      borderRadius: { xs: '6px', md: '24px' },
      ':after': {
        fontSize: '15px',
        fontWeight: 'bolder',
      },
    },
    '& .swiper-pagination-bullet-active': {
      backgroundColor: 'primary.main',
    },
  },
  imageWrapper: {
    height: '33vw',
    maxHeight: '454px',
    width: { xs: '88%', md: '90%' },
    backgroundColor: 'grey',
    margin: 'auto',
    borderRadius: '24px',
    img: {
      objectFit: 'cover',
    },
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
