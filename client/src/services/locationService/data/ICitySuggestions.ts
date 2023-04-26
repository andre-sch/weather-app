export type ICitySuggestions = ICitySuggestion[]

interface ICitySuggestion {
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
