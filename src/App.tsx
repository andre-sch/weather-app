import { AppHeader } from "./components/AppHeader"
import { WeatherCard } from "./components/WeatherCard"

import './app.css'

function App() {
  return (
    <div className="weather-app">
      <AppHeader />
      <WeatherCard />
    </div>
  )
}

export default App
