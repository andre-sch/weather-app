import { forwardRef } from "react"
import type { Dispatch, ForwardedRef } from "react"

import "./CityInput.css"

interface CityInputProps {
  inputValueState: [string, Dispatch<string>]
}

export const CityInput = forwardRef((
  props: CityInputProps,
  forwardedRef: ForwardedRef<HTMLInputElement>
) => {
  const [inputValue, setInputValue] = props.inputValueState

  return (
    <div className="city-input-container">
      <input
        ref={forwardedRef}
        value={inputValue}
        placeholder="Add a new city"
        onChange={event => setInputValue(event.target.value)} />

      <img src="/assets/other/add-city.svg" alt="" draggable={false} />
    </div>
  )
})
