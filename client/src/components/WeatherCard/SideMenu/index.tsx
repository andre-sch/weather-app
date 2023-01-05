import { SideMenuContainer } from "./container"
import { SideMenuHeader } from "./SideMenuHeader"
import { CityInput } from "./CityInput"
import { CityList } from "./CityList"

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
