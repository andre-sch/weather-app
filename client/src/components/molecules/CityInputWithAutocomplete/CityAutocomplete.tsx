import { useEffect, type Dispatch } from "react"
import { isInputValid, useCityAutocomplete } from "../../../hooks/useCityAutocomplete"

import { CitySuggestions } from "./CitySuggestions"
import { Modal } from "../../atoms/Modal"

interface CityAutocompleteProps {
  input: { element: HTMLInputElement | null, text: string }
  autocompleteState: [boolean, Dispatch<boolean>]
}

export function CityAutocomplete(props: CityAutocompleteProps) {
  const { citySuggestions } = useCityAutocomplete(props.input.text)
  const [isDisplayed, setIsDisplayed] = props.autocompleteState

  useEffect(displayAutocompleteWhenInputGetFocus, [props.input])
  useEffect(displayAutocompleteIfInputIsValid, [citySuggestions])

  return (
    <Modal shouldDisplay={isDisplayed} hideOverlay={hideAutocomplete}>
      <CitySuggestions suggestions={citySuggestions} />
    </Modal>
  )

  function displayAutocompleteWhenInputGetFocus() {
    if (props.input.element)
      props.input.element.onfocus = displayAutocompleteIfInputIsValid
  }

  function displayAutocompleteIfInputIsValid() {
    setIsDisplayed(isInputValid(props.input.text))
  }

  function hideAutocomplete() { setIsDisplayed(false) }
}
