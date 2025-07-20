import { clientQuery } from '@libs/apollo-client'
import { RocketData, Rocket } from './rocket.model'
import { ROCKETS_QUERY } from './rocket.query'

export const getRockets = () =>
  clientQuery<RocketData>({
    query: ROCKETS_QUERY,
  })

export const getRocket = (rocketId: string) =>
  clientQuery<Rocket>({
    query: ROCKETS_QUERY,
    variables: { rocketId },
  })
