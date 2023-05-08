import { useEffect, useState } from "react"

import { locationService } from "../services/locationService"
import type { ICitySuggestions } from "../services/locationService/data/ICitySuggestions"

export function useCityAutocomplete(cityInput: string) {
  const [citySuggestions, setCitySuggestions] = useState<ICitySuggestions>([])
  const [timeoutID, setTimeoutID] = useState(0)

  const WAIT_NEW_USER_INPUTS = 500

  useEffect(() => {
    const abortController = new AbortController()

    if (isInputValid(cityInput))
      setTimeoutID(setTimeout(() => {
        locationService.getAutocomplete(cityInput, abortController.signal)
          .then(response => setCitySuggestions(response.data))
          .catch(error => {
            if (abortController.signal.aborted) {}
            else throw error
          })
      }, WAIT_NEW_USER_INPUTS))

    else {
      clearTimeout(timeoutID)
      setCitySuggestions([])
    }

    return () => abortController.abort()
  }, [cityInput])

  return { citySuggestions }
}

export function isInputValid(input: string) {
  const MIN_INPUT_LENGTH = 3
  return input.length >= MIN_INPUT_LENGTH
}
