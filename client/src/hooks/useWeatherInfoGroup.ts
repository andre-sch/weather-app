import { useState, useEffect, useContext } from "react"

import { cityIdConversor } from "../utils/cityIdConversor"
import { sizeOf } from "../utils/sizeOfObject"

import { RegisteredCityGetterContext } from "../contexts/geoLocation/RegisteredCityProvider"
import { useChangeInTime } from "./useChangeInTime"

import { weatherService } from "../services/weatherService"
import type { IWeatherInfoGroup } from "../contexts/weatherInfo/WeatherInfoGroupProvider"
import type { ICityRegistry } from "../contexts/geoLocation/defaultCities"

export function useWeatherInfoGroup() {
  const currentTime = useChangeInTime()
  const registeredCities = useContext(RegisteredCityGetterContext)

  const [weatherInfoGroup, setWeatherInfoGroup] = useState<IWeatherInfoGroup>({})
  const [weatherInfoStorage, setWeatherInfoStorage] = useState<IWeatherInfoGroup>({})

  useEffect(() => {
    setWeatherInfoStorage({})
    registeredCities.forEach(async (registeredCity, index) => {
      const weatherInfo = await getWeatherInfoFromCityRegistry(registeredCity)
      setWeatherInfoStorage(previousStorage => ({ ...previousStorage, ...weatherInfo }))

      if (index == 0 && sizeOf(weatherInfo) == 0)
        setWeatherInfoGroup(previousInfo => ({ ...previousInfo, ...weatherInfo }))
    })
  }, [currentTime])

  useEffect(() => {
    if (sizeOf(weatherInfoStorage) == registeredCities.length) {
      setWeatherInfoGroup(weatherInfoStorage)
    }
  }, [sizeOf(weatherInfoStorage)])

  return { weatherInfoGroup, setWeatherInfoGroup }
}

export async function getWeatherInfoFromCityRegistry(
  cityRegistry: ICityRegistry
): Promise<IWeatherInfoGroup> {
  const cityID = cityRegistry.location
  const location = cityIdConversor.fromIdToLocation(cityID)
  const weatherInfo = await weatherService.getWeatherInfo(location)

  return { [cityID]: weatherInfo }
}
