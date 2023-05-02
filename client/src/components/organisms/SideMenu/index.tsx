import { SideMenuContainer } from "./SideMenuContainer"
import { SideMenuHeader } from "./SideMenuHeader"
import { SideMenuCityInput } from "./SideMenuCityInput"
import { CityList } from "../../molecules/CityList"

import "./SideMenuCityList.css"

export function SideMenu() {
  return (
    <SideMenuContainer>
      <SideMenuHeader />
      <SideMenuCityInput />
      <CityList />
    </SideMenuContainer>
  )
}
