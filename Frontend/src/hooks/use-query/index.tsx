import { useState } from 'react'
import { dataClient } from '@libs/data-client'

type Options<TRes, TError> = {
  onSuccess?: (data: TRes) => void
  onError?: (err: TError) => void
}

type QueryProps<TRes, TError> = {
  url: string
  method: Extract<keyof typeof dataClient, 'get' | 'delete'>
  options?: Options<TRes, TError>
}

export const useQuery = <TData, TRes, TError>({
  url,
  method,
  options,
}: QueryProps<TRes, TError>) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const resetState = () => {
    setIsSuccess(false)
    setIsError(false)
  }

  const queryCall = async (params?: TData) => {
    resetState()

    try {
      setIsLoading(true)
      const { data: responseData } = await dataClient[method]<TRes>(url, {
        params,
      })
      setIsSuccess(true)
      if (options && options.onSuccess) {
        options.onSuccess(responseData)
      }
    } catch (err) {
      setIsError(true)
      if (options && options.onError) {
        options.onError(err as TError)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    queryCall,
    isLoading,
    isError,
    isSuccess,
  }
}
