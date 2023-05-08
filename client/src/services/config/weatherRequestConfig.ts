interface IWeatherRequestConfig {
  mergeConfig: (...args: any) => WeatherMergedConfig
}

interface WeatherMergedConfig {
  url: string,
  params: {
    latitude: number,
    longitude: number
  }
}

type coordinates = [number, number]

class CurrentWeatherRequestConfig implements IWeatherRequestConfig {
  public mergeConfig = ([latitude, longitude]: coordinates) => ({
    url: '/weather/current',
    params: { latitude, longitude }
  })
}

class WeatherForecastRequestConfig implements IWeatherRequestConfig {
  public mergeConfig = ([latitude, longitude]: coordinates) => ({
    url: '/weather/forecast',
    params: { latitude, longitude }
  })
}

export const currentWeatherRequestConfig = new CurrentWeatherRequestConfig()
export const weatherForecastRequestConfig = new WeatherForecastRequestConfig()
