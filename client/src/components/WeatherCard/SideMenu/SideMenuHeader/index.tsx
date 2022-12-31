import { useContext } from "react"
import { MenuDisplaySetterContext } from "../../../../MenuDisplayProvider"

import "./index.css"

export function SideMenuHeader() {
  const setIsMenuOpen = useContext(MenuDisplaySetterContext)

  return (
    <header>
      <h1>Registered Cities</h1>
      <button onClick={() => setIsMenuOpen(false)}>
        <img
          src="/assets/other/close/bd-transparent.svg"
          alt="close menu"
          draggable={false} />
      </button>
    </header>
  )
}
