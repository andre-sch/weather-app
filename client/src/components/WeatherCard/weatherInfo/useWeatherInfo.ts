import { useState, useEffect } from "react"

import { weatherService } from "../../../services/weatherService"
import type { ICurrentWeatherInfo } from "../../../services/weatherService/data/ICurrentWeatherInfo"
import type { IWeatherForecastInfo } from "../../../services/weatherService/data/IWeatherForecastInfo"

import type { registeredCity } from "../geoLocation/defaultCities"

interface group<Type> { [key: string]: Type }

export function useWeatherInfo(registeredCities: registeredCity[]) {
  const [currentInfoGroup, setCurrentInfoGroup] = useState<group<ICurrentWeatherInfo>>({})
  const [forecastInfoGroup, setForecastInfoGroup] = useState<group<IWeatherForecastInfo>>({})

  useEffect(() => {
    registeredCities.forEach(registeredCity => {
      const cityID = registeredCity.location
      const location = cityID.split(', ').map(coordinate => Number(coordinate))

      weatherService.getCurrentWeatherInfo(location as [number, number]).then(response =>
        setCurrentInfoGroup(previousGroup => ({...previousGroup, [cityID]: response.data})
      ))

      weatherService.getWeatherForecastInfo(location as [number, number]).then(response =>
        setForecastInfoGroup(previousGroup => ({...previousGroup, [cityID]: response.data})
      ))
    })
  }, [registeredCities])

  return { currentInfoGroup, forecastInfoGroup }
}
