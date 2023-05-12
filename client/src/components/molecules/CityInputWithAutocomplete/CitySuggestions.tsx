import { cityIdConversor } from "../../../utils/cityIdConversor"
import { CityOption } from "./CityOption"

import type { ICitySuggestion } from "../../../services/locationService/data/ICitySuggestion"

import "./CitySuggestions.css"

type Props = { suggestions: ICitySuggestion[] }

export function CitySuggestions({ suggestions }: Props) {
  if (suggestions.length == 0)
    return <span className="no-suggestions">No suggestions!</span>

  else return (
    <div className="city-suggestions">
      {suggestions.map(suggestion => {
        const { latitude, longitude } = suggestion.coordinates
        const cityID = cityIdConversor.fromLocationToId([latitude, longitude])

        return <CityOption key={cityID} option={suggestion} />
      })}
    </div>
  )
}
