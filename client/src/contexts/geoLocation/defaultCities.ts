export interface ICityRegistry {
  location: string,
  name: string,
  country: string
}

export const defaultCities: ICityRegistry[] = [
  { location: '35.681, 139.758', name: 'Tokyo', country: 'Japan' },
  { location: '-23.551, -46.633', name: 'São Paulo', country: 'Brazil' },
  { location: '40.713, -74.006', name: 'New York', country: 'United States' },
  { location: '51.507, -0.128', name: 'London', country: 'United Kingdom' }
]
