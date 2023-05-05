import axios from "axios"

import { locationRequestConfig } from "../config/locationRequestConfig"
import { responseErrorHandling } from "../responseErrorHandling"
import { AxiosInterceptor } from "../AxiosInterceptor"

import type { IRawCitySuggestions } from "./data/IRawCitySuggestions"

/*   API docs: <https://www.geoapify.com/address-autocomplete>   */

type response<T> = Promise<{ data: T, status: number}>

class LocationAPI {
  private baseRequest = axios.create(locationRequestConfig.baseConfig)
  private interceptor = new AxiosInterceptor(this.baseRequest)

  constructor() { responseErrorHandling.preset(this.interceptor) }

  public getAutocomplete(cityInput: string): response<IRawCitySuggestions> {
    const additionalConfig = locationRequestConfig.mergeConfig(cityInput)
    return this.baseRequest(additionalConfig)
  }
}

export const locationAPI = new LocationAPI()
