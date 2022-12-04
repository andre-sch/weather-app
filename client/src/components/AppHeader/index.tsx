import type { SideMenuStateType } from "../../App"

import "./index.css"

interface AppHeaderProps {
  sideMenuState: SideMenuStateType
}

export function AppHeader(props: AppHeaderProps) {
  const {sideMenuState} = props
  const [, setIsSideMenuOpen] = sideMenuState

  return (
    <div className="app-header">
      <button onClick={() => setIsSideMenuOpen(true)}>
        <img src="/assets/other/cards-list.svg" alt="Open cards menu" />
      </button>
      <h1>Weather <span>App</span></h1>
    </div>
  )
}
