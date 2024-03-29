import { useRef, Fragment, type Dispatch } from "react"
import { LocationServiceErrorBoundary } from "../../../errors/locationErrorBoundary"

import { CityInput } from "./CityInput"
import { CityAutocomplete } from "./CityAutocomplete"

import "./CityInputWithAutocomplete.css"

type CityInputWithAutocompleteProps = {
  inputValueState: [string, Dispatch<string>]
  autocompleteState: [boolean, Dispatch<boolean>]
}

export function CityInputWithAutocomplete(props: CityInputWithAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = props.inputValueState

  return (
    <Fragment>
      <CityInput ref={inputRef} inputValueState={[inputValue, setInputValue]} />

      <LocationServiceErrorBoundary>
        <CityAutocomplete
          autocompleteState={props.autocompleteState}
          input={{ element: inputRef.current, text: inputValue }} />
      </LocationServiceErrorBoundary>
    </Fragment>
  )
}
