import { createContext, useContext, useMemo, type ReactNode } from "react"

import type { ICurrentWeatherInfo } from "../../../services/weatherService/data/ICurrentWeatherInfo"
import type { IWeatherForecastInfo } from "../../../services/weatherService/data/IWeatherForecastInfo"

import { RegisteredCityGetterContext } from "../geoLocation/RegisteredCityProvider"
import { useWeatherInfo, type group } from "./useWeatherInfo"

import { sizeOf } from "../../../utils/sizeOfObject"

export const CurrentInfoGroupContext = createContext<group<ICurrentWeatherInfo>>({})
export const ForecastInfoGroupContext = createContext<group<IWeatherForecastInfo>>({})

interface ProviderProps { children: ReactNode }

export function WeatherInfoProvider(props: ProviderProps) {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const { currentInfoGroup, forecastInfoGroup } = useWeatherInfo(registeredCities)

  const memoCurrentInfo = useMemo(() => currentInfoGroup, [sizeOf(currentInfoGroup)])
  const memoForecastInfo = useMemo(() => forecastInfoGroup, [sizeOf(forecastInfoGroup)])

  return (
    <CurrentInfoGroupContext.Provider value={memoCurrentInfo}>
      <ForecastInfoGroupContext.Provider value={memoForecastInfo}>
        {props.children}
      </ForecastInfoGroupContext.Provider>
    </CurrentInfoGroupContext.Provider>
  )
}
