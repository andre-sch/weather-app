export interface IRawCitySuggestions { results: IRawCitySuggestion[] }

interface IRawCitySuggestion {
  city?: string
  county?: string
  state?: string
  country: string
  lat: number
  lon: number
}
