import { createContext, useContext, type ReactNode } from "react"

import type { ICurrentWeatherInfo } from "../../../services/weatherService/data/ICurrentWeatherInfo"
import type { IWeatherForecastInfo } from "../../../services/weatherService/data/IWeatherForecastInfo"

import { RegisteredCityGetterContext } from "../geoLocation/RegisteredCityProvider"
import { useWeatherInfo } from "./useWeatherInfo"

interface group<Type> { [key: string]: Type | undefined }

export const CurrentInfoGroupContext = createContext<group<ICurrentWeatherInfo>>({})
export const ForecastInfoGroupContext = createContext<group<IWeatherForecastInfo>>({})

interface ProviderProps { children: ReactNode }

export function WeatherInfoProvider(props: ProviderProps) {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const { currentInfoGroup, forecastInfoGroup } = useWeatherInfo(registeredCities)

  return (
    <CurrentInfoGroupContext.Provider value={currentInfoGroup}>
      <ForecastInfoGroupContext.Provider value={forecastInfoGroup}>
        {props.children}
      </ForecastInfoGroupContext.Provider>
    </CurrentInfoGroupContext.Provider>
  )
}
