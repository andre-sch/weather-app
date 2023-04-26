interface requestBaseConfig {
  baseURL: string,
  params: { appid: string | undefined, units: string }
}

export interface weatherMergeConfig {
  url: string,
  params: { lat: string, lon: string, exclude?: string }
}

export const baseConfig: requestBaseConfig = {
  baseURL: 'https://api.openweathermap.org/data',
  params: {
    appid: process.env.EXTERNAL_WEATHER_API_KEY,
    units: 'metric'
  }
}
