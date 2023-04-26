type weatherDataTypes = 'current' | 'forecast'
export type availableRoutes = `/weather/${weatherDataTypes}`

export interface weatherMergeConfig {
  url: availableRoutes,
  params: {
    latitude: number,
    longitude: number
  }
}
