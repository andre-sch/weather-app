import { MenuDisplayProvider } from "./contexts/menuDisplay/MenuDisplayProvider"

import { AppHeader } from "./components/organisms/AppHeader"
import { WeatherCard } from "./pages/WeatherCard"

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
