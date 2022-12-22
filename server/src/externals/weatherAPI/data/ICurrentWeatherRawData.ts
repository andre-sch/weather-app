export interface ICurrentWeatherRawData {
  coord: { lon: number, lat: number },
  weather: [{ id: number, description: string }],
  main: {
    temp: number,
    feels_like: number,
    humidity: number,
  },
  visibility: number,
  wind: { speed: number, deg: number},
  dt: number,
  sys: {
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number
}
