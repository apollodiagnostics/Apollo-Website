import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getUserFromCookies } from '@utils/auth'
import { NoTrailingSegment } from '@utils/typescript'

/**
 * Client Instance
 * @description Main axios instance for API calls with interceptors
 */
const clientInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HEADER,
  headers: {
    'Content-Type': 'application/json',
    'Content-Security-Policy': "default-src 'self'",
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
  },
})

// clientInstance.interceptors.request.use((config) => {
//   const { userDetails } = useUserState()

//   // eslint-disable-next-line no-param-reassign
//   config.headers['x-access-token'] = `Bearer ${userDetails?.accessToken}`
//   return config
// })

type ParamConfig = Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>

export function getClient<BaseSegment extends string>(
  baseSegment = '' as NoTrailingSegment<'/', BaseSegment>
) {
  const getRequestConfig = async ({
    url,
    ...restConfig
  }: AxiosRequestConfig) => {
    const userDetails = await getUserFromCookies()
    if (userDetails && userDetails.accessToken)
      return {
        url: `${baseSegment}${url ? `/${url}` : ''}`,
        ...restConfig,
        headers: {
          Authorization: `Bearer ${userDetails.accessToken}`,
        },
      }
    return {
      url: `${baseSegment}${url ? `/${url}` : ''}`,
      ...restConfig,
    }
  }

  return {
    /**
     * To fetch a resource
     * @param url api path
     * @param paramConfig axios parameters
     */
    get: async <TRes = unknown>(url: string, paramConfig: ParamConfig = {}) =>
      clientInstance
        .request<unknown, AxiosResponse<TRes>>(
          await getRequestConfig({ url, method: 'GET', ...paramConfig })
        )
        .then((response) => {
          return response
        })
        .catch((err) => {
          throw err
        }),

    /**
     * To create a resource
     * @param url api path
     * @param data Body to send
     * @param paramConfig axios parameters
     */
    post: async <TData = unknown, TRes = unknown>(
      url: string,
      data: TData,
      paramConfig: ParamConfig = {}
    ) =>
      clientInstance
        .request<TData, AxiosResponse<TRes>>(
          await getRequestConfig({ url, method: 'POST', data, ...paramConfig })
        )
        .then((response) => {
          return response
        })
        .catch((err) => {
          throw err
        }),

    /**
     * To update a full data of resource
     * @param url api path
     * @param data Body to send
     * @param paramConfig axios parameters
     */
    put: async <TData = unknown, TRes = unknown>(
      url: string,
      data: TData,
      paramConfig: ParamConfig = {}
    ) =>
      clientInstance
        .request<TData, AxiosResponse<TRes>>(
          await getRequestConfig({ url, method: 'PUT', data, ...paramConfig })
        )
        .then((response) => {
          return response
        })
        .catch((err) => {
          throw err
        }),

    /**
     * To update partial data of a resource
     * @param url api path
     * @param data Body to send
     * @param paramConfig axios parameters
     */
    patch: async <TData = unknown, TRes = unknown>(
      url: string,
      data: TData,
      paramConfig: ParamConfig = {}
    ) =>
      clientInstance
        .request<TData, AxiosResponse<TRes>>(
          await getRequestConfig({ url, method: 'PATCH', data, ...paramConfig })
        )
        .then((response) => {
          return response
        })
        .catch((err) => {
          throw err
        }),

    /**
     * To delete the resource
     * @param url api path
     * @param paramConfig axios parameters
     */
    delete: async <TRes = unknown>(
      url: string,
      paramConfig: ParamConfig = {}
    ) =>
      clientInstance
        .request<unknown, AxiosResponse<TRes>>(
          await getRequestConfig({ url, method: 'DELETE', ...paramConfig })
        )
        .then((response) => {
          return response
        })
        .catch((err) => {
          throw err
        }),
  }
}

export type IClient = ReturnType<typeof getClient>

export const dataClient = getClient('/v1')
