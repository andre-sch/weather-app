import { useContext } from "react"
import { MenuDisplaySetterContext } from "../../MenuDisplayProvider"

import "./index.css"

export function AppHeader() {
  const setIsSideMenuOpen = useContext(MenuDisplaySetterContext)

  return (
    <div className="app-header">
      <button onClick={() => setIsSideMenuOpen(true)}>
        <img src="/assets/other/cards-list.svg" alt="Open cards menu" />
      </button>
      <h1>Weather <span>App</span></h1>
    </div>
  )
}
