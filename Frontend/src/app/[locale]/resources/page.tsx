import Link from 'next/link'
import { Box } from '@mui/material'
import { useTranslations } from 'next-intl'

export default function Product() {
  const t = useTranslations('Resources')

  return (
    <Box sx={{ p: 5 }}>
      <Link href="/resources/ships">
        <Box sx={{ color: 'primary.main' }}>{t('ships')}</Box>
      </Link>
      <Link href="/resources/rockets">
        <Box sx={{ color: 'primary.main' }}>{t('rockets')}</Box>
      </Link>
    </Box>
  )
}
