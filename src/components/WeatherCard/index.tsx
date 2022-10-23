import { CardsPagination } from "./CardsPagination";
import { CurrentInfo } from "./CurrentInfo";
import { ForecastSlider } from "./ForecastSlider";
import { SideMenu } from "./SideMenu";

import './index.css'

export function WeatherCard() {
  return (
    <div className="weather-card">
      <SideMenu />
      <CardsPagination />
      <CurrentInfo />
      <ForecastSlider />
    </div>
  )
}
