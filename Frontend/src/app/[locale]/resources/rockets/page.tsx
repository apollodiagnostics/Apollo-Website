import { Box } from '@mui/material'
import { getTranslations } from 'next-intl/server'
import { getRockets } from '@query/rocket'
import { BasicCard } from '@components/common'

export default async function Rockets() {
  const t = await getTranslations('Resources')

  const { rockets } = await getRockets()

  return (
    <Box sx={{ p: 10 }}>
      <Box component="h2">{t('rockets')}</Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {rockets.map((item) => (
          <BasicCard
            key={item.id}
            heading={`First flight: ${item.first_flight}`}
            link={item.wikipedia}
            title={item.name}
            description={item.description}
            subTile={item.id}
          />
        ))}
      </Box>
    </Box>
  )
}
