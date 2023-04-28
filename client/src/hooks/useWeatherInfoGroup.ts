import { useState, useEffect, useContext } from "react"

import { sizeOf } from "../utils/sizeOfObject"

import { RegisteredCityGetterContext } from "../contexts/geoLocation/RegisteredCityProvider"
import { useChangeInTime } from "./useChangeInTime"

import { weatherService } from "../services/weatherService"
import type { IWeatherInfoGroup } from "../contexts/weatherInfo/WeatherInfoGroupProvider"

export function useWeatherInfoGroup() {
  const currentTime = useChangeInTime()
  const registeredCities = useContext(RegisteredCityGetterContext)

  const [weatherInfoGroup, setWeatherInfoGroup] = useState<IWeatherInfoGroup>({})
  const [weatherInfoStorage, setWeatherInfoStorage] = useState<IWeatherInfoGroup>({})

  useEffect(() => {
    setWeatherInfoStorage({})
    registeredCities.forEach(async (registeredCity, index) => {
      const cityID = registeredCity.location
      const location = cityID.split(', ').map(coordinate => Number(coordinate)) as [number, number]
      const weatherInfo = await weatherService.getWeatherInfo(location)

      setWeatherInfoStorage(previousStorage => ({
        ...previousStorage, [cityID]: weatherInfo
      }))

      if (index == 0 && sizeOf(weatherInfo) == 0)
        setWeatherInfoGroup(previousInfo => ({
          ...previousInfo, [cityID]: weatherInfo
        }))
    })
  }, [currentTime])

  useEffect(() => {
    if (sizeOf(weatherInfoStorage) == registeredCities.length) {
      setWeatherInfoGroup(weatherInfoStorage)
    }
  }, [sizeOf(weatherInfoStorage)])

  return weatherInfoGroup
}
