interface requestBaseConfig { baseURL: string }

export const baseConfig: requestBaseConfig = {
  baseURL: import.meta.env.VITE_WEATHER_SERVER_URL
}

export type availableRoutes = '/current' | '/forecast'

export interface requestMergeConfig {
  url: availableRoutes,
  params: {
    latitude: number,
    longitude: number
  }
}
