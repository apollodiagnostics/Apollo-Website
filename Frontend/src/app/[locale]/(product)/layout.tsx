import { Box } from '@mui/material'
import { useTranslations } from 'next-intl'

type Props = Readonly<{
  children: React.ReactNode
}>

export default function ProductLayout({ children }: Props) {
  const t = useTranslations('Product')

  return (
    <Box sx={{ p: 5 }}>
      <Box component="h1">{t('title')}</Box>
      <Box component="p">{t('description')}</Box>
      {children}
    </Box>
  )
}
