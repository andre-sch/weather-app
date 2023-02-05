import { useState, useEffect, useContext } from "react"

import { timeConversion } from "../utils/timeConversion"
import { sizeOf } from "../utils/sizeOfObject"

import { RegisteredCityGetterContext } from "../contexts/geoLocation/RegisteredCityProvider"
import { useChangeInTime } from "./useChangeInTime"

import { weatherService } from "../services/weatherService"
import type { IWeatherInfoGroup } from "../contexts/weatherInfo/WeatherInfoProvider"

export function useWeatherInfo() {
  const currentTime = useChangeInTime({
    timeResetDelay: 4 * timeConversion.MINUTE_IN_SECONDS,
    timeCheckInterval: 6 * timeConversion.MINUTE_IN_SECONDS
  })
  const registeredCities = useContext(RegisteredCityGetterContext)

  const [weatherInfo, setWeatherInfo] = useState<IWeatherInfoGroup>({})
  const [weatherInfoStorage, setWeatherInfoStorage] = useState<IWeatherInfoGroup>({})

  useEffect(() => {
    setWeatherInfoStorage({})
    registeredCities.forEach(async (registeredCity, index) => {
      const cityID = registeredCity.location
      const location = cityID.split(', ').map(coordinate => Number(coordinate)) as [number, number]

      const currentInfo = (await weatherService.getCurrentWeatherInfo(location)).data
      const forecastInfo = (await weatherService.getWeatherForecastInfo(location)).data

      setWeatherInfoStorage(previousStorage => ({
        ...previousStorage, [cityID]: { current: currentInfo, forecast: forecastInfo }
      }))

      if (index == 0 && sizeOf(weatherInfo) == 0)
        setWeatherInfo(previousInfo => ({
          ...previousInfo, [cityID]: { current: currentInfo, forecast: forecastInfo }
        }))
    })
  }, [currentTime])

  useEffect(() => {
    if (sizeOf(weatherInfoStorage) == registeredCities.length) {
      setWeatherInfo(weatherInfoStorage)
    }
  }, [sizeOf(weatherInfoStorage)])

  return weatherInfo
}
