export interface IWeatherForecastRawData {
  lat: number,
  lon: number,
  timezone_offset: number,
  hourly: hourlyRawData[],
  daily: dailyRawData[]
}

export interface hourlyRawData {
  dt: number,
  temp: number,
  weather: [{ id: number, description: string }],
  rain?: { '1h': number }
}

export interface dailyRawData {
  dt: number,
  sunrise: number,
  sunset: number,
  temp: { min: number, max: number },
  weather: [{ id: number, description: string }]
}
