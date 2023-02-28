import { useState, useContext } from "react"
import { RegisteredCitySetterContext } from "../../../contexts/geoLocation/RegisteredCityProvider"

import "./CityCardDeleteButton.css"

interface CityCardDeleteButtonProps { cityCardID: string, deletionDelay: number }

export function CityCardDeleteButton({ cityCardID, deletionDelay }: CityCardDeleteButtonProps) {
  const [isActive, setIsActive] = useState(false)
  const setRegisteredCities = useContext(RegisteredCitySetterContext)

  function deleteCard() {
    setIsActive(true)

    setTimeout(() => setRegisteredCities(registeredCities =>
      registeredCities.filter(registeredCity => registeredCity.location != cityCardID)
    ), deletionDelay)
  }

  return (
    <button className={`delete-button ${isActive ? 'deleting' : ''}`} onClick={deleteCard}>
      <span>✖&nbsp; Delete city</span>
    </button>
  )
}
