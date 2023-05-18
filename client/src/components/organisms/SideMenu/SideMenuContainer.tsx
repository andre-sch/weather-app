import { useEffect, useContext, type ReactNode } from "react"
import { MenuDisplayGetterContext, MenuDisplaySetterContext } from "../../../contexts/menuDisplay/MenuDisplayProvider"
import { RegisteredCityGetterContext } from "../../../contexts/geoLocation/RegisteredCityProvider"

import { Modal } from "../../atoms/Modal"

import "./SideMenuContainer.css"

interface SideMenuContainerProps { children: ReactNode }

export function SideMenuContainer(props: SideMenuContainerProps) {
  const isMenuOpen = useContext(MenuDisplayGetterContext)
  const setIsMenuOpen = useContext(MenuDisplaySetterContext)

  useEffect(toggleSideMenuTabNavigation, [isMenuOpen])

  const registeredCities = useContext(RegisteredCityGetterContext)
  useEffect(openMenuIfCityRegistryIsEmpty, [])

  return (
    <div className="side-menu-container">
      <Modal shouldDisplay={isMenuOpen} hideOverlay={hideMenu}>
        <div className="side-menu-content" onLoad={toggleSideMenuTabNavigation}>
          {props.children}
        </div>
      </Modal>
    </div>
  )

  function toggleSideMenuTabNavigation() {
    const sideMenuNavigableElementsQuery = '.side-menu-content :is(input, button)'

    for (const element of document.querySelectorAll(sideMenuNavigableElementsQuery)) {
      if (isMenuOpen) element.setAttribute('tabindex', '0')
      else element.setAttribute('tabindex', '-1')
    }
  }

  function openMenuIfCityRegistryIsEmpty() {
    setIsMenuOpen(registeredCities.length == 0)
  }

  function hideMenu() { setIsMenuOpen(false) }
}
