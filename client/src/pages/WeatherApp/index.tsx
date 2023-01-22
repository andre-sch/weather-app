import { MenuDisplayProvider } from "../../contexts/menuDisplay/MenuDisplayProvider"

import { WeatherAppHeader } from "./WeatherAppHeader"
import { WeatherCard } from "./WeatherCard"

import './index.css'

export function WeatherApp() {
  return (
    <div className="weather-app">
      <MenuDisplayProvider>
        <WeatherAppHeader />
        <WeatherCard />
      </MenuDisplayProvider>
    </div>
  )
}
