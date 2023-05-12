import { useState, useEffect, useContext } from "react"
import { ServiceErrorSetterContext } from "../errors/serviceErrorBoundary"

import { locationService } from "../services/locationService"
import type { ICitySuggestion } from "../services/locationService/data/ICitySuggestion"

export function useCityAutocomplete(cityInput: string) {
  const [citySuggestions, setCitySuggestions] = useState<ICitySuggestion[]>([])
  const [timeoutID, setTimeoutID] = useState(0)

  const setServiceError = useContext(ServiceErrorSetterContext)

  const WAIT_NEW_USER_INPUTS = 500

  useEffect(() => {
    const abortController = new AbortController()

    if (isInputValid(cityInput))
      setTimeoutID(setTimeout(() => {
        locationService.getAutocomplete(cityInput, abortController.signal)
          .then(response => setCitySuggestions(response.data))
          .catch(error => {
            if (abortController.signal.aborted) {}
            else setServiceError(error)
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
