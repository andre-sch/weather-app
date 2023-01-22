import { RegisteredCityProvider } from "../../contexts/geoLocation/RegisteredCityProvider"
import { DisplayedCityIdProvider } from "../../contexts/geoLocation/DisplayedCityIdProvider"
import { WeatherInfoProvider } from "../../contexts/weatherInfo/WeatherInfoProvider"

import { SideMenu } from "../../components/organisms/SideMenu"
import { CardsPagination } from "../../components/organisms/CardsPagination"
import { CurrentInfo } from "../../components/organisms/CurrentInfo"
import { Slider } from "../../components/organisms/Slider"

import './WeatherCard.css'

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
