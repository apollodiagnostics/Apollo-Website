import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  card: {
    width: '283px',
    margin: { xs: '32px', md: 'unset' },
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'primary.contrastText',
    boxShadow: '1.01px 1.01px 15.37px 0px #0000001C',
  },
  icons: {
    width: '85px',
    height: '85px',
  },
  labelWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heading: {
    marginTop: '33px',
    fontWeight: '700',
    fontSize: '22px',
    color: 'common.black',
    paddingLeft: '13px',
  },
  author: {
    marginLeft: '13px',
    fontWeight: '700',
    fontSize: '16px',
    color: 'custom.green',
  },
  iconLabel: {
    display: 'inline',
    marginLeft: '14px',
    fontSize: '13px',
    fontWeight: '500',
    color: 'custom.lightSilver',
    lineHeight: '24.5px',
  },
  description: {
    marginTop: '14px',
    paddingLeft: '13px',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '24.5px',
    color: 'custom.lighSilver',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '4',
    textOverflow: 'ellipsis',
  },
  button: {
    padding: '0px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
