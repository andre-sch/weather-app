import type { IRawCitySuggestions } from "../externals/locationAPI/data/IRawCitySuggestions"
import type { IProcessedCitySuggestions } from "../models/IProcessedCitySuggestions"

export function processCitySuggestions(
  rawSuggestions: IRawCitySuggestions
): IProcessedCitySuggestions {
  const { results } = rawSuggestions
  const processedSuggestions: IProcessedCitySuggestions = []

  results.forEach(rawSuggestion => {
    if (!rawSuggestion.city) return
    if (
      rawSuggestion.county &&
      isCountyInSuggestions(rawSuggestion.county)
    ) return

    processedSuggestions.push({
      coordinates: {
        latitude: rawSuggestion.lat,
        longitude: rawSuggestion.lon
      },
      location: {
        city: rawSuggestion.city,
        county: rawSuggestion.county,
        state: rawSuggestion.state,
        country: rawSuggestion.country
      }
    })
  })

  function isCountyInSuggestions(county: string) {
    for (const suggestion of processedSuggestions)
      if (suggestion.location.county == county)
        return true
    return false
  }

  return processedSuggestions
}

