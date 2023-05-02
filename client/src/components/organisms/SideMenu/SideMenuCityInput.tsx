import { useState, useEffect, useContext } from "react"

import { MenuDisplayGetterContext } from "../../../contexts/menuDisplay/MenuDisplayProvider"
import { isInputValid, useCityAutocomplete } from "../../../hooks/useCityAutocomplete"

import { Modal } from "../../atoms/Modal"
import { CitySuggestions } from "../../molecules/CitySuggestions"

import "./SideMenuCityInput.css"

export function SideMenuCityInput() {
  const [cityInputValue, setCityInputValue] = useState('')
  const [autocomplete, setAutocomplete] = useState(false)

  const isMenuOpen = useContext(MenuDisplayGetterContext)
  useEffect(() => {
    if (!isMenuOpen) setTimeout(() => setAutocomplete(false), 550)  // 50ms longer than css transition time
  }, [isMenuOpen])

  const { citySuggestions } = useCityAutocomplete(cityInputValue)
  useEffect(setAutocompleteIfInputIsValid, [citySuggestions])

  return (
    <form
      className="city-input-container"
      onSubmit={event => {event.preventDefault(); setCityInputValue('')}}
    >
      <input
        placeholder="Add a new city"
        value={cityInputValue}
        onClick={setAutocompleteIfInputIsValid}
        onFocus={setAutocompleteIfInputIsValid}
        onChange={event => setCityInputValue(event.target.value)} />

      <img src="/assets/other/add-city.svg" alt="" draggable={false} />

      <Modal
        shouldDisplay={autocomplete}
        hideOverlay={() => setAutocomplete(false)}
      >
        <CitySuggestions suggestions={citySuggestions} />
      </Modal>
    </form>
  )

  function setAutocompleteIfInputIsValid() {
    setAutocomplete(isInputValid(cityInputValue))
  }
}
