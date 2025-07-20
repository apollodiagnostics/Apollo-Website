import { Box } from '@mui/material'
import { FranchiseCard, FranchiseCardData } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type ApolloOfferingSectionProps = {
  cardData: FranchiseCardData[]
}

export function ApolloOfferingSection({
  cardData,
}: ApolloOfferingSectionProps) {
  const styles = getStyles(defaultStyles)
  return (
    <Box>
      {cardData.map((item) => (
        <FranchiseCard
          {...item}
          key={item.heading}
          customStyles={{
            mainWrapper: {
              ...styles('mainWrapper').sx,
            },
          }}
        />
      ))}
    </Box>
  )
}
