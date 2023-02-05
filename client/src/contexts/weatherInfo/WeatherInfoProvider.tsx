import { createContext, type ReactNode } from "react"

import { useWeatherInfo } from "../../hooks/useWeatherInfo"

import type { ICurrentWeatherInfo } from "../../services/weatherService/data/ICurrentWeatherInfo"
import type { IWeatherForecastInfo } from "../../services/weatherService/data/IWeatherForecastInfo"

export interface IWeatherInfo {
  current: ICurrentWeatherInfo
  forecast: IWeatherForecastInfo
}

export interface IWeatherInfoGroup {
  [key: string]: IWeatherInfo | undefined
}

export const WeatherInfoGroupContext = createContext<IWeatherInfoGroup>({})

export function WeatherInfoProvider(props: { children: ReactNode }) {
  const weatherInfo = useWeatherInfo()
  return (
    <WeatherInfoGroupContext.Provider value={weatherInfo}>
      {props.children}
    </WeatherInfoGroupContext.Provider>
  )
}
