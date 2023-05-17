import { useState, useEffect, useContext } from "react"
import { sizeOf } from "../utils/sizeOfObject"

import { RegisteredCityGetterContext } from "../contexts/geoLocation/RegisteredCityProvider"
import { useCityWeatherInfo } from "../hooks/useCityWeatherInfo"
import { useChangeInTime } from "../hooks/useChangeInTime"

import type { IWeatherInfoGroup } from "../contexts/weatherInfo/WeatherInfoGroupProvider"

export function useWeatherInfoGroup() {
  const currentTime = useChangeInTime()
  const registeredCities = useContext(RegisteredCityGetterContext)

  const [weatherInfoGroup, setWeatherInfoGroup] = useState<IWeatherInfoGroup>({})
  const [weatherInfoStorage, setWeatherInfoStorage] = useState<IWeatherInfoGroup>({})

  const { getWeatherInfoFromCityRegistry } = useCityWeatherInfo()

  useEffect(() => {
    setWeatherInfoStorage({})
    registeredCities.forEach((registeredCity, index) => {
      getWeatherInfoFromCityRegistry(registeredCity).then(weatherInfo => {
        setWeatherInfoStorage(previousStorage => ({ ...previousStorage, ...weatherInfo }))

        if (index == 0 && sizeOf(weatherInfo) == 0)
          setWeatherInfoGroup(previousInfo => ({ ...previousInfo, ...weatherInfo }))
      }).catch(ignoreError)
    })
  }, [currentTime])

  useEffect(() => {
    if (sizeOf(weatherInfoStorage) == registeredCities.length) {
      setWeatherInfoGroup(weatherInfoStorage)
    }
  }, [sizeOf(weatherInfoStorage)])

  return { weatherInfoGroup, setWeatherInfoGroup }
}

function ignoreError(error: any) {}
