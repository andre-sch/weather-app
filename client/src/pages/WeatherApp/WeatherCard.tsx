import { RegisteredCityProvider } from "../../contexts/geoLocation/RegisteredCityProvider"
import { DisplayedCityIdProvider } from "../../contexts/geoLocation/DisplayedCityIdProvider"
import { WeatherInfoGroupProvider } from "../../contexts/weatherInfo/WeatherInfoGroupProvider"

import { SideMenu } from "../../components/organisms/SideMenu"
import { CitiesPagination } from "../../components/organisms/CitiesPagination"
import { CurrentCityInfo } from "../../components/organisms/CurrentCityInfo"
import { Slider } from "../../components/organisms/Slider"

import './WeatherCard.css'

export function WeatherCard() {
  return (
    <div className="weather-card">
      <RegisteredCityProvider>
        <WeatherInfoGroupProvider>
          <DisplayedCityIdProvider>
            <SideMenu />
            <CitiesPagination />
            <CurrentCityInfo />
            <Slider />
          </DisplayedCityIdProvider>
        </WeatherInfoGroupProvider>
      </RegisteredCityProvider>
    </div>
  )
}
