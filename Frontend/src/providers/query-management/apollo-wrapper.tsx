'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev'
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'
// import { setVerbosity } from 'ts-invariant'

if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
  // setVerbosity('debug')
  loadDevMessages()
  loadErrorMessages()
}

// FIXME: TODO: Error handle when wrong query is passed

function makeClient() {
  const httpLink = new HttpLink({
    // uri: 'https://spacex-production.up.railway.app/',
    uri: process.env.NEXT_PUBLIC_APOLLO_CLIENT_URL,
  })

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  })
}

// README: Playground
// https://studio.apollographql.com/public/SpaceX-pxxbxen/variant/current/explorer

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
