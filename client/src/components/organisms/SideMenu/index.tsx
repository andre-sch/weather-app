import { SideMenuContainer } from "./SideMenuContainer"
import { SideMenuHeader } from "./SideMenuHeader"
import { CityInput } from "../../atoms/CityInput"
import { CityList } from "../../molecules/CityList"

import "./SideMenuCityList.css"

export function SideMenu() {
  return (
    <SideMenuContainer>
      <SideMenuHeader />
      <CityInput />
      <CityList />
    </SideMenuContainer>
  )
}
