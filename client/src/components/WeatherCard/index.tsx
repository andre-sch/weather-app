import { SideMenu } from "./SideMenu"
import { CardsPagination } from "./CardsPagination"
import { CurrentInfo } from "./CurrentInfo"
import { Slider } from "./Slider"

import type { SideMenuStateType } from "../../App"

import './index.css'

interface WeatherCardProps {
  sideMenuState: SideMenuStateType
}

export function WeatherCard(props: WeatherCardProps) {
  return (
    <div className="weather-card">
      <SideMenu menuState={props.sideMenuState} />
      <CardsPagination />
      <CurrentInfo />
      <Slider />
    </div>
  )
}
