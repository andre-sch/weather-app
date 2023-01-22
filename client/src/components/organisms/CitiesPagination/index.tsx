import { useContext } from "react"

import { RegisteredCityGetterContext } from "../../../contexts/geoLocation/RegisteredCityProvider"
import { DisplayedCityIdGetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"

import "./index.css"

export function CitiesPagination() {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const displayedCityId = useContext(DisplayedCityIdGetterContext)

  return (
    <div className="cities-pagination">
      <button className="choose-adjacent-city previous">
        <img
          src="/assets/other/thick-arrow.svg"
          alt="See previous city info"
          style={{transform: 'rotate(180deg)'}} />
      </button>
      <button className="choose-adjacent-city next">
        <img src="/assets/other/thick-arrow.svg" alt="See next city info" />
      </button>

      <div className="city-list-order">
        {registeredCities.map(registeredCity => (
          <span
            key={registeredCity.location}
            className={`city-position ${
              registeredCity.location == displayedCityId ? 'current' : ''
            }`}>
          </span>
        ))}
      </div>
    </div>
  )
}
