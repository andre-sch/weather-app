import { type IWeatherRequestConfig, weatherBaseConfig } from "./weatherBaseRequestConfig"

type coordinates = [string, string]

class WeatherForecastRequestConfig implements IWeatherRequestConfig {
  public baseConfig = weatherBaseConfig

  public mergeConfig = ([latitude, longitude]: coordinates) => ({
    url: '/3.0/onecall',
    params: {
      lat: latitude, lon: longitude,
      exclude: 'current,minutely,alerts'
    }
  })
}

export const weatherForecastRequestConfig = new WeatherForecastRequestConfig()
