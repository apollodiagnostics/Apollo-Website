import { Box } from '@mui/material'
import { useTranslations } from 'next-intl'

export default function AiChatBot() {
  const t = useTranslations('Product')

  return (
    <Box sx={{ p: 10 }}>
      <Box component="h2">{t('ai-chatbot')}</Box>
    </Box>
  )
}
