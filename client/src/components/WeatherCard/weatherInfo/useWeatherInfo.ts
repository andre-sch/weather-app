import { useState, useEffect } from "react"

import { sizeOf } from "../../../utils/sizeOfObject"

import { weatherService } from "../../../services/weatherService"
import type { ICurrentWeatherInfo } from "../../../services/weatherService/data/ICurrentWeatherInfo"
import type { IWeatherForecastInfo } from "../../../services/weatherService/data/IWeatherForecastInfo"

import type { registeredCity } from "../geoLocation/defaultCities"

export interface group<Type> { [key: string]: Type | undefined }

export function useWeatherInfo(registeredCities: registeredCity[]) {
  const [weatherInfo, setWeatherInfo] = useState({
    currentInfoGroup: {} as group<ICurrentWeatherInfo>,
    forecastInfoGroup: {} as group<IWeatherForecastInfo>
  })

  const [currentInfoStorage, setCurrentInfoStorage] = useState<group<ICurrentWeatherInfo>>({})
  const [forecastInfoStorage, setForecastInfoStorage] = useState<group<IWeatherForecastInfo>>({})

  useEffect(() => {
    registeredCities.forEach(async (registeredCity, index) => {
      const cityID = registeredCity.location
      const location = cityID.split(', ').map(coordinate => Number(coordinate)) as [number, number]

      const currentInfo = (await weatherService.getCurrentWeatherInfo(location)).data
      const forecastInfo = (await weatherService.getWeatherForecastInfo(location)).data

      setCurrentInfoStorage(previousInfo => ({...previousInfo, [cityID]: currentInfo}))
      setForecastInfoStorage(previousInfo => ({...previousInfo, [cityID]: forecastInfo}))

      if (index == 0) setWeatherInfo({
        currentInfoGroup: {[cityID]: currentInfo},
        forecastInfoGroup: {[cityID]: forecastInfo}
      })
    })
  }, [registeredCities])

  useEffect(() => {
    if (!currentInfoStorage || !forecastInfoStorage) return

    if (
      sizeOf(currentInfoStorage) == registeredCities.length &&
      sizeOf(forecastInfoStorage) == registeredCities.length
    ) {
      setWeatherInfo({
        currentInfoGroup: currentInfoStorage,
        forecastInfoGroup: forecastInfoStorage
      })
    }
  }, [currentInfoStorage, forecastInfoStorage])

  return weatherInfo
}
