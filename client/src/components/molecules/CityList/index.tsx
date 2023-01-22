import { useContext } from "react"

import { RegisteredCityGetterContext } from "../../../contexts/geoLocation/RegisteredCityProvider"
import { WeatherInfoGroupContext } from "../../../contexts/weatherInfo/WeatherInfoProvider"

import { CityCard } from "../../atoms/CityCard"
import { DragCardButton } from "./DragCardButton"
import { DeleteCardButton } from "./DeleteCardButton"

import "./index.css"
import "./CityCard.css"

export function CityList() {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const weatherInfoGroup = useContext(WeatherInfoGroupContext)

  return (
    <ul className="city-list">
      {registeredCities.map(registeredCity => {
        const cityID = registeredCity.location

        const weatherInfo = weatherInfoGroup[cityID]
        if (!weatherInfo) return <div className="city-card" key={cityID}></div>

        return (
          <CityCard
            renderedCity={registeredCity}
            weatherInfo={weatherInfo} key={cityID}
          >
            <DragCardButton />
            <DeleteCardButton />
          </CityCard>
        )
      })}
    </ul>
  )
}
