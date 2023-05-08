import axios from "axios"

import { baseConfig } from "../config/baseRequestConfig"
import { locationRequestConfig } from "../config/locationRequestConfig"

import type { ICitySuggestions } from "./data/ICitySuggestions"

type response<T> = Promise<{ data: T }>

class LocationService {
  private baseRequest = axios.create(baseConfig)

  public getAutocomplete(cityInput: string, abortSignal?: AbortSignal): response<ICitySuggestions> {
    const additionalConfig = locationRequestConfig.mergeConfig(cityInput, abortSignal)
    return this.baseRequest(additionalConfig)
  }
}

export const locationService = new LocationService()
