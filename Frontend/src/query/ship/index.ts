import { clientQuery } from '@libs/apollo-client'
import { Ship, ShipData } from './ship.model'
import { SHIPS_QUERY, SHIP_QUERY } from './ship.query'

export const getShips = () =>
  clientQuery<ShipData>({
    query: SHIPS_QUERY,
  })

export const getShip = (shipId: string) =>
  clientQuery<Ship>({
    query: SHIP_QUERY,
    variables: { shipId },
  })
