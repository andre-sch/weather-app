import { useContext } from "react"

import { RegisteredCityGetterContext } from "../../geoLocation/RegisteredCityProvider"
import { WeatherInfoGroupContext } from "../../weatherInfo/WeatherInfoProvider"

import { CityCard } from "./CityCard"

import "./index.css"

export function CityList() {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const weatherInfoGroup = useContext(WeatherInfoGroupContext)

  return (
    <ul>
      {registeredCities.map(registeredCity => {
        const cityID = registeredCity.location
        return (
          <CityCard
            key={cityID}
            renderedCity={registeredCity}
            weatherInfo={weatherInfoGroup[cityID]} />
        )
      })}
    </ul>
  )
}
