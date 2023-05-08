import type { AxiosRequestConfig } from "axios"

interface ILocationRequestConfig {
  mergeConfig: (...args: any) => LocationMergedConfig
}

interface LocationMergedConfig extends AxiosRequestConfig {
  url: string
  params: { cityInput: string }
  signal?: AbortSignal
}


class LocationRequestConfig implements ILocationRequestConfig {
  public mergeConfig = (cityInput: string, abortSignal?: AbortSignal) => ({
    url: '/location/autocomplete',
    params: { cityInput },
    signal: abortSignal
  })
}

export const locationRequestConfig = new LocationRequestConfig()
