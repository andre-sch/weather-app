import type { AxiosRequestConfig } from "axios"
import type { RequestConfig } from "./externalRequestConfig"

export type IWeatherRequestConfig = RequestConfig<WeatherBaseConfig, WeatherMergedConfig>

interface WeatherBaseConfig extends AxiosRequestConfig {
  baseURL: string,
  params: { appid: string, units: string }
}

interface WeatherMergedConfig extends AxiosRequestConfig {
  url: string,
  params: {
    exclude?: string,
    lat: string, lon: string
  }
}

export const weatherBaseConfig: WeatherBaseConfig = {
  baseURL: 'https://api.openweathermap.org/data',
  params: {
    appid: process.env.EXTERNAL_WEATHER_API_KEY!,
    units: 'metric'
  }
}
