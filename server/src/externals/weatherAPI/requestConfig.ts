export type weatherRequestConfig = requestBaseConfig & requestMergeConfig

interface requestBaseConfig {
  baseURL: string,
  params: { appid: string | undefined, units: string }
}

export interface requestMergeConfig {
  url: string,
  params: { lat: string, lon: string, exclude?: string }
}

export const baseConfig: requestBaseConfig = {
  baseURL: 'https://api.openweathermap.org/data',
  params: {
    appid: process.env.WEATHER_APP_ID,
    units: 'metric'
  }
}
