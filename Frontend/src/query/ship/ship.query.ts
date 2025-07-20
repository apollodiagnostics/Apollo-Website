import { gql } from '@apollo/client'

export const SHIPS_QUERY = gql`
  query Ships {
    ships {
      id
      model
      home_port
      name
      type
      status
      image
    }
  }
`

export const SHIP_QUERY = gql`
  query Ship($shipId: ID!) {
    ship(id: $shipId) {
      id
      model
      home_port
      name
      type
      status
      image
    }
  }
`
