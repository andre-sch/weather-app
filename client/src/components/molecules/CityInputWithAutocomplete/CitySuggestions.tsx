import { useContext, useMemo } from "react"

import { RegisteredCityGetterContext } from "../../../contexts/geoLocation/RegisteredCityProvider"
import { cityIdConversor } from "../../../utils/cityIdConversor"
import { CityOption } from "./CityOption"

import type { ICitySuggestion } from "../../../services/locationService/data/ICitySuggestion"

import "./CitySuggestions.css"

type Props = { suggestions: ICitySuggestion[] }

export function CitySuggestions({ suggestions }: Props) {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const memoRegisteredCities = useMemo(() => registeredCities, [suggestions])

  if (suggestions.length == 0)
    return <span className="no-suggestions">No suggestions!</span>

  else return (
    <div className="city-suggestions">
      {suggestions.map(suggestion => {
        const { latitude, longitude } = suggestion.coordinates
        const cityID = cityIdConversor.fromLocationToId([latitude, longitude])

        return (
          <CityOption
            key={cityID} option={suggestion}
            disabled={isCityAlreadyRegistered(cityID)} />
        )
      })}
    </div>
  )

  function isCityAlreadyRegistered(suggestionID: string): boolean {
    for (const registerCity of memoRegisteredCities)
      if (registerCity.location == suggestionID)
        return true
    return false
  }
}
