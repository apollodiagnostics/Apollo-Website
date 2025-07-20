import { useSuspenseQuery } from '@apollo/client'
import { Launch, LaunchData } from './launch.model'
import { LAUNCHES_QUERY, LAUNCH_QUERY } from './launch.query'

export const useLaunchQuery = (launchId: string) => {
  /**
   * For client side Fetching data using useSuspenseQuery hook
   */
  const { data } = useSuspenseQuery<Launch>(LAUNCH_QUERY, {
    variables: {
      launchId,
    },
  })

  return { launchData: data }
}

export const useLaunchesQuery = (limit = 10) => {
  const {
    data: { launches },
  } = useSuspenseQuery<LaunchData>(LAUNCHES_QUERY, {
    variables: {
      limit,
    },
  })

  return { launches }
}
