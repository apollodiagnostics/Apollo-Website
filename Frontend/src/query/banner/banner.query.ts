import { gql } from '@apollo/client'

export const BANNER_QUERY = gql`
  query Rocket($pageName: string!) {
    rocket(pageName: $pageName) {
      image
      heading
    }
  }
`
