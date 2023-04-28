import { createContext } from "react"
import type { Dispatch, SetStateAction, ReactNode } from "react"

import { useWeatherInfoGroup } from "../../hooks/useWeatherInfoGroup"
import type { IWeatherInfo } from "../../services/weatherService"

export interface IWeatherInfoGroup {
  [key: string]: IWeatherInfo | undefined
}

export const WeatherInfoGroupGetterContext = createContext<IWeatherInfoGroup>({})
export const WeatherInfoGroupSetterContext = createContext({} as Dispatch<SetStateAction<IWeatherInfoGroup>>)

export function WeatherInfoGroupProvider(props: { children: ReactNode }) {
  const { weatherInfoGroup, setWeatherInfoGroup } = useWeatherInfoGroup()
  return (
    <WeatherInfoGroupGetterContext.Provider value={weatherInfoGroup}>
      <WeatherInfoGroupSetterContext.Provider value={setWeatherInfoGroup}>
        {props.children}
      </WeatherInfoGroupSetterContext.Provider>
    </WeatherInfoGroupGetterContext.Provider>
  )
}
