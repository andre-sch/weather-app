import { useState } from "react"

import { AppHeader } from "./components/AppHeader"
import { WeatherCard } from "./components/WeatherCard"

import './app.css'

export type SideMenuStateType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
]

function App() {
  const isSideMenuOpenState = useState(false)

  return (
    <div className="weather-app">
      <AppHeader sideMenuState={isSideMenuOpenState} />
      <WeatherCard sideMenuState={isSideMenuOpenState} />
    </div>
  )
}

export default App
