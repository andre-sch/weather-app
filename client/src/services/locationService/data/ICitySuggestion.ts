export interface ICitySuggestion {
  coordinates: { latitude: number, longitude: number }
  location: { city: string, state?: string, country: string }
}
