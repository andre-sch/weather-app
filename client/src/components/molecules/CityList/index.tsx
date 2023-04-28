import { useContext } from "react"

import { RegisteredCityGetterContext } from "../../../contexts/geoLocation/RegisteredCityProvider"
import { DisplayedCityIdSetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"
import { WeatherInfoGroupContext } from "../../../contexts/weatherInfo/WeatherInfoGroupProvider"

import { CityCard } from "../../atoms/CityCard"
import { EmptyCityRegistry } from "../../atoms/EmptyCityRegistry"
import { CityCardDeleteButton } from "./CityCardDeleteButton"

import "./index.css"
import "./CityCard.css"

export function CityList() {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const weatherInfoGroup = useContext(WeatherInfoGroupContext)

  const setDisplayedCityID = useContext(DisplayedCityIdSetterContext)

  if (registeredCities.length == 0) return <EmptyCityRegistry />
  else return (
    <ul className="city-list">
      {registeredCities.map((registeredCity, index) => {
        const cityID = registeredCity.location
        const isLastChild = index == registeredCities.length - 1

        const weatherInfo = weatherInfoGroup[cityID]
        if (!weatherInfo) return <div className="city-card" key={cityID}></div>

        return (
          <CityCard
            renderedCity={registeredCity}
            weatherInfo={weatherInfo} key={cityID}
          >
            <div className="overlay" onClick={() => setDisplayedCityID(cityID)}></div>
            <CityCardDeleteButton
              cityCardID={cityID}
              deletionDelay={isLastChild ? 0 : 350}  // 50ms longer than css transition time
            />
          </CityCard>
        )
      })}
    </ul>
  )
}
