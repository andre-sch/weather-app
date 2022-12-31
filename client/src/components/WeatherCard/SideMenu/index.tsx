import { useContext } from "react"

import { MenuDisplayGetterContext, MenuDisplaySetterContext } from "../../../MenuDisplayProvider"

import { SideMenuHeader } from "./SideMenuHeader"
import { CityInput } from "./CityInput"
import { CityList } from "./CityList"

import "./index.css"

export function SideMenu() {
  const isMenuOpen = useContext(MenuDisplayGetterContext)
  const setIsMenuOpen = useContext(MenuDisplaySetterContext)

  return (
    <div className={`side-menu ${isMenuOpen ? 'show' : ''}`}>
      <div className="content">
        <SideMenuHeader />
        <CityInput />
        <CityList />
      </div>
      <div
        className={`dark-overlay ${isMenuOpen ? 'show' : ''}`}
        onClick={() => setIsMenuOpen(false)}>
      </div>
    </div>
  )
}
