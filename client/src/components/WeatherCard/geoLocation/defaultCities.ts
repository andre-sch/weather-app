export interface registeredCity {
  location: string,
  name: string,
  country: string
}

export const defaultCities: registeredCity[] = [
  { location: '35.69, 139.69', name: 'Tokyo', country: 'Japan' },
  { location: '-23.55, -46.63', name: 'Sao Paulo', country: 'Brazil' },
  { location: '40.71, -74.00', name: 'New York', country: 'United States' },
  { location: '51.5, -0.13', name: 'London', country: 'England' }
]
