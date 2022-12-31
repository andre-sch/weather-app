import { MenuDisplayProvider } from "./MenuDisplayProvider"

import { AppHeader } from "./components/AppHeader"
import { WeatherCard } from "./components/WeatherCard"

import './app.css'

export default function App() {
  return (
    <div className="weather-app">
      <MenuDisplayProvider>
        <AppHeader />
        <WeatherCard />
      </MenuDisplayProvider>
    </div>
  )
}
