export type IProcessedCitySuggestions = IProcessedCitySuggestion[]

interface IProcessedCitySuggestion {
  coordinates: {
    latitude: number
    longitude: number
  }
  location: {
    city: string
    county?: string
    state?: string
    country: string
  }
}
