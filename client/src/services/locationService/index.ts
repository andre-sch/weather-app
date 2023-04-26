import axios from "axios"

import { baseConfig } from "../baseConfig"

import type { citySuggestionsMergeConfig } from "./requestConfig"
import type { ICitySuggestions } from "./data/ICitySuggestions"

type response<T> = Promise<{ data: T }>

class LocationService {
  private baseRequest = axios.create(baseConfig)

  public getCitySuggestions(
    cityInput: string,
    abortSignal?: AbortSignal
  ): response<ICitySuggestions> {
    const mergeConfig: citySuggestionsMergeConfig = {
      url: '/location/autocomplete',
      params: { cityInput },
      signal: abortSignal
    }

    return this.baseRequest(mergeConfig)
  }
}

export const locationService = new LocationService()
