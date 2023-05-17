import { useContext } from "react"
import { ServiceErrorSetterContext } from "../errors/serviceErrorBoundary"

import { cityIdConversor } from "../utils/cityIdConversor"
import { weatherService } from "../services/weatherService"

import type { ICityRegistry } from "../contexts/geoLocation/defaultCities"
import type { IWeatherInfoGroup } from "../contexts/weatherInfo/WeatherInfoGroupProvider"

export function useCityWeatherInfo() {
  const setServiceError = useContext(ServiceErrorSetterContext)

  return { getWeatherInfoFromCityRegistry }

  async function getWeatherInfoFromCityRegistry(
    cityRegistry: ICityRegistry
  ): Promise<IWeatherInfoGroup> {
    const cityID = cityRegistry.location
    const location = cityIdConversor.fromIdToLocation(cityID)

    return weatherService.getWeatherInfo(location)
      .then(weatherInfo => ({ [cityID]: weatherInfo }))
      .catch(error => {
        setServiceError(error)
        return Promise.reject(error)
      })
  }
}
