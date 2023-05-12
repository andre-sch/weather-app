import { SideMenuContainer } from "./SideMenuContainer"
import { SideMenuHeader } from "./SideMenuHeader"
import { SideMenuCityForm } from "./SideMenuCityForm"
import { CityList } from "../../molecules/CityList"

import "./SideMenuCityList.css"

export function SideMenu() {
  return (
    <SideMenuContainer>
      <SideMenuHeader />
      <SideMenuCityForm />
      <CityList />
    </SideMenuContainer>
  )
}
