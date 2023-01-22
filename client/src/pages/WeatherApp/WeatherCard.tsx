import { RegisteredCityProvider } from "../../contexts/geoLocation/RegisteredCityProvider"
import { DisplayedCityIdProvider } from "../../contexts/geoLocation/DisplayedCityIdProvider"
import { WeatherInfoProvider } from "../../contexts/weatherInfo/WeatherInfoProvider"

import { SideMenu } from "../../components/organisms/SideMenu"
import { CitiesPagination } from "../../components/organisms/CitiesPagination"
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
            <CitiesPagination />
            <CurrentInfo />
            <Slider />
          </DisplayedCityIdProvider>
        </WeatherInfoProvider>
      </RegisteredCityProvider>
    </div>
  )
}
