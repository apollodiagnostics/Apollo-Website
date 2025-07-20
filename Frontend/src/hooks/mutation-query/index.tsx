import { useState } from 'react'
import axios from 'axios'
import { dataClient } from '@libs/data-client'
import { ForceAny } from '@utils/typescript'

type Options<TRes, TError> = {
  onSuccess?: (data: TRes, headers?: ForceAny) => void
  onError?: (err: TError) => void
}

type MutationQueryProps<TRes, TError> = {
  url: string
  method: Extract<keyof typeof dataClient, 'put' | 'patch' | 'post'>
  options?: Options<TRes, TError>
  service: 'AXIOS' | 'DATA_CLIENT'
}

export const useMutationQuery = <TData, TRes, TError>({
  url,
  method,
  options,
  service,
}: MutationQueryProps<TRes, TError>) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const resetState = () => {
    setIsSuccess(false)
    setIsError(false)
  }

  const mutateAsync = async (data: TData, authBearerToken?: string) => {
    resetState()

    try {
      setIsLoading(true)
      const response =
        service === 'DATA_CLIENT'
          ? await dataClient[method]<TData, TRes>(url, data)
          : await axios.post(url, data, {
              headers: {
                Authorization: `Bearer ${authBearerToken}`,
                'Content-Type': 'application/json',
              },
            })
      const { data: responseData, headers } = response

      setIsSuccess(true)
      if (options && options.onSuccess) {
        options.onSuccess(responseData, headers)
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
    mutateAsync,
    isLoading,
    isError,
    isSuccess,
  }
}
