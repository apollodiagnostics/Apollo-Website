import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  OperationVariables,
  QueryOptions,
} from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // TODO: Replace with your GraphQL API URL
      // FIXME: Move this to env config for app
      uri: process.env.NEXT_PUBLIC_APOLLO_CLIENT_URL,
    }),
  })
})

export const client = getClient()

/**
 * Query data from Apollo Client
 */
export async function clientQuery<TData>(
  query: QueryOptions<OperationVariables, TData>
) {
  const { data } = await getClient().query(query)
  return data
}
