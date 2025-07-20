import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  mainWrapper: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    padding: { md: '62px 82px' },
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1590px',
    gap: '32px',
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
    width: { xs: '294px', md: 'unset' },
    padding: { xs: '0px', md: '0px 62px' },
  },
})

export type StyleClassNames = StylesClasses<typeof styles>

export default styles
