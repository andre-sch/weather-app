import axios from "axios"

import { baseConfig } from "../config/baseRequestConfig"
import { locationRequestConfig } from "../config/locationRequestConfig"

import type { ICitySuggestion } from "./data/ICitySuggestion"

type response<T> = Promise<{ data: T }>

class LocationService {
  private baseRequest = axios.create(baseConfig)

  public getAutocomplete(cityInput: string, abortSignal?: AbortSignal): response<ICitySuggestion[]> {
    const additionalConfig = locationRequestConfig.mergeConfig(cityInput, abortSignal)
    return this.baseRequest(additionalConfig)
  }
}

export const locationService = new LocationService()
