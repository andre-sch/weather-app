import { useContext } from "react"
import { MenuDisplaySetterContext } from "../../../contexts/menuDisplay/MenuDisplayProvider"

import "./SideMenuHeader.css"

export function SideMenuHeader() {
  const setIsMenuOpen = useContext(MenuDisplaySetterContext)

  return (
    <header>
      <h1>Registered Cities</h1>
      <button onClick={() => setIsMenuOpen(false)}>
        <img src="/assets/other/close.svg" alt="close menu" draggable={false} />
      </button>
    </header>
  )
}
