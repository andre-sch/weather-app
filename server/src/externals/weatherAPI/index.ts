import axios, { AxiosResponse } from "axios"
import { baseConfig, type requestMergeConfig, type weatherRequestConfig } from "./requestConfig"

import type { ICurrentWeatherRawData } from "./data/ICurrentWeatherRawData"

/*   API docs:  <https://openweathermap.org/current>
                <https://openweathermap.org/api/one-call-3>   */

interface weatherRequest {
  <Type>(mergeConfig: requestMergeConfig): Promise<AxiosResponse<Type, weatherRequestConfig>>
}

class WeatherAPI {
  private baseRequest: weatherRequest = axios.create(baseConfig)

  public getCurrentWeather(fromLocation: [string, string]) {
    const [latitude, longitude] = fromLocation
    const mergeConfig: requestMergeConfig = {
      url: '/2.5/weather',
      params: { lat: latitude, lon: longitude }
    }

    return this.baseRequest<ICurrentWeatherRawData>(mergeConfig)
  }
}

export const weatherAPI = new WeatherAPI()
