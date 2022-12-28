import axios from "axios"

import { baseConfig, type availableRoutes, type requestMergeConfig } from "./requestConfig"

import type { ICurrentWeatherInfo } from "./data/ICurrentWeatherInfo"
import type { IWeatherForecastInfo } from "./data/IWeatherForecastInfo"

type weatherResponse<Type> = Promise<{ data: Type }>

type currentWeatherResponse = weatherResponse<ICurrentWeatherInfo>
type weatherForecastResponse = weatherResponse<IWeatherForecastInfo>

class WeatherService {
  private baseRequest = axios.create(baseConfig)

  private getWeatherInfo(url: availableRoutes, fromLocation: [number, number]) {
    const [latitude, longitude] = fromLocation
    const mergeConfig: requestMergeConfig = {
      url, params: { latitude, longitude }
    }

    return this.baseRequest(mergeConfig)
  }

  public getCurrentWeatherInfo(fromLocation: [number, number]): currentWeatherResponse {
    return this.getWeatherInfo('/current', fromLocation)
  }

  public getWeatherForecastInfo(fromLocation: [number, number]): weatherForecastResponse {
    return this.getWeatherInfo('/forecast', fromLocation)
  }
}

export const weatherService = new WeatherService()
