import axios from "axios"
import { baseConfig, type weatherMergeConfig } from "./requestConfig"

import type { ICurrentWeatherRawData } from "./data/ICurrentWeatherRawData"
import type { IWeatherForecastRawData } from "./data/IWeatherForecastRawData"

/*   API docs:  <https://openweathermap.org/current>
                <https://openweathermap.org/api/one-call-3>   */

type response<Type> = { data: Type; status: number }

interface weatherRequest {
  <Type>(mergeConfig: weatherMergeConfig): Promise<response<Type>>
}

class WeatherAPI {
  private baseRequest: weatherRequest = axios.create(baseConfig)

  public getCurrentWeather(fromLocation: [string, string]) {
    const [latitude, longitude] = fromLocation
    const mergeConfig = {
      url: '/2.5/weather',
      params: { lat: latitude, lon: longitude }
    }

    return this.baseRequest<ICurrentWeatherRawData>(mergeConfig)
  }

  public getWeatherForecast(fromLocation: [string, string]) {
    const [latitude, longitude] = fromLocation
    const removedDataFromQuery = ['current', 'minutely', 'alerts']

    const mergeConfig = {
      url: '/3.0/onecall',
      params: {
        lat: latitude, lon: longitude,
        exclude: removedDataFromQuery.join(',')
      }
    }

    return this.baseRequest<IWeatherForecastRawData>(mergeConfig)
  }
}

export const weatherAPI = new WeatherAPI()
