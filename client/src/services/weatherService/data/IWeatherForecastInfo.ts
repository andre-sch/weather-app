export interface IWeatherForecastInfo {
  coordinates: { latitude: number, longitude: number }
  rainAmount: { lastHour: number, next24h: number }
  hourly: HourlyInfo[]
  daily: DailyInfo[]
}

interface HourlyInfo {
  condition: { description: string, iconPath: string }
  localTimestamp: number
  temperature: number
}

export interface DailyInfo {
  condition: { description: string, iconPath: string }
  localTime: { noon: number, sunrise: number, sunset: number }
  temperature: { min: number, max: number }
}
