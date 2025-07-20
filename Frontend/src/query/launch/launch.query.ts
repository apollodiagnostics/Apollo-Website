import { gql } from '@apollo/client'

export const LAUNCH_QUERY = gql`
  query Launch($launchId: ID!) {
    launch(id: $launchId) {
      details
      id
      launch_year
      mission_id
      mission_name
    }
  }
`

export const LAUNCHES_QUERY = gql`
  query Launch($limit: Int) {
    launches(limit: $limit) {
      details
      id
      launch_year
      mission_id
      mission_name
    }
  }
`
