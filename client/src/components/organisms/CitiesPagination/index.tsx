import { useContext } from "react"

import { RegisteredCityGetterContext } from "../../../contexts/geoLocation/RegisteredCityProvider"
import { DisplayedCityIdGetterContext, DisplayedCityIdSetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"

import "./index.css"

export function CitiesPagination() {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const displayedCityID = useContext(DisplayedCityIdGetterContext)

  const setDisplayedCityID = useContext(DisplayedCityIdSetterContext)

  function chooseAdjacentCity(adjacentSibling: 'previous' | 'next') {
    const displayedCityIndex = registeredCities.findIndex(city => city.location == displayedCityID)
    const indexAddend = { previous: -1, next: 1 }[adjacentSibling]

    const newIndex = indexCircular(displayedCityIndex + indexAddend, registeredCities.length)
    setDisplayedCityID(registeredCities[newIndex].location)
  }

  const indexCircular = (index: number, max: number) => (max + index) % max

  return (
    <div className="cities-pagination">
      <button
        className="choose-adjacent-city previous"
        onClick={() => chooseAdjacentCity('previous')}>
        <img
          src="/assets/other/thick-arrow.svg"
          alt="See previous city info"
          style={{transform: 'rotate(180deg)'}} />
      </button>
      <button
        className="choose-adjacent-city next"
        onClick={() => chooseAdjacentCity('next')}>
        <img src="/assets/other/thick-arrow.svg" alt="See next city info" />
      </button>

      <div className="city-list-order">
        {registeredCities.map(registeredCity => (
          <span
            key={registeredCity.location}
            className={`city-position ${
              registeredCity.location == displayedCityID ? 'current' : ''
            }`}>
          </span>
        ))}
      </div>
    </div>
  )
}
