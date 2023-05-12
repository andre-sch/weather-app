import { useState, useEffect, useContext } from "react"
import { MenuDisplayGetterContext } from "../../../contexts/menuDisplay/MenuDisplayProvider"

import { CityInputWithAutocomplete } from "../../molecules/CityInputWithAutocomplete"

import "./SideMenuCityForm.css"

export function SideMenuCityForm() {
  const [inputValue, setInputValue] = useState('')
  const [hasAutocomplete, setHasAutocomplete] = useState(false)

  const isMenuOpen = useContext(MenuDisplayGetterContext)
  useEffect(disableAutocompleteIfMenuIsNotOpen, [isMenuOpen])

  return (
    <form
      className="city-form"
      onSubmit={event => { event.preventDefault(); setInputValue('') }}
    >
      <CityInputWithAutocomplete
        inputValueState={[inputValue, setInputValue]}
        autocompleteState={[hasAutocomplete, setHasAutocomplete]} />
    </form>
  )

  function disableAutocompleteIfMenuIsNotOpen() {
    const CSS_TRANSITION = 550
    if (!isMenuOpen) setTimeout(() => setHasAutocomplete(false), CSS_TRANSITION)
  }
}
