import type { AxiosRequestConfig } from "axios"
import type { RequestConfig } from "./externalRequestConfig"

type ILocationRequestConfig = RequestConfig<LocationBaseConfig, LocationMergedConfig>

class LocationRequestConfig implements ILocationRequestConfig {
  public baseConfig: LocationBaseConfig = {
    baseURL: 'https://api.geoapify.com/v1',
    params: {
      apiKey: process.env.EXTERNAL_LOCATION_API_KEY!,
      format: 'json'
    }
  }

  public mergeConfig = (cityInput: string) => ({
    url: '/geocode/autocomplete',
    params: { type: 'city', text: cityInput }
  })
}

interface LocationBaseConfig extends AxiosRequestConfig {
  baseURL: string,
  params: { apiKey: string, format: 'json' }
}

export interface LocationMergedConfig extends AxiosRequestConfig {
  url: string,
  params: { type: string, text: string }
}

export const locationRequestConfig = new LocationRequestConfig()
