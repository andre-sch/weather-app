import { SideMenuContainer } from "../../atoms/SideMenuContainer"
import { SideMenuHeader } from "../../molecules/SideMenuHeader"
import { CityInput } from "../../atoms/CityInput"
import { CityList } from "../../molecules/CityList"

import "./index.css"

export function SideMenu() {
  return (
    <SideMenuContainer>
      <SideMenuHeader />
      <CityInput />
      <CityList />
    </SideMenuContainer>
  )
}
