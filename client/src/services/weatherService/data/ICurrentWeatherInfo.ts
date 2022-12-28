type cardinalDirections = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW'

export interface ICurrentWeatherInfo {
  coordinates: { latitude: number, longitude: number }
  condition: { description: string, imgPath: string }
  localTime: { sunrise: number, sunset: number }
  temperature: number
  feelsLike: number
  wind: { speed: number, direction: cardinalDirections }
  humidity: number
  visibility: number
}
