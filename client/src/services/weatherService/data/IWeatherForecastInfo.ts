export interface IWeatherForecastInfo {
  coordinates: { latitude: number, longitude: number }
  rainAmount: { lastHour: number, next24h: number }
  hourly: HourlyInfo[]
  daily: DailyInfo[]
}

interface HourlyInfo {
  iconPath: string
  localTimestamp: number
  temperature: number
}

export interface DailyInfo {
  iconPath: string
  localTime: { noon: number, sunrise: number, sunset: number }
  temperature: { min: number, max: number }
}
