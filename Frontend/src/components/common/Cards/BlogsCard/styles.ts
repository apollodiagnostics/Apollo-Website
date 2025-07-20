import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  image: {
    borderRadius: '16px',
    height: '199px',
    width: '269px',
    overflow: 'hidden',
    img: {
      objectFit: 'cover',
    },
  },
  card: {
    width: '289px',
    borderRadius: '16px',
    padding: '9px',
    border: '1px solid',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'common.white',
    gap: '20px',
    borderColor: 'custom.dullPink',
  },
  headingWrapper: {},
  heading: {
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '24px',
    height: '48px',
    width: '269px',
    color: 'custom.green',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '2',
  },
  description: {
    fontWeight: '400',
    fontSize: '13px',
    height: '48px',
    width: '269px',
    lineHeight: '23px',
    color: 'custom.lightSilver',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '2',
    overflow: 'hidden',
  },
  descriptionWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  labelWrapper: {
    width: '100%',
    display: 'flex',
    gap: '9px',
    marginBottom: '9px',
  },
  label: {
    color: 'secondary.main',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',
  },
  button: {
    padding: '0px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
