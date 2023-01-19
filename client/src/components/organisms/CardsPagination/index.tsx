import { useContext } from "react"

import { RegisteredCityGetterContext } from "../../../contexts/geoLocation/RegisteredCityProvider"
import { DisplayedCityIdGetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"

import "./index.css"

export function CardsPagination() {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const displayedCityId = useContext(DisplayedCityIdGetterContext)

  return (
    <div className="cards-pagination">
      <button className="card-arrow">
        <img
          src="/assets/other/thick-arrow.svg"
          alt="See next card"
          style={{transform: 'rotate(180deg)'}} />
      </button>
      <button className="card-arrow">
        <img src="/assets/other/thick-arrow.svg" alt="See previous card" />
      </button>

      <div className="list-order">
        {registeredCities.map(registeredCity => (
          <span
            key={registeredCity.location}
            className={`card-position ${
              registeredCity.location == displayedCityId ? 'current' : ''
            }`}>
          </span>
        ))}
      </div>
    </div>
  )
}
