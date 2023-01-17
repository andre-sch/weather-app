export const windDirections = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] as const
export type cardinalDirections = typeof windDirections[number]

export interface ICurrentWeatherInfo {
  coordinates: { latitude: number, longitude: number }
  condition: { description: string, imgPath: string }
  temperature: number
  feelsLike: number
  wind: { speed: number, direction: cardinalDirections }
  humidity: number
  visibility: number
}
