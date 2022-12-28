import { useEffect, useState } from "react"

import { AppHeader } from "./components/AppHeader"
import { WeatherCard } from "./components/WeatherCard"

import { weatherService } from "./services/weatherService"

import './app.css'

export type SideMenuStateType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
]

function App() {
  const isSideMenuOpenState = useState(false)

  useEffect(() => {
    weatherService.getCurrentWeatherInfo([-23.41, -52.04])
    .then(response => console.log(response.data))
  }, [])

  return (
    <div className="weather-app">
      <AppHeader sideMenuState={isSideMenuOpenState} />
      <WeatherCard sideMenuState={isSideMenuOpenState} />
    </div>
  )
}

export default App
