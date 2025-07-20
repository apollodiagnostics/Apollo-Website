import { Box } from '@mui/material'
import { getTranslations } from 'next-intl/server'
import { getShips } from '@query/ship'
import { ActionCard } from '@components/common'

export default async function Ships() {
  const t = await getTranslations('Resources')

  const { ships } = await getShips()

  return (
    <Box sx={{ p: 10 }}>
      <Box component="h2">{t('ships')}</Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {ships.map((item) => (
          <ActionCard
            key={item.id}
            customStyles={{
              wrapper: {
                flexBasis: '350px',
              },
            }}
            title={item.name}
            description={item.home_port}
            image={item.image}
          />
        ))}
      </Box>
    </Box>
  )
}
