import axios from "axios"

import { baseConfig } from "../baseConfig"
import type { availableRoutes, weatherMergeConfig } from "./requestConfig"

import type { ICurrentWeatherInfo } from "./data/ICurrentWeatherInfo"
import type { IWeatherForecastInfo } from "./data/IWeatherForecastInfo"

type response<T> = Promise<{ data: T }>
type coordinates = [number, number]

export interface IWeatherInfo {
  current: ICurrentWeatherInfo
  forecast: IWeatherForecastInfo
}

class WeatherService {
  private baseRequest = axios.create(baseConfig)

  public async getWeatherInfo(fromLocation: coordinates): Promise<IWeatherInfo> {
    const currentInfo = (await this.getCurrentWeatherInfo(fromLocation)).data
    const forecastInfo = (await this.getWeatherForecastInfo(fromLocation)).data

    return { current: currentInfo, forecast: forecastInfo }
  }

  private getCurrentWeatherInfo(fromLocation: coordinates): response<ICurrentWeatherInfo> {
    return this.getWeather('/weather/current', fromLocation)
  }

  private getWeatherForecastInfo(fromLocation: coordinates): response<IWeatherForecastInfo> {
    return this.getWeather('/weather/forecast', fromLocation)
  }

  private getWeather(url: availableRoutes, fromLocation: coordinates) {
    const [latitude, longitude] = fromLocation
    const mergeConfig: weatherMergeConfig = {
      url, params: { latitude, longitude }
    }

    return this.baseRequest(mergeConfig)
  }
}

export const weatherService = new WeatherService()
