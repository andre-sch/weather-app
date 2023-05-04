import { type IWeatherRequestConfig, weatherBaseConfig } from "./weatherBaseRequestConfig"

type coordinates = [string, string]

class CurrentWeatherRequestConfig implements IWeatherRequestConfig {
  public baseConfig = weatherBaseConfig

  public mergeConfig = ([latitude, longitude]: coordinates) => ({
    url: '/2.5/weather',
    params: { lat: latitude, lon: longitude }
  })
}

export const currentWeatherRequestConfig = new CurrentWeatherRequestConfig()
