import { RegisteredCityProvider } from "./geoLocation/RegisteredCityProvider"
import { DisplayedCityIdProvider } from "./geoLocation/DisplayedCityIdProvider"
import { WeatherInfoProvider } from "./weatherInfo/WeatherInfoProvider"

import { SideMenu } from "./SideMenu"
import { CardsPagination } from "./CardsPagination"
import { CurrentInfo } from "./CurrentInfo"
import { Slider } from "./Slider"

import './index.css'

export function WeatherCard() {
  return (
    <div className="weather-card">
      <RegisteredCityProvider>
        <WeatherInfoProvider>
          <DisplayedCityIdProvider>
            <SideMenu />
            <CardsPagination />
            <CurrentInfo />
            <Slider />
          </DisplayedCityIdProvider>
        </WeatherInfoProvider>
      </RegisteredCityProvider>
    </div>
  )
}
