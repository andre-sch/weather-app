import axios from "axios"

import { baseConfig } from "../baseConfig"
import type { availableRoutes, weatherMergeConfig } from "./requestConfig"

import type { ICurrentWeatherInfo } from "./data/ICurrentWeatherInfo"
import type { IWeatherForecastInfo } from "./data/IWeatherForecastInfo"

type weatherResponse<Type> = Promise<{ data: Type }>

type currentWeatherResponse = weatherResponse<ICurrentWeatherInfo>
type weatherForecastResponse = weatherResponse<IWeatherForecastInfo>

class WeatherService {
  private baseRequest = axios.create(baseConfig)

  private getWeatherInfo(url: availableRoutes, fromLocation: [number, number]) {
    const [latitude, longitude] = fromLocation
    const mergeConfig: weatherMergeConfig = {
      url, params: { latitude, longitude }
    }

    return this.baseRequest(mergeConfig)
  }

  public getCurrentWeatherInfo(fromLocation: [number, number]): currentWeatherResponse {
    return this.getWeatherInfo('/weather/current', fromLocation)
  }

  public getWeatherForecastInfo(fromLocation: [number, number]): weatherForecastResponse {
    return this.getWeatherInfo('/weather/forecast', fromLocation)
  }
}

export const weatherService = new WeatherService()
