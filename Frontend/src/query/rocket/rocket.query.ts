import { gql } from '@apollo/client'

export const ROCKETS_QUERY = gql`
  query Rockets {
    rockets {
      active
      boosters
      company
      cost_per_launch
      country
      description
      first_flight
      id
      name
      stages
      success_rate_pct
      type
      wikipedia
    }
  }
`

export const ROCKET_QUERY = gql`
  query Rocket($rocketId: ID!) {
    rocket(id: $rocketId) {
      active
      boosters
      company
      cost_per_launch
      country
      description
      first_flight
      id
      name
      stages
      success_rate_pct
      type
      wikipedia
    }
  }
`
