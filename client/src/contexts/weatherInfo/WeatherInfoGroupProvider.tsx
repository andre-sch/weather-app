import { createContext, type ReactNode } from "react"

import { useWeatherInfoGroup } from "../../hooks/useWeatherInfoGroup"
import type { IWeatherInfo } from "../../services/weatherService"

export interface IWeatherInfoGroup {
  [key: string]: IWeatherInfo | undefined
}

export const WeatherInfoGroupContext = createContext<IWeatherInfoGroup>({})

export function WeatherInfoGroupProvider(props: { children: ReactNode }) {
  const weatherInfoGroup = useWeatherInfoGroup()
  return (
    <WeatherInfoGroupContext.Provider value={weatherInfoGroup}>
      {props.children}
    </WeatherInfoGroupContext.Provider>
  )
}
