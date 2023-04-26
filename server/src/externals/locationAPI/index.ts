import axios from "axios"
import { baseConfig, type locationMergeConfig } from "./requestConfig"

import type { IRawCitySuggestions } from "./data/IRawCitySuggestions"

/*   API docs: <https://www.geoapify.com/address-autocomplete>   */

type response<Type> = { data: Type; status: number }

interface locationRequest {
  <Type>(mergeConfig: locationMergeConfig): Promise<response<Type>>
}

class LocationAPI {
  baseRequest: locationRequest = axios.create(baseConfig)

  getRawCitySuggestions(cityInput: string) {
    const mergeConfig = {
      url: '/geocode/autocomplete',
      params: {
        type: 'city',
        text: cityInput
      }
    }

    return this.baseRequest<IRawCitySuggestions>(mergeConfig)
  }
}

export const locationAPI = new LocationAPI()
