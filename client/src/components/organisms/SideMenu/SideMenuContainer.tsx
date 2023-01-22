import { useContext, type ReactNode } from "react"
import { MenuDisplayGetterContext, MenuDisplaySetterContext } from "../../../contexts/menuDisplay/MenuDisplayProvider"

import "./SideMenuContainer.css"

interface SideMenuContainerProps { children: ReactNode }

export function SideMenuContainer(props: SideMenuContainerProps) {
  const isMenuOpen = useContext(MenuDisplayGetterContext)
  const setIsMenuOpen = useContext(MenuDisplaySetterContext)

  return (
    <div className={`side-menu-container ${isMenuOpen ? 'show' : ''}`}>
      <div className="side-menu-content">
        {props.children}
      </div>
      <div
        className={`dark-overlay ${isMenuOpen ? 'show' : ''}`}
        onClick={() => setIsMenuOpen(false)}>
      </div>
    </div>
  )
}
