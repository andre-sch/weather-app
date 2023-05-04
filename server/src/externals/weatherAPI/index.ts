import axios from "axios"

import { weatherBaseConfig } from "../config/weatherBaseRequestConfig"
import { currentWeatherRequestConfig } from "../config/weatherCurrentRequestConfig"
import { weatherForecastRequestConfig } from "../config/weatherForecastRequestConfig"

import type { ICurrentWeatherRawData } from "./data/ICurrentWeatherRawData"
import type { IWeatherForecastRawData } from "./data/IWeatherForecastRawData"

/*   API docs:  <https://openweathermap.org/current>
                <https://openweathermap.org/api/one-call-3>   */

type response<T> = Promise<{ data: T, status: number }>
type coordinates = [string, string]

class WeatherAPI {
  private baseRequest = axios.create(weatherBaseConfig)

  public getCurrentWeather(fromLocation: coordinates): response<ICurrentWeatherRawData> {
    const additionalConfig = currentWeatherRequestConfig.mergeConfig(fromLocation)
    return this.baseRequest(additionalConfig)
  }

  public getWeatherForecast(fromLocation: coordinates): response<IWeatherForecastRawData> {
    const additionalConfig = weatherForecastRequestConfig.mergeConfig(fromLocation)
    return this.baseRequest(additionalConfig)
  }
}

export const weatherAPI = new WeatherAPI()
