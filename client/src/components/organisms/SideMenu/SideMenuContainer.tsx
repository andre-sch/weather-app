import { useEffect, useContext, type ReactNode } from "react"
import { MenuDisplayGetterContext, MenuDisplaySetterContext } from "../../../contexts/menuDisplay/MenuDisplayProvider"

import "./SideMenuContainer.css"

interface SideMenuContainerProps { children: ReactNode }

export function SideMenuContainer(props: SideMenuContainerProps) {
  const isMenuOpen = useContext(MenuDisplayGetterContext)
  const setIsMenuOpen = useContext(MenuDisplaySetterContext)

  useEffect(toggleSideMenuTabNavigation, [isMenuOpen])

  return (
    <div className={`side-menu-container ${isMenuOpen ? 'show' : ''}`}>
      <div className="side-menu-content" onLoad={toggleSideMenuTabNavigation}>
        {props.children}
      </div>
      <div
        className={`dark-overlay ${isMenuOpen ? 'show' : ''}`}
        onClick={() => setIsMenuOpen(false)}>
      </div>
    </div>
  )

  function toggleSideMenuTabNavigation() {
    const sideMenuNavigableElementsQuery = '.side-menu-content :is(input, button)'

    for (const element of document.querySelectorAll(sideMenuNavigableElementsQuery)) {
      if (isMenuOpen) element.setAttribute('tabindex', '0')
      else element.setAttribute('tabindex', '-1')
    }
  }
}
