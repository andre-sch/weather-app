import axios from "axios"

import { baseConfig } from "../config/baseRequestConfig"
import { AxiosErrorHandling } from "../axiosErrorHandling"
import { currentWeatherRequestConfig, weatherForecastRequestConfig } from "../config/weatherRequestConfig"

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
  private errorHandling = new AxiosErrorHandling(this.baseRequest)

  constructor() { this.errorHandling.preset() }

  public async getWeatherInfo(fromLocation: coordinates): Promise<IWeatherInfo> {
    const currentInfo = (await this.getCurrentWeatherInfo(fromLocation)).data
    const forecastInfo = (await this.getWeatherForecastInfo(fromLocation)).data

    return { current: currentInfo, forecast: forecastInfo }
  }

  private getCurrentWeatherInfo(fromLocation: coordinates): response<ICurrentWeatherInfo> {
    const additionalConfig = currentWeatherRequestConfig.mergeConfig(fromLocation)
    return this.baseRequest(additionalConfig)
  }

  private getWeatherForecastInfo(fromLocation: coordinates): response<IWeatherForecastInfo> {
    const additionalConfig = weatherForecastRequestConfig.mergeConfig(fromLocation)
    return this.baseRequest(additionalConfig)
  }
}

export const weatherService = new WeatherService()
