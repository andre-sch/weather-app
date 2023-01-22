import { useContext } from "react"
import { MenuDisplaySetterContext } from "../../contexts/menuDisplay/MenuDisplayProvider"

import "./WeatherAppHeader.css"

export function WeatherAppHeader() {
  const setIsSideMenuOpen = useContext(MenuDisplaySetterContext)

  return (
    <header>
      <button onClick={() => setIsSideMenuOpen(true)}>
        <img src="/assets/other/cards-list.svg" alt="Open cards menu" />
      </button>
      <h1>Weather <span>App</span></h1>
    </header>
  )
}
