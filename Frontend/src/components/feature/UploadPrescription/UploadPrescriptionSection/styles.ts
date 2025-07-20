import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    maxWidth: '1590px',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    padding: '3vw 6vw',
  },
  previewSection: {
    display: 'flex',
    flexDirection: 'column',
    width: { xs: '100%', md: '60%' },
    padding: '24px',
    gap: '32px',
  },
  cartIcon: {
    width: '24px',
    height: '24px',
  },
  authHeader: {
    display: 'flex',
    gap: '8px',
  },
  authHeading: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
  },
  preview: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '24px',
  },
  previewImage: {
    width: { xs: '100%', md: '360px' },
    height: { xs: '400px', md: '485px' },
    objectFit: 'cover',
    marginRight: '15px',
  },
  doAndDont: {
    listStyleType: 'disc',
    gap: '15px',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '24px',
    color: 'custom.lightSilver',
  },
  list: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '13px',
    lineHeight: '24px',
    color: '#666668',
    gap: '10px',
    display: 'list-item',
  },
  uploadSection: {
    width: { xs: '100%', md: '40%' },
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '15px', md: '32px' },
  },
  uploadOption: {
    width: '100%',
    display: 'flex',
    gap: { xs: '8px', md: '24px' },
    alignItems: 'center',
    padding: { xs: '8px 8px', md: '16px 24px' },
    cursor: 'pointer',
  },
  uploadOptionIcon: {
    width: '40px',
    height: '40px',
  },
  uploadOptionText: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '24px',
    maxWidth: { xs: '170px', md: '250px' },
    overflow: 'hidden',
    flex: '1',
  },
  uploadButton: {
    width: '100%',
    backgroundColor: 'primary.main',
    color: 'white',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '30px',
    padding: '20px 24px',
    '&:hover': {
      backgroundColor: 'primary.main',
    },
  },
  crossIcon: {
    height: '20px',
    width: '20px',
    alignSelf: 'right',
    cursor: 'pointer',
  },
  cameraLabel: {
    display: { xs: 'flex', md: 'none' },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
